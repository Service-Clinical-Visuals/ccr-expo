"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const highlights = [
  {
    title: "12-Channel Resting ECG",
    description: "ECG recordings with measurement and interpretation.",
  },
  {
    title: "Arrhythmia Detection",
    description: "Helps identify irregular heart rhythms and supports comprehensive cardiac monitoring.",
  },
  {
    title: "Emergency ECG",
    description: "Enables rapid ECG recording to support cardiac assessment in emergency situations.",
  },
];

export default function Smart() {
  return (
    <section id="equipment" className="w-full py-12 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="relative">
        {/* Blue panel: bleeds off the left edge, rounded on the right */}
        <div className="absolute inset-y-0 left-0 w-full xl:w-[57%] bg-primary xl:rounded-tr-[12px] xl:rounded-br-[12px] min-[2500px]:rounded-tr-[18px] min-[2500px]:rounded-br-[18px] min-[3800px]:rounded-tr-[24px] min-[3800px]:rounded-br-[24px] shadow-[0px_4px_10px_rgba(0,0,0,0.15)]" />

        <div className="custom-container relative grid grid-cols-1 xl:grid-cols-12 items-center gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20 py-10 sm:py-12 2xl:py-12 min-[2500px]:py-16 min-[3800px]:py-24">
          {/* Content */}
          <div className="xl:col-span-4 flex flex-col" data-aos="fade-right">
            <Typography variant="h1" color="white" className="pb-3 2xl:pb-4 min-[2500px]:pb-6 min-[3800px]:pb-8 border-b border-white/25">
              Smart Cardiac Diagnostics
            </Typography>

            <Typography variant="p" color="white" className="mt-4 2xl:mt-5 min-[2500px]:mt-7 min-[3800px]:mt-10">
              The CARDIO M-PC USB resting PC-ECG combines advanced 12-channel ECG technology with powerful
              diagnostic software to support comprehensive cardiac examinations
            </Typography>

            <ul className="flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mt-5 2xl:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12 pb-5 2xl:pb-6 min-[2500px]:pb-9 min-[3800px]:pb-12 border-b border-white/25">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3 min-[3800px]:gap-5">
                  <span className="mt-[0.2em] w-5 h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                    <Check className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3.5} />
                  </span>
                  <Typography variant="p" color="white">
                    {item.title} – {item.description}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography variant="p" color="white" className="mt-5 2xl:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12">
              Designed for hospitals, clinics, and mobile healthcare professionals, it enables efficient patient data
              management, flexible workflows, and integration with healthcare information systems.
            </Typography>

            <div className="mt-6 2xl:mt-8 min-[2500px]:mt-11 min-[3800px]:mt-16">
              <Button text="Discover Product Features" variant="secondary" href="#equipment" />
            </div>
          </div>

          {/* Video card: rounded top-left and bottom-right */}
          <div
            className="xl:col-span-8 relative w-full aspect-video xl:aspect-[860/488] overflow-hidden rounded-tl-[20px] rounded-br-[20px] sm:rounded-tl-[28px] sm:rounded-br-[28px] min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px] shadow-[0px_4px_12px_rgba(0,0,0,0.2)] bg-[#EBEBEB]"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
