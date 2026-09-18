"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-[#0B1126] py-16 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Video */}
          <div
            className="xl:col-span-7 w-full relative h-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full h-full aspect-video overflow-hidden rounded-[6px] flex items-center justify-center">

              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen aspect-video"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            className="xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[1px] bg-[#C382B4]"></div>
              <span className="font-inter text-[#C382B4] section-text font-regular tracking-wide">
                Screw & Cable Systems
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title font-dm-sans font-bold text-white leading-tight mb-4">
              Compression Screws
            </h2>

            {/* Paragraph */}
            <p className="font-inter section-text font-regular text-gray-200 leading-relaxed mb-6">
              Tasarimmed Compression Screw System is designed for fixation of bone and bone fragments. System has got Ø2.5mm, Ø3.5mm, Ø4.5, Ø5.5 mm and Ø6.5mm sizes.
            </p>

            {/* Subtitle */}
            <h3 className="font-dm-sans font-bold text-white card-title mb-4">
              System is intended for :
            </h3>

            {/* Features List */}
            <ul className="flex flex-col gap-4 sm:gap-5 mb-10">
              <li className="flex gap-4 items-start">
                <div className="w-[16px] h-[16px] rounded-full bg-white mt-2 shrink-0"></div>
                <p className="font-inter section-text font-regular text-gray-200 leading-relaxed">
                  Ø2.5, Ø3.5, 4.5, and 5.5 for use as fixation for small bones, bone fragments, and osteotomies. They are not intended for interference or soft tissue fixation.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-[16px] h-[16px] rounded-full bg-white mt-2 shrink-0"></div>
                <p className="font-inter section-text font-regular text-gray-200 leading-relaxed">
                  Ø6.5 may be used for fusions, fractures, or osteotomies of the clavicle, humerus, radius, ulna, ilium, femur, patella, fibula, tibia, talus, malleolus, and calcaneus
                </p>
              </li>
            </ul>

            {/* Action Button */}
            <div className="flex items-center">
              <Link
                href="#compression-screws"
                className="inline-flex items-center justify-center text-white px-8 py-3 rounded-[8px] font-inter text-sm font-semibold transition-colors border border-white/70 hover:border-white/50"
                style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}
              >
                Know More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
