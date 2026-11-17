"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { CenteredHeading } from "./SectionHeading";

interface Product {
  name: string;
  text: string;
  image: string;
}

// NOTE: only the first four products are confirmed by the design; p5–p12 are
// placeholders – replace their names and descriptions with the real ones.
const PRODUCTS: Product[] = [
  {
    name: "PFNA Nailing System Instrument Set",
    text: "Includes Essential Instruments For Nail Insertion, Guided Drilling, Blade Placement And Locking, Arranged In Removable Trays For Easy Handling And Storage.",
    image: "/medical/winfo/p1.webp",
  },
  {
    name: "Pelvic Reduction Instrument Set",
    text: "Includes Reduction Forceps And Supporting Instruments For Pelvic Fracture Alignment, Organized In Trays For Easy Access And Storage.",
    image: "/medical/winfo/p2.webp",
  },
  {
    name: "Transforaminal Lumbar Interbody Fusion (TLIF) Instrument Set",
    text: "Includes Essential Instruments For Disc Preparation, Implant Sizing And Cage Insertion.",
    image: "/medical/winfo/p3.webp",
  },
  {
    name: "ACL_PCL Reconstruction Instrument Set",
    text: "Includes Essential Instruments For Graft Sizing And Tunnel Positioning, Organized In A Dedicated Tray For Easy Access And Storage.",
    image: "/medical/winfo/p4.webp",
  },
  ...[5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({
    name: `Orthopaedic Instrument Set ${n - 4}`,
    text: "Precision-Engineered Instruments For Modern Orthopaedic And Spinal Procedures, Organized For Easy Access And Storage.",
    image: `/medical/winfo/p${n}.webp`,
  })),
];

const AUTOPLAY_MS = 4500;

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="arch-card group relative h-full flex flex-col items-center text-center bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-[9%] pt-[12%] pb-[14%] transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
      <div className="w-full aspect-[249/234] flex items-center justify-center mb-4 xl:mb-[0.9vw]">
        <img
          src={product.image}
          alt={product.name}
          draggable={false}
          className="max-w-[80%] max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="product-title font-head font-semibold text-[var(--heading)] mb-3 xl:mb-[0.8vw] max-w-[82%]">
        {product.name}
      </h3>
      <p className="card-text font-body text-[var(--body)] flex-1 mb-5 xl:mb-[1.2vw]">{product.text}</p>
      <Button href="#contact" ariaLabel={`View ${product.name}`}>
        View Product
      </Button>
    </article>
  );
}

export default function Products() {
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
    <section id="products" className="w-full bg-white section-py">
      <div className="custom-container">
        <CenteredHeading
          eyebrow="Find More Orthopaedic Instruments"
          title="Our Knowledge of Orthopaedics"
          text="Orthopaedic Manufacturing Improves Quality Of Life Through Continuous Research, Innovation And The Development Of Advanced Implants And Instruments. Our Focus Is On Making Modern Orthopaedic Care More Accessible, Reliable And Effective."
          className="mb-8 xl:mb-[2.4vw]"
        />
      </div>

      {/* Carousel */}
      <div
        className="relative"
        data-aos="fade-up"
        data-aos-delay="150"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Magenta line running behind the cards, edge to edge */}
        <span aria-hidden className="absolute left-0 right-0 top-[52%] h-[clamp(3px,0.16vw,6px)] bg-[var(--primary)] z-0" />

        <div className="custom-container relative z-10">
          <div
            ref={trackRef}
            onScroll={measure}
            className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth py-5 -mx-[12px] xl:-mx-[1.05vw]"
          >
            {PRODUCTS.map((p) => (
              <div
                key={p.image}
                className="snap-start shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 px-[12px] xl:px-[1.05vw]"
              >
                <div className="max-w-[420px] sm:max-w-none mx-auto h-full">
                  <ProductCard product={p} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-[clamp(10px,0.75vw,28px)] mt-10 xl:mt-[3.2vw] min-h-[14px]">
        {pages > 1 &&
          Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={page === i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer w-[clamp(11px,0.7vw,28px)] h-[clamp(11px,0.7vw,28px)] ${
                page === i ? "bg-[var(--primary)] scale-125" : "bg-[#555555] hover:bg-[var(--primary)]/70"
              }`}
            />
          ))}
      </div>
    </section>
  );
}
