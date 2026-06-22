# Small Giants

**The modern school for entrepreneurs.** Built independently as part of an application for the **Content & Growth Associate** role at Small Giants — a contribution, not a pitch to reinvent the company.

This is a full Next.js application, not a mockup. Every section is real: real copy, real components, real scroll-linked motion. The site argues its own case by being the thing it describes — a piece of founder-first content, produced AI-natively, shipped end to end.

---

## Run it

```bash
cd small-giants
npm install      # installs Next, React, Framer Motion, GSAP, Tailwind
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

Requirements: Node 18.17+ (tested on Node 22). No environment variables, no API keys, no database. Fonts load from Google Fonts at runtime; everything else is self-contained.

> Note on verification: the import/export graph, JSX and structure of all source files were validated programmatically (0 errors, 0 imbalances, all client/server boundaries correct). A full `next build` was not run in the authoring sandbox because package installation was network-limited there — run `npm run build` locally to confirm TypeScript + lint pass.

## Deploy to Vercel

1. Push the `small-giants` folder to a Git repo.
2. Import it at vercel.com — the framework is auto-detected (Next.js), no config needed.
3. Set the production domain, then update `SITE_URL` in `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts` to match (currently `https://small-giants.vercel.app`).

SEO is wired via the App Router: `app/layout.tsx` (title, description, canonical, Open Graph, Twitter card, `metadataBase`), `app/opengraph-image.png` + `app/twitter-image.png` (social cards), `app/icon.svg` + `app/apple-icon.png` (favicons), and `app/robots.ts` + `app/sitemap.ts`.

---

## The narrative (information architecture)

The site is designed as a **scroll, not a sitemap**. It's a single page that tells one argument from top to bottom:

| # | Section | Job it does | Signature interaction |
|---|---------|-------------|-----------------------|
| — | **Hero** | State the promise | Scroll-linked headline that lifts and fades into the story; count-up stats |
| — | **Marquee** | Set the tone | Infinite CSS marquee of brand phrases |
| 01 | **Why Small Giants Exists** | Earn the premise | Pinned 5-panel sequence that cross-fades as you scroll |
| 02 | **The Founder Operating System** | Show the curriculum | Sticky vertical card stack (8 disciplines) that recedes as it stacks |
| 03 | **The Content Engine** | Prove it compounds | Interactive circular flywheel; tap a node to expand it |
| 04 | **The Entrepreneur Library** | Show the platform | Category-driven content discovery with staggered reveals |
| 05 | **Build in Public** | Build trust | Vertical timeline with a spine that fills on scroll (Day 1 → Day 365) |
| 06 | **The AI Layer** | Demonstrate AI-native thinking | Agent constellation with animated information flow |
| 07 | **How This Website Was Built** | The differentiator | The page as a case study + AI-collaboration cards |
| 08 | **If I Joined The Sprint** | Close the deal | 8-week execution plan: four pillars to ship 200+ pieces |
| — | **Footer / Join** | Call to action | Direct line to start the conversation |

---

## Design system

**Positioning of the visual language:** high-contrast editorial meets startup-native. Think Linear's restraint, Stripe's precision, Every's editorial voice. One accent colour, used sparingly, so it always means something.

**Palette** (`tailwind.config.ts`)
- `ink` — near-black canvas (`#0A0A0B`) with `800/700/600` surface steps
- `paper` / `bone` — warm off-white for inverted sections (Library, Roadmap)
- `signal` — a single electric-lime accent (`#E8FF59`). Deliberately rationed.
- `mute` / `mute-dim` — secondary and tertiary text

**Type**
- `Inter` for UI and display (900-weight headlines)
- `Newsreader` serif, italic, for founder insights and pull-quotes
- `JetBrains Mono` for labels, indices and metadata
- Fluid `clamp()` scales: `text-hero`, `text-display`, `text-title`

**Motion**
- One shared easing curve, `cubic-bezier(0.16, 1, 0.3, 1)`, reused everywhere so the whole site moves with one personality
- Primitives centralised in `lib/motion.ts` (`fadeUp`, `stagger`, `clipReveal`, …)
- `prefers-reduced-motion` is respected globally (animations collapse to instant)

