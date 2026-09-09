"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Sustainability = () => {
  const images = [
    "/moto/skt/s1.jpg",
    "/moto/skt/s2.jpg",
    "/moto/skt/s3.jpg",
    "/moto/skt/s4.jpg"
  ];

  return (
    <section id="sustainability" className="relative w-full overflow-hidden">
      {/* Background Split */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-secondary"></div>
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-white"></div>

      <div className="custom-container relative z-10 py-16 lg:py-24 flex flex-col gap-12 lg:gap-16 items-center">

        {/* Header Text */}
        <div className="flex flex-col items-center text-center gap-6 w-full md:w-[90%] xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold">
            Sustainability In SKT
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed">
            It has revealed a global transformation process in which it is not enough for companies toachieve financial success only through product production and sales: they are expected tocomply with an environmentally and human-sensitive corporate structure and adopt goodcorporate governance practices as a principle. As a reflection of this process, the concept of sustainability has recently been on our agenda, as well as that of all companies.
          </Typography>
        </div>

        {/* Slider Container */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.sustainability-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="h-auto pb-4">
                <div className="w-full aspect-square overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] shadow-xl mb-2">
                  <img
                    src={src}
                    alt={`Sustainability ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-grab active:cursor-grabbing"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Container */}
          <div className="sustainability-pagination custom-swiper-pagination flex justify-center mt-2"></div>
        </div>

      </div>
    </section>
  );
};

export default Sustainability;
