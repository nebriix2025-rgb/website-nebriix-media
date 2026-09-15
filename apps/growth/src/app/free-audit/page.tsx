import type { Metadata } from "next";
import { Check } from "lucide-react";

import { audit, auditStats, site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { AuditForm } from "@/components/forms/audit-form";

export const metadata: Metadata = {
  title: "Free Visibility Audit",
  description:
    "Find out how many clients you are losing to competitors who show up online. We audit your Google ranking, reviews, website, social media and AI visibility. Free.",
  alternates: { canonical: `${site.url}/free-audit` },
};

export default function FreeAuditPage() {
  return (
    <>
      {/* The form is the CTA on this page, so the pill scrolls to it. */}
      <PageHeader
        title="Your Free Visibility Audit"
        description={audit.sub}
        image="/photos/audit.jpg"
        cta={{ label: "Start the audit", href: "#audit-form" }}
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 border-t border-border pt-16 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
            <div>
              <BlurFade>
                <h2 className="font-display text-2xl tracking-tight">
                  What you get
                </h2>
                <ul className="mt-8 space-y-4">
                  {audit.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </BlurFade>

              <BlurFade delay={0.15}>
                <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We have run this audit for{" "}
                    <span className="text-primary">
                      {auditStats.counters[0].value}+
                    </span>{" "}
                    local businesses. Every one was invisible for their
                    non-branded search terms. Most were losing{" "}
                    {auditStats.invisibleRange} potential clients a month.
                  </p>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={0.1}>
              <div id="audit-form" className="scroll-mt-28">
                <AuditForm />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}
