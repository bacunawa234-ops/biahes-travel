'use client';

import { Fragment, useEffect, useRef, useState, type FormEvent } from 'react';
import { findPackage, peso } from '@/lib/packages';
import { PackageArt } from './PackageCard';
import { botReply, type BotReply } from './biahesBotBrain';

type Message = { id: number; role: 'me' | 'bot' } & Partial<BotReply> & { text: string };

const QUICK = ['Boracay for 4, budget ₱40k', 'Japan visa requirements', 'Ferry Cebu to Bohol', 'Saan maganda sa December?'];

const WELCOME = "Hi, Ka-Biahes! 👋 I'm **BiahesBot**. Saan tayo next? I can quote flights, hotels, tour packages, ferry and cruise trips, or walk you through visa requirements.\n\nTell me your destination, travel dates and how many of you are going.";

/** Tiny formatter: **bold**, "- " bullets, blank-line paragraphs. */
function Rich({ text }: { text: string }) {
  const bold = (s: string) => s.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>));
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) blocks.push(<ul key={blocks.length}>{list.map((l, i) => <li key={i}>{bold(l)}</li>)}</ul>);
    list = [];
  };
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*[-•*]\s+(.*)/);
    if (m) { list.push(m[1]); continue; }
    flush();
    if (line.trim()) blocks.push(<p key={blocks.length}>{bold(line)}</p>);
  }
  flush();
  return <>{blocks}</>;
}

interface Props {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  /** A message queued from outside (the hero search panel). */
  pending: { text: string; nonce: number } | null;
  onDetails: (id: string) => void;
  onBook: (id: string) => void;
  onQuote: (service: string, note: string) => void;
}

export default function BiahesBot({ open, onOpen, onClose, pending, onDetails, onBook, onQuote }: Props) {
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: 'bot', text: WELCOME }]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const nextId = useRef(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [...m, { id: nextId.current++, role: 'me', text: clean }]);
    setTyping(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { id: nextId.current++, role: 'bot', ...botReply(clean) }]);
      setTyping(false);
    }, 550);
  };

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  // messages handed over from the search panel
  const lastNonce = useRef<number | null>(null);
  useEffect(() => {
    if (pending && pending.nonce !== lastNonce.current) {
      lastNonce.current = pending.nonce;
      send(pending.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending]);

  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => { logRef.current?.scrollTo({ top: logRef.current.scrollHeight }); }, [messages, typing, open]);

  const submit = (e: FormEvent) => { e.preventDefault(); send(draft); setDraft(''); };

  if (!open) {
    return (
      <button className="fab" type="button" onClick={onOpen}>
        <span className="dot" aria-hidden="true" />Ask BiahesBot
      </button>
    );
  }

  return (
    <div className="chat" role="dialog" aria-label="BiahesBot chat">
      <header>
        <div className="av" aria-hidden="true">B</div>
        <div><b>BiahesBot</b><small>Instant answers · consultants follow up</small></div>
        <button type="button" onClick={onClose} aria-label="Close chat">×</button>
      </header>

      <div className="log" ref={logRef} aria-live="polite">
        {messages.map((m) => (
          <Fragment key={m.id}>
            <div className={`msg ${m.role}`}><Rich text={m.text} /></div>
            {m.pkgs?.map((id) => {
              const p = findPackage(id);
              if (!p) return null;
              return (
                <div className="mini" key={`${m.id}-${id}`}>
                  <div className="art"><PackageArt pkg={p} sizes="380px" /></div>
                  <div className="b">
                    <div>
                      <b>{p.name} {p.days}</b>
                      <span className="price">{peso(p.price)}</span> <small style={{ color: 'var(--muted)' }}>/ person</small>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn btn-ghost" type="button" onClick={() => onDetails(p.id)}>Details</button>
                      <button className="btn btn-gold" type="button" onClick={() => onBook(p.id)}>Book Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
            {m.quote && (
              <div className="mini">
                <div className="b">
                  <span>Get a quote from a consultant</span>
                  <button className="btn btn-gold" type="button" onClick={() => onQuote(m.quote!.service, m.quote!.note)}>Request quote</button>
                </div>
              </div>
            )}
          </Fragment>
        ))}
        {typing && <div className="msg bot thinking">BiahesBot is typing…</div>}
      </div>

      <div className="quick">
        {QUICK.map((q) => <button type="button" key={q} onClick={() => send(q)}>{q}</button>)}
      </div>
      <form className="compose" onSubmit={submit}>
        <textarea
          ref={inputRef}
          rows={1}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(e); } }}
          placeholder="Type your message… (English, Filipino or Taglish)"
          aria-label="Message"
        />
        <button className="btn btn-ocean" type="submit" disabled={typing}>Send</button>
      </form>
    </div>
  );
}
