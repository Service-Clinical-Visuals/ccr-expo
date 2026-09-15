"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: "/medical/serag-wiessner/b1.png",
    alt: "Precision Needle and Suture Assembly",
  },
  {
    id: 2,
    image: "/medical/serag-wiessner/b2.png",
    alt: "Automated Robotic Suture Manufacturing Technology",
  },
  {
    id: 3,
    image: "/medical/serag-wiessner/b3.png",
    alt: "Sterile Cleanroom and High Standard Quality Control",
  },
  {
    id: 4,
    image: "/medical/serag-wiessner/b4.png",
    alt: "Advanced Pharmaceutical Solutions Bottling Plant",
  },
  {
    id: 5,
    image: "/medical/serag-wiessner/b5.png",
    alt: "Surgical Team and Clinical Applications in Operation Theater",
  },
  {
    id: 6,
    image: "/medical/serag-wiessner/b6.png",
    alt: "Modern Training, Education, and Exhibition Center",
  },
];

export default function GlimpseGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items visible: 1 on mobile, 2 on tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else {
        setVisibleCount(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, GALLERY_ITEMS.length - visibleCount);
  const totalPages = Math.ceil(GALLERY_ITEMS.length / visibleCount);

  // Auto-slide effect every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const currentPage = Math.min(
    totalPages - 1,
    Math.floor(currentIndex / Math.max(1, visibleCount))
  );

  return (
    <section className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className="text-center max-w-6xl mx-auto mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-exo2">
            A Glimpse Into Serag-Wiessner
          </h2>
          <p className="section-text mt-3 sm:mt-4 leading-relaxed font-outfit">
            Explore our gallery to discover SERAG-WIESSNER&apos;s products, facilities,
            manufacturing processes, exhibitions, events, and innovations. Get a closer
            look at the people, technologies, and expertise behind our commitment to
            quality and advanced surgical solutions.
          </p>
        </div>

        {/* Gallery Carousel Container */}
        <div
          className="relative "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden py-2" ref={sliderRef}>
            <div
              className="flex transition-transform duration-600 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 px-2 sm:px-3.5"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Photo Card matching Screenshot */}
                  <div className="relative w-full h-full  overflow-hidden transition-all duration-300 group border border-slate-100">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* Pagination Indicator Bars matching Screenshot */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
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
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                  ? "w-8 sm:w-10 bg-[#e2007a]"
                  : "w-4 sm:w-5 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
