"use client";

import React from "react";
import { CircleDot } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const PORTFOLIO_POINTS = [
  "Broad range of medical devices tailored for multiple specialized clinical applications",
  "Designed with strict adherence to international quality and safety standards",
  "Engineered for consistent performance under demanding conditions in healthcare environments",
  "Supports healthcare professionals with reliable solutions improving procedural efficiency and outcomes",
];

export default function ProductPortfolio() {
  return (
    <section className="w-full bg-[#155184] py-14 sm:py-18 md:py-24 text-white overflow-hidden">
      <div className="custom-container">
        {/* Centered Top Header */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16">
          {/* Subtitle / Tag */}
          <div
            className="inline-flex items-center gap-2 text-white/90 section-subtitle font-medium mb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <CircleDot className="w-5 h-5 text-white" />
            <span className="font-raleway section-subtitle font-semibold tracking-wide">
              Comprehensive Product Portfolio
            </span>
          </div>

          {/* Section Heading in Raleway */}
          <h2
            className="section-title font-bold text-white font-raleway tracking-tight leading-tight"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Innovative Medical Device Solutions Supporting Critical Care Across Diverse Clinical Applications
          </h2>
        </div>

        {/* Two-column Video (Left) & Content (Right) Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Video Box with DynamicVideoPlayer (type="short-2") */}
          <div
            className="xl:col-span-7 order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full aspect-video rounded-md  overflow-hidden shadow-2xl p-2 sm:p-3 flex items-center justify-center">


              {/* Dynamic Video Player for Video 02 */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Description & Bullet Points */}
          <div
            className="xl:col-span-5 flex flex-col justify-center order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* Description in Inter */}
            <p className="section-text text-white font-normal font-inter leading-relaxed max-w-7xl mx-auto mb-5">
              Our extensive product portfolio is designed to meet the evolving needs of modern healthcare environments. From urology to dialysis and intravascular applications, each solution is developed with precision, reliability, and clinical performance in mind. We empower healthcare providers with dependable products that enhance efficiency and patient outcomes.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {PORTFOLIO_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CircleDot className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-1" />
                  <span className="section-text text-white font-inter leading-normal">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <Button href="#products" variant="outline-white">
                Browse All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
