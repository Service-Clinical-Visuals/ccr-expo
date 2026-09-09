"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[8%] md:pb-[6%] "
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
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md"
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"
          >
            High-Quality Materials Combined with<br className="hidden md:block"/> Precision Engineering for Superior Performance
          </Typography>

          <div className="pt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Button text="Get a Consultation" variant="primary" href="#contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
