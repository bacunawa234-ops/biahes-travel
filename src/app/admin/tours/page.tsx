'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { Tour } from '@/lib/types';

// Sample tours data
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
    inclusions: ['Roundtrip airfare', '3 Nights Hotel', 'Breakfast daily', 'English Speaking Guide'],
    exclusions: ['China Group Visa', 'Tips', 'Personal expenses'],
    itinerary: [],
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
    hotel_name: 'Ten-Star Inn',
    airline: 'Cebu Pacific',
    airline_logo_url: '/images/airlines/cebu-pacific.png',
    inclusions: ['Roundtrip airfare', '3 Nights Hotel', 'Breakfast daily'],
    exclusions: ['Travel tax', 'Extra meals'],
    itinerary: [],
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
    inclusions: ['Roundtrip airfare', '4 Nights Hotel', 'Breakfast daily'],
    exclusions: ['Japan Visa', 'Personal expenses'],
    itinerary: [],
    hero_image_url: '/images/tours/japan.jpg',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
];

export default function AdminToursPage() {
  const [tours] = useState<Tour[]>(SAMPLE_TOURS);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-biahes-navy mb-2">Manage Tours</h1>
          <p className="text-gray-600">Add, edit, or delete tour packages</p>
        </div>
        <button
          onClick={() => {
            setSelectedTour(null);
            setShowForm(!showForm);
          }}
          className="btn-primary"
        >
          ➕ Add New Tour
        </button>
      </div>

      {/* Tour Form */}
      {showForm && (
        <div className="card border-2 border-biahes-orange">
          <h2 className="text-xl font-bold text-biahes-navy mb-6">
            {selectedTour ? 'Edit Tour' : 'Create New Tour'}
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Tour Title</label>
                <input
                  type="text"
                  placeholder="e.g., 4D3N Bangkok Free & Easy"
                  defaultValue={selectedTour?.title || ''}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="e.g., Thailand"
                  defaultValue={selectedTour?.destination || ''}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Price per Person (₱)</label>
                <input
                  type="number"
                  placeholder="25499"
                  defaultValue={selectedTour?.price || ''}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                />
              </div>

              {/* Hotel */}
              <div>
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Hotel Name</label>
                <input
                  type="text"
                  placeholder="e.g., Ten-Star Inn"
                  defaultValue={selectedTour?.hotel_name || ''}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                />
              </div>

              {/* Dates From */}
              <div>
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Departure Date</label>
                <input
                  type="date"
                  defaultValue={selectedTour?.dates_from || ''}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                />
              </div>

              {/* Dates To */}
              <div>
                <label className="block text-sm font-semibold text-biahes-navy mb-2">Return Date</label>
                <input
                  type="date"
                  defaultValue={selectedTour?.dates_to || ''}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-biahes-navy mb-2">Description</label>
              <textarea
                placeholder="Tour description..."
                defaultValue={selectedTour?.description || ''}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button type="submit" className="btn-primary">
                {selectedTour ? 'Update Tour' : 'Create Tour'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setSelectedTour(null);
                }}
                className="btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-600 mt-4 italic">
            Note: This is a demo form. In production, this would save to Supabase.
          </p>
        </div>
      )}

      {/* Tours Table */}
      <div className="card overflow-hidden">
        <h2 className="text-xl font-bold text-biahes-navy mb-6">All Tours ({tours.length})</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-bold text-biahes-navy">Tour Title</th>
                <th className="text-left py-4 px-6 font-bold text-biahes-navy">Destination</th>
                <th className="text-left py-4 px-6 font-bold text-biahes-navy">Dates</th>
                <th className="text-right py-4 px-6 font-bold text-biahes-navy">Price</th>
                <th className="text-center py-4 px-6 font-bold text-biahes-navy">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-biahes-navy">{tour.title}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="chip chip-blue text-xs">📍 {tour.destination}</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {new Date(tour.dates_from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(tour.dates_to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-biahes-red">
                    ₱{tour.price.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedTour(tour);
                        setShowForm(true);
                      }}
                      className="inline-block bg-biahes-royal-blue text-white px-3 py-1 rounded hover:bg-biahes-navy transition-colors text-sm font-semibold"
                    >
                      Edit
                    </button>
                    <button className="inline-block bg-biahes-red text-white px-3 py-1 rounded hover:bg-biahes-deep-red transition-colors text-sm font-semibold">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {tours.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No tours found</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">
              Create Your First Tour
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
