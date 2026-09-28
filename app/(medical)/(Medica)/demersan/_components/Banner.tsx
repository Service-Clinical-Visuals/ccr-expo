import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Banner() {
  return (
    <section className="relative w-full pt-5 md:pt-10 mt-15 md:mt-20 lg:mt-20 2xl:mt-20 mt-4k-30 pb-8 lg:pb-8" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen" data-aos="zoom-in" data-aos-delay="100">

          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-fill" />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 pointer-events-none p-8 md:p-12 xl:pb-30 flex flex-col justify-end">
            <div className="text-left pointer-events-auto max-w-3xl lg:max-w-5xl" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="mb-4" style={{ fontFamily: '"Exo 2", sans-serif' }}>
                Specialised Medical<br />
                Solutions for Better Care
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
