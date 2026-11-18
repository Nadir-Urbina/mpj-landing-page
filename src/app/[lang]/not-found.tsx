"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * not-found.tsx gets no params, so the language comes from the URL: English
 * pages have no prefix, Spanish ones start with /es.
 */
export default function NotFound() {
  const pathname = usePathname() ?? "/";
  const locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const t = getDictionary(locale).notFound;

  return (
    <div className="mpj">
      <Header locale={locale} />
      <section className="page-hero">
        <div className="mpj-container">
          <h1>{t.title}</h1>
          <p>{t.body}</p>
          <p style={{ marginTop: 28 }}>
            <Link href={localePath(locale, "/")} className="btn btn-download-sm">
              {t.home}
            </Link>
          </p>
        </div>
      </section>
      <Footer locale={locale} />
    </div>
  );
}
