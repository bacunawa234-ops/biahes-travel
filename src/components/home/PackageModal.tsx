'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { findPackage, peso } from '@/lib/packages';
import { PackageArt } from './PackageCard';

export type ModalState =
  | { kind: 'details'; pkg: string }
  | { kind: 'booking'; pkg?: string; service?: string; note?: string }
  | null;

interface Props {
  state: ModalState;
  onClose: () => void;
  onBook: (pkg: string) => void;
}

interface Confirmed {
  ref: string;
  firstName: string;
  email: string;
  mobile: string;
  payment: string;
  travelers: number;
  total: number | null;
}

export default function PackageModal({ state, onClose, onBook }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState<Confirmed | null>(null);

  // reset per opening
  useEffect(() => { setSending(false); setError(''); setDone(null); }, [state]);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    dialogRef.current?.querySelector<HTMLElement>('button, input')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [state, onClose, done]);

  if (!state) return null;

  let content: React.ReactNode;

  if (state.kind === 'details') {
    const p = findPackage(state.pkg);
    if (!p) return null;
    content = (
      <>
        <div className="art"><PackageArt pkg={p} sizes="640px" /></div>
        <div className="inner">
          <div>
            <div className="eyebrow">{p.region === 'dom' ? 'Domestic' : 'International'} · {p.days}</div>
            <h3>{p.name}: {p.sub}</h3>
          </div>
          <p style={{ margin: 0 }}><b>Hotel:</b> {p.hotel}</p>
          <div>
            <h4>Itinerary</h4>
            <ol className="itin">
              {p.itin.map((d, i) => <li key={i}><b>Day {i + 1}.</b> {d}</li>)}
            </ol>
          </div>
          <div className="cols">
            <div><h4>Inclusions</h4><ul>{p.inc.map((i) => <li key={i}>{i}</li>)}</ul></div>
            <div><h4>Exclusions</h4><ul>{p.exc.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </div>
          <div className="row-end">
            <div style={{ marginRight: 'auto' }}>
              <div className="from">Final price</div>
              <div className="price">{peso(p.price)} <small>/ person</small></div>
            </div>
            <button className="btn btn-ghost" type="button" onClick={onClose}>Close</button>
            <button className="btn btn-gold" type="button" onClick={() => onBook(p.id)}>Book Now</button>
          </div>
        </div>
      </>
    );
  } else if (done) {
    content = (
      <div className="inner">
        <div className="eyebrow">Step 2 of 3 · Request received</div>
        <h3>Salamat, {done.firstName}!</h3>
        <div className="okbox">
          <div className="from">Your booking reference</div>
          <div className="ref">{done.ref}</div>
          {done.total ? (
            <p style={{ margin: '8px 0 0' }}>
              Total for {done.travelers} traveler{done.travelers > 1 ? 's' : ''}: <b className="num">{peso(done.total)}</b>
            </p>
          ) : null}
        </div>
        <p style={{ margin: 0 }}>
          A Biahes consultant will confirm availability and send your invoice with {done.payment} payment instructions
          to <b>{done.email}</b> and <b>{done.mobile}</b>. Once payment is confirmed, we lock in your booking (step 3).
        </p>
        <div className="row-end"><button className="btn btn-ocean" type="button" onClick={onClose}>Done</button></div>
      </div>
    );
  } else {
    const p = state.pkg ? findPackage(state.pkg) : undefined;
    const title = p ? `Book ${p.name} ${p.days}` : `Request a ${state.service || 'travel'} quote`;

    const submit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const f = new FormData(e.currentTarget);
      const v = (k: string) => String(f.get(k) ?? '').trim();
      const travelers = Number(v('pax')) || 1;
      const total = p ? p.price * travelers : null;
      setSending(true); setError('');
      try {
        const res = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tour_id: p ? p.id : `quote-${(state.service || 'general').toLowerCase()}`,
            tour_title: p ? `${p.name} ${p.days}` : undefined,
            service: p ? 'Tour package' : state.service || 'General',
            customer_name: v('name'),
            customer_email: v('email'),
            customer_phone: v('mobile'),
            destination: v('dest'),
            travel_dates: v('dates'),
            pax_count: travelers,
            total_price: total,
            budget: v('budget'),
            payment_method: v('pay'),
            notes: v('req'),
            source: 'Homepage Book Now form',
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.error || 'Saving failed. Please try again in a moment.');
        setDone({
          ref: data.confirmationNumber || data?.data?.id || '—',
          firstName: v('name').split(' ')[0],
          email: v('email'), mobile: v('mobile'), payment: v('pay'), travelers, total,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Saving failed. Please try again in a moment.');
        setSending(false);
      }
    };

    content = (
      <div className="inner">
        <div>
          <div className="eyebrow">Step 1 of 3 · Traveler details</div>
          <h3>{title}</h3>
          {p && <p className="sub" style={{ margin: '4px 0 0', color: 'var(--muted)' }}>{peso(p.price)} per person · {p.hotel}</p>}
        </div>
        <form className="form" onSubmit={submit}>
          <div className="field"><label htmlFor="bf_name">Full name</label><input id="bf_name" name="name" required autoComplete="name" /></div>
          <div className="field"><label htmlFor="bf_mobile">Mobile number</label><input id="bf_mobile" name="mobile" required inputMode="tel" placeholder="09XX XXX XXXX" autoComplete="tel" /></div>
          <div className="field"><label htmlFor="bf_email">Email</label><input id="bf_email" name="email" type="email" required autoComplete="email" /></div>
          <div className="field"><label htmlFor="bf_dest">Destination</label><input id="bf_dest" name="dest" defaultValue={p ? p.name : ''} required /></div>
          <div className="field"><label htmlFor="bf_dates">Travel dates</label><input id="bf_dates" name="dates" placeholder="e.g. Dec 20–23, 2026" required /></div>
          <div className="field"><label htmlFor="bf_pax">Travelers</label><input id="bf_pax" name="pax" type="number" min={1} defaultValue={2} required /></div>
          <div className="field"><label htmlFor="bf_budget">Budget (optional)</label><input id="bf_budget" name="budget" placeholder="₱" /></div>
          <div className="field">
            <label htmlFor="bf_pay">Preferred payment</label>
            <select id="bf_pay" name="pay"><option>GCash</option><option>Maya</option><option>Credit Card</option><option>Bank Transfer</option></select>
          </div>
          <div className="field wide">
            <label htmlFor="bf_req">Special requests</label>
            <textarea id="bf_req" name="req" rows={2} defaultValue={state.note || ''} placeholder="Senior or PWD travelers, room preference, celebrations…" />
          </div>
          {error && <p className="err wide">{error}</p>}
          <div className="row-end wide">
            <button className="btn btn-ghost" type="button" onClick={onClose}>Cancel</button>
            <button className="btn btn-gold" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send booking request'}</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" ref={dialogRef}>{content}</div>
    </div>
  );
}
