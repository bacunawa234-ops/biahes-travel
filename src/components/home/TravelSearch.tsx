'use client';

import { FormEvent, useEffect, useState } from 'react';
import { CONTACT } from '@/lib/constants';

type Tab = 'flights' | 'hotels';

const AIRPORTS = [
  'Manila (MNL)',
  'Clark (CRK)',
  'Cebu (CEB)',
  'Davao (DVO)',
  'Iloilo (ILO)',
  'Tacloban (TAC)',
  'Caticlan / Boracay (MPH)',
  'Puerto Princesa (PPS)',
  'El Nido (ENI)',
  'Bohol-Panglao (TAG)',
  'Siargao (IAO)',
  'Laoag (LAO)',
  'Tokyo (NRT/HND)',
  'Seoul (ICN)',
  'Singapore (SIN)',
  'Bangkok (BKK)',
  'Riyadh (RUH)',
  'Dammam (DMM)',
  'Jeddah (JED)',
];

function sendInquiry(subject: string, lines: string[]) {
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

export default function TravelSearch() {
  const [tab, setTab] = useState<Tab>('flights');
  const [tripType, setTripType] = useState<'round' | 'oneway'>('round');

  // Open the Hotels tab when someone follows a /#hotels link.
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#hotels') setTab('hotels');
      if (window.location.hash === '#flights') setTab('flights');
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const onFlights = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    sendInquiry(`Flight quote: ${f.get('from')} to ${f.get('to')}`, [
      'Hi Biahes, please send me a flight quote.',
      '',
      `Trip: ${tripType === 'round' ? 'Round trip' : 'One way'}`,
      `From: ${f.get('from')}`,
      `To: ${f.get('to')}`,
      `Departure: ${f.get('depart') || 'flexible'}`,
      tripType === 'round' ? `Return: ${f.get('return') || 'flexible'}` : '',
      `Passengers: ${f.get('pax')}`,
      `Class: ${f.get('cabin')}`,
    ].filter(Boolean));
  };

  const onHotels = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    sendInquiry(`Hotel quote: ${f.get('city')}`, [
      'Hi Biahes, please send me hotel options.',
      '',
      `Destination: ${f.get('city')}`,
      `Check-in: ${f.get('checkin') || 'flexible'}`,
      `Check-out: ${f.get('checkout') || 'flexible'}`,
      `Guests: ${f.get('guests')}`,
      `Rooms: ${f.get('rooms')}`,
    ]);
  };

  return (
    <div className="bh-search">
      <div className="bh-tabs" role="tablist" aria-label="Book flights or hotels">
        <button type="button" role="tab" aria-selected={tab === 'flights'} className={`bh-tab${tab === 'flights' ? ' is-active' : ''}`} onClick={() => setTab('flights')}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" /></svg>
          Flights
        </button>
        <button type="button" role="tab" aria-selected={tab === 'hotels'} className={`bh-tab${tab === 'hotels' ? ' is-active' : ''}`} onClick={() => setTab('hotels')}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M7 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9a4 4 0 0 0-4-4z" /></svg>
          Hotels
        </button>
      </div>

      {tab === 'flights' ? (
        <form className="bh-form" onSubmit={onFlights}>
          <div className="bh-radio-row" role="radiogroup" aria-label="Trip type">
            <label className={`bh-pill${tripType === 'round' ? ' is-active' : ''}`}>
              <input type="radio" name="trip" checked={tripType === 'round'} onChange={() => setTripType('round')} />
              Round trip
            </label>
            <label className={`bh-pill${tripType === 'oneway' ? ' is-active' : ''}`}>
              <input type="radio" name="trip" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
              One way
            </label>
          </div>
          <div className="bh-form-grid">
            <label className="bh-field">
              <span>From</span>
              <input name="from" list="bh-airports" defaultValue="Manila (MNL)" required />
            </label>
            <label className="bh-field">
              <span>To</span>
              <input name="to" list="bh-airports" placeholder="Where to?" required />
            </label>
            <label className="bh-field">
              <span>Departure</span>
              <input name="depart" type="date" />
            </label>
            {tripType === 'round' && (
              <label className="bh-field">
                <span>Return</span>
                <input name="return" type="date" />
              </label>
            )}
            <label className="bh-field">
              <span>Passengers</span>
              <select name="pax" defaultValue="1 adult">
                {['1 adult', '2 adults', '3 adults', '4 adults', '5+ travelers'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="bh-field">
              <span>Class</span>
              <select name="cabin" defaultValue="Economy">
                {['Economy', 'Premium economy', 'Business'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          </div>
          <datalist id="bh-airports">
            {AIRPORTS.map((a) => <option key={a} value={a} />)}
          </datalist>
          <div className="bh-form-foot">
            <p>We check fares across airlines and email you the best options.</p>
            <button type="submit" className="bh-btn bh-btn-gold">Get flight quote</button>
          </div>
        </form>
      ) : (
        <form className="bh-form" onSubmit={onHotels}>
          <div className="bh-form-grid">
            <label className="bh-field bh-field-wide">
              <span>Destination</span>
              <input name="city" placeholder="City, island or hotel name" required />
            </label>
            <label className="bh-field">
              <span>Check-in</span>
              <input name="checkin" type="date" />
            </label>
            <label className="bh-field">
              <span>Check-out</span>
              <input name="checkout" type="date" />
            </label>
            <label className="bh-field">
              <span>Guests</span>
              <select name="guests" defaultValue="2 guests">
                {['1 guest', '2 guests', '3 guests', '4 guests', '5+ guests'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="bh-field">
              <span>Rooms</span>
              <select name="rooms" defaultValue="1 room">
                {['1 room', '2 rooms', '3 rooms', '4+ rooms'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          </div>
          <div className="bh-form-foot">
            <p>Beach resorts, city hotels and family rooms, matched to your budget.</p>
            <button type="submit" className="bh-btn bh-btn-gold">Find hotels</button>
          </div>
        </form>
      )}
    </div>
  );
}
