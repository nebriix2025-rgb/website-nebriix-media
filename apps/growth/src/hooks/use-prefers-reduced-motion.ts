"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

/**
 * Reads the reduced-motion preference as external state.
 *
 * Using useSyncExternalStore rather than an effect means the value is available
 * during render, so components can start in their final state instead of
 * animating and then correcting themselves. Server snapshot is `false`: the
 * preference is unknowable until hydration, and assuming "animate" matches what
 * the markup already renders.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
