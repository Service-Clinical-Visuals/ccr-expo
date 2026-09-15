"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="custom-container  mt-25">
      {/* Rounded Video Hero Container matching Screenshot */}
      <div
        className="relative w-full h-screen rounded-3xl overflow-hidden bg-black"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover xl:object-fill"
          />
        </div>


        {/* Banner Content Container (Positioned at bottom-left as in screenshot) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-10 xl:p-12">
          <div className="max-w-4xl">
            {/* Main Hero Heading: 160 Years Of Experience. Forward-Looking By Nature. */}
            <h1
              className="banner-title font-semibold text-white tracking-tight font-exo2"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              160 Years Of Experience.
              <br />
              Forward-Looking By Nature.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
