"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

import { services } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/sections/section-heading";
import { DotGrid } from "@/components/fx/dot-grid";

export function Services() {
  const [open, setOpen] = useState<string | null>(services[0].slug);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <DotGrid className="opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              title="What we build."
              description="Twelve capabilities, one operating principle: if it repeats, it can run itself."
            />
          </div>

          <ul className="border-t border-border">
            {services.map((service) => {
              const isOpen = open === service.slug;
              const Icon = service.icon;

              return (
                <li key={service.slug} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : service.slug)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-5 py-6 text-left"
                    >
                      <Icon
                        className={cn(
                          "size-5 shrink-0 transition-colors",
                          isOpen
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground",
                        )}
                      />
                      <span
                        className={cn(
                          "flex-1 font-display text-xl tracking-tight transition-colors sm:text-2xl",
                          isOpen
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary",
                        )}
                      >
                        {service.title}
                      </span>
                      <Plus
                        className={cn(
                          "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                          isOpen && "rotate-45 text-primary",
                        )}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.22 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {service.blurb}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
