"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const productsList = [
  {
    title: "Lifetime SA01HT ( Surgical Aspirators )",
    description: "Hospital suction with electronic controls, dual collection jars and an integrated mobile stand.",
    image: "/medical/airblend/s1.webp",
  },
  {
    title: "Nebtime CN01 ( Nebulizers )",
    description: "Compact compressor nebulization with a hidden carry handle and a small footprint.",
    image: "/medical/airblend/s2.webp",
  },
  {
    title: "Healthtime OC5 ( Oxygen Line )",
    description: "An adjustable one-piece rigid cervical collar designed for adult patient support.",
    image: "/medical/airblend/s3.webp",
  },
  {
    title: "Lifetime Adults Collar ( Rescue Solutions )",
    description: "An adjustable one-piece rigid cervical collar designed for adult patient support.",
    image: "/medical/airblend/s4.webp",
  },
  {
    title: "Extracorporeal ( SINGLE-USE SYSTEMS )",
    description: "Tubing sets and components for extracorporeal circulation and cardiovascular procedures.",
    image: "/medical/airblend/s5.webp",
  },
];

/**
 * Products Section ("Advanced Medical Solutions") - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Section Header:
 *    - Left: Title "Advanced Medical Solutions" + description.
 *    - Right: CTA Button "Explore Our Products".
 *    - Full-width divider line.
 * 2. Swiper Carousel Integration:
 *    - Card style: Charcoal container (#6D6D6D), white inner frame for image, white title & copy, "Read More" pill button.
 *    - Breakpoints: 1 slide (<768px), 2 slides (768px-1279px), 3 slides (>=1280px).
 *    - Custom pill bullet pagination (active: 64px width #7BC142, inactive: 9px #D9D9D9).
 */
const Products = () => {
  return (
    <section id="products-section" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Section Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-black/20"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="secondary"
              className="text-2xl sm:text-3xl lg:text-[30px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] font-semibold text-[#2A2A2A]"
            >
              Advanced Medical Solutions
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#4A4A4A]"
            >
              Airblend provides reliable medical products for emergency care, respiratory therapy, surgical procedures, and critical healthcare applications, ensuring quality, safety, and performance.
            </Typography>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <Button
              text="Explore Our Products"
              href="#products-section"
              variant="primary"
            />
          </div>
        </div>

        {/* Products Swiper Slider */}
        <div className="w-full mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} airblend-pill-bullet"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1036: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
              2500: { slidesPerView: 3, spaceBetween: 36 },
            }}
            className="w-full !pb-14 overflow-hidden"
          >
            {productsList.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex p-1">
                {/* Product Card: #6D6D6D background, white text, sharp corners (rounded-none) */}
                <div className="w-full bg-[#6D6D6D] text-white rounded-none p-6 sm:p-7 border border-white/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  {/* Inner White Frame for Product Image */}
                  <div className="w-full aspect-[4/3] rounded-none border border-white/50 bg-white flex items-center justify-center p-6 overflow-hidden mb-6 group-hover:border-white transition-colors">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3 mb-6">
                    <Typography
                      variant="h3"
                      color="white"
                      className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-semibold leading-snug"
                    >
                      {product.title}
                    </Typography>
                    <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl leading-relaxed text-white/90">
                      {product.description}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="pt-2 mt-auto">
                    <Button
                      text="Read More"
                      href="#products-section"
                      variant="primary"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .airblend-pill-bullet {
          width: 9px !important;
          height: 9px !important;
          border-radius: 9999px !important;
          background-color: #d9d9d9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          border: none !important;
        }
        .swiper-pagination-bullet-active.airblend-pill-bullet {
          width: 64px !important;
          background-color: #7bc142 !important;
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
