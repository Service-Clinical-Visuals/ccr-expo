"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const FEATURES = [
  {
    title: "Rectangular Configuration",
    text: "Available in rectangular formats for different applications.",
  },
  {
    title: "Flexible Construction",
    text: "Provides versatility during preparation and placement.",
  },
  {
    title: "Multiple Characteristics",
    text: "Mesh options can combine different weaves, thicknesses, and weights.",
  },
];

export default function CustomisableDesign() {
  return (
    <section id="mesh-options" className="relative isolate pb-14 sm:pb-16 xl:pb-20">
      {/* Heading on full-width blue band */}
      <div className="bg-[#0055A6] pt-10 sm:pt-12 pb-8 sm:pb-10">
        <div className="custom-container xl:px-6 2xl:px-8 grid grid-cols-12" data-aos="fade-up">
          <div className="col-span-12 min-[1025px]:col-start-2 min-[1025px]:col-span-10 text-center">
            <h2 className="section-title font-semibold text-white">
              Customisable Design For Surgical Applications
            </h2>
            <p className="section-text mt-3 text-white">
              Hermesh 3 combines a flexible macroporous structure with the versatility of a flat mesh
              format. Its rectangular and square configurations allow the prosthesis to be customised
              according to the size of the hernia and the area requiring reinforcement, supporting
              different surgical approaches.
            </p>
          </div>
        </div>
      </div>

      {/* Card + Video (top part sits on the blue band) */}
      <div className="relative">
        <div
          className="absolute inset-x-0 top-0 h-16 sm:h-20 min-[1025px]:h-[23%] bg-[#0055A6] -z-10"
          aria-hidden="true"
        />

        <div className="custom-container xl:px-6 2xl:px-8 grid grid-cols-12 gap-y-10 gap-x-0 min-[1025px]:gap-x-10 xl:gap-12 items-stretch">
          {/* Left: Design Card */}
          <div className="col-span-12 min-[1025px]:col-span-4 " data-aos="fade-right">
            <div className="h-full rounded-tl-3xl rounded-br-3xl bg-white border border-slate-100 shadow-[0_6px_20px_rgba(0,0,0,0.14)] p-6 sm:p-7 xl:p-8">
              <h3 className="card-title font-semibold ">
                Adaptable Design For Surgical Needs
              </h3>

              <div className="w-full h-px bg-slate-200 my-4 sm:my-5" />

              <p className="card-text ">
                Hermesh 3 flat meshes give surgeons the flexibility to customise the prosthesis
                according to the size and location of the hernia.
              </p>

              <ul className="mt-5 space-y-4">
                {FEATURES.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0055A6] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <p className="card-text ">
                      {feature.title} – {feature.text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-slate-200 my-5 sm:my-6" />

              <p className="card-text ">
                Available in square and rectangular formats, the mesh can be prepared to meet
                different reinforcement requirements.
              </p>

              <div className="mt-6 sm:mt-7">
                <Button href="" variant="primary">
                  View Mesh Options
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div
            className="col-span-12 min-[1025px]:col-span-8"
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div className="relative w-full h-full aspect-video rounded-tl-3xl rounded-br-3xl overflow-hidden bg-slate-100 ">
              <DynamicVideoPlayer
                type="short-3"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
