"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const PROMPT = "best dentist in denver";

const ANSWER = [
  "Based on reviews and local presence, three practices stand out:",
];

const RECOMMENDED = [
  { name: "Cherry Creek Dental Studio", reviews: 412, rating: 4.9 },
  { name: "Highlands Family Dentistry", reviews: 287, rating: 4.8 },
  { name: "LoDo Smile Co.", reviews: 196, rating: 4.9 },
];

/**
 * Mock AI assistant answer: three competitors named, the visitor's business
 * absent. This is the pitch in one visual.
 *
 * The businesses are invented — a real assistant's answer varies by query and
 * moment, so quoting one verbatim would be a claim we can't stand behind. The
 * caption says as much on the page.
 */
export function AiAnswerMock({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = usePrefersReducedMotion();

  const [typedState, setTyped] = useState("");
  const [revealedState, setRevealed] = useState(-1);

  // With reduced motion the final state is rendered directly, so nothing has to
  // animate and then correct itself.
  const typed = reduced ? PROMPT : typedState;
  const revealed = reduced ? RECOMMENDED.length : revealedState;

  useEffect(() => {
    if (!inView || reduced) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Type the query, then reveal each recommendation in turn.
    PROMPT.split("").forEach((_, i) => {
      timers.push(
        setTimeout(() => setTyped(PROMPT.slice(0, i + 1)), 420 + i * 55),
      );
    });

    const afterTyping = 420 + PROMPT.length * 55 + 500;
    for (let i = 0; i <= RECOMMENDED.length; i++) {
      timers.push(setTimeout(() => setRevealed(i), afterTyping + i * 420));
    }

    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-xl sm:p-7",
        className,
      )}
    >
      {/* Query bar */}
      <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
        <Sparkles className="size-4 shrink-0 text-primary" />
        <p className="font-mono text-sm text-foreground">
          {typed}
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-primary"
          />
        </p>
      </div>

      {revealed >= 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-sm leading-relaxed text-muted-foreground"
        >
          {ANSWER[0]}
        </motion.p>
      )}

      <ul className="mt-4 space-y-2.5">
        {RECOMMENDED.map((biz, i) => (
          <motion.li
            key={biz.name}
            initial={{ opacity: 0, y: 10 }}
            animate={revealed > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/40 px-4 py-3"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                {i + 1}
              </span>
              <span className="truncate text-sm">{biz.name}</span>
            </span>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              <span className="text-primary">★ {biz.rating}</span> · {biz.reviews}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* The point of the whole component. */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={
          revealed >= RECOMMENDED.length
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 10 }
        }
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-dashed border-destructive/50 bg-destructive/5 px-4 py-3"
      >
        <span className="flex items-center gap-3">
          <X className="size-4 shrink-0 text-destructive" />
          <span className="text-sm text-destructive">Your business</span>
        </span>
        <span className="shrink-0 font-mono text-xs text-destructive">
          not mentioned
        </span>
      </motion.div>

      <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
        Illustrative. Real answers vary by query, city and platform — which is
        exactly what we measure in the audit.
      </p>
    </div>
  );
}
