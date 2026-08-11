import Image from 'next/image';

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
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#blog">Blog</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/#contact">Contact</a>
        </nav>
        <div className="footer-copy">© 2026 My Prophetic Journal</div>
      </div>
    </footer>
  );
};

export default Footer;
