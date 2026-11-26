"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

/**
 * MissionVision Section ("Driving Innovation Towards A Better Future") - Airblend
 *
 * EXACT FIGMA MATCH:
 * 1. Section Header:
 *    - Left: Title "Driving Innovation Towards A Better Future" + description.
 *    - Right: CTA Button "Discover Our Mission".
 *    - Full-width divider line.
 * 2. 3-Card Center-Taller Balanced Layout:
 *    - Left Card: 570px height on desktop, sharp corners, #707070 background,
 *      border: 1px solid rgba(255,255,255,0.5), shadow, "Our Vision" with custom green target/eye icon.
 *    - Center Frame: 653px height on desktop (taller, extending 42px above and below side cards),
 *      sharp corners, drop-shadow, holding disc.webp.
 *    - Right Card: 570px height on desktop, sharp corners, #707070 background,
 *      border: 1px solid rgba(255,255,255,0.5), shadow, "Our Mission" with custom green bullseye target icon.
 * 3. Vertical Centering:
 *    - On desktop (>=1036px), the cards are vertically centered against the taller center image.
 */
const MissionVision = () => {
  return (
    <section id="mission-vision" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Section Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-black/20"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="secondary"
              className="text-2xl sm:text-3xl lg:text-[30px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] font-semibold text-[#2A2A2A]"
            >
              Driving Innovation Towards A Better Future
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#4A4A4A]"
            >
              At Airblend, we are driven by innovation, quality, and a commitment to improving lives through advanced technologies, global partnerships, and sustainable solutions for a healthier future.
            </Typography>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <Button
              text="Discover Our Mission"
              href="#mission-vision"
              variant="primary"
            />
          </div>
        </div>

        {/* 3-Column Content Layout (Vision 520px - Image 640px - Mission 520px on desktop) */}
        <div className="w-full mt-10 sm:mt-14">
          <div className="airblend-mission-grid">
            {/* 1. Left Card: Our Vision (sharp corners, reduced height, vertically centered content) */}
            <div
              className="airblend-mission-card bg-[#707070] text-white rounded-none p-6 sm:p-8 xl:px-10 border border-white/50 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-center gap-5 sm:gap-6"
              data-aos="fade-right"
            >
              <div className="space-y-4">
                {/* Header: Green Target/Eye Icon + Title */}
                <div className="flex items-center gap-4 2k:gap-6 4k:gap-8">
                  <svg
                    className="w-12 h-12 lg:w-14 lg:h-14 2k:w-20 2k:h-20 4k:w-28 4k:h-28 shrink-0 text-[#7BC142]"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="32" cy="32" r="28" strokeWidth="2.5" />
                    <circle cx="32" cy="32" r="19" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="32" cy="32" r="10" strokeWidth="2.5" />
                    <circle cx="32" cy="32" r="4" fill="currentColor" />
                    <line x1="32" y1="4" x2="32" y2="12" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="32" y1="52" x2="32" y2="60" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="4" y1="32" x2="12" y2="32" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="52" y1="32" x2="60" y2="32" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <Typography
                    variant="h3"
                    color="white"
                    className="text-2xl sm:text-[32px] 2k:text-[42px] 4k:text-[56px] font-semibold tracking-tight"
                  >
                    Our Vision
                  </Typography>
                </div>

                {/* Paragraph */}
                <p className="text-sm sm:text-base lg:text-[16px] leading-[1.6] text-white/95 font-normal">
                  Our vision is to build a healthier, cleaner, and sustainable world through advanced technology, responsible practices, and global collaboration. We aspire to strengthen our international presence while expanding our capabilities across healthcare, green technology, and sustainable industries. By embracing innovation, maintaining high quality standards, and building lasting partnerships, we aim to create a positive impact on people, communities, and the environment worldwide.
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="pt-1">
                <Button
                  text="Read More"
                  href="#about"
                  variant="primary"
                />
              </div>
            </div>

            {/* 2. Center Image: disc.webp (640px height on desktop, visibly taller than boxes) */}
            <div
              className="airblend-mission-image rounded-none overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
              data-aos="zoom-in"
            >
              <img
                src="/medical/airblend/disc.webp"
                alt="Airblend vision for future generations"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* 3. Right Card: Our Mission (sharp corners, reduced height, vertically centered content) */}
            <div
              className="airblend-mission-card bg-[#707070] text-white rounded-none p-6 sm:p-8 xl:px-10 border border-white/50 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-center gap-5 sm:gap-6"
              data-aos="fade-left"
            >
              <div className="space-y-4">
                {/* Header: Green Bullseye Target Icon + Title */}
                <div className="flex items-center gap-4 2k:gap-6 4k:gap-8">
                  <svg
                    className="w-12 h-12 lg:w-14 lg:h-14 2k:w-20 2k:h-20 4k:w-28 4k:h-28 shrink-0 text-[#7BC142]"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="32" cy="32" r="28" strokeWidth="2.5" />
                    <circle cx="32" cy="32" r="19" strokeWidth="2" />
                    <circle cx="32" cy="32" r="10" strokeWidth="2.5" />
                    <circle cx="32" cy="32" r="3.5" fill="currentColor" />
                    <line x1="32" y1="4" x2="32" y2="11" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="32" y1="53" x2="32" y2="60" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="4" y1="32" x2="11" y2="32" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="53" y1="32" x2="60" y2="32" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <Typography
                    variant="h3"
                    color="white"
                    className="text-2xl sm:text-[32px] 2k:text-[42px] 4k:text-[56px] font-semibold tracking-tight"
                  >
                    Our Mission
                  </Typography>
                </div>

                {/* Paragraph */}
                <p className="text-sm sm:text-base lg:text-[16px] leading-[1.6] text-white/95 font-normal">
                  At Airblend, our mission is to improve lives by developing innovative, reliable, and high-quality technological solutions. We focus on advancing healthcare, improving air and surface hygiene, supporting sustainable construction, and promoting renewable energy. Guided by Swiss quality and continuous innovation, we strive to address global challenges, enhance well-being, and create meaningful value for customers, partners, and communities through responsible and sustainable development.
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="pt-1">
                <Button
                  text="Read More"
                  href="#about"
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
