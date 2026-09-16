"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Cementless = () => {
  return (
    <section id="cementless" className="w-full py-16 sm:py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Top Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:max-w-[70%]">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="dark">
                Cementless Karey HA
              </Typography>
              <div className="w-10 sm:w-16 h-1.5 bg-[#0C71C3] rounded-xl"></div>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed">
              The Cementless Karey HA stem provides primary and secondary stability in hip arthroplasty. Made from titanium alloy with a hydroxyapatite coating, its triple-wedge geometry, macrostructures, and longitudinal grooves support secure fixation, bone integration, and reduced migration.
            </Typography>
          </div>

          <div className="shrink-0 pt-2 lg:pt-0" data-aos="fade-left">
            <Button href="#specifications" variant="primary" text="View Specifications" />
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 -my-2 sm:-my-6"></div>

        {/* Video Player Area */}
        <div className="w-full" data-aos="zoom-in" data-aos-delay="200">
          <div className="w-full aspect-video xl:max-w-[90%] mx-auto relative ">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cementless;
