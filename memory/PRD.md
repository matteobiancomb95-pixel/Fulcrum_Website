# Fulcrum — Marketing Website — PRD

## Problem statement
Production-ready single-page marketing site for **Fulcrum**, an Italian AI transformation consultancy. Italian language, EN toggle stub, anchor navigation, fully responsive, strict 4-colour palette. Reference tone/architecture: yellowtech.it (not copied).

## Architecture
- **Multi-page** React app (react-router). Shared layout (Header + Outlet + Footer + CookieBanner + Lenis). Routes: `/`, `/ai-adoption`, `/ai-agents`, `/servizi-digitali`, `/settori`, `/chi-siamo`, `/admin`.
- All page content is bilingual IT/EN via `src/i18n.jsx` (site chrome) + `src/content/pagesIt.js` / `pagesEn.js` (page bodies), selected by `usePages()`.
- Motion: `framer-motion` + `lenis`. Geometry: brand lever/pivot SVG. Font: Poppins.

## Design system (STRICT)
- Colours only: `--cta #5B3DF5`, `--bg #FFFFFF`, `--copy #000000`, `--copy-on-cta #FFFFFF`. Derivatives: black opacities 0.60/0.40/0.10, `#4A2FD6` CTA hover. Tokens in `src/index.css`.
- 20px cards, 999px pill buttons, 1200px container, `clamp(80px,12vw,160px)` section rhythm.

## Implemented (2026-07-31)
- **Multi-page restructure + header dropdown** (2026-08-02): Header nav = Servizi (dropdown: AI Adoption /ai-adoption, Agenti AI /ai-agents, Servizi Digitali /servizi-digitali), Settori /settori, Chi siamo /chi-siamo. CTA renamed "Parliamone" → "Contattaci"/"Contact us" (scrolls to homepage form). 5 new bilingual pages built; AI Agents page driven by the Fulcrum_UseCase_Matrix (8 categories, 18 use cases with core-sector tags).
- **Homepage tweaks** (2026-08-02): removed "AI Transformation · Italia" eyebrow; fixed hero descender ("g") clipping (padding on masked lines); "Scopri i nostri servizi" → /ai-agents; contact form moved to centre of page (not before footer); enriched "Competenza verticale" section with lead copy + link to /settori.
- **Footer overhaul** (2026-08-02): Servizi/Azienda/Legale columns with correct links, LinkedIn (company/fulrcum-ai-tech) + Instagram (fulcrum_tech_ai) icons, Registration Code 306318621, owner email.
- **Admin owner email** = matteobianco.mb95@gmail.com (also the contact recipient).
- **SendGrid email**: key configured; delivery blocked by 403 — sender `matteobianco.mb95@gmail.com` not yet a verified Sender Identity in SendGrid. Leads always saved.
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

## Deployment fixes (2026-09-03)
- **Root `/health` probe** added directly on `app` (not under `/api` prefix) in `server.py` — Kubernetes readiness/liveness probe was 404'ing (then "connection refused") against `http://127.0.0.1:8001/health`, blocking production deploy to `fulcrum-ai-adoption.emergent.host`. Returns `{"status":"ok"}`. Verified via `testing_agent` iteration_2 (32/32 pytest pass, stable).
- **CORS_ORIGINS** extended to include `https://fulcrum.lt` and `https://www.fulcrum.lt` (custom domain) alongside existing preview/prod/localhost origins.
- **Custom domain `fulcrum.lt` connected** (2026-09-03): user redid domain link via Emergent's guided "Entri" flow after removing manual DNS records — confirmed working by user.
- **Favicon/webmanifest added** (2026-09-03): generated from user-provided brand icon (violet rounded square, lever/pivot logo) — `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180x180), `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest` in `/app/frontend/public/`. Linked in `index.html` `<head>`. Verified 200 on all files + link tags present in served HTML.

## Analytics & SEO (2026-09-03)
- **Google Analytics 4 added, consent-gated**: Measurement ID `G-LWC1S1S9CW`. `src/lib/ga4.js` loads gtag.js + sends page_view only after `useConsent().granted === true` (reuses existing zcal consent system, no new banner). Verified via screenshot/network trace: zero Google requests before consent; `gtag/js` + `google-analytics.com/g/collect` fire correctly after clicking "Accetta"; nothing loads if "Rifiuta".
- **Cookie banner + legal pages updated** (IT/EN) to reflect GA4 usage: banner text, Privacy Policy (data collected, recipients incl. Google Ireland Ltd), Cookie Policy (section 4 renamed "Misurazione, solo con consenso" with `_ga`/`_ga_*` cookie table row).
- **robots.txt + sitemap.xml** added at `/app/frontend/public/` referencing `fulcrum.lt` (all IT/EN routes + 7 agent detail pages) — prep for Google Search Console indexing (user will configure GSC property later).
- **Custom domain `fulcrum.lt` connected** via Emergent's Entri flow (2026-09-03), confirmed working by user.
- **Favicon/webmanifest** added from brand icon — see previous entry.

## Backlog (P1/P2)
- SendGrid 403: sender `matteobianco.mb95@gmail.com` still needs Single Sender Verification in SendGrid dashboard (leads always save regardless).
- Minor (non-blocking, from iteration_2): elapsed_ms==0 spam-gate silently drops non-JS submissions; login lockout has no IP-level throttle (per-email only); CookieBanner occasionally stays visible after "Accetta" (intermittent, low priority).
- Dedicated service detail pages / resources content.
- Google Search Console property + sitemap submission (user will do manually later).

## Next tasks
- Redeploy to production so GA4 + sitemap/robots.txt go live on fulcrum.lt.
- Awaiting user review/feedback on AI Adoption architecture.
