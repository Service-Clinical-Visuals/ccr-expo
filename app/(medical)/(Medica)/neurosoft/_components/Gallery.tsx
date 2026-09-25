"use client";

import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface GalleryItem {
  id: number;
  image: string;
  alt: string;
}

// Gallery slider data and configuration
const galleryItems: GalleryItem[] = [
  { id: 1, image: "/medical/neurosoft/g1.png", alt: "Neurosoft Global Exhibition 1" },
  { id: 2, image: "/medical/neurosoft/g2.jpg", alt: "Neurosoft Clinical Training 2" },
  { id: 3, image: "/medical/neurosoft/g3.png", alt: "Neurosoft Global Exhibition 3" },
  { id: 4, image: "/medical/neurosoft/g4.png", alt: "Neurosoft Clinical Training 4" },
  { id: 5, image: "/medical/neurosoft/g5.png", alt: "Neurosoft Global Exhibition 5" },
  { id: 6, image: "/medical/neurosoft/g6.png", alt: "Neurosoft Clinical Training 6" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 sm:py-20 lg:py-24 min-[2500px]:py-36 bg-white overflow-hidden select-none">
      <div className="custom-container">
        <div className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-end min-[1026px]:justify-between gap-6 pb-6" data-aos="fade-up">
          <div className="space-y-3 xl:max-w-[70%]">
            <h2 className="!text-[#2A2A2A] font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[32px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] leading-[150%] capitalize">
              Gallery
            </h2>
            <p className="!text-[#4A4A4A] font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
              Explore moments from our international exhibitions, medical congresses, hands-on clinical workshops,
              and worldwide partnership events showcasing Neurosoft diagnostic technologies.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              text="View Full Gallery"
              variant="navy"
              showIcon={true}
              className="text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12"
            />
          </div>
        </div>

        <div className="w-full h-px bg-black/20 my-6 sm:my-8" />

        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".gallery-pagination",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1025: { slidesPerView: 2, spaceBetween: 24 },
              1026: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 2, spaceBetween: 32 },
              2500: { slidesPerView: 2, spaceBetween: 48 },
              3800: { slidesPerView: 2, spaceBetween: 64 },
            }}
            className="w-full"
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="w-full h-full aspect-[820/443] min-h-[220px] sm:min-h-[300px] md:min-h-[360px] min-[1026px]:min-h-[420px] min-[2500px]:min-h-[640px] min-[3800px]:min-h-[820px] rounded-[20px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/5 bg-gray-50 group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="neurosoft-pagination gallery-pagination" />
        </div>
      </div>
    </section>
  );
}
