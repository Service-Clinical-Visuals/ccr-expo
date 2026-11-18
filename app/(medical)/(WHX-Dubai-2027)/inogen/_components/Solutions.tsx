"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

/**
 * Solutions Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readable typography measure.
 * 2. Media Grid:
 *    - Two equal-width cards (`w-full md:w-1/2`) utilizing `aspect-[16/10]` ratio.
 *    - Rounded corners (`rounded-[24px] sm:rounded-[32px]`) with smooth hover zoom interaction (`group-hover:scale-105`).
 * 3. Bottom Action Bar:
 *    - Flex container (`flex-col md:flex-row`) containing supporting copy constrained to `xl:max-w-[70%]`
 *      and an action CTA button.
 */
const Solutions = () => {
  return (
    <section id="solutions-section" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header: Centered with xl:max-w-[70%] desktop width limit */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
          >
            Innovative Portable Oxygen Solutions For Every Need
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#555555]"
          >
            Inogen continues to lead the development of portable oxygen concentrator technology through ongoing research, innovation, and direct patient feedback. By understanding the evolving needs of patients and healthcare providers, we create advanced oxygen therapy solutions that combine reliable performance, convenience, and practical functionality.
          </Typography>
        </div>

        {/* Two Images Side by Side */}
        <div
          className="w-full mt-10 sm:mt-14 flex flex-col md:flex-row gap-6 sm:gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Image 1 (Left: e1.jpg) */}
          <div className="w-full md:w-1/2 aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
            <img
              src="/medical/inogen/e1.webp"
              alt="Inogen portable oxygen solutions for patients"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Image 2 (Right: e2.jpg) */}
          <div className="w-full md:w-1/2 aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
            <img
              src="/medical/inogen/e2.webp"
              alt="Active lifestyle with Inogen portable oxygen therapy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Bar: Text + Button */}
        <div
          className="w-full mt-8 sm:mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typography
            variant="p"
            color="muted"
            className="text-xs sm:text-sm text-[#555555] max-w-2xl leading-relaxed w-full max-w-full xl:max-w-[70%]"
          >
            Our products are designed to help patients maintain greater mobility and independence during daily activities and rest, while supporting Home Medical Equipment providers with solutions that simplify operations, reduce service requirements, and enhance the overall patient experience.
          </Typography>

          <Link
            href="#products"
            className="inline-flex items-center gap-2 min-[2500px]:gap-3.5 min-[3800px]:gap-5 bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#0B3090]/50 text-[#0B3090] text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl font-semibold px-5 py-2.5 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5 rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out shrink-0 group cursor-pointer"
          >
            <span className="text-[#0B3090]">Explore Our Oxygen Solutions</span>
            <img
              src="/medical/inogen/ba.webp"
              alt="arrow"
              className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
