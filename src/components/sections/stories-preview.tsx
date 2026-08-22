import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { stories } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { BlurFade } from "@/components/motion/blur-fade";
import { SectionHeading } from "@/components/sections/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function StoriesPreview() {
  const featured = stories.slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading title="Stories." />
          <ButtonLink
            href="/stories"
            variant="outline"
            className="h-11 rounded-full px-5"
          >
            See All Stories
            <ArrowUpRight className="size-4" />
          </ButtonLink>
        </div>

        <ul className="mt-14 border-t border-border">
          {featured.map((story, i) => (
            <li key={story.slug}>
              <BlurFade delay={i * 0.06}>
                <Link
                  href={`/stories/${story.slug}`}
                  className="group flex flex-col gap-4 border-b border-border py-8 transition-colors hover:bg-surface/30 sm:flex-row sm:items-center sm:gap-10 sm:px-4"
                >
                  <span className="font-mono text-xs text-muted-foreground sm:w-28 sm:shrink-0">
                    {formatDate(story.date)}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-display text-xl leading-snug tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                      {story.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {story.excerpt}
                    </p>
                  </div>

                  <span className="flex items-center gap-4 sm:shrink-0">
                    <span className="font-mono text-xs text-muted-foreground">
                      {story.readTime}
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                  </span>
                </Link>
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
