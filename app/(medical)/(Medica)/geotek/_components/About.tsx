"use client";

import React from "react";
import Button from "./Button";

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="w-full relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="custom-container mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="text-center flex flex-col items-center mb-10 sm:mb-14 md:mb-16">
          <h2
            className="font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] leading-tight text-[#2A2A2A] capitalize mb-4"
            data-aos="fade-up"
          >
            Technology With A Purpose
          </h2>
          <p
            className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-[#4A4A4A] max-w-[1161px] xl:max-w-[70%] mx-auto px-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Since 2003, GEOTEK has been producing medical equipment for the world health sector
            with its constantly improving quality and performance. With the goal of becoming a
            global player, GEOTEK continues to work rapidly by focusing on its customers’ requests
            without compromising its values.
          </p>
        </div>

        {/* Side-by-side Overlapping Visual Composition */}
        <div className="relative w-full flex flex-col min-[1025px]:flex-row items-center justify-start">
          {/* Left: Building Image */}
          <div
            className="group w-full min-[1025px]:w-[58%] h-[350px] sm:h-[490px] md:h-[580px] min-[1025px]:h-[690px] xl:h-[710px] relative rounded-[20px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] shrink-0"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <img
              src="/medical/geotek/images/about.png"
              alt="GEOTEK Medical Material Manufacture Facility"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right: Overlapping White Information Card - Vertically centered to the left image */}
          <div
            className="
              about-info-card
              w-full min-[1025px]:w-[48%] bg-white rounded-[20px]
              border border-[rgba(132,187,101,0.25)]
              shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
              p-6 sm:p-9 md:p-11 lg:p-12
              relative z-10
            "
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* Our Vision */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="font-baloo font-semibold text-[22px] sm:text-[24px] leading-tight text-[#2A2A2A] capitalize">
                  Our Vision
                </h3>
                <span className="w-[33px] h-[5px] bg-[#84BB65] rounded-[43px] inline-block shrink-0" />
              </div>
              <p className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-[#4A4A4A]">
                To become the most preferred healthcare products in Turkey and worldwide, driven
                by our production experience, dynamic team, and innovative R&amp;D-based designs,
                while delivering high-quality, reliable, and customer-focused healthcare solutions
                for better outcomes.
              </p>
            </div>

            {/* Separator Divider Line */}
            <div className="w-full h-px bg-[rgba(17,17,17,0.15)] my-6 sm:my-8" />

            {/* Our Mission */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="font-baloo font-semibold text-[22px] sm:text-[24px] leading-tight text-[#2A2A2A] capitalize">
                  Our Mission
                </h3>
                <span className="w-[33px] h-[5px] bg-[#84BB65] rounded-[43px] inline-block shrink-0" />
              </div>
              <p className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-[#4A4A4A]">
                To develop innovative, sustainable, and high-quality healthcare products that meet
                the highest industry standards while contributing to human well-being and
                healthcare professionals. Our focus is on combining advanced technology and
                improvement to deliver safe solutions.
              </p>
            </div>

            {/* Action CTA Button */}
            <div className="pt-6 sm:pt-8">
              <Button
                text="Learn More About Us"
                variant="primary"
                onClick={scrollToContact}
                className="h-[43px] px-6 py-2.5 text-[17px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
