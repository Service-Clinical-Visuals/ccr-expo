"use client";

import React, { useState, useRef, useEffect } from "react";
import Typography from "../Typography";
import Button from "../Button";

const galleryItems = [
  {
    id: 0,
    title: "Surgical Smoke Evacuation Procedure",
    image: "/medical/zinnanti-surgical-3/g1.webp",
    video: "/medical/zinnanti-surgical-3/video-1.mp4",
  },
  {
    id: 1,
    title: "Zinnanti Smoke & Fluid Evacuation",
    image: "/medical/zinnanti-surgical-3/g2.webp",
    video: "/medical/zinnanti-surgical-3/video-2.mp4",
  },
  {
    id: 2,
    title: "Clinical Electrosurgery Demonstration",
    image: "/medical/zinnanti-surgical-3/g3.webp",
    video: "/medical/zinnanti-surgical-3/video-3.mp4",
  },
];

/**
 * VideoGallery Section - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * Exact Figma Layout & Interactive Playback:
 * - Left (32%): 3 stacked video thumbnails (g1, g2, g3)
 * - Right (68%): Header with tag, title, View All button, narrative, and active video player (video-1, video-2, video-3)
 */
const VideoGallery = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const selectedItem = galleryItems[selectedId];

  const handleSelect = (id: number) => {
    setSelectedId(id);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [selectedId, isPlaying]);

  return (
    <section id="video-gallery" className="w-full py-16 xl:py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="custom-container">
        
        {/* Main 2-Column Layout */}
        <div className="flex flex-col min-[1036px]:flex-row gap-8 min-[1036px]:gap-10 xl:gap-12 items-start min-[1036px]:items-stretch w-full">
          
          {/* Left Column: 3 Stacked Thumbnails (32% width on desktop) */}
          <div
            className="w-full min-[1036px]:w-[32%] flex flex-col justify-between gap-4 sm:gap-5 order-2 min-[1036px]:order-1"
            data-aos="fade-right"
          >
            {galleryItems.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full aspect-[16/9] sm:aspect-[530/286] rounded-[16px] min-[3800px]:rounded-[28px] overflow-hidden cursor-pointer transition-all duration-300 relative shadow-sm hover:shadow-md group ${
                    isSelected
                      ? "border-[3px] border-[#38315E] ring-2 ring-[#38315E]/30 scale-[1.01]"
                      : "border border-[#4F6744] opacity-90 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Thumbnail Play Badge */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-colors">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white transition-transform ${
                        isSelected
                          ? "bg-[#38315E] scale-105 shadow-md"
                          : "bg-black/50 group-hover:bg-[#38315E]"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="absolute inset-0 bg-[#38315E]/10 pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Header Content + Main Video Player (68% width on desktop) */}
          <div
            className="w-full min-[1036px]:w-[68%] flex flex-col order-1 min-[1036px]:order-2"
            data-aos="fade-left"
          >
            {/* Top Header Block */}
            <div className="flex flex-col gap-3 shrink-0">
              {/* Tagline */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 sm:w-8 h-1 bg-[#38315E] rounded-full inline-block shrink-0" />
                <span className="heading-blue text-[#4F6744]">
                  Video Gallery
                </span>
              </div>

              {/* Title & View All Button Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <Typography
                  variant="h2"
                  color="dark"
                  className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333] leading-snug w-full max-w-full xl:max-w-[70%]"
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
                className="leading-relaxed text-[#333333] text-justify pt-1 w-full max-w-full xl:max-w-[70%]"
              >
                The Zinnanti Surgical Smoke Evacuator Unit combines advanced smoke evacuation technology with specialized functionality to support modern surgical environments. Designed for effective smoke management during procedures, it helps healthcare professionals maintain visibility, improve procedural conditions, and focus on delivering quality patient care.
              </Typography>
            </div>

            {/* Active Featured Video Player */}
            <div className="w-full max-[1035px]:aspect-[16/9] max-[1035px]:sm:aspect-[1100/595] min-[1036px]:flex-1 min-[1036px]:min-h-0 rounded-[16px] min-[3800px]:rounded-[28px] border-[3px] border-[#38315E] overflow-hidden shadow-2xl relative bg-black mt-5 sm:mt-6">
              <video
                ref={videoRef}
                key={selectedItem.video}
                src={selectedItem.video}
                poster={selectedItem.image}
                controls
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Initial Overlay Play Button before playing */}
              {!isPlaying && (
                <div
                  onClick={() => {
                    setIsPlaying(true);
                    videoRef.current?.play().catch(() => {});
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#38315E] hover:bg-[#2d274c] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 sm:w-9 sm:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 ml-1 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoGallery;
