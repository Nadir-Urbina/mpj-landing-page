'use client';

import { useEffect, useState } from 'react';

export type Platform = 'ios' | 'android' | 'other';

export const APP_STORE_LINKS = {
  ios: 'https://apps.apple.com/us/app/my-prophetic-journal/id6748415304',
  android: 'https://play.google.com/store/apps/details?id=com.hizwayz.my_prophetic_journal',
};

export function usePlatform(): Platform {
  const [platform, setPlatform] = useState<Platform>('other');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || '';

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setPlatform('ios');
    }
    // Android detection
    else if (/android/i.test(userAgent)) {
      setPlatform('android');
    }
    // Default to other (desktop, etc.)
    else {
      setPlatform('other');
    }
  }, []);

  return platform;
}

export function useAppStoreLink(): string {
  const platform = usePlatform();

  // Default to iOS link for desktop users or unknown platforms
  if (platform === 'android') {
    return APP_STORE_LINKS.android;
  }

  return APP_STORE_LINKS.ios;
}

export function useIsDesktop(): boolean {
  const platform = usePlatform();
  return platform === 'other';
}
