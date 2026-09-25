"use client";

import React, { useRef, useState, useEffect } from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Interactive360() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState<number | null>(null);

  useEffect(() => {
    // Dynamic 25% card height calibration
    const updateBannerHeight = () => {
      if (videoCardRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const cardRect = videoCardRef.current.getBoundingClientRect();
        const topOffset = cardRect.top - sectionRect.top;
        const card25 = cardRect.height * 0.25;
        setBannerHeight(Math.round(topOffset + card25));
      }
    };

    updateBannerHeight();

    const ro = new ResizeObserver(() => {
      updateBannerHeight();
    });

    if (videoCardRef.current) ro.observe(videoCardRef.current);
    if (sectionRef.current) ro.observe(sectionRef.current);

    window.addEventListener("resize", updateBannerHeight);
    const t1 = setTimeout(updateBannerHeight, 150);
    const t2 = setTimeout(updateBannerHeight, 600);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateBannerHeight);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section id="interactive-360" ref={sectionRef} className="w-full relative overflow-hidden select-none bg-white">
      <div
        className="absolute top-0 left-0 w-full pointer-events-none z-0 transition-[height] duration-200"
        style={{
          height: bannerHeight ? `${bannerHeight}px` : "400px",
          backgroundImage: "url('/medical/neurosoft/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="custom-container relative z-10 pt-[50px] sm:pt-[54px] min-[2500px]:pt-[75px]">
        <div className="text-center space-y-3 sm:space-y-4 pb-10 sm:pb-12 min-[1026px]:pb-14">
          <h2
            className="!text-white font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[32px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] leading-[150%] capitalize text-center xl:max-w-[70%] mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Explore RESTING ECG In 360°
          </h2>

          <p
            className="!text-white font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%] text-center xl:max-w-[70%] mx-auto opacity-95"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Take a closer look at the RESTING ECG 12-channel digital system through an interactive 360° experience.
            Explore its design, controls, and features developed for efficient ECG recording and analysis.
          </p>
        </div>

        <div className="w-full pb-16 sm:pb-20 min-[1026px]:pb-[100px] min-[2500px]:pb-[160px]">
          <div
            ref={videoCardRef}
            className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[20px] z-20"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
