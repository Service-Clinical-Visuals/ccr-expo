"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CircleDot } from "lucide-react";

export default function Facial() {
  return (
    <section id="facial" className="w-full py-16 md:py-24 min-[3800px]:py-36 bg-[#EAECEF] bg-[radial-gradient(#CBD5E1_1px,transparent_1px)]  overflow-hidden relative">
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 min-[3800px]:gap-20 items-center">
          {/* Content Column (Order 1 on tablet/mobile: heading and content first!) */}
          <div
            className="flex flex-col order-1 lg:order-2 lg:col-span-5"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Section Heading */}
            <Typography variant="h2" color="dark" weight="bold">
              Precision Designed for Facial Reconstruction
            </Typography>

            {/* Description */}
            <Typography
              variant="p"
              color="dark"
              className="mt-3.5 sm:mt-4 min-[3800px]:mt-6 mb-6 sm:mb-7 min-[3800px]:mb-10 leading-relaxed"
            >
              Explore Anton Hipp&apos;s advanced facial implant solutions through detailed product visualizations that highlight implant structure, anatomical contours, surface details, and precision engineering. Discover how carefully developed implant designs support facial reconstruction and maxillofacial applications, combining technical accuracy with innovative medical technology to meet the specialized needs of surgeons and healthcare professionals.
            </Typography>

            {/* Bullet Points with React Icons */}
            <div className="flex flex-col gap-3.5 sm:gap-4 min-[3800px]:gap-7 mb-7 sm:mb-8 min-[3800px]:mb-12">
              <div className="flex items-start gap-3 sm:gap-3.5 min-[3800px]:gap-6">
                <CircleDot
                  className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)] shrink-0 mt-0.5"
                  strokeWidth={2.2}
                />
                <Typography variant="p" color="dark" className="leading-snug">
                  Precision-engineered implant designs for optimal anatomical fit and stability.
                </Typography>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 min-[3800px]:gap-6">
                <CircleDot
                  className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)] shrink-0 mt-0.5"
                  strokeWidth={2.2}
                />
                <Typography variant="p" color="dark" className="leading-snug">
                  Detailed anatomical contours designed to complement natural facial structures.
                </Typography>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 min-[3800px]:gap-6">
                <CircleDot
                  className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)] shrink-0 mt-0.5"
                  strokeWidth={2.2}
                />
                <Typography variant="p" color="dark" className="leading-snug">
                  Designed for facial reconstruction with precision, quality, and reliability.
                </Typography>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <Button
                text="Explore Facial Implants"
                href="#products"
                variant="primary"
                showArrow={true}
              />
            </div>
          </div>

          {/* Video Player Column on Desktop (Order 2 on tablet/mobile: video after content!) */}
          <div
            className="w-full relative order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <div className="w-full aspect-video rounded-xl min-[3800px]:rounded-2xl overflow-hidden relative  flex items-center justify-center group min-h-[280px]">
              <DynamicVideoPlayer
                type="short-2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
