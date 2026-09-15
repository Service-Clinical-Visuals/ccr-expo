"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="custom-container mt-25">
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
            className="absolute inset-0 w-full h-full object-cover lg:object-fill"
          />
        </div>

        {/* Banner Content Container (Positioned at bottom-left as in screenshot) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-12 xl:p-16">
          <div className="max-w-4xl">
            {/* Main Hero Heading: Advancing Healthcare Through Trusted Medical Solutions */}
            <h1
              className="banner-title font-semibold text-white tracking-tight font-outfit"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Advancing Healthcare Through
              <br />
              Trusted Medical Solutions
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
