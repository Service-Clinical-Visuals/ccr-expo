"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Eyebrow from "./Eyebrow";

/** Static image gallery — no video playback, no play buttons. */
const libraryItems = [
  { title: "Smoke Evacuator Unit Overview", image: "/medical/zinnanti-surgical-2/v3.webp" },
  { title: "HRA Smoke Evacuation Handpiece", image: "/medical/zinnanti-surgical-2/v1.webp" },
  { title: "Simultaneous Evacuation of Smoke & Fluids", image: "/medical/zinnanti-surgical-2/v2.webp" },
];

const VISIBLE_THUMBNAILS = 2;

const VideoLibrary = () => {
  const [active, setActive] = useState(0);

  // Thumbnails show the items that come after the active one, wrapping around.
  const upNext = Array.from(
    { length: Math.min(VISIBLE_THUMBNAILS, libraryItems.length - 1) },
    (_, i) => (active + i + 1) % libraryItems.length,
  );

  return (
    <section
      id="videos"
      className="w-full bg-white py-16 xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48 overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-8 xl:gap-10 min-[2500px]:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-[22fr_78fr] gap-6 xl:gap-8 min-[2500px]:gap-14 items-center">
          {/* Left: Heading + Thumbnails */}
          <div className="flex flex-col" data-aos="fade-right">
            <Eyebrow text="Video Library" />
            <Typography variant="h3" color="dark" className="leading-snug mt-3 min-[2500px]:mt-5">
              Inside our Innovations
            </Typography>
            <Typography variant="h4" color="secondary" className="leading-snug mt-2 min-[2500px]:mt-3">
              High-Resolution Anoscopy Videos
            </Typography>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 min-[2500px]:gap-6 mt-5 min-[2500px]:mt-8">
              {upNext.map((index) => {
                const item = libraryItems[index];
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show ${item.title}`}
                    className="block w-full cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto aspect-[1060/573] object-cover rounded-md min-[2500px]:rounded-lg transition-opacity duration-300 group-hover:opacity-85"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Main Image */}
          <div
            className="relative w-full aspect-[1600/869] overflow-hidden bg-gray-100 border-t-2 border-l-2 border-[var(--color-primary)] rounded-tl-[2rem] rounded-br-[2rem] xl:rounded-tl-[2.5rem] xl:rounded-br-[2.5rem] min-[2500px]:rounded-tl-[4rem] min-[2500px]:rounded-br-[4rem] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              key={libraryItems[active].image}
              src={libraryItems[active].image}
              alt={libraryItems[active].title}
              className="absolute inset-0 w-full h-full object-cover animate-[fadeIn_0.4s_ease]"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 min-[2500px]:gap-3">
          {libraryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active}
              className={`w-2 h-2 min-[2500px]:w-3 min-[2500px]:h-3 rounded-full transition-colors duration-300 cursor-pointer ${index === active ? "bg-[var(--color-primary)]" : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoLibrary;
