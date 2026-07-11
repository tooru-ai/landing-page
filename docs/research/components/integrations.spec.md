# IntegrationsSection Specification

## Overview
- **Target file:** `src/components/IntegrationsSection.tsx`
- **Interaction model:** scroll-reveal (FadeUp halves)

## DOM Structure & Styles
Rendered TWICE on origin: desktop `Container.ContainerOnlyDesktop_lg` (display:flex; none ≤768) and mobile `div.ContainerOnlyDesktop_sm` (display:none; flex ≤768 — full-bleed, no Container). Same inner content.
```
DualGrid_wrapper.Integrations_bg — bg var(--wh-blue-5) #d9ecfd; border-radius 40px; padding 0 80px; margin-top 20px; margin-bottom 120px
  (≤768px: padding 0 20px; radius 0; margin-bottom 60px)
├─ left half (FadeUp, Integrations_left: justify-center)
│  └─ Content_wrapper: h2 cooper "Explore integrations"; subtext (mt 20, max-w 85%); Learn more transparent button (mt 32, w max-content) → /integrations
└─ right half (FadeUp, Integrations_right: align-items flex-end)
   └─ imageWrapper (flex w-full justify-end; center ≤768) > inner (flex relative)
      └─ img /images/sections/integrations.png attrs 776×576, w/h 100% object-contain
```

## Text (verbatim)
- H2: "Explore integrations"
- Sub: "Our integrations make it easy to work with the applications your teams already love."
- Button: "Learn more" + arrow

## Note
The section sits inside no extra vertical padding: image is bottom-aligned (right half align-end) so the icons graphic touches panel bottom.
