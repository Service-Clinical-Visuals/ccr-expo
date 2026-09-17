"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function CentralVenousCatheters() {
  const features = [
    {
      title: "Flexible Polyurethane Construction",
      desc: "Thin-walled design supports high flow rates and comfortable handling.",
    },
    {
      title: "Soft & Atraumatic Tip",
      desc: "Designed for smooth, controlled catheter placement and reliable positioning.",
    },
    {
      title: "Radiopaque & Clearly Marked",
      desc: "Radiopaque material and centimetre markings help support accurate placement.",
    },
    {
      title: "Multiple Lumen Options",
      desc: "Versatile configurations accommodate different clinical requirements and infusion needs.",
    },
    {
      title: "Complete Seldinger Sets",
      desc: "Supplied with essential components for efficient placement and secure fixation.",
    },
  ];

  return (
    <section
      id="products"
      className="w-full bg-white py-16 sm:py-20 xl:py-24 overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-10 lg:gap-12 xl:gap-14 min-[3800px]:gap-20 w-full">
          {/* Left Column: Heading + 360 Video Player */}
          <div
            className="flex flex-col gap-6 w-full xl:w-[55%]"
            data-aos="fade-right"
          >
            {/* Tag + Title */}
            <div className="flex flex-col gap-3">
              <Typography
                variant="h4"
                color="primary"
                weight="semibold"
                className="uppercase tracking-[0.04em]"
              >
                CENTRAL VENOUS CATHETERS
              </Typography>
              <Typography variant="h2" color="dark">
                Precision Access Designed for Reliable Central Venous Care
              </Typography>
            </div>

            {/* 360 Degree Video Display */}
            <div className="relative aspect-video w-full rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-sm">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>

          {/* Right Column: 5 Feature Cards + Explore Button */}
          <div
            className="flex flex-col gap-3.5 sm:gap-4 w-full xl:w-[45%]"
            data-aos="fade-left"
          >
            {features.map((item, idx) => (
              <div
                key={idx}
                className="w-full bg-white border border-[#EC1C24] rounded-[16px] px-4 py-3.5 sm:px-5 sm:py-4 shadow-sm hover:shadow-md hover:border-[#b8061f] transition-all duration-300"
              >
                <Typography variant="p" color="muted" className="leading-relaxed">
                  <strong className="font-semibold text-[#202020]">
                    {item.title} —{" "}
                  </strong>
                  <span>{item.desc}</span>
                </Typography>
              </div>
            ))}

            {/* Explore Button */}
            <div className="pt-2">
              <Button variant="outline-red" href="#products">
                Explore Central Venous Catheters
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
