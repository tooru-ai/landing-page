# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** scroll-driven (border) + hover-driven (dropdown menus) + click (mobile hamburger)

## DOM Structure
```
div.Navbar_wrapper (+ .closed when mobile menu closed, + .scrolled when scrollY > 0)
└─ Container.Navbar_navbarContainer
   └─ div.Navbar_inner
      ├─ div.Navbar_linksWrapper
      │  ├─ a[href="/"] > Navbar_logo > Navbar_logoInner > WhelpLogo svg (126×28)
      │  └─ div.Navbar_links (grid, 5 columns)
      │     ├─ dropdownWrapper: Product (chevron) → menu with 6 icon links
      │     ├─ dropdownWrapper: Resources (chevron) → menu: Blog, Status
      │     ├─ dropdownWrapper: Pricing (no chevron, link /pricing)
      │     ├─ dropdownWrapper: Company (chevron) → menu: About, Contact, Privacy policy, Terms of service
      │     └─ dropdownWrapper: Request demo (link /request-demo)
      ├─ div.Navbar_buttons: Sign In (flat) + Get Started (black, ml-8px) → hidden ≤1200px
      └─ div.Navbar_hamburger: hidden >1200px, hamburger-react 48×48
```

## Computed Styles
- wrapper: `position:fixed!important; top:0; left:0; z-index:1000; display:flex; align-items:center; width:100%; background:var(--main); height:80px` (64px ≤768px)
- wrapper.scrolled.closed: `border-bottom:1px solid rgba(0,0,0,0.06)`
- logoInner svg: 126×28
- links: `display:grid; grid-template-columns:repeat(5,minmax(min-content,60px)); margin-left:48px; gap:16px` — hidden ≤1200px
- dropdown trigger: `cursor:pointer; padding:4px 8px; display:flex; align-items:center`
- trigger text: Poppins 16px, inline `font-weight:400`, `.Navbar_text` forces `font-weight:500!important`?? — CSS `!important` wins → weight 500; margin-right 4px when chevron present
- menu: `background:#fff; position:absolute; box-shadow:0 0 0 1px #e9ebed; filter:drop-shadow(0 16px 40px rgba(0,0,0,0.28)); border-radius:24px; top:56px; left:50%; translateX(-50%); padding:12px` inside `dropdownWrapper (position:relative; z-index:10)`
- menu tip: MenuTipIcon 20×8 white, `position:absolute; top:0; left:50%; transform:translate(-50%,-14px)`
- menu item (`Navbar_link`): `display:flex; align-items:center; padding:12px; border-radius:12px`; hover `bg:var(--wh-neutral-0)`; active `bg:var(--wh-steel-0)`; icon 20×20 currentColor; text `margin-left:12px; white-space:nowrap` Poppins 16px w500
- buttons: Sign In flat variant, Get Started black variant, both h48 px-24 py-12 radius 60px; Get Started ml-8px

## States & Behaviors
- **Scroll:** scrollY > 0 → add bottom border (see wrapper.scrolled). No transition needed (subtle).
- **Dropdown:** opens on mouseenter of dropdownWrapper, closes on mouseleave. No animation observed (instant).
- **Mobile (≤1200px):** links + buttons hidden, hamburger shown. Click toggles full-screen menu `Navbar_navbarSmall`: fixed, top:64px, h:calc(100vh-64px), w:100vw, bg var(--main), padding 8px 24px, column, overflow-y auto, z-1001. Items: `Navbar_smallItemWrapper` padding 16px 0, border-bottom 1px rgba(0,0,0,0.06), text 20px w500, chevron at right (`margin-left:auto`). Expanding an item reveals `Navbar_navigationMenu` (accordion) with same menu items.

## Menu content (verbatim)
- Product: Inbox `/inbox` (InboxIcon), CRM `/crm` (UsersIcon), Reporting `/reporting` (ReportingIcon), Chatbot `/chatbot` (ChatbotIcon), Outbound `/outbound` (SendIcon), Integrations `/integrations` (IntegrationsIcon) — icons 20×20
- Resources: Blog `https://whelp.co/blog/`, Status `https://status.whelp.co/`
- Pricing: `/pricing` (plain link, no menu)
- Company: About `/about`, Contact `/contact`, Privacy policy `/privacy-policy`, Terms of service `/terms-of-service`
- Request demo: `/request-demo` (plain link)
- Sign In → `https://web.whelp.co/`; Get Started → `https://web.whelp.co/signup`

## Responsive
- ≤1200px: hamburger mode. ≤768px: navbar height 64px, container padding-right 12px.
