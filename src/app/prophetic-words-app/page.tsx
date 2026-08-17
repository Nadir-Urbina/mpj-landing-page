import type { Metadata } from "next";
import Link from "next/link";

import Header from "../components/Header";
import { SITE_URL } from "../lib/links";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import DownloadBadge from "../components/DownloadBadge";
import ReviewsSection from "../components/ReviewsSection";
import FinalCtaSection from "../components/FinalCtaSection";

export const metadata: Metadata = {
  title: { absolute: "Prophetic Words App — Track & Steward Prophecies" },
  description:
    "Record the prophetic words spoken over your life, weigh them against Scripture, and watch for their fulfillment over time. Free prophetic journaling app for iOS and Android.",
  alternates: { canonical: "/prophetic-words-app" },
  openGraph: {
    title: "Prophetic Words App — Track & Steward Prophecies",
    description:
      "Record the prophetic words spoken over your life, weigh them against Scripture, and watch for their fulfillment over time.",
    url: `${SITE_URL}/prophetic-words-app`,
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "How do I keep track of prophetic words spoken over me?",
    a: "Record each word as soon after you receive it as possible — who spoke it, when, and what was said, as close to verbatim as you can manage. My Prophetic Journal stores each one as its own entry tagged Prophetic Word, so months or years later you can pull up the full record instead of relying on memory.",
  },
  {
    q: "What does the Bible say about testing prophecy?",
    a: "1 Corinthians 14:29 instructs that when prophets speak, others should weigh what is said. 1 Thessalonians 5:20-21 adds, \"Do not despise prophecies, but test everything; hold fast what is good.\" Scripture treats prophecy as something to be received seriously and examined carefully — neither dismissed nor accepted uncritically.",
  },
  {
    q: "Should I write down a prophetic word even if I don't understand it?",
    a: "Yes. Many words are only understood in hindsight. Habakkuk 2:2-3 speaks of writing the vision plainly because it \"awaits its appointed time.\" Recording a word you don't yet understand preserves it for the season when its meaning becomes clear.",
  },
  {
    q: "Can I share a prophetic word with people I trust?",
    a: "Yes. Prophetic Teams let you invite trusted believers into a shared space where a word can be weighed, confirmed, or prayed over together — which is exactly the communal discernment 1 Corinthians 14:29 describes.",
  },
];

export default function PropheticWordsAppPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="mpj">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="page-hero">
        <div className="mpj-container">
          <div className="eyebrow on-dark">Prophetic Words App</div>
          <h1>Every word spoken over you, kept and stewarded.</h1>
          <p>
            Record the prophetic words you receive, weigh them against Scripture, and watch for
            their fulfillment over the years — instead of trusting them to memory.
          </p>
          <div style={{ marginTop: 32 }}>
            <DownloadBadge />
          </div>
        </div>
      </section>

      <section className="problem section-pad">
        <div className="mpj-container">
          <div className="problem-grid">
            <div className="problem-item">
              <p>Someone prophesied over you — and now you only recall the gist of it.</p>
            </div>
            <div className="problem-item">
              <p>The words you did write down are scattered across notes, voice memos, and texts.</p>
            </div>
            <div className="problem-item">
              <p>You have no way to see which words have already come to pass.</p>
            </div>
          </div>
          <div className="problem-close">
            <span>
              One place to <span className="accent">record, weigh, and revisit</span> every word
              spoken over your life.
            </span>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="how-it-works">
        <div className="mpj-container">
          <div className="section-head reveal">
            <div className="eyebrow">How it works</div>
            <h2>Built for the long obedience of stewarding prophecy.</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="13" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8 3.5h11A2.5 2.5 0 0 1 21.5 6v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M6.5 10.5h7M6.5 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Capture it verbatim</h3>
              <p>
                Log who spoke, when, and exactly what was said — by text or voice, while it&apos;s
                still fresh. Each word is filed as its own entry you can find again.
              </p>
            </div>

            <div className="feature-card reveal d1">
              <div className="feature-icon warm" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 9.5V13l2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 4.5 7.5 6.7M19 4.5 16.5 6.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="feat-name">
                Remembrance Moments <span className="feature-tag">5-day</span>
              </h3>
              <p>
                A word you never revisit may as well not have been recorded.{" "}
                <Link href="/features/remembrance-moments">Remembrance Moments</Link> resurfaces
                past entries over five days so you keep praying them through.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="6" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="18" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M7.6 8.6 10.6 15M16.4 8.6 13.4 15M8.2 7h7.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Weigh it with others</h3>
              <p>
                Scripture says prophecy should be weighed. Invite trusted believers into a Prophetic
                Team to confirm, question, and pray over a word together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="faq section-pad">
        <div className="mpj-container">
          <div
            className="section-head reveal"
            style={{ margin: "0 auto 48px", textAlign: "center", maxWidth: 640 }}
          >
            <div className="eyebrow" style={{ justifyContent: "center" }}>Common questions</div>
            <h2>Stewarding prophecy, answered.</h2>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="page-crosslink">
            Recording dreams and visions too?{" "}
            <Link href="/prophetic-dream-journal-app">
              See how the dream journal works →
            </Link>
          </p>
        </div>
      </section>

      <FinalCtaSection />

      <Footer />
      <ScrollReveal />
    </div>
  );
}
