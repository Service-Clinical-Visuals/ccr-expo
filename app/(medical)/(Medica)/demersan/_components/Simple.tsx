"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const Simple = () => {
  return (
    <section id="simple" className="relative w-full overflow-hidden bg-[#F5F5F5] py-16 lg:py-20">
      <div className="custom-container relative z-10">

        {/* Grid Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 min-[3800px]:gap-24 items-center">

          {/* Video (Left) */}
          <div className="xl:col-span-9 order-2 xl:order-1 relative aspect-video" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content Box (Right) */}
          <div className="xl:col-span-3 order-3 xl:order-2 flex flex-col gap-3" data-aos="fade-left">

            <div className="border-b border-[#0000003D] pb-4">
              <Typography variant="h2" color="dark" className="font-semibold text-2xl lg:text-3xl">
                Designed For Safe
              </Typography>
              <Typography variant="h2" className="text-[#192B6C] font-semibold text-2xl lg:text-3xl mt-1">
                Catheterization
              </Typography>
            </div>

            <Typography variant="p" color="muted" className="text-sm leading-relaxed text-[#4A4A4A] mt-2">
              Primacath® is designed to support intermittent catheterization with medical-grade materials and a hydrophilic coating.
            </Typography>

            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex gap-3">
                <div className="shrink-0 mt-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#192B6C" />
                    <path d="M17 8L10 15L7 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <Typography variant="p" color="muted" className="text-[13px] leading-relaxed text-[#4A4A4A]">
                  <span className="font-semibold text-[#192B6C]">Medical-Grade Materials</span> – Manufactured using medical-grade materials without phthalates.
                </Typography>
              </li>
              <li className="flex gap-3">
                <div className="shrink-0 mt-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#192B6C" />
                    <path d="M17 8L10 15L7 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <Typography variant="p" color="muted" className="text-[13px] leading-relaxed text-[#4A4A4A]">
                  <span className="font-semibold text-[#192B6C]">Hydrophilic Coating</span> – Provides a slippery surface throughout the catheterization process.
                </Typography>
              </li>
              <li className="flex gap-3">
                <div className="shrink-0 mt-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#192B6C" />
                    <path d="M17 8L10 15L7 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <Typography variant="p" color="muted" className="text-[13px] leading-relaxed text-[#4A4A4A]">
                  <span className="font-semibold text-[#192B6C]">Rounded Tip</span> – Designed to help minimize the risk of trauma during insertion.
                </Typography>
              </li>
            </ul>

            <Typography variant="p" color="muted" className="text-sm leading-relaxed text-[#4A4A4A] border-t border-[#0000003D] pt-6 mt-2">
              Its rounded tip, optimized drainage holes, and practical design help provide smooth handling and comfortable catheterization
            </Typography>

            <div className="mt-2">
              <Button text="View Specifications" href="#products" variant="primary" showIcon={true} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Simple;
