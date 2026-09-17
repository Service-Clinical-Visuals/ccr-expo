"use client";

import React from "react";
import Link from "next/link";
import { Users } from "lucide-react";

export default function InnovationAndTradition() {
  return (
    <section className="relative w-full overflow-hidden bg-white">


      <div className="custom-container relative z-10 py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-35 items-center">

          {/* Left Column: Text Content */}
          <div
            className="xl:col-span-6 flex flex-col gap-5"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#C382B4]"></div>
              <span className="font-inter text-[#C382B4] text-sm md:text-[18px] font-medium tracking-wide">
                Tasarimmed
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="section-title font-dm-sans font-bold text-[#1F2937] leading-tight">
              Tasarimmed Medical Devices Corp.
            </h2>

            {/* Intro Paragraphs */}
            <div className="flex flex-col gap-4 text-[#4B5563] font-inter section-text leading-relaxed font-normal">
              <p>
                TASARIMMED is a leading designer, manufacturer and medical device supplier company in TURKEY. TASARIMMED started <strong className="font-semibold text-[#4B5563]">first production in 1997</strong> and the production groups expand every day since then. Our success depends on the establisher of Tasarimmed who has over 40 years of experience in orthopeadic implant industry.
              </p>
              <p>
                Since its establishment, the Company's focus has been developing and marketing high value added and technologically advanced implants. Further, the Company gives a great emphasis on product quality, reliability and safety, as such the Company adheres to strict quality procedures and uses the highest quality raw materials .
              </p>
              <p>
                Tasarimmed Medical Devices; has got 65 distributors whole over the Turkey, exports high quality products to Europe, Middle East and North Africa.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#about"
                className="inline-flex items-center justify-center text-white px-8 py-3 rounded-[8px] font-inter text-sm font-semibold transition-colors shadow-md"
                style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Right Column: Facility Image & Overlay Card */}
          <div
            className="xl:col-span-6 w-full relative mt-16 xl:mt-0 flex justify-end"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="relative z-10 mt-8 xl:mt-0 ml-auto mr-4 sm:mr-8 xl:mr-12">
              {/* Top Right Purple Round */}
              <img
                src="/medical/tasarimmed/about2.png"
                alt=""
                className="absolute -top-[35%] -right-[15%] object-contain -z-10 opacity-60"
                aria-hidden="true"
              />

              {/* Bottom Left Purple Round */}
              <img
                src="/medical/tasarimmed/about2.png"
                alt=""
                className="absolute -bottom-[25%] -left-[12%] object-contain -z-10 opacity-70"
                aria-hidden="true"
              />

              {/* Main Image */}
              <img
                src="/medical/tasarimmed/about.png"
                alt="Tasarimmed Medical Devices Surgery"
                className="w-full h-auto object-cover  relative z-0 "
              />

              {/* Overlay Experience Card */}
              <div
                className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-10 text-white p-5 sm:px-8 sm:py-7 rounded-[8px] shadow-2xl flex items-center gap-5 sm:gap-6 z-20"
                style={{ background: "linear-gradient(145deg, #111833 0%, #293D87 100%)" }}
              >
                <Users className="w-10 h-10 sm:w-14 sm:h-14 text-white shrink-0" />
                <div className="w-[1px] h-12 sm:h-16 bg-white/30"></div>
                <div className="flex flex-col justify-center">
                  <span className="font-dm-sans font-bold text-3xl sm:text-[42px] tracking-tight leading-none mb-1 sm:mb-2">
                    40+
                  </span>
                  <span className="font-inter text-[12px] sm:text-[14px] text-gray-200 leading-snug">
                    years of experience in<br />orthopeadic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
