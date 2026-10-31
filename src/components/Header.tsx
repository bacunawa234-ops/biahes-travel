import Link from 'next/link';
import Image from 'next/image';
import { BRAND, ROUTES } from '@/lib/constants';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={ROUTES.home} className="flex items-center gap-3">
          <div className="logo-card w-12 h-12">
            <Image
              src="/images/logos/biahes-logo.png"
              alt="Biahes Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-biahes-navy m-0">{BRAND.name}</h1>
            <p className="text-xs text-biahes-orange m-0">{BRAND.tagline}</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={ROUTES.tours} className="text-biahes-navy hover:text-biahes-orange font-semibold transition-colors">
            Tours
          </Link>
          <Link href="/#services" className="text-biahes-navy hover:text-biahes-orange font-semibold transition-colors">
            Services
          </Link>
          <Link href="/#contact" className="text-biahes-navy hover:text-biahes-orange font-semibold transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link href={ROUTES.tours} className="btn-primary hidden md:flex">
          Browse Tours
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-biahes-navy text-2xl">☰</button>
      </nav>
    </header>
  );
}
