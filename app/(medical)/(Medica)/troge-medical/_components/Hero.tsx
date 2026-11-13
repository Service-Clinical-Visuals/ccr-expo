"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] flex flex-col pt-[86px] sm:pt-[96px] lg:pt-[106px] min-[2500px]:pt-[144px] min-[3800px]:pt-[204px] pb-4 sm:pb-6 min-[2500px]:pb-8 min-[3800px]:pb-12 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Full-Height Rounded Hero Banner Card with clean gap below header */}
        <div
          className="relative w-full h-full flex-1 rounded-none overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 min-[3800px]:p-28 bg-[#1A1A1A]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>

          {/* Top Left Tag */}
          <div
            className="relative z-20 flex items-center gap-2 pt-2 sm:pt-4 min-[2500px]:pt-6 min-[3800px]:pt-8"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-2 text-white">
              <span className="w-1.5 h-5 bg-[var(--color-primary)]" />
              <span className="text-white text-sm sm:text-base font-medium drop-shadow-md">
                Treatment procedure
              </span>
            </div>
          </div>

          {/* Bottom Left Content */}
          <div
            className="relative z-20 xl:max-w-[70%] max-w-[90%] text-left space-y-6 sm:space-y-8 min-[2500px]:space-y-12 min-[3800px]:space-y-16 pb-4 sm:pb-6 pointer-events-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="h1"
              color="white"
              className="leading-tight sm:leading-snug drop-shadow-md !font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl"
            >
              Count On Us When Care Really Counts
            </Typography>

            <div>
              <Button
                text="Explore our Products"
                href="#products"
                variant="primary"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
