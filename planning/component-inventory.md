# RDMS Website — Component Inventory

All reusable UI components used in `index.html`.

---

## Atoms

### Eyebrow / Section Label
```html
<div style="display:flex;align-items:center;gap:12px;">
  <div style="height:1px;width:36px;background:#C9983A;"></div>
  <span style="font-size:0.68rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;font-family:'Plus Jakarta Sans',sans-serif;color:#C9983A;">
    SECTION NAME
  </span>
</div>
```

### Trust Chip (Hero)
```html
<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border:1px solid rgba(255,255,255,0.15);border-radius:999px;font-size:0.78rem;color:rgba(255,255,255,0.7);">
  ● Label Text
</span>
```

### Tag Pill (Program cards)
```html
<span style="font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:4px;background:rgba(201,152,58,0.15);color:#DFB85A;">
  TAG
</span>
```

### Stat Item (Stats Ribbon)
```html
<div style="text-align:center;padding:0 2rem;">
  <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:3rem;color:#DFB85A;">2024</div>
  <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.78rem;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-top:4px;">Year Founded</div>
</div>
```

---

## Buttons

### btn-gold (Primary CTA)
```html
<button style="background:#C9983A;color:#0F1F17;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:0.9rem;letter-spacing:0.02em;padding:0.75rem 1.875rem;border-radius:4px;border:none;cursor:pointer;transition:background 0.2s,transform 0.2s;">
  Button Label
</button>
```

### btn-ghost (Secondary on dark bg)
```html
<button style="background:transparent;color:rgba(255,255,255,0.88);font-family:'Plus Jakarta Sans',sans-serif;font-weight:500;font-size:0.9rem;padding:0.75rem 1.875rem;border-radius:4px;border:1.5px solid rgba(255,255,255,0.38);cursor:pointer;transition:border-color 0.2s,background 0.2s;">
  Button Label
</button>
```

### btn-forest (Secondary on light bg)
```html
<button style="background:#1A4731;color:#FAF7F0;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:0.9rem;padding:0.75rem 1.875rem;border-radius:4px;border:none;cursor:pointer;transition:background 0.2s,transform 0.2s;">
  Button Label
</button>
```

---

## Cards

### Service Card (light, 6-card grid)
```html
<div class="reveal" style="background:white;border:1px solid rgba(26,71,49,0.07);border-radius:1rem;padding:2rem;box-shadow:0 1px 3px rgba(15,31,23,0.05),0 5px 16px rgba(15,31,23,0.07),0 16px 40px rgba(15,31,23,0.05);">
  <div style="width:48px;height:48px;border-radius:50%;background:#1A4731;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem;">
    <!-- icon SVG -->
  </div>
  <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.15rem;color:#0F1F17;margin-bottom:0.75rem;">Card Title</h3>
  <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;line-height:1.7;color:rgba(15,31,23,0.65);">Description text here.</p>
</div>
```

### Program Card (dark, numbered)
```html
<div class="reveal" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:1rem;padding:2rem;position:relative;overflow:hidden;">
  <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:3.5rem;color:rgba(223,184,90,0.15);position:absolute;top:1rem;right:1.5rem;line-height:1;">01</div>
  <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.15rem;color:white;margin-bottom:0.75rem;">Program Title</h3>
  <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.875rem;line-height:1.7;color:rgba(255,255,255,0.6);margin-bottom:1rem;">Program description.</p>
  <!-- tag pill -->
</div>
```

### Condition Card (Oral Health section)
```html
<div style="background:white;border-radius:1rem;overflow:hidden;box-shadow:0 1px 3px rgba(15,31,23,0.05),0 5px 16px rgba(15,31,23,0.07);">
  <div style="background:#1A4731;padding:1.25rem 1.5rem;">
    <h3 style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.1rem;color:#DFB85A;">Condition Name</h3>
    <p style="font-size:0.78rem;color:rgba(255,255,255,0.6);margin-top:4px;">Subtitle / prevalence</p>
  </div>
  <div style="padding:1.5rem;">
    <!-- content -->
  </div>
</div>
```

---

## Interactive Components

### FAQ Accordion Item
```html
<div class="faq-item" style="border-bottom:1px solid rgba(26,71,49,0.08);">
  <button class="faq-btn" aria-expanded="false" style="width:100%;text-align:left;padding:1.25rem 0;display:flex;justify-content:space-between;align-items:center;background:none;border:none;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:1rem;color:#0F1F17;">
    Question text here?
    <span class="faq-icon" style="flex-shrink:0;transition:transform 0.25s;font-size:1.25rem;color:#C9983A;">+</span>
  </button>
  <div class="faq-answer" aria-hidden="true" style="max-height:0;overflow:hidden;transition:max-height 0.35s ease,padding 0.3s;">
    <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;line-height:1.75;color:rgba(15,31,23,0.72);padding-bottom:1.25rem;">
      Answer text here.
    </p>
  </div>
</div>
```

### Contact Form
```html
<form id="contact-form">
  <div style="display:grid;gap:1.25rem;">
    <div>
      <label style="display:block;font-size:0.8rem;font-weight:600;color:rgba(255,255,255,0.6);margin-bottom:6px;">Name *</label>
      <input type="text" required style="width:100%;padding:0.75rem 1rem;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:6px;color:white;font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;">
    </div>
    <!-- email, subject select, message textarea -->
    <button type="submit" class="btn-gold">Send Message →</button>
  </div>
</form>
```

---

## Reveal Animation Classes

Applied to cards and content blocks for scroll-triggered entrance:

```css
.reveal       { opacity:0; transform:translateY(28px); transition:opacity 0.65s ease, transform 0.65s ease; }
.reveal-left  { opacity:0; transform:translateX(-28px); transition:opacity 0.65s ease, transform 0.65s ease; }
.reveal-right { opacity:0; transform:translateX(28px); transition:opacity 0.65s ease, transform 0.65s ease; }
.reveal.in, .reveal-left.in, .reveal-right.in { opacity:1; transform:none; }

.d1 { transition-delay:0.1s } .d2 { transition-delay:0.2s }
.d3 { transition-delay:0.3s } .d4 { transition-delay:0.4s } .d5 { transition-delay:0.5s }
```

Triggered by IntersectionObserver at 8% visibility threshold.
