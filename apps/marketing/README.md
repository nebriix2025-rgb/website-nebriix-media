# Nebriix — marketing site

A rebuild of [nebriix.com](https://nebriix.com), replacing the WordPress /
Elementor / Mokko stack with a static Next.js site.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (27 static routes)
npm run lint
npx tsc --noEmit
```

## Stack

| Concern      | Choice                                            |
| ------------ | ------------------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)                |
| UI           | React 19, Tailwind v4, shadcn/ui (on Base UI)     |
| Motion       | `motion` v13, GSAP + ScrollTrigger, Lenis         |
| Analytics    | Vercel Analytics + Speed Insights                 |

Everything renders statically — there is no database and no CMS.

## Layout

```
src/
  app/            routes; [slug] pages are prerendered via generateStaticParams
  components/
    fx/           decorative backgrounds (aurora, dot grid)
    layout/       header, footer, page header
    motion/       reveal + marquee + ticker primitives (hand-written)
    sections/     page sections
    ui/           shadcn components
  content/
    site.ts       all copy — single source of truth
    stories-body.json  article bodies extracted from the live site
```

### Editing copy

`src/content/site.ts` holds every string. Two things are flagged in there:

- **`process` and `faqs` are new copy** — they have no equivalent on the live
  site and need sign-off before launch.
- **`site.phone`** (`+971 4 000 0000`) is the live site's placeholder. Confirm
  or remove it.

All case-study metrics are quoted verbatim from the existing case studies;
`proofStats` links each headline figure back to its source study.

## Design notes

The site is **dark-only**. The wordmark is a white script lockup with no
dark-ink variant, so a light theme would need a second logo asset.

Brand tokens carry over from the live theme's customizer output — accent
`#97ea90` on a `hsl(150 4% 11%)` background. The live site's *Elementor*
palette (`#6EC1E4` etc.) is untouched framework default and was ignored.

Headings use **Inter Tight**; the original **Neue Montreal** is a licensed
Pangram Pangram face. Swap it in via `next/font/local` if you hold a licence.

## Contact form

Posts to `CONTACT_WEBHOOK_URL` (see `.env.example`) — an n8n / Make / Zapier
catch hook. With no webhook set the form refuses to submit and points the
visitor at `Hello@nebriix.com` rather than dropping the lead silently.

## Deploying

```bash
npx vercel        # preview
npx vercel --prod
```

Set `CONTACT_WEBHOOK_URL` in the Vercel project's environment variables.

## Not carried over

The live site has several leftovers from the Mokko theme demo that were
deliberately not rebuilt:

- WooCommerce shop/cart/checkout/account pages
- ~20 demo portfolio and blog layout pages
- The "A fashionable element for your site" marquee on the About page
- The default WordPress privacy policy, including its "Suggested text:"
  scaffolding — replaced with a real policy at `/privacy` that still needs
  legal review
- A Russian-language default WordPress comment and unrelated demo tags
  (`BookReview`, `TravelTips`, …) in the Stories sidebar

The live About page also pairs founder names with the wrong roles; `team` in
`site.ts` keeps the roles and drops the mismatched names pending real ones.
