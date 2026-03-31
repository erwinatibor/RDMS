# RDMS Website — Section Wireframes

## Layout Conventions

- Max content width: `1280px` (7xl), centered
- Section padding: `py-24 md:py-32` (96px / 128px)
- Inner padding: `px-6 md:px-12 lg:px-24`
- Grid gutter: `gap-8 md:gap-12`

---

## 1. Navigation

```
┌─────────────────────────────────────────────────────────────────────┐
│  [● RDMS]  Wordmark          About  Services  Programs  Contact  [CTA]  [☰] │
└─────────────────────────────────────────────────────────────────────┘
```

- Height: `72px`
- State: transparent → frosted glass on scroll >60px
- Mobile: hamburger opens full-screen overlay menu
- CTA button: "Get Involved" → gold background

---

## 2. Hero

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   [EYEBROW — Rwanda · Oral Health · Since 2024]                    │
│                                                                     │
│   Oral Health Is                                                    │
│   Not Separate                                                      │
│   From Health.                        [decorative tooth — right]   │
│                                                                     │
│   [sub-paragraph — 2 lines max]                                     │
│                                                                     │
│   [ Get Involved ▶ ]   [ Learn More ]                              │
│                                                                     │
│   [chip: RDB Registered]  [chip: Founded 2024]  [chip: Huye, RW]  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

- Background: `#0F1F17` with layered radial gradients (see design-system.md)
- Full viewport height (`min-h-screen`)
- Headline: Playfair Display, clamp(2.6rem, 7vw, 5.5rem)
- Trust chips: pill-shaped, border `rgba(255,255,255,0.15)`, text white/70%

---

## 3. Stats Ribbon

```
┌─────────────────────────────────────────────────────────────────────┐
│   2024              3+              6              Free             │
│   Year Founded      Languages       Programs       Dental Services  │
└─────────────────────────────────────────────────────────────────────┘
```

- Background: `#1A4731`
- 4 columns on md+, 2×2 grid on mobile
- Number: Playfair Display Bold, ~3.5rem, gold (#DFB85A)
- Label: Plus Jakarta Sans, uppercase, small, white/60%

---

## 4. About — Who We Are

```
┌──────────────────────────────────┬────────────────────────────────┐
│  EYEBROW                         │                                │
│                                  │  ┌──────────────────────────┐ │
│  [H2 — 2 lines]                  │  │  Org Info Card           │ │
│                                  │  │  ─────────────────────── │ │
│  [paragraph — mission]           │  │  📍 Huye, Rwanda         │ │
│                                  │  │  📞 +250 791 853 120     │ │
│  [5 core values — icon + label]  │  │  ✉  rdmspresident13@...  │ │
│                                  │  │  🏛  RDB: 143885158       │ │
│  [quote block — vision]          │  └──────────────────────────┘ │
└──────────────────────────────────┴────────────────────────────────┘
```

- Background: `#FAF7F0` (cream)
- Left col: text content. Right col: dark green info card
- Core values displayed as `icon + label` horizontal pills

---

## 5. Services — What We Do

```
┌─────────────────────────────────────────────────────────────────────┐
│  EYEBROW          H2: What We Do          [sub-text]               │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │ [icon]      │  │ [icon]      │  │ [icon]      │               │
│  │ Card title  │  │ Card title  │  │ Card title  │               │
│  │ description │  │ description │  │ description │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │
│  │ [icon]      │  │ [icon]      │  │ [icon]      │               │
│  │ Card title  │  │ Card title  │  │ Card title  │               │
│  │ description │  │ description │  │ description │               │
│  └─────────────┘  └─────────────┘  └─────────────┘               │
└─────────────────────────────────────────────────────────────────────┘
```

- Background: `#F5F1E8`
- 3-col grid on lg+, 2-col md, 1-col mobile
- Cards: white bg, layered shadow, 1rem radius
- Icon: gold circle container, SVG inside

---

## 6. Programs

```
┌─────────────────────────────────────────────────────────────────────┐
│  [dark bg: #0F1F17]                                                 │
│                                                                     │
│  EYEBROW          H2: Our Programs        [sub-text]               │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │ 01           │  │ 02           │  │ 03           │            │
│  │ Program Name │  │ Program Name │  │ Program Name │            │
│  │ description  │  │ description  │  │ description  │            │
│  │ [TAG]        │  │ [TAG]        │  │ [TAG]        │            │
│  └──────────────┘  └──────────────┘  └──────────────┘            │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │ 04           │  │ 05           │  │ 06           │            │
│  └──────────────┘  └──────────────┘  └──────────────┘            │
└─────────────────────────────────────────────────────────────────────┘
```

- Background: `#0F1F17`
- Cards: glass-dark variant (rgba white/4%, border white/8%)
- Number: Playfair Display, ~3rem, gold/20% (decorative)
- Tag pill: color-coded by program category

---

## 7. Oral Health Education

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Key fact banner — full width, forest-800 bg]                     │
│  "80% of oral diseases are preventable with proper hygiene."        │
├──────────────────────────────────┬──────────────────────────────── │
│  3 Condition Cards (vertical):   │  Daily Hygiene Steps (4)        │
│  ┌──────────────────────────┐    │  + Oral-Systemic Links (4)      │
│  │ Tooth Decay              │    │                                 │
│  ├──────────────────────────┤    │  [2-col layout]                 │
│  │ Gum Disease              │    │                                 │
│  ├──────────────────────────┤    │                                 │
│  │ Oral Cancer              │    │                                 │
│  └──────────────────────────┘    │                                 │
└──────────────────────────────────┴─────────────────────────────────┘
```

- Background: `#FAF7F0`
- Key fact: prominent, contrasting banner before the grid

