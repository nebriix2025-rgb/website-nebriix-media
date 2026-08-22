import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { stories, site } from "@/content/site";
import bodies from "@/content/stories-body.json";
import { formatDate } from "@/lib/utils";
import { Aurora } from "@/components/fx/aurora";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";
import { ButtonLink } from "@/components/ui/button-link";

type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

const storyBodies = bodies as Record<string, Block[]>;

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata(
  props: PageProps<"/stories/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return {};

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      type: "article",
      title: story.title,
      description: story.excerpt,
      publishedTime: story.date,
    },
  };
}

export default async function StoryPage(props: PageProps<"/stories/[slug]">) {
  const { slug } = await props.params;
  const index = stories.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const story = stories[index];
  const body = storyBodies[slug] ?? [];
  const next = stories[(index + 1) % stories.length];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: story.title,
            description: story.excerpt,
            datePublished: story.date,
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name },
            mainEntityOfPage: `${site.url}/stories/${story.slug}`,
          }),
        }}
      />

      <section className="relative overflow-hidden pb-12 pt-40 sm:pt-48">
        <Aurora className="opacity-60" />

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <BlurFade>
            <Link
              href="/stories"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              All Stories
            </Link>
          </BlurFade>

          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
            {story.categories.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <TextReveal
            text={story.title}
            as="h1"
            className="mt-5 font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl"
          />

          <BlurFade delay={0.2}>
            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
              <span>{formatDate(story.date)}</span>
              <span aria-hidden>·</span>
              <span>{story.readTime}</span>
            </div>
          </BlurFade>
        </div>
      </section>

      <article className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {body.map((block, i) => {
            if (block.type === "list") {
              const List = block.ordered ? "ol" : "ul";
              return (
                <BlurFade key={i} delay={0.02}>
                  <List
                    className={`my-6 space-y-3 pl-5 text-muted-foreground ${
                      block.ordered ? "list-decimal" : "list-disc"
                    } marker:text-primary`}
                  >
                    {block.items.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </List>
                </BlurFade>
              );
            }

            if (block.type === "h2") {
              return (
                <BlurFade key={i} delay={0.02}>
                  <h2 className="mt-14 font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                    {block.text}
                  </h2>
                </BlurFade>
              );
            }

            if (block.type === "h3") {
              return (
                <BlurFade key={i} delay={0.02}>
                  <h3 className="mt-10 font-display text-xl leading-snug tracking-tight text-primary">
                    {block.text}
                  </h3>
                </BlurFade>
              );
            }

            return (
              <BlurFade key={i} delay={0.02}>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              </BlurFade>
            );
          })}

          <BlurFade>
            <div className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/25 bg-primary/5 p-8 sm:p-10">
              <p className="max-w-sm font-display text-xl leading-snug tracking-tight">
                Want this running in your business?
              </p>
              <ButtonLink
                href="/contact"
                className="h-12 rounded-full px-7 text-base"
              >
                Book a Free Strategy Call
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </div>
          </BlurFade>

          <BlurFade>
            <Link
              href={`/stories/${next.slug}`}
              className="group mt-12 block border-t border-border pt-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Next Story
              </p>
              <p className="mt-4 font-display text-2xl leading-snug tracking-tight transition-colors group-hover:text-primary">
                {next.title}
              </p>
            </Link>
          </BlurFade>
        </div>
      </article>
    </>
  );
}
