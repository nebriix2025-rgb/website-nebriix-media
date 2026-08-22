import type { MetadataRoute } from "next";

import { services, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/free-audit`, priority: 0.9 },
    { url: `${site.url}/services`, priority: 0.8 },
    { url: `${site.url}/about`, priority: 0.6 },
    { url: `${site.url}/contact`, priority: 0.6 },
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      priority: 0.8,
    })),
  ].map((entry) => ({
    ...entry,
    lastModified: now,
    changeFrequency: "monthly" as const,
  }));
}
