"use client";

import { useState, useRef, useSyncExternalStore, ReactNode, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default: 8)
  scaleOnHover?: number; // scale factor (default: 1.02)
  glare?: boolean;
}

const subscribePointerQuery = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mqlPointer = window.matchMedia("(pointer: fine)");
  const mqlMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  mqlPointer.addEventListener("change", callback);
  mqlMotion.addEventListener("change", callback);
  return () => {
    mqlPointer.removeEventListener("change", callback);
    mqlMotion.removeEventListener("change", callback);
  };
};

const getPointerSnapshot = () => {
  if (typeof window === "undefined") return false;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return finePointer && !reducedMotion;
};

const getPointerServer = () => false;

export default function TiltCard({
  children,
  className = "",
  maxTilt = 7,
  scaleOnHover = 1.015,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });

  const isSupported = useSyncExternalStore(
    subscribePointerQuery,
    getPointerSnapshot,
    getPointerServer
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isSupported || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, 1)`
    );

    if (glare) {
      setGlareStyle({
        opacity: 0.18,
        x: Math.round((x / rect.width) * 100),
        y: Math.round((y / rect.height) * 100),
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isSupported) return;
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle || undefined,
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {glare && isSupported && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle 280px at ${glareStyle.x}% ${glareStyle.y}%, rgba(56, 189, 248, 0.25), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
