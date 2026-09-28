"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Typography from "./Typography";

const brochures = [
  { title: "Tifix® AC Hooks & Clavicula Plates", img: "/medical/innovations/b1.png", href: "#" },
  { title: "CubeFix Mini-Fixator", img: "/medical/innovations/b2.png", href: "#" },
  { title: "Tifix® Distal Tibia Plates", img: "/medical/innovations/b3.png", href: "#" },
  { title: "Dynamic Finger Joint Distractor", img: "/medical/innovations/b4.png", href: "#" },
  { title: "Tifix® Humeral Head & Proximal Humeral Stem", img: "/medical/innovations/b5.png", href: "#" },
  { title: "Tifix® Fibula", img: "/medical/innovations/b6.png", href: "#" },
];

// Swiper loop needs at least 2x slidesPerView slides, so the list is duplicated
const loopSlides = [...brochures, ...brochures];

export default function Diagnostic() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="diagnostic" className="w-full py-16  min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-20">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 min-[3800px]:gap-8" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="leading-tight">
            Brochures &amp; Product Information
          </Typography>
          <Typography variant="p" color="muted" className="text-sm leading-relaxed xl:max-w-[70%] ">
            Explore our collection of product brochures featuring tifix® implant systems, external fixators, and specialised solutions for various orthopedic applications. Access detailed product information and specifications for each solution.
          </Typography>
        </div>

        {/* Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              3800: { slidesPerView: 4, spaceBetween: 60 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % brochures.length)}
            className="w-full brochure-swiper"
          >
            {loopSlides.map((item, idx) => (
              <SwiperSlide key={`${item.title}-${idx}`} className="!h-auto">
                <div className="brochure-card group flex flex-col h-full w-full bg-white p-5 min-[2500px]:p-7 min-[3800px]:p-10">

                  {/* Image */}
                  <div className="w-full aspect-[336/330] border border-gray-300 rounded-br-[1.5rem] rounded-tl-[1.5rem] min-[3800px]:rounded-br-[3rem] flex items-center justify-center overflow-hidden bg-white">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title + Action */}
                  <div className="mt-5 min-[3800px]:mt-10 flex items-center justify-between gap-4 min-[3800px]:gap-8 flex-grow">
                    <Typography variant="h3" color="dark" weight="semibold" className="leading-relaxed line-clamp-2 min-h-[3.25em]">
                      {item.title}
                    </Typography>
                    <Link
                      href={item.href}
                      aria-label={`View ${item.title} brochure`}
                      className="shrink-0 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white w-10 h-10 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-18 min-[3800px]:h-18 transition-transform duration-300 group-hover:rotate-45"
                    >
                      <GoArrowUpRight className="w-6 h-6 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-11 min-[3800px]:h-11" />
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="brochure-pagination">
            {brochures.map((item, idx) => (
              <button
                key={item.title}
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
}
