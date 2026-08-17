import type { Metadata } from "next";
import Link from "next/link";

import Header from "../../components/Header";
import { SITE_URL } from "../../lib/links";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import DownloadBadge from "../../components/DownloadBadge";
import ReviewsSection from "../../components/ReviewsSection";
import FinalCtaSection from "../../components/FinalCtaSection";

export const metadata: Metadata = {
  title: { absolute: "Remembrance Moments — What Zakar Means in Hebrew" },
  description:
    "What the Hebrew word zakar teaches about remembering, and how Remembrance Moments resurfaces your dreams and prophetic words over five days so nothing God said gets forgotten.",
  alternates: { canonical: "/features/remembrance-moments" },
  openGraph: {
    title: "Remembrance Moments — Zakar & Spiritual Stewardship",
    description:
      "What the Hebrew word zakar teaches about remembering, and how Remembrance Moments keeps what God said from being forgotten.",
    url: `${SITE_URL}/features/remembrance-moments`,
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What does zakar mean in Hebrew?",
    a: "Zakar (זָכַר) is the Hebrew verb usually translated \"remember.\" In biblical usage it means far more than mental recall — it carries the sense of acting on what is remembered. When Scripture says God remembered Noah (Genesis 8:1) or remembered His covenant (Exodus 2:24), it describes God moving to act, not merely recalling a fact.",
  },
  {
    q: "Why does the Bible place such weight on remembering?",
    a: "Because forgetting is treated as a spiritual danger. Deuteronomy 4:9 warns, \"Take care, and keep your soul diligently, lest you forget the things that your eyes have seen.\" Israel built memorial stones, kept feasts, and rehearsed their history precisely because God's people are prone to forget what He has done.",
  },
  {
    q: "How do Remembrance Moments work in the app?",
    a: "After you record a dream, vision, or prophetic word, the app gently resurfaces that entry across the following five days. Rather than sitting untouched in a journal you never reopen, what you recorded comes back to you while it can still be prayed over, tested, and stewarded.",
  },
  {
    q: "Can I turn the reminders off?",
    a: "Yes. Remembrance Moments are designed to be gentle rather than demanding, and you can disable them at any time — including directly from a reminder itself.",
  },
];

export default function RemembranceMomentsPage() {
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
          <div className="eyebrow on-dark">Feature</div>
          <h1>Remembrance Moments</h1>
          <p>
            Inspired by <em>zakar</em>, the Hebrew call to remember — and built so the words God
            spoke to you don&apos;t quietly disappear into a journal you never reopen.
          </p>
          <div style={{ marginTop: 32 }}>
            <DownloadBadge />
          </div>
        </div>
      </section>

      <section className="article-wrap section-pad">
        <div className="mpj-container">
          <article className="article">
            <h2>What <em>zakar</em> actually means</h2>
            <p>
              The Hebrew verb <em>zakar</em> (זָכַר) is usually rendered &ldquo;remember&rdquo; in
              English, but the English word is thinner than the Hebrew. <em>Zakar</em> is not
              primarily about mental recall. It carries the weight of acting on what is remembered.
            </p>
            <p>
              When Genesis 8:1 says God &ldquo;remembered Noah,&rdquo; it does not mean Noah had
              slipped His mind. It means God moved. When Exodus 2:24 says God &ldquo;remembered his
              covenant,&rdquo; deliverance follows. To remember, biblically, is to bring the past to
              bear on the present.
            </p>

            <h2>Why Scripture treats forgetting as a danger</h2>
            <p>
              Deuteronomy 4:9 puts it plainly: &ldquo;Take care, and keep your soul diligently, lest
              you forget the things that your eyes have seen, and lest they depart from your heart
              all the days of your life.&rdquo;
            </p>
            <p>
              This is why Israel stacked memorial stones at the Jordan (Joshua 4:6), kept feasts,
              and rehearsed their own history out loud. God&apos;s people are prone to forget what He
              has done — not from indifference, but because life is loud and memory is short.
            </p>
            <blockquote>
              &ldquo;Write the vision; make it plain on tablets, so he may run who reads it. For
              still the vision awaits its appointed time.&rdquo;
              <br />
              <cite>Habakkuk 2:2-3</cite>
            </blockquote>

            <h2>How Remembrance Moments work</h2>
            <p>
              Most journaling apps are write-only. You record something meaningful, close the app,
              and never see that entry again unless you go hunting for it. The record exists, but the
              remembering never happens.
            </p>
            <p>
              Remembrance Moments close that gap. After you log a dream, vision, or prophetic word,
              the app gently resurfaces that entry over the following five days — while it can still
              be prayed over, tested against Scripture, and stewarded. Not a notification demanding
              attention, but an invitation to sit with what God said.
            </p>
            <p>
              Some words are only understood in hindsight. Joseph&apos;s brothers did not grasp his
              dreams for more than a decade. Resurfacing gives an entry the second, third, and fourth
              reading that meaning often requires.
            </p>

            <h2>Where it fits</h2>
            <p>
              Remembrance Moments work across everything you record — whether you are keeping a{" "}
              <Link href="/prophetic-dream-journal-app">prophetic dream journal</Link> or{" "}
              <Link href="/prophetic-words-app">tracking prophetic words</Link> spoken over your
              life.
            </p>
          </article>
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
            <h2>Zakar and remembering, answered.</h2>
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
