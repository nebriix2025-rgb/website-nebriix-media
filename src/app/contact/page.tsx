import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call with Nebriix, or email Hello@nebriix.com. Let's build something that scales.",
};

const socials = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "X / Twitter", href: site.socials.twitter },
  { label: "Facebook", href: site.socials.facebook },
  { label: "LinkedIn", href: site.socials.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        description="Let's build something that scales."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 border-t border-border pt-16 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-24">
            <BlurFade>
              <ContactForm />
            </BlurFade>

            <BlurFade delay={0.1}>
              <div className="space-y-12">
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Drop us a line
                  </h2>
                  <a
                    href={`mailto:${site.email}`}
                    className="group mt-4 inline-flex items-center gap-2 font-display text-2xl tracking-tight text-primary transition-colors hover:text-foreground"
                  >
                    {site.email}
                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>

                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Call us
                  </h2>
                  <a
                    href={site.phoneHref}
                    className="mt-4 block font-display text-2xl tracking-tight transition-colors hover:text-primary"
                  >
                    {site.phone}
                  </a>
                </div>

                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Follow our work
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          {s.label}
                          <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-surface/40 p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Prefer to skip the form? Email us directly — we reply to
                    every enquiry within one business day.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}
