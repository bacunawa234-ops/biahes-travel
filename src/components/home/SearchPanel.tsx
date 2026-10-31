'use client';

import { useState, type FormEvent } from 'react';
import { PACKAGES } from '@/lib/packages';

const TABS = [
  ['flights', 'Flights'],
  ['hotels', 'Hotels'],
  ['packages', 'Tour Packages'],
  ['ferry', 'Ferry'],
  ['cruise', 'Cruise'],
  ['visa', 'Visa'],
] as const;
type Tab = (typeof TABS)[number][0];

interface Props {
  /** Send a pre-filled message to BiahesBot. */
  onAsk: (message: string) => void;
  /** Open a package's details. */
  onPackage: (id: string) => void;
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className="field"><label htmlFor={id}>{label}</label>{children}</div>;
}

export default function SearchPanel({ onAsk, onPackage }: Props) {
  const [tab, setTab] = useState<Tab>('flights');

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? '').trim();
    let msg = '';
    if (tab === 'flights') {
      const trip = v('trip') || 'Round trip';
      msg = `Hi! I need a ${trip.toLowerCase()} flight quote from ${v('from')} to ${v('to') || '(not sure yet)'}`
        + `${v('dep') ? `, departing ${v('dep')}` : ''}${trip === 'Round trip' && v('ret') ? `, returning ${v('ret')}` : ''}, for ${v('pax')} passenger(s).`;
    }
    if (tab === 'hotels') {
      msg = `Hi! Looking for a hotel in ${v('city') || '(city TBD)'}${v('in') ? `, check-in ${v('in')}` : ''}`
        + `${v('out') ? `, check-out ${v('out')}` : ''}, ${v('rooms')} room(s) for ${v('guests')} guest(s).`;
    }
    if (tab === 'packages') { onPackage(v('dest')); return; }
    if (tab === 'ferry') {
      msg = `Hi! I'd like a ferry quote (${v('op')}) from ${v('dport') || '?'} to ${v('aport') || '?'}${v('fdate') ? ` on ${v('fdate')}` : ''} for ${v('fpax')} passenger(s).`;
    }
    if (tab === 'cruise') msg = `Hi! Interested in a cruise: ${v('region')}${v('cmonth') ? `, sailing ${v('cmonth')}` : ''}, ${v('cpax')} guest(s).`;
    if (tab === 'visa') msg = `Hi! What are the visa requirements for ${v('country')}? I'm ${v('work').toLowerCase()}, Filipino passport holder.`;
    onAsk(msg);
  };

  return (
    <form className="search" autoComplete="off" onSubmit={submit}>
      <div className="tabs" role="tablist" aria-label="What are you booking?">
        {TABS.map(([key, label]) => (
          <button key={key} className="tab" type="button" role="tab" aria-selected={tab === key} onClick={() => setTab(key)}>
            {label}
          </button>
        ))}
      </div>

      {/* key={tab} remounts the fields so each tab starts fresh */}
      <div className="panel" key={tab}>
        {tab === 'flights' && (
          <>
            <div className="seg">
              <label><input type="radio" name="trip" value="Round trip" defaultChecked /> Round trip</label>
              <label><input type="radio" name="trip" value="One way" /> One way</label>
            </div>
            <Field id="s_from" label="From"><input id="s_from" name="from" defaultValue="Manila (MNL)" /></Field>
            <Field id="s_to" label="To"><input id="s_to" name="to" placeholder="Cebu, Tokyo…" /></Field>
            <Field id="s_dep" label="Depart"><input id="s_dep" name="dep" type="date" /></Field>
            <Field id="s_ret" label="Return"><input id="s_ret" name="ret" type="date" /></Field>
            <Field id="s_pax" label="Passengers"><input id="s_pax" name="pax" type="number" min={1} defaultValue={1} /></Field>
            <button className="btn btn-gold" type="submit">Get fare quote</button>
          </>
        )}
        {tab === 'hotels' && (
          <>
            <Field id="s_city" label="City"><input id="s_city" name="city" placeholder="Boracay, Makati, Osaka…" /></Field>
            <Field id="s_in" label="Check-in"><input id="s_in" name="in" type="date" /></Field>
            <Field id="s_out" label="Check-out"><input id="s_out" name="out" type="date" /></Field>
            <Field id="s_rooms" label="Rooms"><input id="s_rooms" name="rooms" type="number" min={1} defaultValue={1} /></Field>
            <Field id="s_guests" label="Guests"><input id="s_guests" name="guests" type="number" min={1} defaultValue={2} /></Field>
            <button className="btn btn-gold" type="submit">Find hotels</button>
          </>
        )}
        {tab === 'packages' && (
          <>
            <Field id="s_dest" label="Destination">
              <select id="s_dest" name="dest">
                {PACKAGES.map((p) => <option key={p.id} value={p.id}>{p.name} · {p.days}</option>)}
              </select>
            </Field>
            <Field id="s_month" label="Travel month"><input id="s_month" name="month" type="month" /></Field>
            <Field id="s_tpax" label="Travelers"><input id="s_tpax" name="tpax" type="number" min={1} defaultValue={2} /></Field>
            <button className="btn btn-gold" type="submit">See package</button>
          </>
        )}
        {tab === 'ferry' && (
          <>
            <Field id="s_op" label="Operator">
              <select id="s_op" name="op"><option>Any operator</option><option>2GO Travel</option><option>OceanJet</option><option>FastCat</option><option>Montenegro Lines</option></select>
            </Field>
            <Field id="s_dport" label="Departure port"><input id="s_dport" name="dport" placeholder="Cebu Pier 1" /></Field>
            <Field id="s_aport" label="Arrival port"><input id="s_aport" name="aport" placeholder="Tagbilaran" /></Field>
            <Field id="s_fdate" label="Travel date"><input id="s_fdate" name="fdate" type="date" /></Field>
            <Field id="s_fpax" label="Passengers"><input id="s_fpax" name="fpax" type="number" min={1} defaultValue={1} /></Field>
            <button className="btn btn-gold" type="submit">Get ferry quote</button>
          </>
        )}
        {tab === 'cruise' && (
          <>
            <Field id="s_region" label="Region">
              <select id="s_region" name="region">
                <option>Asian cruise (Singapore / Hong Kong)</option><option>Japan &amp; Korea</option><option>Mediterranean</option><option>Alaska</option><option>Caribbean</option>
              </select>
            </Field>
            <Field id="s_cmonth" label="Sailing month"><input id="s_cmonth" name="cmonth" type="month" /></Field>
            <Field id="s_cpax" label="Guests"><input id="s_cpax" name="cpax" type="number" min={1} defaultValue={2} /></Field>
            <button className="btn btn-gold" type="submit">Get cruise quote</button>
          </>
        )}
        {tab === 'visa' && (
          <>
            <Field id="s_country" label="Country">
              <select id="s_country" name="country">
                <option>Japan</option><option>South Korea</option><option>Schengen (Europe)</option><option>USA</option><option>UAE</option><option>Australia</option><option>Canada</option>
              </select>
            </Field>
            <Field id="s_work" label="Applicant">
              <select id="s_work" name="work">
                <option>Employed</option><option>Self-employed / business owner</option><option>OFW</option><option>Student</option><option>Retired</option>
              </select>
            </Field>
            <button className="btn btn-gold" type="submit">Ask about requirements</button>
          </>
        )}
      </div>
    </form>
  );
}
