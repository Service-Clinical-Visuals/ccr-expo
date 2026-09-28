"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Typography from "./Typography";

const galleryItems = [
  { image: "/medical/innovations/g1.png", alt: "Innovations Medical office interior" },
  { image: "/medical/innovations/g2.png", alt: "Innovations Medical building exterior" },
  { image: "/medical/innovations/g3.png", alt: "Innovations Medical production hall" },
  { image: "/medical/innovations/g4.png", alt: "Innovations Medical manufacturing facility" },
  { image: "/medical/innovations/g5.png", alt: "Innovations Medical gallery image 5" },
  { image: "/medical/innovations/g6.png", alt: "Innovations Medical gallery image 6" },
  { image: "/medical/innovations/g7.png", alt: "Innovations Medical gallery image 7" },
];

// Swiper loop needs at least 2x slidesPerView slides, so the list is duplicated
const loopSlides = [...galleryItems, ...galleryItems];

const News = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="news" className="w-full py-16  min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-20">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 min-[3800px]:gap-8" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="leading-tight">
            Our Gallery
          </Typography>
          <Typography variant="p" color="muted" className="text-sm leading-relaxed max-w-4xl min-[3800px]:max-w-[110rem]">
            Explore our gallery to discover Innovations Medical&apos;s products, solutions, and activities. Get a closer look at our implant systems, external fixators, sterilization containers, and medical solutions.
          </Typography>
        </div>

        {/* Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              3800: { slidesPerView: 4, spaceBetween: 60 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % galleryItems.length)}
            className="w-full brochure-swiper"
          >
            {loopSlides.map((item, idx) => (
              <SwiperSlide key={`${item.image}-${idx}`} className="!h-auto">
                <div className="gallery-card group w-full aspect-[390/477] bg-white p-2 min-[2500px]:p-3 min-[3800px]:p-4">
                  <div className="gallery-card-inner w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="brochure-pagination">
            {galleryItems.map((item, idx) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`brochure-pagination-bullet ${activeIndex === idx ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default News;
