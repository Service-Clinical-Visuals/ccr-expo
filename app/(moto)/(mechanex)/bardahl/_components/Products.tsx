"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const productItems = [
  {
    name: "RFF+ Flush Treatment",
    image: "/moto/bardahl/s1.webp",
  },
  {
    name: "PROSHINE CF1 Ultra Fine Polish",
    image: "/moto/bardahl/s2.webp",
  },
  {
    name: "E60 Multi-Use Spray",
    image: "/moto/bardahl/s3.webp",
  },
  {
    name: "Syn-Polar N SAE 5W-30",
    image: "/moto/bardahl/s4.webp",
  },
  {
    name: "Performance Additive Series",
    image: "/moto/bardahl/s5.webp",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-[#121111] overflow-hidden relative">
      <div className="custom-container relative z-10 flex flex-col gap-8 xl:gap-10">
        {/* Top Header Block with Watermark */}
        <div className="relative pt-6 sm:pt-8 md:pt-10 pb-0" data-aos="fade-up">
          {/* Giant Watermark directly positioned behind header text on mobile/tablet, keeping desktop layout */}
          <div className="absolute top-1 sm:top-2 md:top-4 xl:top-auto xl:bottom-0 left-0 pointer-events-none select-none z-0 max-w-[95%] sm:max-w-[90%] xl:max-w-[80%] overflow-hidden flex items-start xl:items-end">
            <span className="watermark !text-[clamp(44px,8.5vw,185px)] min-[2500px]:!text-[270px] min-[3800px]:!text-[380px] leading-none">
              Our Products
            </span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-[90%] xl:max-w-[80%]">
              <Typography
                variant="h2"
                color="white"
                className="text-2xl sm:text-3xl lg:text-[38px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-normal uppercase tracking-wide leading-tight w-full max-w-[90%] xl:max-w-[80%]"
              >
                Comprehensive Automotive Solutions
              </Typography>

              <Typography
                variant="p"
                color="muted"
                className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal w-full max-w-[90%] xl:max-w-[80%]"
              >
                Discover Bardahl’s comprehensive range of automotive products designed for retail customers,
                workshops, and OEM dealerships. Combining innovative technology with proven expertise, our
                solutions help enhance engine performance, protect vital components, improve efficiency, and ensure
                reliable operation across diverse automotive applications.
              </Typography>
            </div>

            {/* Circular Action Button */}
            <div className="shrink-0 self-start lg:self-center">
              <Button
                variant="circle"
                href="#products"
                iconDirection="up-right"
                aria-label="View all automotive solutions"
              />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20" />

        {/* Products Swiper Slider */}
        <div className="w-full mt-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={false}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bardahl-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
              2500: {
                slidesPerView: 4,
                spaceBetween: 36,
              },
            }}
            className="w-full !pb-14"
          >
            {productItems.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="group relative flex-1 w-full aspect-[3/4] rounded-[24px] bg-[#E1E3E7] hover:bg-[#EBEDF0] p-6 sm:p-8 flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-[85%] max-w-[85%] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .bardahl-bullet {
          width: 9px !important;
          height: 9px !important;
          border-radius: 36px !important;
          background-color: #d9d9d9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active.bardahl-bullet {
          width: 54px !important;
          background-color: #f8ea17 !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
