/** AppsFlyer smart link — routes to the App Store or Google Play based on the visitor's device. */
export const DOWNLOAD_LINK = "https://click.mypropheticjournal.life/QeZx/rp902iiu";

/**
 * Canonical origin for the site, used for metadataBase, canonical URLs,
 * OpenGraph URLs, robots.txt and sitemap.xml.
 *
 * Set NEXT_PUBLIC_SITE_URL in the environment (including Vercel) — the literal
 * below is only the fallback. Note the live domain is `.life`, not `.com`, and
 * includes the `www` subdomain; canonical URLs must match exactly or search
 * engines treat them as a different site.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mypropheticjournal.life"
).replace(/\/$/, "");
