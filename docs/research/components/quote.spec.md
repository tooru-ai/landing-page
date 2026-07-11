# QuoteSection Specification

## Overview
- **Target file:** `src/components/QuoteSection.tsx`
- **Interaction model:** static

## DOM Structure & Styles
```
div.Quote_wrapper — grid 1fr; align/justify center; padding 80px 0 (40px ≤768); background var(--purple-bg) (#f4e3fc)
└─ Container.Quote_container (inline width:800px) — flex column, align-items center
   ├─ h3.Header_h1.Quote_quote.cooper — font-size 32px!, line-height 44px!, text-align center (≤768: 24px/32px)
   ├─ img seymur (Quote_image: margin-top 40px; width 88px; height 84px; attrs 176×168)
   ├─ p.Quote_title — Poppins, w500, 16px, line-height 24px!, margin-top 1rem
   └─ p.Quote_position — Poppins, color --subtext, margin-top 4px, w400, 14px!, line-height 20px
```

## Text (verbatim)
- Quote: “WhatsApp blended with Whelp interface is the ideal tool to reach your audience and promote your product and service.” (curly quotes included)
- Name: Seymur Rasulov — Role: Co-founder at Whelp, Inc

## Assets
- /images/quote/seymur.png (avatar)

## Note
Container inline width 800px (overrides 1200 max-width; still max-width constrained on small screens).
