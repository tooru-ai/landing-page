# FeatureSection (DualGrid) Specification — used 5× (CRM, Inbox, Reports, Outbound, Chatbot)

## Overview
- **Target file:** `src/components/FeatureSection.tsx` (single parameterized component)
- **Interaction model:** scroll-reveal (FadeUp on both halves), 500ms linear fade-up

## Common structure
```
DualGrid_wrapper (inline gap:0, pt:0, pb:0; grid 1fr 1fr; ≤768px 1fr)
├─ text half (FadeUp): Content_wrapper (flex col, justify-center)
│  ├─ h2/h3.Header_h1.cooper (48/64 w400 → ≤992 40/48 → ≤768 32/40 centered)
│  ├─ p subtext: Poppins 16/24 w400, color --subtext (#555f68), margin-top:20px, max-width:85% (100% ≤768)
│  └─ Learn more button: transparent variant, width:max-content, margin-top:32px, ArrowRightIcon right
└─ image half (FadeUp): {Name}_imageWrapper (flex, w-full, justify-center)
   └─ inner (flex, relative) > img (w/h 100%, object-fit contain, next/image)
```

## Per-instance data
| id | heading tag | image side | text-half padding | wrapper extras | image (public path) | img attrs | href |
|----|------|-----------|------------------|----------------|------------|-----------|------|
| crm | h2 | right | left: padding-right 96px (60 ≤992, 0 ≤768) | — | /images/sections/crm.png | 1176×976 | /crm |
| inbox | h3 | left (orderSecond/orderFirst ≤768: image 2nd) | right: padding-left 80px (60/0) | — | /images/sections/inbox.png | 1176×1016 | /inbox |
| reports | h2 | right | left: padding-right 96px (60/0) | wrapper padding-bottom:120px! (60 ≤768) | /images/sections/reports.png | 1176×1040 | /reporting |
| outbound | h3 | left (order swap ≤768) | right: padding-left 80px (60/0) | wrapper padding-top:120px! (60 ≤768) | /images/sections/outbound.png | 1176×880 | /outbound |
| chatbot | h2 | right | left: padding-right 96px (60/0) | — | /images/sections/chatbot.png | 1224×848 | /chatbot |

Mobile order (≤768px): text half gets `order:2`? — NO: `DualGrid_orderSecond` is on the IMAGE half (left) and `orderFirst` on the TEXT half for image-left sections → at ≤768px text shows first, image second. Image-right sections stack naturally (text first).

## Text content (verbatim)
- **crm**: "Streamline Your Workflow with a CRM Solution" / "Our platform simplifies the process of managing and responding to customer inquiries and concerns by consolidating all of their interactions and data in one place."
- **inbox**: "Consolidate Your Customer Conversations in One Inbox" / "A single inbox allows you to combine all of your phone, email, chat, and messaging app conversations in one location, improving your efficiency and customer satisfaction."
- **reports**: "Analyze Your Company's Performance with Advanced Reporting" / "Advanced reporting provides insights into your company's performance over any time range, helping you optimize your business operations."
- **outbound**: "Customize Your Communication Efforts" / "Whelp allows you to easily customize and automate your communication campaigns, sending bulk messages via WhatsApp, Telegram, Email, and Facebook Messenger."
- **chatbot**: "Design Unique Chatbots with Drag and Drop" / "The chatbot builder on this platform makes it easy for you to design and deploy chatbots that can provide your customers with 24/7 service and quick responses to their inquiries and concerns."
- All buttons: "Learn more" + arrow-right icon 20×20

## Button hover
transparent: bg transparent → rgba(0,0,0,0.04), 0.1s linear; border 2px black; focus ring 0 0 0 3px --wh-blue-10
