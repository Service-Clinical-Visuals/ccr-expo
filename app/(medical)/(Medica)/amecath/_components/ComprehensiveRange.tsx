"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { CircleDot, ArrowLeft, ArrowRight } from "lucide-react";

interface ProductItem {
  id: number;
  title: string;
  icon: string;
  shortDesc: string;
  href: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Intravascular",
    icon: "/medical/amecath/1.png",
    shortDesc: "We are proud to offer a comprehensive range of vascular access solutions",
    href: "#intravascular",
  },
  {
    id: 2,
    title: "Pediatric",
    icon: "/medical/amecath/2.png",
    shortDesc: "Introducing our exclusive range of gentle pediatric catheter systems",
    href: "#pediatric",
  },
  {
    id: 3,
    title: "Dialysis",
    icon: "/medical/amecath/6.png",
    shortDesc: "We offer a wide range of AMECATH high-flow hemodialysis catheters",
    href: "#dialysis",
  },
  {
    id: 4,
    title: "Urology",
    icon: "/medical/amecath/3.png",
    shortDesc: "Explore our extensive selection of double loop ureteral stents and drainage sets",
    href: "#urology",
  },
  {
    id: 5,
    title: "Accessories",
    icon: "/medical/amecath/4.png",
    shortDesc: "Discover our wide range of medical procedure accessories and adaptors",
    href: "#accessories",
  },
  {
    id: 6,
    title: "OEM Offering",
    icon: "/medical/amecath/5.png",
    shortDesc: "For over 15 years, AMECATH OEM products have delivered custom precision manufacturing",
    href: "#oem",
  },
];

export default function ComprehensiveRange() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth / 3;
      const scrollAmount = direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateScrollState, 350);
    }
  };

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white relative">
      <div className="custom-container">
        {/* Header Section */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-14">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 text-[#155184] font-medium section-subtitle mb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <CircleDot className="w-5 h-5 text-[#155184]" />
            <span className="font-raleway section-subtitle font-semibold tracking-wide">
              Our Products/OEM
            </span>
          </div>

          {/* Heading */}
          <h2
            className="section-title font-semibold text-slate-900 font-raleway tracking-tight leading-tight mb-4 sm:mb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Explore Our Comprehensive Range of Products &amp; Services
          </h2>

          {/* Description */}
          <p
            className="section-text text-slate-600 font-normal font-inter leading-relaxed max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            Discover innovative, high-quality medical solutions designed to meet diverse clinical and healthcare needs across Intravascular, Dialysis, Urology, Pediatric, and OEM applications. From advanced medical devices to customized OEM solutions, our extensive portfolio is developed with a focus on precision, reliability, patient safety, and clinical performance.
          </p>
        </div>

        {/* Carousel / Slider Container */}
        <div
          className="relative px-2 sm:px-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {/* Navigation Button: Prev */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous products"
            className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#155184] hover:bg-[#103f68] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer ${!canScrollLeft ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          {/* Navigation Button: Next */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next products"
            className={`absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#155184] hover:bg-[#103f68] text-white flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer ${!canScrollRight ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          {/* Horizontal Scrollable Track */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4 px-1"
          >
            {PRODUCTS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex-shrink-0 w-[260px] sm:w-[280px] md:w-[calc(50%-0.75rem)] xl:w-[calc(25%-1.125rem)] min-h-[210px] sm:min-h-[220px] bg-white rounded-2xl border border-slate-200 hover:border-[#155184] p-5 sm:p-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg select-none cursor-pointer"
              >
                {/* Icon Wrapper that smoothly moves to left on hover */}
                <div className="w-full flex justify-center items-center transition-all duration-500 ease-out">
                  <div className="transform transition-transform duration-500 ease-out group-hover:-translate-x-[75px] sm:group-hover:-translate-x-[85px] md:group-hover:-translate-x-[90px] xl:group-hover:-translate-x-[95px]">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-700 group-hover:bg-[#155184] transition-colors duration-300"
                      style={{
                        maskImage: `url(${item.icon})`,
                        WebkitMaskImage: `url(${item.icon})`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                    />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="card-title font-semibold font-raleway transition-colors duration-300 text-slate-900 group-hover:text-[#155184] mt-3">
                  {item.title}
                </h3>

                {/* Expandable Text Description on Hover */}
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="card-text text-slate-600 font-inter mt-2 leading-relaxed">
                    {item.shortDesc}
                    <span className="text-[#155184] font-medium ml-1">
                      ... Read more
                    </span>
                  </p>
                </div>

                {/* Bottom Right Arrow Icon on Hover */}
                <div className="absolute bottom-3.5 right-3.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                  <ArrowRight className="w-4 h-4 text-[#155184]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
