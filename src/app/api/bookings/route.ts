import { NextRequest, NextResponse } from 'next/server';

// Sample bookings data - in production, this would query Supabase
const SAMPLE_BOOKINGS = [
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
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Fetch single booking by ID
    if (id) {
      const booking = SAMPLE_BOOKINGS.find((b) => b.id === id);
      if (!booking) {
        return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: booking });
    }

    // Filter by status
    let filtered = SAMPLE_BOOKINGS;
    if (status) {
      filtered = SAMPLE_BOOKINGS.filter((b) => b.status === status);
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
    console.error('GET /api/bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.tour_id || !body.customer_name || !body.customer_email || !body.pax_count) {
      return NextResponse.json(
        { error: 'Missing required fields: tour_id, customer_name, customer_email, pax_count' },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!body.customer_email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In production, create in Supabase and send confirmation email
    // const { data, error } = await supabase
    //   .from('bookings')
    //   .insert([{ ...body, status: 'pending', created_at: new Date() }])

    const bookingId = String(Date.now());
    const newBooking = {
      id: bookingId,
      ...body,
      status: 'pending',
      booking_date: new Date().toISOString().split('T')[0],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        data: newBooking,
        message: 'Booking created successfully. Confirmation email sent to customer.',
        confirmationNumber: `BIAHES-${bookingId}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
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
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // In production, update in Supabase
    // const { data, error } = await supabase
    //   .from('bookings')
    //   .update({ ...body, updated_at: new Date() })
    //   .eq('id', id)

    const booking = SAMPLE_BOOKINGS.find((b) => b.id === id);
    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    // Validate status if provided
    if (body.status && !['pending', 'confirmed', 'cancelled'].includes(body.status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be pending, confirmed, or cancelled.' },
        { status: 400 }
      );
    }

    const updated = { ...booking, ...body, updated_at: new Date().toISOString() };

    return NextResponse.json({
      success: true,
      data: updated,
      message: 'Booking updated successfully',
    });
  } catch (error) {
    console.error('PUT /api/bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to update booking' },
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
        { error: 'Booking ID is required' },
        { status: 400 }
      );
    }

    // In production, delete from Supabase
    // const { error } = await supabase.from('bookings').delete().eq('id', id)

    const booking = SAMPLE_BOOKINGS.find((b) => b.id === id);
    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Booking deleted successfully',
    });
  } catch (error) {
    console.error('DELETE /api/bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to delete booking' },
      { status: 500 }
    );
  }
}
