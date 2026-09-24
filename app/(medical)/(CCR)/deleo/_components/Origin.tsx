"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Origin = () => {
  return (
    <section id="origin" className="w-full py-16 xl:py-24 bg-[var(--color-secondary)] overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">

          {/* Text Content (Left side on Desktop, Top on Mobile/Tablet) */}
          <div className="flex flex-col gap-6 w-full xl:w-[40%]" data-aos="fade-right">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-white"></div>
              <Typography variant="h4" color="white">
                CRISTAL Ultra® Positioning
              </Typography>
            </div>

            <Typography variant="h2" color="white">
              Cryolipolysis, Enhanced by RF
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed text-gray-300">
              The ORIGIN® medical device by Deleo is an Erbium Glass laser system. The laser creates micro-coagulation channels using the principle of photothermolysis, which involves rapidly heating a specific target (such as dermal fibroblasts) while minimizing heating of the dermis or epidermis.
            </Typography>
            <ul className="space-y-4 text-white list-none mt-2">
              <li className="flex gap-2 items-start">
                <span className="text-white text-xl leading-none mt-1">•</span>
                <Typography variant="p" color="white" className="text-gray-300">
                  <strong>Dual-Technology Protocol:</strong> Radiofrequency + Cryolipolysis work together in a coordinated treatment sequence.

                </Typography>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-white text-xl leading-none mt-1">•</span>
                <Typography variant="p" color="white" className="text-gray-300">
                  <strong>Clinically Measured Results:</strong>
                  +30% efficacy compared with traditional cryolipolysis, based on Deleo's retrospective study of 27 patients with 3-month
                </Typography>
              </li>
            </ul>

            <div className="pt-4">
              <Button text="View All" variant="secondary" href="#origin" showIcon={false} />
            </div>
          </div>

          {/* Video Content (Right side on Desktop, Bottom on Mobile/Tablet) */}
          <div className="w-full xl:w-[60%] relative aspect-video overflow-hidd en " data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full   object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Origin;
