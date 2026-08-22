import type { Metadata } from "next";

import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your data.`,
  robots: { index: false, follow: true },
};

/**
 * The live site still serves WordPress's unedited default policy, including the
 * "Suggested text:" editorial scaffolding. This replaces it with a description
 * of what this site actually does — but it is not legal advice and should be
 * reviewed by counsel before launch.
 */
const sections = [
  {
    heading: "Who we are",
    body: [
      `${site.name} is an AI agency providing automation, content production and lead generation services. Our website address is ${site.url}.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "When you submit our contact form we collect the name, email address, subject and message you provide. We use this solely to respond to your enquiry and, if we begin working together, to administer that relationship.",
      "We collect anonymised usage analytics — pages viewed, approximate region, device type and performance timings — through Vercel Analytics and Vercel Speed Insights. These do not use cookies and do not identify you personally.",
    ],
  },
  {
    heading: "What we don't do",
    body: [
      "We do not sell your data. We do not share it with advertisers. We do not use advertising or cross-site tracking cookies on this website.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Contact enquiries are retained for as long as needed to respond and to maintain a record of our correspondence, and are deleted on request. Analytics data is aggregated and retained according to Vercel's standard retention policy.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `You can ask us what personal data we hold about you, request a copy, ask us to correct it, or ask us to delete it. Email ${site.email} and we will respond within one month.`,
    ],
  },
  {
    heading: "Third parties",
    body: [
      "This site is hosted by Vercel. Contact form submissions are delivered to our internal workflow tooling. Each of these providers processes data on our behalf under their own terms.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy can be sent to ${site.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="What we collect, why we collect it, and what you can ask us to do about it."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {sections.map((section, i) => (
            <BlurFade key={section.heading} delay={i * 0.04}>
              <div className="border-t border-border py-10">
                <h2 className="font-display text-2xl tracking-tight">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}