---

## 8. Partnership & Membership

```
┌─────────────────────────────────────────────────────────────────────┐
│  [warm bg: #F5F1E8]                                                 │
│                                                                     │
│  ┌──────────────────────────────┐  ┌──────────────────────────┐   │
│  │ Membership Card              │  │ Partnership Cards (3)    │   │
│  │ ─────────────────────────── │  │ ┌──────────────────────┐ │   │
│  │ Who can join                 │  │ │ Research Collab      │ │   │
│  │ 5 Member benefits            │  │ ├──────────────────────┤ │   │
│  │ [Student track box]          │  │ │ Community Outreach   │ │   │
│  │ [ Join RDMS ▶ ]             │  │ ├──────────────────────┤ │   │
│  └──────────────────────────────┘  │ │ Corporate Support    │ │   │
│                                     │ └──────────────────────┘ │   │
│                                     └──────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 9. FAQ

```
┌─────────────────────────────────────────────────────────────────────┐
│  EYEBROW          H2: FAQ          [sub-text]                      │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Q: What is RDMS?                                        [+] │  │
│  ├─────────────────────────────────────────────────────────────┤  │
│  │ Q: Who founded RDMS?                                    [+] │  │
│  ├─────────────────────────────────────────────────────────────┤  │
│  │  ... (15 entries total) ...                                  │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  [See all FAQs ▶] (expands from docs/faq-full.md)                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 10. Contact

```
┌─────────────────────────────────────────────────────────────────────┐
│  [dark bg: #0F1F17]                                                 │
│                                                                     │
│  ┌──────────────────────────┐  ┌──────────────────────────────┐   │
│  │ Info column              │  │ Contact Form                 │   │
│  │ ─────────────────────── │  │ ─────────────────────────── │   │
│  │ 📍 Huye, Rwanda          │  │ Name ___________________     │   │
│  │ 📞 +250 791 853 120      │  │ Email __________________     │   │
│  │ ✉  rdmspresident13@...   │  │ Subject (dropdown) _____     │   │
│  │                          │  │ Message ________________     │   │
│  │ Languages:               │  │ ________________            │   │
│  │ EN · RW · FR             │  │ [ Send Message ▶ ]          │   │
│  └──────────────────────────┘  └──────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 11. Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│  [deepest dark: #060E09]                                            │
│                                                                     │
│  [Logo + tagline]     Quick Links     Programs     Contact         │
│                        Home            Mobile       Phone          │
│                        About           Research     Email          │
│                        Services        Education    Location       │
│                        FAQ             Membership                  │
│                                                                     │
│  ─────────────────────────────────────────────────────────────── │
│  © 2024 RDMS · RDB 143885158 · Huye, Southern Province, Rwanda    │
└─────────────────────────────────────────────────────────────────────┘
```

- 4-column grid on lg+, 2-col on md, stacked on mobile
