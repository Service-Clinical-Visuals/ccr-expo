"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[8%] md:pb-[6%]"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/10">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
        />
      </div>

      {/* Hero Content Container */}
      <div className="custom-container relative z-20 w-full">
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left space-y-4 sm:space-y-6 pointer-events-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {/* Welcome Tag */}
          <div className="inline-block">
            <span className="font-['Inter'] font-semibold text-[15px] sm:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] text-white tracking-wide drop-shadow-sm">
              Welcome to
            </span>
          </div>

          {/* Headline */}
          <Typography
            variant="h1"
            color="white"
            className="font-['Exo_2'] font-bold text-white leading-tight drop-shadow-md"
          >
            HUM Company for Homecare and<br className="hidden md:block" /> Medical Technology
          </Typography>

          {/* CTA Button */}
          <div className="pt-2">
            <Button text="Explore Details" variant="primary" href="#about" showIcon={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
