"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const features = [
  { title: "Intuitive Android Interface", icon: "icon1.webp" },
  { title: "Advanced ECG Recording", icon: "icon2.webp" },
  { title: "Efficient Workflow Controls", icon: "icon3.webp" },
  { title: "Clear ECG Visualization", icon: "icon4.webp" },
  { title: "Digital Data Management", icon: "icon5.webp" },
];

export default function Innovation() {
  return (
    <section id="technology" className="w-full overflow-hidden">
      {/* Light top: heading, content and the video, which overlaps into the navy band */}
      <div className="w-full bg-[#F1F4FE] pt-12 sm:pt-16  min-[2500px]:pt-28 min-[3800px]:pt-40">
        <div className="custom-container flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-6 sm:mb-7 min-[2500px]:mb-12 min-[3800px]:mb-16" data-aos="fade-up">
            <Typography variant="h5" color="secondary" weight="medium" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
              Discover TouchECG Android
            </Typography>
            <Typography variant="h2" color="dark" className="mb-4 sm:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
              Simplicity Meets Diagnostic Precision
            </Typography>
            <Typography variant="p" color="dark" className="xl:max-w-[56%]">
              Experience the power of TouchECG Android, where advanced ECG technology meets intuitive touchscreen
              operation. It supports efficient workflows and convenient access to essential diagnostic functions.
            </Typography>
          </div>

          {/* Bottom margin pulls the navy band up to ~24% of the video height */}
          <div
            className="relative z-10 w-full xl:w-[72%] aspect-[913/504] -mb-[13.5%] xl:-mb-[9.7%] overflow-hidden"
            data-aos="fade-up"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Navy band with feature icons */}
      <div className="w-full bg-[#071046] pb-10 sm:pb-12 min-[2500px]:pb-20 min-[3800px]:pb-28">
        <div className="custom-container flex flex-col items-center">
          <div className="w-full pt-[13.5%] xl:pt-[9.7%]" />
          {/* Same width as the video so the icon columns line up under it */}
          <div className="w-full xl:w-[72%] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-8 xl:gap-x-0 mt-7 min-[2500px]:mt-12 min-[3800px]:mt-16">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="flex items-center justify-center w-[65px] h-[65px] min-[2500px]:w-[76px] min-[2500px]:h-[76px] min-[3800px]:w-[100px] min-[3800px]:h-[100px] rounded-full bg-white/15 border border-white/30">
                  <img
                    src={`/medical/cardioline/${item.icon}`}
                    alt=""
                    aria-hidden="true"
                    className="w-9 h-9 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 object-contain"
                  />
                </div>
                <Typography variant="h3" color="white" weight="semibold" className="max-w-[200px] min-[2500px]:max-w-[230px] min-[3800px]:max-w-[300px]">
                  {item.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
