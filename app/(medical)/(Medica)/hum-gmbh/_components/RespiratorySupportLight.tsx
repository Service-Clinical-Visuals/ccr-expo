"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function RespiratorySupportLight() {
  return (
    <section id="respiratory-support-light" className="w-full py-16 sm:py-20 lg:py-28 min-[2500px]:py-36 min-[3800px]:py-48 bg-[#F5F6FA] overflow-hidden">
      <div className="custom-container">
        {/* Mobile/Tablet Heading: appears above video up to 1500px */}
        <div className="block min-[1500px]:hidden mb-6 sm:mb-8" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="font-['Exo_2'] font-bold"
          >
            Comfortable Respiratory Support
          </Typography>
          <div className="w-[110px] sm:w-[140px] h-[4px] sm:h-[5px] bg-[#A12624] mt-3" />
        </div>

        <div className="grid grid-cols-1 min-[1500px]:grid-cols-12 gap-8 sm:gap-10 min-[1500px]:gap-14 min-[2500px]:gap-20 items-center">

          <div
            className="min-[1500px]:col-span-7 relative w-full aspect-video"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="min-[1500px]:col-span-5 flex flex-col space-y-5 min-[2500px]:space-y-8" data-aos="fade-left">
            {/* Desktop Heading: visible on 1500px+ */}
            <div className="hidden min-[1500px]:block">
              <Typography
                variant="h2"
                color="dark"
                className="font-['Exo_2'] font-bold"
              >
                Comfortable Respiratory Support
              </Typography>
              <div className="w-[110px] sm:w-[140px] min-[2500px]:w-[200px] min-[3800px]:w-[280px] h-[4px] sm:h-[5px] min-[2500px]:h-[8px] min-[3800px]:h-[10px] bg-[#A12624] mt-3" />
            </div>

            <Typography variant="p" color="gray" className="leading-relaxed">
              The Aero CPAP Mask is designed to provide comfortable and effective non-invasive respiratory support for patients requiring assisted breathing. Its soft silicone cushion creates a secure seal while helping minimize pressure around the nose bridge, supporting comfort during extended therapy sessions.
            </Typography>

            <Typography variant="p" color="gray" className="leading-relaxed">
              Adjustable headgear and interchangeable elbows allow for a personalized fit and easy connection to compatible CPAP and ventilator systems. With optional safety valve and MaxShield configurations, the Aero CPAP Mask offers flexibility, dependable performance, and enhanced comfort for a wide range of respiratory care applications.
            </Typography>

            <div className="py-2 my-1">
              <Typography variant="quote" color="primary-blue" weight="semibold" className="block leading-snug">
                &ldquo;Comfortable breathing support, designed for confidence throughout every therapy session.&rdquo;
              </Typography>
            </div>

            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#cpap"
                showIcon={true}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
