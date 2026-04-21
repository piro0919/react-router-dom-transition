# react-router-dom-transition

> Route transition effects for react-router-dom (v5).

[🔗 npm](https://www.npmjs.com/package/react-router-dom-transition)

## 📦 Install

```bash
npm install react-router-dom-transition
```

## 🚀 Usage

```tsx
import { BrowserRouter, Route } from "react-router-dom";
import Transition from "react-router-dom-transition";

function App() {
  return (
    <BrowserRouter>
      <Transition>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Transition>
    </BrowserRouter>
  );
}
```

## 📌 Status

This package targets `react-router-dom` v5 and is no longer under active development. For modern React Router (v6+), see [the official transition docs](https://reactrouter.com/).

## 📄 License

MIT
