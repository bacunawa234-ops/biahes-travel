import { Tour } from './types';

// Biahes tour packages (shared by the homepage, tours list, tour details and booking pages).
// Replace with database data when the Supabase tours table is connected.
export const SAMPLE_TOURS: Tour[] = [
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
    hero_image_url: 'https://images.unsplash.com/photo-1567266565245-c08dc046815f?auto=format&fit=crop&w=1600&q=75',
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
    hero_image_url: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1600&q=75',
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
    hero_image_url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1600&q=75',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
];
