# Nebriix — local business growth

Marketing site built from the "AI-Powered Local Business Growth Agency" brief.
Positioning: **we help local businesses become the one AI recommends.**

```bash
npm run dev     # http://localhost:3001
npm run build   # 17 static routes
npm run lint
npx tsc --noEmit
```

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · shadcn/ui on Base
UI · `motion` v13 · GSAP ScrollTrigger · Lenis · Vercel Analytics.

Everything renders statically. No database, no CMS.

## Layout

```
src/
  app/
    services/[slug]     one page per service, prerendered
    free-audit          lead capture landing page
    actions/leads.ts    all three form actions
  components/
    forms/              shared Field + the three forms
    motion/             reveal, marquee, counter, magnetic, spotlight
    sections/           page sections
  content/site.ts       all copy — single source of truth
```

## Editing copy

`src/content/site.ts` holds every string on the site.

### Statistics — read before launch

Third-party claims from the brief are marked `needsSource: true` in
`content/site.ts` (93% of consumers, the #3 ranking, 30x selectivity, the
3x/45%/70% GBP figures, "half of ChatGPT citations"). They render as written but
**carry no citation**. For a business whose pitch is "we show you the math",
publishing unsourced statistics is a real credibility risk. Either attach
sources or cut them.

First-party audit data (`auditStats`, marked `firstParty: true`) is ours: 32+
businesses, 28/32 with zero reviews, 20/32 with no profile, 15/32 with no
website, $1.5M+ combined. Keep these current as the number grows.

## Visuals

There is no photography or video on the site, by design — the brief rules out
stock imagery ("no people shaking hands") and asks for data visualisations,
anonymised audit screenshots and metric cards instead. Everything visual is
drawn in SVG or canvas, so it is a few KB, themes itself from `--brand`, and
stays sharp at any size:

- `sections/ai-answer-mock` — types a query, names three competitors, shows the
  visitor's business absent. The pitch in one component.
- `sections/audit-report-mock` — sample of the deliverable: ranking table,
  animated review-gap bars, revenue math.
- `fx/network-field` — canvas particle lattice behind the hero, standing in for
  a video background. Pauses on a hidden tab, disabled under reduced motion.
- `fx/service-art` — a distinct illustration per service, on cards and page heros.

**AI-generated media was attempted and is unavailable**: the connected
Higgsfield account is on a free plan with no credits, so both `generate_video`
(requires a plus plan) and `generate_image` (out of credits) fail. If that is
topped up, generated hero video and section imagery could be added on top of
what is there.

Every mock carries a visible "illustrative"/"sample" caption. The businesses and
figures in them are invented — presenting invented numbers as real client
results would undercut the "we show you the math" positioning.

## Two deliberate deviations from the brief

**1. The AI-visibility mini-tool does not print an instant verdict.**
The brief asks for "enter your business name, see if ChatGPT recommends you".
Actually answering that means querying the assistants and reading their
citations — not something the browser can do, and printing a fabricated
"you're invisible" to a real business would be a false claim. The component
captures the business and queues a real check instead.

**2. Before/after is side-by-side, not a drag slider.**
These are label/value tables. Clipping them at an arbitrary x reveals one
card's labels beside the other's values, which reads as a single nonsense
profile. Sliders work for images that fill the frame identically. Side-by-side
on desktop, a toggle on mobile.

## Forms

Three forms, one server action module, one webhook. See `.env.example`.
All validate server-side, echo values back on error (React 19 resets forms
after an action, which would otherwise wipe a long message), and carry a
honeypot field.

## SEO

Per-page titles, descriptions and canonicals. Organization + LocalBusiness
schema sitewide; Service schema per service page. `sitemap.xml`, `robots.txt`,
Open Graph. Every service page targets its own keyword cluster via
`metaDescription`.

## Open items

- `CONTACT_WEBHOOK_URL` is unset — forms currently refuse to submit
- `site.phone` / `site.whatsapp` are placeholders carried from the old site
- Social handles are guesses based on the Nebriix pattern — confirm
- Third-party statistics need sources (see above)
- The brief's palette note ("avoid dark mode with acid green") was overridden
  to keep continuity with the Nebriix mint-on-near-black brand and its white
  script wordmark
