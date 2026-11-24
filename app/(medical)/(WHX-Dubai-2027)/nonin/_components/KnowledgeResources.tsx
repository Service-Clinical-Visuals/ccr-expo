/**
 * Knowledge Resources Section (KNOWLEDGE & RESOURCES)
 * Master Reference: Inogen Development Standards
 * Visuals: 4 Resource Cards (k1, k2, k3, k4), top badge, 70% header limit.
 * Background: The #2A96C2 blue background box aligns precisely with the bottom of the card images
 * and extends to the bottom of the section.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const resources = [
  {
    category: "Clinical Evidence",
    title: "Clinical Resources",
    description: "Nonin is committed to investments in clinical research and education.",
    date: "April 17, 2025",
    image: "/medical/nonin/k1.webp",
    link: "#",
  },
  {
    category: "Clinical Evidence",
    title: "Clinical Bibliography: Pulse Oximetry Technology",
    description: "Nonin is committed to investments in clinical research and education.",
    date: "March 19, 2025",
    image: "/medical/nonin/k2.webp",
    link: "#",
  },
  {
    category: "Clinical Evidence",
    title: "Remote Patient Monitoring Study Shown to Reduce Hospital Admissions",
    description: "What if remote monitoring could help reduce hospital readmissions by...",
    date: "October 15, 2026",
    image: "/medical/nonin/k3.webp",
    link: "#",
  },
  {
    category: "Clinical Evidence",
    title: "Can Pulse Oximetry Support Early Sepsis Recognition?",
    description: "Patients with sepsis can deteriorate with frightening speed, making timely recog...",
    date: "August 20, 2026",
    image: "/medical/nonin/k4.webp",
    link: "#",
  },
];

const KnowledgeResources = () => {
  return (
    <section id="knowledge" className="w-full pt-16 xl:pt-24 pb-12 sm:pb-16 bg-white relative overflow-hidden flex flex-col">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14 relative z-10">
        
        {/* Section Header: Centered with xl:max-w-[70%] width limit */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl uppercase tracking-widest block">
            KNOWLEDGE &amp; RESOURCES
          </span>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-black"
          >
            Explore Resources That Advance Patient Care
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]"
          >
            Access valuable clinical research, expert insights and educational resources designed to support informed decisions and advance patient monitoring.
          </Typography>
        </div>

      </div>

      {/* Cards & Blue Background Area */}
      <div className="relative w-full mt-10 sm:mt-14">
        {/* Blue background block: starts exactly at the bottom of the card images (top-[200px] / sm:top-[225px]) down to bottom */}
        <div className="absolute top-[200px] sm:top-[225px] left-0 right-0 bottom-0 bg-[#2A96C2] z-0" />

        <div className="custom-container flex flex-col gap-6 sm:gap-8 relative z-10">
          {/* 4 Cards Grid: 1 col on mobile, 2 cols on tablet up to 1023px, 4 cols on desktop (lg:grid-cols-4) */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {resources.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[5px] overflow-hidden shadow-[0px_2px_6px_2px_rgba(60,64,67,0.15)] flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Frame: fixed height 200px (mobile) / 225px (sm+) */}
                <div className="w-full h-[200px] sm:h-[225px] overflow-hidden bg-gray-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Body: white box sitting entirely on top of the blue background */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4 bg-white">
                  <div className="space-y-2">
                    <span className="text-[#A7A8AA] text-xs font-normal block font-body">
                      {item.category}
                    </span>

                    <Typography
                      variant="h4"
                      color="dark"
                      className="text-base sm:text-lg font-bold text-[#3D3935] leading-snug line-clamp-2"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="p"
                      color="muted"
                      className="text-xs sm:text-sm text-[#111111] leading-relaxed line-clamp-2"
                    >
                      {item.description}
                    </Typography>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[#A7A8AA] text-xs font-normal font-body">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link on Right */}
          <div className="w-full flex justify-end pt-2 pb-4">
            <Link
              href="#knowledge"
              className="text-white hover:text-white/80 transition-colors inline-block"
            >
              <Typography
                variant="p"
                className="!text-white hover:!text-white/80 font-bold underline transition-colors"
              >
                View All
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeResources;
