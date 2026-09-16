"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen h-[100dvh] min-h-[620px] min-[2500px]:min-h-[920px] overflow-hidden flex flex-col justify-end pb-14 sm:pb-20 lg:pb-28 min-[2500px]:pb-40 min-[3800px]:pb-52"
    >
      {/* Background Banner Video */}
      <div className="absolute inset-0 z-0 bg-[#202020]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle dark tint to ensure white text readability against varying video backgrounds */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="custom-container relative z-10 w-full">
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md"
          >
            Advanced hip & knee implant solutions designed for surgical confidence and lasting mobility.
          </Typography>

          <div className="pt-2">
            <Button
              variant="outline-white"
              href="#products"
              className="shadow-lg hover:shadow-xl"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
