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
        {/* Tour Photo */}
        <div className="h-48 rounded-lg mb-4 overflow-hidden relative" style={{ position: 'relative', height: 192, borderRadius: 8, overflow: 'hidden' }}>
          <Image
            src={tour.hero_image_url}
            alt={`${tour.title}, ${tour.destination}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="group-hover:scale-105 transition-transform duration-300"
            style={{ objectFit: 'cover' }}
          />
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
