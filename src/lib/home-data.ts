// Content for the Biahes homepage.
// Prices are starting rates per person in PHP — update them to your current rates.

export type Destination = {
  name: string;
  region: string;
  image: { src: string; alt: string };
  fromPrice: number;
  blurb: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  trip: string;
  /** Sample entries show a "Sample review" label. Replace with real customer reviews, then remove this flag. */
  sample?: boolean;
};

// Real photos from Unsplash (free for commercial use under the Unsplash License, no attribution required).
// Swap any of these for your own trip photos by pointing `src` to a file in /public/images.
export const PHOTOS = {
  boracay: { src: 'https://images.unsplash.com/photo-1675759801135-cc2bba0a677b?auto=format&fit=crop&w=1400&q=75', alt: 'Paraw sailboats off White Beach, Boracay', credit: 'Edward Ang' },
  palawan: { src: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=75', alt: 'Lagoon between limestone cliffs, El Nido, Palawan', credit: 'Cris Tagupa' },
  cebu: { src: 'https://images.unsplash.com/photo-1586263426392-3b3e0748f618?auto=format&fit=crop&w=1400&q=75', alt: 'Kawasan Falls, Badian, Cebu', credit: 'MJ Tangonan' },
  bohol: { src: 'https://images.unsplash.com/photo-1667823506151-836beb11723d?auto=format&fit=crop&w=1400&q=75', alt: 'The Chocolate Hills, Bohol', credit: 'Roland Hechanova' },
  siargao: { src: 'https://images.unsplash.com/photo-1565565978731-f9e8cd35a317?auto=format&fit=crop&w=1400&q=75', alt: 'Coconut palms in Siargao', credit: 'Alejandro Luengo' },
  baguio: { src: 'https://images.unsplash.com/photo-1666029584705-6c1d16984c22?auto=format&fit=crop&w=1400&q=75', alt: 'Baguio, a city in the mountains', credit: 'Ivan Arcilla' },
  vigan: { src: 'https://images.unsplash.com/photo-1656341158450-84fbc3659bab?auto=format&fit=crop&w=1400&q=75', alt: 'A kalesa on a Vigan street', credit: 'Carlos Ramirez' },
  davao: { src: 'https://images.unsplash.com/photo-1624685863152-4fa71a70d0c1?auto=format&fit=crop&w=1400&q=75', alt: 'Philippine Eagle, Davao', credit: 'Jomark Francis Velasco' },
  boracayShore: { src: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?auto=format&fit=crop&w=1400&q=75', alt: 'Bangka boat on a Boracay shore', credit: 'Hector John Periquin' },
  elNidoBoats: { src: 'https://images.unsplash.com/photo-1583685133115-90748ccbe274?auto=format&fit=crop&w=1400&q=75', alt: 'Island-hopping boat in El Nido', credit: 'Jules Bassoleil' },
  cebuFalls: { src: 'https://images.unsplash.com/photo-1609930420316-72622d2db23d?auto=format&fit=crop&w=1400&q=75', alt: 'Waterfall in Cebu', credit: 'Dennis Du' },
  baguioHills: { src: 'https://images.unsplash.com/photo-1580127252363-1d29a1ff0603?auto=format&fit=crop&w=1400&q=75', alt: 'Mountains around Baguio', credit: 'Gian Paul Guinto' },
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Tour Packages', href: '/#tours' },
  { label: 'Flights', href: '/#flights' },
  { label: 'Hotels', href: '/#hotels' },
  { label: 'Travel Blog', href: '/#blog' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const DESTINATIONS: Destination[] = [
  {
    name: 'Boracay',
    region: 'Aklan, Western Visayas',
    image: PHOTOS.boracay,
    fromPrice: 4999,
    blurb: 'Powder-white sand on White Beach, paraw sailing at sunset and lively Station 2 nights.',
  },
  {
    name: 'Palawan',
    region: 'El Nido and Coron, MIMAROPA',
    image: PHOTOS.palawan,
    fromPrice: 6499,
    blurb: 'Limestone cliffs over clear lagoons. Hop between hidden beaches and kayak the Big Lagoon.',
  },
  {
    name: 'Cebu',
    region: 'Central Visayas',
    image: PHOTOS.cebu,
    fromPrice: 3999,
    blurb: 'Canyoneer down to Kawasan Falls, snorkel the Moalboal sardine run and eat your way through lechon.',
  },
  {
    name: 'Bohol',
    region: 'Central Visayas',
    image: PHOTOS.bohol,
    fromPrice: 3499,
    blurb: 'The Chocolate Hills, tiny tarsiers, a Loboc River lunch cruise and quiet Panglao beaches.',
  },
  {
    name: 'Siargao',
    region: 'Surigao del Norte, Mindanao',
    image: PHOTOS.siargao,
    fromPrice: 5299,
    blurb: 'Surf the Cloud 9 reef break, then island-hop to Naked, Daku and Guyam islands.',
  },
  {
    name: 'Baguio',
    region: 'Benguet, Cordillera',
    image: PHOTOS.baguio,
    fromPrice: 2499,
    blurb: 'The Summer Capital: cool pine air, La Trinidad strawberry farms and Session Road cafés.',
  },
  {
    name: 'Vigan',
    region: 'Ilocos Sur',
    image: PHOTOS.vigan,
    fromPrice: 2899,
    blurb: 'Cobblestone Calle Crisologo, Spanish-era houses, kalesa rides and Vigan empanada.',
  },
  {
    name: 'Davao',
    region: 'Davao Region, Mindanao',
    image: PHOTOS.davao,
    fromPrice: 3799,
    blurb: 'Home of Mt. Apo and the Philippine Eagle. Durian, pomelo and quick boat rides to Samal.',
  },
];

export const WHY_CHOOSE = [
  { icon: 'map', title: 'Local guides', text: 'Hosts who grew up where you are headed and know the spots worth your time.' },
  { icon: 'peso', title: 'All-in peso pricing', text: 'Environmental and terminal fees shown up front, so there are no surprises.' },
  { icon: 'plane', title: 'Flights, hotels and tours', text: 'Book your whole trip in one place, from the plane ticket to the island hopping.' },
  { icon: 'chat', title: 'Help in your language', text: 'Message us in Filipino, Bisaya or English before and during your trip.' },
  { icon: 'passport', title: 'Visa assistance', text: 'We guide you through visa requirements for Japan, Korea and other trips abroad.' },
  { icon: 'heart', title: 'Trips planned for you', text: 'Tell us your dates and budget and a travel planner builds the itinerary.' },
] as const;

// Replace these sample entries with real reviews from your customers
// (with their permission) before launching, then remove `sample: true`.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Your customer’s review of their Boracay trip goes here — what they loved and how the booking went.',
    name: 'Customer name',
    trip: 'Boracay Escape 3D2N',
    sample: true,
  },
  {
    quote: 'Your customer’s review of their Palawan trip goes here — a highlight from the tour and the guides.',
    name: 'Customer name',
    trip: 'Palawan Island Hopping',
    sample: true,
  },
  {
    quote: 'Your customer’s review of their Japan trip goes here — how the visa help and itinerary worked out.',
    name: 'Customer name',
    trip: 'Tokyo, Fuji and Osaka 6D5N',
    sample: true,
  },
];

export const BLOG_POSTS = [
  {
    tag: 'Island hopping',
    title: 'El Nido Tours A, B, C or D: which one to book first',
    excerpt: 'What each tour covers, which lagoons need a kayak, and how to pick if you only have one day.',
    image: PHOTOS.elNidoBoats,
  },
  {
    tag: 'Food',
    title: 'Lechon, sutukil and puso: a first-timer’s Cebu food trail',
    excerpt: 'Where to start, how to order sutukil at a seafood market, and why you eat puso with your hands.',
    image: PHOTOS.cebuFalls,
  },
  {
    tag: 'Festivals',
    title: 'Panagbenga in Baguio: planning around the flower festival',
    excerpt: 'Parade dates, where to stand on Session Road, and how early to book rooms for February.',
    image: PHOTOS.baguioHills,
  },
];

export const peso = (n: number) => `₱${n.toLocaleString('en-PH')}`;
