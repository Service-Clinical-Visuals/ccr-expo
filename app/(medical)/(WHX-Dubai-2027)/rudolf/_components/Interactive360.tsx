"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const highlights = [
  {
    title: "Flexible Blade Options",
    description: "Straight and curved blade options can be selected to suit different intubation needs.",
  },
  {
    title: "Enhanced Visual Access",
    description:
      "Integrated illumination delivers dependable lighting for clear visualization during laryngeal examination and intubation.",
  },
];

export default function Interactive360() {
  return (
    <section id="experience-360" className="w-full bg-primary py-12 sm:py-16 xl:py-20 2xl:py-[70px] min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 xl:gap-8 2xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* 360° video (after the content on mobile/tablet) */}
        <div
          className="order-2 xl:order-1 xl:col-span-7 relative w-full aspect-video xl:aspect-[852/477] overflow-hidden rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px] bg-[#EBEBEB]"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col items-start" data-aos="fade-left">
          <div className="flex items-center gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-7 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-5 2xl:w-6 min-[2500px]:w-9 min-[3800px]:w-12 h-[3px] min-[2500px]:h-1 min-[3800px]:h-1.5 rounded-full bg-white" />
            <Typography variant="h4" color="white" className="uppercase">
              360° Experience
            </Typography>
          </div>

          <Typography variant="h2" color="white" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Riester Laryngoscope Design &amp; Functionality
          </Typography>

          <Typography variant="p" color="white">
            The Riester laryngoscope features a battery-powered handle with integrated illumination and
            interchangeable straight or curved blades. Designed for direct viewing of the larynx, it supports
            healthcare professionals during endotracheal intubation for anesthesia or ventilation therapy.
          </Typography>

          <ul className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10 mt-6 sm:mt-7 2xl:mt-9 min-[2500px]:mt-12 min-[3800px]:mt-16">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-3 min-[3800px]:gap-5">
                <span className="mt-[0.55em] block w-2 h-2 min-[2500px]:w-3 min-[2500px]:h-3 min-[3800px]:w-4 min-[3800px]:h-4 bg-white shrink-0" />
                <Typography variant="p" color="white">
                  <Typography variant="span" color="white">
                    {item.title} —
                  </Typography>{" "}
                  {item.description}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-8 2xl:mt-9 min-[2500px]:mt-12 min-[3800px]:mt-16">
            <Button text="Explore More" variant="primary" href="#experience-360" />
          </div>
        </div>
      </div>
    </section>
  );
}
