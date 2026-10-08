"use client";

import React, { useState } from "react";
import Button from "./Button";
import { CloudDownload } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CATEGORIES = ["Endoscopy", "Otology", "Sinus Surgery", "Others"];

const PRODUCTS = {
  "Endoscopy": [
    { image: "/medical/fentex/endoscopy1.webp", title: "UNI-CART Gerätewagen - UNI-CART Trolley 503050FX" },
    { image: "/medical/fentex/endoscopy2.webp", title: "Equipment trolley, version E 503110FX" },
    { image: "/medical/fentex/endoscopy3.webp", title: "Hi-View Laryngo-Pharyngoscope 520970FX" },
    { image: "/medical/fentex/endoscopy4.webp", title: "Hi-View Laryngo-Pharyngoscope 521670FX" },
    { image: "/medical/fentex/endoscopy5.webp", title: "Endoscopy Product 5" },
    { image: "/medical/fentex/endoscopy6.webp", title: "Endoscopy Product 6" },
    { image: "/medical/fentex/endoscopy7.webp", title: "Endoscopy Product 7" },
    { image: "/medical/fentex/endoscopy8.webp", title: "Endoscopy Product 8" },
  ],
  "Otology": [
    { image: "/medical/fentex/otology1.webp", title: "Tuning Fork" },
    { image: "/medical/fentex/otology2.webp", title: "Ear Specula" },
    { image: "/medical/fentex/otology3.webp", title: "Ear Specula Black" },
    { image: "/medical/fentex/otology4.webp", title: "Ear Specula Silver" },
    { image: "/medical/fentex/otology5.webp", title: "Otology Product 5" },
    { image: "/medical/fentex/otology6.webp", title: "Otology Product 6" },
    { image: "/medical/fentex/otology7.webp", title: "Otology Product 7" },
    { image: "/medical/fentex/otology8.webp", title: "Otology Product 8" },
  ],
  "Sinus Surgery": [
    { image: "/medical/fentex/sinus1.webp", title: "Sinus Instrument 1" },
    { image: "/medical/fentex/sinus2.webp", title: "Sinus Instrument 2" },
    { image: "/medical/fentex/sinus3.webp", title: "Sinus Instrument 3" },
    { image: "/medical/fentex/sinus4.webp", title: "Sinus Instrument 4" },
    { image: "/medical/fentex/sinus5.webp", title: "Sinus Instrument 5" },
    { image: "/medical/fentex/sinus6.webp", title: "Sinus Instrument 6" },
    { image: "/medical/fentex/sinus7.webp", title: "Sinus Instrument 7" },
    { image: "/medical/fentex/sinus8.webp", title: "Sinus Instrument 8" },
  ],
  "Others": []
};

export default function ProductSolutions() {
  const [activeTab, setActiveTab] = useState("Endoscopy");

  return (
    <section id="product-solutions" className="relative w-full bg-white py-14 sm:py-20 md:py-24 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-25">

        {/* Section Heading & Download Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h4 className="text-[#006AB3] section-text font-bold font-inter mb-3 section-text tracking-wide uppercase">
              SURGICAL INSTRUMENTATION PORTFOLIO
            </h4>
            <h2 className="section-title font-bold tracking-tight font-poppins text-[#202020] leading-snug">
              Explore Our Wide Range of Products by <span className="text-[#006AB3]">Surgical Specialties</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Button href="#download" variant="outline" className="!w-auto !border-slate-900 !text-slate-900 hover:!bg-[#006AB3] hover:!text-white hover:!border-[#006AB3] !px-6 group" showArrow={false}>
              <span className="flex items-center gap-2 font-inter font-semibold btn-text">
                Download Full Product Catalogs
                <CloudDownload className="w-5 h-5 hidden group-hover:block" />
              </span>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-[8px] font-inter font-semibold card-title transition-colors border ${activeTab === category
                ? "bg-[#006AB3] text-white border-[#006AB3]"
                : "bg-white text-slate-700 border-[#71717A] hover:border-[#006AB3] hover:text-[#006AB3]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <style>{`
          .custom-swiper-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            margin-top: 3rem;
          }
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 15px;
            height: 15px;
            background-color: #cbd5e1;
            opacity: 1;
            margin: 0 !important;
            transition: background-color 0.3s;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background-color: #006AB3;
          }
        `}</style>

        {/* Swiper Slider with Grids */}
        <div className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination'
            }}
          >
            {Array.from({ length: Math.ceil((PRODUCTS[activeTab as keyof typeof PRODUCTS]?.length || 0) / 4) }).map((_, slideIndex) => {
              const slideProducts = PRODUCTS[activeTab as keyof typeof PRODUCTS]?.slice(slideIndex * 4, slideIndex * 4 + 4);
              return (
                <SwiperSlide key={slideIndex}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-[2px] py-2">
                    {slideProducts?.map((product, idx) => (
                      <div
                        key={idx}
                        className="border border-[#71717A] rounded-[10px] p-6 flex flex-col items-center bg-white hover:shadow-md transition-shadow group h-full"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay={idx * 150}
                      >
                        <div className="flex-1 flex items-center justify-center w-full h-40 sm:h-48 2xl:h-72 min-[3801px]:h-[400px] mb-8 min-[3801px]:mb-12 relative">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-auto max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="font-poppins font-semibold text-[#202020] card-title leading-snug text-left w-full mb-10 line-clamp-2">
                          {product.title}
                        </h3>
                        <div className="w-full mt-8 flex justify-center">
                          <Button href="#view-product" variant="outline" className="!w-auto !px-8 !h-[50px] !border-[#202020] !text-[#202020] hover:!bg-slate-100" showArrow={false}>
                            <span className="font-inter font-semibold btn-text">View Product</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination"></div>
        </div>

      </div>
    </section>
  );
}
