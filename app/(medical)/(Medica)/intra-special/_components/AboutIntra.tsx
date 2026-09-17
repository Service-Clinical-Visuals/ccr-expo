"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutIntra() {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 sm:py-20 xl:py-24 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center text-center">
        {/* Section Header */}
        <div
          className="flex flex-col items-center gap-3 xl:max-w-[70%] max-w-[90%] mx-auto text-center"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            weight="semibold"
            className="uppercase tracking-[0.04em]"
          >
            ABOUT INTRA
          </Typography>

          <Typography variant="h2" color="dark">
            Decades of Expertise in Precision Catheter Solutions
          </Typography>
        </div>

        {/* Facility Image: Spans full width of custom-container */}
        <div
          className="w-full mt-8 sm:mt-10 rounded-[10px] overflow-hidden shadow-sm border border-gray-100 bg-[#E5E7EB]"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <img
            src="/medical/intra-special/about.png"
            alt="INTRA special catheters facility"
            className="w-full h-auto max-h-[543px] min-[2500px]:max-h-[720px] min-[3800px]:max-h-[950px] object-cover"
          />
        </div>

        {/* Mission Paragraph */}
        <Typography
          variant="p"
          color="muted"
          className="mt-8 sm:mt-10 w-full xl:max-w-[70%] max-w-[90%] mx-auto text-center leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Since 1977, INTRA has been developing and manufacturing specialized catheter systems designed for demanding medical applications. Combining decades of medical-device expertise with German engineering, advanced manufacturing, and rigorous quality standards, we deliver reliable solutions across vascular surgery, cardiology, intensive care, electrophysiology, and thoracic drainage. Through continuous innovation and close collaboration with healthcare professionals, we remain committed to creating precise, safe, and dependable products that support modern clinical practice and the evolving needs of healthcare professionals worldwide.
        </Typography>

        {/* CTA Button */}
        <div
          className="mt-8 sm:mt-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Button variant="outline-red" href="#company">
            Discover Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
