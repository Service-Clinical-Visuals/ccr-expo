"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

/**
 * Explore ALBIT in 360°: a teal band (rounded bottom-right corner) with the heading,
 * intro, tagline and CTA, followed by a product image card beside the 360° video card.
 */
const Explore360 = () => {
  return (
    <section
      id="explore-360"
      className="relative w-full pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      <div className="custom-container">
        {/* Teal band */}
        <div
          className="bg-primary rounded-br-[28px] 2xl:rounded-br-[36px] min-[2500px]:rounded-br-[52px] min-[3800px]:rounded-br-[72px] px-5 sm:px-8 xl:px-[2.4vw] py-7 sm:py-8 2xl:py-10 min-[2500px]:py-14 min-[3800px]:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10 min-[2500px]:gap-16"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 2xl:gap-3 min-[2500px]:gap-5 lg:max-w-[60%]">
            <h2 className="text-white">Explore ALBIT In 360°</h2>
            <p className="text-white/90">
              Explore the Echo-Son ALBIT through an immersive 360° experience, showcasing its
              compact design, advanced imaging technology, and user-friendly controls for
              versatile diagnostics.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start lg:items-end gap-3 2xl:gap-4 min-[2500px]:gap-6">
            <h4 className="tagline text-white lg:text-right">
              Advanced General-Purpose
              <br />
              Ultrasound Technology
            </h4>
            <Button text="Explore 360° View" href="#explore-360-video" variant="white" />
          </div>
        </div>

        {/* Product image + 360° video */}
        <div className="mt-10 sm:mt-12 xl:mt-14 2xl:mt-16 min-[2500px]:mt-24 min-[3800px]:mt-32 grid grid-cols-1 md:grid-cols-[1fr_2.07fr] gap-5 sm:gap-6 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
          <div
            className="flex items-center justify-center bg-white rounded-[22px] 2xl:rounded-[28px] min-[2500px]:rounded-[38px] min-[3800px]:rounded-[48px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-6 sm:p-8 2xl:p-10 min-[2500px]:p-14"
            data-aos="fade-right"
          >
            <img
              src="/medical/echo-son/360.webp"
              alt="Echo-Son ALBIT ultrasound scanner"
              width={409}
              height={470}
              className="block w-auto h-auto max-w-[80%] md:max-w-[85%] max-h-[340px] md:max-h-none"
            />
          </div>

          <div
            id="explore-360-video"
            className="relative w-full aspect-video  overflow-hidden bg-[#F2F2F2] rounded-[20px] 2xl:rounded-[24px] min-[2500px]:rounded-[36px] min-[3800px]:rounded-[48px] "
            data-aos="fade-left"
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
};

export default Explore360;
