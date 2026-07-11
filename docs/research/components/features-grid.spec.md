# FeaturesGrid Specification

## Overview
- **Target file:** `src/components/FeaturesGrid.tsx` (client — staggered reveal)
- **Interaction model:** scroll-driven staggered fadeIn

## DOM Structure & Styles
```
Container > div.Features_wrapper — margin 40px 0; padding 80px 0; grid repeat(3,1fr); gap 24px; overflow auto; scrollbar hidden
   (≤768px: display flex (horizontal scroll), gap 0, padding 40px 0, margin 20px 0)
└─ div.Features_item ×6 — padding 32px; min-height 260px; flex col; bg #fff; border 2px solid #000; border-radius 20px
   (≤768px: min-height 288px; margin-right 20px; max-width 288px; padding 24px)
   ├─ div.Features_iconWrapper — flex; 76×52; border-radius 60px; center; inline bg/color per card
   │  └─ icon svg 32×32 currentColor
   ├─ span.Features_title — margin-top 20px; font-size 20px; font-weight 500
   └─ span.Features_content — font-size 16px (14 ≤768); color --subtext; margin-top 16px
```

## Stagger animation (verbatim CSS)
- Card i gets class fadeIn{i}: `animation: fadeIn <0.25|0.5|0.75|1|1.25|1.5>s linear forwards`
- `@keyframes fadeIn`: from `opacity:0; transform:translateY(-25px)` to `opacity:1; translateY(0)`
- Cards start opacity 0 (fill backwards? forwards means they need initial opacity-0 class before trigger). Applied when section scrolled into view; implement with IntersectionObserver on wrapper, add animation classes once.

## Cards (verbatim, in order)
1. ShieldCheckIcon, bg var(--wh-green-5) color var(--wh-green-90), "Security first", "Advanced encryption and secure access controls protect customer data on this platform."
2. UsersIcon, bg var(--wh-purple-5) color var(--wh-purple-90), "Team collaboration", "Easily collaborate and communicate with both team members and customers across various channels with our platform."
3. InboxIcon, bg var(--wh-blue-5) color var(--wh-blue-90), "Omnichannel support", "Whelp allows businesses to reach customers through various channels, ensuring that they can communicate with customers wherever they are."
4. ChatLinesIcon, bg var(--wh-yellow-5) color var(--wh-yellow-90), "AI powered automation", "The chatbot on our platform automates up to 60% of customer inquiries, freeing up agents to focus on more complex issues."
5. ReportingIcon, bg var(--wh-pink-5) color var(--wh-pink-90), "Analytics and reporting", "Analytics and reporting tools on our platform help businesses track and analyze their performance and customer interactions."
6. IntegrationsIcon, bg var(--wh-orange-5) color var(--wh-orange-90), "Integration capabilities", "Our platform easily integrates with a wide range of other tools and platforms, streamlining integration with existing workflows."
