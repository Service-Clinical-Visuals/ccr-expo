"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function EndoscopicSolutions() {
  const highlights = [
    {
      title: "Easy Operation",
      description: "Designed for straightforward handling and convenient everyday use.",
    },
    {
      title: "Minimal Maintenance",
      description: "Requires limited maintenance for practical and efficient operation.",
    },
  ];

  return (
    <section id="solutions" className="w-full py-14 sm:py-18 lg:py-24 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">
        {/* Top Header Row */}
        <div
          className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full max-w-[90%] xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" className="!font-semibold capitalize leading-tight xl:max-w-[80%]">
            Advanced{" "}
            <span style={{ fontSize: "inherit", fontFamily: "inherit", color: "#C00D0D" }}>
              Endoscopic Solutions
            </span>
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-[#4A4A4A] leading-relaxed w-full xl:max-w-[80%] mx-auto"
          >
            Our endoscopic portfolio includes a wide range of devices designed to support laparoscopy, urology, arthroscopy, and electrosurgery. With different configurations and practical features, our systems support diverse clinical environments.
          </Typography>
        </div>

        {/* Content Body: Left Video & Right Highlights (Stacked up to 1500px, 75% | 25% above 1500px) */}
        <div className="flex flex-col min-[1500px]:flex-row items-center gap-8 lg:gap-10 min-[1500px]:gap-10 min-[1600px]:gap-12 w-full">
          {/* Left Column: Short Video 2 (Full width up to 1500px, 75% above 1500px) */}
          <div
            className="w-full min-[1500px]:w-[75%] relative aspect-video rounded-[24px] sm:rounded-[30px] min-[3800px]:rounded-[48px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-black/5 shrink-0"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Features & CTA (Full width up to 1500px, 25% above 1500px) */}
          <div
            className="w-full min-[1500px]:w-[25%] flex flex-col justify-between space-y-4 lg:space-y-5"
            data-aos="fade-left"
          >
            {/* Heading */}
            <Typography variant="h3" className="!font-semibold text-[var(--color-secondary)] leading-snug">
              Practical & Easy-To-Use Systems
            </Typography>

            {/* Top Divider */}
            <div className="w-full h-px bg-[rgba(0,0,0,0.18)]" />

            {/* Description */}
            <Typography variant="p" color="muted" className="text-[#4A4A4A] leading-relaxed">
              Our endoscopic devices are designed to combine ease of use, efficient operation, and practical functionality across different clinical environments.
            </Typography>

            {/* Feature Checkpoints */}
            <div className="space-y-3.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 min-[3800px]:w-9 min-[3800px]:h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[3800px]:w-6 min-[3800px]:h-6 stroke-[3]" />
                  </div>
                  <Typography variant="p" color="muted" className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                    {item.title} – {item.description}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-[rgba(0,0,0,0.18)]" />

            {/* Summary */}
            <Typography variant="p" color="muted" className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
              With user-friendly designs and minimal maintenance requirements, our systems are suitable for private practices as well as busy operating rooms, helping healthcare professionals work efficiently during various endoscopic procedures.
            </Typography>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Specifications"
                variant="primary"
                href="#solutions"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
