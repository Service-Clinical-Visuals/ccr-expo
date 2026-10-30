"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const eyebrowLine =
  "block w-[54px] h-[2px] min-[2500px]:w-[80px] min-[2500px]:h-[3px] min-[3800px]:w-[108px] min-[3800px]:h-1 rounded-full bg-white shrink-0";

export default function Versatile() {
  return (
    <section id="esu-testing" className="w-full bg-white overflow-hidden">
      {/* Dark top: heading and the video, whose lower part hangs into the white area below */}
      <div className="w-full bg-primary bg-[url('/medical/fluke/bg2.webp')] bg-cover bg-center bg-no-repeat pt-12 sm:pt-16 xl:pt-[68px] min-[2500px]:pt-28 min-[3800px]:pt-40">
        <div className="custom-container flex flex-col items-center">
          <div
            className="flex flex-col items-center text-center mb-8 sm:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 mb-3 sm:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
              <span className={eyebrowLine} />
              <Typography variant="h5" color="white" weight="medium" className="uppercase">
                ESU Testing in Action
              </Typography>
              <span className={eyebrowLine} />
            </div>
            <Typography variant="h2" color="white" className="mb-5 sm:mb-7 min-[2500px]:mb-10 min-[3800px]:mb-14">
              Advanced ESU Testing, Simplified
            </Typography>
            <Typography variant="p" color="white" className="xl:max-w-[72%]">
              Discover reliable ESU testing solutions designed to evaluate electrosurgical unit performance. Explore
              how precise measurements and comprehensive safety testing help biomedical professionals verify equipment
              functionality and support reliable surgical performance.
            </Typography>
          </div>

          {/* Only the top ~16% of the video sits on the dark band; the negative margin pulls the white area up */}
          <div
            className="relative z-10 w-full xl:w-[69%] aspect-[1024/565] -mb-[46%] xl:-mb-[31.9%] overflow-hidden bg-[#EBEBEB]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* White lower area: spacer matches the video overhang */}
      <div className="custom-container">
        <div className="w-full pt-[46%] xl:pt-[35.9%]" />
      </div>
    </section>
  );
}
