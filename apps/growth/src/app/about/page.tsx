import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { about, industries, keyPhrases, site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { Marquee } from "@/components/motion/marquee";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are not another social media agency. We audit every business before we pitch, show them the revenue they are losing, then build the system to capture it.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={about.headline}
        description={keyPhrases.leads}
      />

      <section className="border-y border-border bg-surface/20 py-16">
        <Marquee className="mask-fade-x" speed={40} gap="3rem">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-3xl tracking-tight text-muted-foreground sm:text-5xl"
            >
              {keyPhrases.math}
              <span className="mx-8 text-primary" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {about.story.map((paragraph, i) => (
            <BlurFade key={paragraph} delay={i * 0.05}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground first:mt-0">
                {paragraph}
              </p>
            </BlurFade>
          ))}

          <BlurFade delay={0.2}>
            <p className="mt-12 border-l-2 border-primary pl-6 font-display text-xl leading-relaxed tracking-tight sm:text-2xl">
              {keyPhrases.evidence}
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading title="What we stand on." />

          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {about.values.map((value, i) => (
              <li key={value.title} className="bg-background">
                <BlurFade delay={i * 0.07} className="h-full">
                  <div className="h-full p-8">
                    <span className="font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 font-display text-xl tracking-tight">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {value.body}
                    </p>
                  </div>
                </BlurFade>
              </li>
            ))}
          </ul>

          <BlurFade delay={0.2}>
            <div className="mt-16 rounded-2xl border border-border bg-surface/40 p-10">
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Who we work with
              </h2>
              <p className="mt-5 font-display text-2xl leading-snug tracking-tight">
                {industries.join(" · ")}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                If your business depends on local clients finding you, we can help.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-primary/25 bg-primary/5 p-10 sm:p-14">
              <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                We show you the math before we ask for a dollar.
              </p>
              <ButtonLink
                href="/free-audit"
                className="h-13 rounded-full px-8 text-base"
              >
                Get Your Free Audit
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
