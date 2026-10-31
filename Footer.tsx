'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BRAND, ROUTES } from '@/lib/constants';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="gradient-navy-blue text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="logo-card w-16 h-16 mb-4">
              <Image
                src="/images/logos/biahes-logo-white-bg.png"
                alt="Biahes Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{BRAND.name}</h3>
            <p className="text-sm text-gray-200">{BRAND.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.home} className="hover:text-biahes-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={ROUTES.tours} className="hover:text-biahes-gold transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href={ROUTES.admin} className="hover:text-biahes-gold transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${BRAND.phone}`} className="hover:text-biahes-gold transition-colors">
                  📞 {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-biahes-gold transition-colors">
                  📧 {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-biahes-gold transition-colors">
                  📱 Biahes on Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 9AM - 6PM</li>
              <li>Saturday: 10AM - 4PM</li>
              <li>Sunday: Closed</li>
              <li className="pt-2 text-biahes-gold font-semibold">All times are PH (UTC+8)</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-200">
          <p>&copy; {currentYear} {BRAND.name}. All rights reserved.</p>
          <p>Made with ❤️ for your travel dreams</p>
        </div>
      </div>
    </footer>
  );
}
