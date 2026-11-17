"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const specs = [
  { label: "Plume Clearance Efficiency", value: "99.9%", fill: "99.9%" },
  { label: "Tactile Drag Resistance", value: "< 0.12 N", fill: "88%" },
];

const Deg360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full bg-[var(--color-quote-bg)] pt-16 xl:pt-24 min-[2500px]:pt-36 min-[3800px]:pt-48 pb-16 xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48 overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-8 xl:gap-10 min-[2500px]:gap-16">
        {/* Header Row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 max-w-4xl xl:max-w-[70%]">
            <Eyebrow text="Interactive Spatial Inspection" />
            <Typography variant="h2" color="dark" className="leading-tight">
              Explore Every Angle of Smoke Evacuation
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed font-normal">
              Explore patented ergonomic handpieces and active smoke evacuation systems
              through an interactive 360° experience. Examine precision micro-dissection
              junctions, ergonomic grip designs, and integrated internal fluid and smoke
              evacuation channels, showcasing the advanced engineering behind every
              component.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button text="Explore Product" />
          </div>
        </div>

        {/* White Panel: 360 Video + Blueprint Card */}
        <div
          className="w-full bg-white rounded-2xl min-[2500px]:rounded-3xl shadow-sm p-4 sm:p-6 xl:p-8 min-[2500px]:p-12 min-[3800px]:p-16 grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 min-[2500px]:gap-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Video */}
          <div className="lg:col-span-7 xl:col-span-8 relative w-full aspect-video lg:aspect-auto lg:min-h-[420px] min-[2500px]:min-h-[700px] rounded-2xl min-[2500px]:rounded-3xl overflow-hidden bg-gray-100">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Blueprint Card */}
          <div className="lg:col-span-5 xl:col-span-4 bg-[var(--color-card-bg)] border border-[#D5E8F5] rounded-2xl min-[2500px]:rounded-3xl p-5 sm:p-6 xl:p-8 min-[2500px]:p-12 flex flex-col items-start gap-4 min-[2500px]:gap-6">
            <Eyebrow text="Component Blueprint" />

            <Typography variant="h3" color="dark" className="leading-snug">
              Integrated Smoke Evac Port
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed font-normal">
              Designed to follow the needle&apos;s trajectory, the low-profile aperture
              captures surgical smoke at its source within 2.5 millimeters of tissue
              vaporization, helping minimize smoke dispersion and maintain a clearer
              surgical field. This helps reduce airborne contaminants while supporting
              improved visibility and a more controlled operating environment.
            </Typography>

            {/* Spec Bars */}
            <div className="w-full flex flex-col gap-3 min-[2500px]:gap-5 pt-1">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="w-full bg-white border border-[#D5E8F5] rounded-md px-3 py-2.5 min-[2500px]:px-5 min-[2500px]:py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="uppercase tracking-wider font-semibold text-[#121C22]">
                      {spec.label}
                    </span>
                    <span className="font-semibold text-[var(--color-secondary)] whitespace-nowrap">
                      {spec.value}
                    </span>
                  </div>
                  <div className="mt-2 h-[3px] min-[2500px]:h-[5px] w-full bg-[#D5E8F5] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--color-secondary)] rounded-full"
                      style={{ width: spec.fill }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button text="Launch Full 360° Simulation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deg360;
