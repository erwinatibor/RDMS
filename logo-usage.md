# RDMS Logo Usage Guide

## Logo Mark Description

The RDMS logo mark consists of:
1. **Symbol** — A gold circle (#C9983A) containing a simplified tooth icon (white/dark stroke)
2. **Wordmark** — "RDMS" in Playfair Display Bold, tracked tight
3. **Sub-line** — "Dento-Medical Society Rwanda" in Plus Jakarta Sans, very small

---

## Logo Variants

### Full Logo (default)
Used in: Navigation, documents, presentations, print
- Symbol + RDMS wordmark + sub-line
- Minimum width: 140px

### Symbol Only (compact)
Used in: Favicons, social media profile icons, app icons
- Gold circle + tooth icon only
- Minimum size: 24×24px

### Light Version (on dark backgrounds)
- Wordmark: white
- Sub-line: white/45% opacity
- Symbol: gold (#C9983A) background, dark (#0F1F17) tooth icon

### Dark Version (on light backgrounds)
- Wordmark: #1A4731 (forest-800)
- Sub-line: #1A4731/55% opacity
- Symbol: gold (#C9983A) background, dark (#0F1F17) tooth icon

---

## Clear Space

Always maintain a minimum clear space equal to the height of the "R" in "RDMS" on all sides of the logo.

---

## Logo Don'ts

- ❌ Do not stretch or distort the logo
- ❌ Do not change the symbol color from gold
- ❌ Do not place on busy photographic backgrounds without an overlay
- ❌ Do not recreate the wordmark in a different font
- ❌ Do not add drop shadows, outlines, or effects to the logo mark
- ❌ Do not use the logo at a size smaller than 80px wide (full) or 20px (symbol only)

---

## Placement on Photography

When placing the RDMS logo over photography:
- Use a semi-transparent dark overlay: `rgba(15,31,23,0.6)`
- Or place inside a white/cream container card
- Ensure sufficient contrast: WCAG AA minimum (4.5:1 ratio)

---

## SVG Source Code

```html
<!-- RDMS Logo Mark — inline SVG for web use -->
<div style="display:flex;align-items:center;gap:10px;">
  <!-- Symbol -->
  <div style="width:36px;height:36px;border-radius:50%;background:#C9983A;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="#0F1F17" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2C9.4 2 7 3.9 7 6.5c0 2 1.2 3.7 2 4.5V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9c.8-.8 2-2.5 2-4.5C17 3.9 14.6 2 12 2z"/>
    </svg>
  </div>
  <!-- Wordmark -->
  <div style="line-height:1;">
    <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:1.2rem;letter-spacing:-0.02em;color:white;">RDMS</div>
    <div style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.6rem;letter-spacing:0.05em;color:rgba(255,255,255,0.45);margin-top:1px;">Dento-Medical Society Rwanda</div>
  </div>
</div>
```

---

## Favicon

For browser favicon, use the symbol only (gold circle + tooth) as a 32×32 or 16×16 PNG. Until a proper favicon.ico is generated, the page falls back to the browser default.

**To generate a favicon:**
1. Export the symbol SVG at 512×512px
2. Use https://favicon.io or https://realfavicongenerator.net
3. Place generated files in `/` (project root)
4. Add to `<head>`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```
