import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "@/app/globals.css";
import { SITE_URL } from "@/app/lib/links";
import { htmlLang, isLocale, locales, ogLocale, pageAlternates } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

// Only /en (served at the unprefixed URLs) and /es exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    // Titles are kept under ~60 characters so Google doesn't truncate them in
    // search results. The template adds ~23 chars, so page titles that need the
    // full width set `title: { absolute: "..." }` to opt out of it.
    title: {
      default: t.meta.defaultTitle,
      template: t.meta.titleTemplate,
    },
    description: t.meta.description,
    alternates: pageAlternates(lang, "/"),
    keywords:
      lang === "es"
        ? ["app de diario de sueños cristiana", "diario profético", "palabras proféticas", "diario espiritual", "app cristiana", "diario bíblico", "interpretar sueños bíblicamente"]
        : ["Christian dream journal app", "prophetic journaling app", "prophetic words tracker", "spiritual journaling", "Christian note-taking app", "biblical journaling app", "dream journal for Christians"],
    authors: [{ name: "My Prophetic Journal Team" }],
    creator: "My Prophetic Journal",
    publisher: "My Prophetic Journal",
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.description,
      url: lang === "es" ? `${SITE_URL}/es` : SITE_URL,
      siteName: t.brand,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.description,
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: t.brand,
    alternateName: lang === "es" ? "My Prophetic Journal" : "Mi Diario Profético",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android, Web",
    inLanguage: ["en", "es"],
    url: lang === "es" ? `${SITE_URL}/es` : SITE_URL,
    description: t.meta.appDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "500",
    },
    publisher: {
      "@type": "Organization",
      name: "My Prophetic Journal",
    },
  };

  return (
    <html lang={htmlLang[lang]}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spectral.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
