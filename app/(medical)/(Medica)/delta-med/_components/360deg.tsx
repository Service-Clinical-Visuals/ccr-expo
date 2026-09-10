"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="360-experience"
      className="w-full py-16 bg-secondary relative overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/40 pb-6 gap-6" data-aos="fade-up">
          <div className="w-full md:w-[65%] lg:w-[50%] flex flex-col gap-4">
            <Typography variant="h2" color="white" className="font-bold">
              360° Product Experience
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              Experience SKT gasket solutions through an immersive 360° view. Explore the product design, construction, and details from every angle while discovering the precision and engineering behind SKT's sealing solutions.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button text="Explore in 360°" href="#explore" showIcon={true} iconVariant="white" />
          </div>
        </div>

        {/* Video Container */}
        <div className="w-full relative  xl:max-w-[80%] mx-auto shadow-2xl overflow-hidden rounded-tl-[3rem] rounded-br-[3rem]" data-aos="zoom-in" data-aos-delay="100">
          <div className="w-full aspect-video bg-[#121c22]">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
