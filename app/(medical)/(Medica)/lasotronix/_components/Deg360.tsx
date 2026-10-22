"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const Deg360 = () => {
  const features = [
    "Multiple laser wavelengths support diverse dermatological and aesthetic procedures, offering flexibility for various clinical requirements.",
    "An intuitive interface and customizable protocols enable clinicians to adjust treatment parameters to individual patient needs.",
    "Advanced diode laser technology supports precise treatments with minimal tissue invasiveness, reliable operation, and low operating costs.",
  ];

  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#121111] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        {/* Centered Section Header */}
        <div
          className="flex flex-col items-center text-center gap-4 max-w-full lg:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3">
            <Typography variant="h2" color="white" className="capitalize tracking-[0.8px]">
              Explore SMARTMDR In 360°
            </Typography>
            <div className="w-[62px] h-[6px] bg-[var(--color-primary)] rounded-full shrink-0"></div>
          </div>

          <Typography variant="p" color="white" className="leading-relaxed font-normal">
            Discover the SMARTMDR diode laser through an immersive 360° product experience.
            Explore its advanced design, precision-engineered components, and innovative technology
            developed for modern dermatological and aesthetic applications.
          </Typography>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full h-px bg-white/20"></div>

        {/* 2-Column Content: Left 360 Video, Right Info */}
        <div className="grid grid-cols-1 min-[1501px]:grid-cols-12 gap-8 min-[1501px]:gap-12 items-center">
          {/* Left Column: 360 Video Player */}
          <div
            className="w-full min-[1501px]:col-span-7 relative aspect-video overflow-hidden rounded-[20px] shadow-xl border border-white/20 bg-black"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Text & Features */}
          <div className="w-full min-[1501px]:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            <Typography variant="h3" color="white" className="tracking-[0.8px] font-normal">
              Advanced Laser Technology For Modern Dermatology
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed font-normal">
              SMARTMDR is an advanced diode laser system developed to meet the evolving needs of
              dermatological and aesthetic medicine. Combining multiple wavelengths, intelligent
              treatment management, and precision-engineered technology, it offers versatile
              solutions for a wide range of clinical applications. Its intuitive operation and
              customizable treatment protocols help medical professionals adapt procedures to
              individual patient requirements while maintaining efficient clinical workflows.
            </Typography>

            {/* Feature List with Orange Checkmarks */}
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-black" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="white" className="leading-snug font-normal">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button text="Explore 360° View" href="#experience-360" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deg360;
