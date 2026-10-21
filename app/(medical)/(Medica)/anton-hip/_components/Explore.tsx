"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Explore() {
  return (
    <section id="explore" className="w-full py-16 md:py-24 min-[3800px]:py-36 bg-[#111111] text-white relative overflow-hidden">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 min-[3800px]:gap-20 items-center">
          {/* Right Column Content on Desktop (Order 1 on tablet/mobile: heading and content first!) */}
          <div
            className="flex flex-col order-1 lg:order-2 lg:col-span-6 xl:col-span-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Section Heading */}
            <Typography variant="h2" color="white" weight="bold">
              Explore Facial Implants in 360°
            </Typography>

            {/* Intro Description */}
            <Typography
              variant="p"
              color="white"
              className="text-gray-300 mt-3 sm:mt-4 min-[3800px]:mt-6 mb-6 sm:mb-8 min-[3800px]:mb-12 leading-relaxed"
            >
              Explore Anton Hipp&apos;s facial implants through an immersive 360° view, showcasing precise contours, innovative engineering, and anatomical designs for facial reconstruction and surgical planning.
            </Typography>

            {/* Features */}
            <div className="flex flex-col gap-6 min-[3800px]:gap-10">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 sm:gap-5 min-[3800px]:gap-7">
                <div className="w-11 h-11 sm:w-12 sm:h-12 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-1">
                  <img
                    src="/medical/anton-hip/icon1.png"
                    alt="Precision Icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-10 min-[3800px]:h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <Typography variant="h4" color="primary" weight="semibold">
                    Precision-Engineered Implant Design
                  </Typography>
                  <Typography
                    variant="p"
                    color="white"
                    className="text-gray-300 text-sm sm:text-base min-[3800px]:text-xl mt-1 leading-relaxed"
                  >
                    Designed to ensure an optimal fit, reliable performance, and long-term stability, delivering consistent support and lasting results for complex clinical applications.
                  </Typography>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 sm:gap-5 min-[3800px]:gap-7">
                <div className="w-11 h-11 sm:w-12 sm:h-12 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-1">
                  <img
                    src="/medical/anton-hip/icon2.png"
                    alt="Facial Reconstruction Icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-10 min-[3800px]:h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <Typography variant="h4" color="primary" weight="semibold">
                    Designed for Facial Reconstruction
                  </Typography>
                  <Typography
                    variant="p"
                    color="white"
                    className="text-gray-300 text-sm sm:text-base min-[3800px]:text-xl mt-1 leading-relaxed"
                  >
                    Designed to support improved functionality while preserving natural aesthetics, ensuring a harmonious balance between structural precision, patient needs, and visually refined outcomes.
                  </Typography>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 min-[3800px]:mt-14">
              <Button
                text="Explore Facial Implants"
                href="#products"
                variant="primary"
                showArrow={true}
              />
            </div>
          </div>

          {/* Left Column Video on Desktop (Order 2 on tablet/mobile: video after content!) */}
          <div
            className="w-full relative order-2 lg:order-1 lg:col-span-6 xl:col-span-7 flex flex-col h-full"
            data-aos="fade-right"
          >
            <div className="w-full aspect-[16/10] sm:aspect-video lg:aspect-[16/10] rounded-xl min-[3800px]:rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 bg-[#181818] flex items-center justify-center group min-h-[280px]">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
