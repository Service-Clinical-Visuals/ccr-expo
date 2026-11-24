/**
 * WirelessDataSharing Section (CONNECTED CARE. SIMPLIFIED MONITORING. - Video Clip 02)
 * Master Reference: Inogen Development Standards
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const WirelessDataSharing = () => {
  return (
    <section id="wireless-data-sharing" className="w-full py-16 xl:py-24 bg-[#F2F3F4] overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">
        
        {/* Section Header: Centered with xl:max-w-[70%] width limit */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl uppercase tracking-widest block">
            CONNECTED CARE. SIMPLIFIED MONITORING.
          </span>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-black"
          >
            Seamless Data Sharing. Smarter Patient Monitoring.
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]"
          >
            Experience convenient wireless data transfer with Bluetooth® Low Energy, enabling secure connectivity with compatible devices and simplified access to SpO₂ readings for efficient monitoring and reporting.
          </Typography>
        </div>

        {/* Video Player 02: Clean aspect-video with rounded corners & hover circular arrow overlay */}
        <div
          className="w-full lg:max-w-[85%] mx-auto aspect-video relative overflow-hidden rounded-[5px] group cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* Hover Overlay: Blue circular button with yellow upward-right arrow */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#2A96C2] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 text-[#FEBE11]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="#FEBE11"
                  strokeWidth="2.5"
                  className="min-[2500px]:stroke-[3.5] min-[3800px]:stroke-[4.5]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WirelessDataSharing;
