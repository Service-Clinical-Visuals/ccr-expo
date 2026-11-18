"use client";

import React, { useState } from "react";
import Badge from "./Badge";
import Typography from "./Typography";

type Category = "Dermatology" | "Gynecology" | "High-Res Anoscopy";
type Tab = Category | "View All";

const TABS: Tab[] = ["Dermatology", "Gynecology", "High-Res Anoscopy", "View All"];

const PRODUCTS: { src: string; name: string; category: Category }[] = [
  { src: "product-1.webp", name: "Z-Link Smoke Evac Autoactivation", category: "Dermatology" },
  { src: "product-2.webp", name: "Disposable Grounding Pad – Hyfrecator – box of 25", category: "Dermatology" },
  { src: "product-3.webp", name: "ConMed Hyfrecator with handpiece", category: "Dermatology" },
  { src: "product-4.webp", name: "Smoke-Evac Fusion: 2″ Derm-Blunt – box 25", category: "Gynecology" },
  { src: "product-5.webp", name: "Acu-Evac Adapter", category: "Gynecology" },
  { src: "product-6.webp", name: "Smoke Evac Reusable Grounding Cable", category: "Gynecology" },
  { src: "product-7.webp", name: "Bovie Derm 942 High Frequency Desiccator", category: "High-Res Anoscopy" },
  { src: "product-8.webp", name: "Smoke-Evac Fusion 4″ Preferred Blade – box of 5", category: "High-Res Anoscopy" },
  { src: "product-9.webp", name: "Smoke Evacuator Unit with 35-Hour Filter, 100–120V", category: "High-Res Anoscopy" },
];

export default function Products() {
  const [active, setActive] = useState<Tab>("Dermatology");
  const items = active === "View All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="products" className="w-full bg-white py-12 sm:py-16 xl:py-20 2k:py-32 4k:py-44">
      <div className="custom-container flex flex-col gap-8 xl:gap-10 2k:gap-16 4k:gap-20">
        {/* Heading row */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 2k:gap-10">
          <div className="flex flex-col items-start gap-3 xl:gap-4 2k:gap-6 4k:gap-8 xl:max-w-[48%] 2xl:max-w-[40%]" data-aos="fade-right">
            <Badge text="Products" />
            <Typography variant="h2" color="none" className="text-[var(--color-heading)]">
              Innovative Surgical Devices for Better <br className="hidden 2xl:block" />
              Clinical Outcomes
            </Typography>
            <Typography variant="p" color="muted">
              Explore our range of innovative surgical devices and instruments, designed to enhance
              precision, improve safety, and support better patient care.
            </Typography>
          </div>

          {/* Category tabs */}
          <div
            className="self-start xl:self-center max-w-full overflow-x-auto flex flex-nowrap items-center gap-x-5 xl:gap-x-6 2k:gap-x-10 4k:gap-x-14 bg-white rounded-xl 2k:rounded-2xl 4k:rounded-3xl border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.14)] px-4 sm:px-6 2k:px-10 4k:px-14 py-3 2k:py-5 4k:py-7"
            role="tablist"
            data-aos="fade-left"
          >
            {TABS.map((tab) => {
              const isActive = tab === active;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={`footer-body !font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    isActive ? "text-[var(--color-primary-dark)]" : "text-[#9aa1a9] hover:text-[var(--color-primary-dark)]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-7 2k:gap-10 4k:gap-14">
          {items.map((p, i) => (
            <div key={p.src} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <div className="group relative aspect-[36/26] rounded-2xl 2k:rounded-3xl 4k:rounded-[2.5rem] border 4k:border-2 border-[#d6d9dd] bg-white [&:hover]:bg-[#f1f9fd] overflow-hidden flex items-center justify-center transition-colors duration-300">
                {/* multiply blend lets the white product background pick up the hover tint */}
                <img
                  src={`/medical/zinnanti-surgical-1/${p.src}`}
                  alt={p.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />

                {/* Hover label (always visible on touch devices) */}
                <div className="absolute inset-x-[3.5%] bottom-[4%] min-h-[24%] flex items-center justify-center rounded-xl 2k:rounded-2xl 4k:rounded-3xl bg-[#0b5e94]/90 px-4 sm:px-6 2k:px-10 py-3 2k:py-5 text-center opacity-0 translate-y-3 [.group:hover_&]:opacity-100 [.group:hover_&]:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0 transition-all duration-300">
                  <span className="product-label text-white">{p.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
