"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 lg:gap-14 min-[1300px]:gap-16 min-[3800px]:gap-24 w-full">
          {/* Text Content (50%) */}
          <div
            className="flex flex-col gap-5 w-full min-[1300px]:w-1/2"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 min-[2500px]:w-3.5 min-[2500px]:h-3.5 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-[var(--color-secondary)]"></span>
              <Typography
                variant="h4"
                color="secondary"
                className="uppercase tracking-wider !font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl"
              >
                ABOUT PROMA REHA
              </Typography>
            </div>

            <Typography
              variant="h2"
              color="dark"
              className="leading-snug !font-semibold text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl xl:max-w-[90%]"
            >
              Traditional Czech company in the field of medical technology
            </Typography>

            <div className="flex flex-col gap-4 text-gray-700 font-secondary mt-2 xl:max-w-[90%]">
              <Typography variant="p" color="dark" className="leading-relaxed min-[2500px]:text-xl min-[3800px]:text-2xl">
                PROMA REHA is an established manufacturer of medical and nursing beds,
                recognized worldwide for its quality products, dedicated craftsmanship and
                professional services, with a strong presence across international markets.
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed min-[2500px]:text-xl min-[3800px]:text-2xl">
                The company has experience in the development and construction of medical
                beds since 1990. Our beds help patients and medical staff in more than 70
                countries around the world. We are constantly improving our products to meet
                the latest trends in modern medicine.
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed min-[2500px]:text-xl min-[3800px]:text-2xl">
                In 2024, PROMA REHA partnered with VCL Group, strengthening its production,
                trade, and financial stability. The entry of a strong partner enables a more
                efficient pricing strategy and increased product stock availability, leading
                to faster responses to customer needs worldwide.
              </Typography>
            </div>
          </div>

          {/* Image Content with offset layered card (50%) */}
          <div
            className="w-full min-[1300px]:w-1/2 relative mt-6 min-[1300px]:mt-0 pr-3 sm:pr-5 lg:pr-7 min-[2500px]:pr-9 min-[3800px]:pr-12 pb-3 sm:pb-5 lg:pb-7 min-[2500px]:pb-9 min-[3800px]:pb-12"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] min-[2500px]:rounded-[44px] min-[3800px]:rounded-[56px]">
              {/* Background decorative offset layer */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 lg:translate-x-7 lg:translate-y-7 min-[2500px]:translate-x-9 min-[2500px]:translate-y-9 min-[3800px]:translate-x-12 min-[3800px]:translate-y-12 bg-[#A6A3C7] rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] min-[2500px]:rounded-[44px] min-[3800px]:rounded-[56px] z-0"></div>

              {/* Foreground Image */}
              <div className="relative z-10 w-full h-full rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] min-[2500px]:rounded-[44px] min-[3800px]:rounded-[56px] overflow-hidden shadow-[0px_20px_35px_-10px_#26394D] bg-white group cursor-pointer">
                <img
                  src="/medical/proma-reha/about.webp"
                  alt="PROMA REHA Factory and Headquarters"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay matching Figma */}
                <div className="absolute inset-0 bg-[#312782]/45 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  {/* Circular "Read More" Button */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 min-[2500px]:w-44 min-[2500px]:h-44 min-[3500px]:w-56 min-[3500px]:h-56 min-[3800px]:w-64 min-[3800px]:h-64 rounded-full bg-[#2A2268] text-white flex flex-col items-center justify-center gap-1 sm:gap-1.5 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <span className="font-primary font-medium text-sm sm:text-base min-[2500px]:text-xl min-[3500px]:text-2xl min-[3800px]:text-3xl tracking-wide">
                      Read More
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3500px]:w-10 min-[3500px]:h-10 min-[3800px]:w-12 min-[3800px]:h-12 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
