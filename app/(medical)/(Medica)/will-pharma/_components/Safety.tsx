"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const contraindicationsList = [
  {
    title: "Tissue Contamination or Infection",
    description: "Do not use in infected or contaminated tissues.",
  },
  {
    title: "Infants",
    description: "Contraindicated in infants due to potential development concerns.",
  },
  {
    title: "Children",
    description: "Contraindicated in children due to potential growth concerns.",
  },
];

export default function Safety() {
  return (
    <section className="w-full py-16 sm:py-20 xl:py-28 bg-[#FAF4EF] overflow-hidden">
      <div className="custom-container">
        {/* Mobile / Tablet Header */}
        <div className="flex flex-col gap-2 sm:gap-3 w-full lg:hidden mb-5 sm:mb-6" data-aos="fade-up">
          <Typography
            variant="h4"
            color="accent"
            className="uppercase !font-bold tracking-wider"
          >
            CONTRAINDICATIONS
          </Typography>
          <Typography
            variant="h2"
            color="dark"
            className="uppercase !font-bold text-[#333333]"
          >
            IMPORTANT SAFETY INFORMATION
          </Typography>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-12 min-[3800px]:gap-20 w-full">
          {/* Left: Video Player */}
          <div
            className="w-full lg:w-[65%] xl:w-[calc(70%-1.5rem)] aspect-video relative rounded-[10px] md:rounded-[14px] min-[3800px]:rounded-[24px] overflow-hidden shadow-lg bg-black/10 shrink-0"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div
            className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[35%] xl:w-[calc(30%-1.5rem)]"
            data-aos="fade-left"
          >
            <Typography
              variant="h4"
              color="accent"
              className="hidden lg:block uppercase !font-bold tracking-wider"
            >
              CONTRAINDICATIONS
            </Typography>

            <Typography
              variant="h2"
              color="dark"
              className="hidden lg:block uppercase !font-bold text-[#333333]"
            >
              IMPORTANT SAFETY INFORMATION
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4B5563]"
            >
              Willomesh® is intended for specific surgical applications and should not be used in cases of tissue contamination or infection, in infants or children, or during pregnancy. Proper clinical assessment is essential before use.
            </Typography>

            {/* Contraindications List */}
            <div className="bg-white rounded-[10px] min-[3800px]:rounded-[20px] p-5 sm:p-6 min-[3800px]:p-10 shadow-sm border border-gray-100 flex flex-col gap-4 min-[3800px]:gap-7">
              {contraindicationsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[3800px]:gap-5">
                  <img
                    src="/medical/will-pharma/tick.png"
                    alt="Check"
                    className="w-5 min-[2500px]:w-7 min-[3800px]:w-10 h-auto object-contain shrink-0 mt-1"
                  />
                  <p className="leading-relaxed text-[#333333]">
                    <strong className="font-bold text-[#333333]">{item.title}</strong> —{" "}
                    <span className="text-[#333333]">{item.description}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                text="Learn More"
                href="#safety"
                variant="primary"
                showIcon={false}
                className="!px-7 !py-2.5 min-[3800px]:!py-5 min-[3800px]:!px-14 min-[3800px]:text-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
