"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

/**
 * Full-screen banner: a rounded video card inset from the viewport edges by the same
 * amount as the floating header, sitting just below it.
 */
const Banner = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[100svh] min-h-[520px] min-[2500px]:min-h-[900px] px-[var(--page-inset)] pt-[calc(var(--header-h)+var(--header-gap)*2)] pb-[var(--header-gap)]"
    >
      <div className="relative w-full h-full overflow-hidden bg-black rounded-[12px] min-[2500px]:rounded-[20px] min-[3800px]:rounded-[28px]">
        {/* Background video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>


        {/* Heading + CTA — bottom left */}
        <div className="relative z-10 h-full flex items-end pb-12 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48">
          <div className="w-full px-5 sm:px-8 xl:px-[2.4vw]">
            <h1
              className="text-white max-w-[95%] sm:max-w-[520px] xl:max-w-[480px] 2xl:max-w-[560px] min-[1920px]:max-w-[660px] min-[2500px]:max-w-[900px] min-[3800px]:max-w-[1250px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ultrasound Technology Designed And Manufactured In Poland
            </h1>

            <div
              className="mt-4 sm:mt-5 2xl:mt-6 min-[2500px]:mt-10 min-[3800px]:mt-14"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <Button text="Explore Our Solutions" href="#solutions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
