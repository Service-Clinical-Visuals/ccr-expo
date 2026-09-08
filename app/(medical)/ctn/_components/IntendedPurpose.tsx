"use client";

import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function IntendedPurpose() {
  return (
    <section className="w-full bg-[#3d57a5] text-white py-16 md:py-24 ">
      <div className="custom-container px-2 md:px-10">

        {/* Section Header: Centered Heading & Subtitle */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <h2 className="section-title font-semibold text-white tracking-tight">
            Intended Purpose &amp; Operation
          </h2>

          <p className="section-text text-white/90 mt-4 sm:mt-5 max-w-7xl leading-relaxed">
            The e°COMPRESSION™ boots are designed to optimise lower-limb recovery, enhance
            circulation, and support overall physical well-being. They operate using
            controlled pneumatic compression delivered through eight independent chambers per
            boot, which inflate in precise sequences based on the selected recovery mode
            (A–E).
          </p>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full h-px bg-white/20 mt-8 sm:mt-10 mb-8 sm:mb-12" />

        {/* Main Content Grid: Video Box (Left) & Precision Features (Right) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">

          {/* Left Column: Rounded Video Player Box */}
          <div className="xl:col-span-9">
            <div className="relative w-full aspect-video rounded-4xl overflow-hidden bg-black/40 flex items-center justify-center">

              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-0">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>


            </div>
          </div>

          {/* Right Column: Information & Bullet Points */}
          <div className="xl:col-span-3 flex flex-col justify-between">

            <div>
              {/* Title */}
              <h3 className="card-title font-semibold text-white leading-snug">
                Built For Precision, Durability, And Performance.
              </h3>

              {/* Description */}
              <p className="section-text text-white/90 mt-4 sm:mt-5 leading-relaxed">
                Users can choose their preferred pressure level (0–250 mmHg), session time
                (10–50 minutes), and compression pattern for a tailored experience.
              </p>

              {/* Feature Points with Checkmark Icons */}
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">

                {/* Feature 1 */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-white text-[#3d57a5] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="section-text text-white/90 leading-relaxed">
                    <strong className="text-white font-semibold">
                      Optimised Lower-Limb Recovery
                    </strong>{" "}
                    – Designed to support faster recovery and reduce feelings of muscle
                    fatigue and soreness.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-white text-[#3d57a5] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="section-text text-white/90 leading-relaxed">
                    <strong className="text-white font-semibold">
                      Enhanced Circulation
                    </strong>{" "}
                    – Controlled pneumatic compression helps promote healthy blood flow
                    throughout the lower limbs.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-white text-[#3d57a5] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="section-text text-white/90 leading-relaxed">
                    <strong className="text-white font-semibold">
                      Precise Sequential Compression
                    </strong>{" "}
                    – Chambers inflate in controlled sequences to provide consistent and
                    comfortable compression.
                  </p>
                </div>

              </div>

              {/* Secondary Description */}
              <p className="section-text text-white/90 mt-6 sm:mt-8 leading-relaxed">
                The compact control unit is battery powered, lightweight, and travel-ready,
                enabling seamless therapy in studios, clinics, gyms, and at home.
              </p>
            </div>

            {/* CTA Button: Discover e°COMPRESSION™ */}
            <div className="mt-8 sm:mt-10">
              <Button href="#discover-compression" variant="white">
                Discover e°COMPRESSION™
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
