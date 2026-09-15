"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function News() {
  const catalogs = [
    {
      title: "Cranio Maxillofacial System",
      image: "/medical/seles/p5.png",
    },
    {
      title: "Mini Fragment Plating System",
      image: "/medical/seles/p6.png",
    },
    {
      title: "Upper Extremity Trauma Plates",
      image: "/medical/seles/p7.png",
    },
    {
      title: "Lower Extremity Trauma Plates",
      image: "/medical/seles/p8.png",
    },
  ];

  return (
    <section id="news" className="w-full relative z-10 py-14 sm:py-20 md:py-24 min-[2000px]:py-32 min-[3000px]:py-40 bg-black">
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">

        {/* Header Section */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16 min-[2000px]:mb-24 min-[3000px]:mb-32">
          <div data-aos="fade-up">
            <h2 className="mb-4 min-[2000px]:mb-8 min-[3000px]:mb-10 capitalize text-center text-[24px] sm:text-[32px] min-[2000px]:text-[44px] min-[3000px]:text-[56px] text-white font-orbitron font-semibold">
              Product Catalogs
            </h2>
          </div>

          <p
            className="text-[16px] sm:text-[18px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] leading-[160%] text-[#D1D1D1] max-w-7xl min-[2000px]:max-w-[80%] min-[3000px]:max-w-[70%] mx-auto px-2 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore our complete portfolio of Trauma, Spine, and Craniomaxillofacial (CMF) solutions, designed to meet a wide range of orthopedic and surgical requirements. Discover our latest product catalogs for detailed information on our advanced systems, technologies, and solutions.
          </p>
        </div>

        {/* Catalogs Grid/Carousel */}
        <div className="w-full relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full !pb-16"
          >
            {catalogs.map((catalog, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="group relative bg-[#090909] border border-white/20 overflow-hidden flex flex-col p-6 min-[2000px]:p-8 min-[3000px]:p-10 h-full transition-all duration-300 hover:border-[#DBA018]/50 cursor-pointer"
                >
                  {/* Catalog Image */}
                  <div className="w-full aspect-[3/4] flex items-center justify-center mb-6 min-[2000px]:mb-8 min-[3000px]:mb-10 overflow-hidden">
                    <img
                      src={catalog.image}
                      alt={catalog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text & Icon Row */}
                  <div className="mt-auto flex items-end justify-between mb-3 min-[2000px]:mb-5 gap-4">
                    <h3 className="text-white text-[16px] sm:text-[18px] min-[2000px]:text-[24px] min-[3000px]:text-[32px] font-orbitron font-medium leading-tight">
                      {catalog.title}
                    </h3>
                    {/* Yellow Icon bottom right */}
                    <div className="w-[40px] h-[40px] min-[2000px]:w-[55px] min-[2000px]:h-[55px] min-[3000px]:w-[70px] min-[3000px]:h-[70px] shrink-0 rounded-full bg-[#DBA018] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                        <path d="M5 19L19 5M19 5v14M19 5H5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Global override for Swiper Pagination to match Figma's yellow dash */}
      <style dangerouslySetInnerHTML={{
        __html: `
        #news .swiper-pagination-bullet {
          width: 30px;
          height: 5px;
          border-radius: 10px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        #news .swiper-pagination-bullet-active {
          background: #DBA018;
          opacity: 1;
          width: 40px;
        }
      `}} />
    </section>
  );
}