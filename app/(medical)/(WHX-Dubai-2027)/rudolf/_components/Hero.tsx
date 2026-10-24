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
          className="relative z-20 w-full sm:max-w-[80%] md:max-w-[560px] 2xl:max-w-[640px] min-[2500px]:max-w-[900px] min-[3800px]:max-w-[1250px] flex flex-col items-start gap-3 sm:gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10 pointer-events-auto"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Typography variant="h1" color="white" className="drop-shadow-md">
            We share your passion for
            <br className="hidden sm:block" /> better patient care.
          </Typography>

          <Typography variant="p" color="white" className="text-white/90 drop-shadow-sm">
            To be the partner of choice for healthcare providers worldwide by creating market-leading medical
            diagnostic products.
          </Typography>

          <div className="pt-1 sm:pt-2 min-[2500px]:pt-3 min-[3800px]:pt-5">
            <Button text="Explore Products" variant="primary" href="#products" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
