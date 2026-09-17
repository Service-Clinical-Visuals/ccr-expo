"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

export default function PrecisionVenousAccess() {
  const features = [
    {
      title: "Flexible Polyurethane Design",
      desc: "Thin-walled construction delivers flexibility, high flow rates, and dependable catheter performance.",
    },
    {
      title: "Reliable Catheter Placement",
      desc: "Soft atraumatic tips, radiopacity, and centimeter markings support controlled and accurate positioning.",
    },
    {
      title: "Versatile Clinical Applications",
      desc: "Multiple lumen configurations accommodate infusion, monitoring, nutrition, sampling, and high-volume fluid administration.",
    },
  ];

  return (
    <section
      id="precision-access"
      className="w-full bg-[#FAFAFA] py-16 sm:py-20 xl:py-24 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            weight="semibold"
            className="uppercase tracking-[0.04em]"
          >
            PRECISION VENOUS ACCESS
          </Typography>

          <Typography variant="h2" color="dark">
            Advanced Catheter Design for Versatile Clinical Applications
          </Typography>
        </div>

        {/* Two-Column Content: Left Video + Right Features */}
        <div className="mt-12 sm:mt-14 flex flex-col xl:flex-row items-center gap-10 lg:gap-12 xl:gap-14 min-[3800px]:gap-20 w-full">
          {/* Left Column: 01 Video Display (Order 2 on mobile, Order 1 on Desktop) */}
          <div
            className="w-full xl:w-[58%] relative aspect-video rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-200 shadow-sm order-2 xl:order-1"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
            />
          </div>

          {/* Right Column: Intro Paragraph + 3 Red Arrow-Up-Right Features (Order 1 on mobile, Order 2 on Desktop) */}
          <div
            className="flex flex-col gap-6 w-full xl:w-[42%] order-1 xl:order-2"
            data-aos="fade-left"
          >
            {/* Overview Paragraph */}
            <Typography variant="p" color="muted" className="leading-relaxed">
              INTRA Central Venous Catheters combine highly flexible, thin-walled polyurethane with a soft-tip design, radiopaque construction, centimetre markings, and secure fixation for dependable catheter placement and handling. Available in different lumen configurations, they support a range of clinical requirements including medication infusion, CVP monitoring, parenteral nutrition, high-flow fluid administration, blood sampling, and blood-product delivery.
            </Typography>

            {/* 3 Bullet Features with Red ↗ */}
            <div className="flex flex-col gap-4 sm:gap-5 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                  <ArrowUpRight
                    className="w-5 h-5 text-[#EC1C24] shrink-0 mt-1"
                    strokeWidth={2.5}
                  />
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    <strong className="font-semibold text-[#202020]">
                      {feat.title} —{" "}
                    </strong>
                    <span>{feat.desc}</span>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
