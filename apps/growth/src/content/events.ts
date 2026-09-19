/**
 * Upcoming events relevant to local-business owners thinking about AI, search
 * and marketing. Dates verified against the organiser's own site or a listing
 * that quotes it; `verified` records where. Emitted as schema.org/Event so an
 * answer engine can quote dates and places directly.
 *
 * Remove past events at each update — a stale calendar is worse than none.
 */

export type Event = {
  slug: string;
  name: string;
  start: string; // YYYY-MM-DD
  end: string;
  city: string;
  country: string;
  venue?: string;
  url: string;
  /** Why a local-business owner would care, in one line. */
  why: string;
  mode: "in-person" | "virtual" | "hybrid";
  verified: string;
};

export const events: Event[] = [
  {
    slug: "brightonseo-october-2026",
    name: "brightonSEO UK (incl. MeasureFest)",
    start: "2026-10-07",
    end: "2026-10-09",
    city: "Brighton",
    country: "United Kingdom",
    url: "https://brightonseo.com/events/october-2026",
    why: "The largest search-marketing conference, with a whole track (MeasureFest) on analytics — the people who work out how AI search is measured speak here first.",
    mode: "in-person",
    verified: "brightonseo.com/dates",
  },
  {
    slug: "maicon-2026",
    name: "MAICON — Marketing AI Conference",
    start: "2026-10-13",
    end: "2026-10-15",
    city: "Cleveland, Ohio",
    country: "United States",
    venue: "Huntington Convention Center",
    url: "https://www.marketingaiinstitute.com/events/marketing-artificial-intelligence-conference",
    why: "The most practical AI-in-marketing event: operators showing what they actually run, not vendors showing roadmaps.",
    mode: "in-person",
    verified: "marketingaiinstitute.com",
  },
  {
    slug: "ai-expo-europe-2026",
    name: "AI Expo Europe",
    start: "2026-10-20",
    end: "2026-10-21",
    city: "Amsterdam",
    country: "Netherlands",
    url: "https://www.ai-expo.net/europe/",
    why: "Broad, business-leader-oriented, and the best European stop for seeing the agent and automation tooling side by side.",
    mode: "in-person",
    verified: "eventbrowse.com/ai-conferences",
  },
  {
    slug: "web-summit-2026",
    name: "Web Summit",
    start: "2026-11-09",
    end: "2026-11-12",
    city: "Lisbon",
    country: "Portugal",
    url: "https://websummit.com/",
    why: "Where the platform announcements land. If Meta, Google or OpenAI ship something that changes local discovery this autumn, it will be talked about here.",
    mode: "in-person",
    verified: "eventbrowse.com/ai-conferences",
  },
  {
    slug: "ai-for-marketers-summit-2026",
    name: "AI for Marketers Summit",
    start: "2026-11-17",
    end: "2026-11-19",
    city: "Online",
    country: "Virtual",
    url: "https://artificialintelligencesummit.com/",
    why: "Free to attend from anywhere; workshops on the 17th, sessions on the 18th and 19th. The lowest-friction way to hear what is working this quarter.",
    mode: "virtual",
    verified: "artificialintelligencesummit.com",
  },
  {
    slug: "gitex-global-2026",
    name: "GITEX Global",
    start: "2026-12-07",
    end: "2026-12-11",
    city: "Dubai",
    country: "United Arab Emirates",
    venue: "Dubai Exhibition Centre, Expo City (Scale Summit at DWTC on the 7th)",
    url: "https://www.gitex.com/",
    why: "The world's largest tech expo, on our doorstep. Every AI vendor selling into the region is on the floor, and it is the best week of the year to see what your competitors will be pitched.",
    mode: "in-person",
    verified: "gitex.com",
  },
];
