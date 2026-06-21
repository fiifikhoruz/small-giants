# Small Giants

**The modern school for entrepreneurs.** A website concept built as a job application for the **Content & Growth Associate** role.

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

> Note on verification: the import/export graph and JSX of all 22 source files were validated programmatically (0 errors). A full `next build` was not run in the authoring sandbox because package installation was network-limited there — run `npm run build` locally to confirm.

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
| 08 | **If I Joined Tomorrow** | Close the deal | A real 30/60/90 day execution roadmap |
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

## Performance notes

- Server components by default; `"use client"` only where interaction demands it
- Animations are transform/opacity-based and GPU-friendly (`will-change` where it earns it)
- No image payloads — the design is type, layout and motion
- `next/font`-free, minimal dependencies, semantic HTML and accessible controls

---

*A concept by a Content & Growth Associate candidate, 2026.*
