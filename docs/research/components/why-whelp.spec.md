# WhyWhelp Specification

## Overview
- **Target file:** `src/components/WhyWhelp.tsx`
- **Interaction model:** static

## DOM Structure & Styles
```
div.WhyCompany_wrapper — margin 40px 0 (20px ≤768); grid 1fr; padding 120px 0 (60px ≤768); background var(--wh-neutral-100) #141414
└─ Container.WhyCompany_container (width:1200px) — flex column, align center
   ├─ h3.Header_h1.WhyCompany_header.cooper — color white; margin-bottom 48px!; ≤768 font-size 32px!
   └─ div.WhyCompany_items — grid 3×1fr, gap 24px (1fr ≤768)
      └─ div.WhyCompany_item ×3 — flex col center; border-radius 20px (16 ≤768); bg var(--wh-neutral-90) #1c1c1c; padding 40px 32px; height 184px (140 ≤768)
         ├─ p.itemHeader — Poppins 48px! w500! lh 64px! color var(--wh-blue-20) #a4d1f9; centered (≤768: 32px/44px)
         └─ p.itemText — Poppins 16px! color var(--wh-blue-0) #ecf5fe; margin-top 16px!; centered (14px ≤768)
```

## Content (verbatim)
1. 68% — "Automation for Ecommerce at least"
2. 2.7% — "Increase in usage of WhatsApp"
3. 4M+ — "Conversations have been answered"

Heading: "Why Whelp?"
