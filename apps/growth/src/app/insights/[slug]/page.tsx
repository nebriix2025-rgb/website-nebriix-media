import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { articles } from "@/content/articles";
import { services, site } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";
import { PillLink } from "@/components/ui/pill-link";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `${site.url}/insights/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      publishedTime: a.date,
      url: `${site.url}/insights/${a.slug}`,
    },
  };
}

export default async function ArticlePage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const index = articles.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const a = articles[index];
  const next = articles[(index + 1) % articles.length];
  const related = services.find((s) => s.slug === a.relatedService);
  const url = `${site.url}/insights/${a.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      dateModified: a.date,
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, url: site.url },
      mainEntityOfPage: url,
      keywords: a.keywords.join(", "),
      // Sources are surfaced to the model as citations, not just to readers.
      citation: a.sources.map((s) => s.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${site.url}/insights` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="pb-10 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <BlurFade>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Insights
            </Link>
            <p className="mt-8 text-sm text-muted-foreground">
              {a.category} · {formatDate(a.date)} · {a.readTime}
            </p>
          </BlurFade>

          <TextReveal
            text={a.title}
            as="h1"
            className="mt-4 font-display text-3xl leading-[1.1] sm:text-5xl"
          />

          <BlurFade delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {a.description}
            </p>
          </BlurFade>
        </div>
      </section>

      <article className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {a.body.map((b, i) => {
            if (b.type === "h2")
              return (
                <BlurFade key={i}>
                  <h2 className="mt-14 font-display text-2xl leading-tight sm:text-3xl">{b.text}</h2>
                </BlurFade>
              );
            if (b.type === "list")
              return (
                <BlurFade key={i}>
                  <ul className="my-6 divide-y divide-border">
                    {b.items.map((it) => (
                      <li key={it} className="py-4 text-[17px] leading-relaxed text-foreground/85">{it}</li>
                    ))}
                  </ul>
                </BlurFade>
              );
            if (b.type === "takeaway")
              return (
                <BlurFade key={i}>
                  <p className="my-10 border-l-2 border-foreground pl-6 font-display text-xl leading-relaxed sm:text-2xl">{b.text}</p>
                </BlurFade>
              );
            return (
              <BlurFade key={i}>
                <p className="mt-5 text-[17px] leading-relaxed text-foreground/85">{b.text}</p>
              </BlurFade>
            );
          })}

          <BlurFade>
            <section className="mt-16 border-t border-border pt-10">
              <h2 className="font-display text-2xl">Questions</h2>
              <dl className="mt-4 divide-y divide-border">
                {a.faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <dt className="font-display text-lg leading-snug sm:text-xl">{f.q}</dt>
                    <dd className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </BlurFade>

          <BlurFade>
            <section className="mt-12 border-t border-border pt-8">
              <h2 className="text-sm text-muted-foreground">Sources</h2>
              <ol className="mt-3 space-y-2">
                {a.sources.map((s, i) => (
                  <li key={s.url} className="text-sm">
                    <span className="text-muted-foreground">{i + 1}. </span>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </BlurFade>

          {related && (
            <BlurFade>
              <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 sm:p-10">
                <div>
                  <p className="text-sm text-muted-foreground">Related service</p>
                  <p className="mt-2 font-display text-2xl">{related.name}</p>
                </div>
                <PillLink href={`/services/${related.slug}`} size="sm">
                  See how we do it
                </PillLink>
              </div>
            </BlurFade>
          )}

          <BlurFade>
            <Link href={`/insights/${next.slug}`} className="group mt-12 block border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">Next</p>
              <p className="mt-3 font-display text-2xl leading-snug transition-opacity group-hover:opacity-80">{next.title}</p>
            </Link>
          </BlurFade>
        </div>
      </article>
    </>
  );
}
