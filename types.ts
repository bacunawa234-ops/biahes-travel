export interface Tour {
  id: string;
  title: string;
  destination: string;
  slug: string;
  description: string;
  price: number;
  dates_from: string;
  dates_to: string;
  duration_days: number;
  hotel_name: string;
  airline: string;
  airline_logo_url: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  hero_image_url: string;
  created_at: string;
  updated_at: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  meals: string;
  highlights: string[];
  description: string;
}

export interface Booking {
  id: string;
  tour_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  pax_count: number;
  total_price: number;
  booking_date: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
  tour_title?: string;
  created_at: string;
  updated_at: string;
}

export interface BookingInput {
  tour_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  pax_count: number;
  booking_date: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  created_at: string;
}
