"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Explore360() {
  return (
    <section className="w-full bg-[#0B1126] py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-stretch">

          {/* Left Column: 360 Video Player */}
          <div
            className="xl:col-span-7 w-full relative h-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full h-full aspect-video overflow-hidden bg-gray-200 rounded-md">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            className="xl:col-span-5 flex flex-col gap-4 sm:gap-5 justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[1px] bg-[#C382B4]"></div>
              <span className="font-inter text-[#C382B4] section-text font-regular tracking-wide">
                360° Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title font-dm-sans font-bold text-white leading-tight">
              Explore the PN1 PFNA Nail System
            </h2>

            {/* Paragraph */}
            <p className="font-inter section-text text-gray-100 leading-relaxed font-regular">
              PN-1 PFNA Nail system is designed for use in the treatment of femur fractures in patients whose bone age is determined to be adult.
            </p>

            {/* Indications Subheading */}
            <h3 className="font-inter font-bold text-white section-text mt-2">
              Tasarimmed PN-1 PFNA Nail is indicated for :
            </h3>

            {/* Features List */}
            <ul className="flex flex-col gap-4 sm:gap-5 mt-1">
              <li className="flex gap-4 items-center">
                <div className="w-[73px] h-[73px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <img src="/medical/tasarimmed/icon1.png" alt="Simple shaft fracture" className="w-auto h-auto object-contain" />
                </div>
                <p className="font-inter section-text text-gray-100 leading-relaxed">
                  <strong className="text-white font-bold">Simple shaft fracture:</strong> A clean break through the shaft of a long bone, typically forming a single fracture line.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-[73px] h-[73px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <img src="/medical/tasarimmed/icon2.png" alt="Fragmented shaft fracture" className="w-6 h-6 object-contain" />
                </div>
                <p className="font-inter section-text text-gray-100 leading-relaxed">
                  <strong className="text-white font-bold">Fragmented shaft fracture:</strong> A fracture where the shaft of a long bone breaks into multiple fragments.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-[73px] h-[73px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <img src="/medical/tasarimmed/icon3.png" alt="Spiral Shaft Fractures" className="w-6 h-6 object-contain" />
                </div>
                <p className="font-inter section-text text-gray-100 leading-relaxed">
                  <strong className="text-white font-bold">Spiral Shaft Fractures:</strong> A twisting injury causing a spiral-shaped break along the shaft of a long bone.
                </p>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="#about"
                className="inline-flex items-center justify-center text-white px-8 py-3 rounded-[8px] font-inter text-sm font-semibold transition-colors border border-white/70 hover:border-white/50"
                style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}
              >
                Know More
              </Link>
              <button
                className="w-12 h-12 rounded-full border border-white/70 flex items-center justify-center text-white hover:bg-white/70 transition-colors shrink-0" style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}

                aria-label="Download"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
