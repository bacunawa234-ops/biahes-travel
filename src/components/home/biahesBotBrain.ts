// BiahesBot's rule-based answers. Runs entirely in the browser: quotes only the final
// prices in src/lib/packages.ts and hands anything it can't price to a consultant
// (via the Book Now / quote form). Swap `botReply` for a call to an AI route later
// without touching the chat UI.

import { FARES, PACKAGES, peso, type TourPackage } from '@/lib/packages';

export interface BotReply {
  text: string;
  /** package ids to show as mini cards */
  pkgs?: string[];
  /** offer a "Request quote" button that opens the booking form with this service */
  quote?: { service: string; note: string };
}

const ALIASES: Record<string, string[]> = {
  boracay: ['boracay', 'caticlan', 'white beach'],
  elnido: ['el nido', 'elnido', 'bacuit'],
  coron: ['coron', 'busuanga', 'kayangan'],
  palawan: ['puerto princesa', 'underground river', 'palawan'],
  cebu: ['cebu', 'moalboal'],
  bohol: ['bohol', 'panglao', 'chocolate hills', 'tagbilaran'],
  siargao: ['siargao', 'cloud 9'],
  baguio: ['baguio'],
  vigan: ['vigan', 'ilocos'],
  davao: ['davao', 'samal'],
  japan: ['japan', 'tokyo', 'fuji', 'osaka', 'kyoto'],
  korea: ['korea', 'seoul', 'nami'],
  singapore: ['singapore', 'sentosa'],
  thailand: ['thailand', 'bangkok', 'pattaya'],
  vietnam: ['vietnam', 'hanoi', 'ha long', 'halong'],
  malaysia: ['malaysia', 'kuala lumpur', 'genting'],
  taiwan: ['taiwan', 'taipei'],
  hongkong: ['hong kong', 'hongkong'],
  dubai: ['dubai', 'uae', 'abu dhabi'],
  europe: ['europe', 'paris', 'france', 'switzerland', 'italy', 'rome', 'schengen'],
};

const FARE_ALIASES: Record<string, string[]> = {
  'Cebu': ['cebu'], 'Caticlan (Boracay)': ['boracay', 'caticlan'], 'Puerto Princesa': ['puerto princesa', 'palawan'],
  'Davao': ['davao'], 'Tagbilaran/Panglao (Bohol)': ['bohol', 'panglao', 'tagbilaran'], 'Siargao': ['siargao'],
  'Busuanga (Coron)': ['coron', 'busuanga'], 'El Nido': ['el nido'], 'Tokyo': ['tokyo', 'japan'], 'Seoul': ['seoul', 'korea'],
  'Singapore': ['singapore'], 'Bangkok': ['bangkok', 'thailand'], 'Hong Kong': ['hong kong'], 'Taipei': ['taipei', 'taiwan'],
  'Kuala Lumpur': ['kuala lumpur', 'malaysia'], 'Hanoi': ['hanoi', 'vietnam'], 'Dubai': ['dubai'],
};

const has = (t: string, re: RegExp) => re.test(t);

function matchPackages(t: string): TourPackage[] {
  return PACKAGES.filter((p) => ALIASES[p.id]?.some((a) => t.includes(a)));
}

function parseBudget(t: string): number | null {
  const m = t.match(/(?:₱|php\s?|budget[^\d]{0,12})([\d][\d,.]*)\s*(k)?/i) || t.match(/\b([\d][\d,.]*)\s*k\b/i);
  if (!m) return null;
  const n = parseFloat(m[1].replace(/,/g, ''));
  if (!n) return null;
  return m[2] || /k\b/i.test(m[0]) ? n * 1000 : n;
}

function parsePax(t: string): number | null {
  const m = t.match(/\bfor\s+(\d{1,2})\b/i) || t.match(/\b(\d{1,2})\s*(?:pax|people|persons?|travell?ers|adults|guests|kami|tao)\b/i);
  return m ? Number(m[1]) : null;
}

function packageLine(p: TourPackage, pax: number | null) {
  const total = pax ? ` → **${peso(p.price * pax)}** for ${pax}` : '';
  return `- **${p.name} ${p.days}**: ${peso(p.price)} per person${total}`;
}

