import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { about, team, proofStats } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { Marquee } from "@/components/motion/marquee";
import { NumberTicker } from "@/components/motion/number-ticker";
import { SectionHeading } from "@/components/sections/section-heading";
import { StackMarquee } from "@/components/sections/stack-marquee";
import { ButtonLink } from "@/components/ui/button-link";
import { DotGrid } from "@/components/fx/dot-grid";

export const metadata: Metadata = {
  title: "About Us",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={about.heading}
        description={about.lead}
      />

      <section className="relative overflow-hidden border-y border-border bg-surface/20 py-20">
        <Marquee className="mask-fade-x" speed={38} gap="3rem">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-4xl tracking-tight text-muted-foreground sm:text-6xl"
            >
              {about.marquee}
              <span className="mx-8 text-primary" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <DotGrid className="opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <p className="max-w-4xl font-display text-3xl leading-[1.15] tracking-tight sm:text-5xl">
              {about.support}
            </p>
          </BlurFade>

          <dl className="mt-20 grid gap-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {proofStats.map((stat, i) => (
              <BlurFade key={stat.label} delay={i * 0.08}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <NumberTicker
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix}
                    delay={i * 0.08}
                    className="font-display text-5xl tracking-tight text-primary"
                  />
                  <span className="mt-3 block max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </BlurFade>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            title="Meet the founders."
            description="A small senior team — strategy, engineering, content and design under one roof."
          />

          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <li key={member.role} className="bg-background">
                <BlurFade delay={i * 0.06} className="h-full">
                  <div className="group h-full p-8">
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-6 font-display text-2xl tracking-tight">
                      {member.name}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StackMarquee />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-primary/25 bg-primary/5 p-10 sm:p-14">
              <p className="max-w-2xl font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl">
                {about.closing}
              </p>
              <ButtonLink
                href="/contact"
                className="h-13 rounded-full px-8 text-base"
              >
                Book a Free Strategy Call
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
