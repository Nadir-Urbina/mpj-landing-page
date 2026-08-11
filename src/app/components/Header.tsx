'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppStoreLink, useIsDesktop } from '../hooks/usePlatform';
import DownloadModal from './DownloadModal';

const NAV_LINKS = [
  { name: 'Features', href: '/#features' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const appStoreLink = useAppStoreLink();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDesktop) {
      e.preventDefault();
      setShowModal(true);
    }
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="mpj-container header-inner">
        <a className="brand" href="/#top" aria-label="My Prophetic Journal home">
          <span className="logo-mark" aria-hidden="true">
            <Image src="/mainLogo.png" alt="" width={40} height={40} />
          </span>
          <span className="wordmark">My Prophetic Journal</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            className="btn btn-download-sm"
          >
            Download Free
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
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
          <nav aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="btn btn-download-sm"
            >
              Download Free
            </a>
          </nav>
        </div>
      </div>

      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
};

export default Header;
