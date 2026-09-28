"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-20 lg:py-28 relative overflow-hidden bg-[#575656]">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 w-full h-full opacity-10"
        style={{ backgroundImage: 'url("/medical/innovations/bg.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      />

      <div className="custom-container relative z-10 flex flex-col">

        {/* Text Content and Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-10 pb-8 border-b border-white/20 gap-8" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-[70%]">
            <Typography variant="h2" color="white" className="leading-tight">
              Explore Tifix&reg; Femoral Condyles In 360&deg;
            </Typography>
            <Typography variant="p" color="white" className="opacity-90 leading-relaxed text-sm md:text-base">
              Take a closer look at the Tifix&reg; Femoral Condyles system through an interactive 360&deg; experience. Explore its plate design, screw compatibility, and available configurations.
            </Typography>
          </div>
          <div className="flex-shrink-0 mt-4 lg:mt-0">
            <Button text="View in 360°" variant="secondary" showIcon={true} />
          </div>
        </div>

        {/* Video Player */}
        <div
          className="w-full mx-auto xl:max-w-[70%] relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-none rounded-bl-none shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-full aspect-video ">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
