import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats an ISO date (YYYY-MM-DD) as "Jan 6, 2024".
 *
 * Parsed as UTC deliberately: `new Date("2024-01-06")` is midnight UTC, which
 * renders as the previous day for anyone west of Greenwich unless the formatter
 * is pinned to UTC too. That would make server and client output disagree.
 */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}
