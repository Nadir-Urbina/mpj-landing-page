'use client';

import React, { useState } from 'react';
import { APP_STORE_LINKS, useIsDesktop } from '../hooks/usePlatform';
import DownloadModal from './DownloadModal';

interface StoreButtonsProps {
  className?: string;
}

/**
 * Store buttons matching the landing design (.store-row / .store-btn), wired to
 * the real App Store / Google Play links. On desktop, clicking opens the
 * QR-code DownloadModal instead of navigating away.
 */
const StoreButtons: React.FC<StoreButtonsProps> = ({ className = '' }) => {
  const isDesktop = useIsDesktop();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDesktop) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <div className={`store-row ${className}`}>
        <a
          href={APP_STORE_LINKS.ios}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="store-btn"
          aria-label="Download on the App Store"
        >
          <span className="glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="#fff">
              <path d="M16.4 1.6c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.8-.8 1.9-1.4 2.8-1.4ZM19.6 17c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.3-4 3.3-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.7-3.9-3.1C-.1 16.7-.4 11.6 1.6 8.9 3 7 5.1 5.9 7.1 5.9c2 0 3.2 1.1 4.9 1.1 1.6 0 2.5-1.1 4.8-1.1 1.7 0 3.6 1 4.9 2.6-4.3 2.4-3.6 8.5-2.1 8.5Z" />
            </svg>
          </span>
          <span className="store-txt">
            <small>Download on the</small>
            <b>App Store</b>
          </span>
        </a>
        <a
          href={APP_STORE_LINKS.android}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="store-btn"
          aria-label="Get it on Google Play"
        >
          <span className="glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M3.6 2.3 13.3 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1Z" fill="#7aa7ff" />
              <path d="m16.5 8.8 2.9 1.6c1 .6 1 1.9 0 2.5l-2.9 1.6L14 12l2.5-3.2Z" fill="#ecca94" />
              <path d="M3.6 2.3c.3-.2.7-.2 1.1 0L16.5 8.8 14 12 3.6 2.3Z" fill="#fff" />
              <path d="M3.6 21.7 14 12l2.5 3.2L4.7 21.7c-.4.2-.8.2-1.1 0Z" fill="#cdd9f0" />
            </svg>
          </span>
          <span className="store-txt">
            <small>Get it on</small>
            <b>Google Play</b>
          </span>
        </a>
      </div>

      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default StoreButtons;
