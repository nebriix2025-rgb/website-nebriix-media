import type { Metadata } from "next";

import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { ServiceCards } from "@/components/sections/service-cards";
import { BlurFade } from "@/components/motion/blur-fade";
import { PillLink } from "@/components/ui/pill-link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI search optimization, Google Business Profile, local SEO, video, social, lead generation and reviews — every service ties back to one outcome: more clients.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="What We Do"
        description="From being found, to being chosen, to the systems that run the work. One outcome: more clients."
        image="/photos/services.jpg"
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ServiceCards />

          <BlurFade delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-primary/25 bg-primary/5 p-10 sm:p-14">
              <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                Not sure which you need? Start with the audit. It tells you.
              </p>
              <PillLink
                href="/free-audit"
              >
                Get Your Free Audit</PillLink>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
