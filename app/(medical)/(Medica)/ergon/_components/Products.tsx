"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Suture",
    image: "/medical/ergon/s1.jpg",
    link: "#suture",
  },
  {
    title: "Surgical Networks",
    image: "/medical/ergon/s2.jpg",
    link: "#surgical-networks",
  },
  {
    title: "Hemostatics",
    image: "/medical/ergon/s3.jpg",
    link: "#hemostatics",
  },
  {
    title: "Surgical Specialties",
    image: "/medical/ergon/s4.jpg",
    link: "#surgical-specialties",
  },
  {
    title: "Special Products",
    image: "/medical/ergon/s5.jpg",
    link: "#special-products",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-12 sm:py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-12">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="capitalize !font-semibold text-2xl sm:text-3xl md:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[64px]"
          >
            Specialised Solutions For Modern Surgery
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-[#4A4A4A]"
          >
            Explore Ergon Sutramed S.r.l.’s comprehensive range of medical products, including surgical sutures, surgical meshes, hemostats, and specialised solutions. Developed to meet diverse clinical needs, our portfolio supports healthcare professionals across a wide range of surgical specialties.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-pill-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1026: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
              2500: { slidesPerView: 4, spaceBetween: 36 },
            }}
            className="w-full !pb-14 min-[3800px]:!pb-24"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <Link
                  href={item.link}
                  className="group flex-1 w-full bg-white rounded-[20px] min-[3800px]:rounded-[36px] p-4 sm:p-5 shadow-[0px_3px_8px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col gap-4 sm:gap-5 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="w-full aspect-[4/3] rounded-[16px] min-[3800px]:rounded-[28px] overflow-hidden border border-gray-100 relative bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Bottom Row: Title + Action Arrow */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <Typography
                      variant="h4"
                      color="dark"
                      className="capitalize !font-semibold text-lg sm:text-xl min-[3800px]:text-3xl text-[#2A2A2A] group-hover:text-[var(--color-primary)] transition-colors"
                    >
                      {item.title}
                    </Typography>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#004D7C] flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-[#003859] transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-5 h-5 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2.2} />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .custom-pill-bullet {
          width: 8px !important;
          height: 8px !important;
          border-radius: 9999px !important;
          background-color: #D9D9D9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active.custom-pill-bullet {
          width: 48px !important;
          background-color: #004D7C !important;
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }

        /* Large desktop screens (1920px - 2499px) */
        @media (min-width: 1920px) and (max-width: 2499px) {
          .custom-pill-bullet {
            width: 10px !important;
            height: 10px !important;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active.custom-pill-bullet {
            width: 58px !important;
          }
        }

        /* Ultra-wide / 2K+ screens (2500px - 3799px) */
        @media (min-width: 2500px) and (max-width: 3799px) {
          .custom-pill-bullet {
            width: 14px !important;
            height: 14px !important;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active.custom-pill-bullet {
            width: 80px !important;
          }
        }

        /* 4K Ultra-wide screens (3800px and above) */
        @media (min-width: 3800px) {
          .custom-pill-bullet {
            width: 20px !important;
            height: 20px !important;
            margin: 0 12px !important;
          }
          .swiper-pagination-bullet-active.custom-pill-bullet {
            width: 120px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
