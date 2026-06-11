# Elevate Industries — "Warm Refined" Redesign

**Date:** 2026-06-10
**Branch:** redesign
**Goal:** Modernize the visual design of the entire site while keeping **all content identical** and the design true to the business profile (a precision brass & aluminum component manufacturer).

## Business profile (the design must reflect this)

Elevate Industries — premier manufacturer of precision **brass & aluminum** components (also MS/SS parts) in Jamnagar, Gujarat, India. Founded 2018, 7+ years experience, ISO 9001:2015 + ZED Bronze certified. Owner: Hiren Gohil. Serves construction, automotive, electrical & industrial sectors. Live site: elevateindustries.co.in.

Design implication: warm, premium, trustworthy, craftsmanship-led — a refined evolution of the existing brass/gold brand identity, not a cold/generic template.

## Approved direction

**Direction C — "Warm Refined"** with **Refined Serif** headlines. Chosen via visual brainstorming over two alternatives (dark Industrial Brass; light Engineering Clean) and over a Modern-Sans typography option.

Evolution of the current brand, not a reinvention — keep the warm gold/brown DNA, modernize type, spacing, hierarchy, and component polish.

## Design system

**Palette** (extends, does not discard, the current Natural Palette):
- Backgrounds: cream `#FBF7EF` → `#F3EAD7` gradients; white `#FFFFFF` surfaces
- Text: espresso `#3A2E22` (headings), warm brown `#6B5B47` (body)
- Accent / brass: gold `#C99A3B`, light gold `#E6C068`
- Dark bands: espresso for nav, trust strip, footer
- Hairline/borders: `#E8DDC7`

These map onto the existing Tailwind scales (`warm-yellow`, `earth-brown`, `cream-white`, `light-grey`). New tokens are **added** to `tailwind.config.js` and `src/styles/colors.css` so the system stays centralized; existing classes keep working.

**Typography:**
- Headlines: **Playfair Display** (serif), weight 700
- Body / UI: **Inter** (already the body font)
- Loaded via Google Fonts in `index.html`
- Small uppercase, letter-spaced **gold "eyebrow" labels** above section titles

**Components & motion:**
- Cards: rounded `16–18px`, warm soft shadows, hairline borders
- Buttons: `btn-primary` solid espresso → cream; `btn-secondary` gold-outline ghost (refresh existing component classes in `index.css`)
- Motion: keep Framer Motion — tasteful fade/slide-in on scroll, gentle hover lift; calmer and more consistent than the current varied timings

## Scope — pages (content unchanged, layout/type/spacing modernized)

| Page | Treatment |
|------|-----------|
| **Navigation** | Espresso sticky bar, brass active-link underline, refined mobile menu |
| **Home** | New serif hero (brass accent word) + product card; **trust strip** using real stats (7+/25+/50+/50+); refined Why-Choose-Us (6 items), Top Products (3), Services (3), gold CTA band |
| **About** | Hero, Our Story, 4 Core Values cards, Leadership (Hiren Gohil), Stats — re-spaced & re-typed |
| **Products** | Same `import.meta.glob` auto image grid + category filter; restyled filter pills & product cards; refined Custom Manufacturing section |
| **Certificates** | ISO 9001 + ZED Bronze cards, polished alternating layout |
| **Contact** | Info + **live form (same `https://elevateindustries.co.in/email/api/contact` endpoint, same fields)** + Google Map embed; restyled inputs/buttons/status messages |
| **Footer** | Rebuilt to match: espresso, gold accents, quick links, contact details |

## Explicitly preserved (must NOT change)

- All copy/text on every page
- All images (`src/assets/parts/*`, logo, certificates)
- Contact form fields + POST endpoint + CSRF handling + success/error behavior
- Google Maps embed (same address/coords)
- Certificate data (names, types, dates, feature bullets)
- Routing (`react-router-dom` routes & paths)
- The unused `ColorShowcase` component (left as-is)

## Constraints

- Stack stays: React 19 + Vite + Tailwind 3 + Framer Motion + React Router 7
- No new heavy dependencies (fonts via CDN are fine)
- `npm run build` must succeed; `npm run lint` should stay clean
- Responsive (mobile → desktop) preserved/improved

## Success criteria

1. Every page visually modernized in the Warm Refined + Serif language.
2. A diff of user-facing **text content** shows no changes (only markup/classes/structure).
3. Contact form still posts to the same API; map still renders; product grid still auto-loads images.
4. Build passes; site runs via `npm run dev`.

## Implementation approach

Use the **frontend-design** skill for execution. Order:
1. Foundations: `index.html` fonts, `tailwind.config.js` tokens, `index.css` component classes
2. Shared: Navigation, Footer, Logo
3. Home
4. About, Products, Certificates, Contact
5. Build + visual verification; confirm content preserved
