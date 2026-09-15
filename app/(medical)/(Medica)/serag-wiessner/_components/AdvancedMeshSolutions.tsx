"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AdvancedMeshSolutions() {
  return (
    <section
      className="w-full bg-[#f5f5f5] py-14 sm:py-20 md:py-24"
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Top Header Row with Title, Description, and CTA Button */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Heading & Description */}
          <div className="max-w-5xl">
            <h2 className="section-title font-semibold  tracking-tight font-exo2">
              Advanced Mesh Solutions For Breast Reconstruction
            </h2>
            <p className="section-text mt-2 sm:mt-3 leading-relaxed font-outfit">
              SERAGYN® BR PA and SERASYNTH® MESH BR are partially and fully absorbable
              textile implants designed to reinforce soft tissue during breast
              reconstruction. Their soft, flexible mesh structures support tissue
              integration while providing reliable reinforcement and biocompatibility.
            </p>
          </div>

          {/* Right: View Product Details Button */}
          <div className="flex-shrink-0">
            <Button href="#textile-implants" variant="primary">
              View Product Details
            </Button>
          </div>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full h-px bg-slate-300/70 my-6 sm:my-8" />

        {/* Large Centered Video Box */}
        <div
          className="relative w-full max-w-7xl mx-auto overflow-hidden aspect-video bg-[#eaeaea] shadow-xl shadow-slate-900/5 "
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >


          {/* Dynamic Video Player */}
          <div className="absolute inset-0 w-full h-full z-10">
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
