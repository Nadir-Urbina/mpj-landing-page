/**
 * Site languages. English is served at the existing unprefixed URLs (so no
 * indexed URL changes); Spanish lives under /es. `src/middleware.ts` rewrites
 * unprefixed requests to the internal /en tree and, on a first visit, sends
 * Spanish-preferring browsers to /es.
 */
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Cookie set by the language switcher; overrides Accept-Language detection. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** BCP 47 tags for <html lang>, hreflang and OpenGraph. */
export const htmlLang: Record<Locale, string> = { en: "en", es: "es" };
export const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_419" };

export function isLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? "");
}

/**
 * Public URL path for `path` (an English-site path like "/", "/blog" or
 * "/#pricing") in `locale`: unchanged for English, "/es"-prefixed for Spanish.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Strips a leading locale segment: "/es/blog" → "/blog", "/es" → "/". */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/**
 * `alternates` metadata for a page: its own canonical plus hreflang links to
 * every language version, with English as x-default.
 */
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      en: localePath("en", path),
      es: localePath("es", path),
      "x-default": localePath("en", path),
    },
  };
}
