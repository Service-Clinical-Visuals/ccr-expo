"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const VersatileCare = () => {
  const points = [
    {
      title: "Multiple Wavelengths",
      text: "Complementary wavelengths support diverse dermatological and aesthetic treatments.",
    },
    {
      title: "Intuitive Operation",
      text: "A user-friendly interface simplifies device operation, helping clinicians manage procedures efficiently.",
    },
    {
      title: "High-Precision Technology",
      text: "Advanced laser technology supports precise treatment delivery with minimal tissue invasiveness.",
    },
  ];

  return (
    <section className="w-full py-16 xl:py-24 bg-[#121111] overflow-hidden">
      <div className="custom-container">
        {/* Mobile/Tablet Header */}
        <div className="block min-[1501px]:hidden w-full mb-6" data-aos="fade-up">
          <Typography variant="h3" color="white" className="tracking-[0.8px] font-normal text-2xl sm:text-3xl">
            Smart Technology, Versatile Care
          </Typography>
        </div>

        <div className="flex flex-col min-[1501px]:flex-row items-center gap-6 min-[1501px]:gap-10 w-full">
          {/* Left Column: Video Player Container */}
          <div
            className="w-full min-[1501px]:w-[65%] relative aspect-video overflow-hidden rounded-[20px] border border-white/20 bg-black shadow-2xl"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Feature Content Card */}
          <div
            className="w-full min-[1501px]:w-[35%] bg-[#272727] rounded-[20px] p-6 sm:p-7 md:p-8 border border-white/25 shadow-xl flex flex-col gap-4 xl:gap-5"
            data-aos="fade-left"
          >
            {/* Desktop Header */}
            <div className="hidden min-[1501px]:block">
              <Typography variant="h3" color="white" className="tracking-[0.8px] font-normal">
                Smart Technology, Versatile Care
              </Typography>
            </div>

            <div className="hidden min-[1501px]:block w-full h-px bg-white/25"></div>

            <Typography variant="p" color="white" className="leading-relaxed font-normal">
              SMARTMDR combines advanced diode laser technology with multiple wavelengths and
              customizable treatment protocols to support a broad range of dermatological and
              aesthetic procedures
            </Typography>

            {/* Bullets with Checkmark (Black icon color) */}
            <ul className="space-y-3.5 my-1">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-black" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="white" className="leading-snug font-normal">
                    <strong className="text-white font-medium">{pt.title} – </strong>
                    {pt.text}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="w-full h-px bg-white/25"></div>

            <Typography variant="p" color="white" className="leading-relaxed font-normal text-white/80">
              Designed for modern clinical environments, it brings together intuitive operation,
              precision, and versatility to help healthcare professionals manage diverse treatment
              requirements efficiently.
            </Typography>

            <div className="pt-2">
              <Button text="Discover SMARTMDR" href="#products" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersatileCare;
