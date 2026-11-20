/**
 * About Section - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Two-Column Asymmetrical Responsive Layout:
 *    - Left: Featured team photograph with overlapping circular "+9 Years" script badge.
 *    - Right: Section tag, primary heading, lead text, bulleted value proposition, and CTA button.
 * 2. Responsive Stacking:
 *    - Flex-col on mobile/tablet, flex-row on desktop (>=1024px) with balanced column proportions.
 * 3. Exact Design Tokens from Figma:
 *    - Tag: `_ Who We Are` in #0624BF
 *    - Badge: Circular with #0624BF, 3px solid white border, and 'Kaushan Script' typography.
 *    - Button: "Discover Our Story" with border #202020 and hover styling.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const aboutBullets = [
  "Developing advanced orthopedic implants designed to support precise and controlled bone lengthening procedures.",
  "Combining innovative engineering with digital solutions to enhance treatment monitoring and patient experiences.",
  "Empowering healthcare professionals with reliable technologies that support mobility, recovery, and better outcomes.",
];

const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 min-[1300px]:gap-14 xl:gap-16 2xl:gap-20 min-[2500px]:gap-28 min-[3800px]:gap-36">

          {/* Left Column: Image with Overlapping +9 Years Badge */}
          <div
            className="w-full min-[1300px]:w-[48%] flex justify-center min-[1300px]:justify-start order-2 min-[1300px]:order-1"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-[620px] min-[1300px]:max-w-none">
              {/* Image Frame */}
              <div className="w-full aspect-[4/3] sm:aspect-[739/573] rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] overflow-hidden shadow-lg border border-gray-200/80">
                <img
                  src="/medical/orthoget/about.webp"
                  alt="OrthoGet Team"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              {/* Overlapping Badge: +9 Years (Right Middle / Vertical Center) */}
              <div
                className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3 sm:translate-x-1/2 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] min-[1300px]:w-[150px] min-[1300px]:h-[150px] 2k:w-[220px] 2k:h-[220px] 4k:w-[320px] 4k:h-[320px] rounded-full bg-[#0624BF] border-[3px] sm:border-[4px] 2k:border-[6px] 4k:border-[8px] border-white shadow-xl flex items-center justify-center text-center p-2 z-10"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <span className="script-badge text-white font-normal leading-tight text-center">
                  +9<br />Years
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Content */}
          <div
            className="w-full min-[1300px]:w-[52%] flex flex-col gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12 mt-6 min-[1300px]:mt-0 order-1 min-[1300px]:order-2"
            data-aos="fade-left"
          >
            <Typography variant="tag" color="primary">
              _ Who We Are
            </Typography>

            <Typography
              variant="h2"
              color="secondary"
              className="leading-snug text-[#202020] xl:max-w-[90%]"
            >
              Advancing Orthopedic Innovation for Better Mobility & Outcomes
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="font-dmsans leading-relaxed text-[#404040] xl:max-w-[90%]"
            >
              OrthoGet combines advanced engineering, medical expertise, and digital technology to develop innovative orthopedic solutions that support bone lengthening, enhance treatment precision, and improve patient care. By integrating cutting-edge technology with clinical knowledge, OrthoGet aims to deliver reliable, patient-focused solutions that empower orthopedic professionals and improve outcomes throughout the treatment journey.
            </Typography>

            {/* Bullets */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8 pt-1">
              {aboutBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 2k:w-4 2k:h-4 4k:w-6 4k:h-6 rounded-full bg-[#0624BF] shrink-0 mt-2 2k:mt-3 4k:mt-4 shadow-sm" />
                  <p className="font-dmsans leading-relaxed text-[#404040]">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-3 2k:pt-6 4k:pt-10">
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-6 py-2.5 2k:px-10 2k:py-4 4k:px-14 4k:py-6 rounded-[10px] 2k:rounded-[16px] 4k:rounded-[22px] border border-[#202020] text-[#202020] hover:bg-[#202020] hover:text-white button transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Discover Our Story</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

