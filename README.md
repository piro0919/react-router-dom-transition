# react-router-dom-transition

> Headless route transition wrapper for React Router v6/v7.

[![npm](https://img.shields.io/npm/v/react-router-dom-transition.svg)](https://www.npmjs.com/package/react-router-dom-transition)
[![license](https://img.shields.io/npm/l/react-router-dom-transition.svg)](./LICENSE)

A small, dependency-free transition wrapper for `<Routes>`. Renders the previous and current matches during navigation, exposes CSS data attributes and variables, and stays out of the way of your animation choices.

🌐 **Demo:** <https://react-router-dom-transition.kkweb.io>

## Install

```bash
npm install react-router-dom-transition
# or
pnpm add react-router-dom-transition
```

Requires React 18 / 19 and react-router-dom v6 or v7.

## Usage

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouteTransition } from "react-router-dom-transition";

export function App() {
  return (
    <BrowserRouter>
      <RouteTransition duration={300}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </RouteTransition>
    </BrowserRouter>
  );
}
```

Style transitions via CSS using the data attributes:

```css
[data-route-transition] [data-rrt-layer] {
  transition:
    transform var(--rrt-duration) var(--rrt-easing),
    opacity var(--rrt-duration) var(--rrt-easing);
}

[data-route-transition][data-state="animating"][data-action="push"] [data-rrt-layer="prev"] {
  transform: translateX(-30%);
  opacity: 0;
}
```

## API

### `<RouteTransition>`

| Prop        | Type      | Default  | Description                                                      |
| ----------- | --------- | -------- | ---------------------------------------------------------------- |
| `children`  | `Element` | —        | A single element that accepts `location` (typically `<Routes>`). |
| `duration`  | `number`  | `300`    | Animation duration in ms.                                        |
| `easing`    | `string`  | `"ease"` | CSS easing function.                                             |
| `className` | `string`  | —        | Class for the wrapper.                                           |

### Data attributes & CSS variables

On the wrapper element:

- `data-state="idle" | "animating"`
- `data-action="push" | "pop" | "replace"` (only during animation)
- `--rrt-duration` (ms)
- `--rrt-easing`

On each child layer:

- `data-rrt-layer="prev" | "current"`
- `data-state="leaving" | "entering" | "idle" | "hidden"`

## License

MIT
