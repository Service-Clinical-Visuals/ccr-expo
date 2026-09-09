"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  href: string;
}

const PRODUCTS: Product[] = [
  {
    id: "xcryo",
    name: "X°CRYO™",
    image: "/medical/ctn/1.png",
    href: "#xcryo",
  },
  {
    id: "ecabin",
    name: "e°CABIN™",
    image: "/medical/ctn/2.png",
    href: "#ecabin",
  },
  {
    id: "oxypro",
    name: "OxyPro™",
    image: "/medical/ctn/3..png",
    href: "#oxypro",
  },
  {
    id: "xtone",
    name: "X-TONE®",
    image: "/medical/ctn/4.png",
    href: "#xtone",
  },
  {
    id: "ledpro-vert",
    name: "LedPro VERTICAL",
    image: "/medical/ctn/5.png",
    href: "#ledpro-vert",
  },
  {
    id: "ledpro",
    name: "LedPro™",
    image: "/medical/ctn/6.png",
    href: "#ledpro",
  },
  {
    id: "cryolocal",
    name: "CryoLocal™",
    image: "/medical/ctn/7.png",
    href: "#cryolocal",
  },
  {
    id: "recoverypod",
    name: "Recovery Pod™",
    image: "/medical/ctn/8.png",
    href: "#recoverypod",
  },
];

const TOTAL_SLIDES = 4;

export default function WellnessDevices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive visible count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, PRODUCTS.length - visibleCount);
  const stepSize = Math.ceil(maxIndex / (TOTAL_SLIDES - 1));
  const currentIndex = currentSlide === TOTAL_SLIDES - 1
    ? maxIndex
    : Math.min(maxIndex, currentSlide * stepSize);

  // Auto-slide effect every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= TOTAL_SLIDES - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= TOTAL_SLIDES - 1 ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 ">
      <div className="custom-container px-2 md:px-10">

        {/* Section Header: Centered Title & Description */}
        <div
          className="flex flex-col items-center text-center max-w-7xl mx-auto mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title tracking-tight font-semibold">
            <span className="text-slate-900">Explore Our </span>
            <span className="text-[#2b7ab7]">Wellness Devices</span>
          </h2>

          <p className="section-text text-slate-600 mt-4 sm:mt-5 max-w-6xl leading-relaxed">
            CTN&apos;s innovative cryotherapy, hyperbaric oxygen therapy, muscle stimulation,
            and red light therapy devices are powered by advanced recovery technology and
            designed for professional and home use. Combining smart functionality,
            intuitive operation, and reliable performance, CTN solutions make it easier to
            integrate effective recovery and wellness treatments into everyday routines and
            professional environments.
          </p>
        </div>

        {/* Products Slider Container */}
        <div
          className="relative w-full overflow-hidden select-none py-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out -mx-3 sm:-mx-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-3 sm:px-4"
                style={{
                  width: `${100 / visibleCount}%`,
                }}
              >
                {/* Product Card matching screenshot exactly */}
                <div className="relative bg-white rounded-xs border border-slate-200 p-5 drop-shadow-md overflow-hidden aspect-square transition-all duration-300  group select-none">

                  {/* Top-Right Geometric Blue L-Frame Corner Accent with 45° beveled ends */}
                  <svg
                    className="absolute top-0 right-0 w-[110px] h-[110px] pointer-events-none z-10"
                    viewBox="0 0 110 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 15 0 L 110 0 L 110 95 L 90 75 L 90 20 L 35 20 Z"
                      fill="#2b7ab7"
                    />
                  </svg>

                  {/* Inner Border Frame */}
                  <div className="relative w-full h-full border border-slate-200 flex items-center justify-center z-20">

                    {/* Top-Right Circular CTA Arrow Button */}
                    <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 z-30">
                      <Link
                        href={product.href}
                        aria-label={`View details for ${product.name}`}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2b7ab7] hover:bg-[#206396] text-white flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-110 active:scale-95"
                      >
                        <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" strokeWidth={2.4} />
                      </Link>
                    </div>

                    {/* Center Product Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={320}
                        height={320}
                        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter "
                        priority={product.id === "xcryo"}
                      />
                    </div>

                    {/* Bottom-Right Product Name */}
                    {/* <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 z-30">
                      <span className="card-title font-semibold text-slate-900 tracking-tight">
                        {product.name}
                      </span>
                    </div> */}

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots matching reference design */}
        <div
          className="flex items-center justify-center gap-2 mt-8 sm:mt-12"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="250"
        >
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                  isActive
                    ? "w-8 sm:w-10 bg-[#2b7ab7]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
