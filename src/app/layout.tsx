import type { Metadata } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import { SITE_URL } from "./lib/links";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Titles are kept under ~60 characters so Google doesn't truncate them in
  // search results. The template adds 23 chars, so page titles that need the
  // full width set `title: { absolute: "..." }` to opt out of it.
  title: {
    default: "My Prophetic Journal — Christian Dream Journal App",
    template: "%s — My Prophetic Journal",
  },
  description: "Capture your dreams, visions, and prophetic words — and discover the bigger story God is writing in your life. Free Christian dream & prophetic journaling app for iOS and Android.",
  keywords: ["Christian dream journal app", "prophetic journaling app", "prophetic words tracker", "spiritual journaling", "Christian note-taking app", "biblical journaling app", "dream journal for Christians"],
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
    title: "My Prophetic Journal — Christian Dream & Prophetic Journaling App",
    description: "Capture your dreams, visions, and prophetic words — and discover the bigger story God is writing in your life. Free Christian dream & prophetic journaling app for iOS and Android.",
    url: SITE_URL,
    siteName: "My Prophetic Journal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Prophetic Journal — Christian Dream & Prophetic Journaling App",
    description: "Capture your dreams, visions, and prophetic words — and discover the bigger story God is writing in your life. Free Christian dream & prophetic journaling app for iOS and Android.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "My Prophetic Journal",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  url: SITE_URL,
  description:
    "A Christian dream and prophetic journaling app to capture dreams, visions, and prophetic words, test them against Scripture, and discover the patterns God is revealing.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
