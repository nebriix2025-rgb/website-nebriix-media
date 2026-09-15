import Link from "next/link";

import { articles } from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";
import { PillLink } from "@/components/ui/pill-link";

/** Three latest articles. Internal links from the home page to the pieces that target the ranking queries. */
export function InsightsPreview() {
  const latest = articles.slice(0, 3);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            title="Insights"
            description="How AI decides who to recommend — with the sources shown."
          />
          <PillLink href="/insights" variant="ghost" size="sm">
            All insights
          </PillLink>
        </div>

        <ul className="mt-14 divide-y divide-border border-t border-border">
          {latest.map((a, i) => (
            <li key={a.slug}>
              <BlurFade delay={i * 0.06}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group grid gap-3 py-8 lg:grid-cols-[minmax(0,12rem)_1fr] lg:gap-12"
                >
                  <p className="text-sm text-muted-foreground">
                    {a.category} · {formatDate(a.date)}
                  </p>
                  <h3 className="max-w-3xl font-display text-xl leading-snug transition-opacity group-hover:opacity-80 sm:text-2xl">
                    {a.title}
                  </h3>
                </Link>
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
