# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**react-router-dom-transition** is a headless route transition wrapper for React Router v6/v7. v1.0.0 is a full rewrite of the legacy (2018) class-component / styled-components implementation that targeted React Router v4/v5.

- **npm package:** react-router-dom-transition
- **Demo site:** <https://react-router-dom-transition.kkweb.io>

## Tech Stack

- React 19 (peers: React 18 & 19)
- react-router-dom v6 & v7 (peer)
- TypeScript 5
- Next.js 16 (App Router) — demo site only
- tsup — library build (ESM + CJS + .d.ts)
- Vitest + @testing-library/react + jsdom — tests
- ESLint flat config + Prettier
- Lefthook + Renovate

## Project Structure

```text
src/
├── index.ts                                # npm entry
├── components/RouteTransition/
│   ├── index.ts
│   └── RouteTransition.tsx                 # main component ("use client")
└── app/                                    # Next.js demo
    ├── layout.tsx
    ├── page.tsx
    └── globals.css

tests/RouteTransition.test.tsx
public/icon.svg
```

## Commands

```bash
pnpm dev              # Next.js demo
pnpm build            # demo build
pnpm build:lib        # tsup → dist/
pnpm test
pnpm lint
pnpm typecheck
pnpm prepublishOnly   # lint + typecheck + test + build:lib
```

## Public API

```tsx
<RouteTransition duration={300} easing="ease" className="...">
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</RouteTransition>
```

- Wraps `<Routes>` (or any element that accepts a `location` prop).
- Renders two layers during transition; both receive cloned `location` props.
- Exposes `data-state="idle"|"animating"`, `data-action="push"|"pop"|"replace"`, `data-rrt-layer="prev"|"current"`.
- CSS variables `--rrt-duration` and `--rrt-easing` are set on the wrapper.

## Publishing Notes

- `files: ["dist", "README.md", "LICENSE"]` — demo is not published to npm.
- v1.0.0 is a breaking change vs 0.x; the v4/v5 API (`withRouter`, etc.) is gone.
- `react-router-dom-transition2` is a parallel legacy package; do not confuse with this one.
