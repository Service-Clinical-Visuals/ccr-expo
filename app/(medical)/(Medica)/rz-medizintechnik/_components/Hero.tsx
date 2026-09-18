"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col justify-end pb-14 sm:pb-20 lg:pb-[110px] min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      {/* Background Banner Video / Visual with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0F172A]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
          audioFeature
        />
        {/* Subtle dark gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30 pointer-events-none" />
      </div>

      {/* Hero Content Overlay (Bottom-left aligned matching Figma & Deleo) */}
      <div className="custom-container relative z-10 w-full">
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Main Headline */}
          <Typography
            variant="h1"
            color="white"
            className="font-semibold leading-tight drop-shadow-md"
          >
            Advancing Surgery Through Precision &amp; Innovation
          </Typography>

          {/* Action CTA Button */}
          <div className="pt-2">
            <Button variant="primary" href="#about">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
