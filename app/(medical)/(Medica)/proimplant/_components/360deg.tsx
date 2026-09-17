"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-16 bg-primary overflow-hidden">
      <div className="custom-container flex flex-col gap-8 items-center text-center">
        {/* Content (Heading + Text) */}
        <div className="flex flex-col gap-4 items-center w-full xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="white">
            Anatomical Stability & Fixation
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed font-normal">
            The Karey Stem combines strength, anatomical respect, and reliable fixation. Its progressive trapezoidal geometry ensures optimal adaptation, anti-translational and anti-rotational stability, while preventing prosthesis sinking.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="w-full xl:max-w-[80%] aspect-[16/9] relative overflow-hidden mt-2"
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
