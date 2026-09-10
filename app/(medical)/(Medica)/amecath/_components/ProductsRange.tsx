"use client";

import React from "react";
import { CircleDot } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const BULLET_POINTS = [
  "Wide range of catheter products supporting multiple medical specialties and procedures",
  "Manufactured using advanced technology with strict adherence to global quality standards",
  "Trusted globally by healthcare professionals for consistent clinical results and durability",
  "Designed with precision engineering to ensure safety, reliability, and performance",
];

export default function ProductsRange() {
  return (
    <section className="w-full bg-[#155184] py-14 sm:py-18 md:py-24 text-white overflow-hidden">
      <div className="custom-container">
        {/* Centered Top Header */}
        <div className="text-center max-w-7xl mx-auto mb-10 sm:mb-14 md:mb-16">
          {/* Subtitle / Tag */}
          <div
            className="inline-flex items-center gap-2 text-white/90 section-subtitle font-medium mb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <CircleDot className="w-5 h-5 text-white" />
            <span className="font-raleway section-subtitle font-semibold tracking-wide">
              Our Products Range
            </span>
          </div>

          {/* Section Heading in Raleway */}
          <h2
            className="section-title font-semibold text-white font-raleway tracking-tight leading-tight"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Comprehensive Range of Advanced Catheter Solutions for Diverse Medical Applications
          </h2>
        </div>

        {/* Two-column Content & Video Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Description & Bullet Points */}
          <div
            className="xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Description in Inter */}
            <p className="section-text text-white font-normal font-inter leading-relaxed max-w-7xl mx-auto mb-5">
              We offer a wide portfolio of high-quality catheter products designed to meet the evolving needs of modern healthcare. Our solutions cover multiple medical specialties, ensuring precision, safety, and reliability across all applications. With a strong focus on innovation and compliance, we deliver products trusted by professionals worldwide.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 sm:space-y-4 mb-8 sm:mb-10">
              {BULLET_POINTS.map((point, index) => (
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
                Explore All Products
              </Button>
            </div>
          </div>

          {/* Right Column: Video Box with DynamicVideoPlayer */}
          <div
            className="xl:col-span-7"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div className="relative w-full aspect-video rounded-md  overflow-hidden shadow-2xl p-2 sm:p-3 flex items-center justify-center">


              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full ">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
