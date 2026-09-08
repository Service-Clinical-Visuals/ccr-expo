"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { Check } from "lucide-react";

export default function WellnessLeaders() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container px-2 md:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14 items-center">

          {/* Left Column: Text, Value Propositions & CTA */}
          <div className="xl:col-span-5 flex flex-col justify-center">

            {/* Section Title */}
            <h2 className="section-title font-semibold tracking-tight">
              <span className="text-slate-900">Global Leaders In </span>
              <span className="text-[#2b7ab7]">Wellness Technology</span>
            </h2>

            {/* Narrative Paragraph 1 */}
            <p className="section-text text-slate-600 mt-4 sm:mt-5 leading-relaxed">
              CTN develops advanced recovery technologies including cryotherapy, red light
              therapy, mild hyperbaric oxygen therapy, and muscle stimulation. Engineered in
              Finland, our solutions combine smart automation, energy efficiency, and
              precision control to deliver reliable, high-performance results at scale.
            </p>

            {/* Narrative Paragraph 2 */}
            <p className="section-text text-slate-600 mt-3 sm:mt-4 leading-relaxed">
              Our technologies are designed for clinics, sports organizations, wellness
              businesses, and corporate environments seeking efficient, non-invasive
              performance and recovery solutions.
            </p>

            {/* Value Highlights with Blue Check Badges */}
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-4.5">

              {/* Highlight 1 */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#2b7ab7] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="section-text text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">
                    Advanced Recovery Technology
                  </strong>{" "}
                  – Innovative solutions designed to support modern recovery, wellness, and
                  performance.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#2b7ab7] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="section-text text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">
                    Mild Hyperbaric Oxygen Therapy
                  </strong>{" "}
                  – Innovative oxygen-based technology designed to complement modern recovery
                  routines.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#2b7ab7] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="section-text text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">
                    Engineered in Finland
                  </strong>{" "}
                  – Combining Finnish engineering expertise with precision, innovation, and
                  advanced technology.
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Button href="#solutions" variant="primary">
                Explore Our Solutions
              </Button>
            </div>

          </div>

          {/* Right Column: High-Resolution Clinic Imagery */}
          <div className="xl:col-span-7">
            <div className="relative w-full rounded-4xl overflow-hidden ">
              <Image
                src="/medical/ctn/wllness.png"
                alt="Global Leaders In Wellness Technology - CTN Innovation"
                width={960}
                height={640}
                className="w-full h-auto object-cover rounded-4xl"
                sizes="(max-width: 1280px) 100vw, 55vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
