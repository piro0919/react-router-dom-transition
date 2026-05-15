"use client";

import { MemoryRouter, Routes, Route, NavLink } from "react-router-dom";
import { RouteTransition } from "@/components/RouteTransition";

function Page({ label, color }: { label: string; color: string }) {
  return <div style={{ color }}>{label}</div>;
}

function Demo({ duration }: { duration: number }) {
  return (
    <MemoryRouter initialEntries={["/red"]}>
      <div className="demo-nav">
        <NavLink to="/red" className={({ isActive }) => (isActive ? "active" : "")}>
          Red
        </NavLink>
        <NavLink to="/green" className={({ isActive }) => (isActive ? "active" : "")}>
          Green
        </NavLink>
        <NavLink to="/blue" className={({ isActive }) => (isActive ? "active" : "")}>
          Blue
        </NavLink>
      </div>
      <div className="demo-stage">
        <RouteTransition duration={duration}>
          <Routes>
            <Route path="/red" element={<Page label="Red Page" color="#f87171" />} />
            <Route path="/green" element={<Page label="Green Page" color="#34d399" />} />
            <Route path="/blue" element={<Page label="Blue Page" color="#60a5fa" />} />
          </Routes>
        </RouteTransition>
      </div>
    </MemoryRouter>
  );
}

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">react-router-dom-transition</h1>
      <p className="subtitle">Headless route transition wrapper for React Router v6/v7.</p>

      <section className="section">
        <h2>Default (300ms)</h2>
        <p>
          Wraps <code>&lt;Routes&gt;</code> with dual-layer rendering. CSS variables{" "}
          <code>--rrt-duration</code> / <code>--rrt-easing</code> drive the animation.
        </p>
        <Demo duration={300} />
      </section>

      <section className="section">
        <h2>Slower (800ms)</h2>
        <p>
          Just change <code>duration</code>. <code>data-action</code> reflects push/pop/replace.
        </p>
        <Demo duration={800} />
      </section>

      <a
        className="github-link"
        href="https://github.com/piro0919/react-router-dom-transition"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub →
      </a>
    </div>
  );
}
