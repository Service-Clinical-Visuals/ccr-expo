"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] flex flex-col pt-[92px] sm:pt-[104px] lg:pt-[114px] min-[2500px]:pt-[156px] min-[3800px]:pt-[220px] pb-4 sm:pb-6 min-[2500px]:pb-8 min-[3800px]:pb-12 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Full-Height Rounded Hero Banner Card following Tecme structure */}
        <div
          className="relative w-full h-full flex-1 rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl flex flex-col justify-end px-6 sm:px-10 lg:px-14 min-[2500px]:px-20 min-[3800px]:px-28 pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44 bg-black/40"
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

          {/* Bottom Left Content using Deleo's xl:max-w-[70%] max-w-[90%] */}
          <div
            className="relative z-20 xl:max-w-[70%] max-w-[90%] text-left space-y-4 sm:space-y-6 pointer-events-auto mb-2 sm:mb-4 lg:mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Typography
              variant="h1"
              color="white"
              className="leading-snug drop-shadow-md !font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl"
            >
              Bovie® Specialist | PRO – 120W Electrosurgical Generator
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
