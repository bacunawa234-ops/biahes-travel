import Link from 'next/link';
import Image from 'next/image';
import { BRAND, ROUTES } from '@/lib/constants';
import BookingForm from '@/components/BookingForm';
import { SAMPLE_TOURS } from '@/lib/tours-data';

export const metadata = {
  title: 'Book Your Tour - ' + BRAND.name,
  description: 'Secure your spot on an amazing tour with ' + BRAND.name,
};

interface BookingPageProps {
  searchParams: Promise<{
    tour_id?: string;
  }>;
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  // Get the tour to book (default to first tour if not specified)
  const { tour_id } = await searchParams;
  const selectedTour = SAMPLE_TOURS.find(t => t.id === tour_id) || SAMPLE_TOURS[0];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy-blue text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Complete Your Booking</h1>
          <p className="text-gray-200">
            Fill in your details to reserve your spot on this amazing tour
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <BookingForm tour={selectedTour} />
            </div>

            {/* Right Column - Tour Summary */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24 h-fit">
                <h3 className="text-lg font-bold text-biahes-navy mb-4">Selected Tour</h3>

                {/* Tour Photo */}
                <div className="h-40 rounded-lg mb-4 overflow-hidden" style={{ position: 'relative', height: 160, borderRadius: 8, overflow: 'hidden' }}>
                  <Image src={selectedTour.hero_image_url} alt={selectedTour.title} fill sizes="400px" style={{ objectFit: 'cover' }} />
                </div>

                {/* Tour Details */}
                <h4 className="font-bold text-biahes-navy mb-2">
                  {selectedTour.title}
                </h4>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600">
                    📍 <strong>{selectedTour.destination}</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    📅 {new Date(selectedTour.dates_from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(selectedTour.dates_to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-sm text-gray-600">
                    🏨 {selectedTour.hotel_name}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <p className="text-xs text-gray-600 mb-1">Price per person</p>
                  <p className="text-3xl font-bold text-biahes-red">
                    ₱{selectedTour.price.toLocaleString()}
                  </p>
                </div>

                {/* Change Tour Link */}
                <Link href={ROUTES.tours} className="block text-center mt-6 text-biahes-orange hover:text-biahes-red font-semibold">
                  Change Tour
                </Link>
              </div>

              {/* Help Section */}
              <div className="card mt-6">
                <h3 className="text-lg font-bold text-biahes-navy mb-4">Need Help?</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Our travel experts are ready to assist you!
                </p>
                <div className="space-y-2">
                  <a href={`tel:${BRAND.phone}`} className="block text-center btn-secondary text-sm py-2">
                    📞 Call Us
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="block text-center btn-secondary text-sm py-2">
                    📧 Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
