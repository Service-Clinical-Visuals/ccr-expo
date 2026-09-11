"use client";

import React, { useState, useEffect } from "react";
import Typography from "./Typography";

interface ProductItem {
  id: number;
  tag: string;
  title: string;
  subtitle?: string;
  category: "products" | "pharmaceutical";
  image: string;
}

const biotechProducts: ProductItem[] = [
  {
    id: 1,
    tag: "Biotech Products",
    title: "HIP",
    category: "products",
    image: "/medical/biotech/images/p1.png",
  },
  {
    id: 2,
    tag: "Biotech Products",
    title: "KNEE",
    category: "products",
    image: "/medical/biotech/images/p2.png",
  },
  {
    id: 3,
    tag: "Biotech Products",
    title: "SHOULDER",
    category: "products",
    image: "/medical/biotech/images/p3.png",
  },
  {
    id: 4,
    tag: "Biotech Products",
    title: "PECTUS SYSTEM",
    category: "products",
    image: "/medical/biotech/images/p4.png",
  },
  {
    id: 5,
    tag: "Biotech Products",
    title: "TRAUMA",
    category: "products",
    image: "/medical/biotech/images/p5.png",
  },
  {
    id: 6,
    tag: "Biotech Products",
    title: "SPINE",
    category: "products",
    image: "/medical/biotech/images/p6.png",
  },
];

const pharmaceuticalProducts: ProductItem[] = [
  {
    id: 7,
    tag: "Prednidelt",
    title: "Prednidelt® 30 mg",
    subtitle: "suppository",
    category: "pharmaceutical",
    image: "/medical/biotech/images/p7.png",
  },
  {
    id: 8,
    tag: "Prednidelt",
    title: "Prednidelt® 30 mg",
    subtitle: "végbélkúp",
    category: "pharmaceutical",
    image: "/medical/biotech/images/p8.png",
  },
  {
    id: 9,
    tag: "Prednidelt",
    title: "Prednidelt® 30 mg",
    subtitle: "Zäpfchen",
    category: "pharmaceutical",
    image: "/medical/biotech/images/p9.png",
  },
  {
    id: 10,
    tag: "Prednidelt",
    title: "Prednidelt® 30 mg",
    subtitle: "supositorio",
    category: "pharmaceutical",
    image: "/medical/biotech/images/p10.png",
  },
];

