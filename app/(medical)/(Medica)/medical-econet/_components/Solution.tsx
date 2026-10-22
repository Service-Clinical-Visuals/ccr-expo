"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const highlights = [
  {
    title: "Exercise ECG Monitoring",
    description: "Supports exercise testing with ST-line monitoring and control for cardiac assessment.",
  },
  {
    title: "Heart Rate Variability",
    description: "Provides HRV analysis to support detailed evaluation of heart rhythm variations.",
  },
  {
    title: "Expandable Diagnostic System",
    description: "Allows integration with compatible devices, including spirometers and long-term blood pressure monitors.",
  },
  {
    title: "Emergency ECG",
    description: "Enables rapid ECG recording to support cardiac assessment in emergency situations.",
  },
];

const cornerClass =
  "rounded-tl-[24px] rounded-br-[24px] sm:rounded-tl-[32px] sm:rounded-br-[32px] 2xl:rounded-tl-[44px] 2xl:rounded-br-[44px] min-[2500px]:rounded-tl-[60px] min-[2500px]:rounded-br-[60px] min-[3800px]:rounded-tl-[84px] min-[3800px]:rounded-br-[84px]";

export default function Solution() {
  return (
    <section id="solutions" className="w-full pb-12 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44 bg-white overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-6 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
        {/* Left: heading on the blue band + video (below xl the column dissolves so the order is heading, card, video) */}
        <div className="contents xl:col-span-8 xl:flex xl:flex-col">
          <div className="order-1 xl:order-none relative pt-8 sm:pt-10 2xl:pt-12 min-[2500px]:pt-16 min-[3800px]:pt-24 pb-6 sm:pb-8 2xl:pb-10 min-[2500px]:pb-14 min-[3800px]:pb-20" data-aos="fade-up">
            {/* Band bleeds off the left edge and drops behind the top of the video */}
            <div className="absolute top-0 -left-[100vw] -right-[5vw] xl:-right-[6vw] -bottom-[12vw] xl:-bottom-[5.7vw] bg-primary rounded-tr-[14px] min-[2500px]:rounded-tr-[20px] min-[3800px]:rounded-tr-[28px]" />

            <div className="relative flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 xl:max-w-[82%]">
              <Typography variant="h1" color="white">
                Advanced ECG Solutions
              </Typography>
              <Typography variant="p" color="white">
                The CARDIO M-PC USB resting PC-ECG combines advanced 12-channel ECG technology with the ME Diagnostic
                Center software to support comprehensive cardiac examinations and efficient patient data management.
              </Typography>
            </div>
          </div>

          <div
            className={`order-3 xl:order-none relative w-full aspect-video xl:aspect-auto xl:flex-1 xl:min-h-[30vw] overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.2)] bg-[#EBEBEB] ${cornerClass}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Right: details card */}
        <div
          className={`order-2 xl:order-none xl:col-span-4 xl:mt-8 2xl:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20 relative flex flex-col bg-white border border-[#E5E5E5] shadow-[0px_4px_12px_rgba(0,0,0,0.12)] px-6 py-8 2xl:px-7 2xl:py-10 min-[2500px]:px-10 min-[2500px]:py-14 min-[3800px]:px-14 min-[3800px]:py-20 ${cornerClass}`}
          data-aos="fade-left"
        >
          <Typography variant="h1" color="dark" className="pb-3 2xl:pb-4 min-[2500px]:pb-6 min-[3800px]:pb-8 border-b border-[#D9D9D9]">
            Connected Cardiac Diagnostics
          </Typography>

          <Typography variant="p" color="muted" className="mt-4 2xl:mt-5 min-[2500px]:mt-7 min-[3800px]:mt-10">
            The CARDIO M-PC USB combines reliable ECG recording with versatile software functionality to support
            efficient cardiac diagnostics across different healthcare environments.
          </Typography>

          <ul className="flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mt-5 2xl:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12 pb-5 2xl:pb-6 min-[2500px]:pb-9 min-[3800px]:pb-12 border-b border-[#D9D9D9]">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-3 min-[3800px]:gap-5">
                <span className="mt-[0.2em] w-5 h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3.5} />
                </span>
                <Typography variant="p" color="muted">
                  {item.title} – {item.description}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography variant="p" color="muted" className="mt-5 2xl:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12">
            Its network-compatible design and flexible system integration help medical professionals manage
            diagnostic data and streamline everyday clinical workflows.
          </Typography>

          <div className="mt-6 2xl:mt-8 min-[2500px]:mt-11 min-[3800px]:mt-16">
            <Button text="View Technical Specifications" variant="primary" href="#solutions" />
          </div>
        </div>
      </div>
    </section>
  );
}
