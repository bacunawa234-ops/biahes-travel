'use client';

import { useCallback, useState } from 'react';
import { BRAND, CONTACT } from '@/lib/constants';
import { PACKAGES, PHOTO_CREDITS } from '@/lib/packages';
import PackageCard from './PackageCard';
import PackageModal, { type ModalState } from './PackageModal';
import SearchPanel from './SearchPanel';
import BiahesBot from './BiahesBot';

const SERVICES = [
  ['Flights', 'Domestic and international fares on PAL, Cebu Pacific, AirAsia and foreign carriers, one way or round trip.'],
  ['Hotels', 'From beachfront resorts in Boracay to business hotels in Makati, Tokyo or Dubai.'],
  ['Ferry tickets', '2GO Travel, OceanJet, FastCat, Montenegro Lines and other operators across the islands.'],
  ['Cruises', 'Asian sailings out of Singapore and Hong Kong, plus Mediterranean and Alaska itineraries.'],
  ['Visa assistance', 'Document checklists and appointment help for Japan, Korea, Schengen, the US and more.'],
  ['Travel requirements', 'eTravel, baggage allowances, travel tax and entry rules, explained before you fly.'],
];

const PAYMENTS = ['GCash', 'Maya', 'Credit Card', 'Bank Transfer'];

function Logo() {
  return (
    <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#e0a526" />
      <path d="M6 25c5-3 9-3 14 0s9 3 14 0v6H6z" fill="#0b4f8a" />
      <path d="M12 22l9-12 7 12z" fill="#fff" />
      <circle cx="28" cy="12" r="3" fill="#fff" />
    </svg>
  );
}

export default function HomePage({ fontClassName = '' }: { fontClassName?: string }) {
  const [modal, setModal] = useState<ModalState>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [pending, setPending] = useState<{ text: string; nonce: number } | null>(null);

  const showDetails = useCallback((pkg: string) => setModal({ kind: 'details', pkg }), []);
  const showBooking = useCallback((pkg: string) => setModal({ kind: 'booking', pkg }), []);
  const showQuote = useCallback((service: string, note: string) => setModal({ kind: 'booking', service, note }), []);
  const closeModal = useCallback(() => setModal(null), []);
  const ask = (text: string) => { setChatOpen(true); setPending({ text, nonce: Date.now() }); };

  const dom = PACKAGES.filter((p) => p.region === 'dom');
  const intl = PACKAGES.filter((p) => p.region === 'intl');

  return (
    <div className={`bh-home ${fontClassName}`}>
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="Biahes Travel & Tours home">
            <Logo />
            <span><b>Biahes</b><small>Travel &amp; Tours</small></span>
          </a>
          <nav className="nav" aria-label="Main">
            <a href="#domestic">Domestic</a>
            <a href="#international">International</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="btn btn-gold" type="button" onClick={() => setChatOpen(true)}>Chat<span className="hide-sm">&nbsp;with BiahesBot</span></button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="eyebrow">Flights · Hotels · Tours · Ferry · Cruise · Visa</div>
            <h1>Explore More. <em>Worry Less.</em></h1>
            <p className="lede">
              Isang chat lang, biyahe na. Tell us where you want to go and BiahesBot puts together your quote, day or night,
              for families, barkadas, OFWs and solo travelers.
            </p>
            <SearchPanel onAsk={ask} onPackage={showDetails} />
            <div className="trust">
              <span>English, Filipino &amp; Taglish</span>
              <span>GCash, Maya, card &amp; bank transfer</span>
              <span>One final price, no surprises</span>
              <span>Replies 24/7</span>
            </div>
          </div>
          <svg className="waves" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 70 C240 30 480 110 720 70 S1200 30 1440 70 V120 H0Z" fill="rgba(255,255,255,.12)" />
            <path d="M0 92 C300 60 520 120 760 92 S1180 62 1440 90 V120 H0Z" fill="var(--bg)" />
          </svg>
        </section>

        <section className="block" id="domestic">
          <div className="wrap">
            <div className="head"><div>
              <div className="eyebrow">Sariling atin</div>
              <h2>Domestic tour packages</h2>
              <p>Land arrangements with hotel, transfers and tours. Per-person prices, minimum of 2 travelers. Airfare can be added to your quote.</p>
            </div></div>
            <div className="grid">
              {dom.map((p) => <PackageCard key={p.id} pkg={p} onDetails={showDetails} onBook={showBooking} />)}
            </div>
          </div>
        </section>

        <section className="block" id="international">
          <div className="wrap">
            <div className="head"><div>
              <div className="eyebrow">Abroad</div>
              <h2>International packages</h2>
              <p>Roundtrip economy airfare from Manila, hotel and guided tours included. Per person, twin sharing.</p>
            </div></div>
            <div className="grid">
              {intl.map((p) => <PackageCard key={p.id} pkg={p} onDetails={showDetails} onBook={showBooking} />)}
            </div>
          </div>
        </section>

        <section className="block" id="services">
          <div className="wrap">
            <div className="head"><div>
              <div className="eyebrow">Everything in one place</div>
              <h2>What we book for you</h2>
            </div></div>
            <div className="services">
              {SERVICES.map(([title, body]) => (
                <div className="svc" key={title}><h3>{title}</h3><p>{body}</p></div>
              ))}
            </div>
            <div className="pay" aria-label="Payment options">
              {PAYMENTS.map((p) => <span key={p}>{p}</span>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="site" id="contact">
        <div className="wrap">
          <div><h3>{BRAND.name} Travel &amp; Tours</h3><p>Explore More. Worry Less.</p></div>
          <div>
            <h3>Talk to us</h3>
            <p>BiahesBot answers on this site 24/7. Our travel consultants follow up on every quote.</p>
            <p style={{ marginTop: 6 }}>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a> · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
          </div>
          <div><h3>We accept</h3><p>{PAYMENTS.join(' · ')}</p></div>
          <p className="note">
            Photo credits (via Wikimedia Commons / Openverse; resized and cropped):{' '}
            {PACKAGES.filter((p) => PHOTO_CREDITS[p.id]).map((p, i) => {
              const c = PHOTO_CREDITS[p.id];
              return (
                <span key={p.id}>
                  {i > 0 && ' · '}
                  {p.name}: <a href={c.source} target="_blank" rel="noopener noreferrer">{c.title}</a> by {c.creator},{' '}
                  {c.license_url ? <a href={c.license_url} target="_blank" rel="noopener noreferrer">{c.license}</a> : c.license}
                </span>
              );
            })}
          </p>
          <p className="note">
            Package prices shown are sample rates and are subject to availability. Final fares are confirmed by a Biahes consultant before payment.
          </p>
        </div>
      </footer>

      <BiahesBot
        open={chatOpen}
        onOpen={() => setChatOpen(true)}
        onClose={() => setChatOpen(false)}
        pending={pending}
        onDetails={showDetails}
        onBook={showBooking}
        onQuote={showQuote}
      />

      <PackageModal state={modal} onClose={closeModal} onBook={showBooking} />
    </div>
  );
}
