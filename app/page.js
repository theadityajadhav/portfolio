"use client";
import { useEffect, useRef } from "react";
import Portfolio from "./Portfolio";

export default function Home() {
  const lenisRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    // Smooth, weighted scrolling on desktop. Touch screens and reduced-motion users keep native scrolling.
    let lenis, raf, cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      lenisRef.current = lenis;
      if (appRef.current) appRef.current.lenis = lenis;
      const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      // open the page at a #section if the link had one
      if (location.hash && appRef.current) setTimeout(() => appRef.current.go(location.hash.slice(1))(), 300);
    });
    return () => { cancelled = true; cancelAnimationFrame(raf); if (lenis) lenis.destroy(); };
  }, []);

  return (
    <main>
      <Portfolio onMount={(app) => { appRef.current = app; if (lenisRef.current) app.lenis = lenisRef.current; }} />
    </main>
  );
}
