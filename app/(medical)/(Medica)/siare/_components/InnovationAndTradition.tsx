"use client";

import React from "react";
import Button from "./Button";

export default function InnovationAndTradition() {
  const features = [
    { icon: "/medical/siare/icon1.webp", title: "Italian Engineering &\nManufacturing" },
    { icon: "/medical/siare/icon2.webp", title: "Anaesthesia &\nRespiratory Care" },
    { icon: "/medical/siare/icon3.webp", title: "Advanced Medical\nTechnology" },
    { icon: "/medical/siare/icon4.webp", title: "Global Healthcare\nPresence" }
  ];

  return (
    <section
      id="about"
      className="custom-container py-12 sm:py-16 md:py-20 xl:py-24 px-4 sm:px-6 md:px-8 xl:px-12 bg-white"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">
        {/* Left Column: Text Content */}
        <div
          className="xl:col-span-6 flex flex-col gap-6 order-2 xl:order-1"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div>
            <h2 className="section-title font-bold tracking-tight text-[#111111] leading-snug mb-8 font-exo2">
              Who We Are
            </h2>
            <h3 className="card-title text-[#1B489F] italic font-dm-sans mb-2">
              Engineering Innovation for Better Patient Care
            </h3>
          </div>

          <div className="flex flex-col text-[#111111]">
            <p className="section-text leading-relaxed font-dm-sans text-[#111111] font-regular">
              Siare Engineering International Group SpA was founded in 1974 by current president Giuseppe Preziosa, a leading expert in the fields of anesthesia, resuscitation, and intensive care. The company's primary goal has always been to provide high-quality, life-saving products to patients and healthcare professionals. Constant, meticulous scientific research and the continuous use of increasingly cutting-edge technologies allow us to create high-quality, user-friendly products. Our team of professionals is committed to continuously improving the innovation of our medical devices in the fields of ventilation, anesthesia, and monitoring. Our headquarters are located in the industrial area of Crespellano - Valsamoggia, in the province of Bologna, near the A1 Bologna motorway junction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 border-2 border-[#1B489F] rounded-[16px] p-4 sm:p-4 mt-2 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center justify-start text-center gap-3">
                <img src={feature.icon} alt="Icon" className="w-auto h-auto object-contain" />
                <span className="section-text font-dm-sans font-regular text-[#111111] leading-tight whitespace-pre-line">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Button href="#company" variant="primary">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div
          className="xl:col-span-6 w-full relative flex items-center justify-center order-1 xl:order-2 h-full min-h-[300px] sm:min-h-[400px] xl:min-h-0"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="relative w-full h-full">
            {/* Image */}
            <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
              <img
                src="/medical/siare/about.webp"
                alt="Siare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

