"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[560px] overflow-hidden flex flex-col justify-end pb-14 sm:pb-20 xl:pb-24 2xl:pb-28 min-[2500px]:pb-40 min-[3800px]:pb-56"
    >
      {/* Full-screen background video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      <div className="custom-container relative z-10">
        {/* Bottom-Left Content */}
        <div
          className="relative z-20 w-full max-w-[80%] flex flex-col items-start gap-3 sm:gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10 pointer-events-auto"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Typography variant="h1" color="white" className="drop-shadow-md">
            Powering a Better Future for Cardiac Care
          </Typography>
          <Typography variant="p" color="white" className="drop-shadow-md max-w-[65%] ">
            Discover advanced cardiac diagnostic solutions designed to support healthcare professionals with reliable technology, connected workflows, and patient-focused care.
          </Typography>

          <div className="pt-1 sm:pt-2 min-[2500px]:pt-3 min-[3800px]:pt-5">
            <Button text="Explore More" variant="primary" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
