"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10 md:gap-14">
        <div
          className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-center justify-between gap-6 sm:gap-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 sm:gap-4 w-full flex-1">
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
              <Typography
                variant="h2"
                color="dark"
                className="!font-semibold capitalize leading-snug"
              >
                From A 2-Man Company To A Global Player
              </Typography>
              <span className="inline-block w-10 sm:w-11 h-1 sm:h-1.5 bg-[#003F77] shrink-0" />
            </div>

            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4A4A4A] w-full"
            >
              For Over 30 Years, Our Family-Owned Company Has Been At The Forefront Of Developing Surgical Instruments And Implants That Are Essential To Every Surgery. Innovative, High-Quality Solutions For Precise And Safe Surgical Care.
            </Typography>
          </div>

          <div className="shrink-0 flex items-center">
            <Button
              text="Learn More"
              variant="primary"
              href="#about"
              className="rounded-none shadow-[0px_3px_8px_rgba(0,0,0,0.24)] !px-6 !py-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
          {/* Image 1: Workshop */}
          <div
            className="group relative w-full aspect-[820/524] overflow-hidden border border-black/25 shadow-sm rounded-none bg-gray-50"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/medical/rebstock/about1.webp"
              alt="Rebstock Workshop Engineering"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Image 2: Sebastian Rebstock */}
          <div
            className="group relative w-full aspect-[820/524] overflow-hidden border border-black/25 shadow-sm rounded-none bg-gray-50"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/medical/rebstock/about2.webp"
              alt="Sebastian Rebstock Leadership"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
