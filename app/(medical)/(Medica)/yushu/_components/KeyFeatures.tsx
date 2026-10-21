"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function KeyFeatures() {
  const features = [
    "The Cover-ENT® device is practical and simple to use.",
    "The Cover-ENT® device is designed to fit easily and securely onto rigid endoscopes,",
    "The high transparency of the lens and its shape guarantee a clear and distortion-free view, even with different angles of the endoscopes.",
    "100% of the Cover-ENT® device production is subjected to a control test carried out to verify the optimal seal of all the components subjected to gluing.",
  ];

  return (
    <section
      id="features"
      className="w-full py-16 xl:py-24 bg-[#0B7A75] bg-[url('/medical/yushu/bg2.webp')] bg-cover bg-center min-[2500px]:bg-[position:calc(50%+140px)_center] min-[3800px]:bg-[position:calc(50%+240px)_center] bg-no-repeat relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Features Content Container */}
        <div className="features-layout-container flex flex-col items-center justify-center gap-6 w-full relative">
          {/* Left: Product Showcase Video */}
          <div
            className="features-video-col w-full relative z-20 aspect-video overflow-hidden rounded-2xl shadow-2xl order-2 shrink-0"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Feature Content Card */}
          <div
            className="features-card-col w-full z-10 bg-white rounded-2xl rounded-br-[70px] sm:rounded-br-[90px] p-6 sm:p-8 lg:p-9 xl:p-10 shadow-2xl order-1 flex flex-col gap-5 self-center shrink-0"
            data-aos="fade-left"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-[3px] bg-[var(--color-primary)] rounded-full"></div>
              <Typography
                variant="h4"
                color="primary"
                className="uppercase !font-semibold tracking-wider text-xs sm:text-sm"
              >
                COVER-ENT® | KEY FEATURES
              </Typography>
            </div>

            {/* Title */}
            <Typography variant="h2" color="dark" className="font-bold leading-tight xl:max-w-[95%]">
              KEY FEATURES OF THE COVER-ENT® DEVICE
            </Typography>

            {/* Feature Bullets */}
            <ul className="space-y-3.5">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <span className="w-2.5 h-2.5 bg-[var(--color-primary)] rounded-[2px] shrink-0 mt-1.5"></span>
                  <Typography
                    variant="p"
                    color="muted"
                    className="leading-relaxed text-sm sm:text-base font-normal"
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="pt-2">
              <Button text="Read More" variant="primary" href="#features" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
