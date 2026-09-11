"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

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
    <section
      id="reliable"
      className="w-full relative py-14 sm:py-20 md:py-24 bg-[#468A28] text-white overflow-hidden"
      style={{
        backgroundImage: "url('/medical/geotek/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Brand Green Tint Overlay */}
      <div className="absolute inset-0 bg-[#468A28]/85 pointer-events-none" />

      <div className="custom-container mx-auto relative z-10">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8">
          {/* Left: Heading with white accent pill & Description */}
          <div
            className="flex-1 w-full xl:max-w-[70%]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap">
              <h2 className="font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] leading-[150%] text-white capitalize">
                Reliable Double J Ureteral Stent Solutions
              </h2>
              <span className="w-[33px] h-[5px] bg-white rounded-[43px] inline-block shrink-0" />
            </div>

            <p className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-white w-full">
              The Double J Ureteral Stent Set supports temporary internal drainage from the
              ureteropelvic junction to the bladder. Made from soft polyurethane with radiopaque
              materials, it offers flexibility, visibility, and reliable positioning in various
              configurations.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div
            className="flex-shrink-0 pt-1 lg:pt-3"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <Button
              text="View Product"
              variant="white"
              onClick={scrollToContact}
              className="h-[43px] px-6 py-2.5 text-[17px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="w-full h-px bg-white/25 my-8 sm:my-10 md:my-12"
          data-aos="fade-in"
          data-aos-duration="800"
        />

        {/* Video Player Box (Video Clip 02) */}
        <div
          className="
            relative w-full max-w-[1394px] mx-auto
            aspect-video
            rounded-[28px] sm:rounded-[40px] md:rounded-[50px]
            overflow-hidden shadow-[0px_6px_24px_rgba(0,0,0,0.25)]
            bg-white/10
          "
          data-aos="zoom-in"
          data-aos-duration="1000"
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