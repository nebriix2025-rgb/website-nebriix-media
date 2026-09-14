"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingDown } from "lucide-react";

import { NumberTicker } from "@/components/motion/number-ticker";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";
import { PillLink } from "@/components/ui/pill-link";
import { cn } from "@/lib/utils";

/**
 * Anonymised sample of the audit deliverable, per the brief's "screenshots of
 * real audits (anonymized)".
 *
 * The business and figures are illustrative and labelled as such on the page —
 * presenting invented numbers as a real client's results would be exactly the
 * kind of claim this company positions itself against.
 */

const REVIEWS = [
  { name: "Competitor A", count: 412, them: false },
  { name: "Competitor B", count: 287, them: false },
  { name: "Competitor C", count: 196, them: false },
  { name: "This business", count: 7, them: true },
];

const MAX_REVIEWS = Math.max(...REVIEWS.map((r) => r.count));

const RANKINGS = [
  { term: '"dentist denver"', rank: null, volume: 4400 },
  { term: '"cosmetic dentist denver"', rank: null, volume: 1900 },
  { term: '"emergency dentist denver"', rank: null, volume: 2400 },
  { term: '"bright smile dental"', rank: 1, volume: 70 },
];

export function AuditReportMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="This is what you get back."
          description="A sample audit. Your ranking, your competitors, the search volume you are missing, and what it is costing you — before we ask for anything."
        />

        <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Ranking table */}
          <BlurFade className="h-full">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl tracking-tight">
                  Where you rank
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Sample
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {RANKINGS.map((row, i) => (
                  <motion.li
                    key={row.term}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.09, duration: 0.5 }}
                    className="flex items-center justify-between gap-4 border-b border-border pb-3"
                  >
                    <span className="truncate font-mono text-xs text-muted-foreground">
                      {row.term}
                    </span>
                    <span className="flex shrink-0 items-center gap-4">
                      <span className="font-mono text-xs text-muted-foreground">
                        {row.volume.toLocaleString()}/mo
                      </span>
                      <span
                        className={cn(
                          "w-24 text-right font-mono text-xs",
                          row.rank ? "text-primary" : "text-destructive",
                        )}
                      >
                        {row.rank ? `Position ${row.rank}` : "Not ranking"}
                      </span>
                    </span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Ranking only for your own name means only people who already know
                you can find you. That is not discovery.
              </p>
            </div>
          </BlurFade>

          {/* Review gap chart */}
          <BlurFade delay={0.1} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl tracking-tight">
                Review gap
              </h3>

              <ul className="mt-7 space-y-4">
                {REVIEWS.map((row, i) => (
                  <li key={row.name}>
                    <div className="flex items-baseline justify-between gap-3 text-xs">
                      <span
                        className={cn(
                          row.them ? "text-destructive" : "text-muted-foreground",
                        )}
                      >
                        {row.name}
                      </span>
                      <span
                        className={cn(
                          "font-mono",
                          row.them ? "text-destructive" : "text-foreground",
                        )}
                      >
                        {row.count}
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView
                            ? { width: `${(row.count / MAX_REVIEWS) * 100}%` }
                            : {}
                        }
                        transition={{
                          delay: 0.2 + i * 0.12,
                          duration: 0.9,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={cn(
                          "h-full rounded-full",
                          row.them ? "bg-destructive" : "bg-primary",
                        )}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Under 20 reviews rarely makes the map pack for competitive terms.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* Revenue math */}
        <BlurFade delay={0.15}>
          <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-8 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div>
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-destructive">
                  <TrendingDown className="size-4" />
                  The revenue math
                </p>

                <div className="mt-6 flex flex-wrap gap-x-14 gap-y-8">
                  <Metric value={8700} label="Monthly searches missed" />
                  <Metric value={62} label="Est. clients lost per month" />
                  <Metric
                    value={31000}
                    prefix="$"
                    label="Est. monthly revenue gap"
                  />
                </div>
              </div>

              <PillLink
                href="/free-audit"
              >
                Run mine</PillLink>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              Illustrative figures for a sample dental practice in Denver. Your
              audit uses your real search volume, your real competitors and your
              own average client value.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  prefix,
}: {
  value: number;
  label: string;
  prefix?: string;
}) {
  return (
    <div>
      <NumberTicker
        value={value}
        prefix={prefix}
        className="font-display text-4xl tracking-tight text-destructive sm:text-5xl"
      />
      <span className="mt-2 block text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
