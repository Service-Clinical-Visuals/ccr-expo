"use client";

import React, { useState, useEffect } from "react";
import Typography from "./Typography";

export default function MedicaExhibition() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Desktop & Tablet (>= 768px): 2 images visible per slide
  const twoImageSlides = [
    [
      { src: "/medical/biotech/images/m1.jpg", alt: "MEDICA 2025 meeting 1" },
      { src: "/medical/biotech/images/m2.jpg", alt: "MEDICA 2025 meeting 2" },
    ],
    [
      { src: "/medical/biotech/images/m2.jpg", alt: "MEDICA 2025 meeting 3" },
      { src: "/medical/biotech/images/m1.jpg", alt: "MEDICA 2025 meeting 4" },
    ],
  ];

  // Mobile (< 768px): 1 image per slide
  const singleImageSlides = [
    { src: "/medical/biotech/images/m1.jpg", alt: "MEDICA 2025 meeting 1" },
    { src: "/medical/biotech/images/m2.jpg", alt: "MEDICA 2025 meeting 2" },
  ];

  // Auto-scroll loop effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Swipe gesture handlers
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
      setCurrentSlide((prev) => (prev + 1) % 2);
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev - 1 + 2) % 2);
    }
  };

  return (
    <section
      id="medica-exhibition"
      className="w-full py-16 lg:py-24 xl:py-28 min-[1920px]:py-32 min-[2500px]:py-36 min-[3800px]:py-48 bg-white overflow-hidden"
    >
      <div className="custom-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, Description, Sliding Sub-gallery & Pagination */}
          <div
            className="w-full flex flex-col gap-4 sm:gap-6 text-left items-start"
            data-aos="fade-up"
          >
            {/* Title with Underline */}
            <div>
              <Typography variant="h2" color="secondary" className="mb-2.5 sm:mb-3">
                MEDICA 2025 — Düsseldorf
              </Typography>
              <div className="w-[180px] sm:w-[204px] xl:w-[240px] min-[2500px]:w-[340px] min-[3800px]:w-[440px] h-[2px] xl:h-[3px] min-[2500px]:h-[4px] min-[3800px]:h-[5px] bg-[#003470] rounded-[8px]" />
            </div>

            {/* Description Paragraph */}
            <Typography variant="p" color="muted" className="w-full">
              We have been greatly pleased by the kind visit and the constructive
              discussion with State Secretary for Economic Affairs Ms. Dick-Walther
              and Ms. Pia Walz from the Unit of Health Industry and
              Biotechnology/Life Sciences at our booth at MEDICA 2025, Düsseldorf.
            </Typography>

            {/* Sliding Sub-gallery */}
            <div
              className="flex flex-col gap-3 sm:gap-4 pt-1 w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative overflow-hidden w-full">
                {/* Mobile View (< 768px): 1 image per slide */}
                <div
                  className="block md:hidden w-full transition-all duration-700 ease-in-out"
                  key={`single-${currentSlide}`}
                >
                  <div className="aspect-[16/9] w-full rounded-[8px] overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100">
                    <img
                      src={singleImageSlides[currentSlide].src}
                      alt={singleImageSlides[currentSlide].alt}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Tablet & Desktop (>= 768px): 2 images visible side-by-side */}
                <div
                  className="hidden md:grid grid-cols-2 gap-3 lg:gap-4 w-full transition-all duration-700 ease-in-out"
                  key={`two-${currentSlide}`}
                >
                  {twoImageSlides[currentSlide].map((item, idx) => (
                    <div
                      key={idx}
                      className="aspect-[16/10] w-full rounded-[8px] overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Centered Pagination Indicators */}
              <div className="flex items-center justify-center gap-2.5 pt-1">
                {[0, 1].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-[3.5px] rounded-[25px] transition-all duration-300 cursor-pointer ${currentSlide === idx
                      ? "w-9 sm:w-11 bg-[#DBB001]"
                      : "w-9 sm:w-11 bg-white border border-[#DBB001] hover:bg-[#DBB001]/20"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: FIXED "fixed.png" Image without border or container card style */}
          <div
            className="w-full flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              src="/medical/biotech/images/fixed.png"
              alt="MEDICA 2025 Discussion with State Secretary"
              className="w-full max-w-[500px] lg:max-w-full h-auto object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}