import type { Metadata } from "next";
import Link from "next/link";

import { articles } from "@/content/articles";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { RevealImage } from "@/components/motion/reveal-image";

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
              className="group grid gap-8 border-b border-border py-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
            >
              <RevealImage
                src={lead.image}
                alt={lead.imageAlt}
                className="aspect-[16/10]"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="flex flex-col justify-end">
                <p className="text-sm text-muted-foreground">
                  {lead.category} · {formatDate(lead.date)} · {lead.readTime}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-[1.12] transition-opacity group-hover:opacity-80 sm:text-4xl">
                  {lead.title}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  {lead.description}
                </p>
              </div>
            </Link>
          </BlurFade>

          <ul className="divide-y divide-border">
            {rest.map((a, i) => (
              <li key={a.slug}>
                <BlurFade delay={i * 0.05}>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="group grid gap-6 py-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-14"
                  >
                    <RevealImage
                      src={a.image}
                      alt={a.imageAlt}
                      className="aspect-[4/3]"
                      sizes="(max-width: 1024px) 100vw, 18rem"
                      parallax={6}
                    />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {a.category} · {formatDate(a.date)} · {a.readTime}
                      </p>
                      <h2 className="mt-3 max-w-3xl font-display text-2xl leading-snug transition-opacity group-hover:opacity-80 sm:text-3xl">
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
