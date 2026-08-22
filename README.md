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

## Before either site launches

Both READMEs carry their own detail. The items that block a public launch:

- **`CONTACT_WEBHOOK_URL` is unset** in both apps, so every form refuses to
  submit and tells the visitor to email instead. Point it at an n8n/Make/Zapier
  catch hook — see each app's `.env.example`.
- **Unsourced statistics** in `apps/growth`. Every third-party claim from the
  brief is flagged `needsSource: true` in `src/content/site.ts`. They render as
  written and carry no citation. For a business whose pitch is "we show you the
  math", these need sources or removal.
- **Image licensing is unverified.** `apps/growth/public/photos` contains
  imagery lifted from the live nebriix.com, which came bundled with the Mokko
  WordPress theme. Theme demo assets are frequently *not* licensed for reuse
  outside the theme. This repository is public, so confirm the licence or
  replace them.
- **Placeholder contact details** — the phone number, WhatsApp link and some
  social handles are carried over from the live site and were never confirmed.

## History

The two apps were developed as separate repositories and merged here with
`git subtree`, so their individual commit histories are preserved under their
respective prefixes.
