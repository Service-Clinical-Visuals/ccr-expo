"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

/**
 * About Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Section Header:
 *    - Structured with category subtitle, primary heading, and lead paragraph constrained to `w-full max-w-full xl:max-w-[70%] mx-auto`.
 * 2. Visual Media:
 *    - Large wide-aspect image frame with subtle rounded corners (`rounded-[10px]`) and soft shadow.
 * 3. 4K & Ultra-wide scaling:
 *    - Max-width and typography scale smoothly up to min-[3800px].
 */
const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header: Subtitle, Heading, Paragraph */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.0625rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-bold tracking-wide text-[#1B4298]"
          >
            About Vitrex Medical Group
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] xl:text-[1.6875rem] min-[2500px]:text-[2.4375rem] min-[3800px]:text-[3.4375rem] font-bold tracking-tight text-[#202020]"
          >
            Innovating Healthcare Through Precision and Excellence.
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.4375rem] min-[3800px]:text-[2.0625rem] leading-relaxed text-[#202020] text-center"
          >
            Vitrex Medical Group combines decades of industry expertise with advanced manufacturing capabilities to deliver reliable medical devices and customised healthcare solutions worldwide. Driven by quality, innovation and patient safety, the company supports healthcare professionals with products designed to meet evolving medical needs.
          </Typography>
        </div>

        {/* Featured Image */}
        <div
          className="w-full max-w-[1344px] min-[2500px]:max-w-[1800px] min-[3800px]:max-w-[2600px] mx-auto aspect-[16/7] sm:aspect-[16/6.5] relative rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] overflow-hidden shadow-md mt-10 sm:mt-12"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/medical/vitrex/about.webp"
            alt="Vitrex Medical Group conference presentation and medical professionals"
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 cursor-pointer"
          />
        </div>

        {/* CTA Button Below Image */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 2k:mt-12 4k:mt-16" data-aos="fade-up" data-aos-delay="200">
          <Button
            text="Discover Our Company"
            href="#vision-values"
            variant="expandable"
          />
        </div>

      </div>
    </section>
  );
};

export default About;

