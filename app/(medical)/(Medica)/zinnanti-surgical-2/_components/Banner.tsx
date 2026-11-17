"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-[var(--zs-header-h,110px)] bg-white"
    >
      {/* Video area sits below the header and fills one full screen */}
      <div className="relative w-full h-[100dvh] flex items-end overflow-hidden bg-[#0A0D10]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Dark gradient overlay for readability */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/80 via-black/40 to-transparent pointer-events-none" /> */}

        {/* Bottom-left Content */}
        <div className="custom-container relative z-20 pb-12 sm:pb-16 lg:pb-20 min-[2500px]:pb-28 min-[3800px]:pb-40">
          <div className="flex flex-col items-start gap-4 sm:gap-5 min-[2500px]:gap-8 max-w-[90%] xl:max-w-[60%]">
            <div data-aos="fade-up">
              <Eyebrow text="Surgical Ergonomics" tone="light" />
            </div>

            <Typography
              variant="h1"
              color="white"
              className="uppercase leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Innovative Surgical Technology
            </Typography>

            <div
              className="pt-2 sm:pt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Button text="Request Samples" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
