"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const products = [
  {
    image: "/medical/amnotec/p1.webp",
    alt: "AMNOTEC Open Surgery Surgical Instruments",
    title: "Open Surgery",
    description:
      "Precision-engineered surgical instruments designed to support a wide range of open surgical procedures.",
    link: "#products",
  },
  {
    image: "/medical/amnotec/p2.webp",
    alt: "AMNOTEC Endoscopy Devices and Systems",
    title: "Endoscopy",
    description:
      "Advanced endoscopic systems and instruments designed for clear visualization and minimally invasive procedures.",
    link: "#products",
  },
  {
    image: "/medical/amnotec/p3.webp",
    alt: "AMNOTEC VEQTRON Guided Surgery Visualization Cart System",
    title: "VEQTRON Guided Surgery",
    description:
      "Innovative fluorescence imaging technology supporting real-time visual guidance during surgical procedures.",
    link: "#products",
  },
];

/**
 * AMNOTEC Our Products Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Centered header with xl:max-w-[70%] container strategy
 * - 3 Product Showcase Cards with shadow and smooth zoom-on-hover
 * - Hover State: Dark semi-transparent overlay revealing white vertical bar, category title, description, and "Explore Products" CTA button
 * - Responsive grid: 1 col mobile, 2 cols tablet (768-1035px), 3 cols desktop (1036px+)
 */
const OurProducts = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="eyebrow"
            className="text-[#134093] font-semibold text-sm sm:text-base tracking-wider uppercase"
          >
            OUR PRODUCTS
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight"
          >
            Explore Our Medical Technology
          </Typography>

          <Typography
            variant="p"
            color="secondary"
            className="text-sm sm:text-base leading-relaxed text-[#111111]"
          >
            Explore AMNOTEC&apos;s extensive range of medical technology, surgical instruments and advanced equipment, developed to meet the evolving needs of healthcare professionals and modern operating environments.
          </Typography>
        </div>

        {/* Products 3-Card Grid */}
        <div
          className="w-full mt-10 sm:mt-14 amnotec-products-grid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {products.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="relative w-full aspect-[4/3] bg-white rounded-[10px] overflow-hidden border border-gray-100 shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] hover:shadow-2xl transition-all duration-300 flex items-center justify-center group cursor-pointer"
            >
              {/* Product Image - Full fill edge-to-edge without white padding */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay with Dark Tint, Vertical White Accent, Content & CTA Button */}
              <div className="absolute inset-0 bg-[#212529]/75 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-7 text-left z-10">
                {/* Title & Description with Left White Accent Bar */}
                <div className="border-l-[2px] border-white pl-3 sm:pl-4 space-y-1.5 mb-4">
                  <h3 className="font-jakarta font-bold text-lg sm:text-xl text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-dmsans text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Explore Products Button */}
                <div className="pl-3 sm:pl-4">
                  <span className="inline-flex items-center justify-center bg-[#134093] hover:bg-[#0e2f6d] text-white font-jakarta font-semibold text-xs sm:text-sm px-4 py-2 rounded-[5px] transition-colors shadow-sm">
                    Explore Products
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProducts;
