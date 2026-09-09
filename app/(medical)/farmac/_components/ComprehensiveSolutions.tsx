"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PRODUCTS = [
  {
    title: "Nutraceuticals",
    image: "/medical/farmac/1.png",
    href: "#nutraceuticals",
  },
  {
    title: "Electromedical equipment",
    image: "/medical/farmac/2.png",
    href: "#electromedical",
  },
  {
    title: "Oftamed's Line",
    image: "/medical/farmac/3.png",
    href: "#oftamed",
  },
  {
    title: "Orthopedics",
    image: "/medical/farmac/4.png",
    href: "#orthopedics",
  },
  {
    title: "Healthcare & Thermocare",
    image: "/medical/farmac/5.png",
    href: "#healthcare",
  },
  {
    title: "Medical Dressings",
    image: "/medical/farmac/6.png",
    href: "#dressings",
  },
  {
    title: "Diagnostic Instruments",
    image: "/medical/farmac/7.png",
    href: "#diagnostic",
  },
  {
    title: "Surgical & Operating Room",
    image: "/medical/farmac/8.png",
    href: "#surgical",
  },
];

export default function ComprehensiveSolutions() {
  return (
    <section id="solutions" className="py-14 sm:py-18 md:py-24 bg-white">
      <div className="custom-container">
        {/* Top Header Row */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="section-text font-bold text-[#24559c] tracking-normal font-inter">
                &mdash; Products
              </span>
            </div>
            <h2 className="section-title font-medium font-poppins text-slate-900 tracking-tight mb-5">
              Our Comprehensive Solutions
            </h2>
          </div>

          <div className="flex-shrink-0">
            <Button href="#all-products">View All</Button>
          </div>
        </div>

        {/* Auto Slide Swiper Carousel */}
        <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="150">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".farmac-swiper-pagination",
              bulletClass: "farmac-swiper-bullet",
              bulletActiveClass: "farmac-swiper-bullet-active",
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full pb-2"
          >
            {PRODUCTS.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <Link
                  href={product.href}
                  className="flex flex-col items-center justify-center bg-white border border-slate-200/90 rounded-md p-6 sm:p-8 min-h-[250px] sm:min-h-[280px] shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer h-full"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain select-none"
                    />
                  </div>
                  <h3 className="card-title font-semibold font-inter text-slate-800 tracking-tight group-hover:text-[#24559c] transition-colors text-center">
                    {product.title}
                  </h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Pills Container */}
          <div className="farmac-swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
