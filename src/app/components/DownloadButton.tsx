import React from 'react';
import { DOWNLOAD_LINK } from '../lib/links';

interface DownloadButtonProps {
  className?: string;
  children: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className = '', children }) => (
  <a href={DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

export default DownloadButton;
