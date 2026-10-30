"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="experience-360" className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="custom-box-container">
        {/* Card with subtle molecular background pattern */}
        <div
          className="w-full rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col items-center text-center gap-6 sm:gap-8 bg-[#F4F5F2]/40 border border-gray-200/60 shadow-sm"
          style={{
            backgroundImage: "url('/medical/abintrax-srl/bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Top Content: Heading and Text - Deleo xl:max-w-[70%] pattern */}
          <div className="flex flex-col items-center gap-3 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(24,25,26,0.15)] bg-white/80 backdrop-blur-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
              <span className="text-xs sm:text-sm font-secondary font-normal uppercase text-[#4B5563] tracking-wide">
                360° EXPERIENCE
              </span>
            </div>

            {/* Title */}
            <Typography
              variant="h2"
              color="dark"
              className="text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[56px] font-bold"
            >
              Advanced Cardiac Monitoring
            </Typography>

            {/* Paragraph */}
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
            >
              A compact 12-lead electrocardiograph designed to capture, display, and export ECG
              signals from adult and paediatric patients with ease and precision. It provides reliable
              cardiac data and clear ECG recordings to support efficient clinical assessment and
              patient monitoring.
            </Typography>
          </div>

          {/* Video Container - Exact Deleo 360 Video Implementation: lg:max-w-[70%] mx-auto aspect-video */}
          <div
            className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-xl shadow-xl border border-gray-200"
            data-aos="zoom-in"
            data-aos-delay="100"
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

export default Deg360;
