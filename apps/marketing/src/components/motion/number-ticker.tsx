"use client";

import { useEffect, useRef } from "react";
import { useInView, useSpring, useMotionValueEvent } from "motion/react";

type NumberTickerProps = {
  value: number;
  className?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
};

/** Spring-driven count-up that fires once the element scrolls into view. */
export function NumberTicker({
  value,
  className,
  decimals = 0,
  prefix = "",
  suffix = "",
  delay = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const spring = useSpring(0, { damping: 42, stiffness: 90, mass: 1 });

  const format = (n: number) =>
    n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => spring.set(value), delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, spring, value, delay]);

  // Written straight to the DOM rather than through state: the spring emits on
  // every frame, and re-rendering at 60fps would thrash the whole subtree (and
  // fire before mount on the first emission).
  useMotionValueEvent(spring, "change", (latest) => {
    if (numberRef.current) numberRef.current.textContent = format(latest);
  });

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>
        {prefix}
        <span ref={numberRef}>{format(0)}</span>
        {suffix}
      </span>
      {/* Screen readers get the final value, not the intermediate frames. */}
      <span className="sr-only">
        {prefix}
        {format(value)}
        {suffix}
      </span>
    </span>
  );
}
