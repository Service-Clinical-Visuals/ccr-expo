"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import Typography from "./Typography";
import Eyebrow from "./Eyebrow";

/** Video gallery — each image is the poster for its video; the play icon plays it in the main frame. */
const libraryItems = [
  {
    title: "Smoke Evacuator Unit Overview",
    image: "/medical/zinnanti-surgical-2/v3.webp",
    video: "/medical/zinnanti-surgical-3/video-1.mp4",
  },
  {
    title: "HRA Smoke Evacuation Handpiece",
    image: "/medical/zinnanti-surgical-2/v1.webp",
    video: "/medical/zinnanti-surgical-3/video-2.mp4",
  },
  {
    title: "Simultaneous Evacuation of Smoke & Fluids",
    image: "/medical/zinnanti-surgical-2/v2.webp",
    video: "/medical/zinnanti-surgical-3/video-3.mp4",
  },
];

/** Round play icon overlaid on a poster image. */
const PlayIcon = ({ size = "lg" }: { size?: "sm" | "lg" }) => (
  <span
    aria-hidden
    className={`relative flex items-center justify-center rounded-full bg-white/95 text-[var(--color-secondary)] shadow-lg transition-transform duration-300 group-hover:scale-110 ${
      size === "lg"
        ? "w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36"
        : "w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20"
    }`}
  >
    {size === "lg" && (
      <span className="absolute inset-0 rounded-full bg-white/60 animate-ping [animation-duration:2s]" />
    )}
    <Play
      className={`relative fill-current translate-x-[8%] ${
        size === "lg"
          ? "w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16"
          : "w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8"
      }`}
    />
  </span>
);

const VISIBLE_THUMBNAILS = 2;

const VideoLibrary = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const show = (index: number, play: boolean) => {
    setActive(index);
    setPlaying(play);
    setFailed(false);
  };

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
        <div className="grid grid-cols-1 xl:grid-cols-[22fr_78fr] gap-6 xl:gap-8 min-[2500px]:gap-14 items-center">
          {/* Left: Heading + Thumbnails */}
          <div className="flex flex-col" data-aos="fade-right">
            <Eyebrow text="Video Library" />
            <Typography variant="h3" color="dark" className="leading-snug mt-3 min-[2500px]:mt-5">
              Inside our Innovations
            </Typography>
            <Typography variant="h4" color="secondary" className="leading-snug mt-2 min-[2500px]:mt-3">
              High-Resolution Anoscopy Videos
            </Typography>

            <div className="grid grid-cols-2 xl:grid-cols-1 gap-4 min-[2500px]:gap-6 mt-5 min-[2500px]:mt-8">
              {upNext.map((index) => {
                const item = libraryItems[index];
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => show(index, true)}
                    aria-label={`Play video: ${item.title}`}
                    className="relative block w-full cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto aspect-[1060/573] object-cover rounded-md min-[2500px]:rounded-lg transition-opacity duration-300 group-hover:opacity-85"
                    />
                    <span className="absolute inset-0 flex items-center justify-center rounded-md min-[2500px]:rounded-lg bg-black/15 group-hover:bg-black/25 transition-colors">
                      <PlayIcon size="sm" />
                    </span>
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
            {playing && failed && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 min-[2500px]:gap-5 bg-black/70 text-center px-6">
                <p className="text-white !font-medium">This video is currently unavailable.</p>
                <button
                  type="button"
                  onClick={() => show(active, false)}
                  className="button text-white underline underline-offset-4 hover:text-white/80 cursor-pointer"
                >
                  Back
                </button>
              </div>
            )}
            {playing ? (
              <video
                key={libraryItems[active].video}
                src={libraryItems[active].video}
                poster={libraryItems[active].image}
                autoPlay
                controls
                playsInline
                onEnded={() => setPlaying(false)}
                onError={() => setFailed(true)}
                className="absolute inset-0 w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setFailed(false);
                  setPlaying(true);
                }}
                aria-label={`Play video: ${libraryItems[active].title}`}
                className="absolute inset-0 w-full h-full cursor-pointer group"
              >
                <img
                  key={libraryItems[active].image}
                  src={libraryItems[active].image}
                  alt={libraryItems[active].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <PlayIcon />
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 min-[2500px]:gap-3">
          {libraryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => show(index, false)}
              aria-label={`Show video ${index + 1}`}
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
