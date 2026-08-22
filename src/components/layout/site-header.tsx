"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, ArrowUpRight, ChevronDown, Phone } from "lucide-react";

import { nav, services, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="relative z-10 shrink-0" aria-label={site.name}>
          <Image
            src="/nebriix-logo.png"
            alt={site.name}
            width={110}
            height={47}
            loading="eager"
            fetchPriority="high"
            className="logo-mark h-9 w-auto"
          />
        </Link>

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
                    "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
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
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Click-to-call on every page — 70%+ of local searches are mobile. */}
          <a
            href={site.phoneHref}
            aria-label="Call us"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:hidden"
          >
            <Phone className="size-4" />
          </a>

          <ButtonLink
            href="/free-audit"
            className="hidden h-10 rounded-full px-5 sm:inline-flex"
          >
            Free Audit
            <ArrowUpRight className="size-4" />
          </ButtonLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon-lg" />}
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

                <ButtonLink
                  href="/free-audit"
                  onClick={() => setOpen(false)}
                  className="mt-8 h-12 rounded-full text-base"
                >
                  Get Your Free Audit
                </ButtonLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
