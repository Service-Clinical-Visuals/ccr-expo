"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full bg-[#0C6A81] py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-8 items-center mb-10">

          {/* Left Column: Information Box */}
          <div
            className="xl:col-span-6 flex flex-col justify-center order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[30px] h-[5px] bg-white rounded-full shadow-[0px_5px_15px_0px_#D9D9D9]"></div>
              <span className="font-dmsans font-semibold text-white section-text tracking-widest uppercase">
                360° Section
              </span>
            </div>

            <div className="mb-6">
              <h2 className="section-title font-semibold tracking-tight font-dmsans text-white text-2xl sm:text-3xl">
                3D Anatomical Solutions for Hernia Repair
              </h2>
            </div>

            <p className="text-[#FFFFFF] leading-relaxed font-inter font-regular section-text mb-8">
              Discover the 3D ANATOMIC Implants, specifically designed to provide effective and reliable tissue reinforcement during the treatment of inguinal hernias. Manufactured from monofilament polypropylene with a density of 90 g/m², these implants are developed to meet the requirements of modern laparoscopic hernia repair procedures. Their anatomical design supports precise surgical placement and is specifically adapted for use in both TEP (Totally Extraperitoneal) and TAP (Transabdominal Preperitoneal) laparoscopic approaches. Available in anatomical configurations, the 3D ANATOMIC Implants provide a practical solution for surgeons seeking consistent placement and effective reinforcement during inguinal hernia repair.
            </p>

            <div className="flex">
              <Button href="#explore" showArrow={true}>
                Explore More
              </Button>
            </div>
          </div>

          {/* Right Column: 360 Video Player Box */}
          <div
            className="xl:col-span-6 relative w-full overflow-hidden flex items-center justify-center bg-white rounded-md shadow-lg aspect-video order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
              />
            </div>
          </div>

        </div>

        {/* Bottom Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div
            className="bg-white rounded-[10px] p-6 flex items-start gap-5 shadow-lg"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <div className="w-[101px] h-[101px] rounded-full bg-[#65B5A0] flex items-center justify-center flex-shrink-0">
              <img src="/medical/microval/icon2.png" alt="Anatomical Configuration" className="w-auto h-auto object-contain" />
            </div>
            <div>
              <h3 className="font-dmsans font-semibold text-[#111111] card-title mb-2">Anatomical Configuration</h3>
              <p className="font-inter font-regular section-text text-[#4B5563] leading-relaxed">
                Available in right and left configurations, designed to support accurate positioning during inguinal hernia repair.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white rounded-xl p-6 flex items-start gap-5 shadow-lg"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
          >
            <div className="w-[101px] h-[101px] rounded-full bg-[#65B5A0] flex items-center justify-center flex-shrink-0">
              <img src="/medical/microval/icon3.png" alt="Available Dimensions" className="w-auto h-auto object-contain" />
            </div>
            <div>
              <h3 className="font-dmsans font-semibold text-[#111111] card-title mb-2">Available Dimensions</h3>
              <p className="font-inter font-regular section-text text-[#4B5563] leading-relaxed">
                Offered in 14 x 10 cm and 16 x 11 cm sizes to accommodate various surgical needs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
