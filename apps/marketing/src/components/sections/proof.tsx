import Link from "next/link";

import { proofStats } from "@/content/site";
import { NumberTicker } from "@/components/motion/number-ticker";
import { BlurFade } from "@/components/motion/blur-fade";

export function Proof() {
  return (
    <section className="border-y border-border bg-surface/20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <BlurFade>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Measured outcomes
          </p>
        </BlurFade>

        <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.08}>
              {/* Each figure links to the case study it came from. */}
              <Link href={`/work/${stat.source}`} className="group block">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <NumberTicker
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix}
                    delay={i * 0.08}
                    className="font-display text-5xl tracking-tight text-primary transition-opacity group-hover:opacity-80 sm:text-6xl"
                  />
                  <span className="mt-3 block max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </Link>
            </BlurFade>
          ))}
        </dl>
      </div>
    </section>
  );
}
