"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, ChevronDown, Phone } from "lucide-react";

import { nav, services, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PillLink } from "@/components/ui/pill-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      {/*
        Mobile: flex, logo left / controls right. Desktop: the paires three-column
        grid with the wordmark centred. Grid can't be used at every size — a
        display:none nav vacates its cell and the logo slides into column one.
      */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: nav (paires puts the links here, small and quiet). */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={cn(
                    "relative flex items-center gap-1 px-3 py-2 text-sm transition-colors",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  <span className="relative">{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "relative size-3.5 transition-transform",
                      servicesOpen && "rotate-180",
                    )}
                  />
                </Link>

                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                  >
                    <div className="overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-2xl">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                        >
                          <service.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>
                            <span className="block text-sm">{service.name}</span>
                            <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                              {service.oneLiner}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                <span className="relative">{item.label}</span>
              </Link>
            ),
          )}
        </nav>

        {/* Centre: wordmark. */}
        <Link
          href="/"
          className="relative z-10 lg:col-start-2 lg:justify-self-center"
          aria-label={site.name}
        >
          <Image
            src="/nebriix-logo.png"
            alt={site.name}
            width={110}
            height={47}
            loading="eager"
            fetchPriority="high"
            className="logo-mark h-8 w-auto"
          />
        </Link>

        {/* Right: one CTA. */}
        <div className="flex items-center justify-end gap-2 lg:col-start-3">
          <ThemeToggle />

          {/* Click-to-call on every page — 70%+ of local searches are mobile. */}
          <a
            href={site.phoneHref}
            aria-label="Call us"
            className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:hidden"
          >
            <Phone className="size-4" />
          </a>

          <PillLink href="/free-audit" size="sm" className="hidden sm:inline-flex">
            Free Audit
          </PillLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon-lg" className="size-11" />}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto border-border sm:w-96"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-14 flex flex-col gap-1 px-4 pb-10">
                {nav
                  .filter((i) => i.href !== "/services")
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block border-b border-border py-4 font-display text-2xl tracking-tight transition-colors",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-foreground hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}

                <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Services
                </p>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                ))}

                <PillLink href="/free-audit" className="mt-8 w-full justify-between">
                  Get Your Free Audit
                </PillLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
