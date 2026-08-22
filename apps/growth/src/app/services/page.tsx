import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { ServiceCards } from "@/components/sections/service-cards";
import { BlurFade } from "@/components/motion/blur-fade";
import { ButtonLink } from "@/components/ui/button-link";

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
        title="Every service ties back to one outcome."
        description="More clients calling, booking, and paying. We do not sell posts. We build the systems that make you findable and then capture the demand."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ServiceCards />

          <BlurFade delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-primary/25 bg-primary/5 p-10 sm:p-14">
              <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                Not sure which you need? Start with the audit. It tells you.
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
