"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const PRODUCTS = [
  { image: "/medical/microval/p1.png", alt: "HERNIES COELIO", title: "HERNIES COELIO" },
  { image: "/medical/microval/p2.png", alt: "HERNIES LAPARO", title: "HERNIES LAPARO" },
  { image: "/medical/microval/p3.png", alt: "HERNIES EVENTRATIONS", title: "HERNIES EVENTRATIONS" },
  { image: "/medical/microval/p4.png", alt: "FIXATIONS SUTURES", title: "FIXATIONS SUTURES" },
  { image: "/medical/microval/p5.png", alt: "NOTICES", title: "NOTICES" },
];

export default function ProductSolutions() {
  return (
    <section id="product-solutions" className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-12">

        {/* Section Heading & Subtitle */}
        <div
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[30px] h-[4px] bg-[#DF0001] rounded-full shadow-[0px_5px_15px_0px_#DF00018C]"></div>
            <span className="font-dmsans font-bold text-[#DF0001] section-text tracking-widest uppercase">
              PRODUCTS
            </span>
          </div>

          <h2 className="section-title font-semibold tracking-tight font-dmsans text-[#111111] mb-5 leading-snug">
            Innovative Surgical Solutions for Hernia Care
          </h2>
          <p className="section-text leading-relaxed font-inter font-regular text-[#4B5563]">
            MicroVal provides specialized implants, fixation systems, and surgical solutions designed to support healthcare professionals in hernia repair and related surgical procedures.
          </p>
        </div>

        {/* Custom Pagination Styles for Swiper */}
        <style jsx global>{`
          .product-slider {
            padding-bottom: 50px !important; /* Space for pagination */
          }
          .product-slider .swiper-pagination {
            bottom: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
          }
          .product-slider .swiper-pagination-bullet {
            width: 45px;
            height: 6px;
            border-radius: 4px;
            border: 1px solid #3CC4A3;
            background-color: #ffffff;
            opacity: 1;
            margin: 0 !important;
            transition: all 0.3s ease;
          }
          .product-slider .swiper-pagination-bullet-active {
            background-color: #3CC4A3;
          }
        `}</style>

        {/* Swiper Slider Layout */}
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="150"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            className="product-slider"
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 32,
              }
            }}
          >
            {PRODUCTS.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="relative overflow-hidden group cursor-pointer w-full h-full flex flex-col items-center justify-between">
                  <div className="flex-1 flex items-center justify-center w-full relative">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="max-h-full max-w-full w-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 product-slide-img"
                    />
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
