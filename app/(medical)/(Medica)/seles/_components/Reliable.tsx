"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Reliable() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="reliable" className="w-full relative z-10 py-14 sm:py-20 md:py-24 min-[2000px]:py-32 min-[3000px]:py-40 bg-[#101010]">
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 mb-10">

          {/* Left: Heading & Description */}
          <div
            className="flex-1 w-full xl:max-w-[70%]"
            data-aos="fade-right"
          >
            <h2 className="mb-4 min-[2000px]:mb-8 min-[3000px]:mb-10 text-white text-[20px] sm:text-[28px] md:text-[32px] min-[2000px]:text-[44px] min-[3000px]:text-[56px] font-orbitron font-semibold leading-[1.3] capitalize">
              Titanium Construction & Clinical Performance
            </h2>

            <p className="text-[16px] sm:text-[18px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] leading-[160%] text-[#D1D1D1] w-full">
              Manufactured from titanium, the Proximal Femur Nail - Long combines strength, durability, and lightweight construction for effective fixation. Its long design provides extended femoral fixation, supporting accurate placement and reliable performance.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div
            className="flex-shrink-0 pt-1 lg:pt-3"
            data-aos="fade-left"
          >
            <Button
              text="View Specifications &rarr;"
              bgColor="#DBA018"
              textColor="#ffffff"
              onClick={scrollToContact}
              className="px-6 min-[2000px]:px-8 min-[3000px]:px-10 py-2.5 min-[2000px]:py-4 min-[3000px]:py-5 !text-[16px] min-[2000px]:!text-[22px] min-[3000px]:!text-[28px] font-semibold"
            />
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-10 min-[2000px]:mb-16 min-[3000px]:mb-20" />

        {/* Huge Video Container */}
        <div
          className="w-full max-w-[80%] min-[2000px]:max-w-[75%] min-[3000px]:max-w-[70%] mx-auto bg-white/5 rounded-[20px] sm:rounded-[30px] overflow-hidden flex items-center justify-center relative aspect-video shadow-[0px_10px_30px_rgba(0,0,0,0.5)]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}