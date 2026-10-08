"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-[600px] min-[3800px]:min-h-[1400px] relative overflow-hidden flex flex-col pt-[86px] sm:pt-[106px] lg:pt-[118px] min-[3800px]:pt-[308px] pb-3 sm:pb-5 min-[3800px]:pb-10"
    >
      <div className="custom-container h-full w-full relative flex flex-col flex-1">
        <div className="relative w-full h-full flex-1 rounded-[20px] sm:rounded-[24px] min-[3800px]:rounded-[45px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-end">
          {/* Background Video */}
          <DynamicVideoPlayer
            className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
            type="banner"
          />

          {/* Content */}
          <div className="relative z-10 w-full pb-14 sm:pb-20 md:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-52 pl-6 sm:pl-10 md:pl-14 min-[3800px]:pl-20">
            <div className="xl:max-w-[70%] max-w-[90%] text-left space-y-4 pointer-events-auto">
              <Typography
                variant="h2"
                color="white"
                className="!text-2xl sm:!text-3xl md:!text-4xl min-[2500px]:!text-5xl min-[3800px]:!text-7xl !font-semibold leading-tight drop-shadow-md"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                70 years of experience that shape medical future
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
