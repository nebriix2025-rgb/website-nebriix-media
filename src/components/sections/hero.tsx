"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import { Aurora } from "@/components/fx/aurora";
import { Magnetic } from "@/components/motion/magnetic";
import { ButtonLink } from "@/components/ui/button-link";

const LINES = ["AI-Powered Growth", "for Modern Brands."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Content drifts up slightly slower than the scroll, and fades as it leaves.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh items-center overflow-hidden pt-20"
    >
      <Aurora />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-7xl px-5 sm:px-8"
      >
        <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[7.5vw]">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden py-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {i === 1 ? (
                  <span className="text-gradient">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.68 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <ButtonLink
              href="/contact"
              className="h-13 rounded-full px-8 text-base"
            >
              Book a Free Strategy Call
              <ArrowUpRight className="size-4" />
            </ButtonLink>
          </Magnetic>

          <ButtonLink
            href="/work"
            variant="ghost"
            className="h-13 rounded-full px-6 text-base text-muted-foreground hover:text-foreground"
          >
            See our work
          </ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          <ArrowDown className="size-3" />
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
