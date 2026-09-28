"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Header Row: Heading, Subheading & Button */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 lg:mb-12"
          data-aos="fade-up"
        >
          {/* Left: Titles & Description */}
          <div className="w-full max-w-[900px] xl:max-w-[80%] space-y-3 sm:space-y-4">
            <Typography variant="h2" className="!font-semibold capitalize text-3xl sm:text-4xl lg:text-[42px] min-[2500px]:text-5xl leading-tight xl:max-w-[80%]">
              <span className="text-[var(--color-primary)]">About </span>
              <span className="text-[var(--color-secondary)]">Us</span>
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="text-[#4A4A4A] leading-relaxed w-full xl:max-w-[80%]"
            >
              Hermann Medizintechnik Stands For Absolute Quality Standards, Family Structures That Have Grown Over The Years And At The Same Time For The Courage To Innovate And The Unconditional Desire For Continual Improvement.
            </Typography>
          </div>

          {/* Right: Learn More CTA Button */}
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button
              text="Learn More About Us"
              variant="primary"
              href="#about"
              showIcon={true}
            />
          </div>
        </div>

        {/* Two Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Image 1: Production Team */}
          <div
            className="w-full aspect-[820/560] rounded-[20px] min-[3800px]:rounded-[40px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50 group"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <img
              src="/medical/hermann/about1.png"
              alt="Hermann Production & Engineering Team"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Image 2: Leadership Team */}
          <div
            className="w-full aspect-[820/560] rounded-[20px] min-[3800px]:rounded-[40px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50 group"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/medical/hermann/about2.png"
              alt="Hermann Leadership & Quality Direction"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
