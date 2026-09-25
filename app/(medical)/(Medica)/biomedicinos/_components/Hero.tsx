"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-end pb-24 md:pb-32 lg:pb-40"
    >
      {/* Background Media / Video Player */}
      <div className="absolute inset-0 z-0 bg-[#081230]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Hero Content Container */}
      <div className="custom-container relative z-10 w-full">
        <div
          className="w-full max-w-2xl min-[2500px]:max-w-[60%] min-[3800px]:max-w-6xl text-left"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md mb-8 min-[2500px]:mb-12"
          >
            Advanced Imaging for Precise <br /> Gynecological Diagnosis
          </Typography>

          <Button
            text="Explore Our Solutions"
            href="#solutions"
            variant="white"
            showIcon={false}
          />
        </div>
      </div>
    </section>
  );
}
