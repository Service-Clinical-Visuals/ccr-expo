"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const SmokeSafety = () => {
  return (
    <section
      id="smoke-safety"
      className="w-full bg-[var(--color-quote-bg)] pt-16 xl:pt-24 min-[2500px]:pt-36 min-[3800px]:pt-48 overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col-reverse xl:flex-row items-stretch xl:items-center">
          {/* Left: Blue Card (overlaps the image, taller than it) */}
          <div
            className="w-full xl:w-[42%] relative z-10 -mt-10 xl:mt-0 xl:-mr-[4%] xl:self-stretch xl:-my-6 bg-[var(--color-navy)] text-white rounded-2xl xl:rounded-none xl:rounded-tl-[2rem] xl:rounded-tr-[2rem] xl:rounded-bl-md xl:rounded-br-md min-[2500px]:lg:rounded-tl-[3rem] min-[2500px]:lg:rounded-tr-[3rem] shadow-xl p-6 sm:p-8 xl:p-12 min-[2500px]:p-16 min-[3800px]:p-24 flex flex-col items-start justify-center gap-4 sm:gap-5 min-[2500px]:gap-8"
            data-aos="fade-right"
          >
            <Eyebrow text="Surgical Smoke Safety" tone="light" />

            <Typography variant="h2" color="white" className="leading-tight">
              A Cleaner Surgical Environment. A Healthier Tomorrow.
            </Typography>

            <Typography variant="p" color="white" className="text-white/90 leading-relaxed font-normal">
              Zinnanti Surgical develops smoke and fluid evacuation solutions that
              capture surgical smoke at the source, improve visibility, and support a
              cleaner, safer operating environment.
            </Typography>

            <div className="pt-2 sm:pt-3">
              <Button text="Read More" variant="outline" />
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="w-full xl:w-[62%] relative z-0 rounded-2xl xl:rounded-none xl:rounded-r-[2rem] min-[2500px]:lg:rounded-r-[3rem] overflow-hidden shadow-md"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src="/medical/zinnanti-surgical-2/s1.webp"
              alt="Surgical instruments arranged in a clean operating room"
              className="w-full h-full object-cover aspect-[4/3] xl:aspect-[16/10]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmokeSafety;
