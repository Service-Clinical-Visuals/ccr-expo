"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  const [activeTab, setActiveTab] = useState("palletized");

  const tabs = [
    { id: "palletized", label: "Palletized goods 40 x 25kg" },
    { id: "big-bag", label: "Big Bag" },
    { id: "loose", label: "Loose goods" },
  ];

  const products = [
    {
      id: 1,
      title: "RMS Gold Standard",
      image: "/medical/remake-soil/p1.png",
      category: "palletized",
    },
    {
      id: 2,
      title: "RMS Red Special",
      image: "/medical/remake-soil/p2.png",
      category: "palletized",
    },
    {
      id: 3,
      title: "RMS Gold Standard",
      image: "/medical/remake-soil/p3.png",
      category: "palletized",
    },
    {
      id: 4,
      title: "RMS Red Special",
      image: "/medical/remake-soil/p4.png",
      category: "palletized",
    },
    {
      id: 5,
      title: "RMS Gold Standard",
      image: "/medical/remake-soil/p5.png",
      category: "big-bag",
    },
    {
      id: 6,
      title: "RMS Red Special",
      image: "/medical/remake-soil/p6.png",
      category: "loose",
    },
  ];

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-black overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        <div
          className="flex flex-col items-center gap-3 md:gap-4 w-full xl:max-w-[70%] mx-auto text-center"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="!font-bold tracking-tight text-center"
          >
            Products & Solutions
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-gray-200"
          >
            RMS Remake Soil GmbH provides high-quality liquid soil compounds and professional flowable fill services for efficient, sustainable construction. From selecting the right compound to on-site application, our solutions are designed to simplify construction processes and make better use of available soil materials.
          </Typography>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 md:px-6 lg:px-6 xl:px-7 2xl:px-8 min-[1920px]:px-9 min-[2500px]:px-11 min-[3500px]:px-14 min-[3800px]:px-16 py-2 sm:py-2.5 lg:py-2.5 xl:py-3 2xl:py-3.5 min-[1920px]:py-4 min-[2500px]:py-5 min-[3500px]:py-6 min-[3800px]:py-7 rounded-[4px] min-[2500px]:rounded-[8px] min-[3500px]:rounded-[12px] min-[3800px]:rounded-[14px] font-primary text-xs sm:text-sm md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] min-[1920px]:text-[22px] min-[2500px]:text-[28px] min-[3500px]:text-[34px] min-[3800px]:text-[38px] font-medium transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#155EEF] text-white border-[#155EEF] shadow-lg shadow-[#155EEF]/30"
                    : "bg-transparent text-white border-[#155EEF] hover:bg-[#155EEF]/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={false}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-line-bullet"></span>`;
              },
            }}
            breakpoints={{
              540: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full !pb-14"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="w-full bg-[#090909] border border-white/25 rounded-[20px] p-4 sm:p-5 flex flex-col items-center relative group shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:border-white/50 transition-all duration-300">

                  <div className="w-full aspect-square rounded-[15px] bg-[#050505] border border-white/10 flex items-center justify-center p-6 relative overflow-hidden">

                    <button
                      aria-label={`View ${item.title}`}
                      className="absolute top-3.5 right-3.5 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-13 2xl:h-13 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-18 min-[2500px]:h-18 min-[3500px]:w-24 min-[3500px]:h-24 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#313131] group-hover:bg-[#155EEF] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center text-white transition-colors duration-300 cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 2xl:w-6.5 2xl:h-6.5 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3500px]:w-12 min-[3500px]:h-12 min-[3800px]:w-14 min-[3800px]:h-14" />
                    </button>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <Typography
                    variant="h4"
                    color="white"
                    className="mt-4 text-center font-primary !font-medium text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] min-[1920px]:text-[24px] min-[2500px]:text-[30px] min-[3500px]:text-[36px] min-[3800px]:text-[40px] capitalize"
                  >
                    {item.title}
                  </Typography>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Products;
