'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/lib/types';
import { ROUTES } from '@/lib/constants';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const daysNights = `${tour.duration_days}D${tour.duration_days - 1}N`;

  return (
    <Link href={`${ROUTES.tours}/${tour.slug}`}>
      <div className="card hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="h-48 bg-gradient-to-br from-biahes-bright-blue to-biahes-royal-blue rounded-lg mb-4 flex items-center justify-center text-white text-5xl overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          🌍
        </div>

        {/* Duration Badge */}
        <div className="chip chip-orange mb-2 w-fit">
          {daysNights}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-biahes-navy mb-2 line-clamp-2 group-hover:text-biahes-orange transition-colors">
          {tour.title}
        </h3>

        {/* Destination */}
        <p className="text-biahes-orange font-semibold mb-2">
          📍 {tour.destination}
        </p>

        {/* Dates */}
        <p className="text-gray-600 text-sm mb-4">
          📅 {new Date(tour.dates_from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(tour.dates_to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Hotel */}
        <p className="text-gray-600 text-sm mb-4">
          🏨 {tour.hotel_name}
        </p>

        {/* Price Section - Spacer to Bottom */}
        <div className="flex-1" />

        <div className="flex items-end justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-600">From</p>
            <p className="text-2xl font-bold text-biahes-red">
              ₱{tour.price.toLocaleString()}
            </p>
          </div>
          <button className="btn-primary text-sm px-4 py-2">
            View →
          </button>
        </div>
      </div>
    </Link>
  );
}
