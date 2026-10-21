"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="about-layout-container flex flex-col items-center gap-6 xl:gap-8 min-[3800px]:gap-16 w-full">
          {/* Left: Text Content */}
          <div
            className="about-left-col flex flex-col gap-6 w-full order-1"
            data-aos="fade-right"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-[3px] bg-[var(--color-primary)] rounded-full"></div>
              <Typography
                variant="h4"
                color="primary"
                className="uppercase !font-semibold tracking-wider text-sm sm:text-base"
              >
                WHO WE ARE
              </Typography>
            </div>

            {/* Title */}
            <Typography variant="h2" color="dark">
              Yushu Healthcare, Specialists for Over 30 Years
            </Typography>

            {/* Description 1 */}
            <Typography variant="p" color="muted" className="leading-relaxed">
              Yushu Healthcare is a team dedicated to quality, customer support, and medical
              innovation. With over 30 years of experience, we design, develop, and market
              innovative medical devices, combining continuous research with advanced ideas and
              materials to meet the evolving needs of healthcare professionals. Our product portfolio
              includes Cover-ENT®, Cover-URO®, and LUCIO System®, developed through close
              collaboration with trusted suppliers and a strong commitment to quality,
              professionalism, and excellence.
            </Typography>

            {/* Description 2 */}
            <Typography variant="p" color="muted" className="leading-relaxed">
              Founded in 2005, Cover Srl builds on the experience of entrepreneurs who have worked
              in specialized sectors since the 1980s. Our mission is to develop and produce
              high-quality medical devices through continuous research, innovation, passion, and
              close cooperation with our suppliers, ensuring reliable solutions and consistent
              quality. The constant pursuit of new ideas and materials guides our company in
              responding to the demand for unique medical products.
            </Typography>

            {/* Action Button */}
            <div className="pt-2">
              <Button text="Know More" variant="primary" href="#about" />
            </div>
          </div>

          {/* Right: Image Content (Full Width) */}
          <div
            className="about-right-col w-full relative order-2 mt-4"
            data-aos="fade-left"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/medical/yushu/about.webp"
                alt="Clinician Operating Medical Monitor"
                className="w-full h-auto object-cover max-h-[640px] min-[3800px]:max-h-[1000px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
