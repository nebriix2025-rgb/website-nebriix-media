"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

type RevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Vertical drift, as a percentage of the frame, across the scroll range. */
  parallax?: number;

  priority?: boolean;
  sizes?: string;
};

/**
 * Image that scales and un-blurs into view, then drifts as the page scrolls.
 *
 * The parallax works by over-sizing the image inside a clipping frame and
 * translating it — the frame stays put, so nothing reflows and there's no gap
 * at the edges of the travel.
 */
export function RevealImage({
  src,
  alt,
  className,
  parallax = 12,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: RevealImageProps) {
  const frame = useRef<HTMLDivElement>(null);
  const inView = useInView(frame, { once: true, margin: "-12%" });

  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallax}%`, `${parallax}%`],
  );

  return (
    <div
      ref={frame}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-surface",
        className,
      )}
    >
      <motion.div
        style={{ y }}
        initial={{ scale: 1.14, opacity: 0, filter: "blur(14px)" }}
        animate={
          inView
            ? { scale: 1, opacity: 1, filter: "blur(0px)" }
            : { scale: 1.14, opacity: 0, filter: "blur(14px)" }
        }
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        // Taller than the frame so the parallax travel never exposes an edge.
        className="absolute inset-x-0 -inset-y-[15%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          // `priority` is deprecated in Next 16; eager + high fetchPriority is
          // the replacement for above-the-fold images.
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          // Same per-theme grade as every hero plate, so thumbnails match.
          className="photo-plate object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </motion.div>
    </div>
  );
}
