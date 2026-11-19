import type { Metadata } from "next";

import Header from "@/app/components/Header";
import { SITE_URL } from "@/app/lib/links";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import DownloadBadge from "@/app/components/DownloadBadge";
import ReviewsSection from "@/app/components/ReviewsSection";
import FinalCtaSection from "@/app/components/FinalCtaSection";
import { RichText, type Rich } from "@/app/components/RichText";
import { localePath, ogLocale, pageAlternates, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const PATH = "/features/remembrance-moments";

type Block = { h2: Rich } | { p: Rich } | { quote: string; cite: string };

type Copy = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  hero: { eyebrow: string; title: string; body: Rich };
  article: Block[];
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const COPY: Record<Locale, Copy> = {
  en: {
    meta: {
      title: "Remembrance Moments — What Zakar Means in Hebrew",
      description:
        "What the Hebrew word zakar teaches about remembering, and how Remembrance Moments resurfaces your dreams and prophetic words over five days so nothing God said gets forgotten.",
      ogTitle: "Remembrance Moments — Zakar & Spiritual Stewardship",
      ogDescription:
        "What the Hebrew word zakar teaches about remembering, and how Remembrance Moments keeps what God said from being forgotten.",
    },
    hero: {
      eyebrow: "Feature",
      title: "Remembrance Moments",
      body: [
        "Inspired by ",
        { em: "zakar" },
        ", the Hebrew call to remember — and built so the words God spoke to you don't quietly disappear into a journal you never reopen.",
      ],
    },
    article: [
      { h2: ["What ", { em: "zakar" }, " actually means"] },
      {
        p: [
          "The Hebrew verb ",
          { em: "zakar" },
          " (זָכַר) is usually rendered “remember” in English, but the English word is thinner than the Hebrew. ",
          { em: "Zakar" },
          " is not primarily about mental recall. It carries the weight of acting on what is remembered.",
        ],
      },
      {
        p: "When Genesis 8:1 says God “remembered Noah,” it does not mean Noah had slipped His mind. It means God moved. When Exodus 2:24 says God “remembered his covenant,” deliverance follows. To remember, biblically, is to bring the past to bear on the present.",
      },
      { h2: "Why Scripture treats forgetting as a danger" },
      {
        p: "Deuteronomy 4:9 puts it plainly: “Take care, and keep your soul diligently, lest you forget the things that your eyes have seen, and lest they depart from your heart all the days of your life.”",
      },
      {
        p: "This is why Israel stacked memorial stones at the Jordan (Joshua 4:6), kept feasts, and rehearsed their own history out loud. God's people are prone to forget what He has done — not from indifference, but because life is loud and memory is short.",
      },
      {
        quote:
          "“Write the vision; make it plain on tablets, so he may run who reads it. For still the vision awaits its appointed time.”",
        cite: "Habakkuk 2:2-3",
      },
      { h2: "How Remembrance Moments work" },
      {
        p: "Most journaling apps are write-only. You record something meaningful, close the app, and never see that entry again unless you go hunting for it. The record exists, but the remembering never happens.",
      },
      {
        p: "Remembrance Moments close that gap. After you log a dream, vision, or prophetic word, the app gently resurfaces that entry over the following five days — while it can still be prayed over, tested against Scripture, and stewarded. Not a notification demanding attention, but an invitation to sit with what God said.",
      },
      {
        p: "Some words are only understood in hindsight. Joseph's brothers did not grasp his dreams for more than a decade. Resurfacing gives an entry the second, third, and fourth reading that meaning often requires.",
      },
      { h2: "Where it fits" },
      {
        p: [
          "Remembrance Moments work across everything you record — whether you are keeping a ",
          { link: "prophetic dream journal", href: "/prophetic-dream-journal-app" },
          " or ",
          { link: "tracking prophetic words", href: "/prophetic-words-app" },
          " spoken over your life.",
        ],
      },
    ],
    faqTitle: "Zakar and remembering, answered.",
    faq: [
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
    ],
  },
  es: {
    meta: {
      title: "Momentos de remembranza: qué significa zakar",
      description:
        "Lo que la palabra hebrea zakar enseña sobre recordar, y cómo los Momentos de remembranza te traen de vuelta tus sueños y palabras proféticas durante cinco días para que nada de lo que Dios dijo se olvide.",
      ogTitle: "Momentos de remembranza — Zakar y la mayordomía espiritual",
      ogDescription:
        "Lo que la palabra hebrea zakar enseña sobre recordar, y cómo los Momentos de remembranza evitan que olvides lo que Dios te dijo.",
    },
    hero: {
      eyebrow: "Función",
      title: "Momentos de remembranza",
      body: [
        "Inspirados en ",
        { em: "zakar" },
        ", el llamado hebreo a recordar, y creados para que las palabras que Dios te habló no desaparezcan en silencio dentro de un diario que nunca vuelves a abrir.",
      ],
    },
    article: [
      { h2: ["Lo que ", { em: "zakar" }, " significa en realidad"] },
      {
        p: [
          "El verbo hebreo ",
          { em: "zakar" },
          " (זָכַר) suele traducirse como “recordar”, pero la palabra en español se queda corta frente al hebreo. ",
          { em: "Zakar" },
          " no se trata principalmente de traer algo a la mente. Lleva el peso de actuar conforme a lo que se recuerda.",
        ],
      },
      {
        p: "Cuando Génesis 8:1 dice que “se acordó Dios de Noé”, no significa que Noé se le hubiera olvidado. Significa que Dios actuó. Cuando Éxodo 2:24 dice que Dios “se acordó de su pacto”, lo que sigue es la liberación. En la Biblia, recordar es traer el pasado a obrar en el presente.",
      },
      { h2: "Por qué la Escritura trata el olvido como un peligro" },
      {
        p: "Deuteronomio 4:9 lo dice con claridad: “Por tanto, guárdate, y guarda tu alma con diligencia, para que no te olvides de las cosas que tus ojos han visto, ni se aparten de tu corazón todos los días de tu vida” (RVR1960).",
      },
      {
        p: "Por eso Israel levantó piedras de memoria junto al Jordán (Josué 4:6), celebraba fiestas y repasaba en voz alta su propia historia. El pueblo de Dios tiende a olvidar lo que Él ha hecho, no por indiferencia, sino porque la vida es ruidosa y la memoria es corta.",
      },
      {
        quote:
          "“Escribe la visión, y declárala en tablas, para que corra el que leyere en ella. Aunque la visión tardará aún por un tiempo…”",
        cite: "Habacuc 2:2-3 (RVR1960)",
      },
      { h2: "Cómo funcionan los Momentos de remembranza" },
      {
        p: "La mayoría de las apps de diario son de solo escritura. Registras algo significativo, cierras la app y nunca vuelves a ver esa entrada a menos que la busques. El registro existe, pero el recordar nunca sucede.",
      },
      {
        p: "Los Momentos de remembranza cierran esa brecha. Después de registrar un sueño, una visión o una palabra profética, la app te trae de vuelta esa entrada con suavidad durante los cinco días siguientes, mientras todavía puedes orar por ella, examinarla a la luz de la Escritura y administrarla. No es una notificación que exige tu atención, sino una invitación a detenerte en lo que Dios dijo.",
      },
      {
        p: "Algunas palabras solo se entienden en retrospectiva. Los hermanos de José no comprendieron sus sueños sino hasta más de una década después. Volver a ver una entrada le da la segunda, tercera y cuarta lectura que su significado a menudo requiere.",
      },
      { h2: "Dónde encaja" },
      {
        p: [
          "Los Momentos de remembranza funcionan con todo lo que registras, ya sea que lleves un ",
          { link: "diario de sueños proféticos", href: "/prophetic-dream-journal-app" },
          " o un ",
          { link: "registro de las palabras proféticas", href: "/prophetic-words-app" },
          " declaradas sobre tu vida.",
        ],
      },
    ],
    faqTitle: "Zakar y el recordar: preguntas y respuestas.",
    faq: [
      {
        q: "¿Qué significa zakar en hebreo?",
        a: "Zakar (זָכַר) es el verbo hebreo que suele traducirse como \"recordar\". En el uso bíblico significa mucho más que traer algo a la mente: implica actuar conforme a lo que se recuerda. Cuando la Escritura dice que Dios se acordó de Noé (Génesis 8:1) o de su pacto (Éxodo 2:24), describe a Dios moviéndose para actuar, no solo recordando un dato.",
      },
      {
        q: "¿Por qué la Biblia da tanto peso a recordar?",
        a: "Porque trata el olvido como un peligro espiritual. Deuteronomio 4:9 advierte: \"Guárdate, y guarda tu alma con diligencia, para que no te olvides de las cosas que tus ojos han visto\" (RVR1960). Israel levantó piedras de memoria, celebraba fiestas y repasaba su historia precisamente porque el pueblo de Dios tiende a olvidar lo que Él ha hecho.",
      },
      {
        q: "¿Cómo funcionan los Momentos de remembranza en la app?",
        a: "Después de que registras un sueño, una visión o una palabra profética, la app te trae de vuelta esa entrada con suavidad durante los cinco días siguientes. En lugar de quedarse intacto en un diario que nunca vuelves a abrir, lo que registraste regresa a ti mientras todavía puedes orar por ello, examinarlo y administrarlo.",
      },
      {
        q: "¿Puedo desactivar los recordatorios?",
        a: "Sí. Los Momentos de remembranza están pensados para ser suaves, no exigentes, y puedes desactivarlos en cualquier momento, incluso directamente desde un recordatorio.",
      },
    ],
  },
};

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const copy = COPY[lang];
  return {
    title: { absolute: copy.meta.title },
    description: copy.meta.description,
    alternates: pageAlternates(lang, PATH),
    openGraph: {
      title: copy.meta.ogTitle,
      description: copy.meta.ogDescription,
      url: `${SITE_URL}${localePath(lang, PATH)}`,
      locale: ogLocale[lang],
      type: "website",
    },
  };
}

