"use client";

import React from "react";
import { Check, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function WhyChooseMesh() {
  const points = [
    "The flexible and durable structure allows the mesh to be easily positioned and cut according to surgical requirements.",
    "Polypropylene monofilaments provide lasting structural integrity and dimensional stability without shrinkage.",
    "Designed for abdominal wall hernia repair where additional reinforcement is required to achieve the desired surgical outcome.",
  ];

  return (
    <section id="why-choose" className="w-full py-14 sm:py-20 lg:py-28 bg-[var(--color-primary)] bg-[url('/medical/boz-tibbi-malzeme/bg.webp')] bg-cover bg-center text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/20" data-aos="fade-up">
          <div className="flex flex-col gap-3 xl:max-w-[70%] max-w-[90%]">
            <Typography variant="h2" color="white" className="capitalize tracking-wide">
              Why Choose MONOPROLEN Mesh?
            </Typography>
            <Typography variant="p" color="white" className="text-white/90 leading-relaxed font-normal">
              MONOPROLEN Mesh combines material strength, flexibility, and dimensional stability in a lightweight mesh structure designed to support demanding abdominal wall repair procedures.
            </Typography>
          </div>

          <a
            href="#why-choose"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-md shrink-0 self-start md:self-center"
            aria-label="Learn more about MONOPROLEN Mesh"
          >
            <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
          </a>
        </div>

        <div className="flex flex-col min-[1500px]:flex-row items-center gap-8 lg:gap-10 min-[1500px]:gap-12 w-full">
          {/* Video */}
          <div
            className="w-full min-[1500px]:w-[65%] relative aspect-video overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-[0px_3px_8px_rgba(0,0,0,0.3)] bg-black/20 shrink-0"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="w-full min-[1500px]:w-[35%] flex flex-col gap-5"
            data-aos="fade-left"
          >
            <Typography
              variant="h3"
              color="white"
              className="!text-xl sm:!text-2xl !font-semibold capitalize leading-snug"
            >
              Engineered for Confidence in Hernia Repair
            </Typography>

            <Typography variant="p" color="white" className="text-white/90 leading-relaxed">
              MONOPROLEN Mesh combines durable polypropylene with a lightweight, elastic structure to support abdominal wall hernia repair.
            </Typography>

            <div className="w-full h-px bg-white/20 my-1" />

            <div className="flex flex-col gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <Typography variant="p" color="white" className="text-white/90 leading-relaxed text-sm sm:text-base">
                    {point}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-white/20 my-1" />

            <Typography variant="p" color="white" className="text-white/90 leading-relaxed text-sm sm:text-base">
              Its thin, transparent, and nonabsorbable design provides reliable tissue reinforcement while offering easy handling and positioning during surgical procedures.
            </Typography>

            <div className="pt-2">
              <Button
                text="View Products Details"
                href="#products"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
