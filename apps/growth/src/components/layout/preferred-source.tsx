"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Google's "Add as a preferred source" button.
 *
 * A reader who marks us as a preferred source makes our content more likely to
 * surface for them in Top Stories, and highlighted in AI Mode and AI Overviews.
 * For an agency selling AI visibility, that is the product demonstrated on
 * itself.
 *
 * Implementation per Google's Search Central docs: a script loaded in
 * src/app/layout.tsx renders any element carrying the
 * `google-add-preferred-source-btn` attribute.
 *
 * Two mount points rather than one because `data-theme` is read when the button
 * renders and this site has a theme toggle. Re-rendering a third-party widget
 * on every toggle is more fragile than letting CSS reveal the right one.
 *
 * WHY THE VISIBILITY CHECK: Google's script renders nothing at all when the
 * domain is not eligible — verified against a production build, where all mount
 * points stayed empty. Without this check the surrounding card would ship a
 * heading and a paragraph above a blank space, which is the exact failure we
 * published an article about. So the component asks whether Google actually
 * drew anything, and removes itself if not. It never assumes the button is
 * there.
 *
 * Two things worth remembering:
 *
 *   1. Google states the button is optional — a site can be chosen as a
 *      preferred source without it. It is a convenience for readers, not a
 *      ranking mechanism, and must never be described as one.
 *   2. For the preferred badge in AI Mode and AI Overviews, the site must be
 *      included in "Search generative AI features" in Search Console. That is a
 *      setting, not code, and nothing here can verify it.
 */

/** Google's attribute is not in React's JSX typings; pass it through as data. */
const MOUNT = { "google-add-preferred-source-btn": "" };

/** Google's script is async; give it a reasonable window before giving up. */
const CHECK_MS = [600, 1500, 4000];

type Props = {
  className?: string;
  /** Wraps the button in the article card. Hidden entirely if nothing renders. */
  framed?: boolean;
};

export function PreferredSource({ className, framed = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const timers = CHECK_MS.map((ms) =>
      setTimeout(() => {
        const mounts = ref.current?.querySelectorAll(
          "[google-add-preferred-source-btn]",
        );
        if (!mounts) return;
        for (const m of mounts) {
          if (m.childNodes.length > 0) {
            setRendered(true);
            return;
          }
        }
      }, ms),
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const button = (
    <div ref={ref} className={framed ? undefined : className}>
      <div className="hidden dark:block">
        <div {...MOUNT} data-theme="dark" data-lang="en" />
      </div>
      <div className="block dark:hidden">
        <div {...MOUNT} data-theme="light" data-lang="en" />
      </div>
    </div>
  );

  if (!framed) {
    // Bare button (the footer). An empty wrapper collapses to nothing on its
    // own, so it can stay mounted whether or not Google drew into it.
    return button;
  }

  return (
    <div className={rendered ? className : "hidden"} aria-hidden={!rendered}>
      <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
        <p className="font-display text-xl leading-snug">
          Want this research in your Google results?
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Mark us as a preferred source and our reporting is more likely to reach
          you in Top Stories, AI Mode and AI Overviews.
        </p>
        <div className="mt-6">{button}</div>
      </div>
    </div>
  );
}
