"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

/**
 * AMNOTEC About Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Eyebrow: ADVANCED MEDICAL TECHNOLOGY
 * - Heading: Precision in Every Procedure. Excellence in Every Detail.
 * - 3 Paragraphs describing Tuttlingen medical technology, portfolio, operating room equipment
 * - Button: Explore More
 * - Right: Image of AMNOTEC headquarters with decorative background block
 * - Tablet layout: active throughout 768px-1035px (stacked layout), desktop starts at 1036px
 */
const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-10 xl:gap-14 w-full">
          
          {/* Left Column: Text & Information */}
          <div
            className="w-full min-[1301px]:w-1/2 flex flex-col space-y-4 sm:space-y-5"
            data-aos="fade-right"
          >
            {/* Eyebrow */}
            <Typography
              variant="eyebrow"
              className="text-[#134093] font-semibold text-sm sm:text-base tracking-wider uppercase"
            >
              ADVANCED MEDICAL TECHNOLOGY
            </Typography>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight"
            >
              Precision in Every Procedure. Excellence in Every Detail.
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#111111]"
            >
              The concept &quot;Medical Technology from Tuttlingen&quot; stands for surgical and medical-engineering Instruments and Devices of highest quality as well as for dynamic and progress. Located at the world centre for Medical Technology in Tuttlingen / Germany, AMNOTEC with several decades of experience is one of the leading ambitious medical device manufacturers and suppliers.
            </Typography>

            {/* Paragraph 2 */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#111111]"
            >
              The wide product portfolio includes an unique variety of medical products in the area of Surgical Instruments, Sterilization Containers, Endoscopy (Devices, Endoscopes, Laparoscopy, Urology, Hysteroscopy, Arthroscopy), Electrosurgery, Operating Lights and Operating Tables as well as Intensive Care Unit Beds. An important element of AMNOTEC range of services is providing state-of-the-art technologies, such as 4K UHD-Imaging Systems, LED Light Sources, Hybrid resectoscopy system and Instruments for the Minimal Invasive Surgery (MIS).
            </Typography>

            {/* Paragraph 3 */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#111111]"
            >
              AMNOTEC has specialised as an efficient full-service provider for the equipment of operating room. The established expertise of the entire AMNOTEC team in addition to the premium quality of the products, flexibility and an excellent customer service are the cornerstones of the company.
            </Typography>

            {/* Button */}
            <div className="pt-2">
              <Button
                text="Explore More"
                variant="primary"
                href="#products"
                className="bg-[#134093] hover:bg-[#0e2f6d] text-white rounded-[5px] px-6 py-2.5 font-semibold text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Right Column: Styled Image matching exact Figma offset layout (Group 6: image 2 & image 3) */}
          <div
            className="w-full min-[1301px]:w-1/2 flex items-center justify-center relative mt-6 min-[1301px]:mt-0"
            data-aos="fade-left"
          >
            {/* Group 6 Container: Proportional to Figma 680x591 */}
            <div className="relative w-full max-w-[640px] xl:max-w-[680px] aspect-[680/591]">
              {/* Image 3 (Background shape): #E2EDF4 - Aligned to left and bottom */}
              <div className="absolute left-0 bottom-0 w-full h-[92.4%] bg-[#E2EDF4] rounded-[10px]" />
              
              {/* Image 2 (Foreground photo): Aligned to top and right */}
              <div className="absolute top-0 right-0 w-[93.4%] h-[92.4%] rounded-[10px] overflow-hidden group">
                <img
                  src="/medical/amnotec/about.webp"
                  alt="AMNOTEC Medical Technology Tuttlingen headquarters"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
