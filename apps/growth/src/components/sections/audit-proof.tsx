import { auditStats } from "@/content/site";
import { BlurFade } from "@/components/motion/blur-fade";
import { NumberTicker } from "@/components/motion/number-ticker";
import { SectionHeading } from "@/components/sections/section-heading";

export function AuditProof() {
  return (
    <section className="border-y border-border bg-surface/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={auditStats.headline} description={auditStats.lede} />

        <dl className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {auditStats.counters.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.08}>
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={i * 0.08}
                    className="font-display text-6xl font-light leading-none sm:text-[4.5rem]"
                  />
                  <span className="mt-3 block max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </BlurFade>
          ))}
        </dl>

        <ul className="mt-16 grid gap-4 border-t border-border pt-12 sm:grid-cols-2">
          {auditStats.findings.map((finding, i) => (
            <li key={finding}>
              <BlurFade delay={i * 0.06}>
                <p className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {finding}
                </p>
              </BlurFade>
            </li>
          ))}
        </ul>

        <BlurFade delay={0.2}>
          <p className="mt-14 max-w-4xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            On average, each business we audit is invisible to{" "}
            <span className="text-primary">{auditStats.invisibleRange}</span>{" "}
            potential clients searching for their service every single month.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
