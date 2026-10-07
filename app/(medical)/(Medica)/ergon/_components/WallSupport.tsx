"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const features = [
  "Polypropylene Construction – Made from non-absorbable monofilament polypropylene.",
  "Abdominal Wall Repair – Suitable for abdominal wall defects requiring reinforcement.",
  "Surgical Versatility – Suitable for both open surgery and laparoscopic procedures.",
];

const WallSupport = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white pb-12 sm:pb-16 xl:py-24">
      {/* Top Textured Blue Background Band */}
      <div className="absolute top-0 left-0 w-full h-[220px] sm:h-[280px] md:h-[320px] min-[1501px]:h-[260px] min-[3800px]:h-[420px] bg-[#004D7C] bg-[url('/medical/ergon/bg.webp')] bg-cover bg-center pointer-events-none" />

      <div className="custom-container relative z-10 pt-6 sm:pt-10">
        {/* On Mobile & Tablets (< 1501px): Heading on top */}
        <div className="min-[1501px]:hidden text-center max-w-[800px] mx-auto mb-6 sm:mb-8" data-aos="fade-up">
          <Typography
            variant="h2"
            color="white"
            className="capitalize !font-semibold text-2xl sm:text-3xl text-white"
          >
            Reliable Wall Defect Support
          </Typography>
        </div>

        {/* Video and Content Layout */}
        <div className="flex flex-col min-[1501px]:flex-row items-center gap-8 lg:gap-12 w-full">
          {/* Video Player */}
          <div
            className="w-full min-[1501px]:w-[60%] relative aspect-video overflow-hidden rounded-[20px] md:rounded-[25px] min-[3800px]:rounded-[40px] shadow-[0px_4px_20px_rgba(0,0,0,0.18)] bg-black/10"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Card */}
          <div
            className="w-full min-[1501px]:w-[40%] bg-white rounded-[20px] min-[3800px]:rounded-[36px] p-6 sm:p-8 md:p-10 min-[3800px]:p-16 shadow-[0px_4px_16px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col justify-between gap-6"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-4">
              {/* Heading visible inside card on large screens */}
              <div className="hidden min-[1501px]:block">
                <Typography
                  variant="h2"
                  color="dark"
                  className="capitalize !font-semibold text-2xl sm:text-3xl min-[3800px]:text-5xl text-[#2A2A2A]"
                >
                  Reliable Wall Defect Support
                </Typography>
              </div>

              <Typography
                variant="p"
                color="muted"
                className="leading-relaxed text-sm sm:text-base min-[3800px]:text-2xl text-[#4A4A4A]"
              >
                Ergomesh® High Density is a standard, non-absorbable monofilament polypropylene mesh designed for the repair of abdominal and thoracic wall defects requiring reinforcement or interstitial filling.
              </Typography>

              {/* Bullet Features */}
              <div className="flex flex-col gap-3.5 my-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full bg-[#004D7C] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 min-[3800px]:w-6 min-[3800px]:h-6 text-white" strokeWidth={3} />
                    </div>
                    <Typography
                      variant="p"
                      color="muted"
                      className="text-sm sm:text-base min-[3800px]:text-2xl text-[#4A4A4A] leading-snug"
                    >
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>

              <Typography
                variant="p"
                color="muted"
                className="leading-relaxed text-sm sm:text-base min-[3800px]:text-2xl text-[#4A4A4A]"
              >
                Its versatile design supports use across different types of hernioplasty in both open surgery and laparoscopy.
              </Typography>
            </div>

            <div className="pt-2">
              <Button
                text="Explore Ergomesh®"
                href="#products"
                variant="primary"
                className="text-sm sm:text-base min-[3800px]:text-3xl min-[3800px]:!py-5 min-[3800px]:!px-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallSupport;
