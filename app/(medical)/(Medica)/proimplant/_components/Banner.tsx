import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Banner() {
  return (
    <section className="relative w-full pt-[90px] md:pt-[100px] lg:pt-[120px]  min-[3800px]:pt-[480px] pb-8 lg:pb-12" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen rounded-2xl md:rounded-3xl shadow-xl" data-aos="zoom-in" data-aos-delay="100">

          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-fill" />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 pointer-events-none p-8 md:p-12 xl:p-16 flex flex-col justify-end">
            <div className="text-left pointer-events-auto max-w-3xl" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="mb-4">
                Our Understanding
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed font-medium mt-4 lg:w-[60%]">
                We Offer Innovative and Permanent Solutions For Hip and Knee Arthroplasty.
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