export default async function RemembranceMomentsPage({ params }: Props) {
  const { lang } = await params;
  const copy = COPY[lang];
  const shared = getDictionary(lang).faq;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="mpj">
      <Header locale={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="page-hero">
        <div className="mpj-container">
          <div className="eyebrow on-dark">{copy.hero.eyebrow}</div>
          <h1>{copy.hero.title}</h1>
          <p>
            <RichText value={copy.hero.body} locale={lang} />
          </p>
          <div style={{ marginTop: 32 }}>
            <DownloadBadge locale={lang} withWebLink />
          </div>
        </div>
      </section>

      <section className="article-wrap section-pad">
        <div className="mpj-container">
          <article className="article">
            {copy.article.map((block, i) =>
              "h2" in block ? (
                <h2 key={i}>
                  <RichText value={block.h2} locale={lang} />
                </h2>
              ) : "p" in block ? (
                <p key={i}>
                  <RichText value={block.p} locale={lang} />
                </p>
              ) : (
                <blockquote key={i}>
                  {block.quote}
                  <br />
                  <cite>{block.cite}</cite>
                </blockquote>
              )
            )}
          </article>
        </div>
      </section>

      <ReviewsSection locale={lang} />

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
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection locale={lang} />

      <Footer locale={lang} />
      <ScrollReveal />
    </div>
  );
}

