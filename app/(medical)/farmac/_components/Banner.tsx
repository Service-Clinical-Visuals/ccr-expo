"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section id="banner-section" className="relative w-full h-screen bg-[#02042b] overflow-hidden">
      {/* Background Dynamic Video Player */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover lg:object-fill"
        />

      </div>

      {/* Content Container aligned with custom-container */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-12 sm:pb-16 md:pb-20">
        <div className="custom-container">
          <div className="max-w-md">
            <h1
              className="banner-title font-poppins font-medium text-white tracking-tight text-left"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Leading company in the medical devices sector
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
