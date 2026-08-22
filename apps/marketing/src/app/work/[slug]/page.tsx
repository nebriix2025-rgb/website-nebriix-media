import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/content/site";
import { Aurora } from "@/components/fx/aurora";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.overview,
    openGraph: { title: study.title, description: study.overview },
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const study = caseStudies[index];
  // Wrap around so the last study still offers a "next project".
  const next = caseStudies[(index + 1) % caseStudies.length];

  const sections = [
    { label: "Overview", body: study.overview },
    { label: "Challenges & Approach", body: study.approach },
    { label: "The Result", body: study.result },
  ];

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <Aurora className="opacity-70" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              All Work
            </Link>
          </BlurFade>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {study.category}
          </p>

          <TextReveal
            text={study.title}
            as="h1"
            className="mt-5 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl"
          />

          <BlurFade delay={0.2}>
            <dl className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Client
                </dt>
                <dd className="mt-2 text-sm">{study.client}</dd>
              </div>
              {study.meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {m.label}
                  </dt>
                  <dd className="mt-2 text-sm">{m.value}</dd>
                </div>
              ))}
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Year
                </dt>
                <dd className="mt-2 text-sm">{study.year}</dd>
              </div>
            </dl>
          </BlurFade>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {sections.map((section, i) => (
            <BlurFade key={section.label} delay={i * 0.05}>
              <div className="grid gap-6 border-t border-border py-12 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
                <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  {section.label}
                </h2>
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </div>
            </BlurFade>
          ))}

          <BlurFade>
            <div className="mt-16 rounded-2xl border border-border bg-surface/40 p-10 sm:p-14">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Next Project
              </p>
              <Link
                href={`/work/${next.slug}`}
                className="group mt-5 flex flex-wrap items-end justify-between gap-6"
              >
                <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight transition-colors group-hover:text-primary sm:text-4xl">
                  {next.title}
                </h2>
                <ArrowUpRight className="size-8 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
              </Link>
            </div>
          </BlurFade>

          <BlurFade>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/25 bg-primary/5 p-10">
              <p className="max-w-md font-display text-2xl leading-snug tracking-tight">
                Want a system like this for your business?
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
        </div>
      </section>
    </>
  );
}