export default function ProductRange() {
  const [activeTab, setActiveTab] = useState<"products" | "pharmaceutical">("products");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive items count: 1 on mobile (< 768), 2 on tablet (768 to 1023), 3 on desktop (>= 1024)
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
      } else if (width <= 1025) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    window.addEventListener("orientationchange", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
      window.removeEventListener("orientationchange", updateItemsPerPage);
    };
  }, []);

  const activeList = activeTab === "products" ? biotechProducts : pharmaceuticalProducts;
  const totalPages = Math.ceil(activeList.length / itemsPerPage);

  // Reset page when tab or layout width changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab, itemsPerPage]);

  // Autoscroll loop effect (loops through pages every 3.5s, pauses on hover/touch)
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  // Swipe gesture handlers for mobile & tablet screens
  const minSwipeDistance = 50;
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    } else if (distance < -minSwipeDistance) {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  const handleTabChange = (tab: "products" | "pharmaceutical") => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  return (
    <section id="products" className="w-full py-16 lg:py-24 xl:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        {/* Top Header & Filter Tabs */}
        <div className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-end justify-between gap-6 min-[1026px]:gap-8 w-full">
          <div data-aos="fade-up" className="w-full min-[1026px]:w-auto flex flex-col items-start text-left self-start">
            <Typography variant="h2" color="secondary" className="mb-2.5 sm:mb-3 text-left">
              Biotech Medical Product Range
            </Typography>
            <div className="w-[180px] sm:w-[220px] lg:w-[240px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] max-w-[60%] h-[2px] min-[2500px]:h-[3px] min-[3800px]:h-[4px] bg-[#003470] rounded-[8px]" />
          </div>

          {/* Filter Tabs */}
          <div
            className="w-full min-[1026px]:w-auto flex items-center justify-center min-[1026px]:justify-end gap-3 sm:gap-4 lg:gap-3 min-[2500px]:gap-5 shrink-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Tab 1: Biotech Products */}
            <button
              type="button"
              onClick={() => handleTabChange("products")}
              className={`px-4 sm:px-5 lg:px-5 py-2 sm:py-2.5 lg:py-2.5 min-[2500px]:px-8 min-[2500px]:py-4 min-[3800px]:px-10 min-[3800px]:py-5 rounded-[5px] text-[13.5px] sm:text-[15px] lg:text-[16px] xl:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] font-[var(--font-primary)] font-semibold leading-snug transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === "products"
                  ? "bg-[#DBB001] border border-[#DBB001] text-white shadow-sm"
                  : "bg-transparent border border-[#DBB001] text-[#404040] hover:bg-[#DBB001]/10"
              }`}
            >
              Biotech Products
            </button>

            {/* Tab 2: Biotech pharmaceutical */}
            <button
              type="button"
              onClick={() => handleTabChange("pharmaceutical")}
              className={`px-4 sm:px-5 lg:px-5 py-2 sm:py-2.5 lg:py-2.5 min-[2500px]:px-8 min-[2500px]:py-4 min-[3800px]:px-10 min-[3800px]:py-5 rounded-[5px] text-[13.5px] sm:text-[15px] lg:text-[16px] xl:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] font-[var(--font-primary)] font-semibold leading-snug transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === "pharmaceutical"
                  ? "bg-[#DBB001] border border-[#DBB001] text-white shadow-sm"
                  : "bg-transparent border border-[#DBB001] text-[#404040] hover:bg-[#DBB001]/10"
              }`}
            >
              Biotech pharmaceutical
            </button>
          </div>
        </div>

        {/* Carousel Slide Track Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageItems = activeList.slice(
                pageIdx * itemsPerPage,
                pageIdx * itemsPerPage + itemsPerPage
              );

              return (
                <div
                  key={pageIdx}
                  className="w-full min-w-full basis-full shrink-0 flex justify-center items-center px-1"
                >
                  <div
                    className={`w-full grid gap-5 sm:gap-6 lg:gap-8 xl:gap-9 mx-auto ${
                      itemsPerPage === 1
                        ? "grid-cols-1 max-w-[360px] sm:max-w-[420px]"
                        : itemsPerPage === 2
                        ? "grid-cols-2 max-w-[760px] sm:max-w-[840px]"
                        : "grid-cols-3 w-full"
                    }`}
                  >
                    {pageItems.map((item) => (
                      <div
                        key={item.id}
                        className="group relative aspect-[533/420] w-full bg-white rounded-[6px] border border-slate-200/90 shadow-[0px_3px_8px_rgba(0,0,0,0.16)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.22)] transition-all duration-300 overflow-hidden flex items-center justify-center"
                      >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-4 sm:p-5 lg:p-6 transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                      />

                      {/* Hover Overlay matching Figma prototype */}
                      <div className="absolute inset-0 bg-[#333333]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-7 min-[2500px]:p-10 min-[3800px]:p-12 flex flex-col justify-end">
                        <div className="flex items-end justify-between gap-3 w-full">
                          {/* Bottom Left Content: Tag, Title, Subtitle */}
                          <div className="flex flex-col text-left">
                            <span className="text-white text-[13px] sm:text-[14px] min-[2500px]:text-[18px] min-[3800px]:text-[24px] font-[var(--font-secondary)] font-normal mb-1">
                              {item.tag}
                            </span>
                            <h3 className="text-white font-[var(--font-primary)] font-semibold text-[20px] sm:text-[22px] min-[2500px]:text-[28px] min-[3800px]:text-[36px] leading-[125%]">
                              {item.title}
                            </h3>
                            {item.subtitle && (
                              <p className="text-white font-[var(--font-secondary)] font-normal text-[15px] sm:text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] mt-0.5">
                                {item.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Bottom Right: See Products in Gold without underline */}
                          <div className="shrink-0 mb-0.5">
                            <a
                              href="#contact"
                              className="text-[#DBB001] hover:text-[#ffd324] font-[var(--font-primary)] font-normal text-[14px] sm:text-[15px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] transition-colors whitespace-nowrap"
                            >
                              See Products
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Indicators: Dynamic Pills matching total pages with active gold fill */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 pt-4">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to product page ${idx + 1}`}
                className={`h-[3.5px] rounded-[25px] transition-all duration-300 cursor-pointer ${
                  currentPage === idx
                    ? "w-8 sm:w-11 bg-[#DBB001]"
                    : "w-8 sm:w-11 bg-white border border-[#DBB001] hover:bg-[#DBB001]/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
