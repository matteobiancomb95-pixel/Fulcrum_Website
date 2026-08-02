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
- **Language memory + auto-detect** (2026-08-02): chosen language persists in `localStorage` (`fulcrum_lang`); first-time visitors get EN automatically if their browser isn't Italian, otherwise IT.
- **Anti-spam** (2026-08-02): hidden honeypot field + minimum time-on-form check on `POST /api/contact`; bot submissions are silently dropped (not saved, not emailed).
- **Admin lead panel** (2026-08-02): protected route `/admin` (JWT Bearer auth, bcrypt, admin seeded from env, brute-force lockout). Dashboard lists all leads (newest first) with CSV export (`GET /api/admin/leads.csv`). Admin: `admin@fulcrum.it`. Endpoints: `/api/auth/login`, `/api/auth/me`, `/api/admin/leads`, `/api/admin/leads.csv`.
- **SendGrid email integration** (2026-08-02): `POST /api/contact` stores each lead in MongoDB (`contact_leads`) and sends via SendGrid a notification to `CONTACT_RECIPIENT` (matteobianco.mb95@gmail.com) + a bilingual confirmation email to the submitter. **MOCKED/PENDING: actual email delivery is inactive until the user adds a real SENDGRID_API_KEY + verifies the sender, then redeploys.**
- Sticky header (transparent→solid on scroll, hairline border), centred nav, violet pill CTA, mobile menu.
- **Full i18n system** (`src/i18n.jsx`): functional IT/EN toggle in header (highlights active locale, updates `<html lang>`), complete English translations of every string across all sections + form + errors + cookie banner. Brand payoff "Driving AI Adoption" kept identical in both languages by design.
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
- Real form submission (DB store / email via Resend) if lead capture is needed.
- Dedicated service detail pages / resources content.
- Favicon + webmanifest asset set from brand kit.

## Next tasks
- Awaiting user review/feedback.
