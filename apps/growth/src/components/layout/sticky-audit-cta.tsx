"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { X } from "lucide-react";

import { PillLink } from "@/components/ui/pill-link";

/**
 * Sticky audit prompt that surfaces once the visitor scrolls past the hero.
 *
 * Hidden on /free-audit and /contact — the whole point of those pages is the
 * form, so a floating CTA pointing at them would just be in the way.
 */
export function StickyAuditCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > (typeof window !== "undefined" ? window.innerHeight * 0.9 : 800));
  });

  const suppressed = pathname === "/free-audit" || pathname === "/contact";
  const show = visible && !dismissed && !suppressed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-2xl sm:inset-x-6"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-popover/95 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
            <p className="flex-1 text-sm leading-snug sm:text-base">
              <span className="hidden sm:inline">
                See exactly how many clients you are losing.{" "}
              </span>
              <span className="text-muted-foreground">
                Free audit. No commitment.
              </span>
            </p>

            <PillLink
              href="/free-audit"
              className="h-10 shrink-0 rounded-full px-5 text-sm"
            >
              Get it</PillLink>

            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
