"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Deg360 = () => {
  return (
    <section id="360" className="w-full py-16 xl:py-24 bg-cover bg-center bg-no-repeat overflow-hidden relative" style={{ backgroundImage: "url('/medical/progetti/bg.png')" }}>

      {/* Background Overlay (Optional if image needs darkening) */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="custom-container relative z-10">

        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center mb-10 min-[3800px]:mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 min-[3800px]:gap-8 mb-4 min-[3800px]:mb-8 w-full">
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
            <Typography variant="h2" color="dark" className="whitespace-nowrap">
              PG 907s Infusion pump
            </Typography>
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
          </div>
          <Typography variant="p" color="dark" className="xl:max-w-[70%]">
            The PG 907s combines advanced syringe infusion technology with precise control and reliable performance to support accurate medication delivery. Its intuitive operation and safety-focused features are designed to provide healthcare professionals with greater confidence and control throughout infusion procedures.
          </Typography>
        </div>

        {/* Video Area */}
        <div className="w-full flex justify-center" data-aos="fade-up" data-aos-delay="100">
          {/* We create a massive bounding box for the player */}
          <div className="w-[90%] lg:w-[80%] aspect-video  backdrop-blur-sm rounded-xl min-[3800px]:rounded-[3rem]  shadow-xl overflow-hidden flex items-center justify-center relative min-h-[400px]">

            {/* Note: DynamicVideoPlayer usually expects a URL, assuming default prop setup handles the 360 viewer */}
            <div className="absolute inset-0 w-full h-full">
              <DynamicVideoPlayer type="360" />
            </div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;
