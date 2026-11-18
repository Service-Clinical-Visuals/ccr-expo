"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const specs = [
  { label: "Plume Clearance Efficiency", value: "99.8%", fill: "100%", highlight: true },
  { label: "Tactile Drag Resistance", value: "< 0.12 N", fill: "15%", highlight: false },
];

const Deg360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full bg-[var(--color-quote-bg)] pt-10 sm:pt-12 xl:pt-14 min-[2500px]:pt-24 min-[3800px]:pt-32 pb-8 xl:pb-10 min-[2500px]:pb-16 min-[3800px]:pb-24 overflow-hidden"
    >
      {/* Header Row */}
      <div className="custom-container">
        <div
          className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 min-[2500px]:gap-5 xl:max-w-[64%]">
            <Eyebrow text="Interactive Spatial Inspection" />
            <Typography variant="h2" color="dark" className="leading-tight">
              Explore Every Angle of Smoke Evacuation
            </Typography>
            <Typography
              variant="p"
              color="dark"
              className="leading-[1.8] font-normal"
            >
              Explore patented ergonomic handpieces and active smoke evacuation
              systems through an interactive 360° experience. Examine precision
              micro-dissection junctions, ergonomic grip designs, and integrated
              internal fluid and smoke evacuation channels, showcasing the
              advanced engineering behind every component.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button text="Explore Product" />
          </div>
        </div>
      </div>

      {/* White Panel: bleeds 2.5vw past the content container on each side, content stays aligned */}
      <div className="custom-container">
        <div
          className="-mx-[2.5vw] px-[2.5vw] mt-5 sm:mt-6 min-[2500px]:mt-10 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] py-5 sm:py-7 min-[2500px]:py-12 min-[3800px]:py-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 xl:grid-cols-[57fr_43fr] gap-5 xl:gap-5 min-[2500px]:gap-8">
            {/* Video — large top-left / bottom-right corners */}
            <div className="relative w-full aspect-video overflow-hidden bg-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.08)] rounded-tl-[2.5rem] rounded-br-[2.5rem] xl:rounded-tl-[3.5rem] xl:rounded-br-[3.5rem] min-[2500px]:rounded-tl-[5rem] min-[2500px]:rounded-br-[5rem]">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Blueprint Card — large top-right / bottom-right corners */}
            <div className="bg-[var(--color-card-bg)] rounded-tl-[2.5rem] rounded-br-[2.5rem] xl:rounded-tl-[3.5rem] xl:rounded-br-[3.5rem] min-[2500px]:rounded-tl-[5rem] min-[2500px]:rounded-br-[5rem] px-5 py-6 sm:px-6 xl:px-5 xl:py-7 min-[2500px]:px-10 min-[2500px]:py-12 flex flex-col items-start justify-center">
              <Eyebrow text="Component Blueprint" />

              <Typography
                variant="h3"
                color="dark"
                className="leading-snug mt-3 min-[2500px]:mt-5"
              >
                Integrated Smoke Evac Port
              </Typography>

              <Typography
                variant="p"
                color="dark"
                className="leading-[1.8] font-normal mt-2.5 min-[2500px]:mt-4"
              >
                Designed to follow the needle&apos;s trajectory, the low-profile
                aperture captures surgical smoke at its source within 2.5
                milliseconds of tissue vaporisation, helping minimise smoke
                dispersion and maintain a clearer surgical field. This helps
                reduce airborne contaminants while supporting improved
                visibility and a more controlled operating environment.
              </Typography>

              {/* Spec Bars */}
              <div className="w-full xl:max-w-[85%] flex flex-col gap-3 min-[2500px]:gap-5 mt-5 min-[2500px]:mt-8">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="w-full bg-white border border-[#9FC9E6] px-2.5 pt-2 pb-2.5 min-[2500px]:px-4 min-[2500px]:pt-3 min-[2500px]:pb-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="uppercase tracking-wider font-medium text-[#121C22] !text-[0.6875rem] min-[2500px]:!text-[1.1rem] min-[3800px]:!text-[1.5rem]">
                        {spec.label}
                      </span>
                      <span className={`font-semibold tracking-wider whitespace-nowrap ${spec.highlight ? "text-[var(--color-navy)]" : "text-[#121C22]"} !text-[0.6875rem] min-[2500px]:!text-[1.1rem] min-[3800px]:!text-[1.5rem]`}>
                        {spec.value}
                      </span>
                    </div>
                    <div className="mt-1.5 h-[3px] min-[2500px]:h-[5px] w-full bg-[#E6EEF4]">
                      <div
                        className="h-full bg-[var(--color-navy)]"
                        style={{ width: spec.fill }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 min-[2500px]:mt-10">
                <Button text="Launch Full 360° Simulation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deg360;
