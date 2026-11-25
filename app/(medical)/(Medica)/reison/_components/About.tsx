"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    icon: "/medical/reison/icon1.webp",
    title: "Simplicity",
    description: "Making everyday processes easier through practical and user-friendly solutions.",
  },
  {
    icon: "/medical/reison/icon3.webp",
    title: "Service Excellence",
    description: "Providing reliable support, quick responses, and timely deliveries.",
  },
  {
    icon: "/medical/reison/icon2.webp",
    title: "Swedish Craftsmanship",
    description: "Delivering precision, safety, and quality through Swedish manufacturing.",
  },
  {
    icon: "/medical/reison/icon4.webp",
    title: "Quality & Reliability",
    description: "Maintaining high standards through durable and dependable products.",
  },
];

/**
 * About Section - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Section Header:
 *    - Centered title with `w-full max-w-full xl:max-w-[70%] mx-auto` for readability.
 * 2. Split Layout:
 *    - Left: Medical team image `/medical/reison/about.webp` (rounded-3xl, aspect-[3/2]).
 *    - Right: 2x2 Feature card matrix with overlapping orange icon squares (5px white border)
 *      and navy descriptive boxes with top-right orange corner triangle accents.
 * 3. Tablet Layout Constraint:
 *    - Remains stacked below 1036px (`flex-col min-[1036px]:flex-row`).
 */
const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">

        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2A2A2A] font-primary capitalize"
          >
            Premium Operating Room Accessories
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
          >
            Reison specializes in designing, manufacturing, and supplying a comprehensive range of premium accessories for modern operating rooms. Our products combine functionality, durability, and thoughtful design to meet the diverse needs of healthcare professionals while delivering exceptional value and reliability.
          </Typography>
        </div>

        {/* Section Divider Line */}
        <div className="w-full h-px bg-black/15" />

        {/* Two Column Content: Image Left, Cards + Copy Right */}
        {/* Tablet Layout (stacked) remains active up to 1300px; desktop 2-col activates from 1301px */}
        <div className="w-full flex flex-col min-[1301px]:flex-row items-center gap-8 min-[1301px]:gap-12">

          {/* Left Column: Image Frame */}
          <div className="w-full min-[1301px]:w-1/2" data-aos="fade-right">
            <div className="relative w-full aspect-[3/2] rounded-[30px] overflow-hidden border border-white/50 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group cursor-pointer">
              <img
                src="/medical/reison/about.webp"
                alt="Operating room healthcare professionals utilizing Reison accessories"
                className="w-full h-full aspect-[3/2] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Feature Matrix & Narrative Copy */}
          <div className="w-full min-[1301px]:w-1/2 flex flex-col gap-6" data-aos="fade-left">

            {/* 2x2 Feature Cards Grid with Left Offset for protruding icon box */}
            <div className="pl-10 sm:pl-12 grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-12 sm:gap-x-16">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#2F3F5A] rounded-none border border-white/50 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:shadow-xl transition-all duration-300 pl-[48px] sm:pl-[58px] min-[2500px]:pl-[85px] min-[3800px]:pl-[120px] pr-4 sm:pr-6 min-[2500px]:pr-9 min-[3800px]:pr-12 py-4 sm:py-5 min-[2500px]:py-7 min-[3800px]:py-10 min-h-[110px] sm:min-h-[128px] min-[2500px]:min-h-[190px] min-[3800px]:min-h-[270px] flex flex-col justify-center group cursor-pointer"
                >
                  {/* Decorative Orange Triangle Accent at Top-Right Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] sm:border-t-[24px] min-[2500px]:border-t-[36px] min-[3800px]:border-t-[54px] border-t-[#E53B14] border-l-[20px] sm:border-l-[24px] min-[2500px]:border-l-[36px] min-[3800px]:border-l-[54px] border-l-transparent pointer-events-none" />

                  {/* Overlapping Orange Icon Square (50% overhang on left) */}
                  <div className="absolute -left-[38px] sm:-left-[46px] min-[2500px]:-left-[68px] min-[3800px]:-left-[96px] top-1/2 -translate-y-1/2 w-[76px] h-[76px] sm:w-[92px] sm:h-[92px] min-[2500px]:w-[135px] min-[2500px]:h-[135px] min-[3800px]:w-[192px] min-[3800px]:h-[192px] bg-[#E53B14] rounded-none border-[4px] sm:border-[5px] min-[2500px]:border-[7px] min-[3800px]:border-[10px] border-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center p-3 sm:p-4 min-[2500px]:p-6 min-[3800px]:p-9 transition-transform duration-300 group-hover:scale-105 z-10">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Card Text Content */}
                  <h3 className="font-primary text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-bold text-white leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-secondary text-xs sm:text-[13px] min-[2500px]:text-base min-[3800px]:text-xl text-white/90 leading-relaxed mt-1">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Supporting Quality Paragraph */}
            <Typography
              variant="p"
              color="muted"
              className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-[#4A4A4A] mt-2"
            >
              Quality is at the heart of everything we do. We continuously strive to maintain and improve the highest manufacturing standards, ensuring every product meets customer expectations and industry requirements. Through continuous improvement and attention to detail, we deliver dependable solutions that support efficient and safe operating room environments.
            </Typography>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Learn More About Us"
                variant="primary"
                href="#about"
                showIcon={true}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

