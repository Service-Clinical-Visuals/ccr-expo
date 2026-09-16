"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-16  bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 items-center text-center">
        {/* Content (Heading + Text) */}
        <div className="flex flex-col gap-6 items-center w-full  xl:max-w-[65%]" data-aos="fade-up">
          <div className="flex items-center gap-4 justify-center">
            <Typography variant="h2" color="dark">
              Anatomical Stability & Fixation
            </Typography>
            <div className="w-10 sm:w-16 h-1.5 bg-[#0C71C3] rounded-xl"></div>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            The Karey Stem combines strength, anatomical respect, and reliable fixation. Its progressive trapezoidal geometry ensures optimal adaptation, anti-translational and anti-rotational stability, while preventing prosthesis sinking.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="w-full lg:max-w-[80%]  aspect-video relative overflow-hidden shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover " />
        </div>
      </div>
    </section>
  );
};

export default Deg360;
