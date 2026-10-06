"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

interface Highlight {
  title: string;
  description: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Reliable Tissue Support",
    description:
      "Designed to provide reliable and consistent reinforcement at the repair site, supporting tissue stability and effective hernia repair.",
  },
  {
    title: "Flexible Structure",
    description:
      "Designed to adapt smoothly to the anatomical contours of the repair area, providing comfortable positioning and consistent support throughout the healing process.",
  },
  {
    title: "Surgical Versatility",
    description:
      "Suitable for a wide range of hernia repair procedures, offering versatile reinforcement and dependable support to help meet different surgical requirements and patient needs.",
  },
];

export default function HerniaMesh() {
  return (
    <section id="hernia-mesh" className="w-full bg-[#deeefa] py-14 sm:py-16 desk:py-20 2xl:py-24">
      <div className="custom-container custom-grid items-center">
        {/* Left: Video */}
        <div
          className="order-2 desk:order-1 col-span-12 desk:col-span-6 relative w-full aspect-video overflow-hidden bg-white mt-4 desk:mt-0"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <DynamicVideoPlayer
            type="short-2"
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
            Hernia Mesh
          </span>
          <h2 className="section-title mt-2 sm:mt-3 font-bold leading-tight text-[#0b1b2b]">
            Engineered Support for Reliable Hernia Repair
          </h2>
          <p className="section-text mt-5 sm:mt-6 leading-relaxed text-slate-600">
            Discover the design and application of LUXSUTURES Hernia Mesh, developed to provide
            dependable reinforcement and support during hernia repair procedures.
          </p>

          <ul className="mt-4 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title}>
                <p className="section-text leading-relaxed text-slate-600">
                  <strong className="font-semibold text-[#0b1b2b]">{item.title} -</strong>{" "}
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

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
