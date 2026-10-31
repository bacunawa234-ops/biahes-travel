import type { Metadata } from 'next';
import { Bricolage_Grotesque, Figtree } from 'next/font/google';
import HomePage from '@/components/home/HomePage';
import './home.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const body = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Biahes Travel & Tours — Explore More. Worry Less.',
  description:
    'Biahes Travel & Tours: flights, hotels, tour packages, ferry and cruise bookings for Filipino travelers. Explore More. Worry Less.',
};

export default function Home() {
  return <HomePage fontClassName={`${display.variable} ${body.variable}`} />;
}
