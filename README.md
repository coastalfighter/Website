# CMC Group — Website Rebuild

A from-scratch rebuild of [cmcgroups.com](https://www.cmcgroups.com) — real copy and
brand assets, a fully custom WebGL hero, and hover-driven interactions throughout.

## Stack

- **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-native `@theme` tokens, no config file)
- **React Three Fiber** + **drei** + **postprocessing** — the 3D hero scene
- **Framer Motion** — reveals, magnetic buttons, count-up stats
- **Jest** + **React Testing Library** — unit tests

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint        # ESLint (flat config, eslint-config-next)
npm run typecheck   # tsc --noEmit
npm test            # Jest
```

Copy `.env.example` to `.env.local` before wiring the contact form to a real
email provider (see Milestone 4).

## Project structure

```
src/
├── app/                  # routes (App Router)
├── components/
│   ├── layout/           # Navbar, Footer, Logo
│   ├── hero/             # the WebGL hero: scene, camera rig, magnetic CTA
│   └── ui/                # small reusable primitives
├── data/site.ts          # real copy/content pulled from the live site
└── lib/                  # cn() helper, reduced-motion / WebGL hooks
```

## The hero

`src/components/hero/Hero.tsx` renders a full-viewport WebGL scene:

- **`NetworkCore`** — a refractive glass sphere (`MeshTransmissionMaterial`)
  lit by a small, fully self-contained `Lightformer` rig (no external HDRI
  fetch, so it never depends on a third-party CDN at runtime).
- **`SignalField`** — ~64 glowing "customer node" particles connected to
  their nearest neighbors by light-trails, drifting organically and
  parallaxing against the pointer.
- **`CameraRig`** — pointer parallax plus a scroll-scrubbed dolly (the hero
  section is 160vh tall and pinned via `position: sticky`, so scrolling the
  first screen's worth drives the camera instead of the page).
- The Canvas is lazy-loaded via `next/dynamic({ ssr: false })` and only
  mounted when `useIsWebglAvailable` and `!useReducedMotion` both hold;
  otherwise a CSS gradient scene is shown instead, so the hero degrades
  gracefully on unsupported devices and respects motion preferences.

## Assets

Real photos and partner/press logos were downloaded from the live site's
Webflow CDN into `public/images/`. The original logo export
(`cmc_logo-removebg-preview.png.svg`) turned out to be a broken asset — a
raster PNG wrapped in an SVG pattern at 10% opacity — so the header/footer
use a typographic wordmark (`components/layout/Logo.tsx`) instead.

## Roadmap

This is Milestone 1 of an agile build-out. Remaining milestones:

- **M2** — remaining home page sections (partner marquee, solution cards,
  testimonials, blog preview)
- **M3** — About, What We Do, Our Team pages
- **M4** — Blog index/post template, Contact page + form API route
- **M5** — expanded test coverage, accessibility pass, performance tuning,
  deployment notes
