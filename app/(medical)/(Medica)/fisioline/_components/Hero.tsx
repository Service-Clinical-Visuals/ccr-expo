"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] flex flex-col pt-[88px] sm:pt-[102px] lg:pt-[116px] min-[2500px]:pt-[164px] min-[3800px]:pt-[248px] pb-4 sm:pb-6 min-[2500px]:pb-8 min-[3800px]:pb-12 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Full-Height Rounded Hero Banner Card with clean gap below header (Tecme layout) */}
        <div
          className="relative w-full h-full flex-1 rounded-tl-[20px] sm:rounded-tl-[30px] rounded-br-[20px] sm:rounded-br-[30px] rounded-tr-none rounded-bl-none overflow-hidden shadow-2xl flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 min-[3800px]:p-28 bg-[#121C22]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-black/10">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
              type="banner"
            />
          </div>


          {/* Bottom Left Content */}
          <div
            className="relative z-20 xl:max-w-[50%] max-w-[60%] text-left space-y-4 sm:space-y-6 pointer-events-auto pb-6 sm:pb-8 lg:pb-10 min-[2500px]:pb-16 min-[3800px]:pb-24"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="h1"
              color="white"
              className="leading-tight sm:leading-snug drop-shadow-md !font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl"
            >
              Advanced Surgical Laser Technology For Precision &amp; Performance
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
