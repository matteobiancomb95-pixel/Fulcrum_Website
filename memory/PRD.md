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
- **Custom domain `fulcrum.lt` blank page**: user manually added A/CNAME DNS records at registrar (iv.lt) instead of using Emergent's guided "Entri" domain-linking flow. Advised via `support_agent`: remove manual DNS records, redo via Link Domain → Entri flow in Emergent UI, wait for propagation (~15 min). Not a code issue; cannot be verified from sandbox.

## Backlog (P1/P2)
- SendGrid 403: sender `matteobianco.mb95@gmail.com` still needs Single Sender Verification in SendGrid dashboard (leads always save regardless).
- Minor (non-blocking, from iteration_2): elapsed_ms==0 spam-gate silently drops non-JS submissions; login lockout has no IP-level throttle (per-email only); CookieBanner occasionally stays visible after "Accetta" (intermittent, low priority).
- Dedicated service detail pages / resources content.
- Favicon + webmanifest asset set from brand kit.

## Next tasks
- Confirm fulcrum.lt resolves correctly after redoing domain link via Entri flow.
- Awaiting user review/feedback on AI Adoption architecture.
