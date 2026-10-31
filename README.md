# Biahes Travel & Tours Website

A modern, production-ready travel booking platform built with Next.js 14, React 19, and Tailwind CSS. Features tour showcase, booking flow, admin panel, and Supabase backend integration.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Supabase account (for backend services)
- Vercel account (for deployment, optional)

### Installation

1. **Clone the repository** (if applicable)
```bash
git clone <your-repo-url>
cd biahes-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   - Fill in your Supabase credentials:
     - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - Get these from your [Supabase project settings](https://app.supabase.com/project/_/settings/api)

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # User-facing routes
│   │   ├── page.tsx       # Homepage
│   │   ├── tours/         # Tours listing & detail pages
│   │   ├── booking/       # Booking flow
│   │   └── admin/         # Admin panel (tours, bookings, settings)
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── lib/
│   ├── constants.ts       # Brand constants & configuration
│   ├── supabase.ts        # Supabase client initialization
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Utility functions
└── public/                # Static assets (images, logos)
```

## Features

### User Features
- **Tour Discovery**: Browse and filter tours by destination, price, and date
- **Detailed Tour Pages**: Comprehensive tour information including itinerary, inclusions/exclusions
- **Booking System**: Multi-step booking form with tour selection and passenger details
- **Booking Confirmation**: Order confirmation with details and reference number
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Open Graph tags, structured data, canonical URLs, sitemap

### Admin Features
- **Tour Management**: Create, edit, and delete tour packages
- **Booking Management**: View and manage customer bookings
- **Settings Panel**: Configure business settings and preferences
- **Admin Authentication**: Secure login system

## Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Environment Variables

Required for development and production:

```env
# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Optional
NEXT_PUBLIC_API_URL=https://your-domain.com/api
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXX
NEXT_PUBLIC_ENABLE_ADMIN_PANEL=true
```

See `.env.example` for all available options.

## Deployment

### Deploy on Vercel (Recommended)

Vercel is the platform created by the Next.js team and offers the best experience.

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Set Environment Variables**
   - In Vercel project settings → "Environment Variables"
   - Add the following variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_API_URL` (optional)
     - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` (optional)
   - Click "Save"

4. **Deploy**
   - Click "Deploy" button
   - Wait for build to complete (~2-3 minutes)
   - Your site is live at the provided URL

5. **Set up Custom Domain** (optional)
   - In Vercel project → "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables for Vercel

```
Production:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
NEXT_PUBLIC_API_URL=https://biahes.com/api

Preview/Staging (optional):
NEXT_PUBLIC_API_URL=https://staging.biahes.com/api
```

### Other Deployment Options

#### Self-Hosted (Docker/VPS)
```bash
npm run build
npm start
```

#### Netlify
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `.next`
- Add environment variables in build settings

## Performance & SEO

### Lighthouse Scores Target
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### Optimizations Implemented
- Next.js Image optimization with automatic WebP conversion
- Static page generation for better performance
- CSS minification via Tailwind CSS
- Response headers with caching directives
- JSON-LD structured data for rich snippets
- Open Graph tags for social sharing
- Sitemap generation for search engines

### Testing Performance
```bash
# Build and analyze
npm run build

# Test locally
npm start
# Open DevTools → Lighthouse tab and run audit
```

## Security

### Best Practices Implemented
- Environment variables for sensitive data (Supabase keys)
- Type-safe API integration via TypeScript
- Form validation with Zod schema
- XSS protection via React's built-in sanitization
- CORS configured for API endpoints
- Admin authentication layer

### Secrets Management
- Never commit `.env.local` or `.env*.local` files
- Use `.env.example` as template for developers
- Rotate Supabase keys periodically
- Use different keys for development, staging, and production

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors**
```bash
npm run lint  # Check for linting issues
npm run build  # Re-run build
```

**Supabase connection fails**
- Verify `NEXT_PUBLIC_SUPABASE_URL` and key in `.env.local`
- Check Supabase project is active and not paused
- Ensure API is enabled in Supabase dashboard

**Images not loading in production**
- Verify image paths are correct (`/images/...`)
- Check Next.js Image component is used with width/height
- Ensure `public/` folder is deployed

**Admin panel not accessible**
- Check `NEXT_PUBLIC_ENABLE_ADMIN_PANEL=true` in env vars
- Verify admin authentication flow in Supabase
- Clear browser cache and try incognito mode

## Monitoring & Maintenance

### Recommended Tools
- [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring
- [Supabase Logs](https://app.supabase.com/project/_/logs) - Database logs
- [Google Search Console](https://search.google.com/search-console) - SEO tracking
- [Google Analytics](https://analytics.google.com) - User analytics

### Regular Maintenance
- Monitor Vercel build times and error logs
- Review Supabase database usage and quotas
- Update dependencies monthly
- Test booking flow in staging before production changes
- Review admin panel access logs

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Support

For issues or questions:
- Email: bacunawatravels@gmail.com
- Phone: 0956 382 3906
- Facebook: https://facebook.com/Biahes

## License

This project is property of Biahes Travel & Tours.
