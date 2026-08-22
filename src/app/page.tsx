import { ArrowUpRight } from "lucide-react";

import { finalCta } from "@/content/site";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { InvisibleBand } from "@/components/sections/invisible-band";
import { ServiceCards } from "@/components/sections/service-cards";
import { AuditProof } from "@/components/sections/audit-proof";
import { AuditReportMock } from "@/components/sections/audit-report-mock";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BeforeAfter } from "@/components/sections/before-after";
import { VisibilityCheck } from "@/components/sections/visibility-check";
import { SectionHeading } from "@/components/sections/section-heading";
import { BlurFade } from "@/components/motion/blur-fade";
import { ButtonLink } from "@/components/ui/button-link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <InvisibleBand />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              title="What we do."
              description="Seven services. One outcome: more clients calling, booking, and paying."
            />
            <ButtonLink
              href="/services"
              variant="outline"
              className="h-11 rounded-full px-5"
            >
              All services
              <ArrowUpRight className="size-4" />
            </ButtonLink>
          </div>

          <div className="mt-14">
            <ServiceCards />
          </div>
        </div>
      </section>

      <AuditProof />
      <AuditReportMock />
      <BeforeAfter />
      <HowItWorks />
      <VisibilityCheck />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <BlurFade>
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {finalCta.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              {finalCta.sub}
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLink
                href="/free-audit"
                className="h-13 rounded-full px-8 text-base"
              >
                {finalCta.cta}
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
