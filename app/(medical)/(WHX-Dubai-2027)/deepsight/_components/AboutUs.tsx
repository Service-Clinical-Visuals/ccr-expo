"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-16 min-[2500px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-10 sm:gap-12 lg:gap-8 2xl:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-16">
        {/* Heading + content (first on mobile/tablet) */}
        <div className="lg:col-span-6 flex flex-col items-start" data-aos="fade-right">
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3.5 mb-3 2xl:mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3 min-[3800px]:h-3 rounded-full bg-secondary" />
            <Typography variant="h6" color="secondary" className="uppercase">
              Engineered With Intent
            </Typography>
          </div>

          <Typography variant="h2" color="primary" className="mb-4 2xl:mb-4 min-[2500px]:mb-7 min-[3800px]:mb-10">
            Built by the Best. Bound by Purpose.
          </Typography>

          <div className="flex flex-col gap-4 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
            <Typography variant="p" color="primary">
              Built by the Best. Bound by Purpose. DeepSight Technology was founded in 2019 by Nader Sadrzadeh, Lan
              Yang, and Anand Chandrasekher with the vision to revolutionize medical imaging using proprietary sensing
              technology. With offices in the San Francisco Bay Area and Clayton, Missouri, DeepSight Technology aims
              to vastly extend the range of diagnostic medical ultrasound to benefit public health and well-being.
            </Typography>
            <Typography variant="p" color="primary">
              DeepSight Technology was founded in 2019 by Nader Sadrzadeh, Lan Yang, and Anand Chandrasekher with the
              vision to revolutionize medical imaging using proprietary sensing technology. With offices in the San
              Francisco Bay Area and Clayton, Missouri, DeepSight Technology aims to vastly extend the range of
              diagnostic medical ultrasound to benefit public health and well-being.
            </Typography>
          </div>

          <div className="mt-6 sm:mt-7 2xl:mt-7 min-[2500px]:mt-11 min-[3800px]:mt-14">
            <Button text="Explore More" variant="primary" href="#about" />
          </div>
        </div>

        {/* Image with offset sky-blue panel behind it */}
        <div className="lg:col-span-6 w-full" data-aos="fade-left">
          <div className="relative w-full lg:w-[92%] lg:ml-auto lg:mr-0 mb-6 sm:mb-8 2xl:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20 pr-6 sm:pr-8 2xl:pr-10 min-[2500px]:pr-14 min-[3800px]:pr-20">
            <div className="absolute top-[11%] bottom-[-7%] left-[10%] right-0 bg-secondary rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px]" />
            <div className="relative w-full aspect-[600/445] overflow-hidden rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px]">
              <img
                src="/medical/deepsight/section2.webp"
                alt="The DeepSight Technology team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
