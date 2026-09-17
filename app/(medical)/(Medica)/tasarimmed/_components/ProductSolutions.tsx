"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductItem {
  id: number;
  title: string;
  image: string;
  href?: string;
}

const PRODUCTS: ProductItem[] = [
  { id: 1, title: "Intramedullary Nail Systems", image: "/medical/tasarimmed/p1.png" },
  { id: 2, title: "Cervical Systems", image: "/medical/tasarimmed/p2.png" },
  { id: 3, title: "Screw & Cable Systems", image: "/medical/tasarimmed/p3.png" },
  { id: 4, title: "Thoracolumbar Systems", image: "/medical/tasarimmed/p4.png" },
  { id: 5, title: "External Fixation Systems", image: "/medical/tasarimmed/p5.png" },
];

export default function ProductSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Track responsive screen width for number of visible cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, PRODUCTS.length - visibleCount);
  const totalPages = Math.ceil(PRODUCTS.length / visibleCount);

  // Auto-slide effect
  useEffect(() => {
    if (isHovered || maxIndex <= 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return Math.min(prev + visibleCount, maxIndex);
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [isHovered, maxIndex, visibleCount]);

  // Current page for pagination indicator
  const currentPage = Math.min(
    totalPages - 1,
    Math.ceil(currentIndex / visibleCount)
  );

  return (
    <section id="product-solutions" className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Section Heading & Subtitle */}
        <div
          className="text-center max-w-[95%] lg:max-w-[85%] 2xl:max-w-[75%] mx-auto mb-10 sm:mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#C382B4]"></div>
            <span className="font-inter text-[#C382B4] section-text font-regular tracking-wide">
              Products
            </span>
          </div>
          <h2 className="section-title font-dm-sans font-bold text-[#1F2937] leading-tight mb-4">
            Orthopaedic Solutions
          </h2>
          <p className="section-text font-inter text-[#4B5563] leading-relaxed mx-auto max-w-[95%] lg:max-w-[85%] 2xl:max-w-[75%]">
            Explore TASARIMMED's range of high-quality orthopaedic and neurosurgical medical devices, designed with precision, reliability, and innovation to support modern surgical procedures.
          </p>
        </div>

        {/* Product Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden py-4 -my-4" ref={sliderRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-3 sm:px-4"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Product Card */}
                  <Link
                    href={product.href || "#"}
                    className="relative block w-full aspect-[16/10] lg:aspect-[16/9] rounded-xl overflow-hidden group shadow-md"
                  >
                    {/* Background Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1126]/90 via-[#0B1126]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    {/* Hover Content (Title & Arrow) */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <h3 className="section-text font-inter font-bold text-white max-w-[70%] leading-snug">
                        {product.title}
                      </h3>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm shrink-0 transition-colors group-hover:bg-white/20">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Lines matching Screenshot */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const isActive = pageIdx === currentPage;
              return (
                <button
                  key={pageIdx}
                  type="button"
                  onClick={() =>
                    setCurrentIndex(Math.min(maxIndex, pageIdx * visibleCount))
                  }
                  aria-label={`Go to slide page ${pageIdx + 1}`}
                  className={`h-[4px] transition-all duration-300 cursor-pointer ${isActive
                    ? "w-12 bg-black"
                    : "w-12 bg-gray-200 hover:bg-gray-400"
                    }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
