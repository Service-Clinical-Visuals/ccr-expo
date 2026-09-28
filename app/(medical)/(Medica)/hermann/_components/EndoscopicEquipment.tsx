"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function EndoscopicEquipment() {
  const highlights = [
    {
      title: "Advanced Imaging",
      description: "High-resolution cameras support detailed visualization.",
    },
    {
      title: "Easy Maintenance",
      description: "Designed for convenient operation and minimal maintenance.",
    },
    {
      title: "Complete Equipment Range",
      description: "Includes cameras, light sources and shaver systems.",
    },
  ];

  return (
    <section id="equipment" className="w-full py-14 sm:py-18 lg:py-24 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1500px]:flex-row items-center gap-6 sm:gap-8 lg:gap-10 min-[1500px]:gap-10 min-[1600px]:gap-12 w-full">
          {/* Mobile & Tablet Heading (First on screens up to 1500px) */}
          <div className="block min-[1500px]:hidden w-full space-y-1" data-aos="fade-up">
            <Typography variant="h3" className="!font-semibold leading-snug">
              Comprehensive Endoscopic{" "}
              <span style={{ fontSize: "inherit", fontFamily: "inherit", color: "#C00D0D" }}>
                Equipment
              </span>
            </Typography>
          </div>

          {/* Video Column (Next on screens up to 1500px, Left 75% above 1500px) */}
          <div
            className="w-full min-[1500px]:w-[75%] relative aspect-video rounded-[24px] sm:rounded-[30px] min-[3800px]:rounded-[48px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-black/5 shrink-0"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Information, Features & CTA (Full width up to 1500px, 25% above 1500px) */}
          <div
            className="w-full min-[1500px]:w-[25%] flex flex-col justify-between space-y-4 lg:space-y-5"
            data-aos="fade-left"
          >
            {/* Desktop Heading (Hidden on screens up to 1500px) */}
            <div className="hidden min-[1500px]:block space-y-1">
              <Typography variant="h3" className="!font-semibold leading-snug">
                Comprehensive Endoscopic<br />
                <span style={{ fontSize: "inherit", fontFamily: "inherit", color: "#C00D0D" }}>
                  Equipment
                </span>
              </Typography>
            </div>

            {/* Top Divider */}
            <div className="w-full h-px bg-[rgba(0,0,0,0.18)]" />

            {/* Description */}
            <Typography variant="p" color="muted" className="text-[#4A4A4A] leading-relaxed">
              Our extensive endoscopic range combines surgical instruments and advanced devices for laparoscopy, urology, arthroscopy, and electrosurgery.
            </Typography>

            {/* Key Feature Checkpoints */}
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
              From high-resolution cameras and modern light sources to insufflators and shaver systems, our solutions are designed to support efficient procedures with practical operation and minimal maintenance.
            </Typography>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="View Product Details"
                variant="primary"
                href="#equipment"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
