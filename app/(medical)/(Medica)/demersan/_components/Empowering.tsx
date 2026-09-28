"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cards = [
  {
    image: "/medical/demersan/p1.png",
    title: "Primagel®",
    description: "Sterile, Single-Use Lubricating Gel For Smooth Urethral Procedures And Clear Visualization During Examinations.",
    link: "#"
  },
  {
    image: "/medical/demersan/p2.png",
    title: "Primacath®",
    description: "Designed To Improve The Standard Of Living And Is Manufactured With Medical Grade Raw Materials.",
    link: "#"
  },
  {
    image: "/medical/demersan/p3.jpg",
    title: "Goldcath® (Ringed)",
    description: "Designed To Improve The Standard Of Living And Is Manufactured With Medical Grade Raw Materials.",
    link: "#"
  },
  {
    image: "/medical/demersan/p4.jpg",
    title: "Goldcath® Kit",
    description: "The Urine Collection Bag And The Hydrophilic Urinary Catheter Were Combined In A Single Product To Provide The Highest Level Of Patient Comfort.",
    link: "#"
  },
  {
    image: "/medical/demersan/p5.jpg",
    title: "Goldpad® (Anjio Pad)",
    description: "Goldpad® Enables Fast Pressure Adaptation And Consistent Pressure During Recovery And Walking While Supporting The Treated Area.",
    link: "#"
  },
];

const Empowering = () => {
  return (
    <section id="products" className="w-full py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#0000003D] pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-2 xl:max-w-[70%]">
            <div className="flex flex-wrap items-center gap-2">
              <Typography variant="h2" color="dark" className="font-semibold text-2xl lg:text-3xl">
                Our
              </Typography>
              <Typography variant="h2" className="text-[#192B6C] font-semibold text-2xl lg:text-3xl">
                Products
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base font-medium text-[#4A4A4A] mt-2">
              Explore DEMERSAN's Range Of Specialised Medical Products, Including Catheters, Lubricating Gel, And Pressure Management Solutions Designed To Support Patient Comfort And Clinical Care.
            </Typography>
          </div>
          <div className="shrink-0 mb-2" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Our Products" href="#products" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Slider Layout */}
        <div className="pt-2 w-full" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination'
            }}
            loop={true}
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Link href={card.link} className="block group w-full h-full">
                  <div className="relative overflow-hidden w-full aspect-[16/10] bg-gray-100 shadow-sm">
                    {/* Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />

                    {/* Top Right Icon (Default State) */}
                    <div className="absolute top-5 right-4 w-12 h-12 bg-[#192B6C] flex items-center justify-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300 shadow-md rounded-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-8 text-center pb-10">
                      <Typography variant="h3" color="white" className="font-semibold mb-2">
                        {card.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-sm lg:text-base opacity-90 max-w-[90%]">
                        {card.description}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination mt-12 flex justify-center items-center w-full relative z-50"></div>
        </div>

        {/* Global Styles for Swiper Pagination to force it into flow */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .custom-swiper-pagination {
            display: flex !important;
            justify-content: center !important;
            gap: 8px !important;
          }
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            background-color: #D9D9D9 !important;
            opacity: 1 !important;
            margin: 0 !important;
            border-radius: 50px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            width: 48px !important;
            background-color: #192B6C !important;
          }
        `}} />
      </div>
    </section>
  );
};

export default Empowering;
