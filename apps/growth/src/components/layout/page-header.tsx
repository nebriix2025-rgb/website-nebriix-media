"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import { PillLink } from "@/components/ui/pill-link";

type PageHeaderProps = {
  title: string;
  description?: string;
  /** Path under /public. Every page carries one, as on paires.ai. */
  image: string;
  /** Slower Ken Burns + parallax when true; a still, cheaper frame when false. */
  cta?: { label: string; href: string };
  children?: React.ReactNode;
};

/**
 * Inner-page hero after paires.ai: full-bleed photograph, page title centred
 * and anchored low, one line of support copy, one pill. Every page opens this
 * way, so the site reads as one continuous piece rather than a home page with
 * plainer pages behind it.
 */
export function PageHeader({
  title,
  description,
  image,
  cta = { label: "Get Your Free Audit", href: "/free-audit" },
  children,
}: PageHeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "36%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[88vh] items-end overflow-hidden"
    >
      <motion.div style={{ y: mediaY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src={image}
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="photo-plate object-cover"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/60 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: copyY, opacity }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 text-center sm:px-8 sm:pb-24"
      >
        <h1 className="mx-auto max-w-4xl font-display text-[10vw] font-light leading-[1.02] sm:text-[6vw] lg:text-[4.5rem] lg:leading-[1.1]">
          <span className="block overflow-hidden py-[0.05em]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          {description && (
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          <PillLink href={cta.href} size="sm">
            {cta.label}
          </PillLink>
        </motion.div>

        {children}
      </motion.div>
    </section>
  );
}
