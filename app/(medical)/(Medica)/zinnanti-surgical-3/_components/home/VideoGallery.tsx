"use client";

import React, { useState } from "react";
import Typography from "../Typography";
import Button from "../Button";

const galleryItems = [
  {
    id: 0,
    title: "Surgical Smoke Evacuation Procedure",
    image: "/medical/zinnanti-surgical-3/g1.webp",
  },
  {
    id: 1,
    title: "Zinnanti Smoke & Fluid Evacuation",
    image: "/medical/zinnanti-surgical-3/g2.webp",
  },
  {
    id: 2,
    title: "Clinical Electrosurgery Demonstration",
    image: "/medical/zinnanti-surgical-3/g3.webp",
  },
];

/**
 * VideoGallery Section - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * Exact Figma Layout:
 * - Left (32%): 3 stacked thumbnails (g1, g2, g3) spanning full height
 * - Right (68%): Header with tag, title, View All button, narrative, and large featured video/image below
 */
const VideoGallery = () => {
  const [selectedId, setSelectedId] = useState(0);
  const selectedItem = galleryItems[selectedId];

  return (
    <section id="video-gallery" className="w-full py-16 xl:py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="custom-container">
        
        {/* Main 2-Column Layout */}
        <div className="flex flex-col min-[1036px]:flex-row gap-8 min-[1036px]:gap-10 xl:gap-12 items-start w-full">
          
          {/* Left Column: 3 Stacked Thumbnails (32% width on desktop) */}
          <div
            className="w-full min-[1036px]:w-[32%] flex flex-col gap-4 sm:gap-5 order-2 min-[1036px]:order-1"
            data-aos="fade-right"
          >
            {galleryItems.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full aspect-[16/9] sm:aspect-[530/286] rounded-[16px] min-[3800px]:rounded-[28px] overflow-hidden cursor-pointer transition-all duration-300 relative shadow-sm hover:shadow-md ${
                    isSelected
                      ? "border-[3px] border-[#01ADEF] ring-2 ring-[#01ADEF]/30 scale-[1.01]"
                      : "border border-[#00578E] opacity-90 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#01ADEF]/10 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Header Content + Large Featured Display (68% width on desktop) */}
          <div
            className="w-full min-[1036px]:w-[68%] flex flex-col justify-between order-1 min-[1036px]:order-2"
            data-aos="fade-left"
          >
            {/* Top Header Block */}
            <div className="flex flex-col gap-3">
              {/* Tagline */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 sm:w-8 h-1 bg-[#01ADEF] rounded-full inline-block shrink-0" />
                <span className="heading-blue text-[#00578E]">
                  Video Gallery
                </span>
              </div>

              {/* Title & View All Button Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Typography
                  variant="h2"
                  color="dark"
                  className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333] leading-snug max-w-xl"
                >
                  Engineered for Cleaner, More Controlled Surgical Procedures
                </Typography>

                <div className="shrink-0 self-start sm:self-center">
                  <Button text="View All" variant="primary" href="#contact" />
                </div>
              </div>

              {/* Narrative Paragraph */}
              <Typography
                variant="p"
                color="dark"
                className="leading-relaxed text-[#333333] text-justify pt-1"
              >
                The Zinnanti Surgical Smoke Evacuator Unit combines advanced smoke evacuation technology with specialized functionality to support modern surgical environments. Designed for effective smoke management during procedures, it helps healthcare professionals maintain visibility, improve procedural conditions, and focus on delivering quality patient care.
              </Typography>
            </div>

            {/* Large Featured Preview Box */}
            <div className="w-full aspect-[16/9] sm:aspect-[1100/595] rounded-[16px] min-[3800px]:rounded-[28px] border-[3px] border-[#01ADEF] overflow-hidden shadow-2xl relative bg-black mt-6 group cursor-pointer">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#01ADEF] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 ml-1 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoGallery;
