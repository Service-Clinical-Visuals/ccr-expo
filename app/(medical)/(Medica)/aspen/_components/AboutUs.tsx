"use client";

import React from "react";
import Typography from "./Typography";

const AboutUs = () => {
  return (
    <section id="company" className="w-full py-12 md:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12 md:gap-14">

        {/* Top Header Grid with Deleo's xl:max-w constraints */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start" data-aos="fade-up">
          <div className="lg:col-span-6 xl:col-span-5">
            <Typography variant="h2" color="dark" className="!font-bold leading-tight xl:max-w-[85%]">
              Advancing Healthcare Through Purpose &amp; Innovation
            </Typography>
          </div>
          <div className="lg:col-span-6 xl:col-span-7 flex lg:justify-end">
            <Typography variant="p" color="muted" className="leading-relaxed text-gray-600 text-sm sm:text-base xl:max-w-[90%] lg:text-right">
              Aspen Surgical is a trusted provider of surgical essentials with a unique balance of portfolio scale and partnership flexibility. This combination gives us an edge in supporting hospitals and ambulatory service centers of any size, in any region, or in any specialty — and the ability to adapt to their evolving needs over time.
            </Typography>
          </div>
        </div>

        {/* Two Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div
            className="rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="/medical/aspen/about1.webp"
              alt="Aspen Surgical Distribution"
              className="w-full h-[300px] sm:h-[365px] md:h-[415px] lg:h-[465px] min-[2000px]:h-[610px] min-[2500px]:h-[730px] min-[3800px]:h-[1000px] object-cover hover:scale-102 transition-transform duration-500"
            />
          </div>

          <div
            className="rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/medical/aspen/about2.webp"
              alt="Aspen Surgical Corporate Headquarters"
              className="w-full h-[300px] sm:h-[365px] md:h-[415px] lg:h-[465px] min-[2000px]:h-[610px] min-[2500px]:h-[730px] min-[3800px]:h-[1000px] object-cover hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
