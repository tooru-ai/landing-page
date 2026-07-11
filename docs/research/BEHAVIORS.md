# whelp.co — Behavior Bible

## Global
- No smooth-scroll library (no Lenis/Locomotive). Native scrolling.
- Body: `padding: 40px 0 0`, `background-color: var(--main)` (#fefbf6).
- Fonts: Poppins (200–800, Google) for body/UI; Cooper (400/600/800, self-hosted TTF → `public/fonts/cooper-*.ttf`) for display headings.

## Navbar (scroll-driven)
- `position: fixed !important; top:0; left:0; height: 80px; z-index:1000; background: var(--main)`.
- **Trigger:** scrollY > 0 → adds `scrolled` class. Only visible effect (menu closed): `border-bottom: 1px solid rgba(0,0,0,0.06)`.
- Dropdowns open on **hover** (mouseenter on the trigger). Menu: white bg, radius 24px, `box-shadow: 0 0 0 1px #e9ebed`, `filter: drop-shadow(0 16px 40px rgba(0,0,0,0.28))`, positioned `top: 56px; left:50%; translateX(-50%)`, arrow tip SVG (20×8, white) at top center translate(-50%,-14px).
- Menu item hover: `background-color: var(--wh-neutral-0)`; active: `var(--wh-steel-0)`; radius 12px.
- Mobile (≤992px): hamburger replaces links; full-screen menu `Navbar_navbarSmall` (h = 100vh - 64px navbar), accordion items.

## Hero (time-driven)
- 5 layered images: blue-bg (base), model (on top), + 3 floating cards:
  - top-right card (Michael Jones / Julia Brown): `animation: downAndUp 5s linear infinite`
  - left-center card (7 top omnichannels + social icons): `6s linear infinite`
  - bottom-right card (Avg response time 2m 45s): `7s linear infinite`
- `@keyframes downAndUp`: 0% translateY(0) → 50% translateY(-20px) → 100% translateY(0)` (verify exact values in styles-2.pretty.css line ~993).
- Email input + black "Get Started" button (form → redirects to app signup).

## Section reveal (scroll-driven, applies to EVERY DualGrid half + Content blocks)
- SSR initial state: inline `opacity: 0` on each `DualGrid_left` / `DualGrid_right` half.
- **Trigger:** element enters viewport (IntersectionObserver, fire once).
- **Animation (measured):** duration 500ms, LINEAR easing, `opacity 0 → 1` and `translateY(50px) → 0`. After completion inline opacity stays 1, transform none.
- Implement as a `FadeUp` client wrapper component used by all sections.

## Buttons (hover, all via CSS vars)
- Rendered as `<a>` with height 48px, padding 12px 24px, border-radius 60px (pill). Variant classes control colors (see below). Text span: Poppins 16px.
- Black: bg `--wh-black` → hover `--wh-neutral-90` (#1c1c1c); color white; pill radius.
- White: bg white → hover `--wh-neutral-0`.
- Transparent: bg transparent → hover rgba(0,0,0,0.04); border 1px black.
- Flat: transparent, no border (Sign In).
- "Learn more →" buttons: transparent variant with arrow icon.

## Features grid (scroll-driven, staggered)
- Each of 6 cards: `animation: Features_fadeIn <delay>s linear forwards` with delays 0.25/0.5/0.75/1/1.25/1.5s (order = card index). Cards start opacity 0; fadeIn to 1. Applied when section enters view (className toggled by JS — replicate with IntersectionObserver, fire once).

## Solutions carousel (time-driven, react-slick)
- Structure: `.slick-slider > .slick-arrow.slick-prev + .slick-list > .slick-track > .slick-slide × 30` (10 unique cards × 3 for infinite loop).
- Track: `width: 6840px` (30 × 228? actual slide = 285px incl. margin), autoplay steps `translate3d(-285px)` per tick, `transition: transform 500ms` (default ease).
- Autoplay interval ~2s. Infinite loop (track resets seamlessly). Prev/next arrows: black, vertically offset (`padding-bottom: 200px` → aligned to card image center).
- Card: 270×400 white, border 2px solid #000, radius 16px, padding 16px; below: category label, title, "See more →" link.
- Card hover: cursor pointer.

## Quote section
- Full-width band `background: var(--purple-bg)` (#f4e3fc / wh-purple-5); centered serif (Cooper) quote, avatar 88×84, name + role centered.

## Why Whelp
- Full-width black band (`--wh-black`), Cooper heading "Why Whelp?", 3 stat cards (dark gray #1f1f1f-ish bg, radius, big colored stat numbers: 68% blue?, 2.7% ?, 4M+ ?) — exact colors in styles-2.pretty.css (`WhyCompany_`).

## Integrations
- Rounded panel (radius ~24px) light blue bg (`Integrations_bg`), text left + one PNG image right (`right.9bdacdda.png` — grid of app icons).

## Footer
- Top CTA band: bg `--footer-bg` #f5f4ef, Cooper heading "Get started now!", sub copy, black "Get started" + transparent "View pricing" buttons.
- Links: 4 columns (Products, Resources, Company, Compare) + logo mark left.
- Copyright row: "Copyright © 2025, Whelp, Inc." left; social icons right (Facebook, Instagram, Twitter, LinkedIn).

## Livechat launcher (third-party — replicate visually only)
- Fixed bottom-right dark circular button (~48px) with logo icon.

## Responsive (from CSS media queries — authoritative)
- ≤1200px: container max-width changes
- ≤992px: DualGrid collapses to single column; navbar → hamburger
- ≤768px: spacing reduces (`pmb/pmt` 40→20px), typography scales down
- Consult styles-2.pretty.css media blocks per component.
