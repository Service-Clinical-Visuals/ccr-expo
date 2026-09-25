"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "Portable & Compact",
    desc: "Designed for convenient use across different clinical environments.",
  },
  {
    title: "Clear ECG Recording",
    desc: "Supports accurate and reliable electrocardiogram acquisition.",
  },
  {
    title: "User-Friendly Operation",
    desc: "Simple controls enable efficient and convenient handling.",
  },
  {
    title: "Professional Monitoring",
    desc: "Developed to support healthcare professionals in cardiac assessment.",
  },
];

export default function Interactive360() {
  return (
    <section
      id="360-view"
      className="w-full py-16 xl:py-24 min-[2500px]:py-36 bg-[#1A171B] text-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Mobile & Tablet Heading */}
        <div className="xl:hidden w-full space-y-3 mb-8" data-aos="fade-up">
          <Typography variant="h2" color="white">
            Engineering Better <span className="text-[#4C75D8]">Healthcare</span>
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed opacity-90">
            Explore the T Cardio 6 through an interactive 360° view and discover its compact design, intuitive controls, and practical features. Designed for convenient ECG recording and reliable cardiac monitoring, it brings essential diagnostic technology closer to where it is needed.
          </Typography>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14 w-full">
          {/* Left Column: 360 Video Player */}
          <div
            className="w-full xl:w-1/2 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="w-full aspect-video relative overflow-hidden bg-black border border-white/10 shadow-2xl group">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: Details & Features */}
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 min-[2500px]:gap-8 min-[3800px]:gap-10"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {/* Desktop Heading */}
            <div className="hidden xl:flex flex-col gap-4">
              <Typography variant="h2" color="white">
                Engineering Better <span className="text-[#4C75D8]">Healthcare</span>
              </Typography>

              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                Explore the T Cardio 6 through an interactive 360° view and discover its compact design, intuitive controls, and practical features. Designed for convenient ECG recording and reliable cardiac monitoring, it brings essential diagnostic technology closer to where it is needed.
              </Typography>
            </div>

            {/* Bordered Feature Box */}
            <div className="border-2 border-[#3452A7] rounded-2xl p-5 sm:p-6 min-[2000px]:p-7 min-[2500px]:p-9 min-[3800px]:p-12 bg-white/[0.02] space-y-3.5 min-[2000px]:space-y-5 min-[2500px]:space-y-6 min-[3800px]:space-y-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[2000px]:gap-4 min-[2500px]:gap-5">
                  <div className="shrink-0 mt-0.5 min-[2000px]:mt-1 flex items-center justify-center text-[#8FBFFA]">
                    <svg
                      className="w-4 h-4 min-[2000px]:w-5 min-[2000px]:h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>

                  <p className="font-dmsans text-[15px] sm:text-[16px] xl:text-[17px] min-[2000px]:text-[20px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] text-white leading-snug">
                    <strong className="font-bold text-white text-inherit">{item.title}</strong> —{" "}
                    <span className="text-white/85 font-normal text-inherit">{item.desc}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button: Explore Product */}
            <div className="pt-1">
              <Button
                text="Explore Product"
                href="#products"
                variant="primary"
                showIcon={false}
                className="min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
