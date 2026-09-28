"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const trademarks = [
  { id: 1, src: "/medical/demersan/t1.png", alt: "Primagel" },
  { id: 2, src: "/medical/demersan/t2.png", alt: "Primacath" },
  { id: 3, src: "/medical/demersan/t3.png", alt: "GoldCath" },
  { id: 4, src: "/medical/demersan/t4.png", alt: "GoldCath Kit" },
  { id: 5, src: "/medical/demersan/t5.png", alt: "Goldpad" },
];

const Anatomical = () => {
  return (
    <section id="trademarks" className="w-full py-20 bg-[#F9F9F9]">
      <div className="custom-container flex flex-col gap-8">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-[#0000003D] pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-[70%]">
            <div className="flex flex-wrap items-center gap-2">
              <Typography variant="h2" color="dark" className="font-semibold text-2xl lg:text-3xl">
                Registered
              </Typography>
              <Typography variant="h2" className="text-[#192B6C] font-semibold text-2xl lg:text-3xl">
                Trademarks
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="text-[13px] lg:text-sm leading-relaxed text-[#4A4A4A]">
              Explore DEMERSAN's Registered Trademarks And Discover The Brands Behind Our Specialised Medical Products And Solutions, Developed For Professional Healthcare Applications.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="View Trademarks" href="#trademarks" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full relative pt-2" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.trademarks-swiper-pagination'
            }}
            loop={true}
            className="w-full pb-10"
          >
            {trademarks.map((tm) => (
              <SwiperSlide key={tm.id}>
                <div className="w-full flex items-center justify-center">
                  <img
                    src={tm.src}
                    alt={tm.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/medical/demersan/transparent-pattern.png";
                      e.currentTarget.className = "w-full h-full object-cover opacity-20 group-hover:scale-100";
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="trademarks-swiper-pagination mt-8 flex justify-center items-center w-full"></div>

          {/* Global Styles for Trademarks Pagination */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .trademarks-swiper-pagination {
              display: flex !important;
              justify-content: center !important;
              gap: 8px !important;
            }
            .trademarks-swiper-pagination .swiper-pagination-bullet {
              width: 10px !important;
              height: 10px !important;
              background-color: #D9D9D9 !important;
              opacity: 1 !important;
              margin: 0 !important;
              border-radius: 50px !important;
              cursor: pointer !important;
              transition: all 0.3s ease !important;
            }
            .trademarks-swiper-pagination .swiper-pagination-bullet-active {
              width: 48px !important;
              background-color: #192B6C !important;
            }
          `}} />
        </div>

      </div>
    </section>
  );
};

export default Anatomical;
