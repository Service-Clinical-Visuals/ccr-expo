"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[10%] sm:pb-[8%] md:pb-[6%] min-[2500px]:pb-[5%] pt-[74px] sm:pt-[86px] min-[2500px]:pt-[128px] min-[3800px]:pt-[178px]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/30">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Hero Content */}
      <div className="custom-container relative z-20 w-full">
        <div className="w-full max-w-[70%] text-left space-y-6 md:space-y-8 pointer-events-auto">
          {/* Header Title */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-lg tracking-[0.8px] capitalize"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            We Have Been Creating The Latest Solutions In Medicine For Generations
          </Typography>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Button text="Explore Our Products" href="#products" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
