"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="custom-container relative z-20 w-full">
        <div className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto">
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Advancing Healthcare Through Quality Medical Solutions
          </Typography>

          <div className="pt-1">
            <Button
              text="Explore Our Products"
              variant="primary"
              href="#products"
              showIcon={false}
              className="px-7 py-3 rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
