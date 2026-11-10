"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const POINTS = [
  { icon: "/medical/dms-service/icon6.webp", text: "Continuous ECG Recording for Accurate and Reliable Cardiac Monitoring" },
  { icon: "/medical/dms-service/icon8.webp", text: "Lightweight & Comfortable Design for Extended Everyday Wear" },
  { icon: "/medical/dms-service/icon9.webp", text: "Waterproof Construction for Reliable Everyday Monitoring Use" },
];

export default function AdvancedMonitoring() {
  return (
    <section id="support" className="w-full bg-[var(--dark-section)] py-16 sm:py-20 xl:py-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Video */}
          <div
            className="relative w-full h-full aspect-video rounded-[6px] overflow-hidden bg-[#3f3f3f]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-delay="150">
            <p className="eyebrow font-mulish font-medium text-[var(--primary)] mb-3">Advanced ECG Monitoring</p>
            <h2 className="section-title font-mulish font-bold text-white mb-5">Experience Advanced Cardiac Monitoring</h2>
            <p className="section-text font-inter text-white/90 mb-8">
              Discover How Our Innovative ECG Monitoring Technology Delivers Reliable, Comfortable And Accurate Cardiac
              Data For Better Patient Care.
            </p>

            <ul className="bg-white rounded-[4px] px-6 py-6 xl:px-9 xl:py-5 flex flex-col gap-3 mb-8 xl:max-w-[90%]">
              {POINTS.map((p) => (
                <li key={p.text} className="flex items-center gap-3">
                  <img
                    src={p.icon}
                    alt=""
                    className="w-[42px] h-[42px] xl:w-[48px] xl:h-[48px] min-[2560px]:w-[70px] min-[2560px]:h-[70px] flex-shrink-0"
                  />
                  <span className="section-text font-inter text-[#333333]">{p.text}</span>
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
