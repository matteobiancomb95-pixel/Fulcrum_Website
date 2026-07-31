# Fulcrum — Marketing Website — PRD

## Problem statement
Production-ready single-page marketing site for **Fulcrum**, an Italian AI transformation consultancy. Italian language, EN toggle stub, anchor navigation, fully responsive, strict 4-colour palette. Reference tone/architecture: yellowtech.it (not copied).

## Architecture
- **Frontend-only** React app (CRA + craco). No backend/DB used (per user choice: form is client-side validation only).
- Motion: `framer-motion` (scroll reveals, hero masked line-reveal, micro-interactions) + `lenis` (smooth momentum scroll, disabled under prefers-reduced-motion).
- Geometry: brand lever/pivot built as SVG (`components/site/Logo.jsx`), no stock photography.
- Font: Poppins (400/500/700) via Google Fonts.

## Design system (STRICT)
- Colours only: `--cta #5B3DF5`, `--bg #FFFFFF`, `--copy #000000`, `--copy-on-cta #FFFFFF`. Derivatives: black opacities 0.60/0.40/0.10, `#4A2FD6` CTA hover. Tokens in `src/index.css`.
- 20px cards, 999px pill buttons, 1200px container, `clamp(80px,12vw,160px)` section rhythm.

## Implemented (2026-07-31)
- Sticky header (transparent→solid on scroll, hairline border), centred nav, violet pill CTA, EN toggle stub, mobile menu.
- Hero: full-height, masked line-by-line reveal of "Driving AI Adoption", parallax SVG lever geometry cropped by viewport, two CTAs, scroll cue.
- Impact strip: 4 metrics counting up on scroll into view (< 6 mesi, +70%, 90%, 24/7).
- Manifesto: 3 numbered chapters (lever/load/pivot).
- Two-pillar service cards (AI Adoption / AI Agents) with hover lift + violet text link.
- Method: 4-step timeline with animated violet connecting line.
- Editorial marquee (slow, pauses on hover).
- Sectors: 8 outline pills, violet fill on hover.
- Trust & Security: 3×2 grid, violet lucide line icons.
- Contact: full-bleed violet section, form with client-side validation + inline errors, required privacy + optional marketing checkboxes, success state.
- Footer: logo, sitemap, P.IVA placeholder, Privacy/Cookie links, LinkedIn.
- Cookie banner (essential-only default, localStorage).
- SEO: meta, Open Graph, Twitter, JSON-LD Organization. Accessibility: semantic HTML, focus rings, skip link, prefers-reduced-motion, aria labels, data-testids.

## Backlog (P1/P2)
- Functional EN translation (currently stub).
- Real form submission (DB store / email via Resend) if lead capture is needed.
- Dedicated service detail pages / resources content.
- Favicon + webmanifest asset set from brand kit.

## Next tasks
- Awaiting user review/feedback.
