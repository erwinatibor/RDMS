# RDMS Website — Project Brief

## Client

**Organization:** Dento-Medical Society Rwanda (RDMS)
**Full Name:** Dento-Medical Society Rwanda
**Acronym:** RDMS
**Type:** Registered Non-Profit (NGO)
**RDB Code:** 143885158
**Founded:** 1 July 2024
**Founder:** Igisubizo Jimmy Confiance
**Location:** Ngoma, Huye, Southern Province, Rwanda
**Phone:** +250 791 853 120
**Email:** rdmspresident13@gmail.com
**Languages:** English, Kinyarwanda, French

---

## Project Summary

Build a single-page marketing website for RDMS to:
1. Establish online presence for Rwanda's dental health nonprofit
2. Communicate mission, services, programs, and impact clearly
3. Enable potential members, partners, and donors to get in touch
4. Rank well in Google for Rwandan oral health search queries
5. Appear in AI-generated answers (ChatGPT, Gemini, Perplexity)

---

## Target Audiences

| Audience                | Goal on Site                                         |
|-------------------------|------------------------------------------------------|
| General public (Rwanda) | Learn about oral health, find free clinic info       |
| Dental/medical students | Join RDMS, access mentorship & research programs     |
| Healthcare professionals| Attend workshops, join as members, collaborate       |
| NGOs / Institutions     | Partner with RDMS for outreach or research           |
| Donors / Sponsors       | Understand impact, find contact info to support      |
| Journalists / Media     | Get organizational facts and media contact           |

---

## Design Direction

**Style:** "Refined Humanitarian" — editorial, earthy, trustworthy
**References:** NGO annual reports, health-sector websites with authority feel
**Palette:** Forest greens (#1A4731, #0F1F17) + warm gold (#C9983A) + cream (#FAF7F0)
**Typography:** Playfair Display (headings) + Plus Jakarta Sans (body)
**Tone:** Professional and warm — not clinical, not corporate

---

## Technical Specs

| Spec              | Choice                                          |
|-------------------|-------------------------------------------------|
| File structure    | Single `index.html`, all styles inline          |
| CSS framework     | Tailwind CSS via CDN (dev) → purged build (prod)|
| Fonts             | Google Fonts CDN → self-hosted in production    |
| JavaScript        | Vanilla JS only (no frameworks)                 |
| Build required    | None in development                             |
| Server            | `node serve.mjs` for local dev                  |
| Screenshots       | `node screenshot.mjs http://localhost:3000`     |
| Browser targets   | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+  |
| Responsive        | Mobile-first, tested 320px–1920px               |

---

## Pages / Sections

1. Navigation (sticky, frosted glass on scroll)
2. Hero (full viewport, dark green, Playfair Display headline)
3. Stats Ribbon (4 impact numbers)
4. About / Who We Are
5. Services / What We Do (6 cards)
6. Programs (6 numbered cards)
7. Oral Health Education (conditions + hygiene + systemic)
8. Partnership & Membership
9. FAQ Accordion (15 entries, expandable)
10. Contact (info + form)
11. Footer

---

## Success Criteria

- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] All sections match design reference
- [ ] No broken links or console errors
- [ ] Form submits correctly
- [ ] Mobile layout correct at 375px, 768px, 1280px
- [ ] Loads in < 3 seconds on 3G
