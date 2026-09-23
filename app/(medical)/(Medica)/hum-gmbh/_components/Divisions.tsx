"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Divisions() {
  return (
    <section id="divisions" className="w-full py-16 sm:py-24 lg:py-32 min-[2500px]:py-40 min-[3800px]:py-52 bg-white overflow-hidden">
      <div className="custom-container flex flex-col space-y-16 lg:space-y-24 min-[2500px]:space-y-36">
        
        {/* Division 1: Medizintechnik */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 min-[2500px]:gap-24 items-center">
          <div className="lg:col-span-6 overflow-hidden shadow-sm group order-2 lg:order-1" data-aos="fade-right">
            <img
              src="/medical/hum-gmbh/more1.png"
              alt="HUM Medizintechnik"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6 min-[2500px]:space-y-8 order-1 lg:order-2" data-aos="fade-left">
            <div className="pb-1">
              <img
                src="/medical/hum-gmbh/hum1.png"
                alt="HUM Systems for Life® – MEDIZINTECHNIK –"
                className="w-[140px] sm:w-[170px] lg:w-[195px] min-[2500px]:w-[270px] min-[3800px]:w-[360px] h-auto object-contain select-none"
              />
            </div>

            <Typography variant="p" color="gray" className="leading-relaxed">
              As your trusted partner, we are committed to guiding you through every step of the journey in developing, producing, and distributing top-notch medical devices and accessories. Our extensive expertise and unwavering dedication empower us to offer an impressive variety of products across our 14 AERO brands. We strive to meet the diverse needs of healthcare professionals and patients, ensuring that quality and innovation are at the forefront of everything we do.
            </Typography>

            <div className="pt-2">
              <Button text="More Information" variant="primary" showIcon={true} href="#product-categories" />
            </div>
          </div>
        </div>

        {/* Division 2: Textiltechnik */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 min-[2500px]:gap-24 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-6 min-[2500px]:space-y-8 order-1 lg:order-1" data-aos="fade-right">
            <div className="pb-1">
              <img
                src="/medical/hum-gmbh/hum2.png"
                alt="HUM Textiles for Life – TEXTILTECHNIK –"
                className="w-[140px] sm:w-[170px] lg:w-[195px] min-[2500px]:w-[270px] min-[3800px]:w-[360px] h-auto object-contain select-none"
              />
            </div>

            <Typography variant="p" color="gray" className="leading-relaxed">
              As your committed OEM service provider and technology consultant, we excel in the production, processing, and finishing of cutting-edge technical textile systems. Our operations are bolstered by our advanced production facilities situated in Germany and across Europe. This strategic positioning allows us to uphold the highest quality standards while delivering innovative solutions specifically designed to meet your unique requirements. We pride ourselves on our ability to adapt and evolve.
            </Typography>

            <div className="pt-2">
              <Button text="More Information" variant="primary" showIcon={true} href="#custom-bags" />
            </div>
          </div>

          <div className="lg:col-span-6 overflow-hidden shadow-sm group order-2 lg:order-2" data-aos="fade-left">
            <img
              src="/medical/hum-gmbh/more2.png"
              alt="HUM Textiltechnik"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
