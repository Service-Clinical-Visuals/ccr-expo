"use client";

import React from "react";
import Typography from "./Typography";

/**
 * PrecisionDesign Section - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Background Theme:
 *    - Uses geometric textured background `bg1.webp` over `#2F3F5A`.
 * 2. Section Header:
 *    - Centered title and description constrained to `xl:max-w-[70%]` for readable measure.
 * 3. Featured Media:
 *    - Centered frame with white border (`border-[3px] border-white`), `rounded-[30px]`,
 *      shadow-2xl, and responsive dimensions.
 */
const PrecisionDesign = () => {
  return (
    <section
      id="precision-design"
      className="w-full py-16 xl:py-24 bg-[#2F3F5A] bg-[url('/medical/reison/bg1.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">

        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-primary capitalize"
          >
            Designed For Precision &amp; Patient Support
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="text-white/80 text-sm sm:text-base leading-relaxed"
          >
            Engineered to provide stable and comfortable arm positioning, this surgery table offers flexibility and convenience for various surgical procedures, ensuring reliable support throughout every operation while enhancing surgical access and overall efficiency.
          </Typography>
        </div>

        {/* Large Media Showcase Container */}
        <div
          className="w-full lg:max-w-[75%] mx-auto aspect-[16/10] sm:aspect-video relative overflow-hidden rounded-[30px] shadow-[0px_3px_12px_rgba(0,0,0,0.35)] border-[3px] border-white group cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <img
            src="/medical/reison/design.webp"
            alt="Arm & Hand surgery table precision design clamp mechanism"
            className="w-full h-full aspect-[16/10] sm:aspect-video object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default PrecisionDesign;

