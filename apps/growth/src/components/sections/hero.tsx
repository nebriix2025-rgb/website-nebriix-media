"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import { hero } from "@/content/site";
import { PillLink } from "@/components/ui/pill-link";

/**
 * Hero after paires.ai: full-bleed cinematic media with the headline anchored
 * low, one line of support copy, one action. Nothing else competes.
 *
 * `HERO_VIDEO` is optional. When set, the video plays muted on loop over the
 * still, which stays as the poster and the reduced-motion fallback. When empty,
 * the still runs a slow Ken Burns drift on its own.
 */
const HERO_VIDEO = "/media/hero.mp4";

const LINES = [hero.headline, hero.headlineAccent];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-dvh items-end overflow-hidden">
      <motion.div style={{ y: mediaY }} className="absolute inset-0 -z-10">
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

        {HERO_VIDEO && (
          <video
            className="photo-plate absolute inset-0 size-full object-cover motion-reduce:hidden"
            src={HERO_VIDEO}
            poster="/photos/hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
        )}

        {/* Bottom-weighted scrim so the headline sits on something solid. */}
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: copyY, opacity }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-24"
      >
        <h1 className="max-w-4xl font-display text-[11vw] font-light leading-[0.98] sm:text-[7vw] lg:text-[4.5rem] lg:leading-[1.08]">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden py-[0.05em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.2 + i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            {hero.sub}
          </p>
          <PillLink href="/free-audit">{hero.cta}</PillLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
