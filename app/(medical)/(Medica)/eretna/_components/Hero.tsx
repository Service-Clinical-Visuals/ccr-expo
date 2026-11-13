"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {

  return (
    <section
      id="hero"
      className="w-full h-screen h-[100dvh] min-h-[100dvh] relative overflow-hidden flex flex-col justify-end pb-[8%] md:pb-[6%] bg-[#0c1017]"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Hero Content */}
      <div className="custom-container relative z-10 w-full pointer-events-auto">
        <div
          className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 min-[2500px]:space-y-12 min-[3800px]:space-y-16"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md"
          >
            Advancing Healthcare Through Intelligent<br className="hidden md:inline" /> Medical Technology
          </Typography>

          {/* CTA Button */}
          <div>
            <Button
              text="Explore More"
              href="#about"
              variant="primary"
              showIcon={false}
              className="min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
