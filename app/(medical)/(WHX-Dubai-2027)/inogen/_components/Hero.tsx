"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

/**
 * Hero Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Viewport Sizing & Header Clearance:
 *    - Full-viewport height: `w-full h-screen min-h-screen min-h-[100dvh]`.
 *    - Responsive top padding offset (`pt-[94px]` to `min-[3800px]:pt-[265px]`) dynamically accounts
 *      for the fixed/floating navigation header height across mobile, tablet, desktop, and 4K viewports.
 * 2. Background Video Integration:
 *    - Uses `DynamicVideoPlayer` with `type="banner"`, filling the container absolutely (`inset-0 w-full h-full object-cover`).
 * 3. Text & Content Constraints:
 *    - Content block is strictly constrained with `w-full max-w-full xl:max-w-[70%]` for optimal line length.
 *    - Heading and paragraph text also adhere to `xl:max-w-[70%]` desktop limits.
 * 4. Corner Geometry:
 *    - Asymmetric corner radius on the banner card: `rounded-tl-[20px] sm:rounded-tl-[30px]` and
 *      `rounded-br-[20px] sm:rounded-br-[30px]` with sharp `rounded-tr-none rounded-bl-none`.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] flex flex-col pt-[94px] sm:pt-[102px] md:pt-[108px] lg:pt-[116px] xl:pt-[120px] 2xl:pt-[124px] min-[2500px]:pt-[170px] min-[3800px]:pt-[265px] pb-3 sm:pb-4 lg:pb-5 min-[2500px]:pb-6 min-[3800px]:pb-10 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Full-Height Rounded Hero Banner Card with clean offset below navigation header */}
        <div
          className="relative w-full h-full flex-1 rounded-tl-[20px] sm:rounded-tl-[30px] rounded-br-[20px] sm:rounded-br-[30px] rounded-tr-none rounded-bl-none overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 min-[3800px]:p-28 bg-[#0A192F]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
              type="banner"
            />
          </div>

          {/* Top Badge Slot */}
          <div className="relative z-10 self-start" data-aos="fade-down" data-aos-delay="200">

          </div>

          {/* Bottom Content Area: Constrained to xl:max-w-[70%] for optimal readability */}
          <div
            className="relative z-20 w-full max-w-full xl:max-w-[70%] text-left space-y-4 sm:space-y-6 pointer-events-auto pb-4 sm:pb-6 lg:pb-8 min-[2500px]:pb-14 min-[3800px]:pb-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="h1"
              color="white"
              className="leading-tight drop-shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl !font-bold w-full max-w-full xl:max-w-[70%]"
            >
              Inogen Is Innovative Oxygen
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg font-normal w-full max-w-full xl:max-w-[70%]"
            >
              At Inogen, we’re pioneers in the development of portable oxygen technology, helping businesses reduce overhead, increase profitability and provide a superior product.
            </Typography>

            <div className="pt-2">
              <Button
                text="Explore Our Products"
                variant="primary"
                href="#products"
                showIcon={true}
                className="bg-[#0B3090] hover:bg-[#082470] text-white rounded-lg px-6 py-3 font-semibold text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
