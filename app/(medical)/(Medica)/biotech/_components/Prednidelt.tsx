"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Prednidelt() {
  return (
    <section
      id="pharmaceutical"
      className="w-full py-16 lg:py-24 bg-[#003470] text-white overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-6 sm:gap-8 lg:gap-12">
        {/* Mobile & Tablet Heading Block (visible up to 1025px, hidden on desktop) */}
        <div className="block lg:hidden" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-3">
            Comprehensive Size Range
          </Typography>
          <div className="w-[246px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] max-w-[60%] h-[2px] min-[2500px]:h-[3px] min-[3800px]:h-[4px] bg-white rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Media Block: 16:9 Aspect Video */}
          <div
            className="lg:col-span-7 w-full aspect-video relative rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-black/40"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            {/* Desktop Heading Block (hidden on mobile/tablet up to 1025px, visible on desktop) */}
            <div className="hidden lg:block">
              <Typography variant="h2" color="white" className="mb-3">
                Comprehensive Size Range
              </Typography>
              <div className="w-[246px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] max-w-[60%] h-[2px] min-[2500px]:h-[3px] min-[3800px]:h-[4px] bg-white rounded-full" />
            </div>

            <Typography variant="p" color="white" className="text-white/90 leading-relaxed">
              Designed to accommodate diverse surgical requirements, the BA Hip Stem offers cemented sizes ranging from 6.25–20.00 mm in 1.25 mm increments. This range provides greater flexibility in selecting the appropriate stem size and preferred cement mantle thickness. Additional sizing options are also available for narrow femora and revision procedures.
            </Typography>

            <Typography variant="p" color="white" className="text-white/90 leading-relaxed">
              The universal instrumentation also supports line-to-line rasping for uncemented stems, helping achieve initial stability and an optimal fit. The uncemented version is available in sizes ranging from 6.25–20.00 mm, with 1.25 mm increments. A special 6.25 mm size is available for narrow femora, including cases such as hip dysplasia, with additional revision sizes also available.
            </Typography>

            <div className="pt-2">
              <Button
                text="View All"
                href="#catalog"
                variant="primary"
                showIcon={false}
                className="w-[123px] h-[42px] min-[2500px]:w-[180px] min-[2500px]:h-[56px] min-[3800px]:w-[240px] min-[3800px]:h-[72px] px-0 flex items-center justify-center font-[var(--font-primary)] font-semibold text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[28px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
