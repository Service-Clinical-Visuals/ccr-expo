"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="choose" className="w-full py-16 xl:py-24 bg-[url('/truemed/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative">
      <div className="custom-container flex flex-col items-center text-center gap-8 xl:gap-10">

        {/* Top Content: Heading and Text */}
        <div className="flex flex-col gap-2 w-full items-center max-w-[90%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h3" color="secondary" >
            ■ Proximal Femoral Nail
          </Typography>

          <Typography variant="h2" color="dark">
            Enhanced Compression and Rotational Stability
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed mt-2">
            The enhanced A PFN features an advanced sliding compression mechanism that enables controlled and dynamic fracture stabilization, ensuring precise alignment and effective load distribution. It is complemented by a specially engineered blade that significantly enhances rotational stability, providing secure fixation, improved biomechanical performance, and consistent, optimal clinical outcomes.
          </Typography>
        </div>

        {/* Video Block */}
        <div
          className="w-full  xl:max-w-[70%] mx-auto aspect-video relative  overflow-hidden "
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* We are placing the 360 video player here. */}
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Bottom Button */}
        <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
          <Button text="Explore PFN" variant="secondary" href="#products" />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
