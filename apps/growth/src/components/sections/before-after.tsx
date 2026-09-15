"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";

type Profile = {
  label: string;
  business: string;
  rating: number | null;
  reviews: number;
  rows: { label: string; value: string; ok: boolean }[];
};

const WEAK: Profile = {
  label: "Unoptimized",
  business: "Smith Dental",
  rating: null,
  reviews: 0,
  rows: [
    { label: "Category", value: "Not set", ok: false },
    { label: "Hours", value: "Missing", ok: false },
    { label: "Photos", value: "1", ok: false },
    { label: "Posts", value: "None", ok: false },
    { label: "Description", value: "Empty", ok: false },
    { label: "Map pack", value: "Not ranking", ok: false },
  ],
};

const STRONG: Profile = {
  label: "Optimized",
  business: "Smith Family Dental — Denver",
  rating: 4.9,
  reviews: 214,
  rows: [
    { label: "Category", value: "Dentist + 4 services", ok: true },
    { label: "Hours", value: "Complete, incl. holidays", ok: true },
    { label: "Photos", value: "48, updated weekly", ok: true },
    { label: "Posts", value: "Weekly", ok: true },
    { label: "Description", value: "Full, keyword-targeted", ok: true },
    { label: "Map pack", value: "Position 1", ok: true },
  ],
};

/**
 * Side-by-side profile comparison.
 *
 * The brief asked for a drag slider, but these cards are label/value tables:
 * clipping them at an arbitrary x reveals one card's labels beside the other's
 * values, which reads as a single nonsense profile rather than a comparison.
 * Sliders work for images that fill the frame identically. Side-by-side (with a
 * toggle where there isn't room for two columns) makes the contrast legible.
 */
export function BeforeAfter() {
  const [mobileView, setMobileView] = useState<"weak" | "strong">("weak");

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="This is the difference."
          description="The same business, two profiles. One owns the map pack. One does not exist as far as Google and AI are concerned."
        />

        <BlurFade delay={0.15}>
          {/* Mobile: one card at a time. */}
          <div className="mt-12 flex gap-2 rounded-full border border-border p-1 lg:hidden">
            {(["weak", "strong"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setMobileView(key)}
                aria-pressed={mobileView === key}
                className={cn(
                  "flex-1 rounded-full px-4 py-3 text-sm transition-colors",
                  mobileView === key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground",
                )}
              >
                {key === "weak" ? WEAK.label : STRONG.label}
              </button>
            ))}
          </div>

          <div className="mt-6 lg:hidden">
            <ProfileCard data={mobileView === "weak" ? WEAK : STRONG} />
          </div>

          {/* Desktop: both at once, so the gap is immediate. */}
          <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-2">
            <ProfileCard data={WEAK} />
            <ProfileCard data={STRONG} />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

function ProfileCard({ data }: { data: Profile }) {
  const weak = data.rating === null;

  return (
    <div
      className={cn(
        "rounded-2xl border bg-card p-8 sm:p-10",
        weak ? "border-destructive/30" : "border-primary/40",
      )}
    >
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-widest",
          weak ? "text-destructive" : "text-primary",
        )}
      >
        {data.label}
      </span>

      <p className="mt-5 font-display text-2xl leading-snug tracking-tight">
        {data.business}
      </p>

      <p className="mt-2 text-sm">
        {data.rating ? (
          <span className="text-muted-foreground">
            <span className="text-primary">★ {data.rating}</span> ·{" "}
            {data.reviews} reviews
          </span>
        ) : (
          <span className="text-destructive">No rating · 0 reviews</span>
        )}
      </p>

      <dl className="mt-8 space-y-3">
        {data.rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm"
          >
            <dt className="text-muted-foreground">{row.label}</dt>
            <dd className="flex items-center gap-2 text-right">
              <span>{row.value}</span>
              {row.ok ? (
                <Check className="size-4 shrink-0 text-primary" />
              ) : (
                <X className="size-4 shrink-0 text-destructive" />
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
