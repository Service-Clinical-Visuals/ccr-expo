"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="home" className="w-full h-[100dvh] min-h-[600px] pt-[84px] sm:pt-[96px] md:pt-[102px] min-[3800px]:pt-[160px] pb-4 flex flex-col overflow-hidden">
      <div className="custom-container flex-1 flex flex-col h-full">

        <div
          className="relative flex-1 w-full rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >

          <div className="absolute inset-0 z-0 pointer-events-none bg-black/15">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>

          <div className="relative z-20 w-full max-w-[90%] xl:max-w-[70%] flex flex-col items-start gap-6 sm:gap-8">
            <Typography
              variant="h1"
              color="white"
              className="leading-tight drop-shadow-md text-3xl sm:text-4xl lg:text-5xl font-semibold capitalize"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Advancing Surgical Care Through Quality & Innovation
            </Typography>

            <div data-aos="fade-up" data-aos-delay="250">
              <Button
                text="Explore Solutions"
                href="#about"
                variant="primary"
                iconType="arrow-up-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
