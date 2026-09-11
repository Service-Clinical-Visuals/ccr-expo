"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Certifications() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white relative">
      <div className="custom-container">
        {/* Header Section */}
        <div className="text-center max-w-7xl lg:max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="600">
            <div className="w-12 h-[1px] bg-[#FCC100]"></div>
            <span className="font-poppins text-[#FCC100] section-subtitle font-semibold tracking-wide uppercase">
              Our Product Range
            </span>
            <div className="w-12 h-[1px] bg-[#FCC100]"></div>
          </div>

          <h2 className="section-title font-semibold text-[#71797C] font-poppins tracking-tight leading-tight mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            Deep Dive into our Expertise
          </h2>

          <p className="section-text text-[#404040] font-normal font-inter leading-relaxed max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
            Showcasing our cutting-edge medical advancements that redefine orthopedic care and elevate surgical precision, delivering improved outcomes and enhanced clinical performance.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">

          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
            <img src="/medical/kaul/p1.png" alt="Product 1" className="w-full h-auto object-cover" />

            {/* Hover Text */}
            <div className="absolute top-6 left-6 right-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
              <h3 className="font-poppins font-semibold text-white mb-3 text-xl">
                Oscillating Power Saw
              </h3>
              <p className="font-inter section-text text-gray-200">
                Advanced biocompatible fixation solutions, ensuring strong and long-lasting orthopedic repairs.
              </p>
            </div>


          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
            <img src="/medical/kaul/p2.png" alt="Product 2" className="w-full h-auto object-cover" />

            {/* Hover Text */}
            <div className="absolute top-6 left-6 right-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
              <h3 className="font-poppins font-semibold text-white mb-3 text-xl">
                Surgical Power Tool
              </h3>
              <p className="font-inter section-text text-gray-200">
                Advanced biocompatible fixation solutions, ensuring strong and long-lasting orthopedic repairs.
              </p>
            </div>


          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
            <img src="/medical/kaul/p3.png" alt="Product 3" className="w-full h-auto object-cover" />

            {/* Hover Text */}
            <div className="absolute top-6 left-6 right-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none">
              <h3 className="font-poppins font-semibold text-white mb-3 text-xl">
                4K - Arthroscopy Imaging System
              </h3>
              <p className="font-inter section-text text-gray-200">
                Advanced biocompatible fixation solutions, ensuring strong and long-lasting orthopedic repairs.
              </p>
            </div>
          </div>

        </div>

        {/* Explore All Products Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Button href="#products" variant="outline-primary">
            Explore All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
