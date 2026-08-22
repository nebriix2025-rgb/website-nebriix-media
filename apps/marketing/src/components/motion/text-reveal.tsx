"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  /** Stagger unit. Words read faster; characters feel more deliberate. */
  by?: "word" | "char";
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Masked per-token rise. Each token sits in an overflow-hidden box so it appears
 * to climb out from behind the line above it.
 */
export function TextReveal({
  text,
  className,
  by = "word",
  delay = 0,
  as = "h2",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const tokens = by === "word" ? text.split(" ") : [...text];
  const step = by === "word" ? 0.055 : 0.022;
  const Tag = motion[as];

  return (
    <div ref={ref}>
      <Tag className={cn("flex flex-wrap", className)} aria-label={text}>
        {tokens.map((token, i) => (
          <span
            key={`${token}-${i}`}
            aria-hidden
            className="inline-flex overflow-hidden py-[0.12em]"
          >
            <motion.span
              className="inline-block whitespace-pre"
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.75,
                delay: delay + i * step,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {token}
              {by === "word" ? " " : ""}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
