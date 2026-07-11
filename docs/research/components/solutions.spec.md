# SolutionsSection Specification

## Overview
- **Target file:** `src/components/SolutionsSection.tsx` (client component)
- **Interaction model:** time-driven carousel (react-slick on origin) + click arrows

## DOM Structure & Styles
```
Container (width:1200px)
└─ Content_wrapper.Solutions_content — flex col justify-center; padding-top 60px
   ├─ h2.Header_h1.Solutions_title.cooper — centered — "Industry-Specific Solutions"
   ├─ p.Solutions_subtext — centered; max-width 520px; margin 20px auto 0; Poppins 16/24 subtext color
   └─ div.Solutions_slider — padding 48px 0 88px
      └─ div (inline: width 100%; max-width 100vw; padding 0 30px)
         └─ carousel: prev arrow | track | next arrow
```

## Carousel behavior (measured on live site)
- Library on origin: react-slick. Track of 24 slides (clones), slide width 285px, card 270px.
- **Autoplay:** advances 1 slide (285px) every ~3000ms total cadence (≈2500ms pause + 500ms transition).
- **Transition:** `transform 500ms` (default ease), translate3d steps of -285px.
- **Infinite:** seamless loop (10 unique slides, cloned).
- **Arrows:** `.slick-arrow.slick-prev/.slick-next` with `Solutions_slideArrow` (padding-bottom: 200px so chevron aligns with image block center); position absolute at top:50%, left/right -25px (slick theme); custom chevron icons 24×24 black (slick default text hidden — the site uses custom arrow divs w/ Icon children, color black, cursor pointer).
- Clone implementation: custom autoplay carousel — 3× the 10 slides, index state starting at 10, translateX = -(index-? ) * 285; on transitionend if index ≥ 20 silently jump back 10 (no transition). Arrows: index ±1. Interval 3000ms, transition 500ms ease.

## Slide (card) structure & styles
```
div.Solutions_slideItem (flex col center; cursor pointer; width 285px)
├─ div.Solutions_slideImgBlock — border-radius 16px; border 2px solid #000; background #fff; width 270px; height 400px; padding 16px
│  └─ img.Solutions_slideImg — border-radius 16px; width 100% (plain <img>, ~476×730 PNGs)
└─ div.Solutions_slideDescription — width 270px
   ├─ p category — Poppins 16/24 w400, subtext color
   ├─ p title — Poppins 16/24 w500, black
   └─ a.Solutions_slideLink (margin-top 16px; flex align-center) href=/solution?id=<id>
      ├─ p "See more" — w500, underline, margin-right 4px
      └─ ArrowRightIcon 20×20
```

## Slides (verbatim, in order)
1. E-commerce / "E-commerce Customer Care" / customer-care.png / e-commerce
2. Insurance / "Insurance Support Simplified" / insurance-support.png / insurance
3. Finance & Banking / "Financial Services Support" / banking.png / banking
4. Hotel / "Hospitality Support Excellence" / hotel.png / hotel
5. Education / "Innovative EdTech Support" / innovative-support.png / education
6. HR/Recruitment / "Streamlined HR Support" / streamlined-support.png / hr
7. Travel / "Traveler-Centric Support" / travel-support.png / travel
8. Real Estate / "Real Estate Support Solutions" / real-estate-support.png / real-estate
9. Restaurant / "Responsive Restaurant Support" / responsive-support.png / restaurant
10. Car Dealership / "Auto Sales & Service Support" / auto-sales-support.png / car-dealership

Images in `/images/solutions/`.

## Header text (verbatim)
- H2: "Industry-Specific Solutions"
- Sub: "Explore our tailored support offerings across diverse sectors. From Education to Hospitality, we deliver specialized solutions to meet unique industry needs."
