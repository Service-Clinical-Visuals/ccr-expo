"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function PrecisionControl() {
  return (
    <section
      id="products"
      className="w-full bg-[#CCEBEC] py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center text-center">
        {/* Header Block with 70% responsive width concept matching Deleo */}
        <div
          className="xl:max-w-[70%] max-w-[90%] mx-auto flex flex-col items-center space-y-4 sm:space-y-5"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Main Section Heading */}
          <Typography
            variant="h2"
            color="dark"
            className="font-semibold leading-tight tracking-tight text-center"
          >
            Precision. Control. Intelligent Performance.
          </Typography>

          {/* Section Description */}
          <Typography
            variant="p"
            color="secondary"
            className="leading-relaxed text-center"
          >
            The G44 is designed for versatile electrosurgical applications,
            combining reliable monopolar and bipolar functions with specialized
            modes for urology and gynecology. Its intuitive touchscreen
            interface, intelligent instrument recognition, and automatic power
            regulation support precise and efficient operation across a wide
            range of procedures. With configurable working modes, real-time
            parameter control, and dedicated endoscopic and bipolar resection
            functions, the G44 provides flexible performance for modern
            surgical environments.
          </Typography>
        </div>

        {/* 360 Video Player Container matching Deleo 360deg.tsx */}
        <div
          className="mt-10 sm:mt-12 lg:mt-14 w-full xl:max-w-[70%] max-w-[90%] mx-auto aspect-video relative overflow-hidden rounded-[12px] sm:rounded-[16px] min-[2500px]:rounded-[20px] min-[3800px]:rounded-[24px] shadow-sm border border-[#0099A1]/20 bg-transparent"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
