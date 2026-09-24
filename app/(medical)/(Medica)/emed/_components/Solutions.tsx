"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Typography from "./Typography";

import "swiper/css";
import "swiper/css/pagination";

interface ProductSolution {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

const productSolutions: ProductSolution[] = [
  {
    title: "Spectrum",
    subtitle: "Result Oriented Performance",
    image: "/medical/emed/p1.jpg",
    alt: "Spectrum electrosurgical unit",
  },
  {
    title: "ThermoStapler®",
    subtitle: "Time Oriented Performance",
    image: "/medical/emed/p2.jpg",
    alt: "ThermoStapler vessel sealing system",
  },
  {
    title: "Argon",
    subtitle: "Efficiency Oriented Performance",
    image: "/medical/emed/p3.jpg",
    alt: "Argon coagulation system",
  },
  {
    title: "Waterfall",
    subtitle: "Endoscopic Irrigation Pump",
    image: "/medical/emed/p4.jpg",
    alt: "Waterfall endoscopic irrigation pump",
  },
  {
    title: "Aria",
    subtitle: "Smoke Evacuation System",
    image: "/medical/emed/p5.jpg",
    alt: "Aria smoke evacuation system",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="w-full py-16 sm:py-20 lg:py-28 min-[2500px]:py-36 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Title & Description with xl:max-w-[70%] */}
        <div className="text-center w-full max-w-[90%] xl:max-w-[70%] mx-auto mb-10 sm:mb-14 min-[2500px]:mb-20 space-y-3 sm:space-y-4" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="capitalize"
          >
            Our Healthcare Solutions
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed"
          >
            Explore EMED’s comprehensive range of electrosurgical and surgical solutions, designed to support precision, efficiency, and safety across modern clinical procedures. Our portfolio includes electrosurgical units, vessel sealing systems, Argon technology, accessories, irrigation pumps, and smoke evacuation solutions for diverse surgical specialties and healthcare environments worldwide.
          </Typography>
        </div>

        {/* Solutions Carousel */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-emed-pill"></span>`;
              },
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
              1536: { slidesPerView: 4, spaceBetween: 32 },
              2000: { slidesPerView: 4, spaceBetween: 36 },
              2500: { slidesPerView: 4, spaceBetween: 48 },
              3800: { slidesPerView: 4, spaceBetween: 64 },
            }}
            className="w-full !pb-14 min-[2000px]:!pb-20 min-[2500px]:!pb-28 min-[3800px]:!pb-36"
          >
            {productSolutions.map((item) => (
              <SwiperSlide key={item.title} className="!h-auto flex">
                <div className="w-full h-full flex flex-col justify-between bg-white border border-gray-100 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] hover:shadow-xl rounded-[30px_0px] sm:rounded-[40px_0px] lg:rounded-[50px_0px] min-[2500px]:rounded-[70px_0px] p-5 sm:p-6 min-[2000px]:p-8 min-[2500px]:p-10 min-[3800px]:p-14 transition-all duration-300 group cursor-pointer">
                  {/* Product Image */}
                  <div className="w-full aspect-square rounded-[20px_0px] sm:rounded-[26px_0px] lg:rounded-[30px_0px] min-[2500px]:rounded-[44px_0px] overflow-hidden border border-black/10 bg-white flex items-center justify-center p-4 min-[2000px]:p-6 min-[2500px]:p-8 mb-4 sm:mb-5 min-[2000px]:mb-7 group-hover:border-[#1980AA]/40 transition-colors shrink-0">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Meta */}
                  <div className="flex items-center justify-between gap-3 pt-1 mt-auto min-h-[46px] sm:min-h-[50px] min-[2000px]:min-h-[70px] min-[2500px]:min-h-[90px] min-[3800px]:min-h-[120px]">
                    <div className="space-y-0.5 min-[2000px]:space-y-2 flex-1">
                      <h3 className="font-['Outfit'] font-semibold text-[17px] sm:text-[18px] min-[2000px]:text-[24px] min-[2500px]:text-[32px] min-[3800px]:text-[46px] text-[#2A2A2A]">
                        {item.title}
                      </h3>
                      <p className="font-['Outfit'] text-xs sm:text-[13px] min-[2000px]:text-[17px] min-[2500px]:text-[22px] min-[3800px]:text-[32px] text-[#4A4A4A] leading-snug line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Action Icon */}
                    <div className="card-arrow-btn rounded-full bg-[#1980AA] group-hover:bg-[#006B96] transition-colors flex items-center justify-center shrink-0 shadow-xs">
                      <svg
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .swiper-wrapper {
          display: flex !important;
          align-items: stretch !important;
        }
        .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        .custom-emed-pill {
          width: 24px !important;
          height: 8px !important;
          border-radius: 9999px !important;
          background-color: #DADADA !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .swiper-pagination-bullet-active.custom-emed-pill {
          width: 60px !important;
          background-color: #006B96 !important;
        }
        @media (min-width: 2000px) {
          .custom-emed-pill {
            width: 38px !important;
            height: 12px !important;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active.custom-emed-pill {
            width: 90px !important;
          }
        }
        @media (min-width: 2500px) {
          .custom-emed-pill {
            width: 52px !important;
            height: 16px !important;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active.custom-emed-pill {
            width: 125px !important;
          }
        }
        @media (min-width: 3800px) {
          .custom-emed-pill {
            width: 76px !important;
            height: 24px !important;
            margin: 0 12px !important;
          }
          .swiper-pagination-bullet-active.custom-emed-pill {
            width: 180px !important;
          }
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
}
