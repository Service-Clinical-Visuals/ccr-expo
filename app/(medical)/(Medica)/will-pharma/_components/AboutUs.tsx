"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 sm:py-20 xl:py-28 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 min-[3800px]:gap-16 w-full">
          {/* Left: Content */}
          <div
            className="flex flex-col gap-4 sm:gap-5 w-full lg:w-1/2"
            data-aos="fade-right"
          >
            <Typography
              variant="h4"
              color="accent"
              className="uppercase !font-bold tracking-wider"
            >
              ABOUT WILLPHARMA
            </Typography>

            <Typography
              variant="h2"
              color="dark"
              className="uppercase !font-bold text-[#333333]"
            >
              IMPROVING HEALTHCARE, TOGETHER
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4B5563]"
            >
              At Will Pharma, we put patients at the centre of everything we do. We are committed to continuously improving people’s wellbeing through high-quality healthcare products, services, and solutions. As a healthcare organisation, we go beyond simply providing medicines and products—we focus on understanding the changing needs of patients, healthcare professionals, and the communities we serve. By combining our knowledge, experience, and strengths, we work towards making healthcare more accessible, effective, and meaningful. Through continuous improvement and collaboration, we strive to create a lasting positive impact on the lives of the people we serve.
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4B5563]"
            >
              We believe that strong partnerships create better healthcare. By connecting passionate healthcare professionals, organisations, and partners, we create agile teams that share knowledge, encourage innovation, and challenge each other to improve. Our entrepreneurial and flexible approach allows us to respond to changing healthcare needs while staying focused on quality, accessibility, and long-term wellbeing. Through these collaborations, we aim to make a positive difference in people’s lives, one improvement at a time.
            </Typography>

            <div className="pt-2">
              <Button
                text="Know More"
                href="#about"
                variant="primary"
                showIcon={false}
                className="!px-7 !py-2.5 min-[3800px]:!py-5 min-[3800px]:!px-14 min-[3800px]:text-3xl"
              />
            </div>
          </div>

          {/* Right: Media Showcase */}
          <div
            className="w-full lg:w-1/2 flex items-center justify-start"
            data-aos="fade-left"
          >
            <img
              src="/medical/will-pharma/about.webp"
              alt="Will Pharma Excellence"
              className="w-full h-auto object-contain drop-shadow-sm rounded-[10px] md:rounded-[14px] min-[3800px]:rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
