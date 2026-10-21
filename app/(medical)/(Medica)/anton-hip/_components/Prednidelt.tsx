"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Prednidelt() {
  return (
    <section id="manufacturing" className="w-full py-16 md:py-24 min-[3800px]:py-36 bg-[var(--color-secondary)] text-white overflow-hidden relative">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10  min-[3800px]:gap-20 items-center">
          {/* Left Column: Content (5 cols on desktop, order-1 on mobile/tablet) */}
          <div
            className="flex flex-col items-start order-1 lg:order-1 lg:col-span-4"
            data-aos="fade-right"
          >
            {/* Section Heading */}
            <Typography variant="h2" color="white" weight="bold">
              From Advanced Design to Precision Manufacturing
            </Typography>

            {/* Description */}
            <Typography
              variant="p"
              color="white"
              className="text-gray-300 mt-3.5 sm:mt-4 min-[3800px]:mt-6 mb-7 sm:mb-8 min-[3800px]:mb-12 leading-relaxed"
            >
              Discover how advanced manufacturing technology and meticulous quality control shape Anton Hipp&apos;s facial implant solutions. From material selection and precision machining to detailed surface finishing and rigorous inspection, every stage reflects a commitment to accuracy, consistency, and reliability. Explore the production process and engineering expertise behind implants developed for complex maxillofacial applications, designed to meet specialized surgical requirements while maintaining high standards of quality and performance.
            </Typography>

            {/* Action Button */}
            <div>
              <Button
                text="Explore Facial Implants"
                href="#products"
                variant="primary"
                showArrow={true}
              />
            </div>
          </div>

          {/* Right Column: Video (7 cols on desktop, order-2 on mobile/tablet) */}
          <div
            className="w-full relative order-2 lg:order-2 lg:col-span-8 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full aspect-video rounded-xl min-[3800px]:rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 bg-[#181818] flex items-center justify-center group min-h-[280px]">
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
