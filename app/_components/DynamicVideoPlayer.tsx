"use client";
import React, { useState, useEffect, useRef } from "react";
import { useVideo, useBannerMute, FALLBACK_VIDEOS } from "../_context/VideoContext";

// Map granular types to VideoData properties. `short-${n}` accepts any
// positive index (short-1, short-2, ... short-1000, ...). The API's own
// shortVideo list is read at that exact index — short-20 means the 20th
// API entry, nothing else. Only once the API doesn't have that many clips
// do we drop to FALLBACK_VIDEOS, which loops back to its start instead of
// going out of bounds (see `parseShortIndex` / `loopShortIndex` below).
type PlayerType = "banner" | "short" | `short-${number}` | "360";

const obeyAudioProps=true;

// Parses the 1-based `short-N` suffix into a 0-based index (`short` alone
// is index 0). Returns null for a malformed suffix (e.g. "short-abc").
function parseShortIndex(type: string): number | null {
  const indexStr = type.split("-")[1];
  if (indexStr === undefined) return 0;
  const requested = parseInt(indexStr, 10) - 1;
  return Number.isNaN(requested) ? null : requested;
}

// Maps a 1-based `short-N` suffix onto a valid index into an array of
// length `length`, looping back to the start once N exceeds it (e.g. with
// 4 clips, short-5 -> index 0, short-6 -> index 1, ...).
function loopShortIndex(type: string, length: number): number {
  if (length <= 0) return 0;
  const requested = parseShortIndex(type) ?? 0;
  return ((requested % length) + length) % length;
}

interface DynamicVideoPlayerProps {
  videos?: string | string[] | (string | string[])[];
  className?: string;
  type?: PlayerType;
  // Opt-in: a banner only exposes the mute toggle/audio when this is true.
  // Every other banner instance stays silent, with no visibility tracking
  // or toggle button shown for it.
  audioFeature?: boolean;
}

