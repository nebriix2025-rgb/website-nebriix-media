

import { finalCta } from "@/content/site";
import { Hero } from "@/components/sections/hero";
import { AiAnswerSection } from "@/components/sections/ai-answer-section";
import { Problem } from "@/components/sections/problem";
import { InvisibleBand } from "@/components/sections/invisible-band";
import { ServiceCards } from "@/components/sections/service-cards";
import { AuditProof } from "@/components/sections/audit-proof";
import { AuditReportMock } from "@/components/sections/audit-report-mock";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BeforeAfter } from "@/components/sections/before-after";
import { VisibilityCheck } from "@/components/sections/visibility-check";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { SectionHeading } from "@/components/sections/section-heading";
import { BlurFade } from "@/components/motion/blur-fade";
import { PillLink } from "@/components/ui/pill-link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AiAnswerSection />
      <Problem />
      <InvisibleBand />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              title="What we do."
              description="Seven services. One outcome: more clients calling, booking, and paying."
            />
            <PillLink
              href="/services" variant="ghost"
            >
              All services</PillLink>
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
      <InsightsPreview />

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
              <PillLink
                href="/free-audit"
              >
                {finalCta.cta}</PillLink>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
