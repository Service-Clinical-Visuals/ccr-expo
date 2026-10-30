"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Connectivity = () => {
  return (
    <section id="connectivity" className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="custom-box-container">
        {/* Dark Container Card */}
        <div className="w-full bg-[#17181C] rounded-2xl p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 shadow-2xl border border-[#333333]/85 overflow-hidden">
          <div className="flex flex-col min-[1301px]:flex-row gap-8 xl:gap-12 items-center">
            {/* Left Column: Video Container (65%) - Exact Deleo short-2 pattern */}
            <div
              className="w-full min-[1301px]:w-[65%] shrink-0 relative aspect-video overflow-hidden rounded-xl shadow-2xl border border-white/10 order-2 min-[1301px]:order-1"
              data-aos="fade-right"
            >
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Information (35%) */}
            <div className="w-full min-[1301px]:w-[35%] flex flex-col gap-5 sm:gap-6 order-1 min-[1301px]:order-2" data-aos="fade-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/80 bg-transparent w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
                <span className="text-xs sm:text-sm font-secondary font-normal uppercase text-white tracking-wide">
                  CONNECTIVITY & REPORTING
                </span>
              </div>

              {/* Title */}
              <Typography
                variant="h2"
                color="white"
                className="text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[56px] font-bold"
              >
                Seamless Data Sharing and Reporting
              </Typography>

              {/* Paragraphs - max-w-[95%] xl:max-w-[90%] */}
              <Typography
                variant="p"
                color="white"
                className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-white/90 max-w-[95%] xl:max-w-[90%]"
              >
                Designed to support convenient clinical workflows, Smart ECG combines a compact,
                lightweight form with flexible connectivity options, enabling healthcare
                professionals to perform ECG acquisition efficiently across different clinical
                environments. Its practical design supports easy handling and smooth operation,
                helping medical teams integrate cardiac recording into their daily patient assessment
                routines.
              </Typography>

              <Typography
                variant="p"
                color="white"
                className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-white/90 max-w-[95%] xl:max-w-[90%]"
              >
                Smart ECG allows ECG reports to be exported in widely used formats, including PDF,
                JPEG, and DICOM, making it easier for healthcare professionals to store, review, and
                share cardiac data. These flexible export options support efficient documentation,
                simplify information exchange, and help maintain accessible ECG records for clinical
                review and patient care.
              </Typography>

              {/* Action Button */}
              <div className="pt-2">
                <Button text="Know More" href="#connectivity" variant="secondary" iconType="arrow-up-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;
