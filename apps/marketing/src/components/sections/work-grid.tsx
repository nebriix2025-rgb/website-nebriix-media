"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { caseStudies, categories } from "@/content/site";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "@/components/motion/spotlight-card";

export function WorkGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === active);

  return (
    <section className="pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap gap-2 border-y border-border py-5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm transition-colors",
                active === cat
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="work-filter-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        <motion.ul layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.li
                key={study.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard className="h-full">
                  <Link
                    href={`/work/${study.slug}`}
                    className="flex h-full flex-col justify-between gap-10 p-8 sm:p-10"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        {study.category}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {study.year}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                        {study.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {study.overview.split(". ")[0]}.
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                        <span className="font-display text-lg text-primary">
                          {study.headline}
                        </span>
                        <ArrowUpRight className="size-5 text-muted-foreground" />
                      </div>
                    </div>
                  </Link>
                </SpotlightCard>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">
            Nothing in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
