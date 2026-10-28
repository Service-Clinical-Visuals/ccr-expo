"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TECHNOLOGIES = [
  {
    id: "cpet",
    image: "/medical/cosmed/t1.webp",
    title: "Cardiopulmonary Exercise Test",
    category: "CARDIOPULMONARY EXERCISE TEST",
  },
  {
    id: "indirect-calorimetry",
    image: "/medical/cosmed/t2.webp",
    title: "Indirect Calorimetry",
    category: "INDIRECT CALORIMETRY",
  },
  {
    id: "pft",
    image: "/medical/cosmed/t3.webp",
    title: "Pulmonary Function Test",
    category: "PULMONARY FUNCTION TEST",
  },
  {
    id: "spirometry",
    image: "/medical/cosmed/t4.webp",
    title: "Spirometry",
    category: "SPIROMETRY",
  },
  {
    id: "omnia",
    image: "/medical/cosmed/t5.webp",
    title: "OMNIA Software",
    category: "OMNIA SOFTWARE",
  },
  {
    id: "body-composition",
    image: "/medical/cosmed/t6.webp",
    title: "Body Composition",
    category: "BODY COMPOSITION",
  },
];

// 2 slides total for exactly 2 pagination pill indicators
const SLIDES = [
  {
    id: "slide-1",
    items: [TECHNOLOGIES[0], TECHNOLOGIES[1], TECHNOLOGIES[2], TECHNOLOGIES[3]],
  },
  {
    id: "slide-2",
    items: [TECHNOLOGIES[2], TECHNOLOGIES[3], TECHNOLOGIES[4], TECHNOLOGIES[5]],
  },
];

export default function AdvancedMeshSolutions() {
  return (
    <section
      id="technologies"
      className="relative w-full bg-white py-16 sm:py-20 md:py-20 overflow-hidden"
    >
      {/* Header & Slider inside custom-container for perfectly symmetrical left and right margins */}
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          {/* Subtitle with vertical blue bar */}
          <div
            className="flex items-center justify-center gap-2 mb-3.5"
            data-aos="fade-up"
          >
            <span className="w-1 h-5 bg-[#0066B2] rounded-full inline-block"></span>
            <span className="text-[#0066B2] section-text font-semibold font-plus-jakarta tracking-wide">
              Explore Our Technologies
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="section-title font-bold text-[#1E293B] font-plus-jakarta leading-snug mb-4 sm:mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Precision Instruments for Insights into Human Health
          </h2>

          {/* Description Paragraph */}
          <p
            className="section-text text-[#64748B] font-inter leading-relaxed max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Discover COSMED's comprehensive range of diagnostic technologies designed for healthcare professionals, researchers, and sports scientists. From respiratory function testing and metabolic analysis to body composition assessment, our solutions deliver reliable measurements to support clinical evaluations, scientific research, and human performance monitoring.
          </p>
        </div>

        {/* Custom Pill Pagination Styles (Only 2 Pills) */}
        <style>{`
          .tech-swiper-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin-top: 2rem;
          }
          .tech-swiper-pagination .swiper-pagination-bullet {
            width: 32px;
            height: 4px;
            border-radius: 9999px;
            background-color: #D1E9FA;
            opacity: 1;
            margin: 0 !important;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
          }
          .tech-swiper-pagination .swiper-pagination-bullet-active {
            width: 32px;
            background-color: #0066B2;
          }
          @media (min-width: 2560px) {
            .tech-swiper-pagination {
              margin-top: 3.5rem;
              gap: 16px;
            }
            .tech-swiper-pagination .swiper-pagination-bullet {
              width: 50px;
              height: 6px;
            }
            .tech-swiper-pagination .swiper-pagination-bullet-active {
              width: 50px;
            }
          }
          @media (min-width: 3801px) {
            .tech-swiper-pagination {
              margin-top: 5rem;
              gap: 24px;
            }
            .tech-swiper-pagination .swiper-pagination-bullet {
              width: 70px;
              height: 8px;
            }
            .tech-swiper-pagination .swiper-pagination-bullet-active {
              width: 70px;
            }
          }
        `}</style>

        {/* Technologies Slider Container: perfectly centered with same left & right gap */}
        <div
          className="w-full relative"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".tech-swiper-pagination",
            }}
            className="w-full overflow-hidden"
          >
            {SLIDES.map((slide) => (
              <SwiperSlide key={slide.id} className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20 w-full">
                  {slide.items.map((tech, idx) => {
                    // Alternating stagger: Even cards start high (pt-0 pb-12), Odd cards pushed down (pt-12 pb-0)
                    const isOdd = idx % 2 === 1;

                    return (
                      <div
                        key={`${slide.id}-${tech.id}-${idx}`}
                        className={`w-full transition-all duration-300 ${isOdd
                          ? "pt-6 sm:pt-8 lg:pt-[54px] min-[2500px]:pt-[76px] min-[3800px]:pt-[100px] pb-0"
                          : "pt-0 pb-6 sm:pb-8 lg:pb-[54px] min-[2500px]:pb-[76px] min-[3800px]:pb-[100px]"
                          }`}
                      >
                        <div className="relative w-full aspect-[378/500] rounded-[4px] overflow-hidden group cursor-pointer select-none bg-slate-100">
                          {/* Base Image */}
                          <img
                            src={tech.image}
                            alt={tech.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />

                          {/* Hover Overlay from Image 2: Blue gradient with centered uppercase category text */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0066B2]/95 via-[#0066B2]/60 to-[#004A80]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 sm:p-5 lg:p-6 min-[2500px]:p-8 min-[3800px]:p-10 pb-6 sm:pb-8 min-[2500px]:pb-12 min-[3800px]:pb-14">
                            <p className="font-plus-jakarta font-bold text-white text-center text-xs sm:text-sm lg:text-[15px] min-[2500px]:text-xl min-[3800px]:text-2xl tracking-wide uppercase drop-shadow-sm select-none">
                              {tech.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pill Pagination (Exactly 2 pills) */}
          <div className="tech-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
