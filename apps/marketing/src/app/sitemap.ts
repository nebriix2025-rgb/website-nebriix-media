import type { MetadataRoute } from "next";

import { caseStudies, stories, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/work", "/stories", "/contact", "/privacy"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...caseStudies.map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...stories.map((story) => ({
      url: `${site.url}/stories/${story.slug}`,
      lastModified: new Date(story.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
