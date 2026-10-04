"use client";

import { useEffect } from "react";

/**
 * Product analytics, off until NEXT_PUBLIC_POSTHOG_KEY is set.
 *
 * Vercel Analytics answers "how many people came and from where". This answers
 * "what did they do once they were here" — which pages a single visitor reads
 * in order, where they stop scrolling, which CTA they click before leaving.
 * That session-level behaviour is what a follow-up classifier needs later; a
 * pageview count can't be sorted into archetypes.
 *
 * The library is imported inside the effect rather than at module scope, so
 * with no key configured the bundle is never downloaded at all — an unset
 * integration should cost a visitor nothing.
 *
 * Two deliberate choices in the config:
 *
 * `cookieless_mode: "always"` — PostHog sets no cookies and touches no local
 * storage; identity is a privacy-preserving hash computed server side. That
 * keeps the site out of consent-banner territory for EU and GCC visitors,
 * which matters more to us than cross-session identity does. It must also be
 * switched on in the PostHog project settings or events are discarded on
 * ingest — see the README.
 *
 * `api_host: "/ingest"` — requests go to our own domain and are rewritten to
 * PostHog by next.config.ts. Analytics hostnames are on every blocklist, so a
 * direct connection silently loses the privacy-conscious visitors, who are
 * disproportionately the ones researching an agency.
 */
export function PostHogAnalytics() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

  useEffect(() => {
    if (!key) return;
    let cancelled = false;

    void import("posthog-js").then(({ default: posthog }) => {
      if (cancelled) return;

      posthog.init(key, {
        // Modern defaults: SPA pageviews fire on history change, so App Router
        // navigations are captured without a usePathname effect of our own.
        defaults: "2026-08-30",
        api_host: "/ingest",
        ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.posthog.com",
        cookieless_mode: "always",
        // Only build a person profile once someone identifies themselves by
        // submitting a form. Anonymous readers stay anonymous.
        person_profiles: "identified_only",
        // Strip advertising identifiers (gclid, fbclid and friends) and any
        // email or phone number that lands in a query string out of captured
        // URLs. Session recording stays governed by the PostHog project
        // setting rather than pinned here, so it can be turned off without a
        // deploy.
        mask_personal_data_properties: true,
        custom_personal_data_properties: ["email", "phone"],
      });
    });

    return () => {
      cancelled = true;
    };
  }, [key]);

  return null;
}
