import type { Metadata } from "next";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import DownloadBadge from "../components/DownloadBadge";
import ReviewsSection from "../components/ReviewsSection";
import FinalCtaSection from "../components/FinalCtaSection";

export const metadata: Metadata = {
  title: "Prophetic Dream Journal App for Christians",
  description:
    "Log dreams and visions the moment you wake, test them against Scripture, and let Remembrance Moments gently remind you of what God has shown you. Free Christian dream journal app for iOS and Android.",
  alternates: { canonical: "/prophetic-dream-journal-app" },
  openGraph: {
    title: "Prophetic Dream Journal App for Christians — My Prophetic Journal",
    description:
      "Log dreams and visions the moment you wake, test them against Scripture, and let Remembrance Moments gently remind you of what God has shown you.",
    url: "https://mypropheticjournal.com/prophetic-dream-journal-app",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is a prophetic dream journal app?",
    a: "A prophetic dream journal app is a place to record dreams, visions, and prophetic impressions as soon as they happen — so details aren't lost to a busy morning. My Prophetic Journal adds Scripture-aware insight and gentle reminders on top of that record, built specifically for believers who take God's voice in the night seriously.",
  },
  {
    q: "How is this different from a regular journaling app?",
    a: "General journaling apps treat every entry the same. My Prophetic Journal lets you tag entries as a Dream, Vision, Prophetic Word, or Scripture Revelation, surfaces related Scripture, and uses Remembrance Moments to resurface what you recorded over the following days — so dreams get tested and stewarded, not just stored.",
  },
  {
    q: "Is it free to download?",
    a: "Yes. My Prophetic Journal is free to download on iOS and Android, with optional premium features for deeper pattern insight and team sharing.",
  },
  {
    q: "Can I share dreams with my prayer group or prophetic team?",
    a: "Yes. Prophetic Teams let you invite people you trust into a shared space to share notes, confirm a word, and grow in discernment together.",
  },
];

export default function PropheticDreamJournalAppPage() {
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
          <div className="eyebrow on-dark">Christian Dream Journal App</div>
          <h1>A prophetic dream journal built for believers.</h1>
          <p>
            Capture your dreams and visions the moment you wake, test them against Scripture, and
            let Remembrance Moments gently remind you of what God has shown you — so nothing gets
            buried and forgotten.
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
              <p>You wake up from a vivid dream — and by lunch, most of it is gone.</p>
            </div>
            <div className="problem-item">
              <p>You feel God spoke something significant, but you have no record to look back on.</p>
            </div>
            <div className="problem-item">
              <p>You&apos;re not sure how to test what you&apos;ve seen against Scripture.</p>
            </div>
          </div>
          <div className="problem-close">
            <span>
              A dream journal app that helps you <span className="accent">remember, test, and steward</span>{" "}
              what God is saying.
            </span>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="how-it-works">
        <div className="mpj-container">
          <div className="section-head reveal">
            <div className="eyebrow">How it works</div>
            <h2>Everything a Christian dream journal should do.</h2>
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
              <h3>Log it the moment you wake</h3>
              <p>
                Open the app and capture your dream in seconds, before the details fade. Tag it as a
                Dream, Vision, Prophetic Word, or Scripture Revelation.
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
                Inspired by the Hebrew call to remember &mdash; <em>zakar</em> &mdash; Remembrance
                Moments gently brings your dream back to mind over the next five days, so you
                actually sit with it instead of forgetting it.
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
              <h3>Test it against Scripture</h3>
              <p>
                Thoughtful AI surfaces Scripture that speaks to what you recorded, so you can weigh
                your dream with wisdom instead of guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="faq section-pad">
        <div className="mpj-container">
          <div className="section-head reveal" style={{ margin: "0 auto 48px", textAlign: "center", maxWidth: 640 }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Common questions</div>
            <h2>Dream journaling, answered.</h2>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />

      <Footer />
      <ScrollReveal />
    </div>
  );
}
