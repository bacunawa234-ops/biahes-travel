import Link from 'next/link';
import Image from 'next/image';
import { BRAND, ROUTES } from '@/lib/constants';
import { Tour } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tour Details - ' + BRAND.name,
  description: 'Discover amazing tours with ' + BRAND.name,
  metadataBase: new URL('https://biahes.com'),
  alternates: {
    canonical: 'https://biahes.com/tours/[id]',
  },
};

// Sample tours data - same as in tours/page.tsx (will be replaced with API call)
const SAMPLE_TOURS: Tour[] = [
  {
    id: '1',
    title: '4D3N Zhangjiajie + Huanglong Cave',
    destination: 'China',
    slug: 'zhangjiajie-huanglong-cave',
    description: 'Experience the breathtaking Avatar world of Zhangjiajie National Forest Park and explore the stunning Huanglong Cave with a cruise experience.',
    price: 20834,
    dates_from: '2026-11-11',
    dates_to: '2026-11-14',
    duration_days: 4,
    hotel_name: 'Mehood Lestie Hotel',
    airline: 'Qingdao Airlines',
    airline_logo_url: '/images/airlines/qingdao.png',
    inclusions: [
      'Roundtrip airfare via Qingdao Airlines',
      '5kg hand-carry + 23kg check-in baggage',
      '3 Nights Hotel Accommodation',
      'Daily hotel breakfast',
      'Private English-speaking tour guide and bus',
      'Meals as listed: 3 breakfasts, 4 lunches, 2 dinners',
      'One bottle of water per day',
      'Complimentary group aerial photography'
    ],
    exclusions: [
      'China Group Visa: ₱3,250 per pax',
      'Tips for driver and tour guide: ₱2,600 per pax',
      'Fuel surcharge (subject to change)',
      'Compulsory shopping stops',
      'Personal expenses and optional activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Changsha',
        location: 'Changsha',
        meals: 'Lunch',
        highlights: ['Zhangjiajie Grand Canyon & Glass Bridge', '72 Wonder Tower photo stop'],
        description: 'Meet and greet at the airport, transfer to Zhangjiajie. Visit the stunning Grand Canyon and Glass Bridge. Transfer to hotel for check-in.'
      },
      {
        day: 2,
        title: 'Avatar Exploration',
        location: 'Zhangjiajie',
        meals: 'Breakfast, Lunch, Dinner',
        highlights: ['Latex Museum', 'Tujia Folk Custom Park', 'Optional Tianmen Mountain Scenic Area'],
        description: 'Hotel breakfast. Visit Latex Museum and Tujia Folk Custom Park. Optional tour to Tianmen Mountain Scenic Area available.'
      },
      {
        day: 3,
        title: 'Avatar Hallelujah Mountain',
        location: 'Zhangjiajie National Forest Park',
        meals: 'Breakfast, Lunch, Dinner',
        highlights: ['Chinese Medicine Museum', 'Zhangjiajie National Forest Park', 'Bailong Elevator', 'Avatar Hallelujah Mountain'],
        description: 'Hotel breakfast. Visit Chinese Medicine Museum. Explore Zhangjiajie National Forest Park with Bailong Elevator. See the famous Avatar Hallelujah Mountain.'
      },
      {
        day: 4,
        title: 'Departure',
        location: 'Changsha - Manila',
        meals: 'Breakfast, Lunch',
        highlights: ['Jewelry store', 'Optional Huanglong Cave + Cruise'],
        description: 'Hotel breakfast and check-out. Jewelry store visit. Optional tour to Huanglong Cave with cruise experience. Transfer to airport for departure.'
      }
    ],
    hero_image_url: '/images/tours/china.jpg',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
  {
    id: '2',
    title: '4D3N Bangkok Free & Easy',
    destination: 'Thailand',
    slug: 'bangkok-free-easy',
    description: 'Discover the vibrant culture and cuisine of Bangkok with flexible itineraries and optional city tours.',
    price: 25499,
    dates_from: '2026-12-11',
    dates_to: '2026-12-14',
    duration_days: 4,
    hotel_name: 'Ten-Star Inn or MY Hotel',
    airline: 'Cebu Pacific',
    airline_logo_url: '/images/airlines/cebu-pacific.png',
    inclusions: ['Roundtrip airfare', '3 Nights Hotel', 'Breakfast daily', 'English Speaking Guide', 'Airport Transfers'],
    exclusions: ['Travel tax', 'Extra baggage', 'Meals not listed', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival', location: 'Bangkok', meals: 'Lunch', highlights: ['Airport transfer', 'Hotel check-in'], description: 'Arrive in Bangkok, transfer to hotel' },
      { day: 2, title: 'City Tour', location: 'Bangkok', meals: 'Breakfast', highlights: ['Temples', 'Markets'], description: 'Explore Bangkok temples and markets' },
      { day: 3, title: 'Free Time', location: 'Bangkok', meals: 'Breakfast', highlights: ['Shopping', 'Dining'], description: 'Explore on your own or join optional tours' },
      { day: 4, title: 'Departure', location: 'Bangkok', meals: 'Breakfast', highlights: ['Airport transfer'], description: 'Transfer to airport' }
    ],
    hero_image_url: '/images/tours/thailand.jpg',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
  {
    id: '3',
    title: '5D4N Tokyo Adventure',
    destination: 'Japan',
    slug: 'tokyo-adventure',
    description: 'Experience the perfect blend of traditional and modern Tokyo with guided tours and free time exploration.',
    price: 32999,
    dates_from: '2027-01-08',
    dates_to: '2027-01-12',
    duration_days: 5,
    hotel_name: 'Hotel Tokyo',
    airline: 'Philippine Airlines',
    airline_logo_url: '/images/airlines/philippine-airlines.png',
    inclusions: ['Roundtrip airfare', '4 Nights Hotel', 'Breakfast daily', 'English Speaking Guide', 'Airport Transfers', 'Travel Insurance'],
    exclusions: ['Japan Visa', 'Extra meals', 'Personal expenses', 'Shopping'],
    itinerary: [
      { day: 1, title: 'Arrival', location: 'Tokyo', meals: 'Dinner', highlights: ['Airport transfer'], description: 'Arrive and settle in' },
      { day: 2, title: 'Traditional Tokyo', location: 'Tokyo', meals: 'Breakfast, Lunch', highlights: ['Temples', 'Shrines'], description: 'Visit traditional sites' },
      { day: 3, title: 'Modern Tokyo', location: 'Tokyo', meals: 'Breakfast', highlights: ['Shibuya', 'Shinjuku'], description: 'Explore modern districts' },
      { day: 4, title: 'Mt. Fuji Day Trip', location: 'Mt. Fuji', meals: 'Breakfast, Lunch', highlights: ['Mt. Fuji views'], description: 'Optional Mt. Fuji trip' },
      { day: 5, title: 'Departure', location: 'Tokyo', meals: 'Breakfast', highlights: ['Airport transfer'], description: 'Transfer to airport' }
    ],
    hero_image_url: '/images/tours/japan.jpg',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
];

interface TourDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return SAMPLE_TOURS.map(tour => ({
    id: tour.slug,
  }));
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = SAMPLE_TOURS.find(t => t.slug === params.id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-biahes-navy mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the tour you're looking for.</p>
          <Link href={ROUTES.tours} className="btn-primary">
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const daysNights = `${tour.duration_days}D${tour.duration_days - 1}N`;

  // JSON-LD Structured Data for Tour
  const tourStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `https://biahes.com/tours/${tour.slug}`,
    name: tour.title,
    description: tour.description,
    image: tour.hero_image_url,
    url: `https://biahes.com/tours/${tour.slug}`,
    price: tour.price,
    priceCurrency: "PHP",
    duration: `P${tour.duration_days}D`,
    destination: {
      "@type": "Place",
      name: tour.destination,
    },
    startDate: tour.dates_from,
    endDate: tour.dates_to,
    offers: {
      "@type": "Offer",
      url: `https://biahes.com/booking`,
      price: tour.price.toString(),
      priceCurrency: "PHP",
      availability: "https://schema.org/InStock",
      validFrom: tour.dates_from,
      validThrough: tour.dates_to,
    },
    organizer: {
      "@type": "Organization",
      name: BRAND.name,
      url: "https://biahes.com",
      telephone: BRAND.phone,
      email: BRAND.email,
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((day, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: `Day ${day.day}: ${day.title}`,
        description: day.description,
        location: {
          "@type": "Place",
          name: day.location,
        },
      })),
    },
  };

  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://biahes.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tours",
        item: "https://biahes.com/tours",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tour.title,
        item: `https://biahes.com/tours/${tour.slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourStructuredData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />

      {/* Hero Section with Image */}
      <section className="relative h-96 bg-gradient-to-br from-biahes-bright-blue to-biahes-royal-blue flex items-center justify-center text-white text-7xl overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        🌍
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <Link href={ROUTES.tours} className="text-biahes-orange hover:text-biahes-red mb-6 inline-block font-semibold">
            ← Back to Tours
          </Link>

          {/* Title & Price */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-biahes-navy mb-4">
              {tour.title}
            </h1>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className="chip chip-orange">{daysNights}</span>
              <span className="chip chip-blue">{tour.destination}</span>
              <span className="chip chip-navy">
                📅 {new Date(tour.dates_from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(tour.dates_to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <div className="gradient-red-orange text-white rounded-lg px-6 py-4 inline-block">
              <p className="text-sm font-semibold mb-1">From</p>
              <p className="text-4xl font-bold">
                ₱{tour.price.toLocaleString()}
              </p>
              <p className="text-sm mt-1">per person</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Link href={ROUTES.booking} className="btn-primary text-lg px-8 py-4">
              Book This Tour
            </Link>
          </div>

          {/* Description */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-biahes-navy mb-4">About This Tour</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {tour.description}
            </p>
          </div>

          {/* Tour Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h3 className="text-lg font-bold text-biahes-navy mb-3">✈️ Flight Details</h3>
              <p className="text-gray-700 mb-2">
                <strong>Airline:</strong> {tour.airline}
              </p>
              <p className="text-gray-700">
                <strong>Baggage:</strong> 5kg hand-carry + 23kg check-in
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-biahes-navy mb-3">🏨 Hotel</h3>
              <p className="text-gray-700">
                {tour.hotel_name}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Twin/Triple sharing rooms available
              </p>
            </div>
          </div>

          {/* Itinerary */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-biahes-navy mb-6">📅 Itinerary</h2>

            <div className="space-y-6">
              {tour.itinerary.map((day, idx) => (
                <div key={idx} className="border-l-4 border-biahes-orange pl-6 pb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-bold text-biahes-orange">
                      {String(day.day).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-biahes-navy">
                        {day.title}
                      </h3>
                      <p className="text-sm text-biahes-orange">
                        📍 {day.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3">
                    {day.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {day.highlights.map((highlight, hIdx) => (
                      <span key={hIdx} className="chip chip-blue text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600">
                    🍽️ <strong>Meals:</strong> {day.meals}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="card mb-8 border-2 border-biahes-green-100">
            <h2 className="text-2xl font-bold text-biahes-red mb-4">✅ Inclusions</h2>
            <ul className="space-y-2">
              {tour.inclusions.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-biahes-orange font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-biahes-navy mb-4">❌ Exclusions</h2>
            <ul className="space-y-2">
              {tour.exclusions.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-biahes-red font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border-l-4 border-biahes-gold p-6 rounded mb-8">
            <h3 className="text-lg font-bold text-biahes-navy mb-3">📝 Important Notes</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Non-refundable, non-rebookable package</li>
              <li>• All rates are exclusive of VAT</li>
              <li>• Subject to change and availability</li>
              <li>• Visa requirements may apply - please check</li>
              <li>• Fuel surcharge may be added</li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="gradient-red-orange text-white rounded-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-lg mb-6">
              Secure your spot on this amazing tour today!
            </p>
            <Link href={ROUTES.booking} className="btn bg-white text-biahes-red hover:bg-gray-100 font-bold inline-block">
              Book Now
            </Link>
          </div>

          {/* Contact Section */}
          <div className="card text-center">
            <h3 className="text-xl font-bold text-biahes-navy mb-4">Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Contact us and our travel experts will help you with any inquiries!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href={`tel:${BRAND.phone}`} className="btn-secondary">
                📞 {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="btn-secondary">
                📧 {BRAND.email}
              </a>
              <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                📱 Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
