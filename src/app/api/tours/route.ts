import { NextRequest, NextResponse } from 'next/server';

// Sample tours data - in production, this would query Supabase
const SAMPLE_TOURS = [
  {
    id: '1',
    title: '4D3N Zhangjiajie + Huanglong Cave',
    destination: 'China',
    slug: 'zhangjiajie-huanglong-cave',
    description: 'Experience the breathtaking Avatar world of Zhangjiajie National Forest Park and explore the stunning Huanglong Cave with a cruise experience.',
    price: 20834,
    dates_from: '2026-11-11',
    dates_to: '2026-11-14',
    duration_days: 4,
    hotel_name: 'Mehood Lestie Hotel',
    airline: 'Qingdao Airlines',
    airline_logo_url: '/images/airlines/qingdao.png',
    inclusions: ['Roundtrip airfare', '3 Nights Hotel', 'Breakfast daily', 'English Speaking Guide'],
    exclusions: ['China Group Visa', 'Tips', 'Personal expenses'],
    itinerary: [],
    hero_image_url: '/images/tours/china.jpg',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
  {
    id: '2',
    title: '4D3N Bangkok Free & Easy',
    destination: 'Thailand',
    slug: 'bangkok-free-easy',
    description: 'Discover the vibrant culture and cuisine of Bangkok with flexible itineraries and optional city tours.',
    price: 25499,
    dates_from: '2026-12-11',
    dates_to: '2026-12-14',
    duration_days: 4,
    hotel_name: 'Ten-Star Inn',
    airline: 'Cebu Pacific',
    airline_logo_url: '/images/airlines/cebu-pacific.png',
    inclusions: ['Roundtrip airfare', '3 Nights Hotel', 'Breakfast daily'],
    exclusions: ['Travel tax', 'Extra meals'],
    itinerary: [],
    hero_image_url: '/images/tours/thailand.jpg',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
  {
    id: '3',
    title: '5D4N Tokyo Adventure',
    destination: 'Japan',
    slug: 'tokyo-adventure',
    description: 'Experience the perfect blend of traditional and modern Tokyo with guided tours and free time exploration.',
    price: 32999,
    dates_from: '2027-01-08',
    dates_to: '2027-01-12',
    duration_days: 5,
    hotel_name: 'Hotel Tokyo',
    airline: 'Philippine Airlines',
    airline_logo_url: '/images/airlines/philippine-airlines.png',
    inclusions: ['Roundtrip airfare', '4 Nights Hotel', 'Breakfast daily'],
    exclusions: ['Japan Visa', 'Personal expenses'],
    itinerary: [],
    hero_image_url: '/images/tours/japan.jpg',
    created_at: '2026-10-30T00:00:00Z',
    updated_at: '2026-10-30T00:00:00Z',
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const destination = searchParams.get('destination');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Fetch single tour by ID
    if (id) {
      const tour = SAMPLE_TOURS.find((t) => t.id === id);
      if (!tour) {
        return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: tour });
    }

    // Filter by destination
    let filtered = SAMPLE_TOURS;
    if (destination) {
      filtered = SAMPLE_TOURS.filter((t) =>
        t.destination.toLowerCase().includes(destination.toLowerCase())
      );
    }

    // Pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filtered.slice(start, end);

    return NextResponse.json({
      success: true,
      data: paginated,
      pagination: {
        total: filtered.length,
        page,
        limit,
        pages: Math.ceil(filtered.length / limit),
      },
    });
  } catch (error) {
    console.error('GET /api/tours error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tours' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.destination || !body.price) {
      return NextResponse.json(
        { error: 'Missing required fields: title, destination, price' },
        { status: 400 }
      );
    }

    // In production, create in Supabase
    // await supabase.from('tours').insert([{ ...body, created_at: new Date() }])

    const newTour = {
      id: String(SAMPLE_TOURS.length + 1),
      ...body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    return NextResponse.json(
      { success: true, data: newTour, message: 'Tour created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/tours error:', error);
    return NextResponse.json(
      { error: 'Failed to create tour' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Tour ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // In production, update in Supabase
    // const { data, error } = await supabase
    //   .from('tours')
    //   .update({ ...body, updated_at: new Date() })
    //   .eq('id', id)

    const tour = SAMPLE_TOURS.find((t) => t.id === id);
    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    const updated = { ...tour, ...body, updated_at: new Date().toISOString() };

    return NextResponse.json({
      success: true,
      data: updated,
      message: 'Tour updated successfully',
    });
  } catch (error) {
    console.error('PUT /api/tours error:', error);
    return NextResponse.json(
      { error: 'Failed to update tour' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Tour ID is required' },
        { status: 400 }
      );
    }

    // In production, delete from Supabase
    // const { error } = await supabase.from('tours').delete().eq('id', id)

    const tour = SAMPLE_TOURS.find((t) => t.id === id);
    if (!tour) {
      return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Tour deleted successfully',
    });
  } catch (error) {
    console.error('DELETE /api/tours error:', error);
    return NextResponse.json(
      { error: 'Failed to delete tour' },
      { status: 500 }
    );
  }
}
