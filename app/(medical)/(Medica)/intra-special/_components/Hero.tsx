"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen h-[100dvh] min-h-[620px] lg:min-h-[750px] min-[2500px]:min-h-[1050px] min-[3800px]:min-h-[1350px] overflow-hidden flex flex-col justify-end pb-14 sm:pb-20 lg:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      {/* Background Banner Video / Visual */}
      <div className="absolute inset-0 z-0 bg-[#0B132B]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Hero Content Overlay */}
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
            className="leading-tight drop-shadow-md"
          >
            Trusted Catheter Solutions Built on Decades of Medical Expertise and Precision Manufacturing
          </Typography>

          {/* Action Button */}
          <div className="pt-2">
            <Button
              variant="outline-white"
              href="#products"
              arrowCircle={false}
            >
              Discover INTRA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
