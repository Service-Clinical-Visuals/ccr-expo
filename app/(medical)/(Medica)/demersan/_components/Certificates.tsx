"use client";

import React, { useRef } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from 'swiper';

const sliderImages = [
  "/medical/demersan/s1.webp",
  "/medical/demersan/s2.webp",
];

const Certificates = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="certificates" className="w-full py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[80%] mx-auto gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark">
            Trust, Expertise And Superior Service Mentality
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Our company ensures its efficiency and development by giving high priority to human health, updating itself in related with the legal and ethical rules and providing a working environment in which the employees are proud of being a member.
          </Typography>
        </div>

        {/* Slider Section */}
        <div className="w-full relative group" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            className="w-full"
          >
            {sliderImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full aspect-[16/10] md:aspect-[21/9] relative overflow-hidden">
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            className="absolute top-1/2 -left-8 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 transition-colors shadow-lg"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -right-8 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 transition-colors shadow-lg"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <ArrowRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
