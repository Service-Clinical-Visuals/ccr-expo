"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Simple = () => {
  return (
    <section id="simple" className="w-full relative overflow-hidden bg-white">
      {/* Background split: Dark top, white bottom? Looking at the screenshot, the background behind text is black. Let's create a black top block and let the video overlap or just have black top padding. */}

      {/* Dark background section */}
      <div className="w-full bg-[#111111] pt-20 pb-48 lg:pb-56 relative z-0">
        <div className="custom-container flex flex-col items-center text-center gap-6" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4">
            <Typography variant="h2" color="white">
              Simple Treatment. Visible Confidence
            </Typography>
            <div className="w-12 h-1 bg-white hidden md:block"></div>
          </div>
          <Typography variant="p" color="white" className="leading-relaxed text-gray-300 xl:max-w-[60%] text-sm md:text-base font-medium">
            SkinPen offers a quick, personalized treatment experience tailored to individual skin types and goals. With minimal downtime and extensive clinical validation, it provides a convenient approach to achieving healthier-looking skin.
          </Typography>
        </div>
      </div>

      {/* Video Container pulled up over the dark background */}
      <div className="w-full relative z-10 -mt-32 lg:-mt-40 pb-16">
        <div className="custom-container flex justify-center">
          <div className="w-full xl:max-w-[70%] aspect-video relative  overflow-hidden " data-aos="zoom-in" data-aos-delay="200">
            {/* The user explicitly requested: "instead of video clip o02 add dynamic videoplaye short-1" */}
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Simple;