**Texture:** a subtle SVG film-grain overlay (`.grain`) and a single soft accent glow add depth without gradients or stock imagery.

---

## Motion & interaction inventory

Built per the brief, kept restrained:

- Scroll-linked hero headline (parallax + fade + scale)
- Pinned, cross-fading panel sequence (Why We Exist)
- Sticky stacking cards (Founder OS)
- Interactive SVG flywheel with rotating rings (Content Engine)
- Staggered category reveals (Library)
- Scroll-driven progress spine (Build in Public)
- Animated particle flow between agents (AI Layer)
- Count-up statistics, infinite marquee, reading-progress bar
- Hover micro-interactions and section-to-section transitions throughout

---

## Component structure

```
small-giants/
├── app/
│   ├── layout.tsx          # metadata, fonts, root shell
│   ├── page.tsx            # section composition
│   └── globals.css         # design tokens, grain, scroll-snap, reduced-motion
├── components/
│   ├── Navbar.tsx          ScrollProgress.tsx   Marquee.tsx   Footer.tsx
│   ├── Hero.tsx            WhyWeExist.tsx        FounderOS.tsx
│   ├── ContentEngine.tsx   Library.tsx           BuildInPublic.tsx
│   ├── AILayer.tsx         HowItWasBuilt.tsx     Roadmap.tsx
│   └── ui/
│       ├── SectionLabel.tsx
│       └── AnimatedStat.tsx
└── lib/
    ├── content.ts          # single source of truth for ALL copy
    └── motion.ts           # shared animation primitives
```

**Why `content.ts` matters:** every word on the site lives in one typed file, separated from presentation. That's the content-ops instinct — copy you can edit, version and reuse without touching components. It's also how you'd wire this to a CMS or the AI content engine described in Section 6.

---

## Responsiveness, accessibility & production hardening

Optimised for 320 / 375 / 390 / 414 / 768 / 1024 / 1440px+ with no horizontal overflow, clipping or content collisions. Desktop interactions are untouched.

- **Mobile nav** — hamburger opens a slide-in drawer with an overlay backdrop, close button, Escape-to-close, body scroll-lock and focus handling (focus moves into the drawer, returns to the trigger on close).
- **Founder OS** — desktop keeps the sticky stacking cards; below `md` it becomes a touch-friendly horizontal snap carousel.
- **Content Engine** — on mobile the flywheel nodes render as compact dots with 44px hit areas (labels via the hub + legend), so nothing crops or collides; full pills on desktop.
- **AI Layer** — desktop constellation is unchanged; below `lg` it switches to a dedicated vertical agent flow (Research ↓ … ↓ Analytics) and the looping particle animations are switched off entirely.
- **Reduced mobile motion** — hero parallax distance, glow blur radius and transform intensity are dialled back on small screens; `prefers-reduced-motion` collapses animation globally.
- **Touch targets** — interactive controls meet the 44px minimum with comfortable spacing.
- **Accessibility** — skip-to-content link, visible `:focus-visible` rings, semantic landmarks (`<nav aria-label>`, `<main id="main">`, `<ol>` for the flow), `aria-expanded`/`aria-pressed`/`aria-modal` states, and tightened text contrast (mute tones nudged to pass AA).
- **Overflow guards** — `max-width:100%` on root, section-level `scroll-margin`/`scroll-padding` so anchored sections clear the fixed header.

Responsive logic lives in `lib/useMediaQuery.ts` (`useIsMobile`, `useIsCompact`) — SSR-safe (returns desktop default on first paint, so mobile never flashes and there's no hydration mismatch).

## Performance notes

- Server components by default; `"use client"` only where interaction demands it
- Animations are transform/opacity-based and GPU-friendly (`will-change` where it earns it)
- No image payloads — the design is type, layout and motion
- `next/font`-free, minimal dependencies, semantic HTML and accessible controls

---

*Built independently as part of an application for the Content & Growth Associate role at Small Giants, 2026.*
