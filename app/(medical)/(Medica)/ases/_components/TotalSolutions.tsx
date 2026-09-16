"use client";

import React from "react";
import Link from "next/link";

export default function TotalSolutions() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-white overflow-hidden flex items-center">
      <div className="custom-container flex flex-col lg:flex-row items-center justify-between">

        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start px-4 md:px-0" data-aos="fade-up">
          <div className="w-full max-w-[700px] min-[1920px]:max-w-[90%] flex flex-col items-start lg:pr-10">
            <div className="flex flex-col w-fit">
              <span className="text-[#BA0A28] font-[Inter] font-semibold text-[16px] md:text-[18px] uppercase tracking-wide">
                Ases Medikal
              </span>
              <h2 className="text-[#222222] font-[Manrope] text-[24px] md:text-[28px] font-bold leading-[1.2] mt-0.5">
                20 Years of Orthopedic Innovation.
              </h2>
              <div className="w-[200px] h-[2px] bg-[#BA0A28] mt-2.5 mb-5" />
            </div>

            <div className="w-full">
              <p className="text-[#555555] font-[Inter] text-[15px] md:text-[17px] leading-[1.8]">
                <strong className="font-bold text-[#333333]">ASES MEDİKAL transferred its 20 years of experience</strong> in the sector to production
                in 2020 and started production with a modern factory in Gaziantep Sehitkamil. By
                using its market experience and knowledge in the field of production, it has created
                the machine park and quality system by planning the production infrastructure for
                new designs according to the future.
              </p>

              <p className="text-[#555555] font-[Inter] text-[15px] md:text-[17px] leading-[1.8] mt-4">
                With a strategic and systematic management approach and an understanding that
                patient satisfaction is an indispensable value, ASES MEDİKAL produces <strong className="font-semibold text-[#333333]">Lower and
                  Upper Extremity Plates, Bone Screws, Intramedullary Nails, Fixator Systems, and
                  Skeletal Pins and Wires.</strong>
              </p>

              <Link
                href="#contact"
                className="mt-6 inline-block bg-[#BA0A28] text-white px-6 py-2 rounded-[4px] font-[Inter] font-semibold text-[17px] hover:bg-[#900820] transition-colors shadow-sm"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-left" data-aos-delay="200">
          <div className="flex justify-center lg:justify-end lg:mr-[calc(100%-50vw)]">
            <img
              src="/medical/ases/about.png"
              alt="Ases Medikal Facility"
              className="w-full lg:w-auto lg:max-w-full h-auto object-cover object-right rounded-md lg:rounded-l-md lg:rounded-r-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
