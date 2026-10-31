# Vercel Deployment Guide

Complete step-by-step instructions for deploying Biahes Travel & Tours to Vercel.

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier available)
- Supabase project set up with API keys
- Domain name (optional, Vercel provides subdomain)

## Step 1: Prepare Your Repository

### 1.1 Ensure Code is Ready
```bash
# Run linter to check for issues
npm run lint

# Build locally to verify everything works
npm run build

# Test the build
npm start
```

### 1.2 Commit and Push to GitHub
```bash
git add .
git commit -m "Phase 6: Production-ready with SEO and deployment config"
git push origin main
```

## Step 2: Connect to Vercel

### 2.1 Create Vercel Project
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Search for your GitHub repository and click **"Import"**

### 2.2 Configure Project Settings
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

Vercel will auto-configure these correctly for Next.js.

## Step 3: Set Environment Variables

### 3.1 In Vercel Dashboard
1. Go to your project settings
2. Navigate to **"Settings"** → **"Environment Variables"**
3. Add the following variables:

**Production Environment:**
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key_here
NEXT_PUBLIC_API_URL=https://biahes.com/api
NEXT_PUBLIC_ENABLE_ADMIN_PANEL=true
```

**Optional - For Analytics:**
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXX
```

### 3.2 Create Separate Keys (Recommended)
- Create different Supabase API keys for development, staging, and production
- Use production keys only in Vercel
- Document all keys securely

## Step 4: Deploy

### 4.1 Trigger Initial Deployment
1. After setting environment variables, click **"Deploy"**
2. Wait for build to complete (typically 2-3 minutes)
3. Check build logs for any errors

### 4.2 Monitor Deployment
- Watch the deployment progress in Vercel dashboard
- Check **"Functions"** tab for serverless function logs
- Review **"Network"** tab for any issues

### 4.3 Access Your Site
Once deployment succeeds:
- Visit the provided Vercel URL (e.g., `biahes.vercel.app`)
- Test core functionality:
  - Homepage loads correctly
  - Tours list and filters work
  - Tour detail pages render with data
  - Booking form submits
  - Admin panel is accessible

## Step 5: Configure Custom Domain (Optional)

### 5.1 Add Domain in Vercel
1. Go to **"Settings"** → **"Domains"**
2. Enter your custom domain (e.g., `biahes.com`)
3. Click **"Add"**

### 5.2 Update DNS Records
Vercel will show DNS configuration. Update these records at your domain registrar:

**Option A: Nameservers (Recommended)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: CNAME Records**
```
CNAME: biahes.com → cname.vercel-dns.com
```

### 5.3 Verify Domain
- Wait for DNS propagation (can take up to 48 hours)
- Vercel shows verification status in dashboard
- Test with `nslookup` or online DNS checker

## Step 6: Post-Deployment Configuration

### 6.1 Enable Edge Caching
In Vercel project settings:
1. Go to **"Settings"** → **"Functions"** → **"Node.js Runtime"**
2. Set appropriate cache headers for static assets

### 6.2 Monitor Performance
1. Enable **"Web Analytics"** in Vercel dashboard
2. Set up **"Performance Insights"** for monitoring
3. Review **"Deployment Status"** regularly

### 6.3 Configure Auto-Deployments
By default, Vercel deploys on every push to main branch:
- Production: merges to `main` trigger deployment
- Preview: pull requests trigger preview deployments

To customize:
1. Go to **"Settings"** → **"Git"**
2. Configure branch deployment rules

## Step 7: Verification Checklist

### Functional Tests
- [ ] Homepage loads without errors
- [ ] Tour listing page displays all tours
- [ ] Filters work (destination, price, date)
- [ ] Tour detail pages load correctly
- [ ] Images load from CDN
- [ ] Booking form submits successfully
- [ ] Booking confirmation page displays
- [ ] Admin login works
- [ ] Admin tour management functional
- [ ] Admin bookings view shows data

### Performance Tests
- [ ] Lighthouse score > 90 overall
- [ ] Page load time < 3 seconds
- [ ] Images optimized (WebP format)
- [ ] CSS minified
- [ ] JavaScript optimized

### SEO Tests
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Open Graph tags present in HTML
- [ ] JSON-LD structured data valid
- [ ] Canonical URLs correct
- [ ] Meta descriptions present

### Security Tests
- [ ] Environment variables not exposed
- [ ] HTTPS enforced (automatic with Vercel)
- [ ] Security headers configured
- [ ] No console errors or warnings
- [ ] No sensitive data in logs

## Troubleshooting

### Build Fails
**Problem**: Deployment build fails with TypeScript errors
```bash
# Solution: Check locally
npm run lint
npm run build

# Push fixes
git commit -m "Fix build errors"
git push origin main
```

### Environment Variables Not Working
**Problem**: Application errors about missing env vars
1. Verify variables are set in Vercel dashboard
2. Check variable names exactly match (case-sensitive)
3. Redeploy after changing variables
4. Check `.env.local` is in `.gitignore`

### Slow Deployment
**Problem**: Deployment takes > 5 minutes
1. Check for large dependencies
2. Review build logs for optimization opportunities
3. Consider using cache for dependencies

### 503 Service Unavailable
**Problem**: Site returns 503 errors after deployment
1. Check Vercel deployment status
2. Review function logs for errors
3. Verify database connection (Supabase)
4. Check environment variables in production

## Monitoring and Maintenance

### Daily
- Check deployment status
- Monitor error logs
- Review analytics

### Weekly
- Test booking flow
- Verify Supabase sync
- Check performance metrics

### Monthly
- Review and update dependencies
- Analyze user analytics
- Audit security

## Rollback Procedure

If deployment has critical issues:

1. Go to **"Deployments"** in Vercel dashboard
2. Find the last working deployment
3. Click the deployment
4. Click **"Rollback to this Deployment"**
5. Verify site is restored

This reverts to the previous version instantly while you fix the issue.

## Advanced Configuration

### Environment Variables by Branch
Create different environments:
```
Production (main):
  NEXT_PUBLIC_SUPABASE_URL=https://prod.supabase.co
  NEXT_PUBLIC_API_URL=https://biahes.com/api

Preview (pull requests):
  NEXT_PUBLIC_SUPABASE_URL=https://staging.supabase.co
  NEXT_PUBLIC_API_URL=https://staging.biahes.com/api
```

### Performance Optimization
In `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
};
```

### Monitoring with Integrations
Connect third-party monitoring:
- **Sentry** for error tracking
- **New Relic** for performance monitoring
- **PagerDuty** for alerts

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Contact Vercel support through dashboard

Contact Biahes:
- Email: bacunawatravels@gmail.com
- Phone: 0956 382 3906
