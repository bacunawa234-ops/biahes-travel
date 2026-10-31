import { Suspense } from 'react';
import { BRAND, ROUTES } from '@/lib/constants';
import TourCard from '@/components/TourCard';
import { Tour } from '@/lib/types';

// Sample tours data - will be replaced with API call
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

export const metadata = {
  title: 'Tours - ' + BRAND.name,
  description: 'Browse our amazing tour packages across Asia',
};

interface SearchParams {
  destination?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
}

export default function ToursPage({ searchParams }: { searchParams: SearchParams }) {
  // Filter and sort tours
  let tours = [...SAMPLE_TOURS];

  if (searchParams.destination) {
    tours = tours.filter(t =>
      t.destination.toLowerCase().includes((searchParams.destination ?? '').toLowerCase())
    );
  }

  if (searchParams.minPrice) {
    const minPrice = parseInt(searchParams.minPrice ?? '0');
    tours = tours.filter(t => t.price >= minPrice);
  }

  if (searchParams.maxPrice) {
    const maxPrice = parseInt(searchParams.maxPrice ?? '999999');
    tours = tours.filter(t => t.price <= maxPrice);
  }

  if (searchParams.sortBy === 'price-low') {
    tours.sort((a, b) => a.price - b.price);
  } else if (searchParams.sortBy === 'price-high') {
    tours.sort((a, b) => b.price - a.price);
  } else if (searchParams.sortBy === 'date') {
    tours.sort((a, b) => new Date(a.dates_from).getTime() - new Date(b.dates_from).getTime());
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-blue text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Our Tours</h1>
          <p className="text-gray-200">
            Discover amazing destinations across Asia with {BRAND.name}
          </p>
        </div>
      </section>

      {/* Filters & Tours Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h3 className="text-lg font-bold text-biahes-navy mb-4">Filters</h3>

                {/* Destination Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-biahes-navy mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Search destination..."
                    defaultValue={searchParams.destination || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none"
                  />
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-biahes-navy mb-2">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      defaultValue={searchParams.minPrice || ''}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      defaultValue={searchParams.maxPrice || ''}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none"
                    />
                  </div>
                </div>

                {/* Sort */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-biahes-navy mb-2">
                    Sort By
                  </label>
                  <select defaultValue={searchParams.sortBy || ''} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none">
                    <option value="">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="date">Departure Date</option>
                  </select>
                </div>

                <button className="btn-primary w-full">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="lg:col-span-3">
              {tours.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">No tours found matching your criteria.</p>
                  <a href={ROUTES.tours} className="btn-primary">
                    Clear Filters
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-gray-600">
                      Showing <span className="font-bold">{tours.length}</span> tour{tours.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tours.map(tour => (
                      <TourCard key={tour.id} tour={tour} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-red-orange text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Contact us and we'll help you find or customize your perfect tour!
          </p>
          <a href={`tel:${BRAND.phone}`} className="btn bg-white text-biahes-red hover:bg-gray-100 font-bold">
            Call Us: {BRAND.phone}
          </a>
        </div>
      </section>
    </>
  );
}
