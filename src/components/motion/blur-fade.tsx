"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";

type BlurFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Distance travelled, in px. Negative values slide down instead of up. */
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
};

/** Scroll-triggered blur + translate reveal. The workhorse for section entrances. */
export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.6,
  offset = 20,
  direction = "up",
  once = true,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-64px" });

  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "right" || direction === "down" ? -1 : 1;

  const variants: Variants = {
    hidden: { opacity: 0, filter: "blur(8px)", [axis]: offset * sign },
    visible: { opacity: 1, filter: "blur(0px)", [axis]: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
