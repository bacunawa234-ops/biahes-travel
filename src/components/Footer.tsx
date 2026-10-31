import Link from 'next/link';
import Image from 'next/image';
import { BRAND, CONTACT, ROUTES } from '@/lib/constants';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bh-footer">
      <div className="bh-container">
        <div className="bh-footer-grid">
          <div className="bh-footer-brand">
            <Link href={ROUTES.home} className="bh-brand" aria-label={`${BRAND.name} home`}>
              <span className="bh-brand-mark">
                <Image src="/images/logos/biahes-logo.png" alt="" width={40} height={44} />
              </span>
              <span className="bh-brand-name">{BRAND.name}</span>
            </Link>
            <p className="bh-footer-tagline">{BRAND.tagline}</p>
            <p className="bh-footer-text">
              Tours, flights and hotels across the Philippines and beyond, planned by people who love to travel.
            </p>
            <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" className="bh-social" aria-label="Biahes on Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
          </div>

          <div>
            <h4 className="bh-footer-head">Explore</h4>
            <ul className="bh-footer-list">
              <li><Link href="/#destinations">Destinations</Link></li>
              <li><Link href={ROUTES.tours}>Tour Packages</Link></li>
              <li><Link href="/#flights">Flights</Link></li>
              <li><Link href="/#hotels">Hotels</Link></li>
              <li><Link href="/#blog">Travel Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="bh-footer-head">{BRAND.name}</h4>
            <ul className="bh-footer-list">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li><Link href={ROUTES.booking}>Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="bh-footer-head">Contact</h4>
            <ul className="bh-footer-list">
              <li><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li className="bh-footer-muted">{CONTACT.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="bh-footer-bottom">
          <p>&copy; {year} {BRAND.name}. All rights reserved.</p>
          <p>Prices in PHP, per person, subject to availability. <span className="bh-photo-credit">Photos: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></span></p>
        </div>
      </div>
    </footer>
  );
}
