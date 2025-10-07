'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAppStoreLink, useIsDesktop } from '../hooks/usePlatform';
import DownloadModal from './DownloadModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const appStoreLink = useAppStoreLink();
  const isDesktop = useIsDesktop();

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDesktop) {
      e.preventDefault();
      setShowModal(true);
    }
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { name: 'Features', href: '#features' },
    //{ name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Community', href: '#community' },
    { name: 'Security', href: '#security' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 flex-shrink-0">
              <Image
                src="/mainLogo.png"
                alt="My Prophetic Journal"
                width={32}
                height={32}
                className="rounded-md w-full h-full"
              />
            </div>
            <span className="hidden sm:block text-lg font-bold text-foreground whitespace-nowrap">
              My Prophetic Journal
            </span>
            <span className="sm:hidden text-sm font-bold text-foreground whitespace-nowrap">
              MPJ
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Download Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-1 flex-shrink-0 ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md shadow-lg">
            <div className="px-4 sm:px-6 py-4 space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/70 hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDownloadClick}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full text-center"
                >
                  Download Free
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download Modal */}
      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
};

export default Header;

