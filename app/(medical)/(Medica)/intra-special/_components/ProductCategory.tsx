"use client";

import React, { useState } from "react";
import Typography from "./Typography";

export default function ProductCategory() {
  const categories = [
    "Arterial Seldinger Catheters",
    "Venous Seldinger Catheters",
    "Electrophysiology",
    "Vessel surgery",
    "Others",
  ];

  const [activeCategory, setActiveCategory] = useState("Venous Seldinger Catheters");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "Central Venous Catheters",
      description:
        "All catheters consist of high flexible thin-walled polyurethane which ensures very high flow rates. It is anti-thrombogen and biocompatible. At body temperature it gets very soft, swims in the vessel and reduces clearly the risk of phlebitis.",
      image: "/medical/intra-special/p1.png",
    },
    {
      id: 2,
      title: "Catheters For Hemodialysis",
      description:
        "Hemodialysis catheters are catheters that provide temporary vascular access for hemodialysis until a permanent access is available or until another type of dialysis therapy is substituted.",
      image: "/medical/intra-special/p2.png",
    },
    {
      id: 3,
      title: "Thermodilution",
      description:
        "Multi lumen catheter for measuring and monitoring cardiac output and for continuous infusion, blood sampling and blood gas analysis. The catheter is made of radiopaque polyurethane.",
      image: "/medical/intra-special/p3.png",
    },
  ];

  return (
    <section
      id="product-category"
      className="w-full bg-white py-16 sm:py-20 xl:py-24 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center text-center">
        {/* Section Header */}
        <div
          className="flex flex-col items-center gap-3 xl:max-w-[70%] max-w-[90%] mx-auto text-center"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            weight="semibold"
            className="tracking-[0.04em]"
          >
            Product Category
          </Typography>

          <Typography variant="h2" color="dark">
            Specialized Catheter Solutions Across Critical Medical Applications
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="mt-2 leading-relaxed"
          >
            INTRA offers a comprehensive range of specialized medical products across arterial and venous access, electrophysiology, vessel surgery, thoracic drainage, pleural puncture, and other clinical applications. Designed with a focus on precision, reliability, safety, and professional healthcare requirements, our product portfolio provides dependable solutions for a wide range of demanding medical procedures.
          </Typography>
        </div>

        {/* Category Tabs / Filter Pills */}
        <div
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:gap-4 xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-6 py-2.5 rounded-[10px] font-primary font-semibold text-[14px] sm:text-[16px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#EC1C24] border border-[#EC1C24] text-white shadow-sm"
                    : "bg-white border border-[#404040] text-[#404040] hover:border-[#EC1C24] hover:text-[#EC1C24]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3 Product Cards (p1, p2, p3) */}
        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-[3800px]:gap-12 w-full items-start"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {products.map((item, idx) => {
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(hoveredCard === idx ? null : idx)}
                className={`group relative bg-white border rounded-[10px] p-4 sm:p-5 transition-all duration-500 ease-in-out cursor-pointer flex flex-col text-left ${
                  isHovered
                    ? "border-[#EC1C24] shadow-xl ring-1 ring-[#EC1C24]/20"
                    : "border-gray-200 hover:border-gray-400 shadow-sm"
                }`}
              >
                {/* Product Image Frame */}
                <div className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#F4F7FB] shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Expandable Text: Reveals strictly on hover */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isHovered ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden flex flex-col gap-2">
                    <Typography variant="h3" color="dark">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
