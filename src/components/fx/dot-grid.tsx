import { cn } from "@/lib/utils";

type DotGridProps = {
  className?: string;
  /** Spacing between dots, in px. */
  size?: number;
  /** Fade the grid out toward the edges. */
  fade?: boolean;
};

/** Technical dot-grid texture for section backgrounds. */
export function DotGrid({ className, size = 22, fade = true }: DotGridProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "radial-gradient(color-mix(in oklch, var(--foreground) 16%, transparent) 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
        maskImage: fade
          ? "radial-gradient(ellipse at center, black 20%, transparent 72%)"
          : undefined,
        WebkitMaskImage: fade
          ? "radial-gradient(ellipse at center, black 20%, transparent 72%)"
          : undefined,
      }}
    />
  );
}
