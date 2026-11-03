"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ProductItem {
  title: string;
  image: string;
  link: string;
}

const products: ProductItem[] = [
  {
    title: "Brina / Brina Neo",
    image: "/medical/tecme/s1.webp",
    link: "#",
  },
  {
    title: "Neumovent",
    image: "/medical/tecme/s2.webp",
    link: "#",
  },
  {
    title: "iX Series Monitors",
    image: "/medical/tecme/s3.webp",
    link: "#",
  },
  {
    title: "uX Series Monitors",
    image: "/medical/tecme/s4.webp",
    link: "#",
  },
  {
    title: "O2flo",
    image: "/medical/tecme/s5.webp",
    link: "#",
  },
  {
    title: "Humidifiers",
    image: "/medical/tecme/s6.webp",
    link: "#",
  },
  {
    title: "Compressors",
    image: "/medical/tecme/s7.webp",
    link: "#",
  },
  {
    title: "VLPRO Video Laryngoscope",
    image: "/medical/tecme/s8.webp",
    link: "#",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">
        {/* Section Header (Deleo xl:max-w-[80%] pattern) */}
        <div
          className="flex flex-col items-center text-center gap-4 w-full xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl"
            >
              Discover Our Complete Line Of Intensive Care Solutions
            </Typography>
            <div className="w-8 sm:w-10 min-[2500px]:w-14 min-[3800px]:w-20 h-1 sm:h-1.5 min-[2500px]:h-2.5 min-[3800px]:h-4 gradient-accent rounded-full shrink-0" />
          </div>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-sm sm:text-base lg:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl w-full xl:max-w-[80%] mx-auto"
          >
            TECME offers a complete family of mechanical ventilators and respiratory support devices.
            From high-complexity ventilation to airway management, every product is backed by
            international certifications and specialized technical support in more than 100 countries.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-tecme-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1440: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="w-full !pb-16 min-[2500px]:!pb-24 min-[3800px]:!pb-32"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                {/* Figma 533x549 Outer Card (#F5F5F5 with box-shadow) - Generous height scaling for big screens & 4K */}
                <div className="group relative flex-1 w-full flex flex-col bg-[#F5F5F5] shadow-[0_3px_8px_rgba(0,0,0,0.20)] hover:shadow-2xl transition-all duration-300 p-4 sm:p-[21px] rounded-none overflow-hidden min-h-[480px] sm:min-h-[540px] min-[1536px]:min-h-[600px] min-[1920px]:min-h-[680px] min-[2500px]:min-h-[920px] min-[3800px]:min-h-[1350px]">
                  {/* Top-Right Blue Corner Accent Bracket (Rectangle 21136 in Figma) */}
                  <svg
                    className="absolute top-0 right-0 w-20 h-20 min-[1920px]:w-24 min-[1920px]:h-24 min-[2500px]:w-36 min-[2500px]:h-36 min-[3800px]:w-52 min-[3800px]:h-52 pointer-events-none z-10"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <path d="M15 0 L80 0 L80 65 L70 55 L70 10 L25 10 Z" fill="#2B7AB7" />
                  </svg>

                  {/* Figma 491x507 Inner White Card Frame with subtle blue border */}
                  <div className="relative w-full flex-1 flex flex-col justify-between items-center bg-white border border-[#0068B3]/30 p-5 sm:p-7 min-[2500px]:p-10 min-[3800px]:p-16 z-0">
                    {/* Top-Right Circular Blue Action Button */}
                    <Link
                      href={item.link}
                      aria-label={`View ${item.title}`}
                      className="absolute top-4 right-4 min-[2500px]:top-6 min-[2500px]:right-6 min-[3800px]:top-8 min-[3800px]:right-8 z-20 w-10 h-10 sm:w-11 sm:h-11 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#2B7AB7] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                    >
                      <ArrowUpRight
                        className="w-6 h-6 sm:w-[26px] sm:h-[26px] min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16"
                        strokeWidth={2.5}
                      />
                    </Link>

                    {/* Product Image Container (Figma 361x413) - Scaled for 4K */}
                    <div className="w-full flex-1 min-h-[280px] sm:min-h-[340px] min-[1536px]:min-h-[380px] min-[1920px]:min-h-[460px] min-[2500px]:min-h-[650px] min-[3800px]:min-h-[950px] flex items-center justify-center p-2 overflow-hidden my-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[260px] sm:max-h-[320px] min-[1536px]:max-h-[360px] min-[1920px]:max-h-[440px] min-[2500px]:max-h-[620px] min-[3800px]:max-h-[900px] w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Product Title at Bottom */}
                    <div className="w-full text-center pt-4 min-[2500px]:pt-6 min-[3800px]:pt-10">
                      <Typography
                        variant="h4"
                        color="dark"
                        className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-semibold tracking-tight text-[#2A2A2A] group-hover:text-[#2B7AB7] transition-colors"
                      >
                        {item.title}
                      </Typography>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .custom-tecme-bullet {
          width: 9px !important;
          height: 9px !important;
          border-radius: 9px !important;
          background-color: #d9d9d9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active.custom-tecme-bullet {
          width: 48px !important;
          height: 9px !important;
          background-color: #0063a8 !important;
          border-radius: 9px !important;
        }
        @media (min-width: 2500px) {
          .custom-tecme-bullet {
            width: 14px !important;
            height: 14px !important;
            border-radius: 14px !important;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active.custom-tecme-bullet {
            width: 72px !important;
            height: 14px !important;
            border-radius: 14px !important;
          }
        }
        @media (min-width: 3800px) {
          .custom-tecme-bullet {
            width: 20px !important;
            height: 20px !important;
            border-radius: 20px !important;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active.custom-tecme-bullet {
            width: 100px !important;
            height: 20px !important;
            border-radius: 20px !important;
          }
        }
        #products .swiper-pagination {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
