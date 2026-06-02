const ProblemSection = () => {
  return (
    <section className="problem section-pad">
      <div className="mpj-container">
        <div className="problem-grid">
          <div className="problem-item reveal">
            <p>You had a dream. By morning, half of it was gone.</p>
          </div>
          <div className="problem-item reveal d1">
            <p>Someone spoke a word over you. You meant to write it down.</p>
          </div>
          <div className="problem-item reveal d2">
            <p>You know God is speaking. But the moments keep slipping away.</p>
          </div>
        </div>
        <div className="problem-close reveal d2">
          <span>
            My Prophetic Journal was built for <span className="accent">exactly this.</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
