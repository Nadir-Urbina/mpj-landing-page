import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Prophetic Journal App - Never Forget",
  description: "Capture, track, and discover God's voice in your life. The spiritual journaling app that helps you recognize patterns, connect with scripture, and grow in your prophetic gifting.",
  keywords: ["prophetic journal app", "spiritual journaling", "Christian note-taking app", "prophetic words tracker", "biblical journaling app"],
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
    title: "My Prophetic Journal App - Never Forget",
    description: "Capture, track, and discover God's voice in your life. The spiritual journaling app that helps you recognize patterns, connect with scripture, and grow in your prophetic gifting.",
    url: "https://mypropheticjournal.com",
    siteName: "My Prophetic Journal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Prophetic Journal App - Never Forget",
    description: "Capture, track, and discover God's voice in your life. The spiritual journaling app that helps you recognize patterns, connect with scripture, and grow in your prophetic gifting.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
