"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    icon: "/medical/emtel/icon1.webp",
    title: "Advanced Patient Monitoring Technology",
  },
  {
    icon: "/medical/emtel/icon2.webp",
    title: "Clear, Intuitive Display Interface",
  },
  {
    icon: "/medical/emtel/icon3.webp",
    title: "Comprehensive Patient Parameter Monitoring",
  },
  {
    icon: "/medical/emtel/icon4.webp",
    title: "Designed for Clinical Environments",
  },
];

/**
 * Experience360 Section - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. 70% Max-Width Strategy:
 *    - Applied specifically to the headings and subheadings text (`xl:max-w-[70%]`).
 * 2. 360 Video Implementation (Deleo aspect-video pattern):
 *    - Uses exact Deleo video technique: `aspect-video relative overflow-hidden rounded-[16px]`.
 *    - Absolute fill with `DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover"`.
 */
const Experience360 = () => {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="custom-container">
        {/* Tablet / Mobile Layout up to 1300px: Stacked. Above 1300px: Two-column layout */}
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-10 lg:gap-14 xl:gap-16 w-full">
          
          {/* Left Column: Copy & Capability Badges */}
          <div
            className="w-full min-[1301px]:w-1/2 flex flex-col gap-6"
            data-aos="fade-right"
          >
            {/* Tag / Eyebrow: 70% max-width on xl */}
            <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary w-full max-w-full xl:max-w-[70%]">
              EXPLORE OUR TECHNOLOGY
            </p>

            {/* Section Heading: 70% max-width on xl */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] w-full max-w-full xl:max-w-[70%]"
            >
              Experience Patient Monitoring from Every Angle
            </Typography>

            {/* Description: Full natural column width */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#0F2744]/90 w-full"
            >
              Discover EMTEL's advanced patient monitors through an interactive 360° product experience. Explore their design, display, controls and features, developed to support healthcare professionals in delivering reliable patient care.
            </Typography>

            {/* 4 Feature Badges Grid: icon1, icon2, icon3, icon4 images (clean transparent layout) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 w-full">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-2.5 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold font-primary text-[#0F2744] leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="bg-[#0F78AF] hover:bg-[#0C6492] text-white px-7 py-3 rounded-[20px] font-semibold text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Right Column: 360 Video Player (Exact Deleo aspect-video technique) */}
          <div
            className="w-full min-[1301px]:w-1/2 aspect-video relative overflow-hidden rounded-[16px] shadow-lg border border-gray-200/90 bg-white"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience360;
