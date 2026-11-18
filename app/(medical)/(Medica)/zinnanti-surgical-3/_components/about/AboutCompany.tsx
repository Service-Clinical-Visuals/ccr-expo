"use client";

import React from "react";
import Typography from "../Typography";
import Button from "../Button";

/**
 * AboutCompany Section - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Image on left, technical narrative on right on desktop (>=1036px)
 * - Stacks cleanly on mobile and tablet
 */
const AboutCompany = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1036px]:flex-row items-center gap-10 xl:gap-16 w-full">
          
          {/* Left Column: Doctor Image */}
          <div
            className="w-full min-[1036px]:w-1/2 relative rounded-[24px] min-[3800px]:rounded-[48px] overflow-hidden shadow-lg border border-gray-100 group order-2 min-[1036px]:order-1"
            data-aos="fade-right"
          >
            <div className="w-full h-[380px] sm:h-[480px] lg:h-[540px] xl:h-[600px] min-[2500px]:h-[800px] min-[3800px]:h-[1100px] overflow-hidden">
              <img
                src="/medical/zinnanti-surgical-3/about/about.webp"
                alt="Where Surgical Expertise Meets Innovative Design"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div
            className="w-full min-[1036px]:w-1/2 flex flex-col gap-5 sm:gap-6 order-1 min-[1036px]:order-2"
            data-aos="fade-left"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 sm:w-8 h-1 bg-[#4F6744] rounded-full inline-block shrink-0" />
              <span className="heading-blue text-[#4F6744]">
                About Zinnanti Surgical
              </span>
            </div>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333] leading-snug"
            >
              Where Surgical Expertise Meets Innovative Design
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="dark"
              className="leading-relaxed text-[#333333] text-justify"
            >
              Zinnanti Surgical Design Group, Inc. combines experience in device development with medical training, practice and research. We create innovative surgical devices that improve safety, effectiveness, and efficiency. We specialize in developing devices with combined functions. This allows providers to have more control and efficiency with less equipment. Our patented design technology, &ldquo;Smoke-Evac Fusion&rdquo;, allows the operator to cut and coagulate with both smoke and fluid suction while using the active electrode for all types of surgery.
            </Typography>

            {/* Paragraph 2 */}
            <Typography
              variant="p"
              color="dark"
              className="leading-relaxed text-[#333333] text-justify"
            >
              At Zinnanti Surgical Design Group, we believe that meaningful innovation begins with understanding the challenges of modern surgical practice. Our focus is on delivering specialized smoke evacuation technology that enhances surgical workflows while supporting cleaner and more controlled clinical environments.
            </Typography>

            {/* Action Button */}
            <div className="pt-2">
              <Button text="Contact Us" variant="primary" href="#contact" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;

