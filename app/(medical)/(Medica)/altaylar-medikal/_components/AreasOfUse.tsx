"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function AreasOfUse() {
  const areas = [
    {
      title: "Umbilical Hernia",
      description: "Supports the repair of abdominal wall defects around the navel.",
    },
    {
      title: "Inguinal Hernia",
      description: "Provides reinforcement during inguinal hernia repair.",
    },
    {
      title: "Incisional Hernia",
      description: "Helps reinforce weakened areas at previous surgical sites.",
    },
    {
      title: "Eventration Operations",
      description: "Provides reinforcement for abdominal wall defects.",
    },
  ];

  return (
    <section
      id="areas-of-use"
      className="w-full py-16 xl:py-24 bg-[#191919] text-white overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 min-[3800px]:gap-24 w-full">
          {/* Video */}
          <div
            className="w-full xl:w-[65%] relative aspect-video overflow-hidden rounded-[20px] shadow-2xl bg-black border border-white/10 order-2 xl:order-1"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="w-full xl:w-[35%] flex flex-col gap-6 order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-[5px] bg-white rounded-[10px]" />
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-bold text-sm"
              >
                AREAS OF USE
              </Typography>
            </div>

            <Typography variant="h2" color="white" className="leading-snug">
              Reliable Support for Abdominal Wall Repair
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed text-gray-300">
              Duzey Polypropylene Mesh is designed to provide reliable reinforcement and support for the abdominal wall across a range of surgical procedures.
            </Typography>

            <ul className="space-y-4 pt-1">
              {areas.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0 mt-2" />
                  <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                    <strong className="text-white font-bold">{item.title} – </strong>
                    {item.description}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                text="Know More"
                variant="primary"
                href="#areas-of-use"
                showIcon={false}
                className="px-7 py-3 rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
