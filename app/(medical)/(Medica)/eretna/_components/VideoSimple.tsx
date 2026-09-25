"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function VideoSimple() {
  return (
    <section
      id="video-clip-01"
      className="w-full py-16 xl:py-24 min-[2500px]:py-36 bg-[#1A171B] text-white overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center text-center gap-8 min-[3800px]:gap-12">
        {/* Heading & Intro */}
        <div
          className="flex flex-col gap-3 w-full items-center xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="white">
            Portable Cardiac Monitoring, <span className="text-[#4C75D8]">Made Simple</span>
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed opacity-90">
            Experience the T Cardio 6 Portable ECG Device in action. Designed for convenient ECG recording and efficient cardiac assessment, T Cardio 6 combines portability, intuitive operation, and dependable performance for healthcare professionals.
          </Typography>
        </div>

        {/* Video Player */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden shadow-2xl border border-white/10 bg-black group cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Centered Hover Button with Gradient/Grey Overlay matching Figma */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/60 via-gray-900/40 to-black/50 backdrop-blur-[1px]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#3452A7] flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg
                className="w-7 h-7 sm:w-9 sm:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
