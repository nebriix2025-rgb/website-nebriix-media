"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { hero, industries } from "@/content/site";
import { NetworkField } from "@/components/fx/network-field";
import { AiAnswerMock } from "@/components/sections/ai-answer-mock";
import { Magnetic } from "@/components/motion/magnetic";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Backdrop drifts slower than the content, so the layers separate on scroll.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh items-center overflow-hidden pt-24"
    >
      {/* Full-bleed backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="/photos/hero.jpg"
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="photo-plate object-cover"
          />
        </div>

        {/* Scrim: enough to hold the headline, light enough to keep the photo. */}
        <div className="absolute inset-0 bg-background/35 dark:bg-background/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />
      </motion.div>

      <NetworkField className="opacity-40 dark:opacity-70" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_minmax(0,26rem)] lg:gap-16"
      >
        <div>
          <h1 className="font-display text-[9vw] leading-[1] tracking-tight sm:text-[6.5vw] lg:text-[4.4vw]">
            <span className="block overflow-hidden py-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {hero.headline}
              </motion.span>
            </span>
            <span className="block overflow-hidden py-[0.06em]">
              <motion.span
                className="block text-primary"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {hero.headlineAccent}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <ButtonLink
                href="/free-audit"
                className="h-13 rounded-full px-8 text-base"
              >
                {hero.cta}
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </Magnetic>

            <ButtonLink
              href="/services"
              variant="ghost"
              className="h-13 rounded-full px-6 text-base text-muted-foreground hover:text-foreground"
            >
              See what we do
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 max-w-3xl text-xs leading-relaxed text-muted-foreground"
          >
            <span className="font-mono uppercase tracking-widest text-primary">
              We work with
            </span>{" "}
            {industries.join(" · ")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <AiAnswerMock />
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
