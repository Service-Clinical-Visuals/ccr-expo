"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[560px] overflow-hidden flex flex-col justify-end pb-14 sm:pb-20 xl:pb-24 2xl:pb-28 min-[2500px]:pb-40 min-[3800px]:pb-56"
    >
      {/* Full-screen background video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      <div className="custom-container relative z-10">
        {/* Bottom-Left Content */}
        <div
          className="relative z-20 w-full sm:max-w-[85%] md:max-w-[720px] 2xl:max-w-[740px] min-[2500px]:max-w-[1110px] min-[3800px]:max-w-[1480px] flex flex-col items-start gap-3 sm:gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10 pointer-events-auto"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3">
            <span className="block w-[54px] h-[2px] min-[2500px]:w-[80px] min-[2500px]:h-[3px] min-[3800px]:w-[108px] min-[3800px]:h-1 rounded-full bg-secondary shrink-0" />
            <Typography variant="h5" color="white" weight="medium" className="uppercase">
              Biomedical Testing &amp; Quality Assurance
            </Typography>
          </div>

          <Typography variant="h1" color="white" className="drop-shadow-md">
            Advancing Medical Equipment Performance Through Precision
          </Typography>

          <div className="pt-3 sm:pt-4 min-[2500px]:pt-6 min-[3800px]:pt-8">
            <Button text="Explore More" variant="primary" href="#about" showIcon={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
