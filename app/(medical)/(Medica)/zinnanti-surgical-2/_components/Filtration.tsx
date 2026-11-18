"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Filtration = () => {
  return (
    <section
      id="filtration"
      className="relative w-full bg-[var(--color-navy)] xl:bg-[var(--color-quote-bg)] xl:py-10 min-[2500px]:py-16 min-[3800px]:py-24 overflow-hidden"
    >
      {/* Navy band — on desktop the image rises above its top edge */}
      <div className="w-full bg-[var(--color-navy)] xl:mt-12 min-[2500px]:mt-20 min-[3800px]:mt-28">
        <div className="custom-container pt-12 xl:pt-0 pb-14 xl:pb-10 min-[2500px]:pb-16 min-[3800px]:pb-24">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14 min-[2500px]:gap-20 items-start">
            {/* Video — overlaps the band's top edge on desktop */}
            <div
              className="order-2 xl:order-none xl:col-span-7 xl:-mt-12 min-[2500px]:-mt-20 min-[3800px]:-mt-28 w-full max-w-[1117px] mx-auto aspect-[1117/633] relative overflow-hidden bg-black rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md min-[2500px]:rounded-tl-[3rem] min-[2500px]:rounded-br-[3rem] shadow-xl"
              data-aos="fade-right"
            >
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Text — vertically centred in the band */}
            <div
              className="order-1 xl:order-none xl:col-span-5 self-center flex flex-col items-start gap-4 sm:gap-5 min-[2500px]:gap-8"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <Eyebrow text="Filter Technology" tone="light" />

              <Typography variant="h2" color="white" className="leading-tight">
                Reliable Filtration for Cleaner Surgical Environments
              </Typography>

              <Typography variant="p" color="white" className="text-white/90 leading-relaxed font-normal">
                Discover the advanced Smoke Evacuator Unit, featuring an integrated 35-hour
                filter system engineered to support effective surgical smoke management
                throughout procedures. Its thoughtfully designed filtration technology helps
                capture surgical smoke and maintain a cleaner, safer, and more controlled
                operating environment for healthcare professionals. Explore how its practical
                design and reliable functionality contribute to improved smoke management and
                support a more comfortable surgical workspace.
              </Typography>

              <div className="pt-2 sm:pt-3">
                <Button text="Explore Product" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filtration;
