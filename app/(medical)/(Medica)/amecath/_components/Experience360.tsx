"use client";

import React from "react";
import { CircleDot } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Experience360() {
  return (
    <section className="w-full bg-[#155184] py-12 sm:py-16 md:py-20 lg:py-24 text-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: 360 Degree Video Player Box */}
          <div
            className="xl:col-span-7 order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full aspect-video rounded-md  overflow-hidden shadow-2xl p-2 sm:p-3 flex items-center justify-center">


              {/* Dynamic 360 Video Player */}
              <div className="absolute aspect-video inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="360"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Information and Product Features */}
          <div
            className="xl:col-span-5 flex flex-col justify-center order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* Tag / Subtitle */}
            <div className="inline-flex items-center gap-2 text-white/90 section-subtitle font-medium mb-3 sm:mb-4">
              <CircleDot className="w-5 h-5 text-white flex-shrink-0" />
              <span className="font-raleway section-subtitle font-semibold tracking-wide">
                About Our Company
              </span>
            </div>

            {/* Section Heading in Raleway */}
            <h2 className="section-title font-semibold text-white font-raleway tracking-tight leading-snug mb-4 sm:mb-5">
              Leading Global Manufacturer of Advanced Catheter Solutions for Modern Healthcare Needs
            </h2>

            {/* Description Paragraph in Inter */}
            <p className="section-text text-white font-inter leading-relaxed mb-6 sm:mb-8">
              The AMECATH Double Loop Ureteral Stent is a thin, flexible tube made from radiopaque polyurethane, designed to facilitate urine drainage from the kidney to the bladder while minimizing irritation. Available in multiple variants to meet different clinical needs, it can also feature a hydrophilic coating that creates a low-friction surface for easier insertion, improved patient comfort, reduced infection risk, and extended stent performance.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <li className="flex items-start gap-3">
                <CircleDot className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" />
                <span className="section-text text-white font-inter leading-normal">
                  Double loop design ensures secure positioning and prevents unwanted stent migration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" />
                <span className="section-text text-white font-inter leading-normal">
                  Smooth surface finish enhances patient comfort and reduces irritation during use
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" />
                <span className="section-text text-white font-inter leading-normal">
                  Made from biocompatible materials ensuring safety and long-term clinical reliability
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div>
              <Button href="#products" variant="outline-white">
                View Product Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
