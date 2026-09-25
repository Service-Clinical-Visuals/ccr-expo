"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function AdvancedImaging() {
  const features = [
    "High-resolution digital imaging supports detailed visualization of subtle tissue color and structural changes during examinations.",
    "Powerful LED illumination delivers bright, natural-looking visualization regardless of surrounding examination room lighting conditions.",
    "Integrated USB connectivity enables convenient image transfer, storage, printing, and computer-based examination documentation."
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-[var(--color-primary)] text-white">
      <div className="custom-container grid grid-cols-1 min-[1281px]:grid-cols-12 gap-12 min-[2500px]:gap-16 items-center">
        {/* Left: Content */}
        <div className="min-[1281px]:col-span-5 flex flex-col text-left">
          <Typography variant="h6" color="white" className="mb-2" data-aos="fade-up">
            Advanced Imaging, Simplified
          </Typography>
          <Typography variant="h2" color="white" className="mb-6" data-aos="fade-up" data-aos-delay="100">
            Smart Visualization in a Compact Design for Flexible Clinical Examination Spaces
          </Typography>
          <Typography variant="p" color="white" className="mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
            The SLV-101 HDm is a compact digital video colposcope created for practical gynecological examinations. Its ready-to-use configuration, integrated LED illumination, 10.1-inch display, USB connectivity, and GynLab software combine essential imaging and documentation capabilities in a space-efficient system.
          </Typography>

          <div className="flex flex-col gap-5 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={300 + idx * 100}>
                <div className="w-2.5 h-2.5 min-[2500px]:w-4 min-[2500px]:h-4 mt-1.5 shrink-0 bg-white rounded-sm" />
                <Typography variant="p" color="white" className="opacity-90 leading-relaxed">
                  {feature}
                </Typography>
              </div>
            ))}
          </div>

          <div className="self-start" data-aos="fade-up" data-aos-delay="600">
            <Button text="Explore HDm" variant="white" showIcon={false} />
          </div>
        </div>

        {/* Right: Video */}
        <div className="w-full min-[1281px]:col-span-7 aspect-video rounded-sm overflow-hidden bg-white/10 flex items-center justify-center shadow-lg" data-aos="zoom-in">
          <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
