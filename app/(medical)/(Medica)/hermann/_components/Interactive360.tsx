"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Interactive360() {
  return (
    <section id="experience-360" className="relative w-full bg-white overflow-hidden">
      {/* Top Banner: Dark Red Textured Header */}
      <div className="relative w-full bg-[#6D1010] bg-[radial-gradient(ellipse_at_top,_#801414_0%,_#6D1010_60%,_#4e0b0b_100%)] pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-32 lg:pb-40 min-[3800px]:pb-56 overflow-hidden">
        {/* Subtle decorative grid/texture overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="custom-container relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full max-w-[90%] xl:max-w-[80%] mx-auto">
          <Typography
            variant="h2"
            color="white"
            className="capitalize !font-semibold drop-shadow-sm xl:max-w-[80%]"
            data-aos="fade-up"
          >
            Explore Endoscopic Devices In 360°
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="text-white/90 leading-relaxed xl:max-w-[80%]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Take a closer look at our endoscopic devices through an interactive 360° experience. Explore the design, controls, and features of our advanced systems for modern surgical applications.
          </Typography>
        </div>
      </div>

      {/* Video Container (Overlapping both Red and White backgrounds) */}
      <div className="custom-container relative z-20 -mt-16 sm:-mt-24 lg:-mt-28 min-[2500px]:-mt-36 min-[3800px]:-mt-48 pb-12 sm:pb-16 lg:pb-20 min-[3800px]:pb-32">
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[20px] sm:rounded-[30px] min-[3800px]:rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] bg-black/10 border border-black/5"
          data-aos="zoom-in"
          data-aos-delay="150"
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
