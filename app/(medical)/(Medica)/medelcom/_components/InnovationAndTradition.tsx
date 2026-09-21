"use client";

import React from "react";
import Button from "./Button";

export default function InnovationAndTradition() {
  return (
    <section
      id="about"
      className="custom-container py-12 sm:py-16 md:py-20 xl:py-28 px-4 sm:px-6 md:px-8 xl:px-12 bg-white"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">
        {/* Left Column: Overlapping Images */}
        <div
          className="xl:col-span-6 w-full relative flex items-center justify-center rounded-[5px] overflow-hidden"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img
            src="/medical/medelcom/about.png"
            alt="Medelkom Diagnostics"
            className="w-full h-auto xl:h-full object-cover"
          />
        </div>

        {/* Right Column: Text Content */}
        <div
          className="xl:col-span-6 flex flex-col gap-6"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="border-l-5 border-[#0287DC] pl-4 rounded-[5px]">
            <h4 className="text-[#0287DC] section-text font-bold font-inter mb-2 text-sm tracking-wide">
              Medelkom
            </h4>
            <h2 className="section-title font-bold tracking-tight font-dmsans text-[#333333] leading-snug">
              About Our Company
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-[#404040]">
            <p className="section-text leading-relaxed font-inter section-text text-[#4B5563]">
              "MEDELKOM" company was established by a group of professionals with many years of experience in the development of ultrasound medical diagnostic equipment on 16 November 1990.<br />
              In 1991 "MEDELKOM" company created its first product – portable ultrasound device SLE-101 enabling linear electronic scanning. Excellent technical properties and low price got on with their job and ensured extreme popularity of the device continuing until 1995.
            </p>

            <p className="section-text leading-relaxed font-inter text-sm sm:text-base text-slate-600">
              In 1992 the company launched production of ultrasonic scanners, and in 1993 started to produce ultrasonic transducers. In 2013 "Medelkom" changed its name into UAB "Medelkom international", preserved its trademark and continues development of previously mentioned spheres till now.
            </p>

            <p className="section-text leading-relaxed font-inter text-sm sm:text-base text-slate-600">
              Medelkom combines advanced medical technologies with OEM development and in-house R&D capabilities to create innovative solutions tailored to diverse industry needs. Its expertise spans ultrasound diagnostics, digital video colposcopy, and specialized technologies for applications across medicine, space, radiation, and the oil industry.
            </p>
          </div>

          <div className="pt-2">
            <Button href="#company" variant="primary" className="!w-auto !rounded-md">
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
