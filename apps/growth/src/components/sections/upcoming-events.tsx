import { events } from "@/content/events";
import { site } from "@/content/site";
import { BlurFade } from "@/components/motion/blur-fade";

function fmtRange(start: string, end: string) {
  const s = new Date(`${start}T00:00:00Z`);
  const e = new Date(`${end}T00:00:00Z`);
  const month = (d: Date) => d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });
  const day = (d: Date) => d.toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" });
  return s.getUTCMonth() === e.getUTCMonth()
    ? `${month(s)} ${day(s)}–${day(e)}`
    : `${month(s)} ${day(s)} – ${month(e)} ${day(e)}`;
}

/** Upcoming events, with schema.org/Event so the dates are machine-quotable. */
export function UpcomingEvents() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.end >= today);
  if (upcoming.length === 0) return null;

  const schema = upcoming.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.name,
    startDate: e.start,
    endDate: e.end,
    eventAttendanceMode:
      e.mode === "virtual"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location:
      e.mode === "virtual"
        ? { "@type": "VirtualLocation", url: e.url }
        : {
            "@type": "Place",
            name: e.venue ?? e.city,
            address: { "@type": "PostalAddress", addressLocality: e.city, addressCountry: e.country },
          },
    url: e.url,
    description: e.why,
    organizer: { "@type": "Organization", name: e.name.split(" —")[0], url: e.url },
  }));

  return (
    <section className="border-t border-border py-24 sm:py-32" id="events">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <BlurFade>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Coming up</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Events worth a local-business owner&rsquo;s attention this quarter. Dates
            checked against the organiser; we remove them as they pass.
          </p>
        </BlurFade>

        <ol className="mt-12 divide-y divide-border border-t border-border">
          {upcoming.map((e, i) => (
            <li key={e.slug}>
              <BlurFade delay={i * 0.05}>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-3 py-7 lg:grid-cols-[minmax(0,11rem)_minmax(0,18rem)_1fr] lg:gap-10"
                >
                  <time dateTime={e.start} className="font-display text-xl leading-snug">
                    {fmtRange(e.start, e.end)}
                  </time>
                  <div>
                    <p className="font-display text-xl leading-snug transition-opacity group-hover:opacity-80">
                      {e.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.mode === "virtual" ? "Online" : `${e.city}, ${e.country}`}
                    </p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{e.why}</p>
                </a>
              </BlurFade>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-xs text-muted-foreground">
          Listed for information; {site.name} has no affiliation with these events unless stated.
        </p>
      </div>
    </section>
  );
}
