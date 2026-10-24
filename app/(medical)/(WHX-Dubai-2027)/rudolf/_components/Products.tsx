"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Typography from "./Typography";
import Button from "./Button";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  { title: "Vital Signs Devices", text: "Riester offers vital signs monitors, diagnostic stations, and more.", image: "s2.webp" },
  { title: "Eye and ENT Devices", text: "Advanced EENT instruments for everyday clinical use.", image: "s3.webp" },
  { title: "Medical Camera System", text: "Versatile camera for ear, throat, and skin examinations.", image: "s4.webp" },
  { title: "Diagnostic Stations", text: "Modular stations with integrated vital signs and handles.", image: "s5.webp" },
  { title: "Thermometry", text: "Precise digital temperature measurement.", image: "s6.webp" },
  { title: "Stethoscopes", text: "Stethoscopes for heart, lung, and bowel assessment.", image: "s7.webp" },
];

// Pill bullets: filled when active, outlined otherwise
const paginationClass =
  "rudolf-product-pagination flex items-center justify-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mt-8 2xl:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20 " +
  "[&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-white [&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-[#1A6AFF] [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 " +
  "[&_.swiper-pagination-bullet]:!w-10 [&_.swiper-pagination-bullet]:!h-1.5 min-[2500px]:[&_.swiper-pagination-bullet]:!w-14 min-[2500px]:[&_.swiper-pagination-bullet]:!h-2 min-[3800px]:[&_.swiper-pagination-bullet]:!w-20 min-[3800px]:[&_.swiper-pagination-bullet]:!h-3 " +
  "[&_.swiper-pagination-bullet-active]:!bg-[#1A6AFF]";

export default function Products() {
  return (
    <section id="products" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 2xl:gap-10 min-[3800px]:gap-16 mb-8 sm:mb-10 2xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start md:max-w-[60%] xl:max-w-[42%]">
            <div className="flex items-center gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-7 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
              <span className="block w-5 2xl:w-6 min-[2500px]:w-9 min-[3800px]:w-12 h-[3px] min-[2500px]:h-1 min-[3800px]:h-1.5 rounded-full bg-primary" />
              <Typography variant="h4" color="primary" className="uppercase">
                Products
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
              Advanced Diagnostic Solutions
            </Typography>
            <Typography variant="p" color="muted">
              Riester delivers innovative diagnostic devices for accurate, efficient, and compassionate care worldwide.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button text="View All" variant="primary" href="#products" />
          </div>
        </div>

        {/* Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            rewind={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: ".rudolf-product-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
              2500: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 48 },
              3800: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 64 },
            }}
            className="w-full"
          >
            {products.map((item) => (
              <SwiperSlide key={item.title} className="!h-auto">
                <div className="group h-full flex flex-col bg-white border border-[#E5E5E5] p-3 2xl:p-3.5 min-[2500px]:p-5 min-[3800px]:p-7">
                  <div className="w-full aspect-[386/220] overflow-hidden">
                    <img
                      src={`/medical/rudolf/${item.image}`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>

                  <Typography variant="h4" color="dark" className="uppercase mt-5 2xl:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12">
                    {item.title}
                  </Typography>

                  <div className="flex items-start justify-between gap-4 mt-2 2xl:mt-3 min-[2500px]:mt-4 min-[3800px]:mt-6 pb-2 min-[2500px]:pb-3">
                    <Typography variant="p" color="muted" className="max-w-[72%]">
                      {item.text}
                    </Typography>
                    <Link
                      href="#products"
                      className="flex items-center gap-1.5 min-[3800px]:gap-3 shrink-0 text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                      <Typography variant="span" color="primary">
                        View All
                      </Typography>
                      <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.25} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={paginationClass} />
        </div>
      </div>
    </section>
  );
}
