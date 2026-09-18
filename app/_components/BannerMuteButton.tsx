"use client";
import { Volume2, VolumeX } from "lucide-react";
import { useBannerMute } from "../_context/VideoContext";

export default function BannerMuteButton() {
  const { isBannerMuted, toggleBannerMute, isBannerVisible } = useBannerMute();

  return (
    <button
      type="button"
      onClick={toggleBannerMute}
      aria-label={isBannerMuted ? "Unmute video" : "Mute video"}
      aria-hidden={!isBannerVisible}
      tabIndex={isBannerVisible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-[60] flex items-center justify-center w-10 h-10 rounded-full bg-[#0081e9]/59 backdrop-blur-md border border-[#1A80C3]/30 text-white transition-all duration-300 ease-out hover:scale-110 ${
        isBannerVisible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none"
      }`}>
      {isBannerMuted ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </button>
  );
}
