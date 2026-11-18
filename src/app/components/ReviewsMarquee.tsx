'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Testimonial } from '@/sanity/lib/queries';
import type { Locale } from '@/i18n/config';
import { getDictionary, type Dictionary } from '@/i18n/dictionaries';

type ReviewsText = Dictionary['reviews'];

const CHAR_LIMIT = 170;

function clip(text: string): { text: string; truncated: boolean } {
  if (text.length <= CHAR_LIMIT) return { text, truncated: false };
  let s = text.slice(0, CHAR_LIMIT);
  const lastSpace = s.lastIndexOf(' ');
  if (lastSpace > 60) s = s.slice(0, lastSpace);
  return { text: `${s.trimEnd()}…`, truncated: true };
}

const Stars = ({ rating, t }: { rating: number; t: ReviewsText }) => (
  <div className="review-stars" aria-label={t.stars(rating)}>
    {'★'.repeat(rating)}
  </div>
);

const Meta = ({ t }: { t: Testimonial }) => (
  <div className="review-meta">
    <span className="review-avatar" aria-hidden="true">
      {t.name.charAt(0)}
    </span>
    <span className="review-who">
      <b>{t.name}</b>
      <small>{t.source || 'App Store'}</small>
    </span>
  </div>
);

const ReviewCard = ({
  t,
  text: copy,
  hidden,
  onOpen,
}: {
  t: Testimonial;
  text: ReviewsText;
  hidden?: boolean;
  onOpen: (t: Testimonial) => void;
}) => {
  const { text, truncated } = clip(t.quote);
  const rating = t.rating ?? 5;
  return (
    <div className="review-card" aria-hidden={hidden || undefined}>
      <Stars rating={rating} t={copy} />
      <p className="review-quote">{text}</p>
      {truncated && (
        <button
          type="button"
          className="review-more"
          onClick={() => onOpen(t)}
          tabIndex={hidden ? -1 : 0}
        >
          {copy.viewMore}
        </button>
      )}
      <Meta t={t} />
    </div>
  );
};

const ReviewsMarquee = ({ reviews, locale }: { reviews: Testimonial[]; locale: Locale }) => {
  const copy = getDictionary(locale).reviews;
  const [active, setActive] = useState<Testimonial | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [active]);

  // Slower for more cards so scroll speed stays roughly constant.
  const duration = Math.max(24, reviews.length * 7);

  const modal = active && (
    <div className="review-modal-overlay" onClick={() => setActive(null)}>
      <div
        className="review-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="review-modal-close"
          aria-label={copy.close}
          onClick={() => setActive(null)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M6 6 18 18M18 6 6 18" />
          </svg>
        </button>
        <Stars rating={active.rating ?? 5} t={copy} />
        <p className="review-quote review-quote-full">{active.quote}</p>
        <Meta t={active} />
      </div>
    </div>
  );

  return (
    <>
      <div className="reviews-marquee reveal" aria-label={copy.marqueeLabel}>
        <div className="reviews-track" style={{ animationDuration: `${duration}s` }}>
          {reviews.map((t) => (
            <ReviewCard key={t._id} t={t} text={copy} onOpen={setActive} />
          ))}
          {/* Duplicate set for a seamless loop; hidden from assistive tech. */}
          {reviews.map((t) => (
            <ReviewCard key={`dup-${t._id}`} t={t} text={copy} hidden onOpen={setActive} />
          ))}
        </div>
      </div>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
};

export default ReviewsMarquee;
