"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

/**
 * About Section - Sunoptic Surgical
 * Matches Figma specifications:
 * - Left column: Eyebrow, Title, 4 history paragraphs, CTA button.
 * - Right column: 4 images in a staggered 2x2 grid (a1.png, a2.png, a3.png, a4.jpg).
 * - All images have explicit aspect ratio and object-cover.
 * - Breakpoints: Stacks vertically up to 1035px (tablet preserved), 2-column layout from 1036px onwards.
 */
const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1036px]:flex-row sunoptic-split-row items-center gap-10 xl:gap-14 w-full">

          {/* Left Column: Text & Story (Active full width on mobile/tablet up to 1035px, 50% from 1036px) */}
          <div className="w-full min-[1036px]:w-1/2 sunoptic-col-50 flex flex-col gap-5 sm:gap-6" data-aos="fade-right">
            <Typography
              variant="eyebrow"
              className="!text-[#409BBD] font-semibold text-sm sm:text-base tracking-wider"
            >
              ADVANCED SURGICAL ILLUMINATION
            </Typography>

            <Typography
              variant="h2"
              color="secondary"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Palanquin',sans-serif] text-[#0A192F] leading-tight"
            >
              Clarity That Empowers Every Surgical Moment
            </Typography>

            <div className="flex flex-col gap-4 text-[#111111] font-['DM_Sans',sans-serif] text-sm sm:text-base leading-relaxed">
              <p>
                Sunoptic Technologies® was originally established in 1978 when Joseph Cuda opened CUDA Products®, LLC, a manufacturing company using fiberoptic technology to produce novelty items and some medical products.
              </p>
              <p>
                Over the years, the company transitioned to exclusively manufacturing products for the medical industry. After much success, Cuda Products was acquired by C. Black in 1999.
              </p>
              <p>
                Under new ownership, significant investments were made in the professional management staff, manufacturing processes and engineering development teams, leading to the company receiving the prestigious ISO 9001 and ISO 13485 certifications.
              </p>
              <p>
                By 2001, a clear vision of the company’s future was defined, and it received an official name change to Sunoptic Technologies® to better reflect our focus on the technological development of premium headlight systems.
              </p>
            </div>

            <div className="pt-2">
              <Button
                text="Schedule Your Free Trial"
                variant="primary"
                href="#contact"
                className="px-6 py-3"
              />
            </div>
          </div>

          {/* Right Column: About Image (No rounded corners, no hover zoom) */}
          <div className="w-full min-[1036px]:w-1/2 sunoptic-col-50 flex items-center justify-center" data-aos="fade-left">
            <div className="w-full aspect-[820/647] overflow-hidden shadow-lg border border-gray-100">
              <img
                src="/medical/sunoptic-surgical/about.webp"
                alt="Sunoptic Technologies History and Facilities"
                className="w-full h-full aspect-[820/647] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