export function botReply(input: string): BotReply {
  const t = input.toLowerCase();
  const pax = parsePax(t);
  const budget = parseBudget(t);
  const pkgs = matchPackages(t);

  if (has(t, /\b(cancel|refund|rebook|reschedul)/)) {
    return {
      text: 'Sorry to hear that. Please send your **booking reference** and the reason, and a Biahes consultant will follow up on your cancellation or refund.',
      quote: { service: 'Cancellation', note: input },
    };
  }

  if (has(t, /\b(ferry|ferries|2go|oceanjet|fastcat|montenegro|barko|boat ticket)/)) {
    return {
      text: 'We book ferries with **2GO Travel, OceanJet, FastCat, Montenegro Lines** and other operators.\n'
        + 'Tell me your departure and arrival port, travel date and number of passengers, and a consultant will send the exact final fare shortly.',
      quote: { service: 'Ferry', note: input },
    };
  }

  if (has(t, /\bcruise/)) {
    return {
      text: 'We book Asian sailings out of **Singapore and Hong Kong**, plus Japan & Korea, Mediterranean, Alaska and Caribbean itineraries. '
        + 'Share your preferred month and number of guests and a consultant will send cabin options with final prices.',
      quote: { service: 'Cruise', note: input },
    };
  }

  if (has(t, /\bvisa\b|requirements?|embassy/)) {
    return {
      text: 'Typical documents for a tourist visa on a Philippine passport:\n'
        + '- Passport valid for at least 6 months, plus photo and completed form\n'
        + '- Bank certificate and recent statements\n'
        + '- Certificate of employment, or business papers if self-employed (OFWs: current contract)\n'
        + '- ITR, and your flight and hotel itinerary\n'
        + 'Rules differ per embassy and change often, so our consultant will confirm the latest checklist for you. We can help with appointments but can\'t guarantee approval.',
      quote: { service: 'Visa', note: input },
    };
  }

  if (has(t, /\b(hotel|resort|accommodation|check-?in)\b/)) {
    return {
      text: 'We book everything from beachfront resorts in Boracay to business hotels in Makati, Tokyo or Dubai. '
        + 'Send the city, check-in/out dates, rooms and guests, and a consultant will reply with options and final prices.',
      quote: { service: 'Hotel', note: input },
    };
  }

  if (has(t, /\b(flights?|fare|airfare|plane|lipad|ticket)\b/)) {
    const fares = FARES.filter(([city]) => FARE_ALIASES[city]?.some((a) => t.includes(a)));
    if (fares.length) {
      return {
        text: fares.map(([c, f]) => `- Manila → **${c}**: from ${peso(f)} one way per person`).join('\n')
          + '\nRound trip is roughly double. The live fare is confirmed by a consultant before payment.',
        pkgs: pkgs.slice(0, 2).map((p) => p.id),
        quote: { service: 'Flight', note: input },
      };
    }
    return {
      text: 'Sure! Where are you flying to, and on what dates? We book PAL, Cebu Pacific, AirAsia and foreign carriers, one way or round trip.',
      quote: { service: 'Flight', note: input },
    };
  }

  if (pkgs.length) {
    const shown = pkgs.slice(0, 3);
    let text = shown.map((p) => packageLine(p, pax)).join('\n');
    if (budget && pax) {
      const ok = shown.filter((p) => p.price * pax <= budget);
      text += ok.length
        ? `\nGood news, ${ok.map((p) => p.name).join(' and ')} fits your ${peso(budget)} budget.`
        : `\nThat's above your ${peso(budget)} budget. Want me to suggest something closer to it?`;
    }
    if (shown.some((p) => p.region === 'dom')) text += '\nDomestic packages exclude airfare; we can add flights to your quote.';
    text += '\nTap **Book Now** to reserve, or ask me anything about the itinerary.';
    return { text, pkgs: shown.map((p) => p.id) };
  }

  if (budget) {
    const per = pax ? budget / pax : budget;
    const fits = PACKAGES.filter((p) => p.price <= per).sort((a, b) => b.price - a.price).slice(0, 3);
    if (fits.length) {
      return {
        text: `With ${peso(budget)}${pax ? ` for ${pax}` : ''}, these fit nicely:\n` + fits.map((p) => packageLine(p, pax)).join('\n'),
        pkgs: fits.map((p) => p.id),
      };
    }
  }

  if (has(t, /\b(saan|where|recommend|suggest|december|christmas|holiday|summer|maganda|ideas?)\b/)) {
    const picks = ['boracay', 'siargao', 'japan'];
    return {
      text: 'Ilan sa mga favorite ng Ka-Biahes:\n'
        + '- **Boracay** for the beach and island hopping\n'
        + '- **Siargao** for surf and island-hopping barkada trips\n'
        + '- **Japan** for winter scenery and Mt. Fuji\n'
        + 'Tell me your budget and how many of you are going and I\'ll narrow it down.',
      pkgs: picks,
    };
  }

  if (has(t, /\b(magkano|how much|price|rates?|cheap|mura)\b/)) {
    const dom = [...PACKAGES].filter((p) => p.region === 'dom').sort((a, b) => a.price - b.price).slice(0, 2);
    const intl = [...PACKAGES].filter((p) => p.region === 'intl').sort((a, b) => a.price - b.price).slice(0, 2);
    return {
      text: 'Our most affordable packages right now:\n' + [...dom, ...intl].map((p) => packageLine(p, pax)).join('\n'),
      pkgs: [...dom, ...intl].slice(0, 3).map((p) => p.id),
    };
  }

  if (has(t, /^(hi|hello|hey|good (morning|afternoon|evening)|kumusta|musta)\b/)) {
    return { text: 'Hello, Ka-Biahes! 👋 Saan tayo next? Tell me your destination, travel dates and how many of you are going.' };
  }

  return {
    text: 'Got it! A Biahes consultant can take it from here. Tap below to leave your details and we\'ll send your quote.',
    quote: { service: 'travel', note: input },
  };
}
