"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Solution() {
  return (
    <section id="solutions" className="w-full bg-primary py-12 sm:py-16 xl:py-20 2xl:py-20 min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 xl:gap-8 2xl:gap-9 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Content (first on every screen size) */}
        <div className="xl:col-span-4 flex flex-col items-start" data-aos="fade-right">
          <div className="flex items-center gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-7 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-5 2xl:w-6 min-[2500px]:w-9 min-[3800px]:w-12 h-[3px] min-[2500px]:h-1 min-[3800px]:h-1.5 rounded-full bg-white" />
            <Typography variant="h4" color="white" className="uppercase">
              Laryngoscope Solutions
            </Typography>
          </div>

          <Typography variant="h2" color="white" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Reliable Solutions for Modern Procedures
          </Typography>

          <div className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10">
            <Typography variant="p" color="white">
              Riester&apos;s laryngoscope collection brings together a variety of solutions developed to accommodate
              different clinical requirements. From the ri-integral and ri-modul fibre optic models to the
              ri-standard direct-illuminated laryngoscopes, the range offers healthcare professionals flexibility in
              selecting the right instrument for their procedures.
            </Typography>
            <Typography variant="p" color="white">
              For situations where convenience and single-use functionality are preferred, the ri-dispo disposable
              laryngoscopes provide a practical solution. Alongside reusable options, Riester combines German
              engineering with practical design to deliver dependable instruments for professional clinical
              examination and everyday use.
            </Typography>
          </div>

          <div className="mt-6 sm:mt-8 2xl:mt-9 min-[2500px]:mt-12 min-[3800px]:mt-16">
            <Button text="Know More" variant="primary" href="#solutions" />
          </div>
        </div>

        {/* Video */}
        <div
          className="xl:col-span-8 relative w-full aspect-video xl:aspect-[1017/569] overflow-hidden rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px] bg-[#EBEBEB]"
          data-aos="fade-left"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
