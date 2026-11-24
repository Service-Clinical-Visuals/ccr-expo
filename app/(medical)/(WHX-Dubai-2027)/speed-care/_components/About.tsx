/**
 * About Section (Who We Are & Our Mission)
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Scales decorative geometric shapes, badge eyebrow, and typography across viewports up to 4K.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Badge from "./Badge";

export default function About() {
  return (
    <section id="about" className="w-full py-16 xl:py-24 2k:py-36 4k:py-48 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* Mobile & Tablet Header (<1300px): Heading appears before Image */}
        <div className="flex flex-col space-y-4 mb-8 sm:mb-10 min-[1300px]:hidden w-full" data-aos="fade-up">
          <div>
            <Badge text="WHO WE ARE" />
          </div>
          <Typography
            variant="h2"
            color="gray"
            className="text-xl sm:text-2xl font-bold leading-snug w-full"
          >
            Driving Innovation in Hemostatic Medical Technology
          </Typography>
        </div>

        <div className="flex flex-col min-[1300px]:flex-row items-center gap-12 lg:gap-14 xl:gap-20 2k:gap-28 4k:gap-36">
          
          {/* Left Column: Team Photo with decorative red shapes */}
          <div
            className="w-full min-[1300px]:w-1/2 flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full max-w-[560px] min-[1036px]:max-w-[620px] xl:max-w-[700px] 2k:max-w-[1000px] 4k:max-w-[1400px]">
              
              {/* Top-Right Decorative Red Solid Accent */}
              <div
                className="absolute -top-3.5 sm:-top-5 2k:-top-8 4k:-top-12 -right-3.5 sm:-right-5 2k:-right-8 4k:-right-12 w-32 sm:w-44 md:w-56 2k:w-80 4k:w-[28rem] h-20 sm:h-28 md:h-32 2k:h-44 4k:h-64 bg-[#E62730] rounded-[10px] 2k:rounded-2xl 4k:rounded-3xl -z-10"
                aria-hidden="true"
              />

              {/* Bottom-Left Decorative Red Border Frame */}
              <div
                className="absolute -bottom-3.5 sm:-bottom-5 2k:-bottom-8 4k:-bottom-12 -left-3.5 sm:-left-5 2k:-left-8 4k:-left-12 w-32 sm:w-44 md:w-56 2k:w-80 4k:w-[28rem] h-20 sm:h-28 md:h-32 2k:h-44 4k:h-64 border-[4px] sm:border-[5px] 2k:border-[8px] 4k:border-[12px] border-[#E62730] rounded-[10px] 2k:rounded-2xl 4k:rounded-3xl -z-10"
                aria-hidden="true"
              />

              {/* Main Team Image Container */}
              <div className="relative rounded-[11px] 2k:rounded-2xl 4k:rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100 group">
                <img
                  src="/medical/speed-care/about.webp"
                  alt="Speed Care Mineral Team"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Information, Mission & Action Button */}
          <div
            className="w-full min-[1300px]:w-1/2 flex flex-col space-y-5 sm:space-y-6 2k:space-y-9 4k:space-y-12"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {/* Desktop Header (>=1300px) */}
            <div className="hidden min-[1300px]:flex flex-col space-y-5 2k:space-y-7">
              <div>
                <Badge text="WHO WE ARE" />
              </div>

              <Typography
                variant="h2"
                color="gray"
                className="text-xl sm:text-2xl lg:text-[1.6875rem] 2k:text-4xl 4k:text-6xl font-bold leading-snug w-full max-w-full xl:max-w-[70%]"
              >
                Driving Innovation in Hemostatic Medical Technology
              </Typography>
            </div>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563]"
            >
              Speed Care Mineral GmbH is a high-tech company specializing in the development, manufacturing, and distribution of medical devices for hemostasis. Founded in 2017 and funded by the European Regional Development Fund (ERDF), the company prides itself on its commitment to quality, precision, and process control. Our core competence lies in the processing and refining of minerals, which we use to develop advanced medical technologies for the treatment of acute bleeding.
            </Typography>

            {/* Sub-heading: Our Mission (70% concept on subheadings) */}
            <div className="pt-2 2k:pt-4 4k:pt-6">
              <Typography
                variant="h3"
                color="gray"
                className="text-lg sm:text-xl lg:text-[1.4375rem] 2k:text-3xl 4k:text-5xl font-bold mb-2 2k:mb-4 text-[#333333] w-full max-w-full xl:max-w-[70%]"
              >
                Our Mission :
              </Typography>
              <Typography
                variant="p"
                color="muted"
                className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563]"
              >
                Our mission is to save lives by developing effective medical solutions for acute hemorrhage control. By combining expertise in mineral processing with cutting-edge medical technology, we develop reliable hemostatic products to reduce preventable deaths in military and civilian emergencies. We invite you to partner with us and make a difference together.
              </Typography>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2 sm:pt-4 2k:pt-6 4k:pt-8">
              <Button
                text="Know About Us"
                variant="primary"
                href="#about"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
