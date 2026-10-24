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
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/40">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Hero Content */}
      <div className="custom-container relative z-20 w-full">
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] min-[3800px]:text-[72px]"
          >
            Precision in Every Procedure, Excellence in Every Innovation
          </Typography>

          <div>
            <Button
              text="Explore More"
              variant="primary"
              href="#about"
              className="!py-3 !px-8 text-base shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
