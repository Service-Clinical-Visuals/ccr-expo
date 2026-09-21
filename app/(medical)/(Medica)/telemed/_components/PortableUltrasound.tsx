"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function PortableUltrasound() {
  return (
    <section
      id="portable-ultrasound"
      className="w-full py-16 sm:py-24 min-[3800px]:py-40 bg-[#0F3E7B] overflow-hidden text-white"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 min-[3800px]:gap-24 items-center">
        {/* Video Player */}
        <div
          className="xl:col-span-8 order-2 xl:order-1 relative aspect-video shadow-xl overflow-hidden"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Feature Content */}
        <div
          className="xl:col-span-4 flex flex-col gap-5 sm:gap-6 min-[3800px]:gap-10 order-1 xl:order-2"
          data-aos="fade-left"
        >
          {/* Headline */}
          <Typography
            variant="h2"
            weight="semibold"
            color="white"
            className="font-['Exo_2'] tracking-tight capitalize leading-tight"
          >
            Portable Ultrasound
          </Typography>

          {/* Intro Description */}
          <p className="font-['Outfit'] font-[400] text-white leading-relaxed text-sm xl:text-base min-[3800px]:text-2xl">
            MicrUs Pro is a handheld ultrasound scanner designed to deliver
            professional imaging in a compact probe-based format.
          </p>

          {/* Features Checklist */}
          <div className="flex flex-col gap-4 sm:gap-5 min-[3800px]:gap-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 min-[3800px]:gap-6">
              <CheckCircle2
                className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 min-[3800px]:mt-1.5 text-white"
                fill="currentColor"
                stroke="#0F3E7B"
              />
              <p className="font-['Outfit'] text-white leading-relaxed text-sm xl:text-base min-[3800px]:text-2xl">
                <span className="font-[600] text-white">
                  Multiple Probe Options
                </span>{" "}
                &ndash; Available in linear and convex configurations for
                different applications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 min-[3800px]:gap-6">
              <CheckCircle2
                className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 min-[3800px]:mt-1.5 text-white"
                fill="currentColor"
                stroke="#0F3E7B"
              />
              <p className="font-['Outfit'] text-white leading-relaxed text-sm xl:text-base min-[3800px]:text-2xl">
                <span className="font-[600] text-white">
                  Windows &amp; Android Compatible
                </span>{" "}
                &ndash; Connects directly to compatible tablets, smartphones,
                and Windows devices via USB.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 min-[3800px]:gap-6">
              <CheckCircle2
                className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 min-[3800px]:mt-1.5 text-white"
                fill="currentColor"
                stroke="#0F3E7B"
              />
              <p className="font-['Outfit'] text-white leading-relaxed text-sm xl:text-base min-[3800px]:text-2xl">
                <span className="font-[600] text-white">
                  High-Quality Imaging
                </span>{" "}
                &ndash; Designed to provide image quality appreciated by
                MicrUs customers.
              </p>
            </div>
          </div>

          {/* Engineering & Hardware Architecture Note */}
          <p className="font-['Outfit'] font-[400] text-white/90 leading-relaxed text-sm xl:text-base min-[3800px]:text-2xl">
            Its upgraded electronics and carefully designed circuit boards
            provide reliable image quality while keeping the device small
            enough to fit within the transducer housing.
          </p>

          {/* CTA Button: View Specifications */}
          <div className="pt-2 min-[3800px]:pt-6">
            <Button
              variant="white"
              href="#specifications"
              showArrow
            >
              View Specifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
