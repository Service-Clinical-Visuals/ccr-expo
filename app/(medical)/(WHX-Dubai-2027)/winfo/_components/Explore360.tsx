"use client";

import React from "react";
import { Asterisk } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { BarHeading } from "./SectionHeading";

const POINTS = [
  "Precision Engineering For Advanced Orthopaedic Implants",
  "High-Quality Materials For Advanced Orthopaedic Implants",
  "Specially Designed For Diverse Orthopaedic Surgical Applications",
];

export default function Explore360() {
  return (
    <section className="w-full bg-[var(--soft)] section-py">
      <div className="custom-container">
        {/* Heading row */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[51%_1fr] gap-6 lg:gap-[2vw] items-center pb-8 xl:pb-[2vw] border-b border-[#DCDDE0]"
          data-aos="fade-up"
        >
          <BarHeading eyebrow="Explore In 360°" title="Advancing Precision in Surgical Solutions" />
          <p className="section-text font-body text-[var(--body)]">
            Explore Our Orthopaedic Implants In 360°, Highlighting Their Precision Engineering, Structural Design,
            Quality And Key Features For Modern Orthopaedic Applications.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[65.8%_1fr] gap-10 xl:gap-[2.1vw] items-center xl:items-stretch mt-10 xl:mt-[2vw]">
          {/* 360 video: 16:9 when stacked; from xl it takes the exact height of the text column */}
          <div
            className="relative w-full aspect-video xl:aspect-auto overflow-hidden"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div data-aos="fade-left" data-aos-delay="150">
            <div className="rounded-[8px] border-2 border-[var(--border)] p-6 sm:p-8 xl:px-[1.9vw] xl:py-[2.3vw]">
              <p className="section-text font-body text-[var(--body)] mb-6 xl:mb-[1.4vw]">
                Designed To Support A Wide Range Of Modern Orthopaedic Procedures, Our Implants Focus On Precision
                Engineering, Functional Design And Structural Reliability. Every Detail Is Developed With Careful
                Attention To Quality, Accuracy And Performance, Helping Surgical Professionals Explore Implant
                Solutions Suited To Diverse Orthopaedic Applications.
              </p>
              <ul className="flex flex-col gap-4 xl:gap-[1.2vw]">
                {POINTS.map((p) => (
                  <li key={p} className="section-text font-body text-[var(--body)] flex items-start gap-[0.6em]">
                    <Asterisk
                      aria-hidden
                      strokeWidth={4}
                      className="w-[1.2em] h-[1.2em] flex-shrink-0 mt-[0.2em] text-[var(--accent)]"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-[0.2em] mt-8 xl:mt-[2.6vw] mb-4 xl:mb-[0.8vw]">
              <img
                src="/medical/winfo/explore.webp"
                alt=""
                aria-hidden
                className="h-[clamp(36px,2.25vw,90px)] w-auto object-contain"
              />
              <p className="stat-text font-head font-semibold text-[var(--heading)]">
                100+ Trusted Healthcare Professionals
              </p>
            </div>
            <Button href="#contact" className="rounded-[0.75em] px-[2.1em]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
