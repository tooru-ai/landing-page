# whelp.co — Page Topology

Single landing page (`/`), Next.js Pages Router original, CSS Modules. Total height ~8187px at 1440px.
Body has `padding: 40px 0 0` and `background-color: var(--main)` = `#fefbf6`.

Layout wrapper: `.Layout_layout` (padding-top: 40px = body padding; navbar fixed on top).

| # | Section | Working name | Top (px) | Interaction model |
|---|---------|--------------|----------|-------------------|
| 0 | Navbar | `Navbar` | fixed, h=80 | scroll-driven: `scrolled` class when scrollY > 0 adds `border-bottom: 1px solid rgba(0,0,0,0.06)`; hover dropdowns (Product/Resources/Company) |
| 1 | Hero | `Hero` | 80 | time-driven: 3 floating overlay cards animate `downAndUp` 5s/6s/7s linear infinite; email input + Get Started |
| 2 | CRM feature | `CrmSection` (DualGrid, text left / img right) | 816 | static + Learn more button hover |
| 3 | Inbox feature | `InboxSection` (DualGrid, img left / text right) | 1464 | static |
| 4 | Reports feature | `ReportsSection` (DualGrid, text left / img right, `HomepageReports_wrapper`) | 2132 | static |
| 5 | Quote | `QuoteSection` (purple band `--wh-purple-5`) | 2852 | static |
| 6 | Outbound feature | `OutboundSection` (DualGrid, img left / text right, `HomepageOutbound_wrapper`) | 3336 | static |
| 7 | Chatbot feature | `ChatbotSection` (DualGrid, text left / img right) | 3976 | static |
| 8 | Why Whelp | `WhyWhelp` (black band, 3 stat cards) | 4583 | static |
| 9 | Solutions | `SolutionsSection` (heading + react-slick carousel) | 5159 | time-driven: slick autoplay, 285px/card step, 500ms ease transition, infinite, prev/next arrows; cards clickable |
| 10 | Features grid | `FeaturesGrid` (6 cards, 3×2) | 6071 | scroll-driven: staggered `fadeIn` 0.25s–1.5s forwards per card (triggered on view) |
| 11 | Integrations | `IntegrationsSection` (light-blue rounded panel) | 6855 | static; Learn more button |
| 12 | CTA / footer top | `FooterCta` (`Footer_topWrapper`, bg `--footer-bg` #f5f4ef) | 7371 | static; 2 buttons |
| 13 | Footer links | `Footer` (`Footer_bottomWrapper`) | 7747 | link hovers |
| 14 | Copyright | part of `Footer` (`Footer_copyRight`) | 8151 | social icons |
| — | Livechat launcher | `ChatLauncher` (fixed bottom-right dark circle) | fixed | third-party widget; replicate static launcher button only |

## Nav dropdown contents
- **Product**: Inbox `/inbox`, CRM `/crm`, Reporting `/reporting`, Chatbot `/chatbot`, Outbound `/outbound`, Integrations `/integrations` (each with a 20×20 icon)
- **Resources**: Blog `https://whelp.co/blog/`, Status `https://status.whelp.co/`
- **Pricing**: plain link `/pricing`
- **Company**: About `/about`, Contact `/contact`, Privacy policy `/privacy-policy`, Terms of service `/terms-of-service`
- **Request demo**: link
- Right: Sign In (flat), Get Started (black pill button)
- Menu: white, border-radius 24px, drop-shadow, arrow "tip" SVG at top center, opens on hover

## Source-of-truth artifacts
- `docs/research/whelp.co/styles-1.pretty.css` — design tokens (`--wh-*`), fonts, base
- `docs/research/whelp.co/styles-2.pretty.css` — ALL component CSS (CSS modules, readable names), incl. media queries + hover states
- `docs/research/whelp.co/page.html` — full SSR HTML (exact DOM structure)

## Z-index layers
- Navbar: 1000 (fixed), mobile menu 1001
- Nav dropdown: 10 within navbar stacking context
- Livechat launcher: fixed bottom right

## Breakpoints seen in CSS
- 1200px (container), 992px (grid collapse, mobile nav), 768px (spacing), 480px
