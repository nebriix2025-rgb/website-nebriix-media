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
 * Everything here fails open and returns null. A classifier is a convenience
 * for us; a lead is revenue. Nothing in this file may ever be the reason a
 * form submission does not arrive.
 */

const ENDPOINT = "https://api.typesafe.ai/v1/systemone";
const MODEL = "jev-latest";
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

export function jevConfigured(): boolean {
  return Boolean(process.env.JEV_API_KEY);
}

export async function jevDecide(
  state: string,
  questions: Record<string, Question>,
): Promise<JevResponse | null> {
  const key = process.env.JEV_API_KEY;
  if (!key) return null;

  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model: MODEL, state, questions }),
      signal: abort.signal,
    });

    if (!res.ok) {
      console.error(`[jev] ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as JevResponse;
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
