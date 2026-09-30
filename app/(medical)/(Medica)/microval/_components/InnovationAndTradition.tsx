"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function InnovationAndTradition() {
  return (
    <section
      id="about"
      className="custom-container py-30 px-4 sm:px-6 md:px-8 xl:px-12 bg-white"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">
        {/* Left Column: Image with offset background */}
        <div
          className="xl:col-span-6 w-full relative flex items-center justify-center order-1"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* Image */}
          <div className="relative z-10 w-full overflow-hidden">
            <img
              src="/medical/microval/about.png"
              alt="About Microval"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div
          className="xl:col-span-6 flex flex-col gap-3 order-2"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="w-[30px] h-[5px] bg-[#DF0001] rounded-full shadow-[0px_5px_15px_0px_#DF00018C]"></div>
            <span className="font-dmsans font-bold text-[#DF0001] section-text tracking-widest uppercase">
              About Microval
            </span>
          </div>

          <div>
            <h2 className="section-title font-semibold tracking-tight font-dmsans text-[#111111] leading-snug mb-3">
              Excellence At The Service Of Healthcare Professionals
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-[#4B5563]">
            <p className="section-text text-[#4B5563] leading-relaxed font-inter font-regular">
              MicroVal is a company dedicated to the design and manufacture of implants and instruments used in the field of digestive surgery. Since its creation in 1994, MicroVal has developed major innovative products, all of which are patented. As a manufacturer, and thanks to the efficiency of our R&D department, we are also able to produce specific and non-standard products. Development, design, manufacturing, packaging in a controlled atmosphere environment, and marketing of implants and instruments... MicroVal controls the entire production chain to provide surgeons with the professionalism, high standards, and quality necessary for their practice.
            </p>

            <p className="section-text text-[#4B5563] leading-relaxed font-inter font-regular">
              MicroVal is dedicated to the design and manufacture of implants and instruments for digestive surgery, ensuring high standards throughout its production processes. The company provides controlled-atmosphere packaging for implants and performs the sterilization of medical devices using ethylene oxide (ISO 11135) and gamma radiation (ISO 11137).
            </p>
          </div>

          <div className="pt-4">
            <Button href="#know-more" showArrow={true}>
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
