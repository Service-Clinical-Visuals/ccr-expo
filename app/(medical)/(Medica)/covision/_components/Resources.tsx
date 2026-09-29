"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Resources = () => {
  return (
    <section
      id="resources"
      className="w-full min-h-[500px] xl:min-h-[540px] min-[3800px]:min-h-[720px] py-16 xl:py-20 min-[3800px]:py-32 bg-[url('/medical/covision/res_bg.png')] bg-cover bg-[position:88%_center] md:bg-[position:90%_center] xl:bg-center bg-no-repeat overflow-hidden relative flex items-center"
    >
      <div className="custom-container w-full">
        {/* Text Container: On mobile/tablet wrapped in a crisp high-contrast frosted white card */}
        <div
          className="w-full lg:max-w-[62%] xl:max-w-[48%] flex flex-col gap-6 min-[3800px]:gap-9 bg-white/95 md:bg-white/90 xl:bg-transparent p-6 sm:p-8 md:p-10 xl:p-0 rounded-2xl xl:rounded-none backdrop-blur-md xl:backdrop-blur-none shadow-xl xl:shadow-none border border-gray-100 xl:border-0"
          data-aos="fade-right"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-[27px] min-[3800px]:w-14 h-[4px] min-[3800px]:h-2 bg-[#FB8021] rounded-full shrink-0"></div>
            <Typography
              variant="h4"
              color="primary"
              className="!font-bold tracking-wider uppercase"
            >
              RESOURCES
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h2" color="dark" className="!font-bold leading-tight text-[#1F2937]">
            Explore Our Product Brochures
          </Typography>

          {/* Description with high readability */}
          <Typography
            variant="p"
            color="dark"
            className="leading-relaxed text-[#374151] font-medium text-sm sm:text-base md:text-[17px] min-[3800px]:text-2xl"
          >
            Access Covision’s corporate and product brochures to discover detailed information about
            our orthopaedic implant systems, technologies, and product solutions. Explore our
            comprehensive portfolio, product specifications, and system capabilities through our
            downloadable brochures. These resources provide a closer look at Covision’s solutions
            across knee, hip, trauma, and spine systems.
          </Typography>

          {/* Button */}
          <div className="pt-2">
            <Button text="View All" variant="outline" href="#resources" showIcon={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
