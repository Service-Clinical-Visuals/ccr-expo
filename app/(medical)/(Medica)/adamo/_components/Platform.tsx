"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react"; // Or custom SVG if they prefer

const Platform = () => {
  return (
    <section id="platform" className="w-full py-16 lg:py-24 bg-[#252525] overflow-hidden">
      <div className="custom-container">

        {/* Top Header Row */}
        <div className="flex flex-col items-center text-center mb-8 border-b border-white/40 pb-8" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-2 max-w-3xl leading-tight">
            Advanced Videocolposcopy Platform
          </Typography>
          <Typography variant="p" color="white" className=" text-sm md:text-base leading-relaxed xl:max-w-[70%] mx-auto">
            Colposcope Isis Gamma is an integrated videocolposcopy platform designed to support gynecologists with advanced imaging, flexible configuration, and efficient examination management. Its high-resolution imaging system and ergonomic design provide a comprehensive solution for modern colposcopy procedures.
          </Typography>
        </div>

        {/* Video and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-[3800px]:gap-12">

          {/* Left: Video (span 8) */}
          <div className="lg:col-span-8 w-full aspect-video relative overflow-hidden  " data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Content (span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center" data-aos="fade-left">
            <Typography variant="h3" color="white" className="mb-4 font-semibold">
              Ergonomic &amp; Integrated Design
            </Typography>
            <Typography variant="p" color="white" className=" text-sm leading-relaxed mb-6">
              Colposcope Isis Gamma combines advanced imaging technology with an ergonomic, flexible design to support comfortable and efficient examinations.
            </Typography>

            {/* Bullet Points */}
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 bg-white rounded-full p-0.5">
                  <svg className="w-4 h-4 text-[#252525]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className=" text-xs leading-relaxed">
                  Up to 4K Imaging -  Captures high-resolution images and videos for detailed examination and documentation.
                </Typography>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 bg-white rounded-full p-0.5">
                  <svg className="w-4 h-4 text-[#252525]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className=" text-xs leading-relaxed">
                  Advanced Illumination -  Fixed or variable temperature lighting with green and amber filters for enhanced visualization.
                </Typography>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 bg-white rounded-full p-0.5">
                  <svg className="w-4 h-4 text-[#252525]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className=" text-xs leading-relaxed">
                  Multiple Magnification Factors -  Five magnification levels support detailed visual assessment during procedures.
                </Typography>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-6"></div>

            <Typography variant="p" color="white" className=" text-xs leading-relaxed mb-6">
              Its integrated workstation, adjustable components, stable base, and intuitive controls provide a practical solution for modern videocolposcopy.
            </Typography>

            <div>
              <Button text="View Product Details" href="#platform" variant="secondary" showIcon={true} className="bg-white text-black hover:bg-gray-100" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Platform;
