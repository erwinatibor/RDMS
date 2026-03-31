# RDMS Website — Deployment Guide

## Pre-Deployment Checklist

- [ ] Replace all `https://placehold.co/` images with real photography
- [ ] Generate and add `favicon.ico` and `apple-touch-icon.png` (see brand_assets/logo-usage.md)
- [ ] Produce a real 1200×630 OG image (export brand_assets/og-image-template.svg)
- [ ] Update `og:image` URL in `<head>` to the live URL
- [ ] Update `canonical` URL from `https://rdms.rw/` to the actual domain
- [ ] Replace `mailto:` form with Netlify Forms, Formspree, or EmailJS
- [ ] Switch Tailwind CDN to a purged production CSS build (~15KB vs 3MB)
- [ ] Run Lighthouse audit → target 90+ on Performance, 95+ on Accessibility
- [ ] Test on Chrome, Firefox, Safari, Edge (desktop + mobile)
- [ ] Submit to Google Search Console after go-live

---

## Option A — Netlify (Recommended, Free)

**One-click deploy:**
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `RDMS/` folder onto the upload area
4. Site goes live instantly at `https://random-name.netlify.app`

**Connect a custom domain (rdms.rw):**
1. In Netlify → Site Settings → Domain Management → Add custom domain
2. Enter `rdms.rw`
3. At your domain registrar, add these DNS records:
   ```
   A     @    75.2.60.5
   CNAME www  [your-site].netlify.app
   ```
4. Netlify auto-provisions free SSL (Let's Encrypt)

**Enable Netlify Forms (replaces mailto):**
Add `netlify` attribute to the `<form>` tag:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  ...
</form>
```
Submissions appear in Netlify Dashboard → Forms.

---

## Option B — GitHub Pages (Free)

1. Create a GitHub account and new repository: `rdms-website`
2. Upload the RDMS project files (drag & drop in GitHub web UI, or use Git)
3. Go to repo → **Settings** → **Pages**
4. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
5. Site publishes at `https://yourusername.github.io/rdms-website`

**Custom domain:**
1. In GitHub Pages settings, enter your custom domain
2. Add a file named `CNAME` in the repo root containing: `rdms.rw`
3. Update DNS at your registrar:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  yourusername.github.io
   ```

---

## Option C — Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **"Add New Project"** → **"Browse"** → upload the project folder
3. Or import from GitHub: connect repo → instant deploy
4. Custom domain: Dashboard → Domains → Add → follow DNS instructions

---

## Option D — cPanel / Shared Hosting

If RDMS has existing web hosting (RwandaHosting, Africa's Talking, SiteGround, etc.):
1. Log in to cPanel → **File Manager**
2. Navigate to `public_html/`
3. Upload all project files (index.html, brand_assets/, assets/, etc.)
4. Visit `https://yourdomain.com` — site is live

---

## Production Tailwind CSS Build

Replace the CDN script in `index.html` with a purged production build to eliminate ~3MB of unused CSS:

```bash
# Install Tailwind CLI (one-time)
npm install -D tailwindcss

# Create tailwind.config.js
echo 'module.exports = { content: ["./index.html"] }' > tailwind.config.js

# Create input CSS
echo '@tailwind base; @tailwind components; @tailwind utilities;' > input.css

# Build (outputs ~15KB instead of 3MB)
npx tailwindcss -i input.css -o assets/style.min.css --minify
```

Then in `index.html`, replace:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
With:
```html
<link rel="stylesheet" href="assets/style.min.css">
```

---

## Domain Registrars for rdms.rw

| Registrar          | Notes                                |
|--------------------|--------------------------------------|
| RICTA (Rwanda)     | Official .rw registry: ricta.org.rw  |
| GoDaddy            | International, easy DNS management  |
| Namecheap          | Affordable, good DNS UI             |
| Google Domains     | Simple, integrates with other Google tools |

**Recommended domain:** `rdms.rw` (Rwandan TLD, builds local trust)
**Alternative:** `rdmsrwanda.org` or `rdmsrwanda.health`

---

## Post-Launch Steps

1. **Google Search Console** — verify ownership, submit sitemap
2. **Google Business Profile** — register RDMS at business.google.com
3. **Google Analytics** — add GA4 tracking snippet (optional)
4. **Bing Webmaster Tools** — submit site for Bing/Microsoft indexing
5. **Social profiles** — link website from LinkedIn, Twitter/X, Facebook
6. **Backlinks** — request links from:
   - University of Rwanda Faculty of Medicine
   - Rwanda Ministry of Health
   - Rwanda Dental Association (if exists)
   - Africa health directories (AfroHealth, etc.)
