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
  title: "My Prophetic Journal - Spiritual Journaling App",
  description: "Capture, track, and discover God's voice in your life. The spiritual journaling app that helps you recognize patterns, connect with scripture, and grow in your prophetic gifting.",
  keywords: ["prophetic journal app", "spiritual journaling", "Christian note-taking app", "prophetic words tracker", "biblical journaling app"],
  authors: [{ name: "My Prophetic Journal Team" }],
  creator: "My Prophetic Journal",
  publisher: "My Prophetic Journal",
  openGraph: {
    title: "My Prophetic Journal - Spiritual Journaling App",
    description: "Capture, track, and discover God's voice in your life. The spiritual journaling app that helps you recognize patterns, connect with scripture, and grow in your prophetic gifting.",
    url: "https://mypropheticjournal.com",
    siteName: "My Prophetic Journal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Prophetic Journal - Spiritual Journaling App",
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
