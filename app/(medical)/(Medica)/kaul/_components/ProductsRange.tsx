"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const BULLET_POINTS = [
  "Precision-engineered implants ensuring stability, durability, and long-term surgical performance",
  "Comprehensive product range covering trauma, orthopedic, and minimally invasive solutions",
];

export default function ProductsRange() {
  return (
    <section className="w-full bg-[#2A3338] py-14 sm:py-18 md:py-20 overflow-hidden bg-[url('/medical/kaul/bg.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">

          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-7 h-full"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full h-full min-h-[300px] rounded-md overflow-hidden flex items-center justify-center p-2 sm:p-3">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            className="xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* Tag */}
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-[1px] bg-[#FCC100]"></div>
              <span className="font-poppins text-[#FCC100] section-subtitle font-semibold tracking-wide">
                Nailing System
              </span>
              <div className="w-12 h-[1px] bg-[#FCC100]"></div>
            </div>

            {/* Section Heading */}
            <h2 className="section-title font-semibold text-white font-poppins tracking-tight leading-snug mb-5">
              Advanced Medical Solutions for Precision-Driven Surgical Excellence
            </h2>

            {/* Description */}
            <p className="section-text text-gray-300 font-inter leading-relaxed mb-5">
              Explore our comprehensive portfolio of precision-engineered medical devices designed to support modern surgical procedures. From advanced orthopedic implants to high-performance surgical tools and imaging systems, our products are built to enhance accuracy, reliability, and patient outcomes. Each solution reflects our commitment to innovation, global quality standards, and clinical efficiency.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8 sm:mb-10">
              {BULLET_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#FCC100] font-bold mt-0.5">-</span>
                  <span className="section-text text-gray-300 font-inter leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <Button href="#products" variant="outline-primary">
                Explore All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
