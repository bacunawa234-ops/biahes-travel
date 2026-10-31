# GitHub & Vercel Deployment Guide for Biahes Travel & Tours

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface (Recommended)

1. Go to **https://github.com/new**
2. Fill in the repository details:
   - **Repository name**: `biahes-travel`
   - **Description**: Biahes Travel & Tours - Modern travel booking platform with Next.js 14
   - **Visibility**: Public (required for Vercel free tier)
   - **Initialize repository**: Do NOT check "Add a README" (we already have one)
   - **Add .gitignore**: Do NOT select (we already have one)
   - **Add a license**: Optional (choose MIT or none)

3. Click **Create repository**

4. You'll see the quick setup page. Copy the HTTPS or SSH URL:
   - **HTTPS**: `https://github.com/YOUR_USERNAME/biahes-travel.git`
   - **SSH**: `git@github.com:YOUR_USERNAME/biahes-travel.git`

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create biahes-travel --public --source=. --remote=origin --push
```

---

## Step 2: Add Remote and Push to GitHub

Once you have the repository URL, run these commands in your project directory:

```bash
# Navigate to project
cd C:\Users\bacun\work\biahes-website

# Add GitHub as remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/biahes-travel.git

# Rename branch to main (GitHub default)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 3: Verify Repository on GitHub

After pushing, verify your repository:
1. Go to `https://github.com/YOUR_USERNAME/biahes-travel`
2. Confirm you see:
   - ✅ All project files (src/, public/, etc.)
   - ✅ package.json
   - ✅ next.config.ts
   - ✅ README.md
   - ✅ DEPLOYMENT.md
   - ✅ All documentation files

---

## Step 4: Deploy to Vercel

### 4.1 Connect GitHub to Vercel

1. Go to **https://vercel.com/new**
2. Click **"Continue with GitHub"** and authorize Vercel
3. Search for **"biahes-travel"** repository
4. Click **"Import"**

### 4.2 Configure Project Settings

Vercel will auto-detect Next.js. Verify:
- **Framework**: Next.js ✓
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Click **"Continue"**

### 4.3 Add Environment Variables

Before deploying, add your Supabase credentials:

1. **Environment Variables** section, add:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

2. For Production environment (select "Production" from dropdown):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Optional variables:
   - `NEXT_PUBLIC_API_URL=https://biahes.com/api`
   - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXX`

### 4.4 Deploy

Click **"Deploy"** and wait 2-3 minutes for build to complete.

You'll see:
- ✅ Build successful
- ✅ Deployment complete
- ✅ Live URL: `https://biahes-travel.vercel.app`

---

## Step 5: Verify Deployment

After Vercel deployment completes:

### 5.1 Test Website
- Visit: `https://YOUR_DEPLOYMENT.vercel.app`
- Test homepage loads
- Browse tours
- Check admin panel at `/admin`
- Verify mobile responsiveness

### 5.2 Run Lighthouse Audit
```
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Verify scores >90
```

### 5.3 Check SEO
- Visit `/sitemap.xml` - should return XML
- Visit `/robots.txt` - should return text
- Inspect source for Open Graph tags
- Validate JSON-LD with https://schema.org/validate

---

## Quick Reference: Your Repository Details

After completing these steps, you'll have:

| Item | Value |
|------|-------|
| **GitHub Repository** | `https://github.com/YOUR_USERNAME/biahes-travel` |
| **Repository Name** | `biahes-travel` |
| **Vercel Project** | Auto-created from GitHub |
| **Live URL** | `https://biahes-travel.vercel.app` |
| **Deployment Status** | Check Vercel dashboard |

---

## Troubleshooting

### Git Push Fails
**Error**: `fatal: The remote end hung up unexpectedly`
```bash
# Increase buffer size
git config http.postBuffer 524288000

# Try push again
git push -u origin main
```

### Authentication Issues
**Error**: `fatal: Authentication failed`

For HTTPS:
- Use Personal Access Token instead of password
- https://github.com/settings/tokens/new
- Scopes needed: `repo`, `workflow`

For SSH:
- Setup SSH keys: https://github.com/settings/keys
- Test: `ssh -T git@github.com`

### Vercel Build Fails
Check these:
1. Environment variables are set correctly
2. No TypeScript errors: `npm run build`
3. All dependencies installed: `npm install`
4. Check Vercel logs for detailed error

---

## Project Verification Checklist

Before deployment, verify locally:

```bash
# Check build
npm run build

# Check linting
npm run lint

# Verify TypeScript
npx tsc --noEmit

# Check git status
git status

# View commits
git log
```

All should pass without errors.

---

## Next Steps After Deployment

1. ✅ Test core user journey (browse tours → book)
2. ✅ Verify admin panel works
3. ✅ Run Lighthouse audit on live site
4. ✅ Set up custom domain (optional)
5. ✅ Enable Vercel analytics
6. ✅ Configure monitoring

See **PRODUCTION_CHECKLIST.md** for complete verification.

---

## Support

- GitHub Issues: `https://github.com/YOUR_USERNAME/biahes-travel/issues`
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: bacunawatravels@gmail.com

---

*Last Updated: October 31, 2026*
