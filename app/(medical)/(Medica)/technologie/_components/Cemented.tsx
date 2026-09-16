"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const Cemented = () => {
  return (
    <section id="cemented" className="w-full py-16 sm:py-24 bg-[var(--color-primary)] overflow-hidden text-white">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-10 min-[3800px]:gap-14 items-center">

        {/* Left: Video Player */}
        <div className="xl:col-span-8 order-2 xl:order-1" data-aos="fade-right">
          <div className="w-full aspect-video overflow-hidden shadow-2xl relative">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="xl:col-span-4 flex flex-col gap-6 min-[3800px]:gap-8 order-1 xl:order-2" data-aos="fade-left">
          <div className="flex items-center gap-3">
            <Typography variant="h2" color="white">
              Cemented Karey C
            </Typography>
          </div>

          <div className="w-full h-px bg-white/30"></div>

          <Typography variant="p" color="white" className="leading-relaxed">
            The Cemented Karey C stem is designed to provide stable and reliable fixation in cemented hip arthroplasty procedures, supporting consistent clinical performance and patient mobility.
          </Typography>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 text-white" fill="currentColor" stroke="var(--color-primary)" />
              <Typography variant="p" color="white" className="leading-relaxed text-sm xl:text-base">
                Triple wedge design: The trapezoidal shape in the sagittal and frontal planes offers enhanced primary stability and prevents prosthesis sinking.
              </Typography>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 text-white" fill="currentColor" stroke="var(--color-primary)" />
              <Typography variant="p" color="white" className="leading-relaxed text-sm xl:text-base">
                Polished surface with rounded edges: Ensure correct adhesion to the cement, preventing the concentration of tension.
              </Typography>
            </div>
          </div>

          <div className="w-full h-px bg-white/30"></div>

          <Typography variant="p" color="white" className="leading-relaxed text-sm xl:text-base">
            Its triple-wedge geometry, polished surface, and fine conical distal tip work together to support primary stability, controlled cement adhesion, and optimal load distribution.
          </Typography>

          <div className="pt-2">
            <Button href="#product-details" variant="secondary" text="View Product Details" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cemented;
