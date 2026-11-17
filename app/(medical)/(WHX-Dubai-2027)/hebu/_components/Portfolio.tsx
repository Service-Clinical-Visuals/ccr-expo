"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";

interface Product {
  name: string;
  image: string;
}

// NOTE: the design labels the last three cards "Surgical instruments" as a
// placeholder – these names are best guesses from the images; replace if needed.
const PRODUCTS: Product[] = [
  { name: "Surgical instruments", image: "/medical/hebu/p1.webp" },
  { name: "HF surgery", image: "/medical/hebu/p2.webp" },
  { name: "Endoscopy", image: "/medical/hebu/p3.webp" },
  { name: "Container", image: "/medical/hebu/p4.webp" },
  { name: "Equipment trolley", image: "/medical/hebu/p5.webp" },
  { name: "Camera systems", image: "/medical/hebu/p6.webp" },
];

const AUTOPLAY_MS = 4500;

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href="#products"
      aria-label={product.name}
      className="group flex flex-col w-full h-full rounded-[6px] border border-[var(--border)] bg-white p-[2.9%] transition-[border-color,box-shadow] duration-300 hover:border-[var(--primary)] hover:shadow-[inset_0_0_0_1px_var(--primary)] focus:outline-none focus-visible:border-[var(--primary)] focus-visible:shadow-[inset_0_0_0_1px_var(--primary)]"
    >
      {/* Image: shrinks slightly on hover to make room for the CTA */}
      <div className="relative w-full aspect-[486/401] rounded-[6px] bg-[var(--card-bg)] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[0.94]"
        />
      </div>

      {/* Title area: centred by default; left-aligned with "View more" on hover */}
      <div className="relative flex-1 min-h-[6.5em] card-title">
        <p className="absolute inset-x-0 top-[1em] font-head font-medium text-[var(--heading)] text-center transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1 group-focus-visible:opacity-0">
          {product.name}
        </p>
        <div className="absolute inset-x-0 top-[1em] flex flex-col items-start gap-[0.8em] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
          <p className="font-head font-medium text-[var(--heading)]">{product.name}</p>
          <span className="btn-text font-head font-medium text-[var(--heading)] border border-[var(--heading)] rounded-[6px] px-[1em] py-[0.3em] transition-colors hover:bg-[var(--primary)] hover:border-[var(--primary)]">
            View more
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const total = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
    setPages(total);
    setPage(Math.min(total - 1, Math.round(el.scrollLeft / el.clientWidth)));
  }, []);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Autoplay through pages; pauses while hovered or focused.
  useEffect(() => {
    if (paused || pages <= 1) return;
    const id = setInterval(() => goTo((page + 1) % pages), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, pages, page, goTo]);

  return (
    <section id="products" className="w-full bg-white py-16 sm:py-20 xl:py-[3.4vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1000px] min-[1921px]:max-w-[52%] mx-auto mb-10 xl:mb-[2.5vw]" data-aos="fade-up">
          <Eyebrow className="mb-3 xl:mb-4">Explore Our Portfolio</Eyebrow>
          <h2 className="section-title font-head font-semibold text-[var(--heading)] mb-4 xl:mb-6">
            Comprehensive Medical Solutions Designed for Precision, Quality and Performance
          </h2>
          <p className="section-text font-body text-[var(--body)]">
            As a premium manufacturer of medical devices, HEBUmedical GmbH produces innovative products for specialist
            retailers and users. Solutions are developed and tested through decades of collaboration with physicians,
            surgeons, and scientists – always with the well-being and recovery of patients as the top priority
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            onScroll={measure}
            className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-[10px] xl:-mx-[0.95vw]"
          >
            {PRODUCTS.map((p) => (
              <div
                key={p.image}
                className="snap-start shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 px-[10px] xl:px-[0.95vw]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-8 xl:mt-9 min-h-[12px]">
            {pages > 1 &&
              Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={page === i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    page === i
                      ? "w-[12px] h-[12px] min-[2560px]:w-[20px] min-[2560px]:h-[20px] bg-[var(--primary)]"
                      : "w-[8px] h-[8px] min-[2560px]:w-[13px] min-[2560px]:h-[13px] bg-[var(--primary)]/40 hover:bg-[var(--primary)]/70"
                  }`}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
