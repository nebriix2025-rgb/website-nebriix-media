import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/**
 * Crawlers used by the answer engines this site wants to appear in, named
 * explicitly. A bare `*` already permits them, but several of these bots
 * check for their own token, and naming them documents intent: this content
 * is meant to be read, quoted and cited by assistants.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — training and ChatGPT browsing
  "OAI-SearchBot", // OpenAI — ChatGPT search results
  "ChatGPT-User", // OpenAI — live fetches on a user's behalf
  "ClaudeBot", // Anthropic — Claude
  "Claude-User", // Anthropic — live fetches on a user's behalf
  "anthropic-ai", // Anthropic — legacy token
  "PerplexityBot", // Perplexity
  "Perplexity-User", // Perplexity — live fetches
  "Google-Extended", // Google — Gemini and AI Overviews grounding
  "Applebot-Extended", // Apple — Siri / Apple Intelligence
  "meta-externalagent", // Meta — Meta AI, Muse
  "Amazonbot", // Amazon — Alexa
  "DuckAssistBot", // DuckDuckGo AI
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
