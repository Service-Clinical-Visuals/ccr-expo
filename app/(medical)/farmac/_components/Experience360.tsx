"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Experience360() {
  return (
    <section id="experience-360" className="w-full bg-[#24559c] py-14 sm:py-18 md:py-24 text-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left Column: 360 Video Player Card */}
          <div
            className="xl:col-span-7 order-2 xl:order-1"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div className="relative w-full aspect-video rounded-md overflow-hidden bg-white/10 flex items-center justify-center ">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Information, Features & CTA */}
          <div
            className="xl:col-span-5 order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-2">
              <span className="section-text font-bold text-[#ffffff] tracking-normal font-inter">
                &mdash; 360&deg; Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title font-medium font-poppins text-white tracking-tight mb-5">
              Electromedical equipment
            </h2>

            {/* Subtext */}
            <p className="section-text text-white font-inter font-normal leading-relaxed mb-6">
              Farmac Zabban&apos;s experience has allowed the creation of a highly technological line of electromedical devices that fully satisfy user needs.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-3.5 sm:gap-4 mb-6">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/medical/farmac/i1.png"
                    alt="CE and EN Certified"
                    className="w-full h-full object-contain select-none"
                  />
                </div>
                <p className="section-text text-slate-700 font-inter font-normal leading-snug">
                  The products are highly effective and safe, tested and certified according to the relevant CE and EN standards
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/medical/farmac/i2.png"
                    alt="Medical Equipment"
                    className="w-full h-full object-contain select-none"
                  />
                </div>
                <p className="section-text text-slate-700 font-inter font-normal leading-snug">
                  The products are highly effective and safe, tested and certified according to the relevant CE and EN standards
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button href="#view-360">View In 360&deg;</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
