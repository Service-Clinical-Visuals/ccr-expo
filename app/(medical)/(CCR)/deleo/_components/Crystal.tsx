"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Crystal = () => {
  return (
    <section id="crystal" className="w-full py-16 xl:py-24 bg-[#F1F1F1] overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">

          {/* Video Content (Left side on Desktop, Bottom on Mobile/Tablet) */}
          <div className="w-full xl:w-[60%] relative aspect-video overflow-hidden order-2 xl:order-1" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Content (Right side on Desktop, Top on Mobile/Tablet) */}
          <div className="flex flex-col gap-6 w-full xl:w-[40%] order-1 xl:order-2" data-aos="fade-left">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-black"></div>
              <Typography variant="h4" color="dark" className="!font-bold">
                Cryolipolysis x Radiofrequency :
              </Typography>
            </div>

            <Typography variant="h2" color="dark">
              CRYSTAL ULTRA®
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              The first platform to fuse 3rd generation cryolipolysis and multipolar radiofrequency in a clinically validated tri-active protocol. MDR certified — the strictest European standard on the market. The market is evolving. Patients arrive at clinics expecting precision, with clinical benchmarks in mind, and zero tolerance for invisible results. Cristal Ultra® responds to this new reality by combining two complementary technologies in a unique sequential protocol.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Multipolar radiofrequency thermally prepares adipose tissue before cryolipolysis, maximizing the cellular response to cold. After cryolipolysis, it completes the process: lymphatic drainage, neocollagenesis, and skin firming.
            </Typography>

            <div className="pt-4">
              <Button text="Learn More" variant="primary" href="#crystal" showIcon={false} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Crystal;
