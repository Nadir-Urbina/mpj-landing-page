import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="mpj-container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark" aria-hidden="true">
            <Image src="/mainLogo.png" alt="" width={40} height={40} />
          </span>
          <span className="wordmark">My Prophetic Journal</span>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#blog">Blog</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="footer-copy">© 2026 My Prophetic Journal</div>
      </div>
    </footer>
  );
};

export default Footer;
