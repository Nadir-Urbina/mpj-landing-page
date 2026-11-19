import Link from 'next/link';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

const FeaturesSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).features;
  const to = (path: string) => localePath(locale, path);
  return (
    <section className="features section-pad" id="features">
      <div className="mpj-container">
        <div className="section-head reveal">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.title}</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card reveal">
            <div className="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="13" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 3.5h11A2.5 2.5 0 0 1 21.5 6v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M6.5 10.5h7M6.5 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3>{t.capture.title}</h3>
            <p>{t.capture.body}</p>
            <div className="feature-types">
              {t.capture.types.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
            <p className="feature-link">
              <Link href={to('/prophetic-dream-journal-app')}>{t.capture.dreamLink}</Link>
              <Link href={to('/prophetic-words-app')}>{t.capture.wordsLink}</Link>
            </p>
          </div>

          <div className="feature-card reveal d1">
            <div className="feature-icon warm" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 9.5V13l2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 4.5 7.5 6.7M19 4.5 16.5 6.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="feat-name">
              {t.remembrance.title} <span className="feature-tag">{t.remembrance.tag}</span>
            </h3>
            <p>
              {t.remembrance.bodyStart}<em>{t.remembrance.bodyWord}</em>{t.remembrance.bodyEnd}
            </p>
            <p className="feature-link">
              <Link href={to('/features/remembrance-moments')}>{t.remembrance.link}</Link>
            </p>
          </div>

          <div className="feature-card reveal">
            <div className="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="6" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="18" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M7.6 8.6 10.6 15M16.4 8.6 13.4 15M8.2 7h7.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3>{t.insight.title}</h3>
            <p>{t.insight.body}</p>
          </div>

          <div className="feature-card reveal d1">
            <div className="feature-icon warm" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3.5 19c.4-3 2.7-4.8 5.5-4.8s5.1 1.8 5.5 4.8M15.5 14.8c2.2.2 3.8 1.7 4.1 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3>{t.teams.title}</h3>
            <p>{t.teams.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
