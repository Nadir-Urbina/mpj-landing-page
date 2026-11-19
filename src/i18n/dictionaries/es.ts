import type { Dictionary } from "./en";

/**
 * Spanish copy. Terms follow the app's own Spanish (lib/l10n/app_es.arb in
 * myPjFlutter): "Mi Diario Profético", "Momentos de remembranza", "Palabra
 * profética", "Equipos", "Iniciar sesión". Scripture quotes are RVR1960, as in
 * the Spanish store listing. Prices carry "US$" because a bare "$" reads as
 * pesos in much of Latin America.
 */
const es: Dictionary = {
  brand: "Mi Diario Profético",
  meta: {
    defaultTitle: "Mi Diario Profético — App cristiana de diario de sueños",
    titleTemplate: "%s — Mi Diario Profético",
    description:
      "Registra tus sueños, visiones y palabras proféticas, y descubre la historia más grande que Dios está escribiendo en tu vida. App cristiana gratuita para iOS, Android y la web.",
    ogTitle: "Mi Diario Profético — Diario cristiano de sueños y palabras proféticas",
    appDescription:
      "Una app cristiana para registrar sueños, visiones y palabras proféticas, examinarlos a la luz de la Escritura y descubrir los patrones que Dios está revelando.",
  },
  header: {
    homeLabel: "Inicio de Mi Diario Profético",
    primaryNav: "Principal",
    mobileNav: "Menú móvil",
    toggleMenu: "Abrir o cerrar el menú",
    nav: { features: "Funciones", pricing: "Precios", blog: "Blog", contact: "Contacto" },
    signIn: "Iniciar sesión",
    signInMobile: "Iniciar sesión en la web",
    download: "Descargar gratis",
  },
  switcher: { label: "English", short: "EN", aria: "View this site in English" },
  downloadBadge: {
    small: "Gratis en iOS y Android",
    big: "Descarga la app",
    aria: "Descargar Mi Diario Profético",
  },
  webLink: "O úsala en la web →",
  hero: {
    iconAlt: "Ícono de la app Mi Diario Profético",
    titleStart: "Nunca olvides lo que ",
    titleAccent: "Dios te ha hablado.",
    sub: "Administra tus sueños, visiones y palabras proféticas, y descubre la historia más grande que Dios está escribiendo en tu vida.",
    badges: {
      believers: "Más de 500 creyentes",
      rating: "5.0 en la App Store",
      free: "Descarga gratuita",
    },
    mockupAlt: "Pantalla de inicio de Mi Diario Profético con un recordatorio de Momentos de remembranza",
  },
  problem: {
    lines: [
      "Tuviste un sueño. A la mañana siguiente, ya habías olvidado la mitad.",
      "Alguien declaró una palabra sobre ti. Querías escribirla.",
      "Sabes que Dios está hablando. Pero esos momentos se te siguen escapando.",
    ],
    closeStart: "Mi Diario Profético fue creado ",
    closeAccent: "exactamente para eso.",
  },
  features: {
    eyebrow: "Todo lo que recibes, a salvo",
    title: "Un hogar para las palabras que no quieres perder.",
    capture: {
      title: "Registra por tipo",
      body: "Guarda cada encuentro tal como llegó. Con un toque lo clasificas como Sueño, Visión, Palabra profética o Revelación bíblica.",
      types: ["Sueño", "Visión", "Palabra profética", "Revelación bíblica"],
      dreamLink: "Diario de sueños →",
      wordsLink: "Palabras proféticas →",
    },
    remembrance: {
      title: "Momentos de remembranza",
      tag: "5 días",
      bodyStart: "Inspirados en el llamado hebreo a recordar —",
      bodyWord: "zakar",
      bodyEnd:
        "—, los Momentos de remembranza te traen de vuelta tus notas pasadas a lo largo de cinco días. Nada de lo que recibes queda enterrado ni olvidado.",
      link: "Qué significa zakar →",
    },
    insight: {
      title: "Escritura y descubrimiento de patrones",
      body: "Una IA cuidadosa te sugiere pasajes de la Escritura relacionados con lo que registraste. Con el tiempo, revela los temas que Dios va entretejiendo en todo tu diario.",
    },
    teams: {
      title: "Equipos proféticos",
      body: "Invita a las personas en quienes confías a un espacio compartido. Compartan notas, confirmen una palabra y crezcan juntos en discernimiento y rendición de cuentas.",
    },
  },
  reviews: {
    eyebrow: "De quienes ya la usan",
    title: "Lo que dicen los creyentes.",
    note: "Reseñas reales de nuestros usuarios, en su idioma original.",
    marqueeLabel: "Reseñas de usuarios",
    viewMore: "Ver más",
    close: "Cerrar",
    stars: (n: number) => `${n} de 5 estrellas`,
  },
  pricing: {
    eyebrow: "Empieza gratis y quédate el tiempo que quieras",
    title: "Precios sencillos para una práctica de toda la vida.",
    free: {
      name: "Gratis",
      amount: "$0",
      per: "para siempre",
      tagline: "Todo lo que necesitas para empezar a registrar lo que Dios está diciendo.",
      items: [
        "Entradas ilimitadas en tu diario",
        "Registra por tipo: sueños, visiones, palabras",
        "Momentos de remembranza cada 5 días",
      ],
      cta: "Descargar gratis",
      webCta: "Empieza gratis en la web",
    },
    premium: {
      badge: "El más popular",
      name: "Premium",
      promoTag: "Oferta de introducción",
      amount: "US$0.99",
      per: "el primer mes",
      then: "Luego US$4.99 al mes. Cancela cuando quieras.",
      tagline: "Profundiza con descubrimiento de patrones, la Escritura y tu comunidad profética.",
      items: [
        "Todo lo del plan Gratis",
        "Sugerencias bíblicas con IA y descubrimiento de patrones",
        "Equipos proféticos y diarios compartidos",
      ],
      cta: "Empezar con Premium",
      note: "El primer mes a US$0.99 aplica al suscribirte desde la app para iOS o Android. La tienda te muestra el precio en tu moneda.",
    },
  },
  blog: {
    eyebrow: "Del blog",
    title: "Crece en tu don.",
    sub: "Ánimo práctico para creyentes que toman en serio la voz de Dios.",
    readMore: "Leer más →",
    viewAll: "Ver todos los artículos →",
    metaTitle: "Blog",
    metaDescription:
      "Ánimo práctico para creyentes que toman en serio la voz de Dios: sueños, discernimiento y crecimiento en el don profético.",
    emptyTitle: "Aún no hay artículos",
    emptyBody:
      "Estamos escribiendo los primeros artículos. Vuelve pronto para leer sobre sueños, discernimiento y crecimiento profético.",
    back: "← Volver al blog",
    notFound: "Artículo no encontrado",
    otherLanguageTag: "En inglés",
    otherLanguageNote: "Este artículo está disponible solo en inglés por ahora.",
    dateLocale: "es-419",
    categories: {
      Dreams: "Sueños",
      Visions: "Visiones",
      Discernment: "Discernimiento",
      "Prophetic Growth": "Crecimiento profético",
      Scripture: "Escritura",
    },
    placeholders: [
      {
        cat: "Dreams",
        title: "Cómo recordar un sueño antes de que se desvanezca",
        desc: "Cinco hábitos sencillos para no perder lo que viste en la noche.",
      },
      {
        cat: "Discernment",
        title: "Cómo examinar una palabra profética con sabiduría",
        desc: "Una manera bíblica y serena de juzgar lo que escuchaste, sin temor.",
      },
      {
        cat: "Prophetic Growth",
        title: "Por qué escribirlo lo cambia todo",
        desc: "Lo que sucede en tu fe cuando por fin llevas un registro de la voz de Dios.",
      },
    ],
  },
  likes: {
    encouraged: "Me animó",
    encouraging: "Me anima",
    likedAria: "Este artículo te animó",
    likeAria: "Marcar que este artículo te anima",
    count: (n: number) =>
      n === 1 ? "A 1 persona le animó este artículo" : `A ${n} personas les animó este artículo`,
  },
  contact: {
    eyebrow: "Nos encantaría saber de ti",
    title: "¿Preguntas, oración o una historia que contar?",
    lead: "Ya sea que quieras saber cómo funciona algo o simplemente contarnos lo que Dios está haciendo, del otro lado de este formulario hay una persona real.",
    infoText: "Con gusto te ayudaremos con cualquier pregunta que tengas.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo electrónico",
    emailPlaceholder: "tu@correo.com",
    message: "Mensaje",
    messagePlaceholder: "¿Cómo podemos ayudarte o qué te gustaría contarnos?",
    send: "Enviar mensaje",
    sending: "Enviando…",
    note: "Nunca compartiremos tu correo ni te enviaremos spam.",
    successTitle: "¡Mensaje enviado!",
    successBody: "Gracias por escribirnos. Te responderemos pronto.",
    sendAnother: "Enviar otro mensaje",
    error: "Algo salió mal. Inténtalo de nuevo.",
    networkError: "No se pudo enviar el mensaje. Inténtalo más tarde.",
    subject: (name: string) => `Website message (Spanish site) from ${name}`,
  },
  finalCta: {
    title: "Tu camino merece ser recordado.",
    sub: "Empieza gratis. No necesitas tarjeta de crédito.",
    verse: "“Escribe la visión, y declárala en tablas, para que corra el que leyere en ella.”",
    cite: "Habacuc 2:2 (RVR1960)",
  },
  footer: {
    nav: "Pie de página",
    dreamJournal: "Diario de sueños",
    propheticWords: "Palabras proféticas",
    remembrance: "Momentos de remembranza",
    pricing: "Precios",
    blog: "Blog",
    privacy: "Política de privacidad",
    contact: "Contacto",
    signIn: "Iniciar sesión",
  },
  notFound: {
    title: "Página no encontrada",
    body: "No encontramos la página que buscabas.",
    home: "Volver al inicio",
  },
  faq: { eyebrow: "Preguntas frecuentes", howItWorks: "Cómo funciona" },
};

export default es;
