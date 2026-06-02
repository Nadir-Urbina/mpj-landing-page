const FeaturesSection = () => {
  return (
    <section className="features section-pad" id="features">
      <div className="mpj-container">
        <div className="section-head reveal">
          <div className="eyebrow">Everything you receive, kept safe</div>
          <h2>A home for the words you don&apos;t want to lose.</h2>
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
            <h3>Capture by type</h3>
            <p>
              Log every encounter the way it actually came to you. One tap files it as a Dream,
              Vision, Prophetic Word, or Scripture Revelation.
            </p>
            <div className="feature-types">
              <span>Dream</span>
              <span>Vision</span>
              <span>Prophetic Word</span>
              <span>Scripture Revelation</span>
            </div>
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
              The 5-day reminder <span className="zakar-tag">&ldquo;Zakar&rdquo;</span>
            </h3>
            <p>
              Inspired by the Hebrew call to remember, Zakar gently resurfaces your past notes over
              five days. Nothing you receive gets buried and forgotten.
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
            <h3>Scripture &amp; pattern insight</h3>
            <p>
              Thoughtful AI surfaces Scripture that speaks to what you&apos;ve recorded. Over time it
              reveals the recurring themes God is weaving across your whole journal.
            </p>
          </div>

          <div className="feature-card reveal d1">
            <div className="feature-icon warm" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3.5 19c.4-3 2.7-4.8 5.5-4.8s5.1 1.8 5.5 4.8M15.5 14.8c2.2.2 3.8 1.7 4.1 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Prophetic Teams</h3>
            <p>
              Invite the people you trust into a shared space. Share notes, confirm a word, and grow
              together in discernment and accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
