"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function CpapTherapy() {
  return (
    <section id="cpap" className="w-full py-16 sm:py-20 lg:py-28 min-[2500px]:py-36 min-[3800px]:py-48 bg-[#F5F6FA] overflow-hidden">
      <div className="custom-container flex flex-col items-center text-center">

        <div className="flex flex-col items-center mb-6 sm:mb-8 min-[2500px]:mb-12" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="font-['Exo_2'] font-bold"
          >
            CPAP therapy
          </Typography>
          <div className="w-[100px] sm:w-[138px] min-[2500px]:w-[200px] min-[3800px]:w-[280px] h-[4px] sm:h-[5px] min-[2500px]:h-[8px] min-[3800px]:h-[10px] bg-[#A12624] rounded-full mt-3 sm:mt-4" />
        </div>

        <div className="w-full xl:max-w-[70%] max-w-[90%] mx-auto mb-10 sm:mb-14 min-[2500px]:mb-20" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="gray" className="leading-relaxed">
            Therapeutic treatment of sleep apnea syndrome (SAS) using CPAP technology is largely carried out by the patient at home and therefore requires simple and safe accessories where the effort required for use and maintenance, as well as the costs, remain within a reasonable range. AEROtube® CPAP tubing and tubing systems, along with practical accessories and AEROvent® CPAP filters, meet these requirements without compromising on quality, technology, or patient comfort.
          </Typography>
        </div>

        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
