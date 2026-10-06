"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const FEATURES: Feature[] = [
  {
    title: "Automated Ultrasonic Cut & Border Seal",
    description:
      "High-frequency acoustic energy fuses periphery filaments, ensuring smooth rounded edges that never fray during laparoscopic cannula passage.",
    icon: "/medical/lux-sutures/8.png",
  },
  {
    title: "Ball Burst Strength & Tear Testing",
    description:
      "Every production lot is measured across bidirectional tensile axes with automated strain gauges, certifying resilience above physiological abdominal pressures.",
    icon: "/medical/lux-sutures/9.png",
  },
];

export default function CleanroomShowcase() {
  return (
    <section id="cleanroom" className="w-full bg-[#deeefa] py-14 sm:py-16 desk:py-20 2xl:py-24">
      <div className="custom-container custom-grid items-center">
        {/* Left: Video */}
        <div
          className="order-2 desk:order-1 col-span-12 desk:col-span-6 relative w-full aspect-video overflow-hidden bg-white mt-4 desk:mt-0"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Right: Content */}
        <div
          className="order-1 desk:order-2 col-span-12 desk:col-span-6 desk:pl-4 xl:pl-6"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <span className="section-text block font-semibold uppercase tracking-wide text-[#0071ce]">
            Cleanroom Video Showcase
          </span>
          <h2 className="section-title mt-2 sm:mt-3 font-bold leading-tight text-[#0b1b2b]">
            Hernia Mesh Precision Knitting, Thermal Heat-Setting &amp; Ultrasonic Cutting
          </h2>
          <p className="section-text mt-5 sm:mt-6 leading-relaxed text-slate-600">
            Step inside our Luxembourg production suite to observe robotic warp-knitting machines
            interlooping non-absorbable polypropylene yarn. The resulting matrix undergoes thermal
            relaxation to eliminate inner mechanical tension, preventing post-operative contraction
            or curling.
          </p>

          {/* Feature Cards */}
          <div className="custom-grid mt-6 sm:mt-8">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="col-span-12 sm:col-span-6 rounded-lg bg-white p-4 sm:p-5 2k:p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={`${200 + index * 100}`}
              >
                <div className="flex items-start gap-2.5">
                  <img
                    src={feature.icon}
                    alt=""
                    aria-hidden="true"
                    className="mt-0.5 h-auto w-4 2k:w-7 shrink-0 object-contain"
                  />
                  <div>
                    <h3 className="section-text font-bold leading-snug text-[#0b1b2b]">
                      {feature.title}
                    </h3>
                    <p className="text-sm  mt-1.5 leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 sm:mt-9">
            <Button href="" variant="secondary">
              View Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
