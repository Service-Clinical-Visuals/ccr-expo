"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const productionImages = [
  { id: 1, src: "/medical/proimplant/p1.png", alt: "Production Line 1" },
  { id: 2, src: "/medical/proimplant/p2.png", alt: "Production Line 2" },
  { id: 3, src: "/medical/proimplant/p3.png", alt: "Production Line 3" },
];

const Production = () => {
  return (
    <section id="production" className="w-full py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-400 pb-10" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%]">
            <Typography variant="h2" color="dark">
              Production Line
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Except for precision casting, forging, coating, and Gamma sterilization, all machining and cleanroom packaging are carried out in-house. This integrated approach enables us to maintain quality and precision throughout manufacturing.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Our Production" href="#production" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full pt-4 relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-production-pagination',
            }}
            className="w-full"
          >
            {productionImages.map((img) => (
              <SwiperSlide key={img.id}>
                <div className="w-full aspect-[820/487] overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-production-pagination flex justify-center items-center gap-3 mt-12 w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Production;
