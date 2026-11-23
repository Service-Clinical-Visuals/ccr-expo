/**
 * About Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Visual Specification (from Figma Group 9 & Image 1):
 *    - Upper Banner: #003121 deep green with /medical/pajunk/bg.jpg overlay at 20% opacity.
 *    - Content: Centered tag "ABOUT PAJUNK", heading, and descriptive copy.
 *    - Overlapping Image: /medical/pajunk/about.png straddles the green banner and the white lower section.
 *    - Lower Section: White background with centered "Discover Our Story" CTA button below the building image.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="w-full relative overflow-hidden">
      {/* 1. Green Top Banner (#144835) with subtle bg.jpg texture matching header background */}
      <div className="relative w-full bg-[#144835] pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 md:pb-44 lg:pb-52 overflow-hidden">
        {/* Background Image Layer with multiply blend so base #144835 stays 100% true to header color */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-multiply opacity-40"
          style={{ backgroundImage: `url('/medical/pajunk/bg.webp')` }}
        />

        <div className="custom-container relative z-10 flex flex-col items-center">
          {/* Section Header: Centered with xl:max-w-[70%] */}
          <div
            className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
            data-aos="fade-up"
          >
            <Typography
              variant="tag-badge"
              color="white"
              className="tracking-widest text-xs sm:text-sm font-semibold opacity-90 block"
            >
              ABOUT PAJUNK
            </Typography>

            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
            >
              Empowering Healthcare Through Precision and Innovation
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-white/80 text-sm sm:text-base leading-relaxed"
            >
              PAJUNK® is a family-owned and owner-managed medical technology company that develops and manufactures needs-driven medical devices and solutions in close collaboration with healthcare professionals. Since 1965, we have been helping them focus on what matters most: their patients.
            </Typography>
          </div>
        </div>
      </div>

      {/* 2. White Lower Section with Overlapping Building Image & CTA Button */}
      <div className="w-full bg-white pb-16 sm:pb-20 lg:pb-24 relative z-20">
        <div className="custom-container flex flex-col items-center">
          {/* Overlapping Headquarters Building Image (no borders, no rounded, xl:max-w-[80%]) */}
          <div
            className="w-full max-w-full xl:max-w-[80%] mx-auto -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 relative z-30"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img
              src="/medical/pajunk/about.webp"
              alt="PAJUNK Headquarters and Technology Center"
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* Action Button Centered on White Background Below Image */}
          <div className="mt-8 sm:mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <Button
              text="Discover Our Story"
              variant="primary"
              href="#about"
              showIcon={true}
              className="!py-3 !px-7 font-semibold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
