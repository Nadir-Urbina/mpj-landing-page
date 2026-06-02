'use client';

import React, { useState } from 'react';
import { useAppStoreLink, useIsDesktop } from '../hooks/usePlatform';
import DownloadModal from './DownloadModal';

interface DownloadButtonProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * A CTA that opens the QR-code DownloadModal on desktop (so visitors can pick a
 * store), and links straight to the platform-appropriate store on mobile.
 * Same behavior as the header's "Download Free" button.
 */
const DownloadButton: React.FC<DownloadButtonProps> = ({ className = '', children }) => {
  const isDesktop = useIsDesktop();
  const appStoreLink = useAppStoreLink();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDesktop) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <a
        href={appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default DownloadButton;
