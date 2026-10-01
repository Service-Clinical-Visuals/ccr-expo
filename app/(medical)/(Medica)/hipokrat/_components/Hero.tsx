"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-[640px] pointer-events-none relative overflow-hidden flex flex-col justify-end pb-[10%] md:pb-[6%] min-[2500px]:pb-[8%]"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/25">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover lg:object-fill pointer-events-none z-0"
          type="banner"
        />
        {/* Subtle dark gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-10" />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 w-full">
        <div className="xl:max-w-[70%] max-w-[90%] text-left space-y-6 md:space-y-8 pointer-events-auto">
          {/* Headline */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-lg text-white font-extrabold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Over 50 Years of Engineering &amp; Innovation in Orthopedic Surgery.
          </Typography>

          {/* Action Button */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
            <Button
              text="Explore More"
              variant="primary"
              href="#about"
              showIcon={false}
              className="!bg-[#0082CB] hover:!bg-[#006fae] !px-8 !py-3 min-[2500px]:!px-14 min-[2500px]:!py-5 min-[3800px]:!px-16 min-[3800px]:!py-6 !rounded-full text-base min-[2500px]:!text-2xl min-[3800px]:!text-3xl font-semibold shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
