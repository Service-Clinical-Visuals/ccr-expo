"use client";

import React from "react";

const PRODUCTS = [
  { image: "/medical/medelcom/p1.png", alt: "Ultrasound Probe" },
  { image: "/medical/medelcom/p2.png", alt: "Ultrasound Machine" },
  { image: "/medical/medelcom/p3.png", alt: "Video Colposcope Setup" },
];

export default function ProductSolutions() {
  return (
    <section id="product-solutions" className="relative w-full bg-white pb-24 pt-10 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-20">
        {/* Section Heading & Subtitle */}
        <div
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h4 className="text-[#0287DC] section-text font-bold font-inter mb-2 text-sm sm:text-base tracking-wide">
            Products
          </h4>
          <h2 className="section-title font-bold tracking-tight font-dmsans text-[#333333] mb-4 sm:mb-6 leading-snug">
            Medical Equipment
          </h2>
          <p className="section-text leading-relaxed font-inter text-[#666666] text-sm sm:text-base max-w-2xl mx-auto">
            Explore Medelcom's advanced medical equipment designed for accurate diagnosis and reliable clinical care.
          </p>
        </div>

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-5 lg:gap-5">
          {PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className="overflow-hidden group transition-all duration-300 flex items-center justify-center p-3 sm:p-3"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 150}
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
