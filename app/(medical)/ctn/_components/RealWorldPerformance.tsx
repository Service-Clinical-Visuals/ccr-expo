"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function RealWorldPerformance() {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 md:py-24">
      <div className="custom-container px-2 md:px-10">

        {/* Section Header: Centered Heading & Subtitle */}
        <div
          className="flex flex-col items-center text-center max-w-7xl mx-auto mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title tracking-tight font-semibold">
            <span className="text-slate-900">Engineered For </span>
            <span className="text-[#2b7ab7]">Real-World Performance</span>
          </h2>

          <p className="section-text text-slate-600 mt-4 sm:mt-5 max-w-6xl mx-auto leading-relaxed">
            CTN e°COMPRESSION™ is built for demanding environments—combining durability,
            ease of use, and premium recovery technology. With five pre-programmed
            compression sequences, rapid inflation (15–60 seconds per chamber), quiet
            operation (&le;45 dB), and long-life battery performance, the system delivers
            professional results without complexity. Whether used in recovery studios,
            wellness centres, clinics, or home settings, e°COMPRESSION™ brings reliable,
            efficient compression therapy wherever it&apos;s needed.
          </p>
        </div>

        {/* Rounded 16:9 Video Box */}
        <div
          className="relative w-full max-w-7xl mx-auto aspect-video rounded-4xl overflow-hidden flex items-center justify-center bg-black/5"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
