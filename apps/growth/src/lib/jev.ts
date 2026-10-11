/**
 * Minimal Jev client.
 *
 * Jev (TypeSafe AI) is a decision model: it returns typed values with
 * probabilities rather than prose. It answers three shapes of question —
 * `choice` (pick one), `score` (rate against a rubric) and `noul` (yes/no as a
 * probability) — in roughly 70–500ms, at about $0.042 per million input
 * tokens with output free.
 *
 * There is no official npm package; TypeSafe's own docs say to call the
 * endpoint directly. Schema verified against docs.typesafe.ai/api and
 * Cloudflare's Workers AI model page, which agree.
 *
 * Two providers speak this System One format, and whichever is configured is
 * used (TypeSafe wins if both are):
 *
 *   JEV_API_KEY                                 → TypeSafe, jev-latest
 *   CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_AI_TOKEN → Workers AI, clef-flash
 *
 * Cloudflare's clef-flash is the free option: Workers AI's daily allocation
 * (10,000 neurons, about 2.9M clef-flash input tokens) covers a lead form with
 * room to spare. TypeSafe needs prepaid credit before it issues a key.
 *
 * Confirmed working on 12 October 2026 against a real submission through the
 * live contact form: clef-flash runs on the Workers AI free tier with no
 * billing configured, which Cloudflare's docs leave ambiguous for some models.
 *
 * Everything here fails open and returns null. A classifier is a convenience
 * for us; a lead is revenue. Nothing in this file may ever be the reason a
 * form submission does not arrive.
 */

const TYPESAFE_ENDPOINT = "https://api.typesafe.ai/v1/systemone";
const TYPESAFE_MODEL = "jev-latest";
const CLOUDFLARE_MODEL = "clef-flash";
/** Jev answers in well under a second; past this we are better off without it. */
const TIMEOUT_MS = 4000;

type Question =
  | {
      type: "noul";
      instructions: string;
      criteria?: Record<"true" | "false", string>;
    }
  | {
      type: "choice";
      instructions: string;
      criteria: Record<string, string | null>;
    }
  | { type: "score"; instructions: string; criteria: string[] };

type Answer =
  | { type: "noul"; noul: number }
  | {
      type: "choice";
      choice: string;
      probabilities: Record<string, number>;
      confidence: number;
    }
  | {
      type: "score";
      score: number;
      legend: Record<string, string>;
      probabilities: Record<string, number>;
      confidence: number;
    };

export type JevResponse = {
  model: string;
  answers: Record<string, Answer>;
  usage: { input_tokens: number; output_tokens: number };
};

type Provider = { url: string; key: string; model: string };

function provider(): Provider | null {
  const jevKey = process.env.JEV_API_KEY;
  if (jevKey) {
    return { url: TYPESAFE_ENDPOINT, key: jevKey, model: TYPESAFE_MODEL };
  }

  const account = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_AI_TOKEN;
  if (account && token) {
    return {
      url: `https://api.cloudflare.com/client/v4/accounts/${account}/ai/run/@cf/cloudflare/${CLOUDFLARE_MODEL}`,
      key: token,
      model: CLOUDFLARE_MODEL,
    };
  }

  return null;
}

export function jevConfigured(): boolean {
  return provider() !== null;
}

export async function jevDecide(
  state: string,
  questions: Record<string, Question>,
): Promise<JevResponse | null> {
  const p = provider();
  if (!p) return null;

  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(p.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${p.key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: p.model, state, questions }),
      signal: abort.signal,
    });

    if (!res.ok) {
      console.error(`[jev] ${p.model} ${res.status} ${res.statusText}`);
      return null;
    }

    // Workers AI wraps every REST reply as { result, success, errors };
    // TypeSafe returns the response bare. Accept either.
    const data = (await res.json()) as JevResponse | { result?: JevResponse };
    const body = "answers" in data ? data : data.result;
    return body?.answers ? body : null;
  } catch (error) {
    // Includes the timeout abort. Deliberately swallowed.
    console.error("[jev] decide failed", error);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Narrowing helpers — the API returns a tagged union per question. */
export function noul(r: JevResponse | null, key: string): number | null {
  const a = r?.answers[key];
  return a?.type === "noul" ? a.noul : null;
}

export function choice(
  r: JevResponse | null,
  key: string,
): { value: string; confidence: number } | null {
  const a = r?.answers[key];
  return a?.type === "choice"
    ? { value: a.choice, confidence: a.confidence }
    : null;
}

export function score(
  r: JevResponse | null,
  key: string,
): { value: number; label: string | null; confidence: number } | null {
  const a = r?.answers[key];
  if (a?.type !== "score") return null;
  // `score` can fall between levels; the legend is keyed by level number.
  const nearest = String(Math.round(a.score));
  return {
    value: a.score,
    label: a.legend[nearest] ?? null,
    confidence: a.confidence,
  };
}
