"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="choose" className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-8 items-center">
        {/* Content (Heading + Text + Button) */}
        <div className="flex flex-col gap-6 order-1 xl:order-2 xl:col-span-6 w-full" data-aos="fade-left">
          <div className="flex flex-wrap gap-x-2">
            <Typography variant="h2" color="primary" weight="bold">
              Vortex-Fusion®
            </Typography>
            <Typography variant="h2" color="white" weight="bold">
              Technology
            </Typography>
          </div>

          <Typography variant="p" color="white" className="leading-relaxed">
            Experience advanced skincare powered by Vortex-Fusion® technology, combining cleansing, exfoliation, extraction, and infusion in one seamless treatment. Customizable spiral tips help tailor each treatment to individual skin concerns and goals, delivering a precise and personalized experience.
          </Typography>

          <div className="flex flex-col gap-2">
            <Typography variant="h3" color="primary" weight="bold">
              Smart Interface Technology
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              Smart Interface Technology makes every treatment more intuitive and personalized by providing access to saved client history, previous treatments, preferences, and skin concerns. Step-by-step on-screen instructions guide providers through the treatment process, helping deliver consistent, customized care with greater ease and efficiency.
            </Typography>
          </div>

          <div className="pt-2" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Product" href="#" />
          </div>
        </div>

        {/* Video */}
        <div
          className="w-full order-2 xl:order-1 xl:col-span-6 aspect-video relative shadow-2xl overflow-hidden bg-white/5 border border-white/10 "
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Deg360;
