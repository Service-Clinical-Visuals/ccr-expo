"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:z-60 mt-0 h-screen pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[8%] md:pb-[6%]"
    >
      {/* Background Video using DynamicVideoPlayer matching Deleo pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Hero Content Container matching Deleo technique */}
      <div className="custom-container relative z-20 w-full">
        <div
          className="xl:max-w-[80%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto"
        >
          {/* Main Hero Title */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md tracking-wide uppercase font-normal text-3xl sm:text-4xl lg:text-[42px] min-[2500px]:text-6xl min-[3800px]:text-8xl w-full max-w-[90%] xl:max-w-[80%]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Since 1939, Bardahl Has Delivered Trusted Automotive Care Worldwide.
          </Typography>

          {/* Call to action button */}
          <div className="pt-2">
            <Button
              text="View Products Details"
              variant="pill"
              href="#products"
              showIcon={true}
              iconDirection="up-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
