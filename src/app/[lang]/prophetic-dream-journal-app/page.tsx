import type { Metadata } from "next";

import AppLandingPage, { landingMetadata, type LandingCopy } from "@/app/components/AppLandingPage";
import type { Locale } from "@/i18n/config";

const PATH = "/prophetic-dream-journal-app";

const COPY: Record<Locale, LandingCopy> = {
  en: {
    meta: {
      title: "Prophetic Dream Journal App for Christians",
      description:
        "Log dreams and visions the moment you wake, test them against Scripture, and let Remembrance Moments gently remind you of what God has shown you. Free Christian dream journal app for iOS, Android, and the web.",
      ogTitle: "Prophetic Dream Journal App for Christians — My Prophetic Journal",
      ogDescription:
        "Log dreams and visions the moment you wake, test them against Scripture, and let Remembrance Moments gently remind you of what God has shown you.",
    },
    hero: {
      eyebrow: "Christian Dream Journal App",
      title: "A prophetic dream journal built for believers.",
      body: "Capture your dreams and visions the moment you wake, test them against Scripture, and let Remembrance Moments gently remind you of what God has shown you — so nothing gets buried and forgotten.",
    },
    problem: {
      lines: [
        "You wake up from a vivid dream — and by lunch, most of it is gone.",
        "You feel God spoke something significant, but you have no record to look back on.",
        "You're not sure how to test what you've seen against Scripture.",
      ],
      close: ["A dream journal app that helps you ", "remember, test, and steward", " what God is saying."],
    },
    how: {
      title: "Everything a Christian dream journal should do.",
      cards: [
        {
          title: "Log it the moment you wake",
          body: "Open the app and capture your dream in seconds, before the details fade. Tag it as a Dream, Vision, Prophetic Word, or Scripture Revelation.",
        },
        {
          title: "Remembrance Moments",
          tag: "5-day",
          body: [
            "Inspired by the Hebrew call to remember — ",
            { em: "zakar" },
            " — Remembrance Moments gently brings your dream back to mind over the next five days, so you actually sit with it instead of forgetting it.",
          ],
        },
        {
          title: "Test it against Scripture",
          body: "Thoughtful AI surfaces Scripture that speaks to what you recorded, so you can weigh your dream with wisdom instead of guesswork.",
        },
      ],
    },
    faqTitle: "Dream journaling, answered.",
    faq: [
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
        a: "Yes. My Prophetic Journal is free to download on iOS and Android and free to use on the web, with optional premium features for deeper pattern insight and team sharing.",
      },
      {
        q: "Can I share dreams with my prayer group or prophetic team?",
        a: "Yes. Prophetic Teams let you invite people you trust into a shared space to share notes, confirm a word, and grow in discernment together.",
      },
    ],
  },
  es: {
    meta: {
      title: "App de diario de sueños proféticos para cristianos",
      description:
        "Registra tus sueños y visiones al despertar, examínalos a la luz de la Escritura y deja que los Momentos de remembranza te recuerden lo que Dios te mostró. App cristiana gratuita para iOS, Android y la web.",
      ogTitle: "App de diario de sueños proféticos para cristianos — Mi Diario Profético",
      ogDescription:
        "Registra tus sueños y visiones al despertar, examínalos a la luz de la Escritura y deja que los Momentos de remembranza te recuerden lo que Dios te mostró.",
    },
    hero: {
      eyebrow: "App cristiana de diario de sueños",
      title: "Un diario de sueños proféticos hecho para creyentes.",
      body: "Registra tus sueños y visiones en cuanto despiertas, examínalos a la luz de la Escritura y deja que los Momentos de remembranza te recuerden lo que Dios te mostró, para que nada quede enterrado ni olvidado.",
    },
    problem: {
      lines: [
        "Despiertas de un sueño muy vívido y, para el mediodía, ya olvidaste casi todo.",
        "Sientes que Dios te dijo algo importante, pero no tienes un registro al cual volver.",
        "No sabes bien cómo examinar lo que viste a la luz de la Escritura.",
      ],
      close: ["Una app de diario de sueños que te ayuda a ", "recordar, examinar y administrar", " lo que Dios está diciendo."],
    },
    how: {
      title: "Todo lo que un diario cristiano de sueños debe hacer.",
      cards: [
        {
          title: "Regístralo en cuanto despiertas",
          body: "Abre la app y captura tu sueño en segundos, antes de que los detalles se desvanezcan. Clasifícalo como Sueño, Visión, Palabra profética o Revelación bíblica.",
        },
        {
          title: "Momentos de remembranza",
          tag: "5 días",
          body: [
            "Inspirados en el llamado hebreo a recordar —",
            { em: "zakar" },
            "—, los Momentos de remembranza te traen tu sueño de vuelta a la mente durante los cinco días siguientes, para que de verdad reflexiones en él en lugar de olvidarlo.",
          ],
        },
        {
          title: "Examínalo a la luz de la Escritura",
          body: "Una IA cuidadosa te sugiere pasajes de la Escritura relacionados con lo que registraste, para que juzgues tu sueño con sabiduría y no por suposiciones.",
        },
      ],
    },
    faqTitle: "Diario de sueños: preguntas y respuestas.",
    faq: [
      {
        q: "¿Qué es una app de diario de sueños proféticos?",
        a: "Es un lugar para registrar sueños, visiones e impresiones proféticas en cuanto suceden, para que los detalles no se pierdan en el ajetreo de la mañana. Mi Diario Profético agrega a ese registro sugerencias de la Escritura y recordatorios suaves, y está pensado específicamente para creyentes que toman en serio la voz de Dios en la noche.",
      },
      {
        q: "¿En qué se diferencia de una app de diario común?",
        a: "Las apps de diario generales tratan todas las entradas igual. Mi Diario Profético te permite clasificar cada entrada como Sueño, Visión, Palabra profética o Revelación bíblica, te sugiere pasajes de la Escritura relacionados y usa los Momentos de remembranza para traerte de vuelta lo que registraste en los días siguientes. Así tus sueños se examinan y se administran, no solo se guardan.",
      },
      {
        q: "¿Es gratis?",
        a: "Sí. Mi Diario Profético se descarga gratis en iOS y Android y se usa gratis en la web, con funciones Premium opcionales para descubrir patrones más a fondo y compartir en equipo.",
      },
      {
        q: "¿Puedo compartir mis sueños con mi grupo de oración o mi equipo profético?",
        a: "Sí. Los Equipos proféticos te permiten invitar a personas de confianza a un espacio compartido para compartir notas, confirmar una palabra y crecer juntos en discernimiento.",
      },
    ],
  },
};

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return landingMetadata(COPY[lang], lang, PATH);
}

export default async function PropheticDreamJournalAppPage({ params }: Props) {
  const { lang } = await params;
  return <AppLandingPage copy={COPY[lang]} locale={lang} />;
}
