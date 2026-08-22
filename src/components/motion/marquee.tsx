"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  /** Seconds for one full pass. Higher = slower. */
  speed?: number;
  pauseOnHover?: boolean;
  /** Gap between items, as a CSS length. Must match the keyframe offset. */
  gap?: string;
  repeat?: number;
};

/**
 * CSS-driven infinite marquee. Runs off the compositor rather than a rAF loop,
 * so it stays smooth even while GSAP is animating elsewhere on the page.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  speed = 40,
  pauseOnHover = true,
  gap = "2.5rem",
  repeat = 2,
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={
        {
          gap,
          "--marquee-gap": gap,
          "--marquee-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            "flex shrink-0 items-center justify-around animate-marquee",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{ gap }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
