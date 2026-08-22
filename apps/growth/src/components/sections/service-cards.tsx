"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/content/site";
import { cn } from "@/lib/utils";
import { ServiceArt } from "@/components/fx/service-art";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { BlurFade } from "@/components/motion/blur-fade";

/**
 * Service grid where each card reveals its first few detail bullets on
 * interaction. Expansion is driven by focus/hover on pointer devices and by tap
 * on touch, so the detail is reachable either way — the card is still a link, so
 * nothing is trapped behind the expansion.
 */
export function ServiceCards() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const detail =
          service.sections.find((s) => s.heading === "What We Do")?.items ??
          service.factors?.map((f) => f.title) ??
          [];
        const isOpen = active === service.slug;

        return (
          <li key={service.slug}>
            <BlurFade delay={i * 0.05} className="h-full">
              <SpotlightCard
                className="h-full"
                onMouseEnter={() => setActive(service.slug)}
                onMouseLeave={() => setActive(null)}
              >
                <Link
                  href={`/services/${service.slug}`}
                  onFocus={() => setActive(service.slug)}
                  onBlur={() => setActive(null)}
                  className="flex h-full flex-col p-8"
                >
                  {/* Illustration fades up on interaction so the resting grid
                      stays calm rather than seven competing graphics. */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-6 -top-4 w-40 transition-opacity duration-500",
                      isOpen ? "opacity-30" : "opacity-[0.09]",
                    )}
                  >
                    <ServiceArt slug={service.slug} />
                  </div>

                  <service.icon className="relative size-6 text-primary" />

                  <h3 className="relative mt-6 font-display text-xl leading-snug tracking-tight">
                    {service.name}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.oneLiner}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && detail.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-5 space-y-2 border-t border-border pt-5">
                          {detail.slice(0, 3).map((item) => (
                            <li
                              key={item}
                              className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className="mt-auto flex items-center gap-2 pt-8 text-sm text-primary">
                    Learn more
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </SpotlightCard>
            </BlurFade>
          </li>
        );
      })}
    </ul>
  );
}
