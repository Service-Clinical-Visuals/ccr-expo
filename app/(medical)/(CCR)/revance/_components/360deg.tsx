"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-20 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-10 items-center text-center">
        {/* Content (Heading + Text) */}
        <div className="flex flex-col gap-4 items-center w-full xl:max-w-[60%]" data-aos="fade-up">
          <div className="flex items-center gap-4 justify-center">
            <Typography variant="h2" color="primary">
              Explore SkinPen® In 360°
            </Typography>
            <div className="w-10 h-1 bg-primary hidden md:block"></div>
          </div>

          <Typography variant="p" color="dark" className="leading-relaxed  font-medium">
            Take a closer look at SkinPen® through an interactive 360° experience. Explore its sleek design, precision microneedling technology, and innovative features designed to stimulate natural collagen production and support healthier-looking skin.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="w-full xl:max-w-[70%] aspect-video relative  overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Deg360;
