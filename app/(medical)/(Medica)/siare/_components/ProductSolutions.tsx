"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["Lung Ventilators", "Accessories", "Anaesthesia"];

const PRODUCTS = {
  "Lung Ventilators": [
    { image: "/medical/siare/p1.png", title: "Aria 150" },
    { image: "/medical/siare/p2.png", title: "Aria 150" },
    { image: "/medical/siare/p3.png", title: "Aria 104" },
    { image: "/medical/siare/p4.png", title: "ARIA 104" }
  ],
  "Accessories": [
    { image: "/medical/siare/p5.png", title: "Turbine Filter Kit" },
    { image: "/medical/siare/p6.png", title: "Sonic 2" },
    { image: "/medical/siare/p7.png", title: "PneuTest 8" },
    { image: "/medical/siare/p8.png", title: "Expiratory valve and\nFlow-sensor" }
  ],
  "Anaesthesia": [
    { image: "/medical/siare/p9.png", title: "Morpheus M" },
    { image: "/medical/siare/p10.png", title: "Morpheus E" },
    { image: "/medical/siare/p11.png", title: "Morpheus ND Hybrid" }
  ]
};

export default function ProductSolutions() {
  const [activeCategory, setActiveCategory] = useState("Lung Ventilators");

  const currentProducts = PRODUCTS[activeCategory as keyof typeof PRODUCTS];

  return (
    <section id="product-solutions" className="w-full bg-white py-16 sm:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-6">
          <h2 className="section-title font-bold tracking-tight text-[#111111] font-exo2 m-0">
            Our Product Portfolio
          </h2>

          {/* Tabs */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative pb-4 text-sm sm:text-base font-dm-sans whitespace-nowrap transition-colors ${activeCategory === category
                  ? "text-[#111111] font-semibold section-text"
                  : "text-[#111111] hover:text-[#111111] font-regular section-text"
                  }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-[1px] left-0 w-full h-[2px] bg-[#1B489F] rounded-t-sm"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-10">
          {currentProducts.map((product, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer bg-white rounded-[24px] shadow-[0px_2px_6px_2px_#3C404326,0px_1px_2px_0px_#3C40434D] hover:shadow-[0px_4px_10px_2px_#3C404333,0px_2px_4px_0px_#3C40434D] transition-all duration-300 flex flex-col h-[380px] sm:h-[450px]"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 150}
            >
              {/* Product Image */}
              <div className="flex-1 p-8 pb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 card-title"
                />
              </div>

              {/* Product Title */}
              <div className="px-8 pb-10 text-center flex-shrink-0 min-h-[70px] flex items-center justify-center">
                <h3 className="font-dm-sans font-bold text-[#111111] card-title whitespace-pre-line leading-tight">
                  {product.title}
                </h3>
              </div>

              {/* Corner Button Cutout Effect */}
              <div className="absolute -bottom-1 -right-1 translate-x-[2px] translate-y-[2px] w-14 h-14 sm:w-[68px] sm:h-[68px] bg-[#1B489F] rounded-full flex items-center justify-center border-[4px] text-white group-hover:bg-[#153a82] transition-colors">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-end pr-4">
          <Link href="#view-all" className="text-[#1B489F] font-dm-sans section-text hover:underline font-medium underline">
            View All
          </Link>
        </div>

      </div>
    </section>
  );
}
