'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tour } from '@/lib/types';
import { ROUTES } from '@/lib/constants';

interface BookingFormProps {
  tour: Tour;
}

export default function BookingForm({ tour }: BookingFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    pax_count: 1,
    booking_date: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      booking_date: new Date().toISOString().split('T')[0],
    }));
  }, []);

  const totalPrice = tour.price * formData.pax_count;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'pax_count' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     tour_id: tour.id,
      //     ...formData,
      //     total_price: totalPrice,
      //   }),
      // });

      // For now, store in localStorage and redirect
      localStorage.setItem('lastBooking', JSON.stringify({
        tour_id: tour.id,
        tour_title: tour.title,
        ...formData,
        total_price: totalPrice,
      }));

      router.push(ROUTES.confirmation);
    } catch (err) {
      setError('Failed to submit booking. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="card mb-6">
        <h3 className="text-lg font-bold text-biahes-navy mb-4">Your Details</h3>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="customer_email"
              value={formData.customer_email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="customer_phone"
              value={formData.customer_phone}
              onChange={handleChange}
              placeholder="+63 9XX XXX XXXX"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
            />
          </div>

          {/* Number of Pax */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">
              Number of Travelers *
            </label>
            <select
              name="pax_count"
              value={formData.pax_count}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Person' : 'People'}
                </option>
              ))}
            </select>
          </div>

          {/* Booking Date */}
          <div>
            <label className="block text-sm font-semibold text-biahes-navy mb-2">
              Preferred Booking Date *
            </label>
            <input
              type="date"
              name="booking_date"
              value={formData.booking_date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="card mb-6 gradient-red-orange text-white">
        <h3 className="text-lg font-bold mb-4">Booking Summary</h3>

        <div className="space-y-2 mb-4 pb-4 border-b border-white/30">
          <div className="flex justify-between">
            <span>Tour:</span>
            <span className="font-semibold">{tour.title}</span>
          </div>
          <div className="flex justify-between">
            <span>Price per person:</span>
            <span className="font-semibold">₱{tour.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Number of travelers:</span>
            <span className="font-semibold">{formData.pax_count}</span>
          </div>
        </div>

        <div className="flex justify-between text-xl font-bold">
          <span>Total Price:</span>
          <span>₱{totalPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="card mb-6 bg-yellow-50">
        <h3 className="text-sm font-bold text-biahes-navy mb-3">⚠️ Important Information</h3>
        <ul className="text-xs text-gray-700 space-y-2">
          <li>✓ Non-refundable, non-rebookable package</li>
          <li>✓ All rates are exclusive of VAT</li>
          <li>✓ Subject to change and availability</li>
          <li>✓ Confirmation email will be sent within 24 hours</li>
          <li>✓ Tour operator will contact you for final confirmation and payment details</li>
        </ul>
      </div>

      {/* Error Message */}
      {error && (
        <div className="card mb-6 bg-red-50 border-2 border-biahes-red">
          <p className="text-biahes-red font-semibold">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Processing...' : `Proceed to Booking (₱${totalPrice.toLocaleString()})`}
      </button>

      <p className="text-xs text-gray-600 text-center mt-4">
        By clicking "Proceed to Booking", you agree to our terms and conditions
      </p>
    </form>
  );
}
