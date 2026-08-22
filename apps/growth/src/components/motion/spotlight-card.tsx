"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Radius of the cursor glow, in px. */
  radius?: number;
  onMouseEnter?: () => void;
  /** Composed with the internal handler that parks the glow off-card. */
  onMouseLeave?: () => void;
};

/**
 * Card with a border + fill glow that tracks the cursor. Both layers read the
 * same motion values, so the effect costs one mousemove handler per card.
 */
export function SpotlightCard({
  children,
  className,
  radius = 340,
  onMouseEnter,
  onMouseLeave,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const glow = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, color-mix(in oklch, var(--brand) 14%, transparent), transparent 70%)`;
  const edge = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, color-mix(in oklch, var(--brand) 70%, transparent), transparent 65%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        mouseX.set(-9999);
        mouseY.set(-9999);
        onMouseLeave?.();
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card",
        className,
      )}
    >
      {/* Lit border: a full-bleed gradient masked to a 1px inset ring. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: edge,
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          padding: 1,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
