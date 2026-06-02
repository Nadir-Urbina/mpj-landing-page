import StoreButtons from './StoreButtons';

const FinalCtaSection = () => {
  return (
    <section className="final-cta section-pad">
      <div className="mpj-container inner">
        <h2 className="reveal">Your journey deserves to be remembered.</h2>
        <p className="sub reveal d1">Start free. No credit card required.</p>
        <StoreButtons className="reveal d1" />
        <div className="scripture reveal d2">
          <p>
            &ldquo;Write the vision; make it plain on tablets, so he may run who reads it.&rdquo;
          </p>
          <cite>Habakkuk 2:2</cite>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
