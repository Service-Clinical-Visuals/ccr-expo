"use client";
import React, { useState, useEffect, useRef } from "react";
import { useVideo, FALLBACK_VIDEOS } from "../_context/VideoContext";

// Map granular types to VideoData properties
type PlayerType =
  | "banner"
  | "short"
  | "short-1"
  | "short-2"
  | "short-3"
  | "short-4"
  | "360";

interface DynamicVideoPlayerProps {
  videos?: string | string[] | (string | string[])[];
  className?: string;
  type?: PlayerType;
}

export default function DynamicVideoPlayer({
  videos: manualVideos,
  className = "absolute inset-0 w-full h-full object-cover",
  type = "short",
}: DynamicVideoPlayerProps) {
  const { videos: contextVideos } = useVideo();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Normalize dynamic videos into a flat array of strings
  const activeVideos = React.useMemo(() => {
    let source: any = manualVideos;

    // 1. If no manual override, resolve from context using type
    if (!source && contextVideos) {
      if (type === "banner") {
        source = contextVideos.banner;
      } else if (type === "360") {
        source = contextVideos.videos360;
      } else if (type.startsWith("short")) {
        const indexStr = type.split("-")[1];
        if (indexStr !== undefined) {
          const index = parseInt(indexStr) - 1; // Map short-1 to index 0
          source = contextVideos.shortVideo?.[index];
        } else {
          source = contextVideos.shortVideo?.[0];
        }
      }
    }

    // 2. If still empty, resolve from FALLBACK_VIDEOS as true globals
    if (!source || (Array.isArray(source) && source.length === 0)) {
      if (type === "banner") {
        source = FALLBACK_VIDEOS.banner;
      } else if (type === "360") {
        source = FALLBACK_VIDEOS.videos360;
      } else if (type.startsWith("short")) {
        const indexStr = type.split("-")[1];
        const index = indexStr !== undefined ? parseInt(indexStr) - 1 : 0; // Map short-1 to index 0
        source =
          FALLBACK_VIDEOS.shortVideo?.[index] ||
          FALLBACK_VIDEOS.shortVideo?.[0];
      }
    }

    // Flatten nested arrays and remove non-string or empty entries
    const flattened = Array.isArray(source) ? source.flat() : [source];
    const valid = flattened.filter(
      (v): v is string => typeof v === "string" && v.trim() !== "",
    );

    return valid;
  }, [manualVideos, contextVideos, type]);

  const currentSource = activeVideos[currentIndex];

  const handleVideoEnd = () => {
    if (activeVideos.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % activeVideos.length);
    }
  };

  // Reset index if content changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeVideos]);

  // The <video> is remounted (via `key`) on every source change, so a fresh
  // autoplay attempt only needs to happen once, when that new element becomes
  // ready to play.
  const attemptPlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.play()
      .then(() => setAutoplayBlocked(false))
      .catch((error) => {
        console.warn("Autoplay blocked:", error);
        setAutoplayBlocked(true);
      });
  };

  const handleManualPlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play()
      .then(() => setAutoplayBlocked(false))
      .catch((err) => console.error("Manual play failed:", err));
  };

  // Safari can decline the initial autoplay attempt yet allow play() once the
  // page has seen a user gesture. Scroll alone isn't a gesture the platform
  // recognizes, so retry on the first scroll AND on the first genuine
  // activation event (pointer/touch/key), whichever happens first, anywhere
  // on the page — not just a click directly on the video.
  useEffect(() => {
    const retry = () => {
      const el = videoRef.current;
      if (!el || !el.paused) return;
      attemptPlay();
    };
    const events: Array<keyof WindowEventMap> = [
      "scroll",
      "pointerdown",
      "touchstart",
      "keydown",
    ];
    events.forEach((evt) =>
      window.addEventListener(evt, retry, { once: true, passive: true }),
    );
    return () =>
      events.forEach((evt) => window.removeEventListener(evt, retry));
  }, [currentSource]);

  if (activeVideos.length === 0) return null;

  return (
    <>
      <video
        key={currentSource}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={attemptPlay}
        loop={activeVideos.length === 1}
        onEnded={handleVideoEnd}
        className={className}
        src={currentSource}
        // Prevent right-click context menu
        onContextMenu={(e) => e.preventDefault()}
        // Prevent drag-to-save
        onDragStart={(e) => e.preventDefault()}
        // Remove download controls (if controls are ever enabled)
        controlsList="nodownload"
        // Disables picture-in-picture (harder to screen record)
        disablePictureInPicture
      />

      {autoplayBlocked && (
        <div
          onClick={handleManualPlay}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer group transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 transition-transform duration-300 group-hover:scale-110 shadow-lg">
            <svg
              className="w-8 h-8 text-white ml-1 drop-shadow-md"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
