'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BRAND, ROUTES } from '@/lib/constants';
import { NAV_LINKS } from '@/lib/home-data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`bh-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="bh-container bh-nav" aria-label="Main">
        <Link href={ROUTES.home} className="bh-brand" aria-label={`${BRAND.name} home`} onClick={() => setOpen(false)}>
          <span className="bh-brand-mark">
            <Image src="/images/logos/biahes-logo.png" alt="" width={40} height={44} priority />
          </span>
          <span className="bh-brand-name">{BRAND.name}</span>
        </Link>

        <ul className="bh-nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="bh-nav-actions">
          <Link href={ROUTES.booking} className="bh-btn bh-btn-gold bh-btn-sm bh-hide-mobile">
            Book Now
          </Link>
          <button
            type="button"
            className="bh-menu-btn"
            aria-expanded={open}
            aria-controls="bh-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`bh-burger${open ? ' is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <div id="bh-mobile-menu" className={`bh-mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={ROUTES.booking} className="bh-btn bh-btn-gold bh-btn-block" onClick={() => setOpen(false)}>
          Book Now
        </Link>
      </div>
    </header>
  );
}
