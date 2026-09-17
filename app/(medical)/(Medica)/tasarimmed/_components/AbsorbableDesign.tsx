"use client";

import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AbsorbableDesign() {
  return (
    <section className="w-full bg-[#0B1126] py-16 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 mb-8" data-aos="fade-up">
          {/* Left Title Area */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1px] bg-[#C382B4]"></div>
              <span className="font-inter text-[#C382B4] section-text font-regular tracking-wide">
                Thoracolumbar Systems
              </span>
            </div>
            <h2 className="section-title font-dm-sans font-bold text-white leading-tight">
              Raptor Spinal System
            </h2>
          </div>

          {/* Right Description Area */}
          <div className="lg:w-1/2">
            <p className="font-inter section-text font-regular text-gray-200 leading-relaxed">
              The Raptor Spinal System provides immobilization and stabilization of spinal segments to support thoracic, lumbar, and sacral spine fusion in skeletally mature patients.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/70 mb-10 sm:mb-14" data-aos="fade-up" data-aos-delay="100"></div>

        {/* Bottom Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Text & Features */}
          <div
            className="lg:col-span-4 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <p className="font-inter section-text font-regular text-gray-200 leading-relaxed mb-8">
              The Raptor Spinal System consists of a variety of shapes and sizes of rods, cannulated and solid polyaxial screws, and connecting components, which can be rigidly locked into a variety of configurations, with each construct being tailor-made for the individual case. Tasarimmed Raptor Spinal System can be used with Tasarimmed Anchor Spinal System.
            </p>

            <h3 className="font-dm-sans font-bold text-white section-text mb-4">
              Key – Features :
            </h3>

            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Dual thread profile for better bone purchase",
                "Fully cannulated",
                "Ovoid fenestration for bone cement injection",
                "Colour coded screw diameters",
                "Ø6mm System",
                "Wide selection of accessories"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-[16px] h-[16px] rounded-full bg-white shrink-0"></div>
                  <span className="font-inter section-text text-gray-100 font-bold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="#raptor"
                className="inline-flex items-center justify-center text-white px-8 py-3 rounded-[8px] font-inter text-sm font-semibold transition-colors border border-white/70 hover:border-white/50"
                style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}
              >
                Know More
              </Link>
              <button
                className="w-12 h-12 rounded-full border border-white/70 flex items-center justify-center text-white hover:bg-white/70 transition-colors shrink-0"
                style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}
                aria-label="Download"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Video */}
          <div
            className="lg:col-span-8 w-full relative h-full"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="relative w-full h-full aspect-video overflow-hidden rounded-[6px] flex items-center justify-center">

              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
