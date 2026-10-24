"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Cpu, Sliders, Scissors } from "lucide-react";

const PrecisionDetail = () => {
  const points = [
    {
      icon: Cpu,
      title: "Advanced Electrosurgical Technology:",
      text: "Innovative technology designed to support efficient and precise electrosurgical performance.",
    },
    {
      icon: Sliders,
      title: "Intuitive Control Interface:",
      text: "User-friendly controls that help healthcare professionals manage settings with ease.",
    },
    {
      icon: Scissors,
      title: "Precision Cutting and Hemostasis:",
      text: "Dedicated operating modes engineered to support controlled dissection and prompt hemostasis while dramatically reducing lateral thermal spread.",
    },
  ];

  return (
    <section id="technology" className="w-full py-16 xl:py-24 bg-[#0B192C] overflow-hidden">
      <div className="custom-container">
        {/* Mobile & Tablet Header */}
        <div className="flex flex-col gap-2 text-center mb-6 min-[1301px]:hidden" data-aos="fade-up">
          <Typography variant="h4" color="white" className="!font-bold tracking-wide !text-[#24AEE7]">
            Advanced Electrosurgical Technology
          </Typography>
          <Typography variant="h2" color="white" className="!font-bold leading-tight">
            Experience Precision in Every Detail
          </Typography>
        </div>

        <div className="flex flex-col min-[1301px]:flex-row items-center gap-10 min-[1301px]:gap-14 min-[3800px]:gap-20 w-full">
          {/* Left Column: Video Player */}
          <div
            className="w-full min-[1301px]:w-1/2 min-[1440px]:w-[55%] relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Feature List and CTA */}
          <div
            className="w-full min-[1301px]:w-1/2 min-[1440px]:w-[45%] flex flex-col gap-6"
            data-aos="fade-left"
          >
            {/* Desktop Header */}
            <div className="hidden min-[1301px]:flex flex-col gap-2 w-full xl:max-w-[90%]">
              <Typography variant="h4" color="white" className="!font-bold tracking-wide">
                Advanced Electrosurgical Technology
              </Typography>
              <Typography variant="h2" color="white" className="!font-bold leading-tight">
                Experience Precision in Every Detail
              </Typography>
            </div>

            <Typography variant="p" color="white" className="text-gray-200 leading-relaxed w-full xl:max-w-[90%]">
              Explore its innovative technology, precision controls, and versatile capabilities
              designed to support a wide range of surgical procedures.
            </Typography>

            <div className="flex flex-col gap-4 pt-1">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 min-[1920px]:gap-5 min-[2500px]:gap-6 min-[3800px]:gap-8">
                    <div className="responsive-icon-box rounded-xl bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.3)] flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5 shadow-sm">
                      <IconComponent className="responsive-icon" strokeWidth={2} />
                    </div>
                    <Typography variant="p" color="white" className="leading-relaxed">
                      <strong className="font-bold text-white">{pt.title} </strong>
                      <span className="text-gray-200">{pt.text}</span>
                    </Typography>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Button
                text="View Product"
                variant="glass"
                href="#products"
                className="!py-3 !px-8 font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecisionDetail;
