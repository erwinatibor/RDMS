# RDMS Website — Content Checklist

Track every piece of content needed for the website before launch.

---

## Written Content

### Hero Section
- [x] Organization name + acronym
- [x] Hero headline (written)
- [x] Sub-headline (written)
- [x] Trust chips: "RDB Registered", "Founded 2024", "Huye, Rwanda"
- [x] CTA button labels: "Get Involved", "Learn More"

### Stats Ribbon
- [x] Year founded: 2024
- [x] Languages: 3+
- [x] Programs: 6
- [x] Service cost: Free

### About Section
- [x] Mission paragraph
- [x] Problem statement
- [x] 5 core values
- [x] Vision quote
- [x] Contact info (address, phone, email)
- [x] RDB registration code

### Services (6 cards — need title + 2-line description each)
- [x] Community Mobile Clinics
- [x] School-Based Programs
- [x] Interdisciplinary Workshops
- [x] Research Collaborations
- [x] Public Health Campaigns
- [x] Policy Advocacy

### Programs (6 numbered cards — need title + description + tag)
- [x] Community Mobile Clinics
- [x] RDMS Research Academy
- [x] Dental Medicine Chronicles
- [x] Interdisciplinary Workshops
- [x] Public Health Campaigns
- [x] Mentorship Program

### Oral Health Education
- [x] Key fact banner text
- [x] Tooth Decay card
- [x] Gum Disease card
- [x] Oral Cancer card
- [x] 4 Daily Hygiene steps
- [x] 4 Oral-Systemic links

### Partnership & Membership
- [x] Membership eligibility criteria
- [x] 5 member benefits
- [x] Student membership section
- [x] Research Collaboration card
- [x] Community Outreach card
- [x] Corporate Support card
- [x] 5-business-day response note

### FAQ (15 entries)
- [x] All 15 FAQ items written (see index.html or docs/faq-full.md)

### Contact
- [x] Phone: +250 791 853 120
- [x] Email: rdmspresident13@gmail.com
- [x] Location: Ngoma, Huye, Southern Province, Rwanda
- [x] Form subject options: General Inquiry, Membership, Partnership, Media, Other

### Footer
- [x] Logo + tagline
- [x] Quick links
- [x] Program links
- [x] Contact info
- [x] Copyright + RDB code

---

## Media Assets

### Required (currently using placeholders)
- [ ] Hero background image (real photography)
- [ ] Team / leadership photo
- [ ] Mobile clinic in action photo
- [ ] School outreach photo
- [ ] Community event photo
- [ ] OG image (1200×630px) — for social sharing

### Brand Assets (available)
- [x] Logo SVG (brand_assets/logo.svg)
- [x] Logo dark variant (brand_assets/logo-dark.svg)
- [x] Favicon SVG (brand_assets/favicon.svg)
- [x] OG image template SVG (brand_assets/og-image-template.svg)
- [ ] favicon.ico (generate from brand_assets/favicon.svg)
- [ ] apple-touch-icon.png (180×180px)

### Icons
- [x] Service icons SVG sprite (assets/icons/service-icons.svg)

---

## Technical Assets

- [x] index.html
- [x] serve.mjs (local dev server)
- [x] screenshot.mjs (screenshot tool)
- [ ] favicon.ico (generate from favicon.svg)
- [ ] apple-touch-icon.png
- [ ] og-image.jpg (export from SVG template)
- [ ] sitemap.xml (for deployment)
- [ ] robots.txt (for deployment)

---

## sitemap.xml Template (for production)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rdms.rw/</loc>
    <lastmod>2024-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## robots.txt Template (for production)

```
User-agent: *
Allow: /
Sitemap: https://rdms.rw/sitemap.xml
```
