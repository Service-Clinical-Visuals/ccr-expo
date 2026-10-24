"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
const features = [
  {
    icon: "/medical/alsa-apparecchi/icon1.webp",
    title: "High-Quality Optics",
  },
  {
    icon: "/medical/alsa-apparecchi/icon2.webp",
    title: "Precision Engineering",
  },
  {
    icon: "/medical/alsa-apparecchi/icon3.webp",
    title: "Robust Construction",
  },
  {
    icon: "/medical/alsa-apparecchi/icon4.webp",
    title: "Precision Engineering",
  },
];

const Product360 = () => {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#0B192C] overflow-hidden">
      <div className="custom-container">
        {/* Mobile & Tablet Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-6 min-[1301px]:hidden" data-aos="fade-up">
          <Typography variant="h4" color="muted" className="!font-bold tracking-wide !text-[#24AEE7]">
            360° Product View
          </Typography>
          <Typography variant="h2" color="white" className="!font-bold leading-tight">
            Explore from Every Angle
          </Typography>
        </div>

        {/* 360 Video Player & Feature Card */}
        <div className="flex flex-col min-[1301px]:flex-row items-center justify-center w-full max-w-[1680px] min-[2500px]:max-w-[2200px] min-[3800px]:max-w-[3300px] mx-auto">
          {/* Left Column: 360 Video Player */}
          <div
            className="w-full min-[1301px]:w-[57.3%] aspect-video min-[1301px]:h-[542px] min-[1440px]:h-[560px] min-[2500px]:h-[750px] min-[3800px]:h-[1050px] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl flex items-center justify-center relative shrink-0 z-20"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: White Card */}
          <div
            className="w-full min-[1301px]:w-[45%] min-[1301px]:-ml-6 min-[1440px]:-ml-8 z-10 bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.12)] p-6 sm:p-7 min-[1301px]:p-6 min-[1440px]:p-8 min-[2500px]:p-12 min-[3800px]:p-16 flex flex-col justify-between shrink-0 mt-6 min-[1301px]:mt-auto min-[1301px]:mb-auto min-[1301px]:self-center min-[1301px]:h-[480px] min-[1440px]:h-[495px] min-[2500px]:h-[660px] min-[3800px]:h-[920px]"
            data-aos="fade-left"
          >
            {/* Desktop Header */}
            <div className="hidden min-[1301px]:flex flex-col items-center text-center gap-1 sm:gap-1.5">
              <Typography variant="h4" color="muted" className="!font-bold tracking-wide">
                360° Product View
              </Typography>
              <Typography variant="h2" color="dark" className="!font-bold leading-tight">
                Explore from Every Angle
              </Typography>
            </div>

            {/* Description */}
            <Typography
              variant="p"
              color="dark"
              className="text-center text-xs sm:text-sm lg:text-[14px] min-[2500px]:text-lg min-[3800px]:text-xl text-[#111111] leading-relaxed"
            >
              Discover the advanced design and innovative features of the EXCELL NHP/T
              electrosurgical unit through an immersive 360° view. Explore its precision
              engineering, intuitive controls, and advanced technology developed to support diverse
              surgical procedures.Experience every detail of its sophisticated design, built to
              deliver versatility, performance, and dependable operation in modern surgical
              environments.
            </Typography>

            {/* 4 Feature Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 xl:gap-4 py-1">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center text-center gap-1.5 min-[1920px]:gap-2.5 min-[2500px]:gap-3.5 min-[3800px]:gap-5 p-2 rounded-xl transition-all duration-300"
                >
                  <div className="responsive-icon-box rounded-xl bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.3)] flex items-center justify-center shadow-sm shrink-0 transition-all duration-300 ease-in-out group-hover:-translate-y-1.5 group-hover:shadow-md group-hover:border-[#24AEE7] group-hover:bg-[rgba(14,165,233,0.15)]">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <Typography
                    variant="h3"
                    color="dark"
                    className="!font-semibold text-center leading-tight text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl transition-colors duration-300 group-hover:text-[#24AEE7]"
                  >
                    {item.title}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Centered CTA Button */}
            <div className="flex justify-center pt-0.5">
              <Button text="View Product" variant="primary" href="#products" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product360;