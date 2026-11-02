"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function DecuPro360() {
  return (
    <section
      id="decu-pro"
      className="w-full py-16 xl:py-24 bg-[url('/medical/proma-reha/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 lg:gap-14 min-[1300px]:gap-16 min-[3800px]:gap-24 w-full">
          {/* Left Column: 360 Video Player (60%) - Exact Deleo aspect-video pattern */}
          <div
            className="w-full min-[1300px]:w-[60%] relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl shadow-xl bg-white order-2 min-[1300px]:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content (40%) */}
          <div
            className="flex flex-col gap-5 w-full min-[1300px]:w-[40%] order-1 min-[1300px]:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 min-[2500px]:w-3.5 min-[2500px]:h-3.5 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-[var(--color-secondary)]"></span>
              <Typography
                variant="h4"
                color="secondary"
                className="uppercase tracking-wider !font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl"
              >
                EXPLORE DECU PRO
              </Typography>
            </div>

            <Typography
              variant="h2"
              color="dark"
              className="leading-snug !font-bold text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl"
            >
              Advanced Comfort for Modern Patient Care
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed font-secondary xl:max-w-[90%]">
              Discover DECU PRO, thoughtfully designed to provide reliable patient support,
              superior comfort and practical functionality in modern healthcare environments.
              Combining ergonomic design with user-friendly features and dependable
              performance, it helps healthcare professionals deliver efficient care while
              enhancing the overall patient experience.
            </Typography>

            {/* Feature points */}
            <div className="flex flex-col gap-3.5 my-2">
              <div className="flex items-center gap-3.5 min-[3500px]:gap-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3500px]:w-20 min-[3500px]:h-20 min-[3800px]:w-24 min-[3800px]:h-24 flex items-center justify-center shrink-0">
                  <img
                    src="/medical/proma-reha/360icon.webp"
                    alt="Feature Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <Typography variant="p" color="dark" className="font-medium text-base min-[3500px]:text-2xl">
                  Ergonomic positioning ensures optimal patient support and comfort.
                </Typography>
              </div>

              <div className="flex items-center gap-3.5 min-[3500px]:gap-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3500px]:w-20 min-[3500px]:h-20 min-[3800px]:w-24 min-[3800px]:h-24 flex items-center justify-center shrink-0">
                  <img
                    src="/medical/proma-reha/360icon.webp"
                    alt="Feature Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <Typography variant="p" color="dark" className="font-medium text-base min-[3500px]:text-2xl">
                  Reliable safety features provide added patient protection.
                </Typography>
              </div>
            </div>

            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="!px-7 !py-3 min-[3800px]:!px-12 min-[3800px]:!py-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
