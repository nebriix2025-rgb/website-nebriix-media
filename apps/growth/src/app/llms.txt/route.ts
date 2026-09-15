import { articles } from "@/content/articles";
import { services, site, auditStats } from "@/content/site";

/**
 * /llms.txt — a plain-text description of the site for LLM crawlers, per the
 * emerging llms.txt convention. Generated from the same content as the pages,
 * so it can't drift from them.
 */
// Content is build-time data, so prerender it rather than run on every request.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    ``,
    `> ${site.tagline} ${site.description}`,
    ``,
    `${site.name} is a local-business growth agency. We audit a business's Google ranking, reviews, website, social media and AI visibility, show the owner the revenue they are losing to competitors who show up, then build the system that fixes it. We work with realtors, lawyers, dentists, contractors, salons, photographers, restaurants, fitness studios and med spas.`,
    ``,
    `First-party data: ${auditStats.counters[0].value}+ businesses audited across 10+ US cities. Every one ranked only for its own name; ${auditStats.counters[1].value}/32 had zero Google reviews; ${auditStats.counters[2].value}/32 had no Google Business Profile; none would be recommended by an AI assistant.`,
    ``,
    `## Services`,
    ``,
    ...services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}): ${s.oneLiner}`),
    ``,
    `## Insights`,
    ``,
    ...articles.map((a) => `- [${a.title}](${site.url}/insights/${a.slug}): ${a.description}`),
    ``,
    `## Contact`,
    ``,
    `- [Free visibility audit](${site.url}/free-audit)`,
    `- [Contact](${site.url}/contact)`,
    `- Email: ${site.email}`,
    ``,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
