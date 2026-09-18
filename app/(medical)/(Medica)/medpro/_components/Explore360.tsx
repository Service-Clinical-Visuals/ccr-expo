"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Centered Heading and Description */}
        <div
          className="text-center max-w-7xl mx-auto mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h4 className="text-[#3BB3C3] section-text font-semibold font-fraunces mb-3 tracking-wide">
            Double J Stent — Both End Multi Loop
          </h4>
          <h2 className="section-title font-semibold tracking-tight font-fraunces text-[#202020]">
            Designed to Maintain Ureteral Patency During Essential Urological Procedures
          </h2>
        </div>

        {/* 360 Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left Column: 360 Video Player Box */}
          <div
            className="lg:col-span-7 relative w-full overflow-hidden aspect-video bg-slate-100 rounded-lg shadow-sm flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
              <DynamicVideoPlayer
                type="360"
                className="absolute aspect-video inset-0 w-full h-full object-cover object-center"
              />
            </div>


          </div>

          {/* Right Column: Information Box */}
          <div
            className="lg:col-span-5 bg-[#F9F9F9] rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <p className="section-text text-[#202020] leading-relaxed font-inter mb-8">
              The MEDpro Double J Stent – Both End Multi Loop is a ureteral stent designed to help maintain ureteral patency and facilitate temporary urinary drainage from the kidney to the urinary bladder. It can be used when ureteral drainage is compromised, including situations associated with kidney stones or ureteral obstruction.
            </p>

            <ul className="flex flex-col gap-5 mb-10">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#3BB3C3] mt-1 flex-shrink-0" />
                <span className="section-text text-[#202020] font-inter">
                  Both-end multi-loop design supports secure positioning within the ureter during urological procedures.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#3BB3C3] mt-1 flex-shrink-0" />
                <span className="section-text text-[#202020] font-inter">
                  Available in multiple sizes and lengths to accommodate different procedural requirements and applications.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#3BB3C3] mt-1 flex-shrink-0" />
                <span className="section-text text-[#202020] font-inter">
                  Optional guide wire, clamp, and suture configurations provide greater procedural flexibility when required.
                </span>
              </li>
            </ul>

            <div>
              <Button href="#product-details" variant="outline" className="!w-auto" showArrow={false}>
                View Product Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
