# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Interaction model:** scroll-reveal (FadeUp both halves) + time-driven floating cards

## DOM Structure
```
Container (inside page)
└─ DualGrid_wrapper.maxHeight (inline: gap:0; padding-top:40px; padding-bottom:0)
   ├─ DualGrid_left.Hero_left (FadeUp, justify-content:center)
   │  └─ Content_wrapper (flex column; ≤768px align-items:center)
   │     ├─ h1.Header_h1.cooper — "Elevate Your Customer Support with Our Omnichannel Solution"
   │     ├─ p subtext (Poppins 16/24, color --subtext, margin-top:20px)
   │     └─ Hero_formWrapper (flex; width:95%; margin-top:32px; align-items:center)
   │        ├─ Input_flex (width:100%) > Hero_input (radius 60px, h 52px, border 2px black, border-right:0,
   │        │    right radii 0 — inline radius 60 then CSS !important overrides right side; bg white)
   │        │  └─ input.Input_input placeholder "Enter your email" (padding-x 20px, Poppins 16px)
   │        └─ a black button "Get Started" (h52, py-14 px-28, radius 60, left radii 0 via Hero_button)
   └─ DualGrid_right.Hero_right (FadeUp, align-items:center)
      └─ Hero_imageWrapper (flex; width:100%; justify-content:flex-end; ≤768px center)
         └─ Hero_inner (flex; position:relative)
            ├─ img blue-bg (base layer, w1024 h1232 attrs, class imageBg: w/h 100% object-fit contain)
            ├─ img model (absolute; left:50%; bottom:0; translateX(-50%); w/h 100%; z-4)
            ├─ img top-right (absolute; top:18%; right:-4%; 176×100; z-2; animation down-and-up 5s linear infinite)
            ├─ img left-center (absolute; top:40%; left:-14%; 180×92; z-2; translateY(-60%); animation 6s)
            └─ img bottom-right (absolute; bottom:10%; right:-4%; 248×84; z-6; animation 7s)
```

## Keyframes (verbatim)
`down-and-up`: 0% translateY(0); 25% translateY(10px); 50% translateY(0); 75% translateY(10px); 100% translateY(0)

## Assets
- `/images/hero/blue-bg.png` (1024×1232), `/images/hero/model.png` (1024×1232), `/images/hero/top-right.png` (368×216), `/images/hero/left-center.png` (376×200), `/images/hero/bottom-right.png` (512×184)

## Text (verbatim)
- H1: "Elevate Your Customer Support with Our Omnichannel Solution"
- Sub: "Connect with customers on Live Chat, SMS, WhatsApp, E-mail, and Social Media for seamless, personalized service. Boost efficiency with our unified customer view and AI-powered automations."
- Input placeholder: "Enter your email"; Button: "Get Started" → https://web.whelp.co/signup

## Responsive
- ≤992px: topRight 140×80 right:0; leftCenter 140×73 left:0 z-4; bottomRight 180×59 right:0
- ≤768px: grid 1col; form column, input full radius + centered text, button full width mt-16 radius 60; image centered
- ≤540px: topRight 120×64; leftCenter 112×58; bottomRight 160×52
- DualGrid.maxHeight: min-height 648px (700px if viewport ≥1000px tall)
