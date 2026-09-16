"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function ProductPortfolio() {
  return (
    <section
      id="portfolio"
      className="w-full py-16 lg:py-24 xl:py-28 bg-[#FAFAFA] overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">
          {/* Text Content (Left side on Desktop, Top on Mobile/Tablet) */}
          <div
            className="flex flex-col gap-6 w-full xl:w-[40%]"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-[#F6821F]" />
              <Typography
                variant="h4"
                color="primary"
                className="!font-semibold uppercase tracking-wide"
              >
                Our Product Portfolio
              </Typography>
            </div>

            <Typography variant="h2" color="dark">
              Advanced Medical Technologies Designed for Better Patient Outcomes
            </Typography>

            <div className="flex flex-col gap-4 text-left">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Discover our extensive range of innovative medical technologies
                developed to meet the evolving needs of modern healthcare. Our
                portfolio brings together advanced solutions across regenerative
                medicine, orthobiology, therapeutics, urogynecology,
                regenerative aesthetics, and orthopedic implant technologies.
              </Typography>

              <Typography variant="p" color="muted" className="leading-relaxed">
                Each product is developed with a strong focus on quality,
                precision, safety, and reliability, supported by advanced
                manufacturing capabilities and stringent quality standards. From
                regenerative treatment solutions to sophisticated hip and knee
                implant systems, we are committed to providing healthcare
                professionals and medical partners with dependable technologies
                that contribute to improved treatment experiences and better
                patient care.
              </Typography>
            </div>

            <div className="pt-2">
              <Button variant="outline-orange" href="#products">
                View Product Portfolio
              </Button>
            </div>
          </div>

          {/* Video Content (Right side on Desktop, Bottom on Mobile/Tablet) */}
          <div
            className="w-full xl:w-[60%] relative aspect-video overflow-hidden rounded-[5px] shadow-sm border border-gray-200 bg-[#E5E7EB]"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover rounded-[5px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
