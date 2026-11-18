"use client";

import React, { useState } from "react";
import Typography from "../Typography";
import Button from "../Button";

interface Product {
  title: string;
  image: string;
}

const productsByCategory: Record<string, Product[]> = {
  Dermatology: [
    {
      title: "Z-Tip Biopsy – Disposable baby tischler biopsy forceps",
      image: "/medical/zinnanti-surgical-3/p1.webp",
    },
    {
      title: "Smoke Evacuator Unit with 35-Hour Filter, 100-120V",
      image: "/medical/zinnanti-surgical-3/p2.webp",
    },
    {
      title: "Bovie Bantam",
      image: "/medical/zinnanti-surgical-3/p3.webp",
    },
  ],
  Gynecology: [
    {
      title: "Smoke Evacuation Tubing & Accessories",
      image: "/medical/zinnanti-surgical-3/p4.webp",
    },
    {
      title: "Electrosurgical Smoke Evacuation Pencil",
      image: "/medical/zinnanti-surgical-3/p5.webp",
    },
    {
      title: "Gynecological Colposcopy Speculum Kit",
      image: "/medical/zinnanti-surgical-3/p6.webp",
    },
  ],
  "High-Res Anoscopy": [
    {
      title: "High-Resolution Anoscope with Suction Port",
      image: "/medical/zinnanti-surgical-3/p7.webp",
    },
    {
      title: "Anoscopy Active Electrode Probe",
      image: "/medical/zinnanti-surgical-3/p8.webp",
    },
    {
      title: "ZSE01 High-Flow Anoscopy Evacuator Filter",
      image: "/medical/zinnanti-surgical-3/p9.webp",
    },
  ],
};

const categories = ["Dermatology", "Gynecology", "High-Res Anoscopy"];

/**
 * Products Section - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Categories filter horizontally centered on mobile/tablet screens (<1036px)
 * - Odd cards centered on 2-column tablet layout
 * - Full-width action button covering card width
 */
const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Dermatology");
  const activeProducts = productsByCategory[activeCategory] || productsByCategory["Dermatology"];

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        
        {/* Header Row: Title & Filter Tabs */}
        <div
          className="flex flex-col min-[1036px]:flex-row min-[1036px]:items-end justify-between gap-6 w-full items-center min-[1036px]:items-start"
          data-aos="fade-up"
        >
          {/* Left Title: Centered on mobile & tablet, left on desktop */}
          <div className="space-y-3 text-center min-[1036px]:text-left w-full min-[1036px]:w-auto">
            <div className="flex items-center justify-center min-[1036px]:justify-start gap-2.5">
              <span className="w-7 sm:w-8 h-1 bg-[#38315E] rounded-full inline-block shrink-0" />
              <span className="heading-blue text-[#4F6744]">
                Our Products
              </span>
            </div>

            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333]"
            >
              Our Comprehensive Product Solutions
            </Typography>
          </div>

          {/* Right Category Filter Pills: Horizontally centered on tablet and mobile */}
          <div className="w-full min-[1036px]:w-auto flex justify-center min-[1036px]:justify-end shrink-0">
            <div className="bg-[#4F6744] rounded-full p-1.5 flex items-center gap-1 sm:gap-1.5 shadow-md overflow-x-auto max-w-full">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive
                        ? "bg-[#38315E] text-white shadow-sm"
                        : "text-white hover:text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Product Cards: 3 in a single row on desktop, 2-col with centered 3rd card on tablet */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1036px]:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {activeProducts.map((product, idx) => (
            <div
              key={`${activeCategory}-${idx}`}
              className={`w-full bg-[#4F6744] text-white rounded-[24px] min-[3800px]:rounded-[48px] p-6 sm:p-7 min-[2500px]:p-10 min-[3800px]:p-14 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${
                idx === 2
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 min-[1036px]:col-span-1 min-[1036px]:max-w-none min-[1036px]:mx-0"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div>
                {/* White Inner Image Frame */}
                <div className="w-full aspect-[4/3] rounded-[16px] min-[3800px]:rounded-[28px] bg-white p-6 flex items-center justify-center overflow-hidden mb-5 group-hover:shadow-inner transition-all">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Product Title */}
                <h3 className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-bold text-white text-center leading-snug min-h-[58px] flex items-center justify-center my-3">
                  {product.title}
                </h3>
              </div>

              {/* Action Button: Full width covering card width */}
              <div className="w-full pt-3">
                <Button
                  text="View Products"
                  variant="light"
                  href="#contact"
                  className="w-full justify-between bg-[#F9F9F9] hover:bg-white text-[#212121]"
                  circleBg="bg-[#38315E]"
                  arrowColor="text-white"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
