import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import { PageHeader } from "@/components/layout/page-header";
import { BlurFade } from "@/components/motion/blur-fade";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to ${site.name} about getting your local business found. ${site.responseCommitment}`,
  alternates: { canonical: `${site.url}/contact` },
};

const socials = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "TikTok", href: site.socials.tiktok },
  { label: "YouTube", href: site.socials.youtube },
  { label: "LinkedIn", href: site.socials.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's Talk"
        description={site.responseCommitment}
        image="/photos/contact.jpg"
        cta={{ label: "Get Your Free Audit", href: "/free-audit" }}
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 border-t border-border pt-16 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-24">
            <BlurFade>
              <ContactForm />
            </BlurFade>

            <BlurFade delay={0.1}>
              <div className="space-y-10">
                <div className="flex flex-col gap-3">
                  <a
                    href={site.phoneHref}
                    className="flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Phone className="size-4" />
                    Call now
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-13 items-center justify-center gap-2 rounded-full border border-border px-6 transition-colors hover:border-primary hover:text-primary"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp us
                  </a>
                </div>

                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Email
                  </h2>
                  <a
                    href={`mailto:${site.email}`}
                    className="group mt-4 inline-flex items-center gap-2 font-display text-xl tracking-tight text-primary transition-colors hover:text-foreground"
                  >
                    <Mail className="size-5" />
                    {site.email}
                  </a>
                </div>

                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Phone
                  </h2>
                  <a
                    href={site.phoneHref}
                    className="mt-4 block font-display text-xl tracking-tight transition-colors hover:text-primary"
                  >
                    {site.phone}
                  </a>
                </div>

                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Follow
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

                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6">
                  <p className="text-sm leading-relaxed">
                    Want the numbers first? Get the free audit — your ranking,
                    your competitors, and the revenue you are losing.
                  </p>
                  <a
                    href="/free-audit"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Get your free audit
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
}
