"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Treatments = () => {
  const treatments = [
    {
      title: "ACNE",
      description: "Acne is the most common skin condition and affects teenagers as well as some adults. It most often appears on the face and chest,...",
      image: "/medical/deleo/d1.png",
      link: "#"
    },
    {
      title: "SCARS",
      description: "Scars result from trauma related to surgery, an accident, or illness. When the top layer of skin is damaged, the regeneration process begins,...",
      image: "/medical/deleo/d2.png",
      link: "#"
    },
    {
      title: "SKIN LEANING",
      description: "Skin laxity is a natural process that occurs with age or significant weight loss. This is due to both internal factor sand external factors...",
      image: "/medical/deleo/d3.png",
      link: "#"
    },
    {
      title: "ALOPECIA",
      description: "Losing hair every day is a normal phenomenon; an adult loses an average of 50 to 100 hairs per day. Hair loss becomes pathological when the hairs that fall out ...",
      image: "/medical/deleo/d4.png",
      link: "#"
    },
    {
      title: "WRINKLES & FINE LINES",
      description: "A wrinkle is a break in the skin caused by a decrease in collagen and elastin, two proteins essential for skin elasticity...",
      image: "/medical/deleo/d5.png",
      link: "#"
    },
    {
      title: "BLEPHAROPLASTY",
      description: "Laser blepharoplasty uses laser technology instead of surgery. The goal of this procedure is the same as that of traditional blepharoplasty...",
      image: "/medical/deleo/d6.png",
      link: "#"
    }
  ];

  return (
    <section id="treatments" className="w-full pt-8 xl:pt-12 pb-16 xl:pb-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-black"></div>
              <Typography variant="h4" color="dark" className="!font-bold">
                Treatments :
              </Typography>
            </div>
            <Typography variant="h2" color="dark">
              Innovative Aesthetic Solutions
            </Typography>
          </div>
          <div>
            <Button text="View All" variant="primary" href="#treatments" showIcon={false} />
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-2" data-aos="fade-up" data-aos-delay="100">
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
              }
            }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 2, slidesPerGroup: 2 },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              }
            }}
            className="w-full !pb-16"
          >
            {treatments.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="group relative flex-1 w-full aspect-[4/3] rounded-sm overflow-hidden bg-black shadow-sm cursor-pointer border border-gray-200">
                  {/* Base Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                    <Typography variant="h4" color="white" className="uppercase !font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="white" className="leading-relaxed text-sm md:text-base text-gray-200 line-clamp-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.description}
                    </Typography>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 flex justify-end">
                      <Link href={item.link} className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .custom-line-bullet {
          width: 32px !important;
          height: 2px !important;
          border-radius: 0 !important;
          background-color: transparent !important;
          border: 1px solid #000 !important;
          opacity: 0.5 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          position: relative;
        }
        .swiper-pagination-bullet-active.custom-line-bullet {
          background-color: #000 !important;
          opacity: 1 !important;
          border-width: 2px !important;
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default Treatments;
