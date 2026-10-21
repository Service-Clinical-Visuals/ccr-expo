"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Facilities() {
  const facilityImages = [
    "/medical/yushu/f1.webp",
    "/medical/yushu/f2.webp",
    "/medical/yushu/f3.webp",
    "/medical/yushu/f4.webp",
    "/medical/yushu/f5.webp",
    "/medical/yushu/f6.webp",
    "/medical/yushu/f7.webp",
    "/medical/yushu/f8.webp",
    "/medical/yushu/f9.webp",
    "/medical/yushu/f10.webp",
    "/medical/yushu/f11.webp",
    "/medical/yushu/f12.webp",
  ];

  return (
    <section id="facilities" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-16">
        {/* Header Content */}
        <div
          className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-[3px] bg-[var(--color-primary)] rounded-full"></div>
            <Typography
              variant="h4"
              color="primary"
              className="uppercase !font-semibold tracking-wider text-sm sm:text-base"
            >
              OUR FACILITIES
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h2" color="dark" className="xl:max-w-[70%] max-w-[90%] mx-auto">
            Inside Our Production Facilities
          </Typography>

          {/* Description */}
          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed xl:max-w-[70%] max-w-[90%] mx-auto text-center"
          >
            Take a closer look at our production facilities, skilled team, and manufacturing
            environment, where expertise, technology, and quality standards come together to deliver
            reliable medical devices.
          </Typography>
        </div>

        {/* Facilities Carousel */}
        <div className="w-full mt-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} facility-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1600: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full !pb-14"
          >
            {facilityImages.map((src, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                {/* Card image container with edge-to-edge cropped cover fit */}
                <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 bg-gray-50">
                  <img
                    src={src}
                    alt={`Production Facility ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        #facilities .swiper-pagination {
          position: relative !important;
          margin-top: 1.5rem !important;
          bottom: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 4px !important;
        }

        #facilities .facility-bullet {
          width: 12px !important;
          height: 12px !important;
          border-radius: 9999px !important;
          border: 1.5px solid var(--color-primary) !important;
          background: transparent !important;
          opacity: 1 !important;
          margin: 0 1px !important;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        #facilities .swiper-pagination-bullet-active.facility-bullet {
          width: 38px !important;
          background-color: var(--color-primary) !important;
          border-color: var(--color-primary) !important;
        }

        /* Tablet scaling */
        @media (min-width: 768px) {
          #facilities .facility-bullet {
            width: 13px !important;
            height: 13px !important;
          }
          #facilities .swiper-pagination-bullet-active.facility-bullet {
            width: 42px !important;
          }
        }

        /* 2K Screens scaling */
        @media (min-width: 2500px) {
          #facilities .swiper-pagination {
            gap: 8px !important;
            margin-top: 2.5rem !important;
          }
          #facilities .facility-bullet {
            width: 20px !important;
            height: 20px !important;
            border-width: 2.5px !important;
          }
          #facilities .swiper-pagination-bullet-active.facility-bullet {
            width: 64px !important;
          }
        }

        /* 4K Screens scaling */
        @media (min-width: 3800px) {
          #facilities .swiper-pagination {
            gap: 12px !important;
            margin-top: 3.5rem !important;
          }
          #facilities .facility-bullet {
            width: 28px !important;
            height: 28px !important;
            border-width: 3px !important;
          }
          #facilities .swiper-pagination-bullet-active.facility-bullet {
            width: 90px !important;
          }
        }
      `}</style>
    </section>
  );
}
