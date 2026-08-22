import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { stories } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { SpotlightCard } from "@/components/motion/spotlight-card";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Field notes on AI automation, lead generation and content systems from the Nebriix team.",
};

export default function StoriesPage() {
  const [lead, ...rest] = stories;

  return (
    <>
      <PageHeader
        title="Latest Stories"
        description="What we're learning building AI systems for brands across automation, content and growth."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <SpotlightCard>
              <Link
                href={`/stories/${lead.slug}`}
                className="block p-10 sm:p-14"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
                  {lead.categories.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <h2 className="mt-6 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-5xl">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                  {lead.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                  <span>{formatDate(lead.date)}</span>
                  <span aria-hidden>·</span>
                  <span>{lead.readTime}</span>
                </div>
              </Link>
            </SpotlightCard>
          </BlurFade>

          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((story, i) => (
              <li key={story.slug}>
                <BlurFade delay={i * 0.05} className="h-full">
                  <SpotlightCard className="h-full">
                    <Link
                      href={`/stories/${story.slug}`}
                      className="flex h-full flex-col justify-between gap-8 p-8"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-primary">
                          {story.categories.map((c) => (
                            <span key={c}>{c}</span>
                          ))}
                        </div>
                        <h2 className="mt-5 font-display text-xl leading-snug tracking-tight">
                          {story.title}
                        </h2>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                          {story.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-border pt-5 font-mono text-xs text-muted-foreground">
                        <span>{formatDate(story.date)}</span>
                        <span className="flex items-center gap-2">
                          {story.readTime}
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    </Link>
                  </SpotlightCard>
                </BlurFade>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
