"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Inogen One G5 System",
    image: "/medical/inogen/p1.webp",
    link: "#",
  },
  {
    title: "Inogen Rove 4 System",
    image: "/medical/inogen/p2.webp",
    link: "#",
  },
  {
    title: "Inogen Rove 6 System",
    image: "/medical/inogen/p3.webp",
    link: "#",
  },
];

/**
 * Products Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Section Header:
 *    - Uses `w-full max-w-full xl:max-w-[70%] mx-auto` to cap heading and intro copy on wide displays.
 * 2. Swiper Carousel Integration:
 *    - Responsive breakpoints: 1 slide (<768px), 2 slides (768px-1279px), 3 slides (>=1280px).
 *    - Custom pill pagination bullet styling.
 * 3. Product Card Styling:
 *    - Card container: Asymmetrical border-radius (`rounded-tl-[32px] sm:rounded-tl-[48px] rounded-br-[32px] sm:rounded-br-[48px]`).
 *    - Media frame: Fixed aspect ratio (`aspect-[4/3] sm:aspect-square`) with max-height constraint
 *      to ensure uniform heights across all product cards regardless of image dimensions.
 */
const Products = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header: Constrained to xl:max-w-[70%] on desktop for optimal line measure */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
          >
            Explore Our Oxygen Solutions
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#555555]"
          >
            Discover a comprehensive range of advanced portable oxygen therapy solutions designed to support patients in maintaining mobility, comfort, and independence throughout their daily routines. Combining innovative oxygen delivery technology, lightweight designs, flexible power options, and user-friendly features, our systems provide convenient oxygen therapy solutions for different lifestyles and care requirements.
          </Typography>
        </div>

        {/* Products Swiper / Grid */}
        <div className="w-full mt-12 sm:mt-16" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} inogen-pill-bullet"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full !pb-14 overflow-hidden xl:!overflow-visible"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex p-1 sm:p-1.5">
                {/* Product Card: blackgrey border + rounded ONLY top-left & bottom-right */}
                <div className="w-full bg-white rounded-tl-[32px] sm:rounded-tl-[48px] rounded-br-[32px] sm:rounded-br-[48px] rounded-tr-none rounded-bl-none p-6 sm:p-8 border border-gray-400 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center group">
                  
                  {/* Inner Image Frame: blackgrey border + rounded ONLY top-left & bottom-right */}
                  <div className="w-full aspect-[4/3] sm:aspect-square max-h-[280px] sm:max-h-[320px] rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none border border-gray-300 flex items-center justify-center p-6 bg-white overflow-hidden mb-6 group-hover:border-gray-400 transition-colors cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Title & Action */}
                  <div className="flex flex-col items-center gap-2 mt-auto">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-1.5 min-[2500px]:gap-3 min-[3800px]:gap-4 text-[#0B3090] hover:text-[#082470] font-semibold text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-all duration-300 ease-in-out mt-1 group/link cursor-pointer"
                    >
                      <span>View More</span>
                      <img
                        src="/medical/inogen/ba.webp"
                        alt="arrow"
                        className="w-[12px] h-[9px] min-[2500px]:w-[20px] min-[2500px]:h-[15px] min-[3800px]:w-[28px] min-[3800px]:h-[21px] group-hover/link:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
                      />
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .inogen-pill-bullet {
          width: 24px !important;
          height: 6px !important;
          border-radius: 9999px !important;
          background-color: #d1d5db !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          border: none !important;
        }
        .swiper-pagination-bullet-active.inogen-pill-bullet {
          width: 44px !important;
          background-color: #0B3090 !important;
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
