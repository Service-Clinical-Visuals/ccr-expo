"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Famed OPTIMA X-Line™ (5.70, 5.60)",
    text: "Famed OPTIMA is an operating table featuring the xMotionPro™ ultra-precise control system and adjustable…",
    image: "/medical/famed/p1.webp",
    hoverImage: "/medical/famed/p11.webp",
  },
  {
    title: "Famed OPTIMA 5.20",
    text: "The Famed OPTIMA 5.20 is an operating table whose functionality has been optimally designed so that…",
    image: "/medical/famed/p2.webp",
    hoverImage: "/medical/famed/p22.webp",
  },
  {
    title: "Famed PRIME X Line™",
    text: "A universal, cost-effective operating table designed for ease of use and reliability.",
    image: "/medical/famed/p3.webp",
    hoverImage: "/medical/famed/p33.webp",
  },
  {
    title: "Famed NEXO",
    text: "An electrical hospital bed that provides comfort during a hospital stay, both in the general and Intensive Care Unit (ICU).",
    image: "/medical/famed/p4.webp",
    hoverImage: "/medical/famed/p44.webp",
  },
  {
    title: "Famed STRIDER",
    text: "Famed STRIDER is the essence of ergonomics and mobility. The stretcher is designed for fast and safe movement…",
    image: "/medical/famed/p5.webp",
    hoverImage: "/medical/famed/p55.webp",
  },
];

// Inactive bullets are small grey dots; the active one stretches into a blue pill
const paginationClass =
  "famed-product-pagination flex items-center justify-center gap-1.5 min-[2500px]:gap-3 min-[3800px]:gap-4 mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16 " +
  "[&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#D1D5DB] [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 " +
  "[&_.swiper-pagination-bullet]:!w-1.5 [&_.swiper-pagination-bullet]:!h-1.5 min-[2500px]:[&_.swiper-pagination-bullet]:!w-2.5 min-[2500px]:[&_.swiper-pagination-bullet]:!h-2.5 min-[3800px]:[&_.swiper-pagination-bullet]:!w-3.5 min-[3800px]:[&_.swiper-pagination-bullet]:!h-3.5 " +
  "[&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:!w-10 min-[2500px]:[&_.swiper-pagination-bullet-active]:!w-16 min-[3800px]:[&_.swiper-pagination-bullet-active]:!w-24";

/**
 * Product slider: 3 cards per view on desktop. Hovering a product image cross-fades to
 * its second photo.
 */
const Products = () => {
  return (
    <section
      id="products"
      className="w-full bg-white py-14 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48"
    >
      <div className="custom-container">
        {/* Heading + intro */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 max-w-[880px] xl:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-[#1A1A1A]">Explore Our Medical Equipment Collection</h2>
          <p className="text-[#4A4A4A]">
            For over 78 years, Famed Żywiec has been designing and manufacturing reliable,
            high-quality medical equipment trusted by healthcare professionals worldwide. Our
            products combine innovation, functionality, and durability to support modern medical
            practices and diverse clinical needs.
          </p>
        </div>

        <div className="mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16" data-aos="fade-up" data-aos-delay="100">
          {/* Extra padding + negative margin keeps the card shadows from being clipped */}
          <Swiper
            modules={[Pagination, Autoplay]}
            className="!px-3 !py-4 !-mx-3 min-[2500px]:!px-5 min-[2500px]:!py-6 min-[2500px]:!-mx-5"
            slidesPerView={1}
            spaceBetween={20}
            loop={false}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: ".famed-product-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
              2500: { slidesPerView: 3, spaceBetween: 44 },
              3800: { slidesPerView: 3, spaceBetween: 60 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.title} className="!h-auto">
                <article className="h-full flex flex-col bg-white rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-4 2xl:p-5 min-[2500px]:p-8 min-[3800px]:p-11">
                  {/* Image — hover swaps to the second photo */}
                  <div className="group relative w-full aspect-[485/311] overflow-hidden bg-white border border-[#D9D9D9] rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[24px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      width={485}
                      height={311}
                      className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src={product.hoverImage}
                      alt=""
                      aria-hidden
                      width={485}
                      height={311}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="text-[#1A1A1A] mt-4 2xl:mt-5 min-[2500px]:mt-8">{product.title}</h3>
                  <p className="text-[#4A4A4A] mt-2 min-[2500px]:mt-3 line-clamp-2">{product.text}</p>

                  <a
                    href="#products"
                    className="link mt-auto pt-4 2xl:pt-5 min-[2500px]:pt-8 self-start text-primary !font-semibold underline underline-offset-4 min-[2500px]:underline-offset-8 hover:text-primary-hover transition-colors"
                  >
                    View More
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={paginationClass} />
        </div>
      </div>
    </section>
  );
};

export default Products;
