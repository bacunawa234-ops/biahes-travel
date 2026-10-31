'use client';

import { useState } from 'react';
import { Booking } from '@/lib/types';

// Sample bookings data
const SAMPLE_BOOKINGS: Booking[] = [
  {
    id: '1',
    tour_id: '1',
    customer_name: 'Juan dela Cruz',
    customer_email: 'juan@example.com',
    customer_phone: '09123456789',
    pax_count: 2,
    total_price: 41668,
    booking_date: '2026-10-28',
    status: 'pending',
    created_at: '2026-10-28T10:30:00Z',
    updated_at: '2026-10-28T10:30:00Z',
    tour_title: '4D3N Zhangjiajie + Huanglong Cave',
  },
  {
    id: '2',
    tour_id: '2',
    customer_name: 'Maria Santos',
    customer_email: 'maria@example.com',
    customer_phone: '09234567890',
    pax_count: 1,
    total_price: 25499,
    booking_date: '2026-10-27',
    status: 'confirmed',
    created_at: '2026-10-27T14:15:00Z',
    updated_at: '2026-10-27T15:45:00Z',
    tour_title: '4D3N Bangkok Free & Easy',
  },
  {
    id: '3',
    tour_id: '3',
    customer_name: 'Jose Rizal',
    customer_email: 'jose@example.com',
    customer_phone: '09345678901',
    pax_count: 4,
    total_price: 131996,
    booking_date: '2026-10-25',
    status: 'confirmed',
    created_at: '2026-10-25T09:00:00Z',
    updated_at: '2026-10-26T11:20:00Z',
    tour_title: '5D4N Tokyo Adventure',
  },
  {
    id: '4',
    tour_id: '1',
    customer_name: 'Ana Reyes',
    customer_email: 'ana@example.com',
    customer_phone: '09456789012',
    pax_count: 3,
    total_price: 62502,
    booking_date: '2026-10-23',
    status: 'cancelled',
    created_at: '2026-10-23T16:45:00Z',
    updated_at: '2026-10-24T08:30:00Z',
    tour_title: '4D3N Zhangjiajie + Huanglong Cave',
  },
];

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(SAMPLE_BOOKINGS);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const filteredBookings =
    filterStatus === 'all'
      ? bookings
      : bookings.filter((b) => b.status === filterStatus);

  const handleStatusChange = (bookingId: string, newStatus: string) => {
    setBookings(
      bookings.map((b) =>
        b.id === bookingId
          ? { ...b, status: newStatus as 'pending' | 'confirmed' | 'cancelled', updated_at: new Date().toISOString() }
          : b
      )
    );
  };

  const statusStats = {
    pending: bookings.filter((b) => b.status === 'pending').length,
    confirmed: bookings.filter((b) => b.status === 'confirmed').length,
    cancelled: bookings.filter((b) => b.status === 'cancelled').length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-biahes-navy mb-2">Bookings</h1>
        <p className="text-gray-600">Manage customer tour bookings and confirmations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-600 mb-2">All Bookings</p>
          <p className="text-3xl font-bold text-biahes-navy">{bookings.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-2">Pending</p>
          <p className="text-3xl font-bold text-biahes-orange">{statusStats.pending}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-2">Confirmed</p>
          <p className="text-3xl font-bold text-biahes-bright-blue">{statusStats.confirmed}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 mb-2">Cancelled</p>
          <p className="text-3xl font-bold text-biahes-red">{statusStats.cancelled}</p>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-biahes-navy mb-2">Filter by Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
            >
              <option value="all">All Bookings</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold text-biahes-navy mb-2">Search by Name or Email</label>
            <input
              type="text"
              placeholder="Enter customer name or email..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="card overflow-hidden">
        <h2 className="text-xl font-bold text-biahes-navy mb-6">Bookings List ({filteredBookings.length})</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-bold text-biahes-navy">Customer</th>
                <th className="text-left py-4 px-6 font-bold text-biahes-navy">Tour</th>
                <th className="text-left py-4 px-6 font-bold text-biahes-navy">Pax</th>
                <th className="text-right py-4 px-6 font-bold text-biahes-navy">Total Price</th>
                <th className="text-left py-4 px-6 font-bold text-biahes-navy">Booking Date</th>
                <th className="text-center py-4 px-6 font-bold text-biahes-navy">Status</th>
                <th className="text-center py-4 px-6 font-bold text-biahes-navy">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-semibold text-biahes-navy">{booking.customer_name}</p>
                      <p className="text-xs text-gray-600">{booking.customer_email}</p>
                      <p className="text-xs text-gray-600">{booking.customer_phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-700">{booking.tour_title}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block bg-gray-100 text-biahes-navy px-3 py-1 rounded-full font-semibold text-sm">
                      {booking.pax_count}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-biahes-red">
                    ₱{booking.total_price.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {new Date(booking.booking_date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${
                        booking.status === 'pending'
                          ? 'bg-yellow-50 border-yellow-300 text-yellow-800'
                          : booking.status === 'confirmed'
                            ? 'bg-green-50 border-green-300 text-green-800'
                            : 'bg-red-50 border-red-300 text-red-800'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="py-4 px-6 text-center space-x-2">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="inline-block bg-biahes-bright-blue text-white px-3 py-1 rounded hover:bg-biahes-royal-blue transition-colors text-sm font-semibold"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No bookings found</p>
          </div>
        )}
      </div>

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="card max-w-lg w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-biahes-navy">Booking Details</h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-600 hover:text-biahes-navy font-bold text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {/* Customer Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Customer Information</p>
                <p className="font-semibold text-biahes-navy">{selectedBooking.customer_name}</p>
                <p className="text-sm text-gray-600">{selectedBooking.customer_email}</p>
                <p className="text-sm text-gray-600">{selectedBooking.customer_phone}</p>
              </div>

              {/* Booking Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Booking Information</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking ID:</span>
                    <span className="font-semibold">{selectedBooking.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tour:</span>
                    <span className="font-semibold">{selectedBooking.tour_title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pax Count:</span>
                    <span className="font-semibold">{selectedBooking.pax_count} pax</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="font-bold text-biahes-red">₱{selectedBooking.total_price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking Date:</span>
                    <span className="font-semibold">
                      {new Date(selectedBooking.booking_date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 uppercase font-semibold mb-3">Update Status</p>
                <div className="flex gap-2">
                  {['pending', 'confirmed', 'cancelled'].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        handleStatusChange(selectedBooking.id, status);
                        setSelectedBooking({ ...selectedBooking, status: status as 'pending' | 'confirmed' | 'cancelled' });
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                        selectedBooking.status === status
                          ? status === 'pending'
                            ? 'bg-yellow-300 text-yellow-900'
                            : status === 'confirmed'
                              ? 'bg-green-300 text-green-900'
                              : 'bg-red-300 text-red-900'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedBooking(null)}
                className="btn-primary w-full py-3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
