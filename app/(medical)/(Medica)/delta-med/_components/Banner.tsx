import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full pt-[120px] md:pt-[140px] lg:pt-[140px] pb-8 lg:pb-12" data-aos="fade-up">
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen rounded-2xl md:rounded-[2rem] " data-aos="zoom-in" data-aos-delay="100">

          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />


          <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 xl:p-16 flex flex-col justify-end r">
            <div className="text-left pointer-events-auto w-full lg:w-[60%] xl:w-[50%]" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="leading-tight mb-4">
                Innovative technologies for human well-being
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
