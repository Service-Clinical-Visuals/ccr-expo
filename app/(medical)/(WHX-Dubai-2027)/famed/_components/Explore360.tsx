"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

/**
 * Explore in 360°: blue wave band with the heading, intro and CTA; the 360° video card
 * starts inside the band and overlaps down onto the white below.
 *
 * The band's bottom padding = gap above the card + the overlap, and the card's negative
 * top margin = the overlap, so the two values move together at each breakpoint.
 */
const Explore360 = () => {
  return (
    <section id="explore-360" className="relative w-full bg-white pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48">
      {/* Blue band */}
      <div className="w-full bg-primary bg-[url('/medical/famed/bg.webp')] bg-cover bg-center bg-no-repeat pt-10 sm:pt-12 2xl:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28 pb-24 xl:pb-[8.5rem] 2xl:pb-[10rem] min-[2500px]:pb-[15rem] min-[3800px]:pb-[21rem]">
        <div
          className="custom-container flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 xl:gap-10 min-[2500px]:gap-16"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 2xl:gap-3 min-[2500px]:gap-5 xl:max-w-[60%]">
            <h2 className="text-white">Explore OrthoNail In 360°</h2>
            <p className="text-white/90">
              Explore OrthoNail, an innovative intramedullary implant designed for precise
              lower-limb bone lengthening. Discover its patented magneto-mechanical technology,
              unique structure, and advanced engineering through an interactive 360° experience.
            </p>
          </div>
          <div className="shrink-0">
            <Button text="Explore In 360°" variant="white" />
          </div>
        </div>
      </div>

      {/* 360° video card — overlaps the bottom of the band */}
      <div className="custom-container -mt-16 xl:-mt-[6.5rem] 2xl:-mt-[7.5rem] min-[2500px]:-mt-[11rem] min-[3800px]:-mt-[15rem] relative z-10">
        <div
          className="relative w-full xl:w-[83%] mx-auto aspect-video  overflow-hidden  rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Explore360;
