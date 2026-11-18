import Image from 'next/image';
import Link from 'next/link';
import { SIGN_IN_LINK } from '../lib/links';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

const Footer = ({ locale }: { locale: Locale }) => {
  const d = getDictionary(locale);
  const t = d.footer;
  const to = (path: string) => localePath(locale, path);

  return (
    <footer className="site-footer">
      <div className="mpj-container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark" aria-hidden="true">
            <Image src="/mainLogo.png" alt="" width={40} height={40} />
          </span>
          <span className="wordmark">{d.brand}</span>
        </div>
        <nav className="footer-nav" aria-label={t.nav}>
          <Link href={to('/prophetic-dream-journal-app')}>{t.dreamJournal}</Link>
          <Link href={to('/prophetic-words-app')}>{t.propheticWords}</Link>
          <Link href={to('/features/remembrance-moments')}>{t.remembrance}</Link>
          <Link href={to('/#pricing')}>{t.pricing}</Link>
          <Link href={to('/blog')}>{t.blog}</Link>
          <Link href={to('/privacy')}>{t.privacy}</Link>
          <Link href={to('/#contact')}>{t.contact}</Link>
          <a href={SIGN_IN_LINK}>{t.signIn}</a>
        </nav>
        <div className="footer-copy">© 2026 {d.brand}</div>
      </div>
    </footer>
  );
};

export default Footer;
