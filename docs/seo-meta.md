# RDMS SEO & Meta Tag Reference

## Primary Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index, follow">
<meta name="language" content="English">
<meta name="author" content="Dento-Medical Society Rwanda (RDMS)">

<title>RDMS — Dento-Medical Society Rwanda | Oral Health for All of Rwanda</title>
<meta name="description" content="Dento-Medical Society Rwanda (RDMS) is a registered non-profit uniting dental surgeons, therapists, and public health professionals to advance oral and systemic health in Rwanda through free mobile clinics, education, research, and policy advocacy.">
<meta name="keywords" content="RDMS Rwanda, dental health Rwanda, oral health Rwanda, free dental clinics Rwanda, dental society Rwanda, Dento-Medical Society Rwanda, Huye dental, Rwanda dentist, oral systemic health, Rwanda dental nonprofit">
```

---

## Open Graph Tags (Social Sharing)

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://rdms.rw/">
<meta property="og:title" content="RDMS — Dento-Medical Society Rwanda">
<meta property="og:description" content="Advancing oral and systemic health in Rwanda through free dental outreach, education, research, and policy advocacy since 2024.">
<meta property="og:image" content="https://rdms.rw/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_RW">
<meta property="og:site_name" content="RDMS Rwanda">
```

---

## Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="RDMS — Dento-Medical Society Rwanda">
<meta name="twitter:description" content="Advancing oral and systemic health in Rwanda through free dental outreach, education, and research.">
<meta name="twitter:image" content="https://rdms.rw/og-image.jpg">
```

---

## Canonical & Language

```html
<link rel="canonical" href="https://rdms.rw/">
<link rel="alternate" hreflang="en" href="https://rdms.rw/">
<link rel="alternate" hreflang="rw" href="https://rdms.rw/rw/">
<link rel="alternate" hreflang="fr" href="https://rdms.rw/fr/">
```

---

## Schema.org Structured Data (JSON-LD)

Add this in `<head>` for Google rich results:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Dento-Medical Society Rwanda",
  "alternateName": "RDMS",
  "url": "https://rdms.rw",
  "logo": "https://rdms.rw/logo.png",
  "description": "A registered non-profit organization uniting dental surgeons, therapists, and public health professionals to advance oral and systemic health in Rwanda.",
  "foundingDate": "2024-07-01",
  "founder": {
    "@type": "Person",
    "name": "Igisubizo Jimmy Confiance"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ngoma",
    "addressLocality": "Huye",
    "addressRegion": "Southern Province",
    "addressCountry": "RW"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+250-791-853-120",
    "contactType": "customer service",
    "email": "rdmspresident13@gmail.com",
    "availableLanguage": ["English", "Kinyarwanda", "French"]
  },
  "sameAs": [],
  "areaServed": "Rwanda",
  "nonprofitStatus": "Nonprofit501c3",
  "taxID": "143885158"
}
</script>
```

---

## Page Speed Recommendations

1. **Preconnect** to Google Fonts (already done in index.html)
2. **Lazy load** any below-fold images using `loading="lazy"`
3. **Preload** Tailwind CDN script with `rel="preload"`
4. Add `<link rel="dns-prefetch" href="//cdn.tailwindcss.com">`
5. When moving to production: replace Tailwind CDN with a purged CSS build (~15KB vs ~3MB)

---

## Target Keywords by Section

| Page Section   | Primary Keyword                             |
|----------------|---------------------------------------------|
| Hero           | oral health Rwanda, dental health Rwanda    |
| About          | dental society Rwanda, RDMS Rwanda          |
| Programs       | free dental clinic Rwanda, mobile dental    |
| Oral Health    | gum disease heart disease, oral systemic    |
| Partnership    | dental NGO Rwanda, partner Rwanda health    |
| FAQ            | RDMS FAQ, Rwanda dentist information        |
| Contact        | contact RDMS, dental clinic Huye Rwanda     |

---

## GEO / AI Visibility (Generative Engine Optimization)

To appear in AI-generated answers (ChatGPT, Gemini, Perplexity):

1. **Structured FAQ page** — RDMS's FAQ accordion covers the most likely AI queries ✓
2. **Entity clarity** — Mention "Dento-Medical Society Rwanda" and "RDMS" together in first 100 words ✓
3. **Location signals** — "Huye", "Southern Province", "Rwanda" mentioned in multiple sections ✓
4. **Mission statement** — Clear one-sentence mission visible above the fold ✓
5. **Blog content** — Create articles on: "oral health Rwanda", "gum disease and diabetes", "dental access in Africa", "what is a dental therapist"
6. **Backlinks** — Get links from: Rwanda Ministry of Health site, University of Rwanda, Africa Health organization directories
7. **Google Business Profile** — Register RDMS at https://business.google.com

---

## Recommended Blog/Content Topics for AI Visibility

1. "What is oral-systemic health and why does it matter?"
2. "The link between gum disease and heart disease — what Rwandans need to know"
3. "How to brush your teeth correctly — a step-by-step guide"
4. "What is a dental therapist and what do they do in Rwanda?"
5. "Early childhood tooth decay: causes, prevention, and what parents must know"
6. "How RDMS mobile clinics work and how to access them"
7. "Fluoride and oral health in Rwanda — common questions answered"
8. "Oral health during pregnancy: what expectant mothers need to know"
9. "The state of dental access in Rwanda: challenges and what RDMS is doing"
10. "Periodontitis and diabetes: the bidirectional relationship explained"
