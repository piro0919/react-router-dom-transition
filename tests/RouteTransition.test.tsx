import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { RouteTransition } from "../src";

function App({ duration = 100 }: { duration?: number }) {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </nav>
      <RouteTransition duration={duration}>
        <Routes>
          <Route path="/" element={<p>home page</p>} />
          <Route path="/about" element={<p>about page</p>} />
        </Routes>
      </RouteTransition>
    </MemoryRouter>
  );
}

describe("RouteTransition", () => {
  it("renders current route in idle state", () => {
    render(<App />);
    expect(screen.getByText("home page")).toBeInTheDocument();
    const wrapper = document.querySelector("[data-route-transition]");
    expect(wrapper).toHaveAttribute("data-state", "idle");
  });

  it("renders both layers during transition", async () => {
    const user = userEvent.setup();
    render(<App duration={5000} />);
    await user.click(screen.getByRole("link", { name: "about" }));

    expect(screen.getByText("home page")).toBeInTheDocument();
    expect(screen.getByText("about page")).toBeInTheDocument();

    const wrapper = document.querySelector("[data-route-transition]");
    expect(wrapper).toHaveAttribute("data-state", "animating");
    expect(wrapper).toHaveAttribute("data-action", "push");

    expect(document.querySelector('[data-rrt-layer="prev"]')).toBeInTheDocument();
    expect(document.querySelector('[data-rrt-layer="current"]')).toBeInTheDocument();
  });

  it("removes prev layer after duration", async () => {
    const user = userEvent.setup();
    render(<App duration={50} />);
    await user.click(screen.getByRole("link", { name: "about" }));
    expect(screen.getByText("home page")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.queryByText("home page")).toBeNull();
      },
      { timeout: 1000 },
    );
    expect(screen.getByText("about page")).toBeInTheDocument();
    const wrapper = document.querySelector("[data-route-transition]");
    expect(wrapper).toHaveAttribute("data-state", "idle");
  });

  it("exposes CSS variables for duration and easing", () => {
    render(<App duration={250} />);
    const wrapper = document.querySelector<HTMLElement>("[data-route-transition]")!;
    expect(wrapper.style.getPropertyValue("--rrt-duration")).toBe("250ms");
    expect(wrapper.style.getPropertyValue("--rrt-easing")).toBe("ease");
  });

  it("accepts className", () => {
    render(
      <MemoryRouter>
        <RouteTransition className="custom-wrapper">
          <Routes>
            <Route path="/" element={<p>home</p>} />
          </Routes>
        </RouteTransition>
      </MemoryRouter>,
    );
    expect(document.querySelector("[data-route-transition]")).toHaveClass("custom-wrapper");
  });

  it("throws when child is not a single React element", () => {
    expect(() =>
      render(
        <MemoryRouter>
          <RouteTransition>plain text</RouteTransition>
        </MemoryRouter>,
      ),
    ).toThrow();
  });
});
