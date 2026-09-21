"use client";

import React from "react";
import Button from "./Button";

export default function GlimpseGallery() {
  return (
    <section className="w-full relative py-16 sm:py-24 bg-white my-12 sm:my-16">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Content */}
          <div
            className="xl:col-span-6 flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="border-l-4 border-[#0287DC] pl-4 mb-6 rounded-sm">
              <h4 className="text-[#0287DC] section-text font-bold font-inter text-sm mb-1 tracking-wide">
                Innovation
              </h4>
              <h2 className="section-title font-bold text-[#333333] tracking-tight font-dmsans leading-tight text-2xl sm:text-3xl lg:text-4xl">
                Advanced Engineering & Innovation
              </h2>
            </div>

            <p className="section-text text-[#666666] font-inter leading-relaxed mb-6 font-regular">
              The Company is proactive in technical and structural engineering of Devices and separate elements; furthermore, the Company provides services in engineering, programming and setting of Electronics. We design various structural elements of devices on a by-order basis; provide engineering, programming and setting of electronic plates services.UAB "Medelcom International" is completely certified in accordance with EN ISO 13485:2003 and 93/42/EEC standards and have production conformity certificates. The Company also has many years of experience in creation and production of ultrasonic devices and prepares electronic devices for free sale on the International market in accordance with applicable International requirements and standards.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-[19px] h-[19px] rounded-full bg-[#0287DC] mt-1.5 flex-shrink-0"></div>
                <p className="section-text text-[#666666] font-inter font-regular leading-snug">
                  <strong className="text-slate-900">Engineering & Product Development - </strong> Medelcom provides customised engineering solutions, including mechanical component development, structural design, device assembly, and product development tailored to client requirements.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-[19px] h-[19px] rounded-full bg-[#0287DC] mt-1.5 flex-shrink-0"></div>
                <p className="section-text text-[#666666] font-inter font-regular leading-snug">
                  <strong className="text-slate-900">Electronics & Manufacturing - </strong> The company supports electronic board design, programming, production, and customised manufacturing, from initial planning and design to final production.
                </p>
              </li>
            </ul>

            <div>
              <Button href="#about" variant="primary" showArrow={false} className="!w-auto !px-8 !rounded-md">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="xl:col-span-6 w-full h-full"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <img
              src="/medical/medelcom/advance.png"
              alt="Advanced Engineering"
              className="w-auto h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
