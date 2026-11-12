"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Blades & Scalpels",
    image: "/medical/aspen/p1.webp",
  },
  {
    title: "Open Surgery Instruments",
    image: "/medical/aspen/p2.webp",
  },
  {
    title: "Electrosurgery",
    image: "/medical/aspen/p3.webp",
  },
  {
    title: "Laparoscopic Products",
    image: "/medical/aspen/p4.webp",
  },
  {
    title: "Surgical Single-Use Products",
    image: "/medical/aspen/p5.webp",
  },
  {
    title: "Wound Care",
    image: "/medical/aspen/p6.webp",
  },
  {
    title: "Patient Positioners",
    image: "/medical/aspen/p7.webp",
  },
  {
    title: "Sterile Processing",
    image: "/medical/aspen/p8.webp",
  },
  {
    title: "Labor & Delivery",
    image: "/medical/aspen/p9.webp",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-14 sm:py-18 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Top Header with Deleo's xl:max-w constraints */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start" data-aos="fade-up">
          <div className="lg:col-span-6 xl:col-span-5">
            <Typography variant="h2" color="dark" className="!font-bold leading-tight xl:max-w-[85%]">
              Comprehensive Solutions For Surgical Care
            </Typography>
          </div>
          <div className="lg:col-span-6 xl:col-span-7 flex lg:justify-end">
            <Typography variant="p" color="muted" className="leading-relaxed text-gray-600 text-sm sm:text-base xl:max-w-[85%] lg:text-right">
              Explore Aspen Surgical’s Wide Range Of Medical And Surgical Products, Designed To Support Healthcare Professionals With Quality, Reliability, And Efficiency Across Diverse Clinical Environments.
            </Typography>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".aspen-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1036: { slidesPerView: 3, spaceBetween: 28 },
              1440: { slidesPerView: 3, spaceBetween: 32 },
              2000: { slidesPerView: 3, spaceBetween: 40 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
            }}
            className="w-full"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto pb-4">
                <div className="group relative bg-white rounded-[30px] min-[2500px]:rounded-[48px] border border-[#0068B3]/25 p-6 sm:p-8 min-[2000px]:p-12 min-[2500px]:p-16 flex flex-col justify-between items-center h-[380px] sm:h-[438px] min-[2000px]:h-[560px] min-[2500px]:h-[680px] min-[3800px]:h-[900px] hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">

                  {/* Top-Right Blue Corner Frame with 4K scaling */}
                  <div className="absolute top-0 right-0 w-[110px] sm:w-[133px] min-[2000px]:w-[180px] min-[2500px]:w-[220px] min-[3800px]:w-[320px] h-[115px] sm:h-[140px] min-[2000px]:h-[190px] min-[2500px]:h-[230px] min-[3800px]:h-[340px] border-t-[10px] sm:border-t-[14px] min-[2000px]:border-t-[18px] min-[2500px]:border-t-[22px] min-[3800px]:border-t-[30px] border-r-[10px] sm:border-r-[14px] min-[2000px]:border-r-[18px] min-[2500px]:border-r-[22px] min-[3800px]:border-r-[30px] border-[#082A5F] rounded-tr-[30px] min-[2500px]:rounded-tr-[48px] pointer-events-none" />

                  {/* 50x50 Blue Circular Arrow Button with 2K and 4K scaling */}
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 min-[1920px]:top-8 min-[1920px]:right-8 min-[2500px]:top-10 min-[2500px]:right-10 min-[3800px]:top-14 min-[3800px]:right-14 w-10 h-10 sm:w-[50px] sm:h-[50px] min-[1920px]:w-[70px] min-[1920px]:h-[70px] min-[2500px]:w-[90px] min-[2500px]:h-[90px] min-[3800px]:w-[130px] min-[3800px]:h-[130px] rounded-full bg-[#082A5F] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform z-10">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-9 min-[1920px]:h-9 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-18 min-[3800px]:h-18 text-white" strokeWidth={2.2} />
                  </div>

                  {/* Product Image Container with 4K scaling */}
                  <div className="w-full flex-1 flex items-center justify-center pt-8 pb-4 px-4 min-h-[200px] sm:min-h-[250px] min-[2000px]:min-h-[320px] min-[2500px]:min-h-[400px] min-[3800px]:min-h-[520px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-[170px] sm:max-h-[210px] min-[2000px]:max-h-[280px] min-[2500px]:max-h-[360px] min-[3800px]:max-h-[480px] w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Title with 4K scaling */}
                  <div className="w-full text-center pb-2">
                    <Typography
                      variant="h4"
                      color="dark"
                      className="!font-bold text-base sm:text-lg min-[2000px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl text-gray-900 group-hover:text-[#082A5F] transition-colors"
                    >
                      {item.title}
                    </Typography>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Aspen Pagination container */}
          <div className="aspen-pagination mt-8 flex justify-center items-center" />
        </div>

      </div>
    </section>
  );
};

export default Products;
