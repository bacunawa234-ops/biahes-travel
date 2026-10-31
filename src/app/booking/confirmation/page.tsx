'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BRAND, ROUTES } from '@/lib/constants';

interface BookingData {
  tour_id: string;
  tour_title: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  pax_count: number;
  total_price: number;
  booking_date: string;
}

export default function ConfirmationPage() {
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  useEffect(() => {
    // Get booking data from localStorage
    const lastBooking = localStorage.getItem('lastBooking');
    if (lastBooking) {
      const data = JSON.parse(lastBooking);
      setBooking(data);

      // Generate confirmation number
      const confirmNum = 'BH' + Date.now().toString().slice(-8).toUpperCase();
      setConfirmationNumber(confirmNum);

      // Clear localStorage
      localStorage.removeItem('lastBooking');
    }
  }, []);

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-6">Loading your booking confirmation...</p>
          <Link href={ROUTES.home} className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Success Section */}
      <section className="gradient-red-orange text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-100 mb-8">
            Your tour has been successfully booked. Check your email for confirmation details.
          </p>

          {/* Confirmation Number */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 inline-block">
            <p className="text-sm text-gray-200 mb-2">Confirmation Number</p>
            <p className="text-4xl font-bold font-mono">{confirmationNumber}</p>
            <p className="text-xs text-gray-200 mt-4">
              Save this number for your records
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Booking Summary */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-biahes-navy mb-6">Booking Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tour Information */}
              <div>
                <h3 className="text-lg font-bold text-biahes-navy mb-4">Tour Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">Tour Package</p>
                    <p className="font-semibold text-biahes-navy">
                      {booking.tour_title}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">Number of Travelers</p>
                    <p className="font-semibold text-biahes-navy">
                      {booking.pax_count} {booking.pax_count === 1 ? 'Person' : 'People'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">Booking Date</p>
                    <p className="font-semibold text-biahes-navy">
                      {new Date(booking.booking_date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Passenger Information */}
              <div>
                <h3 className="text-lg font-bold text-biahes-navy mb-4">Your Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">Full Name</p>
                    <p className="font-semibold text-biahes-navy">
                      {booking.customer_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">Email</p>
                    <p className="font-semibold text-biahes-navy">
                      {booking.customer_email}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide">Phone</p>
                    <p className="font-semibold text-biahes-navy">
                      {booking.customer_phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="card gradient-red-orange text-white mb-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-100 mb-2">Total Booking Price</p>
                <p className="text-4xl font-bold">
                  ₱{booking.total_price.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-100 mb-2">Payment Status</p>
                <p className="text-2xl font-bold">PENDING</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card mb-8 border-2 border-biahes-orange">
            <h3 className="text-lg font-bold text-biahes-navy mb-4">📋 What Happens Next?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-biahes-orange text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-biahes-navy">Confirmation Email</h4>
                  <p className="text-gray-600 text-sm">
                    Check your email at <strong>{booking.customer_email}</strong> for your booking confirmation and details within the next 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-biahes-orange text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-biahes-navy">Payment Request</h4>
                  <p className="text-gray-600 text-sm">
                    Our team will contact you at <strong>{booking.customer_phone}</strong> to confirm your booking and provide payment details.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-biahes-orange text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-biahes-navy">Pre-Departure Info</h4>
                  <p className="text-gray-600 text-sm">
                    Once payment is confirmed, you'll receive all pre-departure information including travel documents, visa requirements, and final itinerary details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="card mb-8 bg-yellow-50">
            <h3 className="text-lg font-bold text-biahes-navy mb-4">⚠️ Important Reminders</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2">
                <span>•</span>
                <span>This package is <strong>non-refundable and non-rebookable</strong></span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Check visa requirements for your destination country</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Ensure your passport is valid for at least 6 months beyond your travel dates</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Keep your confirmation number safe - you'll need it at check-in</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Travel insurance is recommended but not included in the package</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="card text-center">
            <h3 className="text-lg font-bold text-biahes-navy mb-4">Questions or Need Assistance?</h3>
            <p className="text-gray-700 mb-6">
              Our travel experts are here to help! Contact us anytime.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href={`tel:${BRAND.phone}`} className="btn-secondary">
                📞 Call: {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="btn-secondary">
                📧 Email: {BRAND.email}
              </a>
              <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                📱 Message on Facebook
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <Link href={ROUTES.home} className="btn-secondary text-lg px-8 py-3">
              Return Home
            </Link>
            <Link href={ROUTES.tours} className="btn-outline text-lg px-8 py-3">
              Browse More Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-biahes-navy mb-4">
            Thank You for Choosing {BRAND.name}!
          </h2>
          <p className="text-lg text-gray-700">
            We're excited to help you create unforgettable travel memories. Get ready for an amazing adventure! 🌍✈️
          </p>
        </div>
      </section>
    </>
  );
}
