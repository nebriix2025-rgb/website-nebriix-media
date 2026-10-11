import type { Triage } from "@/lib/lead-triage";

/**
 * Emails a lead through Resend.
 *
 * Off unless both RESEND_API_KEY and LEAD_NOTIFY_TO are set. Returns true only
 * when Resend accepted the message, so the caller can tell the visitor the
 * truth about whether their enquiry actually went anywhere.
 *
 * `Reply-To` is the lead's own address, so replying from the inbox reaches the
 * customer rather than us.
 */

const ENDPOINT = "https://api.resend.com/emails";

/** Fields worth putting in the subject line, in order of preference. */
const SUBJECT_FIELDS = ["business-name", "your-name", "email"];

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;",
  );
}

function subject(
  kind: string,
  values: Record<string, string>,
  triage: Triage | null,
) {
  const who =
    SUBJECT_FIELDS.map((f) => values[f]).find(Boolean) ?? "New enquiry";
  const tail = triage?.urgencyLabel ? ` — ${triage.urgencyLabel}` : "";
  return `[${kind}] ${who}${tail}`;
}

function body(
  kind: string,
  values: Record<string, string>,
  triage: Triage | null,
): { html: string; text: string } {
  const rows = Object.entries(values).filter(([, v]) => v);

  const textLines = [
    `${kind} — nebriix.com`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
  ];

  let html =
    `<h2 style="font:600 16px system-ui;margin:0 0 16px">${esc(kind)}</h2>` +
    `<table style="font:14px system-ui;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 16px 4px 0;color:#666;vertical-align:top">${esc(k)}</td>` +
          `<td style="padding:4px 0">${esc(v)}</td></tr>`,
      )
      .join("") +
    `</table>`;

  if (triage) {
    const t: [string, string][] = [
      ["Service", triage.service],
      ["Urgency", triage.urgencyLabel ?? String(triage.urgency)],
      ["Fit", triage.fitLabel ?? String(triage.fit)],
      [
        "Junk probability",
        triage.junkProbability === null
          ? "unknown"
          : `${Math.round(triage.junkProbability * 100)}%`,
      ],
    ];
    textLines.push(
      "",
      `-- triage (${triage.model}) --`,
      ...t.map(([k, v]) => `${k}: ${v}`),
    );
    html +=
      `<h3 style="font:600 13px system-ui;margin:24px 0 8px;color:#666">` +
      `Triage · ${esc(triage.model)}</h3>` +
      `<table style="font:14px system-ui;border-collapse:collapse">` +
      t
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 16px 4px 0;color:#666">${esc(k)}</td>` +
            `<td style="padding:4px 0">${esc(v)}</td></tr>`,
        )
        .join("") +
      `</table>` +
      `<p style="font:12px system-ui;color:#999;margin-top:12px">` +
      `Automated classification — advisory only, not yet calibrated against real leads.</p>`;
  }

  return { html, text: textLines.join("\n") };
}

export async function sendLeadEmail(
  kind: string,
  values: Record<string, string>,
  triage: Triage | null,
): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_TO;
  if (!key || !to) return false;

  const { html, text } = body(kind, values, triage);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM ?? "Nebriix <leads@nebriix.com>",
        to: to
          .split(",")
          .map((a) => a.trim())
          .filter(Boolean),
        ...(values.email ? { reply_to: values.email } : {}),
        subject: subject(kind, values, triage),
        html,
        text,
      }),
    });

    if (!res.ok) {
      console.error(
        `[lead-email] resend ${res.status}`,
        await res.text().catch(() => ""),
      );
      return false;
    }
    return true;
  } catch (error) {
    console.error("[lead-email] send failed", error);
    return false;
  }
}
