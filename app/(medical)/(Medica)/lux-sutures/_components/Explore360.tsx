"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
interface Spec {
  label: string;
  value: string;
  icon: string;
}

const SPECS: Spec[] = [
  {
    label: "Base Polymer:",
    value: "100% Medical Grade Polypropylene (Homopolymer)",
    icon: "/medical/lux-sutures/1.webp",
  },
  {
    label: "Filament Diameter:",
    value: "0.15 mm (150 µm Monofilament)",
    icon: "/medical/lux-sutures/2.webp",
  },
  {
    label: "Areal Density:",
    value: "Lightweight (48 g/m²) or Standard (80 g/m²)",
    icon: "/medical/lux-sutures/3.webp",
  },
  {
    label: "Macroporosity:",
    value: "> 1.5 mm allows optimal fibroblastic infiltration",
    icon: "/medical/lux-sutures/4.webp",
  },
  {
    label: "Sterilization Method:",
    value: "Ethylene Oxide (EO) validated to ISO 11135",
    icon: "/medical/lux-sutures/5.webp",
  },
];

export default function Explore360() {
  return (
    <section id="view-360" className="w-full bg-[#deeefa] py-14 sm:py-16 desk:py-20 2xl:py-24">
      <div className="custom-container">
        {/* Heading */}
        <div data-aos="fade-up" data-aos-duration="800">
          <span className="section-text block font-semibold uppercase tracking-wide text-[#0071ce]">
            Interactive 3D Matrix Laboratory
          </span>
          <h2 className="section-title mt-2 sm:mt-3 font-bold leading-tight text-[#0b1b2b]">
            Interactive 360° Hernia Mesh &amp; Macroporous Matrix Inspection
          </h2>
        </div>

        {/* Description + Badges */}
        <div
          className="custom-grid mt-8 sm:mt-10 desk:mt-12 items-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <p className="section-text col-span-12 desk:col-span-8 leading-relaxed text-slate-600">
            Examine our ultra-pure monofilament polypropylene hernia mesh designed for open and
            laparoscopic (TAPP / TEP) hernia repair. Rotate 360° to analyze pore architecture,
            anisotropic elasticity, and non-fraying thermofused borders.
          </p>

          <div className="col-span-12 desk:col-span-4 flex flex-wrap gap-3 desk:justify-end">
            <span className="section-text inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 font-semibold text-[#0071ce] shadow-sm">
              <img
                src="/medical/lux-sutures/7.webp"
                alt=""
                aria-hidden="true"
                className="w-3.5 h-auto 2k:w-6 shrink-0 object-contain"
              />
              Pore Size: 1.5 - 1.8 mm
            </span>
            <span className="section-text inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 font-semibold text-emerald-600 shadow-sm">
              <img
                src="/medical/lux-sutures/6.webp"
                alt=""
                aria-hidden="true"
                className="w-3.5 h-auto 2k:w-6 shrink-0 object-contain"
              />
              Burst Pressure: &gt; 220 kPa
            </span>
          </div>
        </div>

        {/* Video + Specifications */}
        <div className="custom-grid mt-6 sm:mt-8 desk:items-stretch">
          {/* 360 Video Player Box */}
          <div
            className="col-span-12 desk:col-span-8 relative w-full aspect-video  overflow-hidden bg-white"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Specifications Panel */}
          <div
            className="col-span-12 desk:col-span-4 flex flex-col justify-center desk:pl-2 xl:pl-4"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="card-title1 font-bold text-[#0b1b2b]">Matrix Specifications</h3>
              <span className="section-text font-bold uppercase tracking-wide text-[#0071ce] whitespace-nowrap">
                Class IIb Device
              </span>
            </div>

            <ul className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
              {SPECS.map(({ label, value, icon }) => (
                <li key={label} className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="card-title font-semibold text-[#0b1b2b]">{label}</h4>
                    <p className="section-text mt-1 text-slate-600">{value}</p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 shrink-0 object-contain"
                  />
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8">
              <Button href="" variant="secondary">
                View Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
