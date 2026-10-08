"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const GALLERY_IMAGES = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7].map(
  (n) => `/medical/herniamesh-srl/${n}.webp`,
);

export default function OurGallery() {
  return (
    <section id="gallery" className="py-14 sm:py-16 xl:py-20">
      <div className="custom-container xl:px-6 2xl:px-8">
        {/* Heading */}
        <div className="grid grid-cols-12" data-aos="fade-up">
          <div className="col-span-12 min-[64.0625rem]:col-start-2 min-[64.0625rem]:col-span-10 xl:col-start-3 xl:col-span-8 text-center">
            <h2 className="section-title font-semibold text-slate-900">Our Gallery</h2>
            <p className="section-text mt-3 ">
              Discover our gallery showcasing Herniamesh® products, mesh designs, surgical
              applications, and company activities. Explore detailed visuals that highlight our
              medical solutions, product development, and commitment to quality.
            </p>
          </div>
        </div>

        {/* Gallery Carousel */}
        <div className="mt-8 sm:mt-10" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="herniamesh-swiper"
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={false}
            speed={700}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              1025: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
            }}
          >
            {GALLERY_IMAGES.map((src, index) => (
              <SwiperSlide key={src}>
                <div className="group relative w-full aspect-[508/457] rounded-tl-[28px] rounded-br-[28px] sm:rounded-tl-[40px] sm:rounded-br-[40px] overflow-hidden bg-slate-100">
                  <img
                    src={src}
                    alt={`Herniamesh gallery image ${index + 1}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
