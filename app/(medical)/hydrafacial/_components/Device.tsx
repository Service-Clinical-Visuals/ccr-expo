"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Device = () => {
  return (
    <section id="device" className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-2" data-aos="fade-up">
          <Typography variant="h2" color="white" weight="bold">
            Meet the
          </Typography>
          <Typography variant="h2" color="primary" weight="bold">
            HydraFacial Device
          </Typography>
        </div>

        <Typography
          variant="p"
          color="white"
          className="leading-relaxed xl:max-w-[70%]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Designed to elevate the professional skincare experience, the HydraFacial device brings advanced technology, intuitive operation, and customizable treatment capabilities together in one powerful system. Explore the device up close and see how it works in real time.
        </Typography>

        <div
          className="w-full aspect-video relative shadow-2xl overflow-hidden xl:max-w-[75%] mt-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Device;
