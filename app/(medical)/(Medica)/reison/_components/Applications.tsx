"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const applications = [
  {
    title: "Anesthesia",
    image: "/medical/reison/a1.webp",
  },
  {
    title: "Bariatrics",
    image: "/medical/reison/a2.webp",
  },
  {
    title: "Ear, Nose & Throat",
    image: "/medical/reison/a3.webp",
  },
  {
    title: "Neuro Surgery",
    image: "/medical/reison/a4.webp",
  },
  {
    title: "Ophthalmics",
    image: "/medical/reison/a5.webp",
  },
  {
    title: "Orthopedics & Traumatology",
    image: "/medical/reison/a6.webp",
  },
  {
    title: "Robot surgery",
    image: "/medical/reison/a7.webp",
  },
  {
    title: "Urology & Gynecology",
    image: "/medical/reison/a8.webp",
  },
  {
    title: "X-ray",
    image: "/medical/reison/a9.webp",
  },
];

/**
 * Applications Section - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readability.
 * 2. Swiper Carousel Integration:
 *    - Strict Tablet Breakpoint: 1 slide (<768px), 2 slides (768px-1035px), 3 slides (>=1036px).
 *    - Custom pill pagination bullets (`#E53B14` active pill, `#D9D9D9` dots).
 * 3. Card Styling:
 *    - Light grey card background (`#F5F5F5`), rounded-3xl (`rounded-[30px]`), drop-shadow.
 *    - Image container with inner border.
 *    - Bottom row with category title & red circular arrow badge.
 */
const Applications = () => {
  return (
    <section id="applications" className="w-full py-16 xl:py-24 bg-[#F4F4F4] overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2A2A2A] font-primary capitalize"
          >
            Our Applications
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
          >
            We offer a comprehensive range of high-quality operating table accessories designed to support various surgical procedures and clinical applications. Our solutions focus on enhancing patient positioning, improving surgical accessibility, and ensuring greater comfort, safety, and efficiency for healthcare professionals across diverse operating room environments, delivering reliable performance and lasting value.
          </Typography>
        </div>

        {/* Applications Swiper Carousel */}
        <div className="w-full mt-12 sm:mt-16" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} reison-pill-bullet"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 }, // Tablet 768px - 1035px
              1036: { slidesPerView: 3, spaceBetween: 28 }, // Laptop / Desktop >= 1036px
              1440: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full !pb-14 overflow-hidden"
          >
            {applications.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex p-1 sm:p-1.5">
                {/* Application Card */}
                <div className="relative w-full bg-[#F5F5F5] rounded-[30px] p-5 border border-gray-200/80 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden">

                  {/* Top-Right Navy Accent in between outer card and inner image */}
                  <div className="absolute top-0 right-0 w-[50%] h-[42%] bg-[#2F3F5A] rounded-tr-[30px] rounded-bl-[24px] pointer-events-none z-0" />

                  {/* Top Image Container */}
                  <div className="relative z-10 w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-blue-400/20 bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Bottom Bar: Title & Red Arrow Circle */}
                  <div className="relative z-10 flex items-center justify-between mt-5 px-1">
                    <h3 className="font-primary text-xl sm:text-2xl font-normal text-[#2A2A2A] tracking-wide">
                      {item.title}
                    </h3>

                    {/* Red Circular Arrow Button */}
                    <div className="w-9 h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#E53B14] flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0">
                      <svg
                        className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
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
        .reison-pill-bullet {
          width: 10px !important;
          height: 10px !important;
          border-radius: 9999px !important;
          background-color: #D9D9D9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          border: none !important;
        }
        .swiper-pagination-bullet-active.reison-pill-bullet {
          width: 50px !important;
          background-color: #E53B14 !important;
        }
        @media (min-width: 2500px) {
          .reison-pill-bullet {
            width: 16px !important;
            height: 16px !important;
            margin: 0 7px !important;
          }
          .swiper-pagination-bullet-active.reison-pill-bullet {
            width: 80px !important;
          }
        }
        @media (min-width: 3800px) {
          .reison-pill-bullet {
            width: 24px !important;
            height: 24px !important;
            margin: 0 10px !important;
          }
          .swiper-pagination-bullet-active.reison-pill-bullet {
            width: 120px !important;
          }
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default Applications;

