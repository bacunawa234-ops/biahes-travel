// Content for the Biahes homepage.
// Prices are starting rates per person in PHP — update them to your current rates.

export type Destination = {
  name: string;
  region: string;
  image: string;
  fromPrice: number;
  blurb: string;
};

export type FeaturedTour = {
  title: string;
  location: string;
  image: string;
  category: string;
  duration: string;
  price: number;
  priceNote: string;
  highlights: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  trip: string;
  /** Sample entries show a "Sample review" label. Replace with real customer reviews, then remove this flag. */
  sample?: boolean;
};

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
    image: '/images/destinations/boracay.svg',
    fromPrice: 4999,
    blurb: 'Powder-white sand on White Beach, paraw sailing at sunset and lively Station 2 nights.',
  },
  {
    name: 'Palawan',
    region: 'El Nido and Coron, MIMAROPA',
    image: '/images/destinations/palawan.svg',
    fromPrice: 6499,
    blurb: 'Limestone cliffs over clear lagoons. Hop between hidden beaches and kayak the Big Lagoon.',
  },
  {
    name: 'Cebu',
    region: 'Central Visayas',
    image: '/images/destinations/cebu.svg',
    fromPrice: 3999,
    blurb: 'Canyoneer down to Kawasan Falls, snorkel the Moalboal sardine run and eat your way through lechon.',
  },
  {
    name: 'Bohol',
    region: 'Central Visayas',
    image: '/images/destinations/bohol.svg',
    fromPrice: 3499,
    blurb: 'The Chocolate Hills, tiny tarsiers, a Loboc River lunch cruise and quiet Panglao beaches.',
  },
  {
    name: 'Siargao',
    region: 'Surigao del Norte, Mindanao',
    image: '/images/destinations/siargao.svg',
    fromPrice: 5299,
    blurb: 'Surf the Cloud 9 reef break, then island-hop to Naked, Daku and Guyam islands.',
  },
  {
    name: 'Baguio',
    region: 'Benguet, Cordillera',
    image: '/images/destinations/baguio.svg',
    fromPrice: 2499,
    blurb: 'The Summer Capital: cool pine air, La Trinidad strawberry farms and Session Road cafés.',
  },
  {
    name: 'Vigan',
    region: 'Ilocos Sur',
    image: '/images/destinations/vigan.svg',
    fromPrice: 2899,
    blurb: 'Cobblestone Calle Crisologo, Spanish-era houses, kalesa rides and Vigan empanada.',
  },
  {
    name: 'Davao',
    region: 'Davao Region, Mindanao',
    image: '/images/destinations/davao.svg',
    fromPrice: 3799,
    blurb: 'Home of Mt. Apo and the Philippine Eagle. Durian, pomelo and quick boat rides to Samal.',
  },
];

export const FEATURED_TOURS: FeaturedTour[] = [
  {
    title: 'Boracay Escape 3D2N',
    location: 'Boracay, Aklan',
    image: '/images/destinations/boracay.svg',
    category: 'Beach',
    duration: '3 days, 2 nights',
    price: 8990,
    priceNote: '/ person',
    highlights: ['Caticlan airport and jetty transfers', '2 nights beachfront at Station 2', 'Island hopping with seafood lunch'],
  },
  {
    title: 'Palawan Island Hopping',
    location: 'El Nido, Palawan',
    image: '/images/destinations/palawan.svg',
    category: 'Island hopping',
    duration: '4 days, 3 nights',
    price: 12500,
    priceNote: '/ person',
    highlights: ['Puerto Princesa to El Nido van transfers', 'El Nido Tours A and C with lunch', 'Big and Small Lagoon kayaking'],
  },
  {
    title: 'Cebu Adventure Package',
    location: 'Moalboal and Cebu City',
    image: '/images/destinations/cebu.svg',
    category: 'Adventure',
    duration: '4 days, 3 nights',
    price: 10750,
    priceNote: '/ person',
    highlights: ['Kawasan Falls canyoneering with guide', 'Moalboal sardine run snorkeling', 'Oslob whale shark watching'],
  },
  {
    title: 'Bohol Countryside Tour',
    location: 'Carmen, Loboc and Panglao',
    image: '/images/destinations/bohol.svg',
    category: 'Nature',
    duration: '3 days, 2 nights',
    price: 7450,
    priceNote: '/ person',
    highlights: ['Chocolate Hills Complex viewing deck', 'Philippine Tarsier Sanctuary', 'Loboc River cruise with buffet lunch'],
  },
  {
    title: 'Tokyo, Fuji and Osaka 6D5N',
    location: 'Tokyo, Mt. Fuji and Osaka, Japan',
    image: '/images/destinations/japan.svg',
    category: 'Japan',
    duration: '6 days, 5 nights',
    price: 58900,
    priceNote: '/ person, with airfare',
    highlights: ['Roundtrip airfare from Manila', 'Mt. Fuji 5th Station and Lake Kawaguchi', 'Japan visa application assistance'],
  },
  {
    title: 'Seoul and Nami Island 5D4N',
    location: 'Seoul and Gapyeong, South Korea',
    image: '/images/destinations/korea.svg',
    category: 'South Korea',
    duration: '5 days, 4 nights',
    price: 39900,
    priceNote: '/ person, with airfare',
    highlights: ['Roundtrip airfare from Manila', 'Gyeongbokgung Palace with hanbok rental', 'Korea visa application assistance'],
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
    image: '/images/destinations/palawan.svg',
  },
  {
    tag: 'Food',
    title: 'Lechon, sutukil and puso: a first-timer’s Cebu food trail',
    excerpt: 'Where to start, how to order sutukil at a seafood market, and why you eat puso with your hands.',
    image: '/images/destinations/cebu.svg',
  },
  {
    tag: 'Festivals',
    title: 'Panagbenga in Baguio: planning around the flower festival',
    excerpt: 'Parade dates, where to stand on Session Road, and how early to book rooms for February.',
    image: '/images/destinations/baguio.svg',
  },
];

export const peso = (n: number) => `₱${n.toLocaleString('en-PH')}`;
