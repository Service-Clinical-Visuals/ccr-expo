"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 min-[2500px]:gap-24 min-[3800px]:gap-36 w-full">
          {/* Image Content (Left side on Desktop, Bottom on Mobile/Tablet) */}
          <div
            className="w-full xl:w-1/2 relative order-2 xl:order-1 mt-6 xl:mt-0 flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-[580px] sm:max-w-[680px] xl:max-w-none p-2 sm:p-3 min-[2500px]:p-5 min-[3800px]:p-8">
              {/* Top-right dark navy accent offset behind the image */}
              <div className="absolute -top-3 sm:-top-5 min-[2500px]:-top-8 min-[3800px]:-top-12 -right-3 sm:-right-5 min-[2500px]:-right-8 min-[3800px]:-right-12 w-[46%] h-[46%] bg-[#164160] rounded-xl min-[2500px]:rounded-2xl min-[3800px]:rounded-3xl z-0" />

              {/* Bottom-left dark navy accent offset behind the image */}
              <div className="absolute -bottom-3 sm:-bottom-5 min-[2500px]:-bottom-8 min-[3800px]:-bottom-12 -left-3 sm:-left-5 min-[2500px]:-left-8 min-[3800px]:-left-12 w-[46%] h-[46%] bg-[#164160] rounded-xl min-[2500px]:rounded-2xl min-[3800px]:rounded-3xl z-0" />

              {/* Facility Image: Scales proportionally with the column across 1080p, 2K and 4K */}
              <div className="relative z-10 w-full rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img
                  src="/medical/covision/about.png"
                  alt="Covision Headquarters and Production Facility"
                  className="w-full h-auto aspect-[770/516] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content (Right side on Desktop, Top on Mobile/Tablet) */}
          <div
            className="flex flex-col gap-6 min-[2500px]:gap-8 min-[3800px]:gap-12 w-full xl:w-1/2 order-1 xl:order-2"
            data-aos="fade-left"
          >
            {/* Category tag */}
            <div className="flex items-center gap-3">
              <div className="w-[27px] min-[2500px]:w-10 min-[3800px]:w-14 h-[4px] min-[2500px]:h-1.5 min-[3800px]:h-2 bg-[#FB8021] rounded-full shrink-0"></div>
              <Typography variant="h4" color="primary" className="!font-bold tracking-wider uppercase">
                ABOUT COVISION
              </Typography>
            </div>

            {/* Heading */}
            <Typography variant="h2" color="dark" className="!font-bold leading-tight">
              High Quality, Cost-Effective Orthopaedic Implants
            </Typography>

            {/* Description 1 */}
            <Typography variant="p" color="muted" className="leading-relaxed">
              Covision, headquartered in Worksop, Nottinghamshire, is fast becoming recognised as one of the world’s leading suppliers of the highest quality, cost-effective, generic orthopaedic implants. By providing high levels of customer service and product quality, designed to deliver better outcomes for the patients in all the major sectors of orthopaedic surgery, Covision products have become synonymous with providing hospitals, administrators and surgeons with some of the best, most cost-effective and safest orthopaedic implant solutions. We manufacture the complete range of implants for hip and knee replacements, plates and screws for trauma and reconstructive surgery and spinal implants, in our own state-of-the-art production facility.
            </Typography>

            {/* Description 2 */}
            <Typography variant="p" color="muted" className="leading-relaxed">
              Every product meets CE and MDD quality requirements. Covision combines high-quality, clinically proven implants with competitive pricing, helping surgeons achieve excellent clinical results while reducing procedure costs.
            </Typography>

            {/* Button */}
            <div className="pt-2">
              <Button text="Discover Now" variant="outline" href="#about" showIcon={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
