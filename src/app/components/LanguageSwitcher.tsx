'use client';

import { usePathname } from 'next/navigation';

import { LOCALE_COOKIE, localePath, stripLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

/**
 * Links to the same page in the other language and remembers the choice in a
 * cookie, so the middleware stops auto-redirecting by browser language. A
 * plain <a> (full page load) because each language has its own root layout.
 */
const LanguageSwitcher = ({
  locale,
  className = '',
  onNavigate,
}: {
  locale: Locale;
  className?: string;
  onNavigate?: () => void;
}) => {
  const pathname = usePathname() ?? '/';
  const target: Locale = locale === 'en' ? 'es' : 'en';
  const t = getDictionary(locale).switcher;
  const href = localePath(target, stripLocale(pathname));

  return (
    <a
      href={href}
      hrefLang={target}
      lang={target}
      className={`lang-switch ${className}`.trim()}
      aria-label={t.aria}
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
        onNavigate?.();
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" strokeLinejoin="round" />
      </svg>
      <span className="lang-full">{t.label}</span>
      <span className="lang-short">{t.short}</span>
    </a>
  );
};

export default LanguageSwitcher;
