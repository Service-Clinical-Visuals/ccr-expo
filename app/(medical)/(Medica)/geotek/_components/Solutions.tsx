"use client";

import React from "react";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Solutions() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const featurePoints = [
    {
      id: 1,
      text: "High Kink Resistance – Supports reliable drainage and helps maintain proper stent shape and stability.",
    },
    {
      id: 2,
      text: "Multiple Configurations – Available with open or closed tips, with or without guidewires and sutures.",
    },
  ];

  return (
    <section
      id="solutions"
      className="w-full relative py-14 sm:py-20 md:py-24 bg-[#468A28] text-white overflow-hidden"
      style={{
        backgroundImage: "url('/medical/geotek/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Brand Green Tint Overlay */}
      <div className="absolute inset-0 bg-[#468A28]/85 pointer-events-none" />

      <div className="custom-container mx-auto relative z-10">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Content Column (Appears FIRST on Mobile/Tablet, SECOND on Desktop) */}
          <div
            className="w-full min-[1200px]:col-span-5 flex flex-col items-start space-y-5 order-1 min-[1200px]:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* Title */}
            <h2 className="font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] leading-[150%] text-white capitalize">
              Reliable Ureteral Stents
            </h2>

            {/* Divider Line 1 */}
            <div className="w-full h-px bg-white/50" />

            {/* Introductory Description */}
            <p className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-white w-full">
              The Double J Ureteral Stent Set is designed to provide effective temporary internal
              drainage from the ureteropelvic junction to the bladder.
            </p>

            {/* Check Bullet Points */}
            <div className="space-y-4 w-full">
              {featurePoints.map((point) => (
                <div key={point.id} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={14} className="text-[#468A28] stroke-[3]" />
                  </div>
                  <p className="font-baloo font-medium text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[150%] text-white">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider Line 2 */}
            <div className="w-full h-px bg-white/50" />

            {/* Secondary Description */}
            <p className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-white w-full">
              The stent uses radiopaque materials for clear visibility during imaging and is
              available in multiple configurations to meet different clinical requirements and
              procedural needs.
            </p>

            {/* White CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Solutions"
                variant="white"
                onClick={scrollToContact}
                className="h-[43px] px-6 py-2.5 text-[17px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
              />
            </div>
          </div>

          {/* Video Column (Appears SECOND on Mobile/Tablet, FIRST on Desktop) - Controlled via grid columns */}
          <div
            className="
              w-full min-[1200px]:col-span-7
              aspect-video
              rounded-[28px] sm:rounded-[40px] md:rounded-[50px]
              overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
              relative bg-white/10
              order-2 min-[1200px]:order-1
            "
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}