"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex flex-col pt-[78px] sm:pt-[90px] md:pt-[96px] lg:pt-[104px] min-[2500px]:pt-[154px] min-[3800px]:pt-[228px] pb-3 sm:pb-4 lg:pb-5 min-[2500px]:pb-8 min-[3800px]:pb-10 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col flex-1">
        {/* Full-Height Rounded Hero Banner Card matching Tecme concept */}
        <div
          className="relative w-full h-full flex-1 rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 min-[3800px]:p-28 bg-[#111]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Background Video using DynamicVideoPlayer banner */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            />
          </div>


          {/* Heading overlay at bottom-left */}
          <div
            className="relative z-20 xl:max-w-[70%] max-w-[90%] pb-2 sm:pb-4 pointer-events-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Typography
              variant="h1"
              color="white"
              className="drop-shadow-md capitalize leading-[1.2] !font-semibold"
            >
              Advanced Cryotherapy For Modern Rehabilitation
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

