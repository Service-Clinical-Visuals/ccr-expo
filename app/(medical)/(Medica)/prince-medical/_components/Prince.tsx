"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const cards = [
  {
    image: "/medical/prince-medical/a1.jpg",
    text: "ENDOLINE® Medical Devices For Digestive And Bronchial Endoscopy",
    link: "Learn More >>",
    href: "#",
  },
  {
    image: "/medical/prince-medical/a2.jpg",
    text: "PM-CARE® Medical Devices For Gynecology",
    link: "Learn More >>",
    href: "#",
  },
  {
    image: "/medical/prince-medical/a3.jpg",
    text: "ECHO HOOD® Balloons With 1 Or 2 Openings For Echo-Endoscope",
    link: "Learn More >>",
    href: "#",
  },
  {
    image: "/medical/prince-medical/a4.jpg",
    text: "CLEANBRUSH® Cleaning Swabs And Brushes",
    link: "Learn More >>",
    href: "#",
  },
  {
    image: "/medical/prince-medical/a5.jpg",
    text: "PM-LIFE® Medical Devices For Intrauterine Insemination And Oocyte Retrieval",
    link: "Learn More >>",
    href: "#",
  },
  {
    image: "/medical/prince-medical/a6.jpg",
    text: "OXYCAP® Mouth Openers And Accessories Used In Upper Digestive Endoscopies",
    link: "Learn More >>",
    href: "#",
  }
];

const Prince = () => {
  return (
    <section id="brands" className="w-full py-16 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[3800px]:gap-16">

        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%]">
            <Typography variant="h2" color="dark">
              Prince Medical® Brands
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed">
              Discover Our Medical Device Brands, Offering Specialised Solutions For Digestive Endoscopy, Gynecology, And Assisted Reproductive Technology (ART), Supporting Healthcare Professionals Across Clinical Applications.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Our Brands →" href="#brands" variant="primary" />
          </div>
        </div>

        <div className="w-full h-px bg-gray-200"></div>

        {/* Swiper Slider */}
        <div className="w-full relative mt-4" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full custom-swiper-pagination pb-8"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="flex flex-col w-full h-full bg-white shadow-[0_2px_15px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300 border border-gray-100">
                  <div className="w-full aspect-[477/341] overflow-hidden bg-gray-50 flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.text}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 xl:p-8 flex flex-col flex-grow justify-between gap-6">
                    <Typography variant="h4" color="dark" className="font-semibold leading-relaxed">
                      {card.text}
                    </Typography>
                    <Link href={card.href} className="inline-block hover:opacity-80 transition-opacity w-fit mt-auto">
                      <Typography variant="h4" color="primary" className="font-bold underline underline-offset-4">
                        {card.link}
                      </Typography>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Prince;
