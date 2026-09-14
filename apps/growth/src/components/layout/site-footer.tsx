import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

import { site, services } from "@/content/site";
import { BlurFade } from "@/components/motion/blur-fade";
import { PillLink } from "@/components/ui/pill-link";

const socials = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "TikTok", href: site.socials.tiktok },
  { label: "YouTube", href: site.socials.youtube },
  { label: "LinkedIn", href: site.socials.linkedin },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/30">

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <BlurFade>
          <p className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Find out what you are missing.
            <br />
            <span className="text-primary">Free.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PillLink
              href="/free-audit"
            >
              Get Your Free Audit</PillLink>
            <a
              href={site.phoneHref}
              className="inline-flex h-13 items-center gap-2 rounded-full border border-border px-7 text-base text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-4" />
              Call us
            </a>
          </div>
        </BlurFade>

        <div className="mt-20 grid gap-12 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/nebriix-logo.png"
              alt={site.name}
              width={110}
              height={47}
              className="logo-mark h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              {site.responseCommitment}
            </p>
          </div>

          <nav aria-label="Services" className="lg:col-span-2">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Services
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </li>
            </ul>

            <ul className="mt-6 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {new Date().getFullYear()} &copy; {site.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
