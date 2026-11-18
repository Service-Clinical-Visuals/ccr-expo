"use client";

import React from "react";
import Typography from "../Typography";
import Button from "../Button";

/**
 * About Section - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Stacks cleanly up to 1500px: heading comes first (order-1), then image (order-2)
 * - 2-column layout on >=1500px: image on left (min-[1500px]:order-1), heading on right (min-[1500px]:order-2)
 * - Portrait image height matching Figma 673x826 proportions
 * - Interactive cards with hover blue state, switching between about_white_icon and about_blue_icon
 */
const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1500px]:flex-row items-center gap-10 xl:gap-16 w-full">
          
          {/* Content Column: order-1 on screens up to 1500px, order-2 on >=1500px */}
          <div
            className="w-full min-[1500px]:w-1/2 flex flex-col gap-5 sm:gap-6 order-1 min-[1500px]:order-2"
            data-aos="fade-left"
          >
            {/* Tagline Pill */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 sm:w-8 h-1 bg-[#4F6744] rounded-full inline-block shrink-0" />
              <span className="heading-blue text-[#4F6744]">
                About Zinnanti Surgical
              </span>
            </div>

            {/* Main Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333]"
            >
              Where Surgical Expertise Meets Innovative Design
            </Typography>

            {/* Body Paragraph */}
            <Typography
              variant="p"
              color="dark"
              className="leading-relaxed text-[#333333] text-justify"
            >
              We are proud to serve a diverse range of medical specialties including High-Res Anoscopy (HRA), Dermatology, Gynecology, Otolaryngology, and Plastic Surgery. Our comprehensive offerings provide enhancements rather than hindrances to achieve compliance with evolving regulations. No other smoke evacuation system provides the ability to suction smoke, blood, and fluid directly through the active electrode. Our enhanced devices have been adopted at most top academic centers. Partnering with these centers of excellence, we continue to expand our impact, supporting healthcare providers with tools that make a real difference in patient care. At Zinnanti Surgical Design Group, we are dedicated to advancing the field of surgery through innovation, quality, and a dedicated focus on improving healthcare outcomes.
            </Typography>

            {/* Interactive Feature Cards */}
            <div className="flex flex-col gap-3 sm:gap-4 mt-1">
              
              {/* Feature 1: Comprehensive Surgical Solutions */}
              <div className="group rounded-[16px] min-[3800px]:rounded-[28px] p-4 sm:p-5 transition-all duration-300 bg-white border border-[#E5E7EB] hover:bg-[#4F6744] hover:border-[#4F6744] hover:shadow-lg cursor-pointer flex items-start gap-4 sm:gap-5">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 shrink-0">
                  <img
                    src="/medical/zinnanti-surgical-3/about_white_icon1.webp"
                    alt="Comprehensive Surgical Solutions"
                    className="w-full h-full object-contain block group-hover:hidden transition-all"
                  />
                  <img
                    src="/medical/zinnanti-surgical-3/about_blue_icon1.webp"
                    alt="Comprehensive Surgical Solutions Hover"
                    className="w-full h-full object-contain hidden group-hover:block transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-bold text-[#333333] group-hover:text-white transition-colors">
                    Comprehensive Surgical Solutions
                  </h3>
                  <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-[#555555] group-hover:text-white/90 transition-colors leading-relaxed text-justify">
                    Supporting diverse medical specialties, including HRA, Dermatology, Gynecology, Otolaryngology, and Plastic Surgery, with innovative solutions designed to simplify regulatory compliance.
                  </p>
                </div>
              </div>

              {/* Feature 2: Trusted Innovation & Proven Excellence */}
              <div className="group rounded-[16px] min-[3800px]:rounded-[28px] p-4 sm:p-5 transition-all duration-300 bg-white border border-[#E5E7EB] hover:bg-[#4F6744] hover:border-[#4F6744] hover:shadow-lg cursor-pointer flex items-start gap-4 sm:gap-5">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 shrink-0">
                  <img
                    src="/medical/zinnanti-surgical-3/about_white_icon2.webp"
                    alt="Trusted Innovation & Proven Excellence"
                    className="w-full h-full object-contain block group-hover:hidden transition-all"
                  />
                  <img
                    src="/medical/zinnanti-surgical-3/about_blue_icon2.webp"
                    alt="Trusted Innovation & Proven Excellence Hover"
                    className="w-full h-full object-contain hidden group-hover:block transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-bold text-[#333333] group-hover:text-white transition-colors">
                    Trusted Innovation &amp; Proven Excellence
                  </h3>
                  <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-[#555555] group-hover:text-white/90 transition-colors leading-relaxed text-justify">
                    Partnering with leading academic medical centers to deliver advanced smoke evacuation technology that enhances surgical efficiency and supports better patient care.
                  </p>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Button text="View All" variant="primary" href="#specialities" />
            </div>

          </div>

          {/* Image Column: order-2 on screens up to 1500px, order-1 on >=1500px */}
          <div
            className="w-full min-[1500px]:w-1/2 relative rounded-[24px] min-[3800px]:rounded-[48px] overflow-hidden shadow-lg border border-gray-100 group cursor-pointer order-2 min-[1500px]:order-1"
            data-aos="fade-right"
          >
            <div className="w-full h-[520px] sm:h-[640px] lg:h-[720px] xl:h-[826px] min-[2500px]:h-[1100px] min-[3800px]:h-[1450px] overflow-hidden">
              <img
                src="/medical/zinnanti-surgical-3/about.webp"
                alt="Where Surgical Expertise Meets Innovative Design"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
