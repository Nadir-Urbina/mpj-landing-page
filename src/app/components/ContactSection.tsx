'use client';

import React, { useState } from 'react';

const ContactSection = () => {
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
          subject: `Website message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="mpj-container">
        <div className="contact-grid">
          <div className="contact-intro reveal">
            <div className="eyebrow">We&apos;d love to hear from you</div>
            <h2>Questions, prayer, or a story to share?</h2>
            <p className="contact-lead">
              Whether you&apos;re wondering how something works or you just want to tell us what God
              is doing — there&apos;s a real person on the other side of this form.
            </p>

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
                  <p>We will be happy to help you with any questions you have.</p>
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
                  <h3>Message sent!</h3>
                  <p>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button type="button" onClick={() => setStatus('idle')}>
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                  />
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help, or what would you like to share?"
                  />
                </div>

                {status === 'error' && <div className="form-error">{errorMessage}</div>}

                <button type="submit" className="btn btn-primary btn-send" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
                <p className="form-note">We&apos;ll never share your email or send spam.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
