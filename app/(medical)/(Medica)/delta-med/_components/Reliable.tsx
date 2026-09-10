"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Reliable = () => {
  return (
    <section
      id="reliable"
      className="relative w-full py-16 md:py-20 lg:py-24 bg overflow-hidden"
    >

      <div className="custom-container relative z-10 flex flex-col gap-10 md:gap-14">

        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center gap-3.5 w-full" data-aos="fade-up">
          <Typography
            variant="h2"
            color="white"
            className="font-semibold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] tracking-tight text-white font-outfit"
          >
            Reliable Urology Solutions
          </Typography>
          <Typography
            variant="p"
            color="none"
            className="text-white/85 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-4xl font-outfit"
          >
            With a comprehensive product portfolio, Delta Med S.p.A. delivers reliable urology solutions designed to support diverse clinical and patient care requirements. Combining quality materials, practical design, and advanced manufacturing processes, our products provide dependable performance, comfort, and ease of use across various healthcare applications.
          </Typography>
        </div>

        {/* Two-Column: Video Player (Left) + Urology Solutions (Right) */}
        <div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Left Column: White Framed Video Container */}
          <div className="w-full lg:w-[67%] xl:w-[68%] p-2.5 sm:p-3.5 lg:p-4 rounded-tl-[3.5rem] lg:rounded-tl-[4.5rem] rounded-br-[3.5rem] lg:rounded-br-[4.5rem] rounded-tr-none rounded-bl-none ">
            <div className="relative w-full aspect-video md:aspect-[16/9.2] bg-[#121c22] rounded-tl-[2.25rem] lg:rounded-tl-[3.25rem] rounded-br-[2.25rem] lg:rounded-br-[3.25rem] rounded-tr-none rounded-bl-none overflow-hidden">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Urology Solutions Features */}
          <div className="w-full lg:w-[33%] xl:w-[32%] flex flex-col gap-3.5 sm:gap-4 text-white">
            {/* Title */}
            <div>
              <Typography
                variant="h3"
                color="white"
                className="font-semibold text-2xl lg:text-[28px] text-white tracking-tight font-outfit"
              >
                Urology Solutions
              </Typography>
            </div>

            {/* Divider 1 */}
            <div className="w-full h-px bg-white/20 -mt-1" />

            {/* Intro text */}
            <Typography
              variant="p"
              color="none"
              className="text-white/85 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-outfit"
            >
              Delta Med combines healthcare expertise, product innovation, and strict quality standards to deliver dependable urology products.
            </Typography>

            {/* Checkmark Bullets */}
            <div className="flex flex-col gap-3.5 my-1">
              {/* Bullet 1 */}
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-2.5 h-2.5 text-[#0d3f54] stroke-[3.5]" />
                </div>
                <Typography
                  variant="p"
                  color="none"
                  className="text-white/85 text-xs sm:text-[13.5px] lg:text-[14px] leading-snug font-outfit"
                >
                  <span className="font-semibold text-white">Comprehensive Portfolio</span> – Includes Foley catheters, intermittent catheters, external catheters, drainage bags, and leg bags.
                </Typography>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-2.5 h-2.5 text-[#0d3f54] stroke-[3.5]" />
                </div>
                <Typography
                  variant="p"
                  color="none"
                  className="text-white/85 text-xs sm:text-[13.5px] lg:text-[14px] leading-snug font-outfit"
                >
                  <span className="font-semibold text-white">Patient-Focused Design</span> – Developed with attention to comfort, functionality, reliability, and ease of use.
                </Typography>
              </div>
            </div>

            {/* Divider 2 */}
            <div className="w-full h-px bg-white/20" />

            {/* Closing text */}
            <Typography
              variant="p"
              color="none"
              className="text-white/85 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-outfit"
            >
              Our solutions are designed to support effective urinary management, efficient clinical workflows, and improved patient care across different healthcare environments.
            </Typography>

            {/* CTA Button */}
            <div className="pt-2">
              <Button text="View Solutions" href="#solutions" variant="white" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Reliable;
