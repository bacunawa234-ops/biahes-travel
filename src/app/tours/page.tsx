import { Suspense } from 'react';
import { BRAND, ROUTES } from '@/lib/constants';
import TourCard from '@/components/TourCard';
import { SAMPLE_TOURS } from '@/lib/tours-data';

export const metadata = {
  title: 'Tours - ' + BRAND.name,
  description: 'Browse our amazing tour packages across Asia',
};

interface SearchParams {
  destination?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
}

export default async function ToursPage({ searchParams: searchParamsPromise }: { searchParams: Promise<SearchParams> }) {
  const searchParams = await searchParamsPromise;
  // Filter and sort tours
  let tours = [...SAMPLE_TOURS];

  if (searchParams.destination) {
    tours = tours.filter(t =>
      t.destination.toLowerCase().includes((searchParams.destination ?? '').toLowerCase())
    );
  }

  if (searchParams.minPrice) {
    const minPrice = parseInt(searchParams.minPrice ?? '0');
    tours = tours.filter(t => t.price >= minPrice);
  }

  if (searchParams.maxPrice) {
    const maxPrice = parseInt(searchParams.maxPrice ?? '999999');
    tours = tours.filter(t => t.price <= maxPrice);
  }

  if (searchParams.sortBy === 'price-low') {
    tours.sort((a, b) => a.price - b.price);
  } else if (searchParams.sortBy === 'price-high') {
    tours.sort((a, b) => b.price - a.price);
  } else if (searchParams.sortBy === 'date') {
    tours.sort((a, b) => new Date(a.dates_from).getTime() - new Date(b.dates_from).getTime());
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-blue text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Our Tours</h1>
          <p className="text-gray-200">
            Discover amazing destinations across Asia with {BRAND.name}
          </p>
        </div>
      </section>

      {/* Filters & Tours Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h3 className="text-lg font-bold text-biahes-navy mb-4">Filters</h3>

                {/* Destination Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-biahes-navy mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Search destination..."
                    defaultValue={searchParams.destination || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none"
                  />
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-biahes-navy mb-2">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      defaultValue={searchParams.minPrice || ''}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      defaultValue={searchParams.maxPrice || ''}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none"
                    />
                  </div>
                </div>

                {/* Sort */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-biahes-navy mb-2">
                    Sort By
                  </label>
                  <select defaultValue={searchParams.sortBy || ''} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-biahes-orange focus:outline-none">
                    <option value="">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="date">Departure Date</option>
                  </select>
                </div>

                <button className="btn-primary w-full">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="lg:col-span-3">
              {tours.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">No tours found matching your criteria.</p>
                  <a href={ROUTES.tours} className="btn-primary">
                    Clear Filters
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-gray-600">
                      Showing <span className="font-bold">{tours.length}</span> tour{tours.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tours.map(tour => (
                      <TourCard key={tour.id} tour={tour} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-red-orange text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Contact us and we'll help you find or customize your perfect tour!
          </p>
          <a href={`tel:${BRAND.phone}`} className="btn bg-white text-biahes-red hover:bg-gray-100 font-bold">
            Call Us: {BRAND.phone}
          </a>
        </div>
      </section>
    </>
  );
}
