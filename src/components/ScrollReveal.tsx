"use client";

import { useEffect, useRef, useState, useSyncExternalStore, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // in pixels
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getReducedMotionServer = () => false;

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServer
  );

  useEffect(() => {
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [reducedMotion]);

  const getTransform = () => {
    if (reducedMotion || isVisible) return "none";
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible || reducedMotion ? 1 : 0,
        transform: getTransform(),
        transitionDelay: reducedMotion ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
