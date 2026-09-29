"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[6%]"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/10">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full">
        <div className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto">
          {/* Hero Heading */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-lg text-white font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Trusted by Orthopaedic Surgeons
            <br className="hidden md:block" /> & Hospitals Worldwide
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Hero;
