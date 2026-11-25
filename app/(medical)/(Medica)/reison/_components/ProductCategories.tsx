"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const productCategories = [
  { title: "Armboards", image: "/medical/reison/p1.webp" },
  { title: "Arm & Hand surgery tables", image: "/medical/reison/p2.webp" },
  { title: "Supports", image: "/medical/reison/p3.webp" },
  { title: "Head Supports", image: "/medical/reison/p4.webp" },
  { title: "Clamps", image: "/medical/reison/p5.webp" },
  { title: "Widening Sections", image: "/medical/reison/p6.webp" },
  { title: "Positioning", image: "/medical/reison/p7.webp" },
  { title: "Relief & Protection", image: "/medical/reison/p8.webp" },
  { title: "Suspensions", image: "/medical/reison/p9.webp" },
  { title: "Straps & Fixation", image: "/medical/reison/p10.webp" },
  { title: "Instrument tables", image: "/medical/reison/p11.webp" },
  { title: "Transport & storage", image: "/medical/reison/p12.webp" },
];

/**
 * ProductCategories Section (p1, p2, p3, ...) - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Split Header Row:
 *    - Left: Title & Subtext (`w-full max-w-full xl:max-w-[70%]`).
 *    - Right: CTA Button `<Button text="Explore Our Products" ... />`.
 * 2. Swiper Carousel Integration:
 *    - Strict Tablet Breakpoint: 1 slide (<768px), 2 slides (768px-1035px), 3 slides (>=1036px).
 *    - Custom pill pagination bullets (`#E53B14` active pill, `#D9D9D9` dots).
 * 3. Card Styling:
 *    - Navy card background (`#2F3F5A`), rounded-3xl (`rounded-[30px]`), inner white frame for image.
 *    - Bottom row: Category title in white + red circular arrow button.
 */
const ProductCategories = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Section Header Row */}
        <div
          className="flex flex-col min-[1036px]:flex-row min-[1036px]:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2A2A2A] font-primary capitalize"
            >
              Our Product Categories – The Best OR Accessories On The Market!
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
            >
              We provide a wide range of OR-accessories for operating tables. By designing and manufacturing our products in Sweden, we maintain complete control over the entire process from design to final product, ensuring high quality and reliable delivery at every stage.
            </Typography>
          </div>

          <div className="shrink-0 self-start min-[1036px]:self-center">
            <Button
              text="Explore Our Products"
              variant="primary"
              href="#products"
              showIcon={true}
            />
          </div>
        </div>

        {/* Categories Swiper Carousel */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} reison-product-pill"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 }, // Tablet 768px - 1035px
              1036: { slidesPerView: 3, spaceBetween: 28 }, // Laptop / Desktop >= 1036px
              1440: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full !pb-14 overflow-hidden"
          >
            {productCategories.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex p-1 sm:p-1.5">
                {/* Navy Product Card */}
                <div className="w-full bg-[#2F3F5A] rounded-[30px] p-5 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer">

                  {/* Image Container - No white border or padding */}
                  <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Bottom Bar: Title & Circular Red Button */}
                  <div className="flex items-center justify-between mt-5 px-1">
                    <h3 className="font-primary text-lg sm:text-xl font-normal text-white tracking-wide truncate pr-2">
                      {item.title}
                    </h3>

                    {/* Red Circular Arrow Action Button */}
                    <div className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#E53B14] flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0">
                      <svg
                        className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .reison-product-pill {
          width: 10px !important;
          height: 10px !important;
          border-radius: 9999px !important;
          background-color: #D9D9D9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          border: none !important;
        }
        .swiper-pagination-bullet-active.reison-product-pill {
          width: 50px !important;
          background-color: #E53B14 !important;
        }
        @media (min-width: 2500px) {
          .reison-product-pill {
            width: 16px !important;
            height: 16px !important;
            margin: 0 7px !important;
          }
          .swiper-pagination-bullet-active.reison-product-pill {
            width: 80px !important;
          }
        }
        @media (min-width: 3800px) {
          .reison-product-pill {
            width: 24px !important;
            height: 24px !important;
            margin: 0 10px !important;
          }
          .swiper-pagination-bullet-active.reison-product-pill {
            width: 120px !important;
          }
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default ProductCategories;

