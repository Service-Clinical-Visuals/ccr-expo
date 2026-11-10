"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const technologies = [
  {
    title: "Medical",
    description:
      "Physiotherapy, Rehabilitation and Sports Medicine. State-of-the-art technologies and effective...",
    image: "/medical/fisioline/p1.webp",
    link: "#",
  },
  {
    title: "Surgery",
    description:
      "State-of-the-art Laser Technologies for soft tissues Surgery, Dermatology, Plastic Surgery and...",
    image: "/medical/fisioline/p2.webp",
    link: "#",
  },
  {
    title: "Aesthetic medicine",
    description: "Non-invasive treatment methods for face and body.",
    image: "/medical/fisioline/p3.webp",
    link: "#",
  },
  {
    title: "Dentistry",
    description:
      "High power multidiode laser devices for laser therapy and laser surgery.",
    image: "/medical/fisioline/p4.webp",
    link: "#",
  },
  {
    title: "Veterinary",
    description:
      "State-of-the-art Laser Therapy and Laser Surgery. Innovative technologies to reduce the pain and...",
    image: "/medical/fisioline/p5.webp",
    link: "#",
  },
];

const Technologies = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 sm:gap-16">
        {/* Top Header Row - max-w-[90%] xl:max-w-[80%] */}
        <div
          className="flex flex-col min-[1036px]:flex-row min-[1036px]:items-start justify-between gap-6 min-[1036px]:gap-12 w-full"
          data-aos="fade-up"
        >
          <div className="w-full min-[1036px]:w-1/2 max-w-[90%] xl:max-w-[80%]">
            <Typography variant="h2" color="dark" className="!font-bold leading-tight">
              Advanced Technologies For Every<br className="hidden md:inline" /> Field Of Care
            </Typography>
          </div>
          <div className="w-full min-[1036px]:w-1/2 max-w-[90%] xl:max-w-[80%] min-[1036px]:ml-auto">
            <Typography variant="p" color="muted" className="text-gray-600 text-sm sm:text-base leading-relaxed text-left min-[1036px]:text-right">
              Fisioline® Develops Innovative Laser And Electromedical Technologies For Medical, Surgical, Aesthetic, Dental, And Veterinary Applications. Combining Advanced Research, Precision Engineering, And Reliable Performance, Our Solutions Support Professionals Across Diverse Treatment Fields.
            </Typography>
          </div>
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
              el: ".fisioline-pagination",
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
            {technologies.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto pb-2">
                <div className="border border-gray-200/90 rounded-[24px] p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
                  {/* Top Image */}
                  <div className="w-full aspect-[4/3] rounded-[18px] overflow-hidden mb-5 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Information & Circular Arrow - Vertically Centered Parallel */}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <Typography variant="h3" color="dark" className="!font-bold text-lg sm:text-xl leading-tight">
                        {item.title}
                      </Typography>
                      <Typography variant="p" color="muted" className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pill Pagination - Tecme Concept */}
          <div className="fisioline-pagination flex justify-center items-center gap-2 min-[1920px]:gap-2.5 min-[2500px]:gap-3.5 min-[3800px]:gap-5 mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
