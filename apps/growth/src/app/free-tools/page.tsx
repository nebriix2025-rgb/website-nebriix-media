import type { Metadata } from "next";
import Link from "next/link";

import { promptGroups } from "@/content/prompts";
import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { PromptPack } from "@/components/sections/prompt-pack";
import { BlurFade } from "@/components/motion/blur-fade";
import { PillLink } from "@/components/ui/pill-link";

const COUNT = promptGroups.reduce((n, g) => n + g.prompts.length, 0);

export const metadata: Metadata = {
  title: `${COUNT} Free AI Prompts for Local Businesses`,
  description:
    "Paste-ready prompts to check whether AI recommends your business, write a Google Business Profile that ranks, get reviews with substance, and build content AI can cite. Free, no sign-up.",
  alternates: { canonical: `${site.url}/free-tools` },
};

export default function FreeToolsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${COUNT} prompts to get your local business recommended by AI`,
    description:
      "Paste-ready prompts for ChatGPT, Perplexity and Gemini that show a local business where it stands with AI search and what to fix.",
    step: promptGroups.flatMap((g) =>
      g.prompts.map((p) => ({
        "@type": "HowToStep",
        name: p.title,
        text: p.outcome,
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader
        title="The Prompt Pack"
        description={`${COUNT} paste-ready prompts. Find out whether AI recommends you, then fix what it can't see. Free, no sign-up.`}
        image="/photos/insights/aeo.jpg"
        cta={{ label: "Jump to the prompts", href: "#find-out-where-you-stand" }}
      />

      <section className="pb-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <BlurFade>
            <div className="border-b border-border pb-12">
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/85">
                These are the prompts we use in the first hour of every audit. Run
                the first three and you will know more about your AI visibility
                than most agencies would tell you. Replace anything in{" "}
                <mark className="rounded-sm bg-foreground/10 px-1 font-medium text-foreground">
                  [brackets]
                </mark>{" "}
                with your own details.
              </p>
              <nav aria-label="Prompt groups" className="mt-8 flex flex-wrap gap-2">
                {promptGroups.map((g) => (
                  <Link
                    key={g.title}
                    href={`#${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                  >
                    {g.title}
                  </Link>
                ))}
              </nav>
            </div>
          </BlurFade>

          <div className="mt-16">
            <PromptPack />
          </div>

          <BlurFade>
            <div className="mt-20 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-border bg-card p-10 sm:p-14">
              <div className="max-w-xl">
                <p className="font-display text-2xl leading-snug sm:text-3xl">
                  Ran the first three and didn&rsquo;t like the answer?
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  The free audit does the full version: your ranking, your
                  competitors, the search volume you&rsquo;re missing and what
                  it&rsquo;s costing you.
                </p>
              </div>
              <PillLink href="/free-audit">Get Your Free Audit</PillLink>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
