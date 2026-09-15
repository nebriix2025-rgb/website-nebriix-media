import Link from "next/link";

import { articles } from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { BlurFade } from "@/components/motion/blur-fade";
import { RevealImage } from "@/components/motion/reveal-image";
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

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {latest.map((a, i) => (
            <li key={a.slug}>
              <BlurFade delay={i * 0.08} className="h-full">
                <Link href={`/insights/${a.slug}`} className="group block h-full">
                  <RevealImage
                    src={a.image}
                    alt={a.imageAlt}
                    className="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    parallax={6}
                  />
                  <p className="mt-5 text-sm text-muted-foreground">
                    {a.category} · {formatDate(a.date)}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug transition-opacity group-hover:opacity-80 sm:text-2xl">
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
