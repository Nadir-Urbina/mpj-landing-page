import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

const DELAYS = ['', ' d1', ' d2'];

const ProblemSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).problem;
  return (
    <section className="problem section-pad">
      <div className="mpj-container">
        <div className="problem-grid">
          {t.lines.map((line, i) => (
            <div key={line} className={`problem-item reveal${DELAYS[i]}`}>
              <p>{line}</p>
            </div>
          ))}
        </div>
        <div className="problem-close reveal d2">
          <span>
            {t.closeStart}<span className="accent">{t.closeAccent}</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
