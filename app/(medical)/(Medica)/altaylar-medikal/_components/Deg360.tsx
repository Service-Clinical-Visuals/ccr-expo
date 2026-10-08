"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { ShieldCheck, Scissors } from "lucide-react";

export default function Deg360() {
  return (
    <section
      id="tissue-reinforcement"
      className="w-full py-16 xl:py-24 bg-[#191919] text-white overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 min-[3800px]:gap-24 w-full">
          {/* Content */}
          <div
            className="w-full xl:w-[35%] flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-[5px] bg-white rounded-[10px]" />
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-bold text-sm"
              >
                TISSUE REINFORCEMENT
              </Typography>
            </div>

            <Typography variant="h2" color="white" className="leading-snug">
              Duzey Polypropylene Mesh
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed text-gray-300">
              Duzey Polypropylene Mesh is a non-absorbable surgical tissue prosthesis designed to reinforce weakened areas during hernia repair. Manufactured from medical-grade polymer monofilament fibers, it offers strength, flexibility, and easy handling during surgical procedures.
            </Typography>

            <div className="flex flex-col gap-5 pt-2">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)]" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" color="white" className="!font-bold">
                    High Tensile Strength –
                  </Typography>
                  <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                    Designed to provide strong resistance across 0.30–0.60 mm thicknesses.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                  <Scissors className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)]" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" color="white" className="!font-bold">
                    Flexible &amp; Easy to Cut –
                  </Typography>
                  <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                    The monofilament structure allows easy cutting while maintaining mesh integrity and flexibility.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Button
                text="Explore More"
                variant="primary"
                href="#tissue-reinforcement"
                showIcon={false}
                className="px-7 py-3 rounded-[10px]"
              />
            </div>
          </div>

          {/* 360 Video */}
          <div
            className="w-full xl:w-[65%] relative aspect-video overflow-hidden rounded-[20px] shadow-2xl bg-black border border-white/10"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
