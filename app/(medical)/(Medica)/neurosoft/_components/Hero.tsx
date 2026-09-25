"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-[100dvh] pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[8%] md:pb-[6%] min-[2500px]:pb-[7%] min-[3800px]:pb-[8%] bg-black select-none"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
        />
      </div>

      <div className="custom-container relative z-20 w-full">
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 min-[2500px]:space-y-12 min-[3800px]:space-y-16 pointer-events-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="!text-white font-baloo font-semibold text-[32px] sm:text-[40px] md:text-[46px] min-[2500px]:text-[64px] min-[3800px]:text-[84px] leading-[1.25] sm:leading-[1.3] drop-shadow-md capitalize max-w-[90%] xl:max-w-[70%]">
            Neurosoft: Power Of Integration
          </h1>

          <div className="pt-1">
            <Button
              text="Learn More About Us"
              href="#about"
              variant="white"
              showIcon={true}
              className="text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12 font-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
