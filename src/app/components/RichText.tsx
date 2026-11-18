import Link from "next/link";
import { Fragment } from "react";

import { localePath, type Locale } from "@/i18n/config";

/**
 * Copy with a little inline markup, kept as data so each language can place
 * the emphasis or link where its own word order puts it:
 *   ["Read about ", { em: "zakar" }, " or ", { link: "dreams", href: "/prophetic-dream-journal-app" }]
 * `href` is an English-site path; it's prefixed for Spanish automatically.
 */
export type Rich = string | Array<string | { em: string } | { link: string; href: string }>;

export function RichText({ value, locale }: { value: Rich; locale: Locale }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((part, i) => (
        <Fragment key={i}>
          {typeof part === "string" ? (
            part
          ) : "em" in part ? (
            <em>{part.em}</em>
          ) : (
            <Link href={localePath(locale, part.href)}>{part.link}</Link>
          )}
        </Fragment>
      ))}
    </>
  );
}

/** Plain-text version, for JSON-LD and meta tags. */
export function richToText(value: Rich): string {
  if (typeof value === "string") return value;
  return value.map((p) => (typeof p === "string" ? p : "em" in p ? p.em : p.link)).join("");
}
