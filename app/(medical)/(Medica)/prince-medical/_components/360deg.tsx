"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-20 bg-primary overflow-hidden">
      <div className="custom-container flex flex-col gap-10 items-center text-center">
        {/* Content (Heading + Text) */}
        <div className="flex flex-col gap-4 items-center w-full xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="white">
            Explore PM-CARE SPECULUM In 360°
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed font-medium">
            Take a closer look at the PM-CARE SPECULUM through an interactive 360° experience. Explore its design, Cusco and Collin models, and features developed for clear visualization and controlled access during gynecological examinations.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="w-[90%] md:w-[80%] xl:w-[75%] 2xl:w-[70%] min-[3800px]:w-[65%] aspect-video relative overflow-hidden"
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
