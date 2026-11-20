"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

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
            className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none"
          />
        </div>

       

        {/* Heading — bottom left, aligned with the header logo */}
        <div className="relative z-10 h-full flex items-end pb-14 sm:pb-20 xl:pb-28 2xl:pb-32 min-[2500px]:pb-48 min-[3800px]:pb-64">
          <div className="custom-container">
            <h1
              className="text-white max-w-[90%] sm:max-w-[620px] 2xl:max-w-[760px] min-[2500px]:max-w-[1100px] min-[3800px]:max-w-[1500px] drop-shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A wealth of experience and quality <br className="hidden sm:block" />
              worthy of a legend
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
