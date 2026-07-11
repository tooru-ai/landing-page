# Footer Specification (FooterCta + Footer + Copyright)

## Overview
- **Target file:** `src/components/Footer.tsx` (includes all three bands)
- **Interaction model:** static + link/social hovers

## Band 1 — CTA (`Footer_topWrapper`)
- padding 80px 0 (60 ≤768); flex center; width 100%; bg var(--footer-bg) #f5f4ef; border-top-left/right-radius 40px; border-bottom 1px solid rgba(0,0,0,0.059)
- Container inline width 588px:
  - h4.Header_h1.cooper centered — "Get started now!"
  - p subtext centered, margin-top 20px! — "Sign up now to improve your customer support with our tools and solutions."
  - div.Footer_buttons — flex center, margin-top 32px (column ≤768)
    - "Get started" black button → https://web.whelp.co/signup (margin-right 16px; ≤768 mb-16 mr-0, w-full)
    - "View pricing" transparent button → /pricing
  - Buttons: py-12 px-24 radius 60 (no fixed height → h-12 via py+text)

## Band 2 — Links (`Footer_bottomWrapper`)
- padding 80px 0 (≤768: 40 top, 60 bottom, column); flex center; bg var(--footer-bg); border-bottom 1px solid rgba(0,0,0,0.059)
- Container.Footer_content (width 1200px) — flex (column ≤992)
  - Footer_logo — flex col gap 15px; WhelpLogoMark svg 60×46
  - Footer_columns — grid 4×1fr; margin-left 186px (146 ≤1200; 0 + 2 cols + gap 40 + mt 40 ≤992); gap 24px
    - col: header p — 16px! w500! mb 4px; links: a block, margin-top 16px, 14px!, Poppins; hover underline

### Columns (verbatim)
- Products: Inbox /inbox, CRM /crm, Reporting /reporting, Chatbot /chatbot, Outbound /outbound, Integrations /integrations
- Resources: Blog https://whelp.co/blog/, Status https://status.whelp.co/
- Company: About /about, Contact /contact, Privacy policy /privacy-policy, Terms of service /terms-of-service
- Compare: Kustomer /compare/kustomer, Zendesk /compare/zendesk

## Band 3 — Copyright (`Footer_copyRight`)
- bg var(--footer-bg); padding 26px 0 (24 ≤992)
- Container.copyRightContent (width 1200px) — flex space-between (column ≤992)
  - p copyright subtext — "Copyright © 2025, Whelp, Inc."
  - Footer_social — flex; a margin-left 1rem; svg color var(--wh-steel-60), hover black
    - Facebook https://www.facebook.com/getwhelp/ | Instagram https://www.instagram.com/whelp.co/ | Twitter https://twitter.com/getwhelp | LinkedIn https://www.linkedin.com/company/whelp (all target _blank)
