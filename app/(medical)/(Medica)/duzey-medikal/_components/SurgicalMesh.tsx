"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function SurgicalMesh() {
  const features = [
    "Accelerates tissue healing thanks to its braided texture.",
    "Sterilized with EO.",
    "Biologically compliant.",
    "Flexible, robust and lucid.",
    "Provides ideal pore interval for tissue healing.",
    "High power and displosion resistance for sustainable support.",
    "Does not cluster and stays strong for long periods of time.",
  ];

  return (
    <section
      id="mesh-solutions"
      className="w-full py-16 xl:py-24 bg-[#EDF9FF] overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-[5px] bg-[var(--color-primary)] rounded-[10px]" />
            <Typography
              variant="h4"
              color="primary"
              className="uppercase tracking-wider !font-bold text-sm"
            >
              SURGICAL MESH SOLUTIONS
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="leading-snug">
            Designed for Healing. Built for Strength.
          </Typography>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-14 min-[3800px]:gap-24 w-full mt-2">
          {/* Video */}
          <div
            className="w-full xl:w-[60%] relative aspect-video overflow-hidden rounded-[20px] shadow-xl bg-black border border-gray-200"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="w-full xl:w-[40%] flex flex-col gap-6"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <Typography variant="p" color="muted" className="leading-relaxed">
              Duzey Polypropylene Mesh is designed to support tissue healing while providing flexibility, strength, and durable reinforcement. Its braided structure and optimized pore design help promote tissue integration and provide reliable support during the healing process
            </Typography>

            <div className="flex flex-col gap-3">
              <Typography variant="h3" color="dark" className="!font-bold">
                Features :
              </Typography>

              <ul className="space-y-3.5">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-2" />
                    <Typography variant="p" color="muted" className="leading-relaxed">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button
                text="Learn More"
                variant="primary"
                href="#mesh-solutions"
                showIcon={false}
                className="px-7 py-3 rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
