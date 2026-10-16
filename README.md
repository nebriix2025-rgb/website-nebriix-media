# Nebriix — websites

Monorepo for the two Nebriix web properties. Both are static Next.js 16 sites
sharing a brand, a motion library and a form pipeline, but selling to different
audiences.

| App | Path | Port | Positioning |
| --- | --- | --- | --- |
| Growth | `apps/growth` | 3001 | Local-business growth — "become the one AI recommends". Targets realtors, dentists, contractors, salons. |
| Marketing | `apps/marketing` | 3000 | Nebriix AI agency — automation, content and lead generation for D2C, SaaS and fintech brands. |

## Getting started

Requires Node 20. On this machine Node is a keg-only Homebrew install, so it may
not be on your `PATH`:

```bash
export PATH="/usr/local/Cellar/node@20/20.19.6/bin:$PATH"
```

Then, from the repo root:

```bash
npm install          # installs both apps via workspaces
npm run dev:growth   # http://localhost:3001
npm run dev:marketing # http://localhost:3000
npm run build        # builds both
npm run lint
```

## Layout

Each app is self-contained — its own `next.config.ts`, `content/site.ts` and
component tree. They are not yet sharing code; the motion primitives
(`components/motion/*`) and the form action are duplicated between them. If they
keep diverging that's fine; if they don't, those are the first candidates for a
shared `packages/ui`.

## Status

`apps/growth` is live at [nebriix.com](https://nebriix.com). `apps/marketing`
is not deployed.

What is wired up on the live site:

- **Lead delivery.** Forms post to every channel configured and one success is
  enough: Resend email (`RESEND_API_KEY` + `LEAD_NOTIFY_TO`) and, optionally, a
  webhook (`CONTACT_WEBHOOK_URL`). Verified end to end on 12 October 2026.
- **Lead triage.** Each submission is classified before delivery — service,
  urgency, fit, junk probability — by Jev or Cloudflare's clef-flash, whichever
  key is set. Advisory only; it never blocks a lead. See `src/lib/jev.ts`.
- **Analytics.** Vercel Analytics plus PostHog in cookieless mode, proxied
  through `/ingest` so blockers don't drop it. Off until
  `NEXT_PUBLIC_POSTHOG_KEY` is set.
- **Sourcing.** Every third-party statistic on the home page carries a visible,
  linked citation. The `needsSource` flag is gone — if a claim cannot be
  sourced it is replaced or cut. See the note at the top of `src/content/site.ts`.
- **Contact details.** Email only. The unverified phone number and WhatsApp
  link inherited from the old site were removed.

Image licensing is settled: `apps/growth/public/photos` is Unsplash-licensed
(free for commercial use, no permission needed), with sources recorded in
`apps/growth/public/photos/CREDITS.md`. None are Unsplash+ / Premium.

### Known gaps

- The two apps duplicate their motion primitives and form action rather than
  sharing a `packages/ui`.
- Leads are delivered but not stored. There is no database, so a lead exists
  only as the emails it was sent in.

## History

The two apps were developed as separate repositories and merged here with
`git subtree`, so their individual commit histories are preserved under their
respective prefixes.
