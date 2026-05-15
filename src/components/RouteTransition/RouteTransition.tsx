"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { useLocation, useNavigationType, type Location } from "react-router-dom";

export type RouteTransitionProps = {
  children: ReactNode;
  duration?: number;
  easing?: string;
  className?: string;
};

type ChildWithLocation = ReactElement<{ location?: Location }>;

export function RouteTransition({
  children,
  duration = 300,
  easing = "ease",
  className,
}: RouteTransitionProps) {
  const location = useLocation();
  const navigationType = useNavigationType();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [prevLocation, setPrevLocation] = useState<Location | null>(null);
  const [action, setAction] = useState<"push" | "pop" | "replace" | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const displayKeyRef = useRef(location.key);

  useEffect(() => {
    if (location.key === displayKeyRef.current) return;

    if (timerRef.current !== null) clearTimeout(timerRef.current);

    setPrevLocation((prev) => prev ?? displayLocation);
    setDisplayLocation(location);
    setAction(navigationType.toLowerCase() as "push" | "pop" | "replace");
    displayKeyRef.current = location.key;

    timerRef.current = setTimeout(() => {
      setPrevLocation(null);
      setAction(null);
      timerRef.current = null;
    }, duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, navigationType, duration]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
  }, []);

  const child = Children.only(children);
  if (!isValidElement(child)) {
    throw new Error("<RouteTransition> expects a single React element child (e.g. <Routes>).");
  }
  const routesChild = child as ChildWithLocation;

  const animating = prevLocation !== null;
  const style: CSSProperties = {
    position: "relative",
    "--rrt-duration": `${duration}ms`,
    "--rrt-easing": easing,
  } as CSSProperties;

  return (
    <div
      data-route-transition=""
      data-state={animating ? "animating" : "idle"}
      data-action={action ?? undefined}
      className={className}
      style={style}
    >
      {animating && prevLocation ? (
        <div data-rrt-layer="prev" data-state="leaving">
          {cloneElement(routesChild, { location: prevLocation })}
        </div>
      ) : null}
      <div data-rrt-layer="current" data-state={animating ? "entering" : "idle"}>
        {cloneElement(routesChild, { location: displayLocation })}
      </div>
    </div>
  );
}
