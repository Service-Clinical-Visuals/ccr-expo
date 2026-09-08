"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[6%] md:pb-[5%] "
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full px-4 sm:px-6">
        <div
          className="xl:max-w-[60%] max-w-full text-left space-y-4 md:space-y-6 pointer-events-auto"
        >
          {/* Header Title  */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight"
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"
          >
           Get The Best < br /> Skin Of Your Life
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed w-full  xl:max-w-[70%]"
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
          >
            Discover the ultimate solution for achieving glowing, hydrated and healthy skin.
          </Typography>

          <div className="pt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Button text="Find A Verified Provider" href="#provider" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
