"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const AdvancedCare = () => {
  return (
    <section
      id="advanced-care"
      className="w-full py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center gap-10 md:gap-14">

        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center gap-3.5 w-full max-w-4xl mx-auto" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="font-semibold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] tracking-tight text-[#121C22] font-outfit"
          >
            Advanced Urology Care Solutions
          </Typography>
          <Typography
            variant="p"
            color="none"
            className="text-[#555962] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-outfit"
          >
            Delta Med S.p.A. offers a comprehensive range of urology products developed to meet the evolving needs of healthcare professionals and patients across different clinical environments. Our portfolio covers a variety of solutions for urinary drainage, collection, and catheterisation, including Foley catheters, intermittent catheters, external catheters, drainage bags, and leg bags.
          </Typography>
        </div>

        {/* Video Player Container */}
        <div
          className="w-full max-w-6xl mx-auto rounded-2xl md:rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="relative w-full aspect-video md:aspect-[16/8.8] bg-[#121c22]">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdvancedCare;
