"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="custom-container mt-6 ">
      {/* Rounded Video Hero Box */}
      <div className="relative w-full h-screen rounded-3xl overflow-hidden bg-black ">

        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover xl:object-fill"
          />
        </div>


        {/* Banner Content Container (Positioned at bottom-left as in screenshot) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-10 xl:p-12">
          <div className="max-w-3xl">

            {/* Main Hero Heading */}
            <h1 className="banner-title font-semibold text-white tracking-tight">
              Advanced Wellness &amp; Cryotherapy
              <br className="hidden sm:inline" /> Devices
            </h1>

            {/* Explore Solutions Button with Arrow Badge */}
            <div className="mt-6 sm:mt-8">
              <Button href="#solutions" variant="primary">
                Explore Solutions
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
