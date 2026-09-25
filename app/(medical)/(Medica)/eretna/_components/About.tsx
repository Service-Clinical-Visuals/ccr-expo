"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 xl:py-24 min-[2500px]:py-36 bg-white overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14 min-[2500px]:gap-20 min-[3800px]:gap-28 w-full">
          {/* Left Column: Heading, Content & CTA */}
          <div
            className="w-full xl:w-1/2 flex flex-col gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <Typography variant="h2" color="dark">
              Engineering Better <span className="text-[#3452A7]">Healthcare</span>
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Eretna Medical Devices was established to develop innovative and reliable solutions in the field of healthcare technologies. Combining domestic engineering strength with advanced technology, our company produces high-quality medical devices tailored to the needs of healthcare professionals.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              We contribute to making healthcare services safer, more accessible, and more efficient with our products, primarily patient monitoring systems, ventilators, and portable healthcare technologies.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Thanks to our R&D-focused approach, we closely follow the constantly evolving healthcare sector and develop solutions that comply with international quality standards. We prioritize customer satisfaction and patient safety in all processes, from production to after-sales support.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              With our domestic production capacity, expert staff, and sustainable growth vision, we continue to be a reliable solution partner in healthcare technologies.
            </Typography>

            <div className="pt-2">
              <Button
                text="Learn More"
                href="#products"
                variant="primary"
                showIcon={false}
                className="min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12"
              />
            </div>
          </div>

          {/* Right Column: Visual Feature with Blue Pillars */}
          <div
            className="w-full xl:w-1/2 relative flex items-center justify-center mt-8 xl:mt-0"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="relative w-full max-w-[747px] min-[2500px]:max-w-[1200px] min-[3800px]:max-w-[1550px] aspect-[747/590] flex items-center justify-center px-4 sm:px-6 min-[2500px]:px-10">
              {/* Left Pillar */}
              <div
                className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 w-[16px] sm:w-[23px] min-[2500px]:w-[34px] min-[3800px]:w-[44px] h-[190px] sm:h-[245px] min-[2500px]:h-[380px] min-[3800px]:h-[500px] bg-[#3452A7] rounded-lg min-[2500px]:rounded-xl z-20 shadow-md"
                aria-hidden="true"
              />

              {/* Main Booth Image Container */}
              <div className="relative w-full h-full rounded-2xl min-[2500px]:rounded-3xl overflow-hidden shadow-xl figma-card-shadow z-10">
                <img
                  src="/medical/eretna/about.png"
                  alt="Engineering Better Healthcare - Eretna Medical Booth"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Pillar */}
              <div
                className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 w-[16px] sm:w-[23px] min-[2500px]:w-[34px] min-[3800px]:w-[44px] h-[160px] sm:h-[202px] min-[2500px]:h-[320px] min-[3800px]:h-[420px] bg-[#3452A7] rounded-lg min-[2500px]:rounded-xl z-20 shadow-md"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
