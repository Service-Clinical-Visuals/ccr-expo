"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Complete = () => {
  return (
    <section id="complete" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 border-b border-gray-300 pb-4 gap-6">
          <div className="max-w-full" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="mb-4 leading-tight">
              Complete Imaging &amp; Examination Management
            </Typography>
            <Typography variant="p" color="muted" className="text-sm leading-relaxed xl:max-w-[70%]">
              Colposcope Isis Gamma combines advanced imaging with comprehensive examination management in one platform. High-resolution capture, dedicated vulvoscopy, patient management, and automated reporting support an efficient digital workflow.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left">
            <Button text="Request Information" href="#contact" variant="primary" showIcon={true} className="bg-[#252525] text-white hover:bg-black border-none" />
          </div>
        </div>

        {/* Video Block */}
        <div className="w-full aspect-video mx-auto xl:max-w-[85%] relative overflow-hidden " data-aos="fade-up">
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Complete;
