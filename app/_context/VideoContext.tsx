"use client";
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface VideoData {
  banner: string[];
  shortVideo: (string | string[])[];
  videos360: string[];
}

interface VideoContextType {
  videos: VideoData | null;
  loading: boolean;
  error: string | null;
}

interface VideoConfigContextType {
  apiUrl: string;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);
const VideoConfigContext = createContext<VideoConfigContextType>({
  apiUrl: "https://api.clinicalvisuals.com/admin/custom-business/public/business-media",
});

export const VideoConfigProvider = ({ children, apiUrl }: { children: ReactNode; apiUrl: string }) => {
  return (
    <VideoConfigContext.Provider value={{ apiUrl }}>
      {children}
    </VideoConfigContext.Provider>
  );
};

// Fallback data to use when API fails or returns error
export const FALLBACK_VIDEOS: VideoData = {
  banner: [
    "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_01.webm",
    "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_02.webm"
  ],
  shortVideo: [
    ["https://cdn.clinicalvisuals.com/medical/activbase/short_clips/activebase_01.webm", "https://cdn.clinicalvisuals.com/medical/activbase/short_clips/activebase_02.webm"],
    ["https://cdn.clinicalvisuals.com/medical/ceekwomen/short_clips/video3.webm"],
    ["https://cdn.clinicalvisuals.com/medical/DM-Orthotics/short_clips/orthotics_1.webm", "https://cdn.clinicalvisuals.com/medical/DM-Orthotics/short_clips/orthotics_2.webm", "https://cdn.clinicalvisuals.com/medical/DM-Orthotics/short_clips/orthotics_3.webm"],
    ["https://cdn.clinicalvisuals.com/medical/beyond-air/short_clips/beyond_air_1.webm", "https://cdn.clinicalvisuals.com/medical/beyond-air/short_clips/beyond_air_2.webm"]
  ],
  videos360: [
    "https://cdn.clinicalvisuals.com/medical/soniquence/360.webm"
  ],
};


export const VideoProvider = ({ children, website, apiUrl: apiUrlProp }: { children: ReactNode; website?: string; apiUrl?: string }) => {
  const config = useContext(VideoConfigContext);
  const resolvedApiUrl = apiUrlProp || config.apiUrl;

  const [videos, setVideos] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("dummy-video-warning-dismissed");
    if (isDismissed) {
      setShowWarning(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        let resolvedBusinessName = null; // Removed website from props to avoid hardcoding
        if (!resolvedBusinessName && typeof window !== 'undefined') {
          resolvedBusinessName = window.location.pathname.split('/')[1];
        }

        if (!resolvedBusinessName) {
          console.warn("No business name found in props or URL. Using fallback.");
          setVideos(FALLBACK_VIDEOS);
          setIsFallback(true);
          return;
        }

        const response = await fetch(`${resolvedApiUrl}?businessName=${resolvedBusinessName}`);


        if (!response.ok) {
          console.warn(`API responded with ${response.status}. Using fallback videos.`);
          setVideos(FALLBACK_VIDEOS);
          setIsFallback(true);
          const isDismissed = sessionStorage.getItem("dummy-video-warning-dismissed");
          if (!isDismissed) setShowWarning(true);
          return;
        }

        const result = await response.json();

        if (!result.success || !result.data) {
          console.warn(`API success=false or missing data. Using fallback videos.`);
          setVideos(FALLBACK_VIDEOS);
          setIsFallback(true);
          const isDismissed = sessionStorage.getItem("dummy-video-warning-dismissed");
          if (!isDismissed) setShowWarning(true);
          return;
        }

        const apiData = result.data;

        const mappedData: VideoData = {
          banner: apiData.banner || [],
          shortVideo: apiData.shortVideos || [],
          videos360: apiData.videos360 || [],
        };

        setVideos(mappedData);
        setIsFallback(false);
        setShowWarning(false);
      } catch (err: any) {
        console.error("VideoContext Fetch Error (falling back):", err);
        setVideos(FALLBACK_VIDEOS);
        setIsFallback(true);
        const isDismissed = sessionStorage.getItem("dummy-video-warning-dismissed");
        if (!isDismissed) setShowWarning(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [website, resolvedApiUrl]);

  const closeWarning = () => {
    setShowWarning(false);
    sessionStorage.setItem("dummy-video-warning-dismissed", "true");
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-100 border-t-[#C10230] rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-gray-400 animate-pulse tracking-widest uppercase">Initializing</p>
        </div>
      </div>
    );
  }

  return (
    <VideoContext.Provider value={{ videos, loading, error }}>
      {children}

      {showWarning && isFallback && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <p className="text-[13px] font-medium text-gray-600 uppercase tracking-widest">
              Using Training Data
            </p>
            <button
              onClick={closeWarning}
              className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
      )}
    </VideoContext.Provider>
  );
};


export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};
