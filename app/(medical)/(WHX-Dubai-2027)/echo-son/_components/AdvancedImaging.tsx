"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

/**
 * Advanced Imaging: full-width teal band with a centred heading and intro, above a
 * video card with rounded top-left and bottom-right corners.
 */
const AdvancedImaging = () => {
  return (
    <section
      id="advanced-imaging"
      className="relative w-full bg-primary py-10 sm:py-12 xl:py-10 2xl:py-14 min-[2500px]:py-20 min-[3800px]:py-28"
    >
      <div className="custom-container">
        <div
          className="flex flex-col items-center text-center gap-2 2xl:gap-3 min-[2500px]:gap-5 mx-auto max-w-[900px] 2xl:max-w-[1050px] min-[1920px]:max-w-[1200px] min-[2500px]:max-w-[1700px] min-[3800px]:max-w-[2400px]"
          data-aos="fade-up"
        >
          <h2 className="text-white">Advanced Imaging For Versatile Diagnostics</h2>
          <p className="text-white/90">
            The ALBIT Ultrasound Scanner combines advanced digital imaging technology with
            user-friendly controls and flexible diagnostic functions. Designed for stationary and
            portable use, it supports general and specialized examinations across multiple
            clinical applications.
          </p>
        </div>

        <div
          className="relative mt-7 sm:mt-8 2xl:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20 mx-auto w-full xl:w-[87%] aspect-video  overflow-hidden bg-black/10 rounded-tl-4xl rounded-br-4xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedImaging;
