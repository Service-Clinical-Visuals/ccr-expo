"use client";

import React, { useRef, useState } from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const originalProducts = [
  {
    title: "SMART M DR",
    description: "The Lasotronix diode laser offers an exceptionally broad range of clinical applications.",
    image: "/medical/lasotronix/p1.webp",
    link: "#products",
  },
  {
    title: "SMART M ST",
    description: "Used in dental offices around the world for versatile procedures.",
    image: "/medical/lasotronix/p2.webp",
    link: "#products",
  },
  {
    title: "SMART M SG",
    description: "The lightest multi-wavelength laser platform in the world.",
    image: "/medical/lasotronix/p3.webp",
    link: "#products",
  },
  {
    title: "SMART M NS",
    description: "Percutaneous laser disc decompression (PLDD) is a minimally invasive surgical solution.",
    image: "/medical/lasotronix/p4.webp",
    link: "#products",
  },
];

// Repeated items for seamless slider loop
const sliderProducts = [
  ...originalProducts,
  ...originalProducts,
  ...originalProducts,
];

const Products = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="products" className="w-full pt-16 xl:pt-24 pb-16 xl:pb-24 bg-[#272727] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-4 max-w-full lg:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3">
            <Typography variant="h2" color="white" className="capitalize tracking-[0.8px]">
              Our Products
            </Typography>
            <div className="w-[62px] h-[6px] bg-[var(--color-primary)] rounded-full shrink-0"></div>
          </div>

          <Typography variant="p" color="white" className="leading-relaxed font-normal">
            LASOTRONIX offers innovative laser systems designed for dentistry, surgery, and
            neurosurgery. Combining advanced technology, precision engineering, and reliable
            performance, our products support diverse clinical applications and meet the evolving
            needs of modern healthcare professionals.
          </Typography>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20"></div>

        {/* Products Swiper Slider (Always 3 on desktop with seamless loop autoscroll) */}
        <div className="w-full mt-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex % originalProducts.length);
            }}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
              1536: { slidesPerView: 3, spaceBetween: 30 },
              1920: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full"
          >
            {sliderProducts.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                {/* Landscape card without rounded corners */}
                <div className="flex flex-col justify-between w-full h-full bg-[#121111] border border-white/70 rounded-none p-5 sm:p-6 shadow-lg group hover:border-[var(--color-primary)] transition-colors duration-300">
                  {/* Landscape Image Container */}
                  <div className="w-full aspect-[16/10] rounded-none bg-[#1C1C1C] flex items-center justify-center p-3 sm:p-4 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col gap-2 mt-4 sm:mt-5">
                    <Typography variant="h3" color="white" className="tracking-[0.8px] text-xl font-normal">
                      {item.title}
                    </Typography>

                    <Typography variant="p" color="white" className="font-normal text-white/80 line-clamp-2">
                      {item.description}
                    </Typography>

                    <div className="pt-2">
                      <Link href={item.link} className="inline-block group/link">
                        <Typography
                          variant="p"
                          color="primary"
                          className="font-semibold underline underline-offset-4 group-hover/link:text-[var(--color-primary-hover)] transition-colors"
                        >
                          Read More &gt;
                        </Typography>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Autoscroll Custom Line Bullets (scales cleanly up to 4K screens) */}
          <div className="flex justify-center items-center gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 mt-8 min-[2500px]:mt-14 min-[3800px]:mt-20">
            {originalProducts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`transition-all duration-300 h-[6px] min-[2500px]:h-[10px] min-[3800px]:h-[15px] rounded-full cursor-pointer ${
                  activeIndex === i
                    ? "w-16 min-[2500px]:w-28 min-[3800px]:w-40 bg-[var(--color-primary)]"
                    : "w-3 min-[2500px]:w-5 min-[3800px]:w-8 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
