"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const galleryImages = [
  { id: 1, src: "/medical/demersan/g1.webp", alt: "Gallery 1" },
  { id: 2, src: "/medical/demersan/g2.webp", alt: "Gallery 2" },
  { id: 3, src: "/medical/demersan/g3.webp", alt: "Gallery 3" },
  { id: 4, src: "/medical/demersan/g4.webp", alt: "Gallery 4" },
  { id: 5, src: "/medical/demersan/g5.webp", alt: "Gallery 5" },
  { id: 6, src: "/medical/demersan/g6.webp", alt: "Gallery 6" },
  { id: 7, src: "/medical/demersan/g7.webp", alt: "Gallery 7" },
  { id: 8, src: "/medical/demersan/g8.webp", alt: "Gallery 8" },
];

const Production = () => {
  return (
    <section id="gallery" className="w-full relative bg-white">
      {/* Blue Top Half */}
      <div className="w-full bg-[#192B6C] pt-20 pb-40 lg:pb-48">
        <div className="custom-container flex flex-col items-center text-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold text-3xl">
            Our Gallery
          </Typography>
          <Typography variant="p" color="white" className="max-w-4xl text-sm lg:text-base opacity-90 leading-relaxed">
            Explore the DEMERSAN gallery to discover our medical products, company facilities, events, and activities. Get a closer look at our work, solutions, and presence in the healthcare sector.
          </Typography>
        </div>
      </div>

      {/* Slider overlapping */}
      <div className="custom-container -mt-24 lg:-mt-32 pb-20 relative z-10 " data-aos="fade-up" data-aos-delay="200">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.gallery-swiper-pagination'
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform"
                  onError={(e) => {
                    // Fallback for missing placeholder images
                    e.currentTarget.src = "/medical/demersan/transparent-pattern.png";
                    e.currentTarget.className = "w-full h-full object-cover";
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="gallery-swiper-pagination mt-12 flex justify-center items-center w-full relative z-50"></div>

        {/* Global Styles for Gallery Pagination */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .gallery-swiper-pagination {
            display: flex !important;
            justify-content: center !important;
            gap: 8px !important;
          }
          .gallery-swiper-pagination .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            background-color: #D9D9D9 !important;
            opacity: 1 !important;
            margin: 0 !important;
            border-radius: 50px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
          }
          .gallery-swiper-pagination .swiper-pagination-bullet:nth-child(n+6) {
            display: none !important;
          }
          .gallery-swiper-pagination .swiper-pagination-bullet-active {
            width: 48px !important;
            background-color: #192B6C !important;
          }
        `}} />
      </div>
    </section>
  );
};

export default Production;
