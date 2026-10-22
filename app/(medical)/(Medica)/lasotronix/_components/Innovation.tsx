"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const Innovation = () => {
  const points = [
    "Multiple wavelengths support versatile dermatological and aesthetic treatments.",
    "Customizable protocols allow practitioners to adjust treatment parameters according to individual patient needs and specific procedures.",
    "Advanced technology, intuitive controls, and reliable performance help streamline clinical workflows while supporting precise treatment delivery.",
  ];

  return (
    <section id="innovation" className="relative w-full py-16 xl:py-24 bg-[#272727] overflow-hidden">
      {/* Background Accent Card */}
      <div
        className="hidden min-[1501px]:block absolute left-0 top-6 bottom-6 xl:top-10 xl:bottom-10 min-[2500px]:top-16 min-[2500px]:bottom-16 min-[3800px]:top-20 min-[3800px]:bottom-20 w-[58%] xl:w-[60%] min-[2500px]:w-[60%] min-[3800px]:w-[60%] bg-[#121111] rounded-r-[20px] min-[3800px]:rounded-r-[36px] border-y border-r border-white/20 shadow-2xl z-0"
        data-aos="fade-right"
      />

      <div className="custom-container relative z-10">
        <div className="flex flex-col min-[1501px]:flex-row items-center justify-between gap-8 min-[1501px]:gap-6 w-full">
          {/* Left Column: Content Card */}
          <div
            className="w-full min-[1501px]:w-[38%] min-[2500px]:w-[38%] min-[3800px]:w-[38%] bg-[#121111] min-[1501px]:bg-transparent rounded-[20px] min-[1501px]:rounded-none p-6 sm:p-8 min-[1501px]:p-0 border border-white/20 min-[1501px]:border-none shadow-xl min-[1501px]:shadow-none flex flex-col gap-4 xl:gap-5"
            data-aos="fade-right"
          >
            <Typography variant="h3" color="white" className="tracking-[0.8px] font-normal">
              Advancing Laser Innovation
            </Typography>

            <div className="w-full h-px bg-white/25"></div>

            <Typography variant="p" color="white" className="leading-relaxed font-normal">
              SMARTMDR is an advanced diode laser system developed to meet the evolving needs of
              modern dermatology and aesthetic medicine. Multiple wavelengths and smart treatment
              management support versatile therapeutic and aesthetic procedures.
            </Typography>

            {/* Bullets with Checkmarks */}
            <ul className="space-y-3.5 my-1">
              {points.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-black" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="white" className="leading-snug font-normal">
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="w-full h-px bg-white/25"></div>

            <Typography variant="p" color="white" className="leading-relaxed font-normal text-white/80">
              Its intuitive interface and customizable treatment database support efficient workflows,
              while advanced laser technology enables precise treatment delivery.
            </Typography>

            <div className="pt-2">
              <Button text="Explore Technical Features" href="#innovation" variant="primary" />
            </div>
          </div>

          {/* Right Column: Video Clip Container */}
          <div
            className="w-full min-[1501px]:w-[58%] min-[2500px]:w-[58%] min-[3800px]:w-[58%] relative aspect-video overflow-hidden rounded-[20px] min-[3800px]:rounded-[36px] border border-white/20 bg-black shadow-2xl"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
