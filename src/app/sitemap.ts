import type { MetadataRoute } from "next";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postSlugsQuery } from "@/sanity/lib/queries";
import { localePath, locales } from "@/i18n/config";
import { SITE_URL } from "./lib/links";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const STATIC_ROUTES: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/prophetic-dream-journal-app", changeFrequency: "monthly", priority: 0.9 },
  { path: "/prophetic-words-app", changeFrequency: "monthly", priority: 0.9 },
  { path: "/features/remembrance-moments", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityFetch<{ slug: string; language: "en" | "es" }[]>(postSlugsQuery, {}, []);

  // Each page in both languages, each entry listing its translations (hreflang).
  const staticRoutes: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap(({ path, ...rest }) => {
    const languages = Object.fromEntries(locales.map((l) => [l, url(localePath(l, path))]));
    return locales.map((locale) => ({
      url: url(localePath(locale, path)),
      alternates: { languages },
      ...rest,
    }));
  });

  // Posts only at their own language's URL; they aren't paired with translations.
  const postRoutes: MetadataRoute.Sitemap = posts.map(({ slug, language }) => ({
    url: url(localePath(language, `/blog/${slug}`)),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
