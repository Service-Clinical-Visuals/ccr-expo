"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

const images = [
  { src: "/medical/echo-son/1.webp", alt: "Echo-Son headquarters building" },
  { src: "/medical/echo-son/2.webp", alt: "ALBIT ultrasound scanners on mobile trolleys" },
  { src: "/medical/echo-son/3.webp", alt: "Echo-Son team at an ultrasound exhibition stand" },
  { src: "/medical/echo-son/4.webp", alt: "Echo-Son building in winter" },
  { src: "/medical/echo-son/5.webp", alt: "Echo-Son office entrance" },
  { src: "/medical/echo-son/6.webp", alt: "Echo-Son exhibition booth" },
  { src: "/medical/echo-son/7.webp", alt: "Echo-Son engineers in the laboratory" },
  { src: "/medical/echo-son/8.webp", alt: "Echo-Son team group photo" },
];

// Inactive bullets are small grey dots; the active one stretches into a teal pill
const paginationClass =
  "echoson-gallery-pagination flex items-center justify-center gap-1.5 min-[2500px]:gap-3 min-[3800px]:gap-4 mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16 " +
  "[&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#D1D5DB] [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 " +
  "[&_.swiper-pagination-bullet]:!w-1.5 [&_.swiper-pagination-bullet]:!h-1.5 min-[2500px]:[&_.swiper-pagination-bullet]:!w-2.5 min-[2500px]:[&_.swiper-pagination-bullet]:!h-2.5 min-[3800px]:[&_.swiper-pagination-bullet]:!w-3.5 min-[3800px]:[&_.swiper-pagination-bullet]:!h-3.5 " +
  "[&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:!w-10 min-[2500px]:[&_.swiper-pagination-bullet-active]:!w-16 min-[3800px]:[&_.swiper-pagination-bullet-active]:!w-24";

/**
 * Gallery: heading row (title, intro, CTA) over a divider, then a 1 / 2 / 3-up image
 * slider with pill pagination. The rounded shapes and shadows are part of the images.
 */
const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative w-full py-14 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48"
    >
      <div className="custom-container">
        {/* Heading row */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10 min-[2500px]:gap-16 pb-6 sm:pb-7 2xl:pb-9 min-[2500px]:pb-12 border-b border-[#D9D9D9]"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 2xl:gap-3 min-[2500px]:gap-5 lg:max-w-[68%]">
            <h2 className="text-[#1A1A1A]">Explore Our World Through Images</h2>
            <p className="text-[#4A4A4A]">
              Take a closer look at Echo-Son&apos;s journey, manufacturing expertise, medical
              technologies, and global exhibitions. Explore our gallery to discover moments that
              reflect our innovation, experience, and commitment to advancing ultrasound
              technology.
            </p>
          </div>
          <div className="shrink-0">
            <Button text="View Our Gallery" href="#gallery-slider" />
          </div>
        </div>

        {/* Slider */}
        <div
          id="gallery-slider"
          className="mt-6 sm:mt-7 2xl:mt-9 min-[2500px]:mt-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: ".echoson-gallery-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
              1920: { slidesPerView: 3, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 44 },
              3800: { slidesPerView: 3, spaceBetween: 60 },
            }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.src}>
                <div className="w-full aspect-[549/568] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={549}
                    height={568}
                    loading="lazy"
                    className="block w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={paginationClass} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
