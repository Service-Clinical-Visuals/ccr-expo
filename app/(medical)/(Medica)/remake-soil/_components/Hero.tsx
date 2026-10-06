"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] bg-black pt-[76px] sm:pt-[86px] md:pt-[92px] lg:pt-[96px] xl:pt-[100px] min-[2500px]:pt-[132px] min-[3800px]:pt-[180px] pb-3 sm:pb-4 min-[2500px]:pb-6 min-[3800px]:pb-8 overflow-hidden relative flex flex-col"
    >
      <div className="custom-container h-full flex-1 flex flex-col">

        <div
          className="relative w-full h-full flex-1 rounded-[20px] sm:rounded-[24px] min-[3500px]:rounded-[36px] min-[3800px]:rounded-[40px] border border-white/30 overflow-hidden shadow-2xl flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-16 min-[3500px]:p-20 min-[3800px]:p-24"
          data-aos="fade-up"
          data-aos-duration="1000"
        >

          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>

          <div className="relative z-20 w-full max-w-[90%] xl:max-w-[70%] pointer-events-auto">
            <Typography
              variant="h1"
              color="white"
              className="!font-semibold leading-[1.25] sm:leading-[1.2] drop-shadow-md capitalize text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] min-[1920px]:text-[56px] min-[2500px]:text-[68px] min-[3500px]:text-[80px] min-[3800px]:text-[88px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              Flowable Fill Production And Distribution
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
