"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Link from "next/link";

interface ProductItem {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  image: string;
}

const productsData: ProductItem[] = [
  {
    id: "defibrillators",
    tabLabel: "Defibrillators",
    title: "Defibrillators",
    description:
      "Defibrillators manufactured by EMTEL are made with high diligence and attention to quality, which ensures the durability of devices and their high reliability. In the past, monophasic impulses were used for defibrillation, which caused the flow of a much larger current through the patient’s body, which resulted in myocardial damage even during cardioversion. Defibrillators of DefiMax series use a modern biphasic defibrillation pulse that ensures efficiency when using much less energy.",
    image: "/medical/emtel/p1.webp",
  },
  {
    id: "patient-monitors",
    tabLabel: "Patient monitors",
    title: "Patient monitors",
    description:
      "For over 30 years of its activity EMTEL has focused on designing and manufacturing highly specialized patient monitors which received recognition both in Poland and around the world. The latest line – Emtel FX 3000, supported by innovative solutions, is distinguished by: The monitors feature advanced parameters, as user-friendly touchscreen, and modular design. Built with high-quality components and certified manufacturing standards, they offer reliable performance at competitive prices.",
    image: "/medical/emtel/p2.webp",
  },
  {
    id: "telemetry-module",
    tabLabel: "Telemetry module",
    title: "Telemetry module",
    description:
      "Nowadays, advanced wireless systems allow healthcare professionals to monitor a much larger number of patients, even in wards without bedside or portable patient monitors. Battery-powered telemetry transmitters allow patients to move freely around the ward while receiving continuous wireless monitoring over extended periods. This enhances patient safety and provides greater reassurance to healthcare staff.",
    image: "/medical/emtel/p3.webp",
  },
  {
    id: "central-station",
    tabLabel: "Central station",
    title: "Central station",
    description:
      "The system that collects information from all patient monitors connected to the central station. It enables quick access to every patient monitor from a nurse stand, which makes the work of medical staff easier and more effective. This system allows full interaction between patient monitors and the central station, as well as between patient monitors themselves. Thanks to the large touch screen, the use of the central station is as easy as the use of patient monitors.",
    image: "/medical/emtel/p4.webp",
  },
];

/**
 * Products Section - EMTEL (p1, p2, p3, p4)
 *
 * ARCHITECTURAL REFERENCE:
 * 1. 70% Max-Width Strategy:
 *    - Applied specifically to the headings and subheadings text (`xl:max-w-[70%]`).
 * 2. Interactive Product Card:
 *    - Top pill tab switcher for all 4 categories.
 *    - Left: Title (constrained to `xl:max-w-[70%]`) and comprehensive clinical description.
 *    - Right: High-resolution product image and clickable thumbnail selector dock.
 */
const Products = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const currentProduct = productsData[selectedProductIndex];

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header */}
        <div
          className="text-center w-full space-y-3"
          data-aos="fade-up"
        >
          {/* Eyebrow / Tag: 70% max-width on xl */}
          <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary w-full max-w-full xl:max-w-[70%] mx-auto">
            OUR MEDICAL EQUIPMENT
          </p>

          {/* Section Heading: 70% max-width on xl */}
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] w-full max-w-full xl:max-w-[70%] mx-auto"
          >
            Innovative Medical Solutions Designed for Modern Healthcare
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="p"
            color="secondary"
            className="text-sm sm:text-base leading-relaxed text-[#0F2744]/80 w-full max-w-full xl:max-w-[70%] mx-auto"
          >
            Discover EMTEL's comprehensive range of medical equipment, engineered to support accurate patient monitoring, effective resuscitation and continuous clinical supervision. Combining advanced technology, functional design and dependable performance.
          </Typography>
        </div>

        {/* Featured Interactive Product Showcase Card (Figma: Rectangle 70 - 70% Strategy) */}
        <div
          className="w-full xl:max-w-[90%] mx-auto bg-gradient-to-r from-[#0F78AF] to-[#0F76AF] rounded-[16px] p-4 sm:p-8 lg:p-12 text-white shadow-xl relative overflow-hidden mt-8 sm:mt-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Right Side Background Image - Vector 3 from Figma (p_bg.webp) */}
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none select-none z-0 flex items-center justify-end overflow-hidden">
            <img
              src="/medical/emtel/p_bg.webp"
              alt=""
              className="h-full w-auto max-w-[460px] object-contain object-right opacity-90"
            />
          </div>

          {/* Top Pill Category Tabs */}
          <div className="w-full flex justify-center mb-6 sm:mb-10 lg:mb-12 relative z-20">
            <div className="bg-white rounded-full p-1 sm:p-1.5 flex items-center justify-start sm:justify-center gap-1 sm:gap-2 shadow-md max-w-full overflow-x-auto no-scrollbar scrollbar-none">
              {productsData.map((item, idx) => {
                const isActive = selectedProductIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedProductIndex(idx)}
                    className={`shrink-0 whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold font-primary transition-all duration-300 cursor-pointer ${isActive
                      ? "bg-[#0F78AF] text-white shadow-sm"
                      : "text-[#0F2744] hover:text-[#0F78AF]"
                      }`}
                  >
                    {item.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Detail Layout (Stacked on mobile/tablet up to 1300px, Two-column above 1300px) */}
          <div className="flex flex-col min-[1301px]:flex-row gap-8 lg:gap-10 items-center relative z-10 w-full">

            {/* Left Column: Product Information */}
            <div className="w-full min-[1301px]:w-1/2 flex flex-col justify-between gap-6">
              <div key={currentProduct.id} className="space-y-4 animate-in fade-in duration-500">
                {/* Title: 70% max-width on xl */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-primary text-white tracking-tight w-full max-w-full xl:max-w-[70%]">
                  {currentProduct.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed text-left w-full">
                  {currentProduct.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center border border-white hover:bg-white hover:text-[#0F78AF] text-white font-medium px-6 py-2.5 rounded-[20px] text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
                >
                  <span>View All Products</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image & Thumbnails Dock */}
            <div className="w-full min-[1301px]:w-1/2 flex flex-col items-center justify-center relative min-h-0 sm:min-h-[360px]">

              {/* Main Product Device Image */}
              <div className="relative z-20 w-full max-w-[460px] h-[190px] sm:h-[260px] md:h-[320px] lg:h-[380px] flex items-center justify-center overflow-visible pointer-events-none">
                <img
                  key={currentProduct.id}
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="max-w-full max-h-full object-contain filter drop-shadow-2xl animate-product-emerge will-change-transform"
                />
              </div>

              {/* Bottom Right Interactive Thumbnails Dock (4 Product Images) - Centered on mobile/tablet, right-aligned on desktop min-[1301px] */}
              <div className="w-full flex justify-center min-[1301px]:justify-end items-center gap-2 sm:gap-3 mt-5 sm:mt-6 relative z-10">
                {productsData.map((prod, idx) => {
                  const isActive = selectedProductIndex === idx;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setSelectedProductIndex(idx)}
                      className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px] rounded-[10px] sm:rounded-[12px] border p-1 sm:p-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center shrink-0 ${isActive
                        ? "border-2 border-white bg-white/35 shadow-xl scale-105 ring-2 ring-white/50"
                        : "border-white/40 bg-[#0F78AF]/60 hover:border-white hover:bg-white/20 hover:scale-105 opacity-75 hover:opacity-100"
                        }`}
                      title={prod.title}
                      aria-label={`Select ${prod.title}`}
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;
