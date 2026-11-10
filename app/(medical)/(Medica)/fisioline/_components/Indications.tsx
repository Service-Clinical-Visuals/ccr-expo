"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const indications = [
  {
    title: "Soft Tissue Surgery",
    description: "Advanced laser solutions designed to support precise soft tissue procedures.",
    image: "/medical/fisioline/i1.webp",
    link: "#",
  },
  {
    title: "Vascular Surgery And Phlebology",
    description: "Innovative laser technology for a range of vascular and vein treatments.",
    image: "/medical/fisioline/i2.webp",
    link: "#",
  },
  {
    title: "Gynecological Surgery",
    description: "Specialized laser systems supporting modern gynecological procedures.",
    image: "/medical/fisioline/i3.webp",
    link: "#",
  },
  {
    title: "Proctology",
    description: "Advanced laser solutions designed for minimally invasive proctological procedures.",
    image: "/medical/fisioline/i4.webp",
    link: "#",
  },
  {
    title: "Laser Endoscopy And Laparoscopy",
    description: "Precision laser technology for endoscopic and laparoscopic applications.",
    image: "/medical/fisioline/i5.webp",
    link: "#",
  },
  {
    title: "Otorhinolaryngology",
    description: "Innovative laser equipment for ENT procedures and treatments.",
    image: "/medical/fisioline/i6.webp",
    link: "#",
  },
];

const Indications = () => {
  return (
    <section id="indications" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Centered Top Header - max-w-[90%] xl:max-w-[80%] */}
        <div className="flex flex-col gap-3 text-center max-w-[90%] xl:max-w-[80%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="!font-bold">
            Indications For Soft Tissue Surgery And Microsurgery
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            Fisioline® offers advanced laser technologies for a wide range of surgical applications, including soft tissue surgery, vascular treatments, gynecology, proctology, ENT, and laser endoscopy. Designed for precision and versatility, these solutions support healthcare professionals in performing specialized surgical procedures.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.1}
            loop={false}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".indications-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} custom-fisioline-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1036: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="w-full !pb-4"
          >
            {indications.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto pb-2">
                <div className="border border-gray-200/90 rounded-[24px] p-5 sm:p-6 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
                  {/* Top Text & Circular Button - Vertically Centered Parallel */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <Typography
                        variant="h3"
                        color="dark"
                        className="!font-bold text-base sm:text-lg leading-tight"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="p"
                        color="muted"
                        className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2"
                      >
                        {item.description}
                      </Typography>
                    </div>

                    <Link
                      href={item.link}
                      className="w-10 h-10 sm:w-11 sm:h-11 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 bg-[#222D83] hover:bg-[#1A2368] text-white rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform active:scale-95 group/btn"
                      aria-label={item.title}
                    >
                      <img
                        src="/medical/fisioline/up_arrow.webp"
                        alt="arrow"
                        className="w-5 h-5 sm:w-[22px] sm:h-[22px] min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 object-contain group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </Link>
                  </div>

                  {/* Bottom Image */}
                  <div className="w-full aspect-[4/3] rounded-[18px] overflow-hidden mt-6 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pill Pagination - Tecme Concept */}
          <div className="indications-pagination flex justify-center items-center gap-2 min-[1920px]:gap-2.5 min-[2500px]:gap-3.5 min-[3800px]:gap-5 mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16" />
        </div>
      </div>
    </section>
  );
};

export default Indications;
