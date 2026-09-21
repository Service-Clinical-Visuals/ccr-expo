"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Explore360() {
  return (
    <section
      id="explore-360"
      className="w-full bg-[#F5F5F5] pt-14 sm:pt-20 xl:pt-24 pb-16 sm:pb-22 xl:pb-28 overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <div
          className="w-full xl:max-w-[70%] min-[3800px]:max-w-[75%] mx-auto text-center flex flex-col items-center min-[3800px]:gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Section Heading */}
          <Typography
            variant="h2"
            weight="semibold"
            color="dark"
            className="font-['Exo_2'] tracking-tight capitalize"
          >
            Explore MicrUs Pro In 360&deg;
          </Typography>

          {/* Subtitle / Description */}
          <Typography
            variant="p"
            color="body"
            className="mt-3.5 sm:mt-4 min-[3800px]:mt-6 leading-relaxed text-center"
          >
            Explore the MicrUs Pro handheld ultrasound scanner through an
            interactive 360&deg; experience. Discover its compact probe design,
            available models, and key features developed for portable
            ultrasound imaging.
          </Typography>
        </div>

        {/* 360 Video Player */}
        <div
          className="w-full xl:max-w-[80%] aspect-[16/9] relative overflow-hidden mt-8 sm:mt-10 min-[3800px]:mt-16 mx-auto shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="200"
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
