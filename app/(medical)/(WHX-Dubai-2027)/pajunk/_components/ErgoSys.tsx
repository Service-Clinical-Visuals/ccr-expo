/**
 * ErgoSys Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Background & Styling:
 *    - Soft mint background `#D9E2DE`.
 * 2. Two-Column Split Layout:
 *    - Left Column: Header, Key Clinical Takeaways Card (with green circle checkmarks), and CTA button.
 *    - Right Column: Video container using `DynamicVideoPlayer` with `type="short-1"`.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const takeaways = [
  {
    title: "Zero Hand Fatigue in 4+ Hour Surgeries",
    description: "Ergonomic design reduces wrist strain and ensures stable handling.",
  },
  {
    title: "Immediate Tactile Sensitivity",
    description: "Direct mechanical rods provide precise tactile feedback, helping surgeons detect subtle tissue changes.",
  },
  {
    title: "Rapid Single-Hand Rotational Control",
    description: "The index-finger dial enables 360° jaw rotation while maintaining a secure grip on delicate tissues.",
  },
];

const ErgoSys = () => {
  return (
    <section id="ergosys" className="w-full py-16 xl:py-24 bg-[#D9E2DE] overflow-hidden">
      <div className="custom-container">
        {/* Two-Column Layout: Tablet stacked up to 1300px, row from 1301px */}
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-8 min-[1301px]:gap-10 w-full">

          {/* Left Column (40% on desktop): Heading, Clinical Takeaways Card & CTA */}
          <div className="w-full min-[1301px]:w-[40%] flex flex-col gap-6" data-aos="fade-right">

            <div className="space-y-2">
              <Typography
                variant="tag-badge"
                color="primary"
                className="tracking-widest text-xs sm:text-sm font-semibold !text-[#144835]"
              >
                PRECISION IN MINIMALLY INVASIVE SURGERY
              </Typography>

              <Typography
                variant="h2"
                color="dark"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000]"
              >
                Experience Precision. Discover ErgoSys.
              </Typography>
            </div>

            {/* White Takeaways Card */}
            <div className="bg-white rounded-[6px] p-6 sm:p-8 shadow-sm space-y-5 border border-gray-100">
              <Typography
                variant="h3"
                color="dark"
                className="text-lg sm:text-xl font-bold text-[#111111]"
              >
                Key Clinical Takeaways
              </Typography>

              <div className="space-y-4">
                {takeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 2k:gap-6 4k:gap-8">
                    <div className="w-6 h-6 2k:w-11 2k:h-11 4k:w-16 4k:h-16 rounded-full bg-[#E4F8EC] flex items-center justify-center shrink-0 mt-0.5 2k:mt-1 text-[#003121] shadow-xs">
                      <Check className="w-3.5 h-3.5 2k:w-6 2k:h-6 4k:w-9 4k:h-9" strokeWidth={3} />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm sm:text-base font-semibold text-[#111111]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#404944]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                text="Explore Products"
                variant="primary"
                href="#products"
                showIcon={true}
                className="!py-3 !px-7 font-semibold"
              />
            </div>

          </div>

          {/* Right Column (60% on desktop): Video Container */}
          <div className="w-full min-[1301px]:w-[60%] self-center" data-aos="fade-left">
            <div className="relative w-full aspect-video rounded-[6px] overflow-hidden shadow-xl border border-gray-300/80 bg-black/40">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full aspect-video object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ErgoSys;

