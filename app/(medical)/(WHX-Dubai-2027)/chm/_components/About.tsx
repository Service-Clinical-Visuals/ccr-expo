/**
 * About Section for ChM
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Figma Specs):
 * 1. Centered Section Header:
 *    - Title: "About ChM" (`h2`, Cal Sans, #2A2A2A).
 *    - Subtitle constrained to `xl:max-w-[75%]` for optimal line measure.
 * 2. Two Asymmetrical Image Cards:
 *    - Left image (`about1.webp`): top-left rounded 56px (`rounded-tl-[56px]`), drop shadow, border.
 *    - Right image (`about2.webp`): top-right rounded 56px (`rounded-tr-[56px]`), drop shadow, border.
 * 3. Bottom Bar:
 *    - Supporting copy constrained to `xl:max-w-[70%]`.
 *    - Call to action "Learn More" pill button with red arrow badge.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function About() {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[75%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="secondary"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-[#2A2A2A]"
          >
            About ChM
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
          >
            Established in 1981, ChM sp. z o.o. is a leading manufacturer of orthopedic and traumatology solutions, combining experience with innovation. Working with medical professionals worldwide, we develop advanced implants and surgical instruments to meet evolving clinical needs. Exporting to 50 countries across five continents, our team of nearly 500 employees is committed to research and delivering reliable medical solutions.
          </Typography>
        </div>

        {/* Two Images Side by Side */}
        <div
          className="w-full mt-12 sm:mt-16 flex flex-col md:flex-row gap-6 sm:gap-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Left Image: Woman doctor looking through microscope (about1.webp) */}
          <div className="w-full md:w-1/2 aspect-[16/10] overflow-hidden rounded-tl-[40px] sm:rounded-tl-[56px] border border-gray-200/80 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] group cursor-pointer bg-white">
            <img
              src="/medical/chm/about1.webp"
              alt="Medical professional conducting research with microscope"
              className="w-full h-full object-cover object-left transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Right Image: Smiling doctor in medical setting (about2.webp) */}
          <div className="w-full md:w-1/2 aspect-[16/10] overflow-hidden rounded-tr-[40px] sm:rounded-tr-[56px] border border-gray-200/80 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] group cursor-pointer bg-white">
            <img
              src="/medical/chm/about2.webp"
              alt="Doctor smiling in medical research laboratory"
              className="w-full h-full object-cover object-left transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Bar: Supporting statement and CTA button */}
        <div
          className="w-full mt-8 sm:mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <Typography
            variant="p"
            color="muted"
            className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed w-full max-w-full xl:max-w-[70%]"
          >
            Through continuous improvement, advanced manufacturing, and patient-focused innovation, we strive to support surgeons and contribute to better healthcare outcomes worldwide through reliable, high-quality orthopedic solutions.
          </Typography>

          <Button
            text="Learn More"
            href="#solutions"
            variant="white"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}

