"use client";

import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface Product {
  id: number;
  title: string;
  image: string;
}

// Products slider data and configuration
const products: Product[] = [
  {
    id: 1,
    title: "Electro\nEncephalography",
    image: "/medical/neurosoft/p1.png",
  },
  {
    id: 2,
    title: "Sleep\nDiagnostics",
    image: "/medical/neurosoft/p2.png",
  },
  {
    id: 3,
    title: "ElectroMyography",
    image: "/medical/neurosoft/p3.png",
  },
  {
    id: 4,
    title: "Magnetic\nStimulation",
    image: "/medical/neurosoft/p4.png",
  },
  {
    id: 5,
    title: "Peripheral Magnetic\nStimulation",
    image: "/medical/neurosoft/p5.png",
  },
  {
    id: 6,
    title: "Audiology",
    image: "/medical/neurosoft/p6.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="w-full py-16 sm:py-20 lg:py-24 min-[2500px]:py-36 bg-[#F5F5F5] overflow-hidden select-none">
      <div className="custom-container">
        <div className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-end min-[1026px]:justify-between gap-6 pb-6" data-aos="fade-up">
          <div className="space-y-3 xl:max-w-[70%]">
            <h2 className="!text-[#2A2A2A] font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[32px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] leading-[150%] capitalize">
              Our Products
            </h2>
            <p className="!text-[#4A4A4A] font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
              Explore Neurosoft&apos;s range of medical equipment and diagnostic solutions, designed to support
              healthcare professionals across diverse clinical applications.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              text="Explore All Products"
              variant="navy"
              showIcon={true}
              className="text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12"
            />
          </div>
        </div>

        <div className="w-full h-px bg-black/20 my-6 sm:my-8" />

        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".products-pagination",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1025: { slidesPerView: 2, spaceBetween: 24 },
              1026: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
              3800: { slidesPerView: 4, spaceBetween: 64 },
            }}
            className="w-full"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="w-full h-full bg-white rounded-[20px] p-5 sm:p-6 lg:p-7 min-[2500px]:p-12 min-[3800px]:p-16 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group">
                  <div className="product-card-img w-full h-[220px] sm:h-[260px] md:h-[290px] min-[1026px]:h-[320px] rounded-[15px] overflow-hidden border border-black/10 bg-white mb-5 sm:mb-6 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title.replace("\n", " ")}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-auto pt-2 min-h-[58px] sm:min-h-[64px] min-[2500px]:min-h-[100px]">
                    <h3 className="!text-[#2A2A2A] font-baloo font-semibold text-[18px] sm:text-[20px] md:text-[22px] min-[2500px]:text-[32px] min-[3800px]:text-[42px] leading-[130%] capitalize whitespace-pre-line">
                      {item.title}
                    </h3>

                    <button
                      type="button"
                      aria-label={`View ${item.title.replace("\n", " ")}`}
                      className="product-card-arrow-btn w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full bg-[#0AADF9] hover:bg-[#0896d8] flex items-center justify-center text-white shrink-0 group-hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
                    >
                      <svg
                        className="product-card-arrow-icon w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="neurosoft-pagination products-pagination" />
        </div>
      </div>
    </section>
  );
}
