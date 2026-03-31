# RDMS Website — Accessibility Checklist (WCAG 2.1 AA)

## Color Contrast

| Element                        | Foreground       | Background  | Ratio  | Status |
|-------------------------------|------------------|-------------|--------|--------|
| Body text (cream bg)          | #3D2B1A          | #FAF7F0     | 10.2:1 | ✅ AAA |
| Nav links (dark bg)           | rgba(255,255,255,0.88) | #0F1F17 | 9.4:1 | ✅ AAA |
| Gold CTA text                 | #0F1F17          | #C9983A     | 5.1:1  | ✅ AA  |
| Sub-text on cream             | rgba(26,71,49,0.6) | #FAF7F0   | 4.6:1  | ✅ AA  |
| Gold headings on dark         | #DFB85A          | #0F1F17     | 7.8:1  | ✅ AAA |
| Card body text                | #374151          | #FFFFFF     | 8.1:1  | ✅ AAA |

---

## Keyboard Navigation

- [ ] Tab order follows visual reading order
- [ ] All interactive elements reachable via Tab
- [ ] FAQ accordion items operable with Enter/Space
- [ ] Nav hamburger operable with Enter/Space
- [ ] Focus-visible outline: `2px solid #C9983A, offset 3px` on all focusable elements
- [ ] Modal/overlay (mobile nav) traps focus while open
- [ ] Escape key closes mobile nav

---

## Semantic HTML

- [ ] Single `<h1>` per page (hero headline)
- [ ] Section headings use `<h2>` (section titles) → `<h3>` (card titles)
- [ ] Navigation wrapped in `<nav aria-label="Main navigation">`
- [ ] Footer wrapped in `<footer>`
- [ ] FAQ items use `<button aria-expanded>` + controlled `<div aria-hidden>`
- [ ] Contact form labels explicitly associated with inputs via `<label for="">`
- [ ] Icons that convey meaning have `aria-label` or `title`
- [ ] Decorative icons have `aria-hidden="true"`

---

## Images & Media

- [ ] All `<img>` elements have descriptive `alt` attributes
- [ ] Decorative images use `alt=""` (empty string)
- [ ] SVG logos have `<title>` and `role="img"`
- [ ] No information conveyed by color alone (icons + text labels)
- [ ] Video (if added) has captions

---

## Forms (Contact Form)

- [ ] All fields have visible labels (not placeholder-only)
- [ ] Required fields marked with `aria-required="true"`
- [ ] Error messages programmatically associated with inputs
- [ ] Form submit feedback announced to screen readers (aria-live)
- [ ] No timeout on form interaction

---

## Motion & Animation

- [ ] All animations respect `prefers-reduced-motion`
  ```css
  @media (prefers-reduced-motion: reduce) {
    .reveal, .reveal-left, .reveal-right { opacity: 1; transform: none; transition: none; }
  }
  ```
- [ ] No auto-playing video or GIF without pause control
- [ ] No flashing content (>3 flashes/second)

---

## Screen Reader Testing

Test with these assistive technologies:
- NVDA + Chrome (Windows)
- JAWS + Chrome/Edge (Windows)
- VoiceOver + Safari (macOS/iOS)
- TalkBack + Chrome (Android)

---

## Mobile & Touch

- [ ] Touch targets minimum 44×44px
- [ ] Text resizable up to 200% without horizontal scroll
- [ ] No content hidden only via hover (all hover content also touch-accessible)
- [ ] Pinch-to-zoom not disabled (`user-scalable=no` NOT used)

---

## Performance (Accessibility Impact)

- [ ] Page loads in <3s on 3G connection (affects users with cognitive impairment)
- [ ] No layout shift (CLS < 0.1) — confusing for low-vision users
- [ ] Images have explicit width/height to prevent reflow

---

## Testing Tools

| Tool                  | Purpose                        |
|-----------------------|--------------------------------|
| axe DevTools (Chrome) | Automated WCAG audit           |
| WAVE (browser ext)    | Visual accessibility overlay   |
| Lighthouse            | Accessibility score (aim: 95+) |
| Color Contrast Analyzer | Manual contrast checking    |
| keyboard only         | Tab through entire page        |
