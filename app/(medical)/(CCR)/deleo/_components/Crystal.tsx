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
                Technical Performance
              </Typography>
            </div>

            <Typography variant="h2" color="dark">
              Advanced Cryolipolysis Technology
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              CRISTAL Ultra® combines advanced ergonomics, enhanced safety, and an intuitive interface for precise and controlled treatment. Its compact and lightweight design, silent operation, flexible cords, pre-recorded treatment protocols, RFID-enabled consumable tracking, and real-time temperature monitoring are designed to support efficient and reliable clinical use. Together, these features provide a streamlined platform for precise treatment management and enhanced clinical control.

            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              The platform also integrates advanced radiofrequency technology and an optional 7.5 MHz ultrasound probe for precise treatment assessment. It offers MDR certification and versatile face-and-body treatment capabilities.
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
