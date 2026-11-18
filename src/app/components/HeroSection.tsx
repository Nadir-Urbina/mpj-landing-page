import Image from 'next/image';
import DownloadBadge from './DownloadBadge';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

const HeroSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).hero;
  return (
    <section className="hero" id="top">
      <div className="mpj-container hero-grid">
        <div className="hero-copy">
          <div className="app-icon-slot reveal">
            <Image src="/mainLogo.png" alt={t.iconAlt} width={60} height={60} />
          </div>
          <h1 className="reveal d1">
            {t.titleStart}<span className="accent">{t.titleAccent}</span>
          </h1>
          <p className="hero-sub reveal d2">{t.sub}</p>

          <div id="download">
            <DownloadBadge locale={locale} withWebLink className="reveal d2" />
          </div>

          <div className="social-badges reveal d3">
            <span className="badge"><span className="dot" />{t.badges.believers}</span>
            <span className="badge"><span className="stars">★★★★★</span>{t.badges.rating}</span>
            <span className="badge"><span className="dot" />{t.badges.free}</span>
          </div>
        </div>

        <div className="hero-visual reveal d2">
          <Image
            src="/remembrance moments no bg website.webp"
            alt={t.mockupAlt}
            width={621}
            height={1344}
            className="phone-mockup"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
