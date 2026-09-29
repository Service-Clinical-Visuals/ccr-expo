"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const HipSystems = () => {
  const points = [
    {
      title: "Material & Design",
      description: "Stainless Steel and CoCr with medial and lateral radius to reduce stress raisers.",
    },
    {
      title: "Anatomical Reconstruction",
      description: "135° stem/neck angle and 12/14 neck taper for anatomical reconstruction.",
    },
    {
      title: "Stable Anchorage",
      description: "A small proximal collar compresses the cement and helps prevent the stem from sinking.",
    },
  ];

  return (
    <section
      id="hip-systems"
      className="w-full py-16 xl:py-24 min-[3800px]:py-36 bg-[#164160] overflow-hidden text-white"
    >
      <div className="custom-container flex flex-col gap-10 xl:gap-14 min-[3800px]:gap-20">
        {/* Top Header - Deleo xl:max-w-[70%] concept */}
        <div className="flex flex-col items-center gap-3 text-center xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="w-[27px] min-[3800px]:w-14 h-[4px] min-[3800px]:h-2 bg-[#FB8021] rounded-full shrink-0"></div>
            <Typography
              variant="h4"
              color="primary"
              className="!font-bold tracking-wider uppercase"
            >
              HIP SYSTEMS
            </Typography>
          </div>

          <Typography variant="h2" color="white" className="!font-bold">
            Advanced Cemented Hip Stem Technology
          </Typography>
        </div>

        {/* Content Row: 60% | 40% split */}
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-12 2xl:gap-16 min-[2500px]:gap-20 min-[3800px]:gap-28 w-full">
          {/* Video Content: 60% on desktop - object-contain ensures short-2 video is NEVER cropped */}
          <div
            className="w-full xl:w-[60%] relative aspect-video overflow-hidden rounded-xl shadow-2xl border border-white/10 bg-black/40"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Text Content: 40% on desktop */}
          <div
            className="flex flex-col gap-6 min-[3800px]:gap-10 w-full xl:w-[40%]"
            data-aos="fade-left"
          >
            <Typography variant="p" color="white" className="leading-relaxed text-gray-200">
              The Covision Straight Stem (Müller Straight Cemented Stem) is designed to support
              anatomical reconstruction and stable implant fixation. Available in Stainless Steel
              and CoCr, it features a 135° stem/neck angle and 12/14 neck taper, with a range of sizes
              to accommodate different anatomical requirements. Its medial and lateral radius design
              helps reduce stress raisers, while the proximal collar compresses the cement to support
              secure fixation and help prevent stem sinking.
            </Typography>

            {/* Checkmark Points with tick.png image */}
            <div className="flex flex-col gap-5 min-[3800px]:gap-8 mt-1">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5 sm:gap-4">
                  <img
                    src="/medical/covision/tick.png"
                    alt="Tick"
                    className="w-5 min-[2500px]:w-7 min-[3800px]:w-10 h-auto object-contain shrink-0 mt-1"
                  />
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="h4"
                      color="white"
                      className="!font-bold text-lg md:text-xl text-white"
                    >
                      {point.title}
                    </Typography>
                    <Typography
                      variant="p"
                      color="white"
                      className="text-sm md:text-base leading-relaxed text-gray-300"
                    >
                      {point.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-2">
              <Button text="Learn More" variant="outline" href="#hip-systems" showIcon={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HipSystems;
