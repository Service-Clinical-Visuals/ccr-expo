"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CenteredHeading } from "./SectionHeading";

export default function VideoShowcase() {
  return (
    <section className="w-full bg-[var(--dark)] section-py">
      <div className="custom-container">
        <CenteredHeading
          light
          eyebrow="Orthopaedic Implant Solutions"
          title="Precision-Engineered Implants for Advanced Orthopaedic Care"
          text="Explore Our Orthopaedic Implant Solutions, Designed With A Focus On Precision, Structural Reliability And Functional Performance. Discover The Engineering, Design Details And Applications Of Our Implant Systems Through An In-Depth Product Video."
          className="mb-10 xl:mb-[2.3vw]"
        />

        <div
          className="relative w-full max-w-[1395px] min-[1921px]:max-w-[83%] mx-auto aspect-video overflow-hidden"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
