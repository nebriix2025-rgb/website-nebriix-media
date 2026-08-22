"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import { keyPhrases } from "@/content/site";
import { TextReveal } from "@/components/motion/text-reveal";
import { BlurFade } from "@/components/motion/blur-fade";

/**
 * Full-bleed parallax band. The image drifts slower than the page, so the
 * headline appears to float over it — the "slow background movement" the live
 * site gets from its video hero, without the payload.
 */
export function InvisibleBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[16%]">
        <Image
          src="/photos/storefront.jpg"
          alt=""
          fill
          sizes="100vw"
          className="photo-plate object-cover"
        />
      </motion.div>

      {/*
        Scrim stack. The plate has bright signage and lit windows behind the copy,
        so a flat wash isn't enough — the horizontal gradient gives the text
        column a consistently calm base regardless of what's under it.
      */}
      <div className="absolute inset-0 bg-background/45 dark:bg-background/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <TextReveal
          text="A great local business nobody can find is just an expensive secret."
          as="h2"
          className="max-w-4xl font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
        />

        <BlurFade delay={0.2}>
          <p className="mt-8 max-w-xl border-l-2 border-primary pl-6 text-lg font-medium leading-relaxed text-foreground/90">
            {keyPhrases.selective}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
