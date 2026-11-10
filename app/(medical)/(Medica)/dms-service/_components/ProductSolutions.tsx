"use client";

import React, { useState } from "react";
import Link from "next/link";

type Category = "electrodes" | "holter";

interface Product {
  title: string;
  image: string;
  href: string;
}

// NOTE: Holter Recorder images below are stand-ins until the real
// MyPatch®Sl / Pediatric / VX3+ / DMS 300-7 product shots are added.
const PRODUCTS: Record<Category, Product[]> = {
  electrodes: [
    { title: "T Electrode", image: "/medical/dms-service/p1.webp", href: "#" },
    { title: "Adult", image: "/medical/dms-service/p2.webp", href: "#" },
    { title: "Pediatric", image: "/medical/dms-service/p3.webp", href: "#" },
    { title: "Neonate", image: "/medical/dms-service/p4.webp", href: "#" },
  ],
  holter: [
    { title: "MyPatch®Sl", image: "/medical/dms-service/about.webp", href: "#" },
    { title: "Pediatric", image: "/medical/dms-service/p3.webp", href: "#" },
    { title: "VX3+", image: "/medical/dms-service/p2.webp", href: "#" },
    { title: "DMS 300-7", image: "/medical/dms-service/p4.webp", href: "#" },
  ],
};

const TABS: { key: Category; label: string }[] = [
  { key: "electrodes", label: "Electrodes" },
  { key: "holter", label: "Holter Recorders" },
];

function ShareArrow() {
  return (
    <svg viewBox="0 0 24 24" className="w-[45%] h-[45%]" fill="currentColor" aria-hidden>
      <path d="M14 5v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7-7-7z" />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className="group relative flex flex-col bg-white rounded-br-[70px] xl:rounded-br-[90px] shadow-[0_4px_14px_rgba(0,0,0,0.14)] hover:shadow-[0_8px_24px_rgba(41,151,170,0.18)] overflow-hidden aspect-[390/455] focus:outline-none transition-all duration-300"
    >
      {/* Cyan corner accent (expands on hover) */}
      <span aria-hidden className="product-corner absolute inset-0 z-20 bg-[var(--primary)] pointer-events-none" />

      <div className="relative z-10 flex-1 flex items-center justify-center px-[10%] pt-[12%] pb-[4%] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4 px-[11%] pb-[11%]">
        <h3 className="card-title font-mulish font-medium text-[var(--heading)] transition-colors duration-300 group-hover:text-[var(--primary)]">{product.title}</h3>
        <span className="flex-shrink-0 w-[clamp(44px,3.1vw,120px)] aspect-square rounded-full bg-[var(--primary)] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-[-15deg] group-hover:scale-105 shadow-sm">
          <ShareArrow />
        </span>
      </div>
    </Link>
  );
}

export default function ProductSolutions() {
  const [active, setActive] = useState<Category>("electrodes");

  return (
    <section id="products" className="w-full bg-white py-16 sm:py-20 xl:py-24">
      <style>{`
        .product-corner {
          clip-path: polygon(100% 0, 100% 20%, 94% 15%, 94% 5.5%, 80% 5.5%, 75% 0);
          transition: clip-path 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: clip-path;
        }
        .group:hover .product-corner,
        .group:focus-visible .product-corner {
          clip-path: polygon(100% 0, 100% 74%, 87% 66%, 87% 9%, 25% 9%, 18% 0);
        }
      `}</style>
      <div className="custom-container">
        <div className="text-center max-w-[1100px] min-[2560px]:max-w-[60%] mx-auto mb-8 xl:mb-10" data-aos="fade-up">
          <p className="eyebrow font-mulish font-medium text-[var(--primary)] mb-3">Our Products</p>
          <h2 className="section-title font-mulish font-bold text-[var(--heading)] mb-5">
            Advanced Solutions For Smarter Cardiac Monitoring
          </h2>
          <p className="section-text font-inter text-[#333333]">
            Explore Our Range Of Innovative Cardiac Monitoring Devices And Accessories, Designed To Support Accurate ECG
            Recording, Efficient Diagnosis And Convenient Patient Monitoring.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mb-10" role="tablist" data-aos="fade-up">
          {TABS.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.key)}
                className={`btn-text font-inter min-w-[9.5em] px-[1.1em] py-[0.5em] rounded-[2px] border transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                    : "bg-white border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-light)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div key={active} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 px-1">
          {PRODUCTS[active].map((product, i) => (
            <div key={product.title + i} className="w-full max-w-[360px] sm:max-w-[420px] xl:max-w-none mx-auto" data-aos="fade-up" data-aos-delay={i * 100}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
