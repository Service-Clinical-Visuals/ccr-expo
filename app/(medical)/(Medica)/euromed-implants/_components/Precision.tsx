"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Precision = () => {
  return (
    <section id="precision" className="w-full py-16 xl:py-24 bg-[var(--color-secondary)] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 items-center text-center">

        {/* Content (Heading + Text) */}
        <div className="flex flex-col gap-3 items-center w-full xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h5" className="text-[#36679B] font-medium">
            • Orthopaedic Technology
          </Typography>

          <Typography variant="h2" color="dark" className="leading-tight">
            Precision-Engineered Femoral Stems
          </Typography>

          <Typography variant="p" color="dark" className="leading-relaxed ">
            Our femoral stem solutions are developed with precise geometry and carefully considered design features to support accurate fitting within the femoral canal. The range includes options for different anatomical and surgical requirements, providing dependable solutions for modern hip replacement procedures.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="w-full xl:max-w-[75%] aspect-video relative overflow-hidden  shadow-lg "
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Precision;
