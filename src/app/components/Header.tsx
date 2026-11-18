'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DOWNLOAD_LINK, SIGN_IN_LINK } from '../lib/links';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ locale }: { locale: Locale }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const d = getDictionary(locale);
  const t = d.header;

  const navLinks = [
    { name: t.nav.features, href: localePath(locale, '/#features') },
    { name: t.nav.pricing, href: localePath(locale, '/#pricing') },
    { name: t.nav.blog, href: localePath(locale, '/#blog') },
    { name: t.nav.contact, href: localePath(locale, '/#contact') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="mpj-container header-inner">
        <Link className="brand" href={localePath(locale, '/#top')} aria-label={t.homeLabel}>
          <span className="logo-mark" aria-hidden="true">
            <Image src="/mainLogo.png" alt="" width={40} height={40} />
          </span>
          <span className="wordmark">{d.brand}</span>
        </Link>

        <nav className="nav-links" aria-label={t.primaryNav}>
          {navLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <LanguageSwitcher locale={locale} className="lang-switch-header" />
          <a href={SIGN_IN_LINK} className="btn btn-signin-sm">
            {t.signIn}
          </a>
          <a
            href={DOWNLOAD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-download-sm"
          >
            {t.download}
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={t.toggleMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6 18 18M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mpj-container">
          <nav aria-label={t.mobileNav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} className="lang-switch-menu" onNavigate={() => setMenuOpen(false)} />
            <a
              href={DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-download-sm"
              onClick={() => setMenuOpen(false)}
            >
              {t.download}
            </a>
            <a href={SIGN_IN_LINK} className="btn btn-signin-sm" onClick={() => setMenuOpen(false)}>
              {t.signInMobile}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
