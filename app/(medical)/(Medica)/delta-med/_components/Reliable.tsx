"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Reliable = () => {
  return (
    <section
      id="reliable"
      className="w-full py-16 bg-secondary relative overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-6  min-[3800px]:gap-10 items-center">

        {/* Top Header Row */}
        <div className="flex flex-col items-center text-center gap-2 min-[3800px]:gap-8 w-full xl:w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold">
            Reliable Engine Sealing
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed">
            SKT gasket sets are designed to create secure and reliable seals between critical engine components. They help prevent the leakage of oil, coolant, and combustion gases while maintaining proper separation between different engine systems. With precise construction and application-specific designs, SKT gasket solutions support consistent engine performance and dependable operation under demanding operating conditions and environments.
          </Typography>
        </div>

        {/* Video Container */}
        <div className="w-full relative xl:max-w-[90%] mx-auto overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] " data-aos="zoom-in" data-aos-delay="100">
          <div className="w-full aspect-[16/9]  ">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reliable;