export default function DynamicVideoPlayer({
  videos: manualVideos,
  className = "absolute inset-0 w-full h-full object-cover",
  type = "short",
  audioFeature = false,
}: DynamicVideoPlayerProps) {
  const { videos: contextVideos } = useVideo();
  const { isBannerMuted, isBannerVisible, setBannerVisible } = useBannerMute();
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const isAudioBanner =
    type === "banner" && (obeyAudioProps ? audioFeature : true);
  // Browsers require a real user gesture before an autoplay-muted video can
  // become audible — unmuting it via script with no gesture behind it gets
  // the video paused outright (Chrome's anti "bait and switch" check). So
  // even after the user unmutes via the toggle, it only actually turns on
  // once the page has seen a genuine activation event.
  const [hasUserGesture, setHasUserGesture] = useState(false);
  // Only a banner with audioFeature enabled is user-mutable, and only while
  // at least 60% of it is on screen — otherwise there's no mute control
  // shown, so it must stay muted regardless of the user's earlier toggle.
  const isMuted =
    isAudioBanner
      ? isBannerMuted || !isBannerVisible || !hasUserGesture
      : true;

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
        const shortVideos = contextVideos.shortVideo;
        const index = parseShortIndex(type);
        source = index !== null ? shortVideos?.[index] : undefined;
      }
    }

    // 2. If still empty, resolve from FALLBACK_VIDEOS as true globals
    if (!source || (Array.isArray(source) && source.length === 0)) {
      if (type === "banner") {
        source = FALLBACK_VIDEOS.banner;
      } else if (type === "360") {
        source = FALLBACK_VIDEOS.videos360;
      } else if (type.startsWith("short")) {
        const shortVideos = FALLBACK_VIDEOS.shortVideo;
        const index = loopShortIndex(type, shortVideos?.length ?? 0);
        source = shortVideos?.[index] || shortVideos?.[0];
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
  const hasAutoplayedRef = useRef(false);

  // A new source (remount, or a stall-triggered re-buffer) needs a fresh
  // muted-autoplay bootstrap before the user's mute choice takes over again.
  useEffect(() => {
    hasAutoplayedRef.current = false;
  }, [currentSource]);

  // Only the banner exposes a mute toggle, and only while it's actually
  // visible enough to matter. The observer itself is created once (not per
  // source change) so cycling to the next clip in a multi-clip banner never
  // reports a spurious "not visible" — it just keeps watching the same spot
  // on screen.
  const bannerObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!isAudioBanner) return;
    const observer = new IntersectionObserver(
      ([entry]) => setBannerVisible(entry.isIntersecting && entry.intersectionRatio >= 0.6),
      { threshold: [0, 0.6, 1] },
    );
    bannerObserverRef.current = observer;
    return () => {
      observer.disconnect();
      bannerObserverRef.current = null;
      setBannerVisible(false);
    };
  }, [isAudioBanner, setBannerVisible]);

  // Re-point that observer at whichever <video> element is currently
  // mounted (it remounts via `key` on every source change).
  useEffect(() => {
    const observer = bannerObserverRef.current;
    const el = videoRef.current;
    if (!observer || !el) return;
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [currentSource]);

  // Unlike the Safari play()-retry below, scroll doesn't count here — only
  // events the platform recognizes as real user activation unlock audio.
  useEffect(() => {
    if (!isAudioBanner || hasUserGesture) return;
    const markGesture = () => setHasUserGesture(true);
    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "touchstart",
      "keydown",
    ];
    events.forEach((evt) =>
      window.addEventListener(evt, markGesture, { once: true, passive: true }),
    );
    return () =>
      events.forEach((evt) => window.removeEventListener(evt, markGesture));
  }, [isAudioBanner, hasUserGesture]);

  const handleVideoEnd = () => {
    if (activeVideos.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % activeVideos.length);
    }
  };

  // Reset index if content changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeVideos]);

  // `canplay` can refire well after the initial mount (e.g. a network stall
  // and re-buffer), so only force muted playback for the bootstrap attempt —
  // forcing it on every refire would silently re-mute a video the user had
  // unmuted, with nothing left to correct it back.
  const attemptPlay = () => {
    const el = videoRef.current;
    if (!el) return;
    const isBootstrap = !hasAutoplayedRef.current;
    if (isBootstrap) {
      el.muted = true;
      el.defaultMuted = true;
    }
    el.play()
      .then(() => {
        setAutoplayBlocked(false);
        if (isBootstrap) {
          hasAutoplayedRef.current = true;
          // Hand mute control back to the user's chosen state now that
          // autoplay has actually started.
          el.muted = isMuted;
        }
      })
      .catch((error) => {
        console.warn("Autoplay blocked:", error);
        setAutoplayBlocked(true);
      });
  };

  // Always call the latest attemptPlay from the retry listener below, which
  // binds once, without having to reattach it on every render.
  const attemptPlayRef = useRef(attemptPlay);
  attemptPlayRef.current = attemptPlay;

  // If anything pauses the video after a successful start (the browser's
  // own anti-bait-and-switch check, a network hiccup, etc.), treat the next
  // play() attempt as a fresh bootstrap. Otherwise a later retry could call
  // play() on an element that's paused AND already unmuted, which throws
  // NotAllowedError instead of recovering.
  const handlePause = () => {
    hasAutoplayedRef.current = false;
  };

  const handleManualPlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play()
      .then(() => setAutoplayBlocked(false))
      .catch((err) => console.error("Manual play failed:", err));
  };

  // Keep the element's muted state in sync with the toggle. Runs after the
  // initial (forced-muted) autoplay attempt has already resolved, so this
  // never fights that attempt — it only reflects the user's own choice.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = isMuted;
  }, [isMuted, currentSource]);

  // Safari can decline the initial autoplay attempt yet allow play() once the
  // page has seen a user gesture. Scroll alone isn't a gesture the platform
  // recognizes, so retry on the first scroll AND on the first genuine
  // activation event (pointer/touch/key), whichever happens first, anywhere
  // on the page — not just a click directly on the video. Bound once (not
  // per source change) since it only needs to fire while autoplay is stuck.
  useEffect(() => {
    const retry = () => {
      const el = videoRef.current;
      if (!el || !el.paused) return;
      attemptPlayRef.current();
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
    return () => events.forEach((evt) => window.removeEventListener(evt, retry));
  }, []);

  if (activeVideos.length === 0) return null;

  return (
    <>
      <video
        key={currentSource}
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        onCanPlay={attemptPlay}
        onPause={handlePause}
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
