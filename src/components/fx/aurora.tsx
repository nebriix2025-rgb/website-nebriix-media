import { cn } from "@/lib/utils";

/**
 * Ambient hero backdrop: three drifting colour blobs behind a noise layer.
 * Pure CSS — no canvas, no WebGL, nothing to hydrate.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -top-1/3 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand/18 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/4 -left-40 h-[32rem] w-[32rem] rounded-full bg-brand-deep/16 blur-[110px] animate-aurora"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute -bottom-40 right-0 h-[34rem] w-[34rem] rounded-full bg-brand/12 blur-[130px] animate-aurora"
        style={{ animationDelay: "-14s" }}
      />
      <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />
      {/* Fade the whole field into the page background at the bottom edge. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
