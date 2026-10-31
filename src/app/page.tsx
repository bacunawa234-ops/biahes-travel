import Link from 'next/link';
import Image from 'next/image';
import { BRAND, CONTACT, ROUTES } from '@/lib/constants';
import { BLOG_POSTS, DESTINATIONS, FEATURED_TOURS, TESTIMONIALS, WHY_CHOOSE, peso } from '@/lib/home-data';
import TravelSearch from '@/components/home/TravelSearch';
import ContactForm from '@/components/home/ContactForm';

const ICONS: Record<string, React.ReactNode> = {
  map: <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zm0 0v14m6-12v14" />,
  peso: <path d="M7 20V4h6a4 4 0 0 1 0 8H7m-3-5h16M4 10h16" />,
  plane: <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />,
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />,
  passport: <path d="M6 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6zm6 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM9 17h6" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
};

function SectionHead({ eyebrow, title, text, id }: { eyebrow: string; title: string; text?: string; id?: string }) {
  return (
    <div className="bh-section-head">
      <p className="bh-eyebrow">{eyebrow}</p>
      <h2 className="bh-h2" id={id}>{title}</h2>
      {text && <p className="bh-lead">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bh-home">
      {/* Hero */}
      <section className="bh-hero" aria-labelledby="hero-title">
        <div className="bh-hero-glow" aria-hidden="true" />
        <div className="bh-container bh-hero-grid">
          <div className="bh-hero-copy">
            <p className="bh-eyebrow bh-eyebrow-gold">{BRAND.tagline}</p>
            <h1 id="hero-title" className="bh-hero-title">{BRAND.name}</h1>
            <p className="bh-hero-sub">Discover amazing destinations across the Philippines and beyond.</p>
            <div className="bh-hero-ctas">
              <Link href="/#tours" className="bh-btn bh-btn-gold bh-btn-lg">Explore Tours</Link>
              <Link href={ROUTES.booking} className="bh-btn bh-btn-ghost bh-btn-lg">Book Now</Link>
            </div>
            <ul className="bh-hero-points">
              <li>Tours</li>
              <li>Flights</li>
              <li>Hotels</li>
              <li>Visa assistance</li>
            </ul>
          </div>

          <div className="bh-hero-art" aria-hidden="true">
            <div className="bh-hero-card bh-hero-card-main">
              <Image src="/images/destinations/boracay.svg" alt="" fill unoptimized priority sizes="(max-width: 900px) 90vw, 520px" />
              <span className="bh-hero-label">White Beach, Boracay</span>
            </div>
            <div className="bh-hero-card bh-hero-card-a">
              <Image src="/images/destinations/palawan.svg" alt="" fill unoptimized sizes="220px" />
            </div>
            <div className="bh-hero-card bh-hero-card-b">
              <Image src="/images/destinations/siargao.svg" alt="" fill unoptimized sizes="220px" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="bh-section" id="destinations" aria-labelledby="dest-title">
        <div className="bh-container">
          <SectionHead
            id="dest-title"
            eyebrow="Featured destinations"
            title="Eight places we love"
            text="From Luzon's pine-scented highlands to Mindanao's surf breaks. Starting rates per person, in Philippine pesos."
          />
          <div className="bh-dest-grid">
            {DESTINATIONS.map((d) => (
              <article key={d.name} className="bh-dest">
                <div className="bh-dest-media">
                  <Image src={d.image} alt={`Illustration of ${d.name}`} fill unoptimized sizes="(max-width: 640px) 100vw, 300px" />
                  <span className="bh-price-tag">From {peso(d.fromPrice)}</span>
                </div>
                <div className="bh-dest-body">
                  <h3 className="bh-h3">{d.name}</h3>
                  <p className="bh-dest-region">{d.region}</p>
                  <p className="bh-muted">{d.blurb}</p>
                  <Link href={`/#tours`} className="bh-link">
                    View tours <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="bh-section bh-section-alt" id="tours" aria-labelledby="tours-title">
        <div className="bh-container">
          <div className="bh-section-row">
            <SectionHead
              id="tours-title"
              eyebrow="Featured tours"
              title="Ready-made trips, local guides included"
              text="Each package covers transfers, stays and the tours that make the trip. Pick a date and we handle the rest."
            />
            <Link href={ROUTES.tours} className="bh-btn bh-btn-outline">See all packages</Link>
          </div>
          <div className="bh-tour-grid">
            {FEATURED_TOURS.map((t) => (
              <article key={t.title} className="bh-tour">
                <div className="bh-tour-media">
                  <Image src={t.image} alt={`Illustration for ${t.title}`} fill unoptimized sizes="(max-width: 640px) 100vw, 400px" />
                  <div className="bh-tour-badges">
                    <span className="bh-badge bh-badge-gold">{t.category}</span>
                    <span className="bh-badge">{t.duration}</span>
                  </div>
                </div>
                <div className="bh-tour-body">
                  <h3 className="bh-h3">{t.title}</h3>
                  <p className="bh-tour-loc">
                    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" /></svg>
                    {t.location}
                  </p>
                  <ul className="bh-checks">
                    {t.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="bh-tour-foot">
                    <div>
                      <span className="bh-from">From</span>
                      <span className="bh-price">{peso(t.price)}</span>
                      <span className="bh-from">{t.priceNote}</span>
                    </div>
                    <Link href={ROUTES.booking} className="bh-btn bh-btn-gold bh-btn-sm">Book Now</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Flights & hotels */}
      <section className="bh-section" id="flights" aria-labelledby="flights-title">
        <span id="hotels" className="bh-anchor" aria-hidden="true" />
        <div className="bh-container bh-book-grid">
          <div>
            <SectionHead
              id="flights-title"
              eyebrow="Flights & hotels"
              title="Book your flight and stay with us"
              text="Domestic and international flights, plus hotels and resorts at your destination. Tell us your plan and we send you the best fares."
            />
            <p className="bh-small-head">Airlines we book</p>
            <ul className="bh-airlines">
              {['Philippine Airlines', 'Cebu Pacific', 'AirAsia', 'and more'].map((a) => (
                <li key={a} className="bh-airline">{a}</li>
              ))}
            </ul>
          </div>
          <TravelSearch />
        </div>
      </section>

      {/* Why choose */}
      <section className="bh-section bh-section-alt" id="about" aria-labelledby="about-title">
        <div className="bh-container bh-about-grid">
          <div className="bh-about-art">
            <Image src="/images/destinations/banaue.svg" alt="Illustration of the Banaue Rice Terraces" fill unoptimized sizes="(max-width: 900px) 100vw, 480px" />
            <span className="bh-about-sticker">Byaheng masaya!</span>
          </div>
          <div>
            <SectionHead
              id="about-title"
              eyebrow="Why choose Biahes"
              title="Travel that feels like coming home to family"
              text="Biahes comes from biyahe, the Filipino word for a trip. We plan enjoyable, memorable journeys for Filipinos at home and abroad, and for visitors seeing the Philippines for the first time."
            />
            <ul className="bh-why-grid">
              {WHY_CHOOSE.map((w) => (
                <li key={w.title} className="bh-why">
                  <span className="bh-why-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {ICONS[w.icon]}
                    </svg>
                  </span>
                  <div>
                    <h3 className="bh-why-title">{w.title}</h3>
                    <p className="bh-muted">{w.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bh-section" id="testimonials" aria-labelledby="reviews-title">
        <div className="bh-container">
          <SectionHead id="reviews-title" eyebrow="Testimonials" title="What our travelers say" />
          <div className="bh-quote-grid">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="bh-quote">
                {t.sample && <span className="bh-sample">Sample review</span>}
                <svg className="bh-quote-mark" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true"><path fill="currentColor" d="M10 8C5.6 8 3 11.4 3 16v8h9v-9H7.3c0-3 1.3-4.6 2.7-4.6zm16 0c-4.4 0-7 3.4-7 8v8h9v-9h-4.7c0-3 1.3-4.6 2.7-4.6z" /></svg>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="bh-avatar" aria-hidden="true">{t.name.charAt(0)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <span className="bh-muted">{t.trip}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Travel blog */}
      <section className="bh-section bh-section-alt" id="blog" aria-labelledby="blog-title">
        <div className="bh-container">
          <SectionHead id="blog-title" eyebrow="Travel blog" title="Kwentong biyahe" text="Field notes, food trails and festival guides from the road. New stories coming soon." />
          <div className="bh-blog-grid">
            {BLOG_POSTS.map((p) => (
              <article key={p.title} className="bh-post">
                <div className="bh-post-media">
                  <Image src={p.image} alt="" fill unoptimized sizes="(max-width: 640px) 100vw, 400px" />
                </div>
                <div className="bh-post-meta">
                  <span className="bh-chip">{p.tag}</span>
                  <span className="bh-muted">Coming soon</span>
                </div>
                <h3 className="bh-post-title">{p.title}</h3>
                <p className="bh-muted">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bh-section bh-contact" id="contact" aria-labelledby="contact-title">
        <div className="bh-container bh-contact-grid">
          <div>
            <SectionHead
              id="contact-title"
              eyebrow="Contact"
              title="Plan your next adventure with us"
              text="Tell us where you'd like to go, your dates and your budget. A travel planner replies with a full itinerary and quote."
            />
            <ul className="bh-contact-list">
              <li>
                <span className="bh-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></svg>
                </span>
                <span><span className="bh-contact-label">Email</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span>
              </li>
              <li>
                <span className="bh-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
                </span>
                <span><span className="bh-contact-label">Phone and Viber</span><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a></span>
              </li>
              <li>
                <span className="bh-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </span>
                <span><span className="bh-contact-label">Office hours</span>{CONTACT.businessHours}</span>
              </li>
              <li>
                <span className="bh-contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z" /></svg>
                </span>
                <span><span className="bh-contact-label">Facebook</span><a href={BRAND.facebook} target="_blank" rel="noopener noreferrer">facebook.com/Biahes</a></span>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
