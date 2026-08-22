"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  /** How far the element chases the cursor, as a fraction of the offset. */
  strength?: number;
};

/** Pulls its child toward the cursor on hover. Disabled for coarse pointers. */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.6 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Touch devices report coarse pointers; magnetism there just causes jitter.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
