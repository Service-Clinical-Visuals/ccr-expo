/**
 * Products Section (p1, p2, p3, p4)
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Deep blue background container (#005781) with white typography.
 * 2. 4 Product Cards Carousel:
 *    - Sleep Diagnostics (p1.webp)
 *    - Blood Pressure (p2.webp)
 *    - Neurology (p3.webp)
 *    - Cardiology (p4.webp)
 * 3. Responsive carousel: Only 1 card visible on mobile/small screens, 2 on tablet, 3 on desktop.
 *    Navigation arrows horizontally centered on mobile.
 * 4. Bottom CTA Pill Banner ("NOT SURE WHICH DEVICE IS RIGHT FOR YOU?").
 */
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const products = [
  {
    title: "Sleep Diagnostics",
    image: "/medical/somno/p1.webp",
    link: "#",
    alt: "Sleep Diagnostics System",
  },
  {
    title: "Blood Pressure",
    image: "/medical/somno/p2.webp",
    link: "#",
    alt: "Continuous Blood Pressure Measurement",
  },
  {
    title: "Neurology",
    image: "/medical/somno/p3.webp",
    link: "#",
    alt: "Neurology EEG Diagnostics",
  },
  {
    title: "Cardiology",
    image: "/medical/somno/p4.webp",
    link: "#",
    alt: "Cardiology Diagnostic Solutions",
  },
];

export default function Products() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-[#005781] text-white overflow-hidden">
      {/* SVG Clip Path Definition for Slanted Image with Rounded Bottom Corners */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="product-img-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1 0 L 1 0.954 Q 1 1 0.968 1 L 0.117 1 Q 0.085 1 0.081 0.954 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="custom-container flex flex-col gap-10 lg:gap-14">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up">
          <div className="space-y-1.5 w-full max-w-full xl:max-w-[70%] text-center md:text-left">
            <span className="font-primary text-white/80 text-lg sm:text-[20px] uppercase tracking-wide">
              SOMNOtouch™ RESP eco
            </span>
            <h2 className="font-primary text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Our Comprehensive Product Solutions for Better Healthcare
            </h2>
          </div>

          {/* Navigation Arrows: Centered horizontally on small screens */}
          <div className="flex items-center justify-center self-center md:self-auto gap-3 min-[2500px]:gap-6 min-[3800px]:gap-8 shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous products"
              className="w-12 h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#F9F9F9] hover:bg-white text-[#005781] shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-13 min-[3800px]:h-13" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next products"
              className="w-12 h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#F9F9F9] hover:bg-white text-[#005781] shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-13 min-[3800px]:h-13" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Product Cards: 1 card visible on small screens (<768px), 2 on tablet, 3 on desktop */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full !overflow-hidden"
          >
            {products.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="group bg-white rounded-[16px] overflow-hidden shadow-lg flex flex-col cursor-pointer w-full h-full">
                  {/* Image Container with Slanted Left Edge and Rounded Bottom Corners */}
                  <div className="relative w-full aspect-[500/350] bg-white overflow-hidden">
                    <div
                      className="w-full h-full"
                      style={{
                        clipPath: "url(#product-img-clip)",
                        WebkitClipPath: "url(#product-img-clip)",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 pt-5 pb-6 flex flex-col gap-2 flex-1 justify-between">
                    <h3 className="font-primary text-[#212121] text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-4xl min-[3800px]:text-5xl leading-tight">
                      {item.title}
                    </h3>

                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 min-[2500px]:gap-2.5 font-primary text-[#005781] hover:text-[#004567] text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-4xl min-[3800px]:text-5xl underline underline-offset-4 transition-colors group/link mt-auto"
                    >
                      <span className="font-primary">View Products</span>
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Callout Pill Banner with Deleo/Inogen xl:max-w-[70%] concept */}
        <div
          className="w-full max-w-full xl:max-w-[70%] mx-auto bg-white rounded-full p-3 sm:px-8 sm:py-3.5 min-[2500px]:px-14 min-[2500px]:py-6 min-[3800px]:px-20 min-[3800px]:py-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <span className="font-primary text-[#005781] text-lg sm:text-xl md:text-2xl lg:text-[26px] min-[2500px]:text-4xl min-[3800px]:text-5xl tracking-wide text-center sm:text-left">
            NOT SURE WHICH DEVICE IS RIGHT FOR YOU?
          </span>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center text-center font-primary font-bold text-white bg-[#005781] hover:bg-[#004567] text-base sm:text-lg lg:text-[20px] min-[2500px]:text-3xl min-[3800px]:text-4xl px-8 min-[2500px]:px-14 min-[3800px]:px-20 py-2.5 min-[2500px]:py-4 min-[3800px]:py-6 rounded-full shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shrink-0 leading-none"
          >
            <span className="font-primary font-bold text-center leading-none">Contact</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

