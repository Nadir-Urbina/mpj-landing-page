import { NextResponse, type NextRequest } from "next/server";

import { LOCALE_COOKIE, defaultLocale, isLocale, type Locale } from "./i18n/config";

/**
 * Picks the visitor's preferred site language from Accept-Language, honoring
 * q-values ("es-MX,es;q=0.9,en;q=0.8" → es). Anything that isn't Spanish,
 * including no header at all (most crawlers), gets English.
 */
function preferredLocale(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.split("-")[0], q: q ? Number(q.split("=")[1]) || 0 : 1 };
    })
    .filter((entry) => entry.lang === "en" || entry.lang === "es")
    .sort((a, b) => b.q - a.q);
  return ranked[0]?.lang === "es" ? "es" : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Spanish pages are real URLs; serve them as-is.
  if (pathname === "/es" || pathname.startsWith("/es/")) return NextResponse.next();

  // English has no prefix publicly, so /en/... is a duplicate: send it home.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  // A choice made with the switcher wins; otherwise go by the browser language.
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookie) ? cookie : preferredLocale(request.headers.get("accept-language"));

  if (locale === "es") {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/es" : `/es${pathname}`;
    return NextResponse.redirect(url, 307);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except API routes, the Sanity Studio, Next internals and files
  // with an extension (images, robots.txt, sitemap.xml, /blog/rss.xml).
  matcher: ["/((?!api|studio|_next|_vercel|.*\\..*).*)"],
};
