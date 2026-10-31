import Link from 'next/link';
import Image from 'next/image';
import { BRAND, ROUTES } from '@/lib/constants';

export default function Home() {
  // Sample featured tours (will be replaced with database data)
  const featuredTours = [
    {
      id: '1',
      title: '4D3N Zhangjiajie + Huanglong Cave',
      destination: 'China',
      price: 20834,
      image: '/images/tours/china.jpg',
      dates: 'Nov 11-14, 2026',
    },
    {
      id: '2',
      title: '4D3N Bangkok Free & Easy',
      destination: 'Thailand',
      price: 25499,
      image: '/images/tours/thailand.jpg',
      dates: 'Dec 11-14, 2026',
    },
    {
      id: '3',
      title: '3D2N Tokyo Adventure',
      destination: 'Japan',
      price: 32999,
      image: '/images/tours/japan.jpg',
      dates: 'Jan 8-10, 2027',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-blue text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {BRAND.tagline}
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                Discover unforgettable travel experiences with {BRAND.name}. We curate the best tour packages across Asia, bringing you closer to adventure, culture, and memories that last a lifetime.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href={ROUTES.tours} className="btn-primary">
                  Explore Tours
                </Link>
                <a href="#featured" className="btn-outline">
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Logo */}
            <div className="flex justify-center">
              <div className="logo-card w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/images/logos/biahes-logo.png"
                  alt="Biahes Logo"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="featured" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-biahes-navy mb-4">
              Featured Tours
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked destinations for your next adventure
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="card hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-biahes-bright-blue to-biahes-royal-blue rounded-lg mb-4 flex items-center justify-center text-white text-4xl">
                  🌍
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-biahes-navy mb-2">
                  {tour.title}
                </h3>
                <p className="text-biahes-orange font-semibold mb-2">
                  {tour.destination}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  📅 {tour.dates}
                </p>

                {/* Price */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="text-2xl font-bold text-biahes-red">
                      ₱{tour.price.toLocaleString()}
                    </p>
                  </div>
                  <Link href={ROUTES.tours} className="btn-primary text-sm">
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href={ROUTES.tours} className="btn-primary">
              Browse All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Biahes Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-biahes-navy text-center mb-12">
            Why Choose Biahes?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✈️',
                title: 'Curated Packages',
                description: 'Handpicked tour packages with the best value and unforgettable experiences.',
              },
              {
                icon: '🤝',
                title: 'Expert Guides',
                description: 'Local, English-speaking guides who share authentic stories and insider knowledge.',
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Competitive rates without compromising on quality and experience.',
              },
              {
                icon: '🛡️',
                title: 'Safe & Secure',
                description: 'Travel insurance included and trusted partnerships for your peace of mind.',
              },
              {
                icon: '📱',
                title: 'Easy Booking',
                description: 'Simple online booking process with instant confirmation and support.',
              },
              {
                icon: '⭐',
                title: 'Customer Focused',
                description: '24/7 support and personalized service for every traveler.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-biahes-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="gradient-red-orange text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Start exploring our amazing tour packages today!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href={ROUTES.tours} className="btn bg-white text-biahes-red hover:bg-gray-100 font-bold">
              Browse Tours
            </Link>
            <a href={`tel:${BRAND.phone}`} className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-biahes-red font-bold">
              Call Us: {BRAND.phone}
            </a>
          </div>

          <p className="text-sm text-gray-100 mt-8">
            Email: <a href={`mailto:${BRAND.email}`} className="underline hover:text-biahes-gold">
              {BRAND.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
