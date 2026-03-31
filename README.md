# RDMS Website — Project README

**Dento-Medical Society Rwanda (RDMS)**
Single-page website for Rwanda's leading oral-systemic health nonprofit.

---

## Project Overview

| Item             | Detail                                     |
|------------------|--------------------------------------------|
| Project Type     | Static single-page website                 |
| Technology       | HTML5, Tailwind CSS (CDN), Vanilla JS      |
| Fonts            | Playfair Display + Plus Jakarta Sans (Google Fonts) |
| Responsive       | Mobile-first, tested down to 320px         |
| Dependencies     | Tailwind CDN, Google Fonts (CDN) — no npm  |
| Build Required   | None — open `index.html` directly          |

---

## Folder Structure

```
rdms-website/
│
├── index.html                  ← Complete single-page website
│
├── README.md                   ← This file
│
├── brand_assets/
│   ├── color-guide.md          ← Full color palette + typography reference
│   ├── design-system.md        ← Component patterns, animations, spacing
│   └── logo-usage.md           ← Logo placement rules + SVG source code
│
└── docs/
    ├── content-map.md          ← Maps every section to its source document
    ├── faq-full.md             ← Full FAQ 50+ entries (for expansion)
    └── seo-meta.md             ← SEO tags, schema.org JSON-LD, GEO strategy
```

---

## Sections (in order)

1. **Navigation** — Sticky, transparent → frosted glass on scroll, mobile hamburger
2. **Hero** — Full viewport, dark green gradient mesh, Playfair Display headline
3. **Stats Ribbon** — 4 impact numbers on forest-800 background
4. **About** — 2-column: mission text + organization info card
5. **Services** — 6-card grid (What We Do)
6. **Programs** — 6 numbered cards on dark background
7. **Oral Health Education** — Key fact + 3 condition cards + hygiene/systemic 2-col
8. **Partnership & Membership** — Membership card + 3 partnership types
9. **FAQ** — 15-entry accordion (expandable from `docs/faq-full.md`)
10. **Contact** — Info column + contact form (mailto handler)
11. **Footer** — Brand, quick links, contact details

---

## How to Run Locally

**Option A — Double-click (simplest):**
```
Open index.html in any modern browser (Chrome, Firefox, Safari, Edge)
```

**Option B — Local server (recommended for testing):**
```bash
# Using Python (if installed)
cd rdms-website
python -m http.server 3000
# Open http://localhost:3000

# Using Node.js (if installed)
npx serve .
# Open http://localhost:3000
```

---

## Customization Guide

### Updating Contact Details
Search for `+250 791 853 120` and `rdmspresident13@gmail.com` in `index.html` and replace.

### Updating FAQ entries
In `index.html`, find the `const faqs = [...]` array in the `<script>` section. Add entries as:
```javascript
{ q: 'Your question here?', a: 'Answer text here.' },
```

### Adding more Program cards
In `index.html`, find `const programs = [...]` and add entries with `num`, `title`, `desc`, `tag`.

### Changing the hero headline
Find `id="hero-h1"` in the HTML and update the text within.

### Adding a real logo image
In the nav, replace the inline SVG tooth symbol with:
```html
<img src="brand_assets/logo.png" alt="RDMS Logo" width="36" height="36" class="rounded-full">
```

### Adding a favicon
Generate a favicon from https://favicon.io using the tooth SVG, then add to `<head>`:
```html
<link rel="icon" href="/favicon.ico">
```

---

## Color Reference (Quick)

| Token        | Hex       | Use                        |
|--------------|-----------|----------------------------|
| Forest 800   | #1A4731   | Primary green, buttons     |
| Forest 900   | #0F1F17   | Dark sections, hero        |
| Gold 600     | #C9983A   | Accent, CTA buttons, logo  |
| Gold 400     | #DFB85A   | Text on dark backgrounds   |
| Cream        | #FAF7F0   | Main page background       |

---

## Browser Support

| Browser       | Version | Status |
|---------------|---------|--------|
| Chrome        | 90+     | ✅ Full support |
| Firefox       | 88+     | ✅ Full support |
| Safari        | 14+     | ✅ Full support |
| Edge          | 90+     | ✅ Full support |
| Chrome Mobile | 90+     | ✅ Full support |
| Safari iOS    | 14+     | ✅ Full support |

---

## Deployment Options

### GitHub Pages (Free)
1. Push `rdms-website/` contents to a GitHub repo
2. Go to Settings → Pages → Source: main branch, / (root)
3. Your site goes live at `https://yourusername.github.io/repo-name`

### Netlify (Free, Recommended)
1. Go to https://netlify.com
2. Drag and drop the `rdms-website/` folder
3. Site goes live instantly with a `.netlify.app` domain
4. Connect a custom domain (e.g., `rdms.rw`) in Settings

### Custom Domain
Once deployed, connect `rdms.rw` or `rdmsrwanda.org` by:
1. Purchase the domain from a registrar
2. Point DNS A record to your host's IP
3. Add CNAME if using Netlify/Vercel

---

## Future Enhancements

- [ ] Add blog section with article cards (important for GEO/AI visibility)
- [ ] Add Kinyarwanda and French language toggle
- [ ] Replace mailto form with a real backend (Netlify Forms, Formspree, or EmailJS)
- [ ] Add real photography of RDMS mobile clinic outreach
- [ ] Generate and add favicon.ico + apple-touch-icon
- [ ] Integrate Google Analytics or Plausible
- [ ] Add chatbot widget (RDMS AI Assistant)
- [ ] Create separate pages: /about, /programs, /oral-health, /contact
- [ ] Add map widget showing Huye, Southern Province location

---

## Credits

**Organization:** Dento-Medical Society Rwanda (RDMS)
**Founder:** Igisubizo Jimmy Confiance
**RDB Code:** 143885158
**Contact:** rdmspresident13@gmail.com | +250 791 853 120

**Design Direction:** Refined Humanitarian — earthy palette referencing Rwanda's green hills
**Fonts:** Playfair Display (display) + Plus Jakarta Sans (body)
**Built with:** Tailwind CSS, Vanilla JS, IntersectionObserver API
