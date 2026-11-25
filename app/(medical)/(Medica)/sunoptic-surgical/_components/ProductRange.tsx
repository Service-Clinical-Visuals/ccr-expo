"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Link from "next/link";
import { 
  Building2, 
  Heart, 
  Activity, 
  Brain, 
  Eye, 
  Stethoscope, 
  Grid,
  ArrowRight
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: (cls: string) => React.ReactNode;
  products: {
    title: string;
    image: string;
  }[];
}

const iconCls = "w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 4k:w-13 4k:h-13 text-[#0284C7]";

const categories: Category[] = [
  {
    id: "asc",
    name: "ASC",
    icon: (cls) => <Building2 className={cls} />,
    products: [
      { title: "SSL-5500 Wireless LED Headlight", image: "/medical/sunoptic-surgical/p1.webp" },
      { title: "SSL-LHD-30 Wireless Camera for Surgery", image: "/medical/sunoptic-surgical/p2.webp" },
      { title: "LED 4500 Light Source", image: "/medical/sunoptic-surgical/p3.webp" },
      { title: "LED 2000 Light Source", image: "/medical/sunoptic-surgical/p4.webp" },
    ],
  },
  {
    id: "cardiac",
    name: "Cardiac",
    icon: (cls) => <Heart className={cls} />,
    products: [
      { title: "Portable LED Surgical Headlight", image: "/medical/sunoptic-surgical/p5.webp" },
      { title: "TITAN X400 Light Source", image: "/medical/sunoptic-surgical/p6.webp" },
      { title: "Sunoptic Replacement Xenon Lamp Modules", image: "/medical/sunoptic-surgical/p7.webp" },
      { title: "SSL-9500 Portable LED Headlight", image: "/medical/sunoptic-surgical/p8.webp" },
    ],
  },
  {
    id: "spine",
    name: "Spine",
    icon: (cls) => <Activity className={cls} />,
    products: [
      { title: "Sunoptic Replacement Xenon Lamp Modules", image: "/medical/sunoptic-surgical/p9.webp" },
      { title: "SSL-9500 Portable LED Headlight", image: "/medical/sunoptic-surgical/p10.webp" },
      { title: "CeraLux® Replacement Lamps", image: "/medical/sunoptic-surgical/p11.webp" },
      { title: "CeraLux® Replacement Modules", image: "/medical/sunoptic-surgical/p12.webp" },
    ],
  },
  {
    id: "neuro",
    name: "Neurosurgery",
    icon: (cls) => <Brain className={cls} />,
    products: [
      { title: "SSL-5500 Wireless LED Headlight", image: "/medical/sunoptic-surgical/p13.webp" },
      { title: "SSL-LHD-30 Wireless Camera for Surgery", image: "/medical/sunoptic-surgical/p14.webp" },
      { title: "TITAN X400 Light Source", image: "/medical/sunoptic-surgical/p15.webp" },
      { title: "LED 4500 Light Source", image: "/medical/sunoptic-surgical/p16.webp" },
    ],
  },
  {
    id: "endo",
    name: "Endoscopic",
    icon: (cls) => <Eye className={cls} />,
    products: [
      { title: "Endoscopy Illumination Console", image: "/medical/sunoptic-surgical/p17.webp" },
      { title: "CeraLux® Replacement Lamps", image: "/medical/sunoptic-surgical/p18.webp" },
      { title: "CeraLux® Replacement Modules", image: "/medical/sunoptic-surgical/p19.webp" },
      { title: "LED 2000 Light Source", image: "/medical/sunoptic-surgical/p20.webp" },
    ],
  },
  {
    id: "orl",
    name: "ORL",
    icon: (cls) => <Stethoscope className={cls} />,
    products: [
      { title: "Portable LED Surgical Headlight", image: "/medical/sunoptic-surgical/p21.webp" },
      { title: "SSL-9500 Portable LED Headlight", image: "/medical/sunoptic-surgical/p22.webp" },
      { title: "TITAN X400 Light Source", image: "/medical/sunoptic-surgical/p23.webp" },
      { title: "Sunoptic Replacement Xenon Lamp Modules", image: "/medical/sunoptic-surgical/p24.webp" },
    ],
  },
  {
    id: "all",
    name: "View All",
    icon: (cls) => <Grid className={cls} />,
    products: [
      { title: "SSL-5500 Wireless LED Headlight", image: "/medical/sunoptic-surgical/p1.webp" },
      { title: "SSL-LHD-30 Wireless Camera for Surgery", image: "/medical/sunoptic-surgical/p2.webp" },
      { title: "LED 4500 Light Source", image: "/medical/sunoptic-surgical/p3.webp" },
      { title: "LED 2000 Light Source", image: "/medical/sunoptic-surgical/p4.webp" },
    ],
  },
];

