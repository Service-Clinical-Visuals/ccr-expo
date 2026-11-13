"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

export default function BladderDrainage() {
  return (
    <section
      id="drainage"
      className="w-full pt-6 sm:pt-8 xl:pt-10 pb-12 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44 bg-white overflow-hidden"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-6 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 xl:items-center">
        {/* Left: heading on the magenta band + video (below xl the column dissolves so the order is heading, card, video) */}
        <div className="contents xl:col-span-8 xl:flex xl:flex-col">
          <div
            className="order-1 xl:order-none relative pt-8 sm:pt-10 2xl:pt-12 min-[2500px]:pt-16 min-[3800px]:pt-24 pb-6 sm:pb-8 2xl:pb-10 min-[2500px]:pb-14 min-[3800px]:pb-20"
            data-aos="fade-up"
          >
            {/* Band bleeds off the left edge and drops behind the top of the video (Rectangle 3 in Figma: 1370x319px, #A00566, rounded-tr-[16px] rounded-br-[16px]) */}
            <div className="absolute top-0 -left-[100vw] -right-[5vw] xl:-right-[6vw] -bottom-[10vw] xl:-bottom-[4.8vw] min-[2500px]:-bottom-[5.5vw] bg-[#A00566] rounded-tr-[16px] rounded-br-[16px] z-0" />

            <div className="relative z-10 flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 text-white">
              <Typography variant="h2" color="white" className="!font-bold leading-tight xl:max-w-[70%]">
                TRO-UROCATH For Reliable Bladder Drainage
              </Typography>
              <Typography
                variant="p"
                color="white"
                className="text-white/90 leading-relaxed font-normal text-sm sm:text-base xl:max-w-[70%]"
              >
                The TRO-UROCATH 2-way balloon catheter is designed to provide dependable bladder drainage in hospital and clinical environments. Manufactured from neutral, silicone-coated latex, it features a smooth surface that supports gentle insertion while helping to minimize irritation and encrustation.
              </Typography>
            </div>
          </div>

          {/* Video Container using Deleo technique (aspect-video relative overflow-hidden) */}
          <div
            className="order-3 xl:order-none relative w-full aspect-video overflow-hidden rounded-none shadow-2xl z-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: details card - Vertically Centered */}
        <div
          className="order-2 xl:order-none xl:col-span-4 xl:self-center relative z-20 flex flex-col justify-between bg-white border border-[#E5E5E5] shadow-[0px_4px_16px_rgba(0,0,0,0.12)] rounded-none p-6 sm:p-8 xl:p-9"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-2">
            <Typography variant="h3" color="dark" className="!font-bold leading-snug">
              Advanced Design & Clinical Performance
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed text-gray-600 text-xs sm:text-sm">
              Available in both two-way and three-way configurations, TRO-UROCATH offers flexibility for different clinical requirements.
            </Typography>
          </div>

          {/* 4 Feature Items */}
          <div className="flex flex-col gap-3.5 my-3">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-[#A00566] shrink-0 mt-0.5 min-[2500px]:mt-1.5" />
              <Typography variant="p" color="dark" className="text-xs sm:text-sm text-gray-800 leading-snug">
                <strong className="text-gray-900">Flexible Material Options</strong> – Available in silicone-coated latex and 100% silicone versions to meet different clinical preferences.
              </Typography>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-[#A00566] shrink-0 mt-0.5 min-[2500px]:mt-1.5" />
              <Typography variant="p" color="dark" className="text-xs sm:text-sm text-gray-800 leading-snug">
                <strong className="text-gray-900">Sterile Packaging</strong> – Supplied sterile packed for minimum product hygiene and support safe clinical handling.
              </Typography>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-[#A00566] shrink-0 mt-0.5 min-[2500px]:mt-1.5" />
              <Typography variant="p" color="dark" className="text-xs sm:text-sm text-gray-800 leading-snug">
                <strong className="text-gray-900">Easy Size Identification</strong> – Color-coded indicators help healthcare professionals identify catheter types quickly.
              </Typography>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-[#A00566] shrink-0 mt-0.5 min-[2500px]:mt-1.5" />
              <Typography variant="p" color="dark" className="text-xs sm:text-sm text-gray-800 leading-snug">
                <strong className="text-gray-900">Multiple Configurations</strong> – Available in two-way and three-way designs for different clinical requirements and drainage needs.
              </Typography>
            </div>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed text-gray-600 text-xs sm:text-sm">
            Its two-way design incorporates a soft valve for balloon inflation, while the integrated balloon retains catheter position smoothly. A standard size indicator for easy identification of catheter size is also available. Available as 100% silicone version, offering additional material options for clinical needs.
          </Typography>

          <div className="pt-3">
            <Button
              text="View Product Specifications"
              variant="primary"
              href="#drainage"
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
