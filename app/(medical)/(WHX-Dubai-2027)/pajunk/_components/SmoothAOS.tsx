/**
 * SmoothAOS Component
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Lenis Smooth Scrolling:
 *    - Initializes Lenis with linear interpolation (`lerp: 0.08`) and smooth wheel scrolling.
 * 2. AOS (Animate On Scroll) Integration:
 *    - Initializes AOS with 1000ms duration, mirror enabled for scroll re-triggers, and ease-in-out easing.
 * 3. Event Loop Sync:
 *    - Connects Lenis scroll event to `AOS.refresh()` to keep animation triggers accurate during smooth scrolling.
 */
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothAOS() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync AOS with Lenis scroll
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

