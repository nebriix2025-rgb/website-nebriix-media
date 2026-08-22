import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import { DotGrid } from "@/components/fx/dot-grid";
import { BlurFade } from "@/components/motion/blur-fade";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Stories", href: "/stories" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "X / Twitter", href: site.socials.twitter },
  { label: "Facebook", href: site.socials.facebook },
  { label: "LinkedIn", href: site.socials.linkedin },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/30">
      <DotGrid className="opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <BlurFade>
          <p className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Ready to scale with AI?
            <br />
            <span className="text-muted-foreground">Let&rsquo;s talk.</span>
          </p>

          <Link
            href={`mailto:${site.email}`}
            className="group mt-8 inline-flex items-center gap-2 font-display text-xl text-primary transition-colors hover:text-foreground sm:text-2xl"
          >
            {site.email}
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </BlurFade>

        <div className="mt-20 grid gap-12 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/nebriix-logo.png"
              alt={site.name}
              width={110}
              height={47}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.footerBlurb}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Follow
            </h2>
            <ul className="mt-5 space-y-3">
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
          <a href={site.phoneHref} className="transition-colors hover:text-primary">
            {site.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
