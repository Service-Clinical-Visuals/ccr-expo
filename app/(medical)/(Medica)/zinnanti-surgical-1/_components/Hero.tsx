"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[7%] bg-[#020044]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content */}
      <div className="custom-container relative z-20 w-full">
        <div className="max-w-[90%] xl:max-w-[60%] text-left space-y-5 md:space-y-6">
          <Typography
            variant="h1"
            color="white"
            className="drop-shadow-md"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Innovative Surgical Technology
          </Typography>

          <div data-aos="fade-right" data-aos-delay="200">
            <Button text="Request a Sample" href="#contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
