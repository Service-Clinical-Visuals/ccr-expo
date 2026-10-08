"use client";

import React from "react";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function ReliablePerformance() {
  const points = [
    {
      title: "Monofilament Structure",
      desc: "Durable polypropylene filaments provide a reliable mesh structure.",
    },
    {
      title: "Nonabsorbable Material",
      desc: "Maintains long-term structural support after implantation.",
    },
    {
      title: "Thin Mesh Design",
      desc: "Supports easy handling and placement during surgical procedures.",
    },
  ];

  return (
    <section id="reliable-performance" className="w-full relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="absolute top-0 left-0 w-full h-[220px] sm:h-[280px] lg:h-[320px] bg-[#26306E] bg-[url('/medical/boz-tibbi-malzeme/bg.webp')] bg-cover bg-center pointer-events-none" />

      <div className="custom-container relative z-10 pt-4 sm:pt-8">
        <div className="flex flex-col min-[1500px]:flex-row items-stretch gap-8 lg:gap-10 min-[1500px]:gap-12 w-full">
          {/* Video */}
          <div
            className="w-full min-[1500px]:w-[65%] relative aspect-video overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-black/10 shrink-0"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="w-full min-[1500px]:w-[35%] bg-white rounded-[20px] sm:rounded-[24px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-6 sm:p-8 md:p-10 min-[2500px]:p-14 min-[3800px]:p-20 flex flex-col justify-center border border-gray-100"
            data-aos="fade-left"
          >
            <div className="flex flex-col justify-center gap-6 min-[2500px]:gap-8 min-[3800px]:gap-12 my-auto w-full">
              <div className="flex flex-col gap-4 min-[3800px]:gap-8">
                <Typography
                  variant="h2"
                  color="dark"
                  className="!text-2xl sm:!text-3xl min-[2500px]:!text-4xl min-[3800px]:!text-6xl !font-semibold capitalize leading-tight"
                >
                  Reliable Surgical Performance
                </Typography>

                <div className="w-full h-px bg-black/15" />

                <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-[#4A4A4A]">
                  MONOPROLEN Mesh is a sterile, synthetic, nonabsorbable polypropylene mesh developed to provide dependable reinforcement for weakened or damaged tissue during abdominal wall hernia repair.
                </Typography>

                <div className="flex flex-col gap-3 min-[3800px]:gap-6 py-1">
                  {points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3 min-[3800px]:gap-5">
                      <div className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 min-[3800px]:w-7 min-[3800px]:h-7 stroke-[3]" />
                      </div>
                      <Typography variant="p" color="muted" className="leading-snug text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-[#4A4A4A]">
                        <strong className="text-[#2A2A2A] font-semibold">{pt.title}</strong> – {pt.desc}
                      </Typography>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-black/15" />

                <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-[#4A4A4A]">
                  Its monofilament construction combines durability, flexibility, and easy handling for demanding surgical procedures.
                </Typography>
              </div>

              <div className="pt-2 min-[3800px]:pt-4">
                <Button
                  text="View Specifications"
                  href="#products"
                  variant="primary"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
