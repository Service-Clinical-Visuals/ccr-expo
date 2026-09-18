"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function IntelligentControl() {
  return (
    <section
      id="intelligent-control"
      className="w-full bg-[#CCEBEC] py-16 sm:py-20 lg:py-24 xl:py-28 min-[2500px]:py-36 min-[3800px]:py-48 overflow-hidden"
    >
      <div className="custom-container">
        {/* Exactly 2 equal halves: 50% Video and 50% Text on Desktop/Wide Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 xl:gap-16 min-[2500px]:gap-20 min-[3800px]:gap-28 w-full">
          {/* Left Column: Video Clip 01 (order-2 on mobile, order-1 on desktop: 50% equal half) */}
          <div
            className="w-full relative aspect-video overflow-hidden rounded-[12px] sm:rounded-[16px] min-[2500px]:rounded-[20px] min-[3800px]:rounded-[28px] shadow-md border border-[#0099A1]/25 bg-white order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Text & CTA (order-1 on mobile, order-2 on desktop: 50% equal half) */}
          <div
            className="w-full flex flex-col items-start text-left space-y-5 sm:space-y-6 min-[2500px]:space-y-8 min-[3800px]:space-y-10 order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {/* Title */}
            <Typography
              variant="h2"
              color="dark"
              className="font-semibold leading-tight tracking-tight"
            >
              Intelligent Control. Precise Performance.
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="secondary"
              className="leading-relaxed"
            >
              The G44 combines advanced electrosurgical technology with
              intuitive operation, providing surgical teams with precise and
              reliable control throughout a wide range of procedures. Designed
              to support both monopolar and bipolar applications, the generator
              offers flexible performance for different surgical requirements,
              including specialized modes for urology and gynecology.
            </Typography>

            {/* Paragraph 2 */}
            <Typography
              variant="p"
              color="secondary"
              className="leading-relaxed"
            >
              Its 7-inch touchscreen interface provides clear access to operating
              parameters and configurable working modes, allowing users to make
              adjustments quickly and efficiently. Intelligent instrument
              recognition helps identify connected instruments and simplifies
              setup, while automatic power regulation continuously supports the
              selected operating conditions.
            </Typography>

            {/* Paragraph 3 */}
            <Typography
              variant="p"
              color="secondary"
              className="leading-relaxed"
            >
              With real-time parameter control, dedicated endoscopic modes, and
              bipolar resection capabilities, the G44 is designed to support
              smooth and efficient surgical workflows. Its combination of
              versatile functionality, straightforward operation, and advanced
              control technology makes it a practical solution for modern
              operating environments.
            </Typography>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Button variant="primary" href="#products">
                Explore Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
