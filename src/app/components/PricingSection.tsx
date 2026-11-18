import DownloadButton from "./DownloadButton";
import { SIGN_IN_LINK } from "../lib/links";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PricingSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).pricing;
  return (
    <section className="pricing section-pad" id="pricing">
      <div className="mpj-container">
        <div className="section-head reveal" style={{ margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.title}</h2>
        </div>
        <div className="pricing-grid">
          <div className="price-card reveal">
            <div className="price-name">{t.free.name}</div>
            <div className="price-amount">
              <span className="num">{t.free.amount}</span>
              <span className="per">{t.free.per}</span>
            </div>
            <p className="price-tagline">{t.free.tagline}</p>
            <ul className="price-list">
              {t.free.items.map((item) => (
                <li key={item}><Check />{item}</li>
              ))}
            </ul>
            <div className="price-actions">
              <DownloadButton className="btn btn-outline">{t.free.cta}</DownloadButton>
              <a href={SIGN_IN_LINK} className="btn btn-text">{t.free.webCta} →</a>
            </div>
          </div>

          <div className="price-card popular reveal d1">
            <span className="popular-badge">{t.premium.badge}</span>
            <div className="price-name">{t.premium.name}</div>
            <div className="price-promo-tag">{t.premium.promoTag}</div>
            <div className="price-amount">
              <span className="num">{t.premium.amount}</span>
              <span className="per">{t.premium.per}</span>
            </div>
            <p className="price-then">{t.premium.then}</p>
            <p className="price-tagline">{t.premium.tagline}</p>
            <ul className="price-list">
              {t.premium.items.map((item) => (
                <li key={item}><Check />{item}</li>
              ))}
            </ul>
            <div className="price-actions">
              <DownloadButton className="btn btn-primary">{t.premium.cta}</DownloadButton>
              <p className="price-note">{t.premium.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
