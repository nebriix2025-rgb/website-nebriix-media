import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Larger variant for hero and section CTAs. */
  size?: "sm" | "md";
  /** Outline on dark ground, for secondary actions. */
  variant?: "solid" | "ghost";
};

/**
 * The paires.ai call-to-action: a cream pill with the label sitting left and an
 * arrow set inside a navy disc on the right. Padding is asymmetric on purpose
 * (`4px 4px 4px 12px` in the original) so the disc hugs the pill's edge.
 */
export function PillLink({
  href,
  children,
  className,
  size = "md",
  variant = "solid",
}: PillLinkProps) {
  const solid = variant === "solid";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center rounded-full font-sans font-medium tracking-[-0.02em] transition-colors",
        size === "sm" ? "h-11 pl-4 pr-1 text-sm sm:h-9" : "h-12 pl-6 pr-1.5 text-[15px]",
        solid
          ? "bg-primary text-primary-foreground hover:bg-primary/92"
          : "border border-foreground/20 text-foreground hover:border-foreground/50",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "ml-3 flex items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5",
          size === "sm" ? "size-9 sm:size-7" : "size-9",
          solid
            ? "bg-primary-foreground text-primary"
            : "bg-foreground text-background",
        )}
      >
        <ArrowRight className={size === "sm" ? "size-3.5" : "size-4"} />
      </span>
    </Link>
  );
}
