/**
 * English copy for the shared layout and the homepage. `es.ts` must have the
 * same shape (it's typed as `Dictionary`), so TypeScript flags any missing
 * translation. Page-specific long-form copy lives next to each page.
 */
const en = {
  brand: "My Prophetic Journal",
  meta: {
    defaultTitle: "My Prophetic Journal — Christian Dream Journal App",
    titleTemplate: "%s — My Prophetic Journal",
    description:
      "Capture your dreams, visions, and prophetic words — and discover the bigger story God is writing in your life. Free Christian dream & prophetic journaling app for iOS, Android, and the web.",
    ogTitle: "My Prophetic Journal — Christian Dream & Prophetic Journaling App",
    appDescription:
      "A Christian dream and prophetic journaling app to capture dreams, visions, and prophetic words, test them against Scripture, and discover the patterns God is revealing.",
  },
  header: {
    homeLabel: "My Prophetic Journal home",
    primaryNav: "Primary",
    mobileNav: "Mobile",
    toggleMenu: "Toggle menu",
    nav: { features: "Features", pricing: "Pricing", blog: "Blog", contact: "Contact" },
    signIn: "Sign in",
    signInMobile: "Sign in on the web",
    download: "Download Free",
  },
  switcher: { label: "Español", short: "ES", aria: "Ver este sitio en español" },
  downloadBadge: {
    small: "Free on iOS & Android",
    big: "Download the App",
    aria: "Download My Prophetic Journal",
  },
  webLink: "Or use it on the web →",
  hero: {
    iconAlt: "My Prophetic Journal app icon",
    titleStart: "Never Forget What ",
    titleAccent: "God Has Spoken.",
    sub: "Steward your dreams, visions, and prophetic words — and discover the bigger story God is writing in your life.",
    badges: {
      believers: "500+ Believers",
      rating: "5.0 App Store Rating",
      free: "Free to Download",
    },
    mockupAlt: "My Prophetic Journal dashboard showing a Remembrance Moments reminder",
  },
  problem: {
    lines: [
      "You had a dream. By morning, half of it was gone.",
      "Someone spoke a word over you. You meant to write it down.",
      "You know God is speaking. But the moments keep slipping away.",
    ],
    closeStart: "My Prophetic Journal was built for ",
    closeAccent: "exactly this.",
  },
  features: {
    eyebrow: "Everything you receive, kept safe",
    title: "A home for the words you don't want to lose.",
    capture: {
      title: "Capture by type",
      body: "Log every encounter the way it actually came to you. One tap files it as a Dream, Vision, Prophetic Word, or Scripture Revelation.",
      types: ["Dream", "Vision", "Prophetic Word", "Scripture Revelation"],
      dreamLink: "Dream journaling →",
      wordsLink: "Prophetic words →",
    },
    remembrance: {
      title: "Remembrance Moments",
      tag: "5-day",
      bodyStart: "Inspired by the Hebrew call to remember — ",
      bodyWord: "zakar",
      bodyEnd:
        " — Remembrance Moments gently resurfaces your past notes over five days. Nothing you receive gets buried and forgotten.",
      link: "What zakar means →",
    },
    insight: {
      title: "Scripture & pattern insight",
      body: "Thoughtful AI surfaces Scripture that speaks to what you've recorded. Over time it reveals the recurring themes God is weaving across your whole journal.",
    },
    teams: {
      title: "Prophetic Teams",
      body: "Invite the people you trust into a shared space. Share notes, confirm a word, and grow together in discernment and accountability.",
    },
  },
  reviews: {
    eyebrow: "From the people using it",
    title: "What believers are saying.",
    note: "",
    marqueeLabel: "Reader testimonials",
    viewMore: "View more",
    close: "Close",
    stars: (n: number) => `${n} out of 5 stars`,
  },
  pricing: {
    eyebrow: "Start free, stay as long as you like",
    title: "Simple pricing for a lifelong practice.",
    free: {
      name: "Free",
      amount: "$0",
      per: "forever",
      tagline: "Everything you need to start capturing what God is saying.",
      items: [
        "Unlimited journal entries",
        "Capture by type — dreams, visions, words",
        "Remembrance Moments 5-day reminders",
      ],
      cta: "Download Free",
      webCta: "Start free on the web",
    },
    premium: {
      badge: "Most Popular",
      name: "Premium",
      promoTag: "Introductory offer",
      amount: "$0.99",
      per: "first month",
      then: "Then $4.99/month. Cancel anytime.",
      tagline: "Go deeper with insight, patterns, and your prophetic community.",
      items: [
        "Everything in Free",
        "AI Scripture suggestions & pattern insight",
        "Prophetic Teams & shared journals",
      ],
      cta: "Start with Premium",
      note: "The $0.99 first month is available when you subscribe in the iOS or Android app.",
    },
  },
  blog: {
    eyebrow: "From the journal",
    title: "Grow in your gifting.",
    sub: "Practical encouragement for believers who take God's voice seriously.",
    readMore: "Read More →",
    viewAll: "View all articles →",
    metaTitle: "Blog",
    metaDescription:
      "Practical encouragement for believers who take God's voice seriously — on dreams, discernment, and growing in your prophetic gifting.",
    emptyTitle: "No posts yet",
    emptyBody:
      "We're writing the first articles now — check back soon for encouragement on dreams, discernment, and prophetic growth.",
    back: "← Back to the journal",
    notFound: "Post not found",
    otherLanguageTag: "",
    otherLanguageNote: "",
    dateLocale: "en-US",
    categories: {} as Record<string, string>,
    placeholders: [
      {
        cat: "Dreams",
        title: "How to remember a dream before it fades",
        desc: "Five simple habits that help you hold onto what you saw in the night.",
      },
      {
        cat: "Discernment",
        title: "Testing a prophetic word with wisdom",
        desc: "A grounded, biblical way to weigh what you've heard without fear.",
      },
      {
        cat: "Prophetic Growth",
        title: "Why writing it down changes everything",
        desc: "What happens in your faith when you finally keep a record of God's voice.",
      },
    ],
  },
  likes: {
    encouraged: "Encouraged",
    encouraging: "Encouraging",
    likedAria: "You found this encouraging",
    likeAria: "Mark this as encouraging",
    count: (n: number) => `${n} ${n === 1 ? "person" : "people"} found this encouraging`,
  },
  contact: {
    eyebrow: "We'd love to hear from you",
    title: "Questions, prayer, or a story to share?",
    lead: "Whether you're wondering how something works or you just want to tell us what God is doing — there's a real person on the other side of this form.",
    infoText: "We will be happy to help you with any questions you have.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "How can we help, or what would you like to share?",
    send: "Send message",
    sending: "Sending…",
    note: "We'll never share your email or send spam.",
    successTitle: "Message sent!",
    successBody: "Thank you for reaching out. We'll get back to you soon.",
    sendAnother: "Send another message",
    error: "Something went wrong. Please try again.",
    networkError: "Failed to send message. Please try again later.",
    /** Email subject seen by the support inbox (kept in English on both sites). */
    subject: (name: string) => `Website message from ${name}`,
  },
  finalCta: {
    title: "Your journey deserves to be remembered.",
    sub: "Start free. No credit card required.",
    verse: "“Write the vision; make it plain on tablets, so he may run who reads it.”",
    cite: "Habakkuk 2:2",
  },
  footer: {
    nav: "Footer",
    dreamJournal: "Dream Journal",
    propheticWords: "Prophetic Words",
    remembrance: "Remembrance Moments",
    pricing: "Pricing",
    blog: "Blog",
    privacy: "Privacy Policy",
    contact: "Contact",
    signIn: "Sign in",
  },
  notFound: {
    title: "Page not found",
    body: "We couldn't find the page you were looking for.",
    home: "Back to home",
  },
  faq: { eyebrow: "Common questions", howItWorks: "How it works" },
};

export type Dictionary = typeof en;
export default en;
