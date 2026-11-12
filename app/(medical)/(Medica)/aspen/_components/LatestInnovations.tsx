"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const latestItems = [
  {
    title: "Born in America. Built for the OR.",
    image: "/medical/aspen/s1.webp",
  },
  {
    title: "Streamline Surgical Instrument Orders",
    image: "/medical/aspen/s2.webp",
  },
  {
    title: "SPD360™ Performance Solutions",
    image: "/medical/aspen/s3.webp",
  },
  {
    title: "Aspen Surgical Expands Global Infection Prevention Solutions",
    image: "/medical/aspen/s4.webp",
  },
  {
    title: "Browse the Catalog",
    image: "/medical/aspen/s5.webp",
  },
  {
    title: "The Aspen Surgical Standard Blog",
    image: "/medical/aspen/s6.webp",
  },
];

const LatestInnovations = () => {
  return (
    <section id="latest" className="w-full py-14 sm:py-18 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Centered Header with Deleo's xl:max-w-[70%] mx-auto */}
        <div className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="!font-bold leading-tight">
            Discover The Latest From Aspen Surgical
          </Typography>
          <Typography variant="p" color="muted" className="text-gray-600 text-sm sm:text-base leading-relaxed xl:max-w-[85%] mx-auto">
            Discover the latest innovations, product solutions, and updates from Aspen Surgical. Explore our commitment to quality, surgical performance, infection prevention, and trusted healthcare solutions designed to support professionals worldwide.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".aspen-latest-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1036: { slidesPerView: 2, spaceBetween: 32 },
              2000: { slidesPerView: 2, spaceBetween: 44 },
              2500: { slidesPerView: 2, spaceBetween: 56 },
            }}
            className="w-full"
          >
            {latestItems.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto pb-4">
                <div className="group cursor-pointer flex flex-col h-full">
                  {/* Image Card with 4K height scaling */}
                  <div className="w-full aspect-[16/10] min-[2000px]:h-[480px] min-[2500px]:h-[600px] min-[3800px]:h-[800px] rounded-[20px] sm:rounded-[28px] min-[2500px]:rounded-[44px] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Title and Action Arrow */}
                  <div className="flex items-center justify-between gap-4 mt-5 min-[2500px]:mt-8 px-1">
                    <Typography
                      variant="h4"
                      color="dark"
                      className="!font-bold text-base sm:text-lg min-[2000px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl text-gray-900 group-hover:text-[#0B2F61] transition-colors leading-snug line-clamp-2"
                    >
                      {item.title}
                    </Typography>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 min-[1920px]:w-[60px] min-[1920px]:h-[60px] min-[2500px]:w-[84px] min-[2500px]:h-[84px] min-[3800px]:w-[120px] min-[3800px]:h-[120px] rounded-full bg-[#0B2F61] text-white flex items-center justify-center shrink-0 group-hover:bg-[#072147] group-hover:scale-110 transition-all shadow-sm">
                      <ArrowUpRight className="w-5 h-5 min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16 text-white" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Container */}
          <div className="aspen-latest-pagination aspen-pagination mt-8 flex justify-center items-center" />
        </div>

      </div>
    </section>
  );
};

export default LatestInnovations;
