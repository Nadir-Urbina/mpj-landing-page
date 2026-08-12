import DownloadButton from "./DownloadButton";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PricingSection = () => {
  return (
    <section className="pricing section-pad" id="pricing">
      <div className="mpj-container">
        <div className="section-head reveal" style={{ margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow">Start free, stay as long as you like</div>
          <h2>Simple pricing for a lifelong practice.</h2>
        </div>
        <div className="pricing-grid">
          <div className="price-card reveal">
            <div className="price-name">Free</div>
            <div className="price-amount">
              <span className="num">$0</span>
              <span className="per">forever</span>
            </div>
            <p className="price-tagline">Everything you need to start capturing what God is saying.</p>
            <ul className="price-list">
              <li><Check />Unlimited journal entries</li>
              <li><Check />Capture by type — dreams, visions, words</li>
              <li><Check />Remembrance Moments 5-day reminders</li>
            </ul>
            <DownloadButton className="btn btn-outline">Download Free</DownloadButton>
          </div>

          <div className="price-card popular reveal d1">
            <span className="popular-badge">Most Popular</span>
            <div className="price-name">Premium</div>
            <div className="price-amount">
              <span className="num">$4.99</span>
              <span className="per">/ month</span>
            </div>
            <p className="price-tagline">
              Go deeper with insight, patterns, and your prophetic community.
            </p>
            <ul className="price-list">
              <li><Check />Everything in Free</li>
              <li><Check />AI Scripture suggestions &amp; pattern insight</li>
              <li><Check />Prophetic Teams &amp; shared journals</li>
            </ul>
            <DownloadButton className="btn btn-primary">Start with Premium</DownloadButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
