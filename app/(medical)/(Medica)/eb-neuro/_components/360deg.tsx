"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-16 xl:py-24 bg-[var(--color-primary)] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Text Content */}
          <div className="xl:col-span-5 flex flex-col gap-3 order-1 xl:order-1" data-aos="fade-right">
            <Typography variant="h5" color="white" className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white inline-block"></span> 360° EXPERIENCE
            </Typography>

            <Typography variant="h2" color="white" className="leading-tight mb-2">
              Portable Holter ECG Monitoring
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="white" className="leading-relaxed">
                The Easy ECG Holter combines a compact, lightweight design with advanced ECG monitoring capabilities, offering high portability for efficient ambulatory cardiac monitoring. Its LCD display enables on-demand review of all ECG channels and provides clear visual confirmation of patient connection. The fully programmable acquisition system supports sampling rates of up to 1024 samples per second without data compression, while 5, 7, or 10-pole patient cables allow flexible acquisition of 12-lead or 3-channel ECGs. The device is also available for veterinary applications. Complementing the recorder, ECGLab software provides an intuitive platform for storing, retrieving, analyzing, viewing, modifying, and generating examination reports.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="Explore" href="#explore360" variant="secondary" showIcon={true} />
            </div>
          </div>

          {/* Video */}
          <div
            className="w-full xl:col-span-7 aspect-video relative overflow-hidden order-2 xl:order-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-16 min-[3800px]:mt-24">
          <div className="bg-white rounded-[2em] py-6 px-6 flex items-center gap-6 border-b-4 border-[var(--color-secondary)]">
            <div className="w-25 h-25  min-[3800px]:w-32 min-[3800px]:h-32 shrink-0 rounded-full border-2 border-[var(--color-primary)] min-[3800px]:border-4 flex items-center justify-center p-5 min-[3800px]:p-6">
              <img src="/medical/eb-neuro/icon1.png" alt="Compact & Portable" className="w-full h-full object-contain" />
            </div>
            <div>
              <Typography variant="h3" color="dark" className="mb-1">Compact & Portable</Typography>
              <Typography variant="p" color="dark" className="text-sm">Lightweight design for convenient ambulatory ECG monitoring.</Typography>
            </div>
          </div>

          <div className="bg-white rounded-[2em] py-6 px-6 flex items-center gap-6 border-b-4 border-[var(--color-secondary)]">
            <div className="w-25 h-25 min-[3800px]:w-32 min-[3800px]:h-32 shrink-0 rounded-full border-2 border-[var(--color-primary)] min-[3800px]:border-4 flex items-center justify-center p-5 min-[3800px]:p-6">
              <img src="/medical/eb-neuro/icon2.png" alt="Compact & Portable" className="w-full h-full object-contain" />
            </div>
            <div>
              <Typography variant="h3" color="dark" className="mb-1">Advanced Monitoring</Typography>
              <Typography variant="p" color="dark" className="text-sm">Accurate ECG tracking with real-time monitoring for reliable cardiac insights.</Typography>
            </div>
          </div>

          <div className="bg-white rounded-[2em] py-6 px-6 flex items-center gap-6 border-b-4 border-[var(--color-secondary)]">
            <div className="w-25 h-25 min-[3800px]:w-32 min-[3800px]:h-32 shrink-0 rounded-full border-2 border-[var(--color-primary)] min-[3800px]:border-4 flex items-center justify-center p-5 min-[3800px]:p-6">
              <img src="/medical/eb-neuro/icon3.png" alt="Compact & Portable" className="w-full h-full object-contain" />
            </div>
            <div>
              <Typography variant="h3" color="dark" className="mb-1">Clear & Reliable</Typography>
              <Typography variant="p" color="dark" className="text-sm">High-quality ECG signals for precise monitoring and improved patient care.</Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deg360;
