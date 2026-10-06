"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function TerameshVideo2() {
  return (
    <section id="stabilization" className="w-full py-16 xl:py-24 bg-[#00425E] text-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-8 md:gap-12 text-center">
        

        <div className="flex flex-col items-center gap-3 w-full max-w-[90%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            Reliable Mesh For Abdominal Wall Stabilization
          </Typography>
          <Typography variant="p" color="white" className="text-white/85 text-sm sm:text-base leading-relaxed">
            TERAMESH® Non-Absorbable is a polypropylene monofilament mesh implant designed for abdominal wall stabilization in hernia and eventration cases. It is suitable for both open and laparoscopic surgical techniques.
          </Typography>
        </div>

        <div
          className="w-full xl:max-w-[70%] mx-auto aspect-video rounded-[24px] sm:rounded-[30px] overflow-hidden relative shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-black/20"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