/**
 * ProductRange Section - Sunoptic Surgical
 * Matches Figma specifications:
 * - Centered Header constrained to xl:max-w-[70%].
 * - Interactive Specialty Tabs (ASC, Cardiac, Spine, Neurosurgery, Endoscopic, ORL, View All).
 * - Tabs and icons scaling smoothly across small to 4K displays.
 * - Product images have explicit aspect-square and object-cover.
 * - 4 Product Cards Grid:
 *   * Small Mobile & Mobile Landscape: 1 column
 *   * Tablet (768px - 1035px): strictly 2 columns
 *   * Desktop (>= 1036px): strictly 4 columns in 1 single row
 */
const ProductRange = () => {
  const [activeTab, setActiveTab] = useState("asc");

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header: Centered with xl:max-w-[70%] line measure */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="eyebrow"
            className="!text-[#409BBD] font-semibold text-sm sm:text-base tracking-wider"
          >
            OUR PRODUCT RANGE
          </Typography>

          <Typography
            variant="h2"
            color="secondary"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Palanquin',sans-serif] text-[#0A192F]"
          >
            Innovative Solutions for Enhanced Surgical Visibility
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#444444] font-['DM_Sans',sans-serif]"
          >
            Discover Sunoptic Surgical&apos;s comprehensive range of advanced illumination and visualization products, engineered to meet the evolving needs of modern surgical environments. From high-performance LED light sources to ergonomic surgical headlights and camera systems, every solution is designed to deliver exceptional visibility, precision and reliable performance.
          </Typography>
        </div>

        {/* Interactive Specialty Filter Tabs: Strictly 1 Row on Desktop, 4 cols with odd centered in Row 2 on Tablets/Mobiles */}
        <div
          className="w-full mt-8 sm:mt-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="sunoptic-categories-container flex items-center justify-center gap-2 sm:gap-3 lg:gap-3.5 xl:gap-4 2k:gap-6 w-full max-w-6xl mx-auto">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  type="button"
                  className={`sunoptic-category-btn flex flex-col items-center justify-center p-2.5 sm:p-3 lg:p-3.5 2k:p-6 4k:p-8 rounded-[8px] 2k:rounded-[12px] 4k:rounded-[16px] transition-all duration-300 cursor-pointer shadow-sm ${
                    isSelected
                      ? "bg-[#0E2443] text-white shadow-md scale-102"
                      : "bg-white hover:bg-gray-50 text-[#0A192F] border border-gray-200"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 2k:w-18 2k:h-18 4k:w-24 4k:h-24 rounded-[8px] sm:rounded-[12px] 2k:rounded-[16px] 4k:rounded-[22px] flex items-center justify-center mb-1.5 sm:mb-2 transition-colors shrink-0 ${
                      isSelected ? "bg-white" : "bg-[#EAEDFF]"
                    }`}
                  >
                    {cat.icon("w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 2k:w-9 2k:h-9 4k:w-13 4k:h-13 text-[#0284C7]")}
                  </div>
                  <span className="font-['Palanquin',sans-serif] font-semibold text-[11px] sm:text-xs lg:text-sm 2k:text-base 4k:text-xl text-center leading-tight">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Product Cards Grid: Smooth animation transition when switching categories */}
        <div
          key={activeTab}
          className="w-full sunoptic-4-col-grid sunoptic-product-fade grid grid-cols-1 md:grid-cols-2 min-[1036px]:grid-cols-4 gap-6 sm:gap-7 2k:gap-10 4k:gap-14 mt-8 sm:mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {currentCategory.products.map((product, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 60}ms` }}
              className="sunoptic-product-fade relative bg-white rounded-lg 2k:rounded-xl 4k:rounded-2xl p-5 sm:p-6 2k:p-8 4k:p-12 border border-gray-200/90 shadow-[0px_1px_3px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden min-h-[300px] sm:min-h-[330px] 2k:min-h-[440px] 4k:min-h-[600px]"
            >
              {/* Top-Right Navy Curved Accent on Hover (#0A192F) */}
              <div className="absolute top-0 right-0 w-[45%] max-w-[130px] 2k:max-w-[190px] 4k:max-w-[270px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  viewBox="0 0 140 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 0C50 0 100 35 140 85L140 0Z"
                    fill="#0A192F"
                  />
                </svg>
              </div>

              {/* Product Image Container */}
              <div className="relative z-10 w-full flex-1 flex items-center justify-center p-2 sm:p-3">
                <div className="w-full aspect-square overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full aspect-square object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom Title & Arrow on Hover */}
              <div className="relative z-10 w-full min-h-[44px] sm:min-h-[48px] flex items-center justify-between gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <h4 className="font-['Palanquin',sans-serif] font-bold text-sm sm:text-base 2k:text-xl 4k:text-2xl text-[#0A192F] leading-tight line-clamp-2 text-left">
                  {product.title}
                </h4>
                <div className="shrink-0 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#0A192F] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Right "View All" Link */}
        <div className="w-full flex justify-end mt-6 2k:mt-10">
          <Link
            href="#products"
            className="text-[#0284C7] hover:text-[#00243E] font-['Palanquin',sans-serif] font-semibold text-base 2k:text-xl 4k:text-2xl underline underline-offset-4 transition-colors"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductRange;
