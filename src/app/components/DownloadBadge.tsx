import React from 'react';
import { DOWNLOAD_LINK } from '../lib/links';

interface DownloadBadgeProps {
  className?: string;
}

/**
 * Single download CTA (.store-row / .store-btn), wired to the AppsFlyer smart
 * link — it routes the visitor to the App Store or Google Play automatically
 * based on their device, so there's no separate iOS/Android choice to make.
 */
const DownloadBadge: React.FC<DownloadBadgeProps> = ({ className = '' }) => (
  <div className={`store-row ${className}`}>
    <a
      href={DOWNLOAD_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="store-btn"
      aria-label="Download My Prophetic Journal"
    >
      <span className="glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 3v12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 10.5 12 15.5 17 10.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 18.5v1A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="store-txt">
        <small>Free on iOS &amp; Android</small>
        <b>Download the App</b>
      </span>
    </a>
  </div>
);

export default DownloadBadge;
