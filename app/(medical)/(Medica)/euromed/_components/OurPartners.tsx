"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

interface PartnerCard {
  id: number;
  name: string;
  logo: string;
}

interface PartnerColumnPair {
  id: number;
  top: PartnerCard;
  bottom: PartnerCard;
}

// 6 Column Pairs (12 cards total, matching screenshot layout)
const ORIGINAL_PAIRS: PartnerColumnPair[] = [
  {
    id: 1,
    top: { id: 1, name: "WEGO", logo: "/medical/euromed/p1.png" },
    bottom: { id: 5, name: "Quilaban", logo: "/medical/euromed/p5.png" },
  },
  {
    id: 2,
    top: { id: 2, name: "HYOSUNG", logo: "/medical/euromed/p2.png" },
    bottom: { id: 6, name: "IMS", logo: "/medical/euromed/p6.png" },
  },
  {
    id: 3,
    top: { id: 3, name: "amcor", logo: "/medical/euromed/p3.png" },
    bottom: { id: 7, name: "IGAR", logo: "/medical/euromed/p7.png" },
  },
  {
    id: 4,
    top: { id: 4, name: "Medix", logo: "/medical/euromed/p4.png" },
    bottom: { id: 8, name: "NATPET", logo: "/medical/euromed/p8.png" },
  },
  {
    id: 5,
    top: { id: 9, name: "BILLERUDKORSNÄS", logo: "/medical/euromed/p10.png" },
    bottom: { id: 10, name: "NATPET", logo: "/medical/euromed/p9.png" },
  },
  {
    id: 6,
    top: { id: 11, name: "WEGO Global", logo: "/medical/euromed/p1.png" },
    bottom: { id: 12, name: "Quilaban Care", logo: "/medical/euromed/p5.png" },
  },
];

// Duplicate for seamless infinite loop
const DISPLAY_PAIRS: PartnerColumnPair[] = [
  ...ORIGINAL_PAIRS,
  ...ORIGINAL_PAIRS,
];

export default function OurPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const totalOriginal = ORIGINAL_PAIRS.length;

  // Responsive visible count: 4 on desktop, 3 on tablet, 2 on mobile
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Seamless reset after sliding past the original items
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Re-enable transition on next frame after instantaneous reset
  useEffect(() => {
    if (!isTransitioning) {
      const rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [isTransitioning]);

  // Auto slide 1 by 1 column pair every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // 3 Indicator bars matching the screenshot (each covers 2 pairs)
  const activeIndicator = Math.floor((currentIndex % totalOriginal) / 2);

  const handleIndicatorClick = (indicatorIdx: number) => {
    setIsTransitioning(true);
    setCurrentIndex(indicatorIdx * 2);
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-14 sm:py-20 md:py-24 overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Top Header Row with Title, Description, and CTA Button */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Heading & Description */}
          <div className="max-w-4xl">
            <h2 className="section-title font-semibold tracking-tight font-outfit">
              Our <span className="text-[#d40708]">Partners</span>
            </h2>
            <p className="section-text mt-2 sm:mt-3 leading-relaxed font-outfit">
              Building stronger healthcare solutions through trusted partnerships. Euromed
              collaborates with reliable global partners who share our commitment to
              quality, innovation, and excellence, helping us deliver dependable medical
              products and solutions to customers worldwide.
            </p>
          </div>

          {/* Right: Explore Partners CTA Button */}
          <div className="flex-shrink-0">
            <Button href="#partners-network" variant="primary" rounded="sm">
              Explore Partners
            </Button>
          </div>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full h-px bg-slate-200 my-6 sm:my-8" />

        {/* Partners Logo Cards Slider - Always 2 rows (Top & Bottom pair), slides 1 by 1 set */}
        <div
          className="relative mt-8 sm:mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <div
            className={`flex -mx-2 sm:-mx-3 ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
              }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {DISPLAY_PAIRS.map((pair, idx) => (
              <div
                key={`${pair.id}-${idx}`}
                className="flex-shrink-0 px-2 sm:px-4"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="flex flex-col gap-4 sm:gap-6">
                  {/* Top Card */}
                  <div className="bg-white border border-slate-200/90 shadow-sm rounded-none p-3 flex items-center justify-center h-28 sm:h-32 md:h-36 group hover:shadow-md hover:border-slate-300 transition-all duration-300">
                    <img
                      src={pair.top.logo}
                      alt={pair.top.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Card */}
                  <div className="bg-white border border-slate-200/90 shadow-sm rounded-none p-3 flex items-center justify-center h-28 sm:h-32 md:h-36 group hover:shadow-md hover:border-slate-300 transition-all duration-300">
                    <img
                      src={pair.bottom.logo}
                      alt={pair.bottom.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator Bars (3 bars matching screenshot) */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {[0, 1, 2].map((indicatorIdx) => {
            const isActive = activeIndicator === indicatorIdx;
            return (
              <button
                key={indicatorIdx}
                type="button"
                onClick={() => handleIndicatorClick(indicatorIdx)}
                aria-label={`Go to partner group ${indicatorIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                  ? "w-8 sm:w-10 bg-[#d40708]"
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
