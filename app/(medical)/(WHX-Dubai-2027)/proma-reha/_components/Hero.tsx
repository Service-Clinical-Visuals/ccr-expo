"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[8%] md:pb-[6%] min-[3800px]:pb-[8%]"
    >
      {/* Background Video using DynamicVideoPlayer - Exact Deleo pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/20">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
        {/* Soft bottom vignette for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full">
        <div className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto">
          {/* Header Title */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md xl:max-w-[70%]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Better Care Begins with
            <br className="hidden sm:block" /> Better Equipment
          </Typography>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="pt-1"
          >
            <Button
              text="Explore More"
              variant="primary"
              href="#about"
              className="!px-7 !py-3 min-[3800px]:!px-12 min-[3800px]:!py-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
