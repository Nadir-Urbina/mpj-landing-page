import DownloadBadge from './DownloadBadge';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

const FinalCtaSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).finalCta;
  return (
    <section className="final-cta section-pad">
      <div className="mpj-container inner">
        <h2 className="reveal">{t.title}</h2>
        <p className="sub reveal d1">{t.sub}</p>
        <DownloadBadge locale={locale} withWebLink className="reveal d1" />
        <div className="scripture reveal d2">
          <p>{t.verse}</p>
          <cite>{t.cite}</cite>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
