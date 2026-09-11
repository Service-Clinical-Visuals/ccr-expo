"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  alt: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "We Were At MEDICA 2024!",
    date: "11 - 14 November 2024",
    image: "/medical/geotek/images/news1.jpg",
    alt: "Medica 2024 Exhibition",
  },
  {
    id: 2,
    title: "We Were At ARAB HEALTH 2025!",
    date: "27 - 31 January 2025",
    image: "/medical/geotek/images/news2.jpg",
    alt: "Arab Health 2025 Exhibition",
  },
  {
    id: 3,
    title: "We'll Be At EAU25!",
    date: "21 - 24 March 2025",
    image: "/medical/geotek/images/news3.jpg",
    alt: "EAU 2025 Exhibition",
  },
];

// Duplicated for seamless continuous loop on tablet/mobile Swiper
const loopedNews = [...newsData, ...newsData];

export default function News() {
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="news" className="w-full relative z-10 py-14 sm:py-20 md:py-24 min-[2000px]:py-28 min-[3000px]:py-32 bg-white">
      {/* Centering wrapper — scales up progressively for 2K/4K/5K+ screens */}
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16 min-[2000px]:mb-20 min-[3000px]:mb-24">
          <div
            className="flex items-center justify-center gap-3 min-[2000px]:gap-4 mb-4 min-[2000px]:mb-6"
            data-aos="fade-up"
          >
            <h2 className="font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] min-[2000px]:text-[42px] min-[3000px]:text-[50px] leading-tight text-[#2A2A2A] capitalize">
              Latest News &amp; Events
            </h2>
            <span className="w-[33px] min-[2000px]:w-[42px] min-[3000px]:w-[50px] h-[5px] min-[2000px]:h-[6px] min-[3000px]:h-[7px] bg-[#84BB65] rounded-[43px] inline-block shrink-0" />
          </div>

          <p
            className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] min-[2000px]:text-[21px] min-[3000px]:text-[24px] leading-[150%] text-[#4A4A4A] max-w-[1230px] xl:max-w-[70%] min-[2000px]:max-w-[65%] min-[3000px]:max-w-[60%] mx-auto px-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay up to date with the latest Geotek Medical news, industry events, exhibitions, and
            company updates. Discover where we are exhibiting, meet our team at upcoming events,
            and explore our latest developments in the medical technology sector.
          </p>
        </div>

        {/* 1. Desktop Layout (>1025px): Stable 3-column Grid matching Figma */}
        <div className="hidden min-[1025px]:grid grid-cols-3 gap-6 lg:gap-8 min-[2000px]:gap-10 min-[3000px]:gap-12 max-w-[1680px] min-[2000px]:max-w-[1900px] min-[2500px]:max-w-[2100px] min-[3000px]:max-w-[2400px] min-[3840px]:max-w-[2800px] mx-auto">
          {newsData.map((item, index) => (
            <div
              key={item.id}
              className="
                group bg-white rounded-[30px] min-[2000px]:rounded-[36px]
                shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                p-5 sm:p-7 min-[2000px]:p-9 min-[3000px]:p-10 flex flex-col justify-between
              "
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              data-aos-duration="800"
            >
              {/* Event Image Frame */}
              <div className="w-full aspect-[484/409] relative rounded-[25px] min-[2000px]:rounded-[30px] overflow-hidden border border-black/20 bg-white mb-6 min-[2000px]:mb-8 p-2 min-[2000px]:p-3">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 p-2 min-[2000px]:p-3"
                />
              </div>

              {/* Event Information */}
              <div className="flex flex-col items-start w-full">
                {/* Event Title */}
                <h3 className="font-baloo font-semibold text-[20px] sm:text-[22px] lg:text-[24px] min-[2000px]:text-[28px] min-[3000px]:text-[32px] leading-tight text-[#2A2A2A] capitalize text-left mb-2.5 min-[2000px]:mb-3.5">
                  {item.title}
                </h3>

                {/* Event Date with Figma-spec Calendar Icon */}
                <div className="flex items-center gap-2.5 min-[2000px]:gap-3 mb-4 min-[2000px]:mb-5 text-[#727272]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 min-[2000px]:w-6 min-[2000px]:h-6 min-[3000px]:w-7 min-[3000px]:h-7"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="3" stroke="#468A28" strokeWidth="2" />
                    <line x1="8" y1="2" x2="8" y2="6" stroke="#468A28" strokeWidth="2" strokeLinecap="round" />
                    <line x1="16" y1="2" x2="16" y2="6" stroke="#468A28" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="#468A28" strokeWidth="2" />
                  </svg>
                  <span className="font-baloo font-normal text-[15px] sm:text-[16px] min-[2000px]:text-[19px] min-[3000px]:text-[21px] leading-none">
                    {item.date}
                  </span>
                </div>

                {/* Read More Link */}
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="
                    font-baloo font-semibold text-[19px] sm:text-[22px] min-[2000px]:text-[25px] min-[3000px]:text-[28px] leading-[150%]
                    text-[#468A28] hover:text-[#38701f]
                    underline decoration-[#468A28] underline-offset-4
                    transition-colors duration-200 cursor-pointer select-none
                  "
                >
                  Read More &gt;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Tablet & Mobile Layout (<=1025px): Swiper Autoscroll Loop */}
        <div className="block min-[1025px]:hidden w-full max-w-[1680px] mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex % 4)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="w-full !py-4"
          >
            {loopedNews.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="h-auto">
                <div
                  className="
                    group bg-white rounded-[30px]
                    shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                    p-5 sm:p-7 flex flex-col justify-between
                    h-full
                  "
                >
                  {/* Event Image Frame */}
                  <div className="w-full aspect-[484/409] relative rounded-[25px] overflow-hidden border border-black/20 bg-white mb-6 p-2">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 p-2"
                    />
                  </div>

                  {/* Event Information */}
                  <div className="flex flex-col items-start w-full">
                    {/* Event Title */}
                    <h3 className="font-baloo font-semibold text-[19px] sm:text-[21px] leading-tight text-[#2A2A2A] capitalize text-left mb-2.5">
                      {item.title}
                    </h3>

                    {/* Event Date with Calendar Icon */}
                    <div className="flex items-center gap-2.5 mb-4 text-[#727272]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="3" stroke="#468A28" strokeWidth="2" />
                        <line x1="8" y1="2" x2="8" y2="6" stroke="#468A28" strokeWidth="2" strokeLinecap="round" />
                        <line x1="16" y1="2" x2="16" y2="6" stroke="#468A28" strokeWidth="2" strokeLinecap="round" />
                        <line x1="3" y1="10" x2="21" y2="10" stroke="#468A28" strokeWidth="2" />
                      </svg>
                      <span className="font-baloo font-normal text-[15px] sm:text-[16px] leading-none">
                        {item.date}
                      </span>
                    </div>

                    {/* Read More Link */}
                    <button
                      type="button"
                      onClick={scrollToContact}
                      className="
                        font-baloo font-semibold text-[18px] sm:text-[20px] leading-[150%]
                        text-[#468A28] hover:text-[#38701f]
                        underline decoration-[#468A28] underline-offset-4
                        transition-colors duration-200 cursor-pointer select-none
                      "
                    >
                      Read More &gt;
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination Indicator (1 active green 78px, 3 inactive gray 32px) */}
        <div className="flex items-center justify-center gap-3 min-[2000px]:gap-5 min-[3000px]:gap-6 mt-10 sm:mt-12 min-[2000px]:mt-16 min-[3000px]:mt-20">
          {[0, 1, 2, 3].map((dot) => {
            const isActive = activeSlide === dot;
            return (
              <button
                key={dot}
                type="button"
                onClick={() => setActiveSlide(dot)}
                aria-label={`Go to slide ${dot + 1}`}
                className={`
                  h-[9px] min-[2000px]:h-[11px] min-[3000px]:h-[13px] rounded-[9px] transition-all duration-300 cursor-pointer
                  ${isActive ? "w-[78px] min-[2000px]:w-[95px] min-[3000px]:w-[110px] bg-[#468A28]" : "w-[32.5px] min-[2000px]:w-[40px] min-[3000px]:w-[46px] bg-[#D9D9D9] hover:bg-gray-400"}
                `}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}