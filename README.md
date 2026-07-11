# Landing Page

A marketing/landing website built with Next.js 16, React 19, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict
- **shadcn/ui** — Radix primitives + Tailwind CSS v4
- **Tailwind CSS v4** — oklch design tokens
- **Lucide React** + custom SVG icon components

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint check
npm run typecheck # TypeScript check
npm run check     # Run lint + typecheck + build
```

### Docker

```bash
docker compose up app --build # build and run the app
docker compose up dev --build # run the app in dev mode on port 3001
```

## Project Structure

```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # SVG icons as React components
  data/             # Page content data
  lib/utils.ts      # cn() utility
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Site images
  videos/           # Site videos
  seo/              # Favicons, OG images
```

## License

MIT
