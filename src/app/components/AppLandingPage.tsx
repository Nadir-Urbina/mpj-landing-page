import type { Metadata } from "next";
import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";
import DownloadBadge from "./DownloadBadge";
import ReviewsSection from "./ReviewsSection";
import FinalCtaSection from "./FinalCtaSection";
import { RichText, richToText, type Rich } from "./RichText";
import { SITE_URL } from "../lib/links";
import { localePath, ogLocale, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/** Copy for one language of an SEO landing page (/prophetic-*-app). */
export type LandingCopy = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  hero: { eyebrow: string; title: string; body: string };
  problem: { lines: string[]; close: [string, string, string] };
  how: {
    title: string;
    cards: [LandingCard, LandingCard, LandingCard];
  };
  faqTitle: string;
  faq: { q: string; a: Rich }[];
  crosslink?: { text: string; link: string; href: string };
};
type LandingCard = { title: string; tag?: string; body: Rich };

export function landingMetadata(copy: LandingCopy, locale: Locale, path: string): Metadata {
  return {
    title: { absolute: copy.meta.title },
    description: copy.meta.description,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title: copy.meta.ogTitle,
      description: copy.meta.ogDescription,
      url: `${SITE_URL}${localePath(locale, path)}`,
      locale: ogLocale[locale],
      type: "website",
    },
  };
}

const ICONS = [
  <svg key="capture" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="13" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 3.5h11A2.5 2.5 0 0 1 21.5 6v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M6.5 10.5h7M6.5 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="remember" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 9.5V13l2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 4.5 7.5 6.7M19 4.5 16.5 6.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg key="weigh" viewBox="0 0 24 24" fill="none">
    <circle cx="6" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M7.6 8.6 10.6 15M16.4 8.6 13.4 15M8.2 7h7.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
];
const CARD_CLASSES = ["feature-card reveal", "feature-card reveal d1", "feature-card reveal"];

/** Shared layout of the prophetic-dream-journal-app and prophetic-words-app pages. */
export default function AppLandingPage({ copy, locale }: { copy: LandingCopy; locale: Locale }) {
  const shared = getDictionary(locale).faq;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: richToText(item.a) },
    })),
  };

  return (
    <div className="mpj">
      <Header locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="page-hero">
        <div className="mpj-container">
          <div className="eyebrow on-dark">{copy.hero.eyebrow}</div>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.body}</p>
          <div style={{ marginTop: 32 }}>
            <DownloadBadge locale={locale} withWebLink />
          </div>
        </div>
      </section>

      <section className="problem section-pad">
        <div className="mpj-container">
          <div className="problem-grid">
            {copy.problem.lines.map((line) => (
              <div key={line} className="problem-item">
                <p>{line}</p>
              </div>
            ))}
          </div>
          <div className="problem-close">
            <span>
              {copy.problem.close[0]}
              <span className="accent">{copy.problem.close[1]}</span>
              {copy.problem.close[2]}
            </span>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="how-it-works">
        <div className="mpj-container">
          <div className="section-head reveal">
            <div className="eyebrow">{shared.howItWorks}</div>
            <h2>{copy.how.title}</h2>
          </div>
          <div className="features-grid">
            {copy.how.cards.map((card, i) => (
              <div key={card.title} className={CARD_CLASSES[i]}>
                <div className={`feature-icon${i === 1 ? " warm" : ""}`} aria-hidden="true">
                  {ICONS[i]}
                </div>
                {card.tag ? (
                  <h3 className="feat-name">
                    {card.title} <span className="feature-tag">{card.tag}</span>
                  </h3>
                ) : (
                  <h3>{card.title}</h3>
                )}
                <p>
                  <RichText value={card.body} locale={locale} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection locale={locale} />

      <section className="faq section-pad">
        <div className="mpj-container">
          <div
            className="section-head reveal"
            style={{ margin: "0 auto 48px", textAlign: "center", maxWidth: 640 }}
          >
            <div className="eyebrow" style={{ justifyContent: "center" }}>{shared.eyebrow}</div>
            <h2>{copy.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {copy.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>
                  <RichText value={item.a} locale={locale} />
                </p>
              </details>
            ))}
          </div>
          {copy.crosslink && (
            <p className="page-crosslink">
              {copy.crosslink.text}{" "}
              <Link href={localePath(locale, copy.crosslink.href)}>{copy.crosslink.link}</Link>
            </p>
          )}
        </div>
      </section>

      <FinalCtaSection locale={locale} />

      <Footer locale={locale} />
      <ScrollReveal />
    </div>
  );
}
