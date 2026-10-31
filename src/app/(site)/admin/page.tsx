'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export default function AdminDashboard() {
  // Sample stats - will be replaced with real data from Supabase
  const stats = [
    {
      label: 'Total Tours',
      value: '3',
      icon: '✈️',
      color: 'bg-biahes-bright-blue',
      href: `${ROUTES.admin}/tours`,
    },
    {
      label: 'Total Bookings',
      value: '12',
      icon: '📋',
      color: 'bg-biahes-orange',
      href: `${ROUTES.admin}/bookings`,
    },
    {
      label: 'Revenue',
      value: '₱250K+',
      icon: '💰',
      color: 'bg-biahes-red',
      href: `${ROUTES.admin}/bookings`,
    },
    {
      label: 'This Month',
      value: '₱85K',
      icon: '📈',
      color: 'bg-biahes-navy',
      href: `${ROUTES.admin}/bookings`,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      name: 'Juan dela Cruz',
      tour: '4D3N Zhangjiajie + Huanglong Cave',
      date: '2026-10-28',
      pax: 2,
      price: '₱41,668',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Maria Santos',
      tour: '4D3N Bangkok Free & Easy',
      date: '2026-10-27',
      pax: 1,
      price: '₱25,499',
      status: 'confirmed',
    },
    {
      id: 3,
      name: 'Jose Rizal',
      tour: '5D4N Tokyo Adventure',
      date: '2026-10-25',
      pax: 4,
      price: '₱131,996',
      status: 'confirmed',
    },
  ];

  const upcomingTours = [
    {
      id: 1,
      title: '4D3N Zhangjiajie + Huanglong Cave',
      destination: 'China',
      date: '2026-11-11',
      bookings: 5,
      status: 'active',
    },
    {
      id: 2,
      title: '4D3N Bangkok Free & Easy',
      destination: 'Thailand',
      date: '2026-12-11',
      bookings: 3,
      status: 'active',
    },
    {
      id: 3,
      title: '5D4N Tokyo Adventure',
      destination: 'Japan',
      date: '2027-01-08',
      bookings: 4,
      status: 'active',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-biahes-navy mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's a quick overview of your tours and bookings.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Link
            key={idx}
            href={stat.href}
            className="card hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} text-white p-3 rounded-lg text-2xl`}>
                {stat.icon}
              </div>
              <span className="text-xs font-semibold text-gray-500 uppercase">
                {stat.label}
              </span>
            </div>
            <p className="text-3xl font-bold text-biahes-navy group-hover:text-biahes-orange transition-colors">
              {stat.value}
            </p>
          </Link>
        ))}
      </div>

      {/* Recent Bookings & Upcoming Tours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-biahes-navy">Recent Bookings</h2>
            <Link href={`${ROUTES.admin}/bookings`} className="text-biahes-orange hover:text-biahes-red font-semibold text-sm">
              View All →
            </Link>
          </div>

          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-biahes-navy">{booking.name}</p>
                  <p className="text-sm text-gray-600">{booking.tour}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {booking.pax} {booking.pax === 1 ? 'pax' : 'pax'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-biahes-red">{booking.price}</p>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    booking.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tours */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-biahes-navy">Upcoming Tours</h2>
            <Link href={`${ROUTES.admin}/tours`} className="text-biahes-orange hover:text-biahes-red font-semibold text-sm">
              Manage →
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingTours.map((tour) => (
              <div key={tour.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-biahes-navy">{tour.title}</p>
                  <p className="text-sm text-gray-600">📍 {tour.destination}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    📅 {new Date(tour.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-biahes-orange">{tour.bookings}</p>
                  <p className="text-xs text-gray-600">Bookings</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {tour.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-xl font-bold text-biahes-navy mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href={`${ROUTES.admin}/tours`} className="btn-primary text-center py-3">
            ➕ Add New Tour
          </Link>
          <Link href={`${ROUTES.admin}/bookings`} className="btn-secondary text-center py-3">
            📋 View All Bookings
          </Link>
          <Link href={`${ROUTES.admin}/settings`} className="btn-outline text-center py-3">
            ⚙️ Settings
          </Link>
        </div>
      </div>

      {/* Help Section */}
      <div className="card bg-blue-50 border-2 border-biahes-bright-blue">
        <h3 className="text-lg font-bold text-biahes-navy mb-3">💡 Need Help?</h3>
        <p className="text-gray-700 mb-4">
          This is your admin dashboard where you can manage tours, view bookings, and configure settings.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• <strong>Manage Tours:</strong> Add, edit, or delete tour packages</li>
          <li>• <strong>View Bookings:</strong> See all customer bookings and confirm payments</li>
          <li>• <strong>Settings:</strong> Update contact information and other settings</li>
        </ul>
      </div>
    </div>
  );
}
