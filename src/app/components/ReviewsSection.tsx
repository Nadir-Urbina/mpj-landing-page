const REVIEWS = [
  {
    quote: 'Finally something to help keep track of dreams, visions, and prophetic words',
    initial: 'J',
    name: 'Jtmoneyclipz',
    delay: '',
  },
  {
    quote: "I never thought technology could be a bridge deeper into God's heart",
    initial: 'w',
    name: 'wandering.wildflower',
    delay: 'd1',
  },
  {
    quote:
      'I used to just have random notes in my phone by date — the features of categorizing and analyzing to show patterns is next level',
    initial: 'a',
    name: 'azecp',
    delay: 'd2',
  },
];

const ReviewsSection = () => {
  return (
    <section className="reviews section-pad">
      <div className="mpj-container">
        <div className="section-head reveal">
          <div className="eyebrow">From the people using it</div>
          <h2>What believers are saying.</h2>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r) => (
            <div key={r.name} className={`review-card reveal ${r.delay}`.trim()}>
              <div className="review-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="review-quote">{r.quote}</p>
              <div className="review-meta">
                <span className="review-avatar" aria-hidden="true">
                  {r.initial}
                </span>
                <span className="review-who">
                  <b>{r.name}</b>
                  <small>App Store</small>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
