'use client';

import { useEffect } from 'react';

/**
 * Adds the scroll-reveal behavior from the design's script.js: every element
 * with a `.reveal` class fades/slides in when it enters the viewport. Mounted
 * once near the root of the page. Renders nothing.
 */
const ScrollReveal = () => {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll('.reveal'));

    if (!('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    reveals.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
