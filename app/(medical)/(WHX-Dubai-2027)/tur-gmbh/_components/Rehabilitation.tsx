"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Rehabilitation = () => {
  const advantages = [
    "Hands-Free Operation – Enables static treatment using an optional support arm.",
    "Intelligent Safety Monitoring – Provides real-time temperature control and warning alerts.",
    "Cost-Effective Performance – Operates without consumables for economical use.",
  ];

  return (
    <section id="rehabilitation" className="relative w-full overflow-hidden bg-white">
      {/* Top Blue Block: houses header and 25% of the content cards */}
      <div className="w-full bg-[var(--color-secondary)] pt-12 sm:pt-16 lg:pt-20 pb-28 sm:pb-36 lg:pb-48 min-[2500px]:pb-64 min-[3800px]:pb-96">
        <div className="custom-container flex flex-col items-center">
          {/* Header */}
          <div
            className="flex flex-col items-center text-center gap-4 sm:gap-6 xl:max-w-[70%] w-full mx-auto text-white"
            data-aos="fade-up"
          >
            <Typography variant="h2" color="white" className="capitalize !font-semibold text-center">
              TUR CRYOTUR STREAM For Advanced Rehabilitation
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="leading-relaxed sm:leading-[1.6] text-white/90 text-center"
            >
              The TUR CRYOTUR STREAM combines advanced airflow cooling and intelligent temperature
              control to deliver contact-free cryotherapy. Its compressor-based system cools air to
              -35°C for controlled treatment through an ergonomic handpiece.
            </Typography>
          </div>
        </div>
      </div>

      {/* Content Row: pulled up so 25% sits inside the blue block and 75% is outside on white */}
      <div className="custom-container -mt-20 sm:-mt-24 lg:-mt-32 min-[2500px]:-mt-48 min-[3800px]:-mt-64 relative z-10 pb-16 sm:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-48">
        <div className="flex flex-col min-[1500px]:flex-row items-stretch gap-6 sm:gap-8 w-full">
          {/* Left Column: Video strictly aspect-video matching Deleo pattern */}
          <div
            className="w-full min-[1500px]:w-[72%] rounded-2xl lg:rounded-[30px] min-[3800px]:rounded-[48px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] relative aspect-video bg-white"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Additional Advantages Card (vertically centered content) */}
          <div
            className="w-full min-[1500px]:w-[28%] bg-white rounded-[20px] lg:rounded-[24px] min-[3800px]:rounded-[36px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-6 sm:p-7 lg:p-8 min-[2500px]:p-10 min-[3800px]:p-14 flex flex-col justify-center gap-5 sm:gap-6 border border-gray-100"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-3.5 sm:gap-4">
              <Typography
                variant="h3"
                color="primary"
                className="capitalize !font-semibold text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl"
              >
                Additional Advantages
              </Typography>

              <div className="w-full h-px bg-black/15" />

              <Typography variant="p" color="muted" className="leading-relaxed">
                Developed for physiotherapy and rehabilitation professionals, the system offers two
                operating modes: constant dosage and constant temperature.
              </Typography>

              <div className="flex flex-col gap-3 my-1">
                {advantages.map((adv, index) => (
                  <div key={index} className="flex items-start gap-3 min-[3800px]:gap-6">
                    <CheckCircle2 className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <Typography variant="p" color="muted" className="leading-relaxed">
                      {adv}
                    </Typography>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-black/15" />

              <Typography variant="p" color="muted" className="leading-relaxed">
                Its integrated infrared sensor continuously monitors treatment temperature, helping
                professionals maintain controlled therapy conditions.
              </Typography>
            </div>

            <div className="pt-2">
              <Button
                text="View Product Details"
                href="#rehabilitation"
                variant="primary"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rehabilitation;
