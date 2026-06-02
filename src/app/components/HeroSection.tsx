import Image from 'next/image';
import StoreButtons from './StoreButtons';

const HeroSection = () => {
  return (
    <section className="hero" id="top">
      <div className="mpj-container hero-grid">
        <div className="hero-copy">
          <div className="app-icon-slot reveal">
            <Image src="/mainLogo.png" alt="My Prophetic Journal app icon" width={60} height={60} />
          </div>
          <h1 className="reveal d1">
            Never Forget What <span className="accent">God Has Spoken.</span>
          </h1>
          <p className="hero-sub reveal d2">
            Steward your dreams, visions, and prophetic words — and discover the bigger story God is
            writing in your life.
          </p>

          <div id="download">
            <StoreButtons className="reveal d2" />
          </div>

          <div className="social-badges reveal d3">
            <span className="badge"><span className="dot" />500+ Believers</span>
            <span className="badge"><span className="stars">★★★★★</span>5.0 App Store Rating</span>
            <span className="badge"><span className="dot" />Free to Download</span>
          </div>
        </div>

        <div className="hero-visual reveal d2">
          <div className="phone" aria-label="App dashboard preview">
            <span className="notch" />
            <div className="phone-screen">
              <Image
                src="/MPJ Dashboard 6-1-26.png"
                alt="My Prophetic Journal dashboard"
                fill
                sizes="300px"
                className="phone-shot"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
