"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const currentProgress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
          setProgress(currentProgress);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 transition-transform duration-75 ease-out origin-left shadow-[0_0_12px_rgba(56,189,248,0.6)]"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
