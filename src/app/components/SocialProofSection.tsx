'use client';

import React, { useState, useEffect } from 'react';

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Jtmoneyclipz",
      role: "App Store Review",
      image: "/api/placeholder/64/64",
      text: "Finally something to help keep track of dreams, visions, and prophetic words I receive !!! This app is so amazing and such a blessing. I know the man who created it and how painstaking it all was. What a blessing!! A++++++++",
      rating: 5,
      date: "Jul 30"
    },
    {
      name: "naub_2",
      role: "App Store Review",
      image: "/api/placeholder/64/64", 
      text: "A must-have tool for stewardship. If you want to honor the word of the Lord, you need a tool like this, that you can use as a reference and library, go back and remember what you have received, and even in the case of this app find what patterns are in what you are recording.",
      rating: 5,
      date: "Aug 14"
    },
    {
      name: "wandering.wildflower",
      role: "App Store Review",
      image: "/api/placeholder/64/64",
      text: "Amazing App for Prophetic People. Absolutely love this app! What a way to organize prophetic revelation! You can categorize by dream, vision, prophetic word, etc. You can add Bible References and notes! And you can share dreams with others! It's the perfect tool to honor the voice of the Lord, but also to unpack what's been given! I've always loved documenting these things, but this app seems to make it more fun and exciting, and really encourages a deep dive into the Word, and seeking out wisdom & understanding & patterns within prophetic dreams and words. I never thought technology could be a bridge deeper into God's heart, but I feel like this is it. Highly recommend! 🔥🔥🔥",
      rating: 5,
      date: "Wed"
    },
    {
      name: "azecp",
      role: "App Store Review",
      image: "/api/placeholder/64/64",
      text: "Finally, organization! I love this app because it's so thoughtfully designed. I used to just have random notes in my phone by date, but the features of categorizing specific thoughts/dreams, then also analyzing them to show patterns is next level.",
      rating: 5,
      date: "Sep 10"
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Believers Worldwide
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Join hundreds of believers who are being intentional in honoring and stewarding the Word of The Lord by recording it, revisiting it, praying over it and sharing it with their leadership and community
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5★</div>
            <div className="text-foreground/60">App Store Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Growing</div>
            <div className="text-foreground/60">Global Community</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-background rounded-xl p-8 sm:p-10 shadow-lg border border-border">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-foreground/80 mb-8 italic text-base sm:text-lg leading-relaxed text-center">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold text-lg">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-foreground/60">{testimonial.role} · {testimonial.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 bg-background border border-border rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 bg-background border border-border rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-primary w-8'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;

