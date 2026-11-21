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

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    // Sync AOS with Lenis scroll
    lenis.on("scroll", () => {
      AOS.refresh();
    });

    // Same-page links never reload: "#id" scrolls smoothly to the section (below the fixed
    // header), while empty/"#" placeholder links do nothing. Links whose click was already
    // handled (e.g. the header nav) and real URLs, tel: and mailto: are left alone.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link || link.target === "_blank") return;
      const href = link.getAttribute("href");
      if (href === null) return;
      const value = href.trim();
      if (value !== "" && !value.startsWith("#")) return;

      e.preventDefault();
      const id = value.slice(1);
      if (!id) return;
      if (id === "home") {
        lenis.scrollTo(0);
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      const headerH = document.querySelector("header")?.offsetHeight ?? 80;
      lenis.scrollTo(target, { offset: -headerH });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
