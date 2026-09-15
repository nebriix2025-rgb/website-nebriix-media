"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Theme switch.
 *
 * Both icons are always rendered and swapped by the `dark` class in CSS, so the
 * server and client markup are identical — no hydration mismatch, and none of
 * the usual `mounted` state needed to avoid one. `resolvedTheme` is only read
 * inside the handler, which can't fire until after hydration.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}
