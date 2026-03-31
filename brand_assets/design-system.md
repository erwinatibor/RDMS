# RDMS Design System — Component Reference

## Design Direction: "Refined Humanitarian"

RDMS's visual identity draws from Rwanda's geography — the thousand green hills, warm amber light, and rich red earth. The aesthetic is editorial and trustworthy: serif headings for authority, warm cream backgrounds, and gold as a purposeful accent that signals warmth and accessibility.

**Tone:** Refined / Humanitarian / Earthy / Editorial
**Feel:** Like a well-designed NGO annual report that also happens to be beautiful on a phone.

---

## Section Structure

Each section follows this layering order:

```
1. Background (cream / dark green / warm beige)
2. Subtle radial gradient wash (optional atmosphere)
3. Dot grid or grain overlay (texture, very low opacity)
4. Content (z-index: 10)
```

---

## Section Map

| Section ID    | Background Color | Dark/Light | Key Element               |
|---------------|------------------|------------|---------------------------|
| #hero         | #0F1F17 (dark)   | Dark       | Radial gradient mesh       |
| stats ribbon  | #1A4731          | Dark       | 4-column stat grid         |
| #about        | #FAF7F0 (cream)  | Light      | 2-col: text + info card    |
| #services     | #F5F1E8 (warm)   | Light      | 3-col service card grid    |
| #programs     | #0F1F17 (dark)   | Dark       | Numbered 3-col card grid   |
| #oral-health  | #FAF7F0 (cream)  | Light      | Conditions + hygiene 2-col |
| #partnership  | #F5F1E8 (warm)   | Light      | 2-col membership layout    |
| #faq          | #FAF7F0 (cream)  | Light      | Single-col accordion       |
| #contact      | #0F1F17 (dark)   | Dark       | 2-col: info + form         |
| footer        | #060E09          | Dark       | 4-col footer grid          |

---

## Animation System

All animations use only `transform` and `opacity`. Never `transition-all`.

### Scroll Reveal Classes
```css
.reveal        /* fade up: translateY(28px) → 0 */
.reveal-left   /* fade from left: translateX(-28px) → 0 */
.reveal-right  /* fade from right: translateX(28px) → 0 */
```

Each gets `.in` class added by IntersectionObserver when 8% visible.

### Delay utilities
```css
.d1 { transition-delay: 0.1s }
.d2 { transition-delay: 0.2s }
.d3 { transition-delay: 0.3s }
.d4 { transition-delay: 0.4s }
.d5 { transition-delay: 0.5s }
```

---

## Card Variants

### Light card (services, FAQ)
```css
background: white;
border: 1px solid rgba(26,71,49,0.07);
border-radius: 1rem;
box-shadow: [s-card layered shadow];
```

### Dark card (programs)
```css
background: rgba(255,255,255,0.04);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 1rem;
```

### Feature card (about, membership)
```css
background: #1A4731;
border-radius: 1rem;
overflow: hidden;
/* with decorative offset background card */
```

---

## Nav Behavior

- **Default (top of page):** Fully transparent background
- **On scroll (>60px):** `background: rgba(15,31,23,0.96)` + backdrop blur
- Mobile: Full-screen dropdown menu, z-index 40 (below nav z-50)
- Hamburger animates to X on open

---

## Interactive States (all elements)

Every clickable element has:
- `hover` — color shift or translateY(-2px)
- `focus-visible` — outline 2px solid brand color, offset 3px
- `active` — translateY(0) (snap back)
- `transition` — only transform + opacity, 0.2s ease

---

## Hero Gradient Recipe

```css
background:
  radial-gradient(ellipse 70% 55% at 85% 25%, rgba(42,122,84,0.40) 0%, transparent 60%),
  radial-gradient(ellipse 45% 65% at 15% 90%, rgba(201,152,58,0.18) 0%, transparent 55%),
  radial-gradient(ellipse 90% 90% at 50% 50%, rgba(26,71,49,0.55) 0%, transparent 85%),
  #0F1F17;
```

---

## Eyebrow / Section Label

```html
<div class="flex items-center gap-3">
  <div class="h-px w-9" style="background:#C9983A;"></div>
  <span style="font-size:0.68rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;font-family:'Plus Jakarta Sans',sans-serif;color:#C9983A;">
    Section Name
  </span>
</div>
```

---

## Responsive Breakpoints (Tailwind)

| Breakpoint | Width   | Key Layout Change                  |
|------------|---------|------------------------------------|
| sm         | 640px   | Value pills go 2-col               |
| md         | 768px   | Stats go 4-col, cards go 2-col     |
| lg         | 1024px  | 2-col text/card layouts unlock     |
| xl         | 1280px  | Decorative tooth icon appears      |

---

## File Structure

```
rdms-website/
├── index.html              ← Complete single-page website
├── README.md               ← Setup and deployment guide
├── brand_assets/
│   ├── color-guide.md      ← Full color + typography reference
│   ├── design-system.md    ← This file
│   └── logo-usage.md       ← Logo placement rules
└── docs/
    ├── content-map.md      ← Section content sources
    ├── faq-full.md         ← Full FAQ 50+ entries
    └── seo-meta.md         ← SEO tags, meta descriptions
```
