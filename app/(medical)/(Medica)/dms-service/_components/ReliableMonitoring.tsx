"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ReliableMonitoring() {
  return (
    <section className="w-full bg-[var(--dark-section)] py-16 sm:py-20 xl:py-24">
      <div className="custom-container">
        <div className="text-center max-w-[1100px] min-[2560px]:max-w-[60%] mx-auto mb-10" data-aos="fade-up">

          <p className="eyebrow font-mulish font-medium text-[var(--primary)] mb-3">ADVANCED ECG MONITORING</p>

          <h2 className="section-title font-mulish font-bold text-white mb-5">
            Reliable Monitoring For Better Cardiac Insights
          </h2>
          <p className="section-text font-inter text-white/90">
            Experience Advanced ECG Monitoring Technology Designed To Capture Continuous Cardiac Activity With
            Reliability And Precision. Supporting Healthcare Professionals With Valuable Insights For Effective Cardiac
            Assessment.
          </p>
        </div>

        <div className="w-full lg:w-[85%] mx-auto">
          <div
            className="relative w-full aspect-video rounded-[6px] overflow-hidden bg-[#3f3f3f]"
            data-aos="zoom-in"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div
            className="mt-8 xl:mt-10 bg-white rounded-[4px] px-6 py-6 xl:px-12 xl:py-7 flex flex-col md:flex-row md:items-center justify-between gap-6"
            data-aos="fade-up"
          >
            <p className="section-text font-inter text-[#333333] md:max-w-[78%]">
              Designed For Continuous ECG Recording And Accurate Cardiac Data Collection, This Monitor Combines A
              Compact, Lightweight Design With Comfortable Wearability And User-Friendly Operation For Convenient And
              Reliable Patient Monitoring.
            </p>
            <div className="flex-shrink-0">
              <Button href="#products">View Product</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
