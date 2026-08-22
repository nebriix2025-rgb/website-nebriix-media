import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { services, site } from "@/content/site";
import { Aurora } from "@/components/fx/aurora";
import { ServiceArt } from "@/components/fx/service-art";
import { BlurFade } from "@/components/motion/blur-fade";
import { TextReveal } from "@/components/motion/text-reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.metaDescription,
    alternates: { canonical: `${site.url}/services/${service.slug}` },
    openGraph: {
      title: `${service.name} — ${site.name}`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const service = services[index];
  const next = services[(index + 1) % services.length];
  const Icon = service.icon;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "United States",
    url: `${site.url}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <Aurora className="opacity-70" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              All Services
            </Link>
          </BlurFade>

          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_minmax(0,20rem)]">
            <div>
              <BlurFade delay={0.08}>
                <Icon className="mt-10 size-8 text-primary" />
              </BlurFade>

              <TextReveal
                text={service.headline}
                as="h1"
                className="mt-6 font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl"
              />

              <BlurFade delay={0.2}>
                <p className="mt-7 max-w-2xl text-lg text-muted-foreground">
                  {service.oneLiner}
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={0.25}>
              <ServiceArt slug={service.slug} className="opacity-70" />
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {service.sections.map((section, i) => (
            <BlurFade key={section.heading} delay={i * 0.05}>
              <div className="grid gap-8 border-t border-border py-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
                <h2 className="font-display text-2xl tracking-tight text-primary">
                  {section.heading}
                </h2>

                <div>
                  {section.body && (
                    <p className="mb-6 max-w-3xl text-lg leading-relaxed">
                      {section.body}
                    </p>
                  )}

                  {section.items && (
                    <ul className="grid max-w-4xl gap-4">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <Check className="mt-1 size-4 shrink-0 text-primary" />
                          <span className="leading-relaxed text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.groups && (
                    <div className="grid gap-10">
                      {section.groups.map((group) => (
                        <div key={group.label}>
                          <h3 className="font-display text-lg tracking-tight">
                            {group.label}
                          </h3>
                          <ul className="mt-4 grid max-w-3xl gap-3">
                            {group.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <Check className="mt-1 size-4 shrink-0 text-primary" />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </BlurFade>
          ))}

          {service.factors && (
            <BlurFade>
              <div className="grid gap-8 border-t border-border py-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
                <h2 className="font-display text-2xl tracking-tight text-primary">
                  {service.slug === "lead-generation-system"
                    ? "The full system"
                    : "How AI chooses"}
                </h2>

                <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                  {service.factors.map((factor, i) => (
                    <li key={factor.title} className="bg-background p-7">
                      <span className="font-mono text-xs text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-lg leading-snug tracking-tight">
                        {factor.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {factor.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </BlurFade>
          )}

          <BlurFade>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-primary/25 bg-primary/5 p-10 sm:p-14">
              <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                {service.cta}
              </p>
              <ButtonLink
                href="/free-audit"
                className="h-13 rounded-full px-8 text-base"
              >
                Get Your Free Audit
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </div>
          </BlurFade>

          <BlurFade>
            <Link
              href={`/services/${next.slug}`}
              className="group mt-14 block border-t border-border pt-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Next Service
              </p>
              <p className="mt-4 font-display text-2xl leading-snug tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                {next.name}
              </p>
            </Link>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
