"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const FEATURES = [
  { title: "Compact & Lightweight Design", text: "Comfortable For Everyday Cardiac Monitoring." },
  { title: "Advanced ECG Recording", text: "Supports Continuous Cardiac Activity Tracking." },
  { title: "Waterproof Construction", text: "Designed For Convenient Extended Wear." },
];

export default function Explore360() {
  return (
    <section className="w-full bg-[var(--dark-section)] py-16 sm:py-20 xl:py-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* 360 Video */}
          <div
            className="relative w-full h-full aspect-video rounded-[6px] overflow-hidden bg-[#3f3f3f]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-delay="150">
            <p className="eyebrow font-mulish font-medium text-[var(--primary)] mb-3">About DMS-Service</p>
            <h2 className="section-title font-mulish font-bold text-white mb-5">
              Experience Cardiac Monitoring From Every Angle
            </h2>
            <p className="section-text font-inter text-white/90 mb-6">
              Discover The Design And Advanced Functionality Of Our ECG Monitoring Technology Through An Immersive 360°
              Product View. Explore Its Compact Design, Innovative Features And User-Friendly Construction.
            </p>

            <ul className="flex flex-col gap-4 xl:gap-[18px] mb-6 xl:max-w-[90%]">
              {FEATURES.map((f) => (
                <li
                  key={f.title}
                  className="flex items-center gap-3 rounded-[4px] border border-[var(--primary)] px-3 py-3 xl:py-[10px]"
                >
                  <img
                    src="/medical/dms-service/icon1.webp"
                    alt=""
                    className="w-[36px] h-[36px] xl:w-[41px] xl:h-[41px] min-[2560px]:w-[60px] min-[2560px]:h-[60px] flex-shrink-0"
                  />
                  <p className="section-text font-inter text-white">
                    <span className="font-semibold">{f.title}</span> – {f.text}
                  </p>
                </li>
              ))}
            </ul>

            <Button href="#products">View Product</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
