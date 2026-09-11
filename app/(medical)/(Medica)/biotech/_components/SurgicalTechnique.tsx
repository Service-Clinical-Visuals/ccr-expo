"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function SurgicalTechnique() {
  const bulletPoints = [
    {
      title: "Compatibility of sizes",
      desc: "Each femoral component is compatible also with the next size of tibial component (one size lower or upper).",
    },
    {
      title: "Tibial base components and inserts",
      desc: "Cemented and uncemented tibia plate versions made of Cobalt Crome are available with primary or posterior stabilized UHMWPE inserts, in different sizes.",
    },
    {
      title: "Patella component",
      desc: "The 1 pegged, dome-shaped patellar component is available in cemented UHMWPE version. The correct placement and long-lasting fixation are ensured by the introduction of the peg.",
    },
  ];

  return (
    <section
      id="surgical-technique"
      className="w-full py-16 lg:py-24 xl:py-28 bg-[#003470] text-white overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10 lg:gap-12">
        {/* Top Header & View All Button */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="w-full xl:max-w-[70%] min-[2500px]:max-w-[80%] min-[3800px]:max-w-[85%]">
            <Typography variant="h2" color="white" className="mb-3">
              Future Knee Modular System Surgical Technique
            </Typography>
            <div className="w-[247px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] h-[2px] min-[2500px]:h-[3px] min-[3800px]:h-[4px] bg-white rounded-[8px] mb-4" />
            <Typography variant="p" color="white">
              Cruciate retaining femoral components exist in both left and right
              anatomical designs made of Cobalt Crome raw material.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="View All"
              href="#catalog"
              variant="primary"
              showIcon={false}
            />
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-[2500px]:gap-20 items-center">
          {/* Left Media Column */}
          <div
            className="lg:col-span-7 w-full aspect-video relative rounded-[6px] min-[2500px]:rounded-[12px] overflow-hidden border border-white/20 shadow-2xl bg-black/40"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 min-[2500px]:gap-10" data-aos="fade-left">
            <Typography variant="p" color="white">
              The condylar gilding surfaces are centralized in 5 degree angle over
              opposite paths. Posterior stabilized femoral components are made of
              Cobalt Crome raw material and anatomically shaped. The special
              geometrical features of the condyles along with the central directional
              box, guarantee the high joint stability of the special P/S tibial inlay.
            </Typography>

            <div className="flex flex-col gap-5 sm:gap-6 min-[2500px]:gap-8">
              {bulletPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 min-[2500px]:gap-5">
                  <div className="w-[9px] h-[9px] min-[2500px]:w-[14px] min-[2500px]:h-[14px] min-[3800px]:w-[18px] min-[3800px]:h-[18px] rounded-full bg-white shrink-0 mt-[9px] min-[2500px]:mt-3" />
                  <p className="font-[var(--font-secondary)] text-[15px] sm:text-[17px] min-[2500px]:text-[22px] min-[3800px]:text-[30px] leading-[26px] sm:leading-[28px] min-[2500px]:leading-[38px] min-[3800px]:leading-[48px] text-white">
                    <strong className="font-bold text-white">{item.title} : </strong>
                    <span className="font-normal text-white">{item.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
