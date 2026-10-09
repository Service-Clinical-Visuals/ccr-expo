"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const bannerItems = [
  {
    title: "Empower Your Two Wheeler with Bardahl",
    image: "/moto/bardahl/b1.webp",
  },
  {
    title: "Car Care Beyond Compare",
    image: "/moto/bardahl/b2.webp",
  },
  {
    title: "Cerafence Ceramic Coating",
    image: "/moto/bardahl/b3.webp",
  },
  {
    title: "Commercial & Automotive Fleet Solutions",
    image: "/moto/bardahl/b4.webp",
  },
];

const Banners = () => {
  return (
    <section id="media" className="w-full py-16 xl:py-24 bg-[#1C1C1C] overflow-hidden relative">
      <div className="custom-container relative z-10 flex flex-col gap-8 xl:gap-10">
        {/* Centered Heading & Intro with Watermark */}
        <div className="relative pt-6 sm:pt-8 md:pt-10 pb-0 flex flex-col items-center text-center" data-aos="fade-up">
          {/* Giant Watermark directly positioned behind centered header with max-width ~80% */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 max-w-[90%] xl:max-w-[80%] overflow-hidden flex justify-center items-end">
            <span className="watermark !text-[clamp(48px,9.2vw,185px)] min-[2500px]:!text-[270px] min-[3800px]:!text-[380px] text-center leading-none">
              Banners
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center gap-3 w-full max-w-[90%] xl:max-w-[80%] mx-auto">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-[38px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-normal uppercase tracking-wide leading-tight w-full max-w-[90%] xl:max-w-[80%] mx-auto"
            >
              Bardahl Banners
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal w-full max-w-[90%] xl:max-w-[80%] mx-auto"
            >
              Discover Bardahl’s wide range of promotional banners showcasing automotive care solutions for cars,
              two-wheelers, and advanced ceramic coatings. Designed to highlight product performance, vehicle
              protection, and innovative maintenance technologies, these banners reflect Bardahl’s commitment to
              quality, reliability, and superior automotive care.
            </Typography>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20" />

        {/* Swiper Carousel */}
        <div className="w-full mt-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.1}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bardahl-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              2500: {
                slidesPerView: 4,
                spaceBetween: 36,
              },
            }}
            className="w-full !pb-14"
          >
            {bannerItems.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="group relative flex-1 w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black/40 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banners;
