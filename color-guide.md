# RDMS Brand Color Guide

## Primary Palette

| Token         | Hex       | Usage                                      |
|---------------|-----------|--------------------------------------------|
| Forest 950    | #060E09   | Footer background, deepest dark surfaces   |
| Forest 900    | #0F1F17   | Hero background, dark sections             |
| Forest 800    | #1A4731   | Primary brand green, CTAs, nav             |
| Forest 700    | #1F5A3D   | Hover state for forest-800                 |
| Forest 600    | #2A7A54   | Mid green accents                          |
| Forest 500    | #3A9B6B   | Lighter green for data viz                 |
| Forest 200    | #A8D5BA   | Muted green tints                          |
| Forest 100    | #E8F5EE   | Light green backgrounds, value pills       |
| Forest 50     | #F2FAF5   | Very light green wash                      |

## Accent Palette

| Token     | Hex       | Usage                                         |
|-----------|-----------|-----------------------------------------------|
| Gold 700  | #A87820   | Dark gold, pressed states                     |
| Gold 600  | #C9983A   | Primary accent, CTAs, logo mark               |
| Gold 500  | #D4A947   | Hover state for gold-600                      |
| Gold 400  | #DFB85A   | Headings on dark backgrounds                  |
| Gold 200  | #EED69A   | Light gold tints                              |
| Gold 100  | #FDF6E8   | Pale gold wash backgrounds                    |
| Gold 50   | #FEFBF0   | Very light gold wash                          |

## Neutral Palette

| Token  | Hex       | Usage                      |
|--------|-----------|----------------------------|
| Cream  | #FAF7F0   | Main page background       |
| Warm   | #F5F1E8   | Alternate section BG       |

---

## Typography

| Role         | Font                | Weight  | Notes                                   |
|--------------|---------------------|---------|-----------------------------------------|
| Display/Hero | Playfair Display    | 400–900 | Headings, pull quotes, section titles   |
| Body         | Plus Jakarta Sans   | 300–700 | Body text, labels, UI copy, buttons     |

### Type Scale
- Hero: `clamp(2.6rem, 7vw, 5.5rem)` — Playfair Display Bold
- Section H2: `clamp(2.2rem, 4.5vw, 3.8rem)` — Playfair Display Bold
- Card H3: `1.25rem–1.5rem` — Playfair Display Bold
- Body: `1rem–1.125rem` — Plus Jakarta Sans 400
- Label/Eyebrow: `0.68rem`, weight 700, letter-spacing `0.16em`, ALL CAPS

---

## Shadows

```css
/* Card shadow (s-card) */
box-shadow:
  0 1px 3px rgba(15,31,23,0.05),
  0 5px 16px rgba(15,31,23,0.07),
  0 16px 40px rgba(15,31,23,0.05);

/* Gold glow (s-gold) */
box-shadow:
  0 3px 10px rgba(201,152,58,0.18),
  0 10px 28px rgba(201,152,58,0.12);
```

---

## Button Styles

### btn-gold (Primary CTA)
- Background: `#C9983A` → hover `#D4A947`
- Text: `#0F1F17`
- Padding: `0.75rem 1.875rem`
- Border-radius: `4px`
- Hover lift: `translateY(-2px)` + gold glow shadow

### btn-ghost (Secondary CTA on dark backgrounds)
- Border: `1.5px solid rgba(255,255,255,0.38)`
- Text: `rgba(255,255,255,0.88)`
- Hover: border goes white, subtle white fill

### btn-forest (Secondary CTA on light backgrounds)
- Background: `#1A4731` → hover `#1F5A3D`
- Text: `#FAF7F0`

---

## Logo Mark
- Shape: Circle, background `#C9983A`
- Icon: Simplified tooth SVG, stroke `#0F1F17`, stroke-width 2.2
- Wordmark: "RDMS" — Playfair Display Bold, white, `1.2rem`
- Sub-wordmark: "Dento-Medical Society Rwanda" — Plus Jakarta Sans, white/45%, `0.6rem`, tracked

---

## Do / Don't

| DO                                          | DON'T                                    |
|---------------------------------------------|------------------------------------------|
| Use forest-800 as the dominant green        | Use Tailwind default indigo/blue         |
| Layer multiple radial gradients in hero     | Use flat single-color backgrounds        |
| Use Playfair Display for all H1/H2          | Mix sans-serif headings with sans body   |
| Keep gold as a sharp, purposeful accent     | Overuse gold — it should feel special    |
| Use cream (#FAF7F0) as the page background  | Use pure white (#FFFFFF)                 |
| Apply grain texture to dark hero sections   | Leave dark sections flat/textureless     |
