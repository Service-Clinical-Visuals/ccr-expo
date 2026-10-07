"use client";

import React from "react";
import Button from "./Button";

export default function InnovationAndTradition() {
  return (
    <section
      id="about"
      className="custom-container py-12 sm:py-16 md:py-20 xl:py-24 px-4 sm:px-6 md:px-8 xl:px-25 bg-white"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">
        {/* Left Column: Overlapping Images */}
        <div
          className="xl:col-span-6 w-full relative flex items-center justify-center overflow-hidden"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img
            src="/medical/fentex/about.webp"
            alt="About FENTEXmedical"
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
          <div>
            <h4 className="text-[#006AB3] section-text font-bold font-inter mb-3 text-sm tracking-wide">
              About FENTEXmedical
            </h4>
            <h2 className="section-title font-bold tracking-tight font-poppins text-[#202020] leading-snug">
              Precision Engineering and Specialized Expertise <span className="text-[#006AB3]">Advancing Modern ENT Surgical Care</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-[#404040]">
            <p className="section-text leading-relaxed font-inter text-sm sm:text-base text-[#404040]">
              FENTEXmedical combines German engineering, specialized medical expertise, and close collaboration with healthcare professionals to develop reliable solutions for ENT and Head & Neck surgery. Its extensive portfolio of precision instruments, endoscopy systems, and surgical accessories is designed around clinical requirements, supporting surgeons with dependable technology, practical functionality, and consistent quality.
            </p>

            <p className="section-text leading-relaxed font-inter text-sm sm:text-base text-[#404040]">
              German Engineering: Precision-manufactured medical instruments developed with a strong focus on quality, durability, and surgical performance, offering comprehensive solutions specifically tailored to otology, rhinology, sinus surgery, laryngology, and Head & Neck procedures. Through close collaboration with medical professionals, clinical requirements are transformed into practical and innovative surgical solutions.
            </p>
          </div>

          <div className="pt-2">
            <Button href="#expertise" variant="outline" className="!w-auto !border-slate-900 !text-slate-900 hover:!bg-slate-100" showArrow={false}>
              Discover our Expertise
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
