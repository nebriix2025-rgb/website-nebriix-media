import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { services, site } from "@/content/site";
import { ServiceArt } from "@/components/fx/service-art";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { PillLink } from "@/components/ui/pill-link";

/** Hero plate per service, drawn from the licensed pool in public/photos. */
const HERO_IMAGE: Record<string, string> = {
  "ai-search-optimization": "/photos/audit.jpg",
  "google-business-profile": "/photos/storefront.jpg",
  "local-seo-website": "/photos/services.jpg",
  "video-production": "/photos/hero.jpg",
  "social-media-management": "/photos/cafe.jpg",
  "lead-generation-system": "/photos/about.jpg",
  "review-reputation-management": "/photos/contact.jpg",
  "community-presence": "/photos/cafe.jpg",
};

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

  // Answer engines lift FAQPage entries verbatim; this is the AEO payload.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${site.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }}
      />

      <PageHeader
        title={service.name}
        description={service.headline}
        image={HERO_IMAGE[service.slug] ?? "/photos/hero.jpg"}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BlurFade>
            <div className="flex items-center justify-between gap-6 py-8">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                All services
              </Link>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="size-4" />
                {service.oneLiner}
              </span>
            </div>
          </BlurFade>

          {service.sections.map((section, i) => (
            <BlurFade key={section.heading} delay={i * 0.05}>
              <div className="grid gap-8 border-t border-border py-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
                <h2 className="font-display text-2xl">
                  {section.heading}
                </h2>

                <div>
                  {section.body && (
                    <p className="mb-6 max-w-3xl text-lg leading-relaxed">
                      {section.body}
                    </p>
                  )}

                  {section.items && (
                    <ul className="max-w-3xl divide-y divide-border">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="py-5 font-display text-lg leading-relaxed text-foreground/85 sm:text-xl"
                        >
                          {item}
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
                          <ul className="mt-3 max-w-3xl divide-y divide-border">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="py-4 font-display text-base leading-relaxed text-foreground/80 sm:text-lg"
                              >
                                {item}
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
                <div>
                  <h2 className="font-display text-2xl">
                    {service.slug === "lead-generation-system"
                      ? "The full system"
                      : "How AI chooses"}
                  </h2>
                  <ServiceArt slug={service.slug} className="mt-8 hidden max-w-xs opacity-60 lg:block" />
                </div>

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
            <div className="grid gap-8 border-t border-border py-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
              <h2 className="font-display text-2xl">Questions</h2>
              <dl className="max-w-3xl divide-y divide-border">
                {service.faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <dt className="font-display text-lg leading-snug sm:text-xl">{f.q}</dt>
                    <dd className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </BlurFade>

          <BlurFade>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-primary/25 bg-primary/5 p-10 sm:p-14">
              <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                {service.cta}
              </p>
              <PillLink
                href="/free-audit"
              >
                Get Your Free Audit</PillLink>
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
