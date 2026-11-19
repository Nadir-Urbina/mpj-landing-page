'use client';

import React, { useState } from 'react';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

const ContactSection = ({ locale }: { locale: Locale }) => {
  const t = getDictionary(locale).contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: t.subject(formData.name),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        // The API's error text is English; Spanish visitors get the generic message.
        setErrorMessage((locale === 'en' && data.error) || t.error);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.networkError);
    }
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="mpj-container">
        <div className="contact-grid">
          <div className="contact-intro reveal">
            <div className="eyebrow">{t.eyebrow}</div>
            <h2>{t.title}</h2>
            <p className="contact-lead">{t.lead}</p>

            <div className="contact-info">
              <div className="contact-info-card">
                <span className="ci-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="M4 7l8 5.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3>
                    <a href="mailto:support@mypropheticjournal.life">
                      support@mypropheticjournal.life
                    </a>
                  </h3>
                  <p>{t.infoText}</p>
                </div>
              </div>

              {/* <div className="contact-info-card warm">
                <span className="ci-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3>Within one business day</h3>
                  <p>Typical reply time, often much sooner</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="contact-form-wrap reveal d1">
            {status === 'success' ? (
              <div className="contact-form">
                <div className="form-success">
                  <span className="check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3>{t.successTitle}</h3>
                  <p>{t.successBody}</p>
                  <button type="button" onClick={() => setStatus('idle')}>
                    {t.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">{t.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                {status === 'error' && <div className="form-error">{errorMessage}</div>}

                <button type="submit" className="btn btn-primary btn-send" disabled={status === 'loading'}>
                  {status === 'loading' ? t.sending : t.send}
                </button>
                <p className="form-note">{t.note}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
