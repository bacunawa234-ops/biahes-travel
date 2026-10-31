# Quick Push Commands - Copy & Paste Ready

## Replace YOUR_USERNAME with your actual GitHub username, then copy each section

### Step 1: Create Repository on GitHub
Visit: https://github.com/new

Repository name: `biahes-travel`
Visibility: Public
DO NOT initialize with README or .gitignore

---

### Step 2: After Creating Repository, Run These Commands

```bash
cd C:\Users\bacun\work\biahes-website

# Set your GitHub username
set GITHUB_USERNAME=YOUR_USERNAME

# Add remote origin
git remote add origin https://github.com/%GITHUB_USERNAME%/biahes-travel.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**For Git Bash (if using bash instead of cmd):**
```bash
cd C:\Users\bacun\work\biahes-website

# Set your GitHub username
export GITHUB_USERNAME=YOUR_USERNAME

# Add remote origin
git remote add origin https://github.com/$GITHUB_USERNAME/biahes-travel.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

---

### Your Repository URL (after pushing)
```
https://github.com/YOUR_USERNAME/biahes-travel
```

### Use This URL in Vercel
When importing to Vercel, use:
```
https://github.com/YOUR_USERNAME/biahes-travel
```

---

### Verify Repository Created
After pushing, check these URLs:
- Repository: `https://github.com/YOUR_USERNAME/biahes-travel`
- Files: `https://github.com/YOUR_USERNAME/biahes-travel/tree/main`
- README: `https://github.com/YOUR_USERNAME/biahes-travel/blob/main/README.md`

---

### Vercel Deployment (After Repository is Ready)
1. Go to: https://vercel.com/new
2. Click: "Continue with GitHub"
3. Search: "biahes-travel"
4. Click: "Import"
5. Add Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL=your_supabase_url`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key`
6. Click: "Deploy"

Your live site will be at: `https://biahes-travel.vercel.app`

---

## Git Status Before Push

Local commits ready to push:
- 47 files changed
- 13,225 insertions
- Branch: main
- Remote: origin (not yet added, you'll add it in Step 2)

Everything is committed and ready to push!
