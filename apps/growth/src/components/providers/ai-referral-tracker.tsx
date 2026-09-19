"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

/**
 * Records visits that arrived from an AI assistant.
 *
 * Two signals, because the assistants behave differently: ChatGPT appends
 * `utm_source=chatgpt.com` to every link it hands a user, while Perplexity,
 * Gemini, Claude and Copilot mostly show up in `document.referrer`. Either way
 * the visit is tagged `ai_referral` in Vercel Analytics with the source and
 * the landing path, so "how many people found us through AI" becomes a filter
 * rather than a guess.
 *
 * Fires once per session so a visitor clicking around doesn't inflate it.
 */
const AI_HOSTS: Record<string, string> = {
  "chatgpt.com": "chatgpt",
  "chat.openai.com": "chatgpt",
  "perplexity.ai": "perplexity",
  "gemini.google.com": "gemini",
  "claude.ai": "claude",
  "copilot.microsoft.com": "copilot",
  "bing.com": "copilot",
  "you.com": "you",
  "duckduckgo.com": "duckassist",
  "meta.ai": "meta",
};

function detect(): string | null {
  const params = new URLSearchParams(window.location.search);
  const utm = (params.get("utm_source") ?? "").toLowerCase();
  for (const host in AI_HOSTS) if (utm.includes(host)) return AI_HOSTS[host];

  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, "");
    for (const h in AI_HOSTS) if (host === h || host.endsWith(`.${h}`)) return AI_HOSTS[h];
  } catch {
    // No referrer, or an opaque one. That's most direct traffic; ignore.
  }
  return null;
}

export function AiReferralTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const key = "nx-ai-ref";
    try {
      if (sessionStorage.getItem(key)) return;
    } catch {
      /* storage blocked — still worth tracking once */
    }

    const source = detect();
    if (!source) return;

    track("ai_referral", { source, path: pathname });
    try {
      sessionStorage.setItem(key, source);
    } catch {
      /* ignore */
    }
    // Landing-page only: pathname is read once, deliberately.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
