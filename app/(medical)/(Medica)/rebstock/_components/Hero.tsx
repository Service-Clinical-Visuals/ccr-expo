"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section-padding w-full h-screen h-[100dvh] min-h-[580px] sm:min-h-[640px] min-[2500px]:min-h-[900px] min-[3800px]:min-h-[1200px] pb-4 sm:pb-6 min-[2000px]:pb-8 min-[2500px]:pb-10 min-[3800px]:pb-14 flex flex-col justify-center"
    >
      <div className="custom-container h-full flex-1 flex flex-col">
        {/* Main Hero Card Container */}
        <div className="relative w-full h-full flex-1 rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-16">
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
            {/* Subtle Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 z-10 pointer-events-none" />
          </div>

          {/* Content Block at Bottom Left */}
          <div
            className="relative z-20 xl:max-w-[70%] max-w-[90%] flex flex-col items-start gap-4 sm:gap-6 md:gap-8 pointer-events-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Typography
              variant="h1"
              color="white"
              className="!font-semibold leading-[1.2] capitalize drop-shadow-md text-2xl sm:text-3xl md:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl"
            >
              Precision Made In Germany Since 1995
            </Typography>

            <div>
              <Button
                text="Explore Our Products"
                variant="white"
                href="#about"
                className="rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.24)] !px-5 !py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
