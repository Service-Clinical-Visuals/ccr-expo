"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const PRODUCTS = {
  devices: [
    { image: "/medical/flashman-uk/p5.webp", title: "Electronic Blood Pressure Monitor" },
    { image: "/medical/flashman-uk/p4.webp", title: "Infusion Workstation System" },
    { image: "/medical/flashman-uk/p1.webp", title: "Infusion Workstation System" },
    { image: "/medical/flashman-uk/p2.webp", title: "Anesthesia Machine" },
    { image: "/medical/flashman-uk/p3.webp", title: "Defibrillator Monitor" },
  ],
  implants: [
    { image: "/medical/flashman-uk/p1.webp", title: "Modular Surgical Systems" },
    { image: "/medical/flashman-uk/p2.webp", title: "Clinical Support Units" },
    { image: "/medical/flashman-uk/p4.webp", title: "Specialized Implant Workstations" },
    { image: "/medical/flashman-uk/p3.webp", title: "Surgical Monitoring Units" },
    { image: "/medical/flashman-uk/p5.webp", title: "Precision Implant Systems" },
  ],
};

export default function ProductSolutions() {
  const [activeCategory, setActiveCategory] = useState<"devices" | "implants">("devices");
  const swiperRef = useRef<SwiperType | null>(null);

  const currentProducts = PRODUCTS[activeCategory];

  return (
    <section
      id="product-solutions"
      className="relative w-full bg-[#2997AA] py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Background subtle wavy lines pattern */}
      <img
        src="/medical/flashman-uk/bg1.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-20 mix-blend-overlay"
      />

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-24 mx-auto">
        {/* Section Heading & Description */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2
            className="section-title text-white font-unbounded font-bold leading-tight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Comprehensive Medical Solutions for Modern Healthcare
          </h2>

          <p
            className="section-text text-white/90 font-inter leading-relaxed mt-4 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Explore our diverse range of medical devices designed to support healthcare professionals with reliable technology, efficient clinical workflows and improved patient care across diverse medical environments.
          </p>

          {/* Category Filter Pills */}
          <div
            className="flex items-center justify-center gap-3 sm:gap-4 mt-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <button
              type="button"
              onClick={() => {
                setActiveCategory("devices");
                swiperRef.current?.slideToLoop(2);
              }}
              className={`btn-text px-6 sm:px-8 py-2 rounded-full font-inter font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === "devices"
                  ? "bg-white text-[#2997AA] shadow-md font-semibold"
                  : "bg-transparent text-white border border-white/70 hover:border-white hover:bg-white/10"
              }`}
            >
              Medical Devices
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("implants");
                swiperRef.current?.slideToLoop(2);
              }}
              className={`btn-text px-6 sm:px-8 py-2 rounded-full font-inter font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === "implants"
                  ? "bg-white text-[#2997AA] shadow-md font-semibold"
                  : "bg-transparent text-white border border-white/70 hover:border-white hover:bg-white/10"
              }`}
            >
              Implants
            </button>
          </div>
        </div>

        {/* Custom styling for Coverflow-like 3D card scale and depth */}
        <style>{`
          .flashman-product-swiper {
            padding: 30px 0 50px 0 !important;
            overflow: visible !important;
          }
          .flashman-product-swiper .swiper-slide {
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            transform: scale(0.85);
            opacity: 0.75;
            z-index: 10;
          }
          .flashman-product-swiper .swiper-slide-prev,
          .flashman-product-swiper .swiper-slide-next {
            transform: scale(0.95);
            opacity: 0.92;
            z-index: 20;
          }
          .flashman-product-swiper .swiper-slide-active {
            transform: scale(1.12);
            opacity: 1;
            z-index: 30;
          }
        `}</style>

        {/* Carousel / Product Cards Showcase Container */}
        <div
          className="w-full relative mt-4 px-2 sm:px-8 lg:px-12"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="250"
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#2997AA] shadow-lg flex items-center justify-center hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-200 z-40 cursor-pointer focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#2997AA] shadow-lg flex items-center justify-center hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-200 z-40 cursor-pointer focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <Swiper
            key={activeCategory}
            modules={[Autoplay, Pagination, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            centeredSlides={true}
            initialSlide={2}
            loop={true}
            slideToClickedSlide={true}
            grabCursor={true}
            allowTouchMove={true}
            spaceBetween={16}
            slidesPerView={1.3}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 1.8,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.6,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.8,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4.8,
                spaceBetween: 24,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 28,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full flashman-product-swiper"
          >
            {currentProducts.map((product, idx) => (
              <SwiperSlide key={idx} className="flex items-center justify-center">
                <div className="group relative w-full max-w-[340px] flex flex-col items-center justify-center rounded-2xl cursor-pointer overflow-hidden transition-all duration-300">
                  {/* Product Card Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-contain rounded-2xl drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Animated Bottom Text Container */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex flex-col items-center justify-end overflow-hidden pointer-events-none rounded-b-2xl">
                    <div className="w-full bg-gradient-to-t from-[#A2D2DC] via-[#A2D2DC]/95 to-transparent pt-6 pb-2 px-2 rounded-b-2xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out text-center">
                      <h3 className="card-title font-unbounded font-semibold text-[#1E293B] leading-tight text-center">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
