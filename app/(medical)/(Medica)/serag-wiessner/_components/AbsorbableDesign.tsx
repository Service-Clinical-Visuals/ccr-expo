"use client";

import React from "react";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AbsorbableDesign() {
  return (
    <section className="w-full bg-[#87203e] py-14 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column: Video Clip Box */}
          <div
            className="xl:col-span-9 w-full order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full aspect-video  overflow-hidden bg-[#eaeaea] shadow-2xl ">


              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Information & Specifications */}
          <div
            className="xl:col-span-3 flex flex-col gap-4 sm:gap-5 order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Title */}
            <h2 className="section-title font-semibold text-white tracking-tight font-exo2 leading-tight">
              Absorbable Design &amp;
              <br />
              Reliable Support
            </h2>

            {/* Subtle Divider Line */}
            <div className="w-full h-px bg-white/20" />

            {/* Intro Paragraph */}
            <p className="section-text text-white leading-relaxed font-outfit">
              The mesh implants are designed to integrate into the surrounding tissue
              through cellular ingrowth, providing reinforcement during the
              reconstruction process.
            </p>

            {/* Feature Bullet Points */}
            <div className="flex flex-col gap-3.5 pt-1">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#87203e] mt-0.5 shadow-sm">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3.5]" />
                </div>
                <p className="section-text text-white leading-relaxed font-outfit flex-1">
                  <strong className="font-semibold text-white font-exo2">
                    Tested Biocompatibility
                  </strong>{" "}
                  – Manufactured using materials with tested tissue compatibility to
                  support reliable clinical application.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#87203e] mt-0.5 shadow-sm">
                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3.5]" />
                </div>
                <p className="section-text text-white leading-relaxed font-outfit flex-1">
                  <strong className="font-semibold text-white font-exo2">
                    Customisable Options
                  </strong>{" "}
                  – Multiple dimensions and configurations provide flexibility for
                  different breast reconstruction requirements.
                </p>
              </div>
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-px bg-white/20" />

            {/* Secondary Paragraph */}
            <p className="section-text text-white leading-relaxed font-outfit">
              Depending on the material, the mesh gradually absorbs over time, reducing the
              amount of permanent material remaining in the body while supporting
              effective tissue healing and reconstruction.
            </p>

            {/* View Specifications CTA Button */}
            <div className="pt-2">
              <Button href="#specifications" variant="white">
                View Specifications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
