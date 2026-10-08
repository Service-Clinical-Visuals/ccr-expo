"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14 min-[3800px]:gap-24 w-full">
          {/* Left Column: Image */}
          <div
            className="w-full xl:w-1/2 relative order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full pr-5 sm:pr-7 xl:pr-9 min-[2500px]:pr-14 min-[3800px]:pr-20">
              <div className="absolute right-0 top-[4%] bottom-[4%] w-[35%] sm:w-[40%] bg-[#95ACB9]/55 rounded-[8px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[24px] z-0 pointer-events-none" />

              <div className="relative z-10 rounded-[8px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[24px] overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img
                  src="/medical/altaylar-medikal/about.webp"
                  alt="Duzey Medical Healthcare Interface"
                  className="w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[580px] min-[2500px]:h-[850px] min-[3800px]:h-[1150px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-[5px] bg-[var(--color-primary)] rounded-[10px]" />
              <Typography
                variant="h4"
                color="primary"
                className="uppercase tracking-wider !font-bold text-sm"
              >
                ABOUT DUZEY MEDICAL
              </Typography>
            </div>

            <Typography variant="h2" color="dark" className="leading-snug">
              Trusted Medical Solutions, Global Reach
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Duzey Medical manufactures high-quality medical products for Urology, Urogynecology, and Hernia Repair, serving healthcare markets worldwide. The company is committed to developing and delivering reliable medical solutions that meet the needs of healthcare professionals and customers across different markets. With ISO 13485:2016 and CE certification, Duzey Medical maintains a strong focus on product quality, safety, regulatory compliance, and continuous improvement. Its products are manufactured in accordance with the Medical Devices Directive 93/42/EEC, following established quality standards and controlled manufacturing processes.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              At Duzey Medical, quality is at the heart of every stage of production and service. The company strives to manufacture the right product first time, while ensuring affordable, timely, and consistent production. Through continuous improvement, responsible resource management, employee training, and an effective Quality Management System, Duzey Medical maintains regulatory compliance and delivers safe, reliable, and high-quality medical products.
            </Typography>

            <div className="pt-2">
              <Button
                text="Know More"
                variant="primary"
                href="#about"
                showIcon={false}
                className="px-7 py-3 rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
