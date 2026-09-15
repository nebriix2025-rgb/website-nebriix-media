import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/content/articles";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";

export const metadata: Metadata = {
  title: "Insights — AI Search & Local Visibility",
  description:
    "Sourced, plain-English writing on how AI assistants choose which local businesses to recommend, and what to do about it.",
  alternates: { canonical: `${site.url}/insights` },
};

export default function InsightsPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <PageHeader
        title="Insights"
        description="How AI decides who to recommend, with the sources shown. Updated as the research does."
        image="/photos/audit.jpg"
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <Link
              href={`/insights/${lead.slug}`}
              className="group grid gap-8 border-b border-border py-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16"
            >
              <div>
                <p className="text-sm text-muted-foreground">
                  {lead.category} · {formatDate(lead.date)} · {lead.readTime}
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.12] transition-opacity group-hover:opacity-80 sm:text-5xl">
                  {lead.title}
                </h2>
              </div>
              <p className="self-end text-[15px] leading-relaxed text-muted-foreground">
                {lead.description}
              </p>
            </Link>
          </BlurFade>

          <ul className="divide-y divide-border">
            {rest.map((a, i) => (
              <li key={a.slug}>
                <BlurFade delay={i * 0.05}>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="group grid gap-4 py-10 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-16"
                  >
                    <p className="text-sm text-muted-foreground">
                      {a.category}
                      <br />
                      {formatDate(a.date)} · {a.readTime}
                    </p>
                    <div>
                      <h2 className="max-w-3xl font-display text-2xl leading-snug transition-opacity group-hover:opacity-80 sm:text-3xl">
                        {a.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                        {a.description}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
