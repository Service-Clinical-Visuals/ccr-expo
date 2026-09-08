"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const highlights = [
  {
    title: "Vortex-Fusion® Technology",
    body: "Combines cleansing, exfoliation, extraction, and infusion for an advanced treatment experience.",
  },
  {
    title: "Customized Treatments",
    body: "Adapt each treatment to individual skin concerns with targeted solutions and customizable settings.",
  },
  {
    title: "Advanced Extraction",
    body: "Helps remove impurities and congestion while maintaining a gentle treatment experience.",
  },
];

const Technology = () => {
  return (
    <section id="technology" className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-8 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6 order-1 xl:order-2 xl:col-span-5 w-full" data-aos="fade-left">
          <div className="flex flex-wrap gap-x-2">
            <Typography variant="h2" color="white" weight="bold">
              Technology in
            </Typography>
            <Typography variant="h2" color="primary" weight="bold">
              Every Treatment
            </Typography>
          </div>

          <Typography variant="p" color="white" className="leading-relaxed">
            Discover how HydraFacial technology brings multiple treatment steps together in one seamless experience. From exfoliation and extraction to targeted infusion, every stage is designed to work together while allowing treatments to be customized to individual skin needs.
          </Typography>

          <div className="flex flex-col gap-4">
            {highlights.map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-1">
                <Typography variant="h3" color="primary" weight="bold">
                  {title}
                </Typography>
                <Typography variant="p" color="white" className="leading-relaxed">
                  {body}
                </Typography>
              </div>
            ))}
          </div>

          <div className="pt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Product" href="#" />
          </div>
        </div>

        {/* Video */}
        <div
          className="w-full order-2 xl:order-1 xl:col-span-7 aspect-video relative  overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Technology;
