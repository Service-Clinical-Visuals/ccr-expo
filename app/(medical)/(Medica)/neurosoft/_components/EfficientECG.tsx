"use client";

import React, { useRef, useState, useEffect } from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function EfficientECG() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState<number | null>(null);

  useEffect(() => {
    // Dynamic 25% background banner calibration
    const updateBannerHeight = () => {
      if (cardsRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const cardsRect = cardsRef.current.getBoundingClientRect();
        const topOffset = cardsRect.top - sectionRect.top;
        const cards25 = cardsRect.height * 0.25;
        setBannerHeight(Math.round(topOffset + cards25));
      }
    };

    updateBannerHeight();

    const ro = new ResizeObserver(() => {
      updateBannerHeight();
    });

    if (cardsRef.current) ro.observe(cardsRef.current);
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
    <section id="efficient-cag" ref={sectionRef} className="w-full relative overflow-hidden select-none bg-white">
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
        <div className="space-y-3.5 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12 relative z-10" data-aos="fade-up">
          <h2
            id="efficient-cag-heading"
            className="!text-white font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[32px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] leading-[150%] capitalize text-center xl:max-w-[70%] mx-auto"
          >
            Efficient ECG Assessment
          </h2>
          <p
            className="!text-white font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%] text-center xl:max-w-[70%] mx-auto opacity-95"
          >
            The RESTING ECG digital system is designed for high-throughput clinical workflows, providing fast setup,
            automated measurements, and seamless electronic medical record integration.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-stretch gap-6 min-[1026px]:gap-8 min-[1920px]:gap-10 pb-16 sm:pb-20 min-[1026px]:pb-[100px] min-[2500px]:pb-[160px]"
        >
          <div
            className="w-full min-[1026px]:w-[67.5%] relative aspect-video overflow-hidden rounded-[20px] z-20 shrink-0 self-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div
            className="w-full min-[1026px]:w-[32.5%] min-h-[440px] min-[1026px]:min-h-[580px] min-[2500px]:min-h-[800px] min-[3800px]:min-h-[1050px] bg-white rounded-none p-6 sm:p-8 min-[1026px]:p-9 min-[2500px]:p-14 min-[3800px]:p-18 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] flex flex-col justify-center space-y-5 sm:space-y-6 min-[2500px]:space-y-8 relative z-20"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div className="space-y-4 min-[2500px]:space-y-6">
              <h3 className="!text-[#2A2A2A] font-baloo font-semibold text-[22px] sm:text-[24px] min-[2500px]:text-[34px] min-[3800px]:text-[44px] leading-[140%] capitalize">
                Flexible ECG Solutions
              </h3>

              <div className="w-full h-px bg-black/15" />

              <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
                The RESTING ECG system combines high-quality ECG recording with automated analysis and reporting for
                efficient clinical use.
              </p>

              <div className="space-y-3.5 min-[2500px]:space-y-5 pt-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-[24px] h-[24px] min-[2500px]:w-[36px] min-[2500px]:h-[36px] min-[3800px]:w-[48px] min-[3800px]:h-[48px] rounded-full bg-[#0AADF9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-white stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[145%]">
                    <strong className="font-semibold !text-[#2A2A2A] text-inherit">Exercise Stress Testing</strong> – Supports
                    ECG-controlled testing with bicycle ergometers or treadmills.
                  </p>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-[24px] h-[24px] min-[2500px]:w-[36px] min-[2500px]:h-[36px] min-[3800px]:w-[48px] min-[3800px]:h-[48px] rounded-full bg-[#0AADF9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-white stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[145%]">
                    <strong className="font-semibold !text-[#2A2A2A] text-inherit">Resting ECG</strong> – Delivers 12-channel
                    standard recordings with automatic measurements.
                  </p>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-[24px] h-[24px] min-[2500px]:w-[36px] min-[2500px]:h-[36px] min-[3800px]:w-[48px] min-[3800px]:h-[48px] rounded-full bg-[#0AADF9] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-white stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[145%]">
                    <strong className="font-semibold !text-[#2A2A2A] text-inherit">VLP Analysis</strong> – Enables high-resolution
                    ECG analysis for ventricular late potentials.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-black/15" />

              <p className="!text-[#4A4A4A] font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
                Its optional software modules extend functionality to exercise stress testing, heart rate variability,
                QT dispersion, and ventricular late potential analysis.
              </p>
            </div>

            <div className="pt-2">
              <Button
                text="Learn More About Us"
                href="#about"
                variant="navy"
                showIcon={true}
                className="text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] min-[2500px]:!py-3.5 min-[2500px]:!px-7 min-[3800px]:!py-5 min-[3800px]:!px-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
