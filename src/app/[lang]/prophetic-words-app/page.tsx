import type { Metadata } from "next";

import AppLandingPage, { landingMetadata, type LandingCopy } from "@/app/components/AppLandingPage";
import type { Locale } from "@/i18n/config";

const PATH = "/prophetic-words-app";

const COPY: Record<Locale, LandingCopy> = {
  en: {
    meta: {
      title: "Prophetic Words App — Track & Steward Prophecies",
      description:
        "Record the prophetic words spoken over your life, weigh them against Scripture, and watch for their fulfillment over time. Free prophetic journaling app for iOS, Android, and the web.",
      ogTitle: "Prophetic Words App — Track & Steward Prophecies",
      ogDescription:
        "Record the prophetic words spoken over your life, weigh them against Scripture, and watch for their fulfillment over time.",
    },
    hero: {
      eyebrow: "Prophetic Words App",
      title: "Every word spoken over you, kept and stewarded.",
      body: "Record the prophetic words you receive, weigh them against Scripture, and watch for their fulfillment over the years — instead of trusting them to memory.",
    },
    problem: {
      lines: [
        "Someone prophesied over you — and now you only recall the gist of it.",
        "The words you did write down are scattered across notes, voice memos, and texts.",
        "You have no way to see which words have already come to pass.",
      ],
      close: ["One place to ", "record, weigh, and revisit", " every word spoken over your life."],
    },
    how: {
      title: "Built for the long obedience of stewarding prophecy.",
      cards: [
        {
          title: "Capture it verbatim",
          body: "Log who spoke, when, and exactly what was said — by text or voice, while it's still fresh. Each word is filed as its own entry you can find again.",
        },
        {
          title: "Remembrance Moments",
          tag: "5-day",
          body: [
            "A word you never revisit may as well not have been recorded. ",
            { link: "Remembrance Moments", href: "/features/remembrance-moments" },
            " resurfaces past entries over five days so you keep praying them through.",
          ],
        },
        {
          title: "Weigh it with others",
          body: "Scripture says prophecy should be weighed. Invite trusted believers into a Prophetic Team to confirm, question, and pray over a word together.",
        },
      ],
    },
    faqTitle: "Stewarding prophecy, answered.",
    faq: [
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
    ],
    crosslink: {
      text: "Recording dreams and visions too?",
      link: "See how the dream journal works →",
      href: "/prophetic-dream-journal-app",
    },
  },
  es: {
    meta: {
      title: "App de palabras proféticas: registra y administra",
      description:
        "Registra las palabras proféticas declaradas sobre tu vida, examínalas a la luz de la Escritura y observa su cumplimiento con el tiempo. App cristiana gratuita para iOS, Android y la web.",
      ogTitle: "App de palabras proféticas — Mi Diario Profético",
      ogDescription:
        "Registra las palabras proféticas declaradas sobre tu vida, examínalas a la luz de la Escritura y observa su cumplimiento con el tiempo.",
    },
    hero: {
      eyebrow: "App de palabras proféticas",
      title: "Cada palabra declarada sobre ti, guardada y bien administrada.",
      body: "Registra las palabras proféticas que recibes, examínalas a la luz de la Escritura y observa su cumplimiento a lo largo de los años, en lugar de confiarlas a la memoria.",
    },
    problem: {
      lines: [
        "Alguien profetizó sobre ti, y ahora solo recuerdas la idea general.",
        "Las palabras que sí escribiste están dispersas entre notas, mensajes de voz y chats.",
        "No tienes forma de ver cuáles palabras ya se cumplieron.",
      ],
      close: ["Un solo lugar para ", "registrar, examinar y volver a", " cada palabra declarada sobre tu vida."],
    },
    how: {
      title: "Hecho para la constancia que requiere administrar la profecía.",
      cards: [
        {
          title: "Regístrala tal como fue dicha",
          body: "Anota quién habló, cuándo y qué dijo exactamente, por escrito o con tu voz, mientras está fresco. Cada palabra queda guardada como una entrada propia que puedes volver a encontrar.",
        },
        {
          title: "Momentos de remembranza",
          tag: "5 días",
          body: [
            "Una palabra a la que nunca vuelves es casi como si no la hubieras registrado. Los ",
            { link: "Momentos de remembranza", href: "/features/remembrance-moments" },
            " te traen de vuelta entradas pasadas a lo largo de cinco días para que sigas orando por ellas.",
          ],
        },
        {
          title: "Examínala con otros",
          body: "La Escritura dice que la profecía debe ser juzgada. Invita a creyentes de confianza a un Equipo profético para confirmar, cuestionar y orar juntos por una palabra.",
        },
      ],
    },
    faqTitle: "Administrar la profecía: preguntas y respuestas.",
    faq: [
      {
        q: "¿Cómo llevo un registro de las palabras proféticas declaradas sobre mí?",
        a: "Registra cada palabra lo antes posible después de recibirla: quién la dio, cuándo y qué se dijo, lo más literal que puedas. Mi Diario Profético guarda cada una como una entrada propia con la etiqueta Palabra profética, para que meses o años después puedas consultar el registro completo en lugar de depender de la memoria.",
      },
      {
        q: "¿Qué dice la Biblia sobre examinar la profecía?",
        a: "1 Corintios 14:29 enseña que cuando los profetas hablan, los demás deben juzgar lo que se dice. 1 Tesalonicenses 5:20-21 añade: \"No menospreciéis las profecías. Examinadlo todo; retened lo bueno\" (RVR1960). La Escritura trata la profecía como algo que se recibe con seriedad y se examina con cuidado: ni se desecha ni se acepta sin discernimiento.",
      },
      {
        q: "¿Debo escribir una palabra profética aunque no la entienda?",
        a: "Sí. Muchas palabras solo se entienden en retrospectiva. Habacuc 2:2-3 habla de escribir la visión con claridad porque \"tardará aún por un tiempo\" (RVR1960). Registrar una palabra que todavía no entiendes la conserva para la temporada en que su significado se aclare.",
      },
      {
        q: "¿Puedo compartir una palabra profética con personas de confianza?",
        a: "Sí. Los Equipos proféticos te permiten invitar a creyentes de confianza a un espacio compartido donde una palabra se puede juzgar, confirmar o llevar en oración juntos, que es justamente el discernimiento en comunidad que describe 1 Corintios 14:29.",
      },
    ],
    crosslink: {
      text: "¿También registras sueños y visiones?",
      link: "Mira cómo funciona el diario de sueños →",
      href: "/prophetic-dream-journal-app",
    },
  },
};

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return landingMetadata(COPY[lang], lang, PATH);
}

export default async function PropheticWordsAppPage({ params }: Props) {
  const { lang } = await params;
  return <AppLandingPage copy={COPY[lang]} locale={lang} />;
}
