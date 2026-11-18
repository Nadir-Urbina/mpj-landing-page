import type { Locale } from "../config";
import en, { type Dictionary } from "./en";
import es from "./es";

const dictionaries: Record<Locale, Dictionary> = { en, es };

/** Both dictionaries are small, so they're bundled rather than loaded lazily. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
