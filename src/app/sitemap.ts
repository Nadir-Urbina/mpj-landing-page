import type { MetadataRoute } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postSlugsQuery } from "@/sanity/lib/queries";

const SITE_URL = "https://mypropheticjournal.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await sanityFetch<{ slug: string }[]>(postSlugsQuery, {}, []);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/prophetic-dream-journal-app`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/prophetic-words-app`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/features/remembrance-moments`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
