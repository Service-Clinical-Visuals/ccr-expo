"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen h-[100dvh] min-h-[600px] min-[2500px]:min-h-[900px] overflow-hidden flex flex-col justify-end pb-12 md:pb-16 lg:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44"
    >
      {/* Background Media / Video Player with clean visual */}
      <div className="absolute inset-0 z-0 bg-[#003470]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle gradient for text legibility at bottom without heavy dark tint overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003470]/70 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="custom-container relative z-10 w-full">
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md"
          >
            Advancing Medical Care Through Innovation .
          </Typography>
        </div>
      </div>
    </section>
  );
}
