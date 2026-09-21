"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutTelemed() {
  return (
    <section
      id="about"
      className="w-full bg-white pt-12 sm:pt-16 xl:pt-20 pb-16 sm:pb-20 xl:pb-24 overflow-hidden"
    >
      <div className="custom-container">
        {/* Header & Intro */}
        <div
          className="flex flex-col min-[1025px]:flex-row min-[1025px]:items-end justify-between gap-6 min-[1025px]:gap-12 min-[3800px]:gap-20 mb-8 sm:mb-10 xl:mb-12 min-[3800px]:mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left Text Block */}
          <div className="flex-1 xl:max-w-[70%] min-[3800px]:max-w-[75%]">
            <Typography
              variant="h2"
              weight="semibold"
              color="dark"
              className="font-['Exo_2'] tracking-tight"
            >
              About <span className="text-[#0F3E7B]">TELEMED</span>
            </Typography>

            <Typography
              variant="p"
              color="body"
              className="mt-3.5 sm:mt-4 min-[3800px]:mt-8 leading-relaxed"
            >
              Welcome To Telemed, A Pioneer In Medical Imaging Technology.
              Established In 1992 By Three Visionary Young Engineers, Our
              Company Embarked On A Journey To Revolutionize Diagnostic
              Ultrasound. The Company Was Founded When The Term
              &ldquo;Telemedicine&rdquo; Had Not Yet Become A Household Word.
            </Typography>
          </div>

          {/* Right Learn More Button */}
          <div className="shrink-0 pt-1 min-[1025px]:pt-0">
            <Button
              variant="primary"
              href="#about"
              showArrow
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Vintage Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 xl:gap-8 min-[3800px]:gap-16 w-full">
          {/* Image 1: 1992 Ultrasound Machine */}
          <div
            className="relative aspect-[491/328] w-full overflow-hidden border border-black/15 shadow-[0px_3px_10px_rgba(0,0,0,0.12)] bg-[#f8f9fa] group"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <img
              src="/medical/telemed/a1.jpg"
              alt="Telemed 1992 Pioneering Ultrasound System and Probe"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Image 2: Proprietary Ultrasound Circuit Board Microchips */}
          <div
            className="relative aspect-[491/328] w-full overflow-hidden border border-black/15 shadow-[0px_3px_10px_rgba(0,0,0,0.12)] bg-[#f8f9fa] group"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <img
              src="/medical/telemed/a2.jpg"
              alt="Telemed Diagnostic Microcircuitry and Hardware Architecture"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
