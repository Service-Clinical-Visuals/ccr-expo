"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { CheckCircle2 } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";

const PRODUCTS = [
  {
    image: "/medical/altaylar/p1.webp",
    tag: "Standard Type",
    tagColor: "bg-[#E8F7F7] text-[#07A1A8]",
    title: "Oxidized Regenerated Cellulose",
    description: "Oxidized Regenerated Cellulose (ORC) delivering rapid hemostasis within surgical wounds. Clinical trials prove immediate bactericidal activity against gram-positive and gram-negative microorganisms.",
    features: [
      "100% Plant-derived, fully bioabsorbable (7-14 days)",
      "Proven bactericidal efficacy on MRSA & E. coli"
    ],
    link: "#"
  },
  {
    image: "/medical/altaylar/p2.webp",
    tag: "Fibril Type",
    tagColor: "bg-[#EBF3FC] text-[#006AB3]",
    title: "PAHACEL Fibril",
    description: "PAHACEL Fibril could be applied as layer by layer and has soft cotton like nature. On the specific field, making high contact property towards mild bleeding sites. Stop bleeding faster than standard.",
    features: [
      "100% Plant-derived, fully bioabsorbable (7-14 days)",
      "Proven bactericidal efficacy on MRSA & E. coli"
    ],
    link: "#"
  },
  {
    image: "/medical/altaylar/p3.webp",
    tag: "Knit Type",
    tagColor: "bg-[#F3E8FB] text-[#8E24AA]",
    title: "PAHACEL Knit",
    description: "PAHACEL Knit with dense weave structure is designed for severe bleeding due to the intense nature and can be easily sutured and stop bleeding 3 times faster compared to the PAHACEL Standard.",
    features: [
      "100% Plant-derived, fully bioabsorbable (7-14 days)",
      "Proven bactericidal efficacy on MRSA & E. coli"
    ],
    link: "#"
  },
  {
    image: "/medical/altaylar/p4.webp",
    tag: "Pillow Type",
    tagColor: "bg-[#E8F5E9] text-[#2E7D32]",
    title: "PAHACEL Pillow",
    description: "PAHACEL Pillow is a structured non-woven fabric, needle punched with interlocking fibers for extra hemostasis. Provides a matrix for platelet adhesion and aggregation/Proven Highly effective bactericidal effect.",
    features: [
      "100% Plant-derived, fully bioabsorbable (7-14 days)",
      "Proven bactericidal efficacy on MRSA & E. coli"
    ],
    link: "#"
  },
  {
    image: "/medical/altaylar/p5.webp",
    tag: "Fibril Type",
    tagColor: "bg-[#EBF3FC] text-[#006AB3]",
    title: "PAHACEL Pillow",
    description: "PAHACEL Fibril could be applied as layer by layer and has soft cotton like nature. On the specific field, making high contact property towards mild bleeding sites. Stop bleeding faster than standard.",
    features: [
      "100% Plant-derived, fully bioabsorbable (7-14 days)",
      "Proven bactericidal efficacy on MRSA & E. coli"
    ],
    link: "#"
  }
];

export default function ProductSolutions() {
  return (
    <section id="product-solutions" className="relative w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-25">

        {/* Section Heading & Description */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14 mb-12 items-center">
          <div className="xl:col-span-5">
            <h4 className="text-[#07A1A8] section-text font-bold font-inter mb-3 tracking-wide flex items-center gap-2">
              <span className="w-[12px] h-[12px] rounded-full bg-[#07A1A8]"></span> Surgical Portfolio
            </h4>
            <h2 className="section-title font-bold tracking-tight font-raleway text-[#202020] leading-snug">
              High-Precision Medical Devices
            </h2>
          </div>
          <div className="xl:col-span-7">
            <p className="section-text leading-relaxed font-inter font-regular text-[#404040]">
              Crafted within state-of-the-art Class 10,000 cleanroom environments, our products are engineered under rigorously controlled conditions and in accordance with stringent international surgical standards—delivering uncompromising precision, reliability, safety, and clinical-grade quality.
            </p>
          </div>
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
            background-color: #07A1A8;
          }
        `}</style>

        {/* Swiper Slider */}
        <div className="w-full relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            loop={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination'
            }}
            className="pb-4"
          >
            {PRODUCTS.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto gap-20">
                <div
                  className="border-1 border-[#71717A] rounded-[10px] p-4 flex flex-col bg-white h-full transition-shadow group"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={idx * 150}
                >
                  <div className="w-full h-auto mb-6 relative overflow-hidden rounded-[8px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/medical/fentex/about.webp"; // Fallback image
                      }}
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold font-inter ${product.tagColor}`}>
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="font-raleway font-semibold text-[#0B1C30] card-title mb-3">
                      {product.title}
                    </h3>
                    <p className="font-inter font-regular text-[#404040] section-text leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>

                    <div className="flex flex-col gap-2 mb-6">
                      {product.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#07A1A8] flex-shrink-0 mt-1" />
                          <span className="font-inter font-regular section-text text-[#404040]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Link href={product.link} className="font-inter font-semibold btn-text text-[#07A1A8] underline hover:underline">
                        View Specifications
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination"></div>
        </div>

      </div>
    </section>
  );
}
