'use client';

import { FormEvent, useState } from 'react';
import { CONTACT } from '@/lib/constants';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Trip inquiry from ${f.get('name')}`;
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone') || '-'}`,
      '',
      `${f.get('message')}`,
    ].join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="bh-contact-form" onSubmit={onSubmit}>
      <div className="bh-form-grid bh-form-grid-2">
        <label className="bh-field">
          <span>Name</span>
          <input name="name" placeholder="Juan dela Cruz" autoComplete="name" required />
        </label>
        <label className="bh-field">
          <span>Email</span>
          <input name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
        </label>
        <label className="bh-field bh-field-wide">
          <span>Phone or Viber (optional)</span>
          <input name="phone" type="tel" placeholder="09XX XXX XXXX" autoComplete="tel" />
        </label>
        <label className="bh-field bh-field-wide">
          <span>Your trip</span>
          <textarea name="message" rows={4} placeholder="Family of 4, Palawan in April, around ₱60,000 total" required />
        </label>
      </div>
      <button type="submit" className="bh-btn bh-btn-gold bh-btn-block">Send inquiry</button>
      <p className="bh-form-note" aria-live="polite">
        {sent ? 'Your email app should open with your message ready to send.' : 'We reply within one working day.'}
      </p>
    </form>
  );
}
