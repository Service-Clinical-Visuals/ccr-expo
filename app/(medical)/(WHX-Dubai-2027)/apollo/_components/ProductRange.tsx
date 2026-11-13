"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";

type Category = "dynamic" | "hybrid" | "cushions";

interface Product {
  name: string;
  image: string;
  category: Category;
}

// NOTE: only the first product name is confirmed by the design; the others are
// placeholders – replace them with the real product names.
const PRODUCTS: Product[] = [
  { name: "Apollo Aura II Turning Low Air Loss System", image: "/medical/apollo/dp1.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 2", image: "/medical/apollo/dp2.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 3", image: "/medical/apollo/dp3.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 4", image: "/medical/apollo/dp4.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 5", image: "/medical/apollo/dp5.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 6", image: "/medical/apollo/dp6.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 7", image: "/medical/apollo/dp7.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 8", image: "/medical/apollo/dp8.webp", category: "dynamic" },
  { name: "Apollo Dynamic Mattress System 9", image: "/medical/apollo/dp9.webp", category: "dynamic" },
  { name: "Apollo Hybrid Mattress 1", image: "/medical/apollo/hp1.webp", category: "hybrid" },
  { name: "Apollo Hybrid Mattress 2", image: "/medical/apollo/hp2.webp", category: "hybrid" },
  { name: "Apollo Dynamic Cushion 1", image: "/medical/apollo/dcp1.webp", category: "cushions" },
  { name: "Apollo Dynamic Cushion 2", image: "/medical/apollo/dcp2.webp", category: "cushions" },
  { name: "Apollo Dynamic Cushion 3", image: "/medical/apollo/dcp3.webp", category: "cushions" },
];

const TABS: { key: Category | "all"; label: string }[] = [
  { key: "dynamic", label: "Dynamic mattress" },
  { key: "hybrid", label: "Hybrid Mattresses" },
  { key: "cushions", label: "Dynamic Cushions" },
  { key: "all", label: "View All" },
];

const AUTOPLAY_MS = 4500;

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href="#products"
      aria-label={product.name}
      className="group relative block w-full aspect-[516/458] rounded-[6px] border border-[var(--border)] bg-white overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
    >
      <img
        src={product.image}
        alt={product.name}
        draggable={false}
        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center px-[12%] bg-black/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500">
        <p className="product-name font-head font-medium text-white text-center translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          {product.name}
        </p>
      </div>
    </Link>
  );
}

export default function ProductRange() {
  const [tab, setTab] = useState<Category | "all">("dynamic");
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = tab === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === tab);

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

  // Reset to the first page whenever the category changes.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    setPage(0);
    measure();
  }, [tab, measure]);

  useEffect(() => {
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
    <section id="products" className="w-full bg-white py-16 sm:py-20 xl:py-[4.2vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1100px] min-[1921px]:max-w-[60%] mx-auto mb-8 xl:mb-10" data-aos="fade-up">
          <Eyebrow className="mb-4 xl:mb-5">Our Product Range</Eyebrow>
          <h2 className="section-title font-head font-bold text-[var(--heading)] mb-4">
            Complete Healthcare Solutions For Every Patient Care Need
          </h2>
          <p className="section-text font-inter text-[var(--body)]">
            Explore our comprehensive range of innovative healthcare products, thoughtfully designed to enhance patient
            comfort, improve safety and support healthcare professionals in delivering exceptional care.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Product categories"
          className="flex flex-wrap justify-center gap-3 xl:gap-[1vw] mb-10 xl:mb-[2.6vw]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.key)}
                className={`btn-text font-head font-semibold rounded-[6px] border border-[var(--primary)] px-[1.4em] py-[0.45em] transition-colors duration-300 cursor-pointer ${
                  active
                    ? "bg-[var(--primary)] text-white"
                    : "bg-white text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
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
            {items.map((p) => (
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
