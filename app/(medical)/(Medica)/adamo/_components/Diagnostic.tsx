"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Diagnostic() {
  const categories = ["Colposcopy Line", "Capillaroscopy Line", "Dermatoscopy line", "Hysteroscopy Line"];
  const [activeCategory, setActiveCategory] = useState("Colposcopy Line");

  const categoryData: Record<string, { title: string, desc: string, img: string }[]> = {
    "Colposcopy Line": [
      { title: "Colposcope Isis Hub", desc: "The future of colposcopy has arrived. A unique system that integrates ergonomic seating...", img: "/adamo/a1.png" },
      { title: "Colposcope Kolpoview", desc: "A product line that can respond to all those who need simple and reliable systems...", img: "/adamo/a2.png" },
      { title: "Colposcope Isis Alpha", desc: "An ergonomic and attractively designed colposcope that allows comfortable....", img: "/adamo/a3.png" },
      { title: "Colposcope Isis Beta", desc: "A complete and innovative videocolposcopy system, it integrates a videocolposcopy...", img: "/adamo/a4.png" },
      { title: "Colposcope Isis Gamma", desc: "A platform for videocolposcopy that supports the gynecologist in a 360-degree...", img: "/adamo/a5.png" },
    ],
    "Capillaroscopy Line": [
      { title: "Capillaroscope Horus HS650", desc: "The first system with 4K ULTRA-HD resolution. Ergonomic and compact...", img: "/adamo/b1.png" },
      { title: "Capillaroscope Horus HS150", desc: "HORUS Hs150 is the only full HD definition videocapillaroscope in the capillaroscopy...", img: "/adamo/b2.png" },
      { title: "Capillaroscope Horus HS450", desc: "HORUS Hs450 is the most compact wheeled system of high-definition...", img: "/adamo/b3.png" },
    ],
    "Dermatoscopy line": [
      { title: "Dermatoscope Aton 100", desc: "Aton 100 allows for non-contact examinations, but it can be equipped with a contact...", img: "/adamo/c1.png" },
      { title: "Dermatoscope Aton 1000 Lite", desc: "Aton dermatoscopes are synonymous with Reliability, Quality, Ergonomics and...", img: "/adamo/c2.png" },
      { title: "Dermatoscope Aton 1000 Plus", desc: "Aton dermatoscopes are synonymous with Reliability, Quality, Ergonomics and...", img: "/adamo/c3.png" },
    ],
    "Hysteroscopy Line": [
      { title: "Hysteroscope Iside Endo...", desc: "The New Endoscopy System ISIDE ENDO Integrated was designed with the...", img: "/adamo/d1.png" },
      { title: "Hysteroscope Iside Endo", desc: "The New Endoscopy System ISIDE ENDO was designed and built to meet the needs...", img: "/adamo/d2.png" },
    ],
  };

  const activeCards = categoryData[activeCategory] || [];

  return (
    <section id="diagnostic" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-gray-200 pb-8 " data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <Typography variant="h2" color="dark" className="font-semibold leading-tight">
              Our Diagnostic Solutions
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed max-w-[85%] text-sm md:text-base">
              Explore our diagnostic solutions designed to support healthcare professionals across dermatology, vascular assessment, gynecology, and minimally invasive procedures. Our product lines combine precision, reliable performance, and advanced imaging for accurate clinical examination.
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button text="Explore our Products" href="#products" showIcon={true} variant="primary" className="bg-[#2A2A2A] hover:bg-black text-white border-none" />
          </div>
        </div>

        {/* Categories / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 mt-1" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 border transition-all duration-300 flex items-center justify-center ${activeCategory === cat
                ? "border-[#2A2A2A] !font-bold  bg-[#2A2A2A]"
                : "border-black bg-white hover:border-[#2A2A2A]"
                }`}
            >
              <Typography
                variant="h5"

                color={activeCategory === cat ? "white" : "dark"}
                className="whitespace-nowrap !mb-0"
              >
                {cat}
              </Typography>
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-2 " data-aos="fade-up" data-aos-delay="200">
          <style dangerouslySetInnerHTML={{
            __html: `
            .diagnostic-swiper {
              padding-bottom: 60px !important;
            }
            .diagnostic-swiper .swiper-pagination {
              bottom: 0px !important;
            }
            .diagnostic-swiper .swiper-pagination-bullet {
              background: #D1D5DB;
              opacity: 1;
              width: 20px;
              height: 6px;
              border-radius: 9999px;
              transition: all 0.3s;
              margin: 0 4px !important;
            }
            .diagnostic-swiper .swiper-pagination-bullet-active {
              background: #2A2A2A;
              width: 40px;
            }
          `}} />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full diagnostic-swiper"
          >
            {activeCards.map((card, idx) => (
              <SwiperSlide key={`${activeCategory}-${idx}`} className="h-auto flex">
                <div className="flex flex-col h-full w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 p-4 min-[3800px]:p-8 group">

                  {/* Image Container with Border and Orange Bookmark */}
                  <div className="relative w-full aspect-square border border-gray-200 mb-6 p-6 flex justify-center items-center bg-white overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Orange Triangle Bookmark */}
                    <div className="absolute top-0 right-0 w-[50px] h-[70px] min-[3800px]:w-[100px] min-[3800px]:h-[140px] text-[var(--color-primary)]">
                      <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <polygon points="0,0 100,0 100,140 65,30" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-grow">
                    <Typography variant="h4" color="dark" className="font-bold mb-3 min-[3800px]:text-3xl">
                      {card.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-xl leading-relaxed mb-6">
                      {card.desc}
                    </Typography>

                    {/* Learn More link pushed to bottom */}
                    <div className="mt-auto">
                      <Typography variant="span" className="text-[var(--color-primary)] font-semibold text-sm min-[3800px]:text-xl hover:underline cursor-pointer">
                        Learn More&gt;&gt;
                      </Typography>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
