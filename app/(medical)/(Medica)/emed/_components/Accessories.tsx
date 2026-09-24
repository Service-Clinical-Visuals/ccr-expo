"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Typography from "./Typography";
import Button from "./Button";

import "swiper/css";
import "swiper/css/pagination";

interface AccessoryItem {
  title: string;
  image: string;
  alt: string;
}

const accessoryItems: AccessoryItem[] = [
  {
    title: "ThermoStapler®",
    image: "/medical/emed/a1.png",
    alt: "ThermoStapler accessory",
  },
  {
    title: "Handle For Laparoscopic Instrument",
    image: "/medical/emed/a2.png",
    alt: "Handle for laparoscopic instrument",
  },
  {
    title: "Laparoscopic Insert",
    image: "/medical/emed/a3.png",
    alt: "Laparoscopic insert",
  },
  {
    title: "MultiSwitch, Two-Pedal Footswitch",
    image: "/medical/emed/a4.png",
    alt: "MultiSwitch two-pedal footswitch",
  },
  {
    title: "Bipolar Cable For Scissor-Clamp",
    image: "/medical/emed/a5.png",
    alt: "Bipolar cable for scissor-clamp",
  },
  {
    title: "Electrode For Argon Coagulation",
    image: "/medical/emed/a6.png",
    alt: "Electrode for argon coagulation",
  },
  {
    title: "Argon Electrodes Handle",
    image: "/medical/emed/a7.png",
    alt: "Argon electrodes handle",
  },
  {
    title: "Argon Flexible Probe GIT",
    image: "/medical/emed/a8.jpg",
    alt: "Argon flexible probe GIT",
  },
  {
    title: "Irrigation Tubing-EMED",
    image: "/medical/emed/a9.jpg",
    alt: "Irrigation tubing EMED",
  },
  {
    title: "Single Use One-Way Water Jet",
    image: "/medical/emed/a10.jpg",
    alt: "Single use one-way water jet",
  },
];

export default function Accessories() {
  return (
    <section id="accessories" className="w-full py-16 sm:py-20 lg:py-28 min-[2500px]:py-36 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-[90%] xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="dark"
              className="capitalize"
            >
              Accessories & Instruments
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed"
            >
              Explore our range of accessories and surgical instruments designed to complement electrosurgical systems and support efficient clinical procedures. Each solution is developed to provide practical functionality, reliable performance, and compatibility across various surgical applications.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="Explore Accessories"
              variant="primary"
              href="#contact"
              showIcon={true}
            />
          </div>
        </div>

        {/* Accessories Carousel */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
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
            {accessoryItems.map((item) => (
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
                  <div className="flex items-center justify-between gap-2.5 pt-1 mt-auto min-h-[46px] sm:min-h-[50px] min-[2000px]:min-h-[70px] min-[2500px]:min-h-[90px] min-[3800px]:min-h-[120px]">
                    <h3 className="font-['Outfit'] font-semibold text-[14px] sm:text-[15px] lg:text-[15.5px] min-[2000px]:text-[20px] min-[2500px]:text-[28px] min-[3800px]:text-[40px] text-[#2A2A2A] leading-snug line-clamp-2 flex-1">
                      {item.title}
                    </h3>

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
