"use client";

import React from "react";
import Typography from "./Typography";
import { Check } from "lucide-react";

/**
 * About Section (Mission & Vision)
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readability.
 * 2. Asymmetrical Overlapping Layout:
 *    - On desktop (>1035px), the left content card (55% width) and right image group (50% width)
 *      overlap using negative margins (`min-[1036px]:-ml-[50px] xl:-ml-[65px]`).
 *    - On smaller screens, elements stack cleanly in a column (`flex-col min-[1036px]:flex-row`).
 * 3. Card Geometry:
 *    - Mission & Vision card features asymmetrical rounded corners (`rounded-tl-[30px] rounded-br-[30px]`).
 *    - Image frames also mirror the asymmetrical corner system.
 */
const About = () => {
  return (
    <section
      id="why-inogen"
      className="w-full py-16 xl:py-24 bg-white overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">

        {/* Section Header: Centered with xl:max-w-[70%] width limit */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
          >
            Overcoming The Limitations Of Traditional Oxygen Therapy
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#555555]"
          >
            Inogen portable oxygen concentrators are designed to provide a
            self-replenishing supply of concentrated oxygen from the surrounding
            air, eliminating the need for oxygen tanks and regular deliveries.
            By reducing infrastructure requirements and service demands,
            Inogen aims to offer a more convenient and cost-effective approach
            to long-term oxygen therapy.
          </Typography>
        </div>

        {/* Mission / Vision + Images Overlap Layout (stacked up to 1035px) */}
        <div className="w-full mt-12 sm:mt-16">
          <div className="flex flex-col min-[1036px]:flex-row items-center">

            {/* Mission & Vision Card (Rounded only top-left & bottom-right) */}
            <div
              className="
                relative z-10
                w-full min-[1036px]:w-[55%]
                bg-white
                rounded-tl-[30px] min-[3800px]:rounded-tl-[60px]
                rounded-br-[30px] min-[3800px]:rounded-br-[60px]
                rounded-tr-none
                rounded-bl-none
                border border-gray-200/80
                shadow-[0_2px_8px_rgba(0,0,0,0.12)]
                p-6 sm:p-8 xl:px-9 xl:py-11 min-[3800px]:p-16
                flex flex-col justify-center
                gap-5 min-[3800px]:gap-8
              "
              data-aos="fade-right"
            >

              {/* Mission */}
              <div className="w-full min-[1036px]:max-w-[90%] space-y-2">
                <div className="flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-[#0B3090] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                  </div>

                  <h3 className="text-[1.375rem] sm:text-[1.5rem] lg:text-[1.5625rem] min-[3800px]:text-[3rem] font-bold text-[#222222]">
                    Mission
                  </h3>
                </div>

                <h4 className="text-[#0B3090] font-semibold text-sm sm:text-base min-[3800px]:text-2xl pl-7 min-[3800px]:pl-14">
                  Advancing the Future of Portable Oxygen Therapy
                </h4>

                <p className="text-xs sm:text-sm min-[3800px]:text-xl leading-[1.65] text-[#555555] pl-7 min-[3800px]:pl-14">
                  To transform oxygen therapy through innovative portable
                  solutions that improve patient independence, enhance
                  accessibility, and support a better quality of life worldwide.
                  We advance respiratory care through technology, expanding
                  access to portable solutions and creating products that meet
                  patients' and healthcare providers' evolving needs.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full min-[1036px]:max-w-[90%] h-px bg-gray-200" />

              {/* Vision */}
              <div className="w-full min-[1036px]:max-w-[90%] space-y-2">
                <div className="flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-[#0B3090] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                  </div>

                  <h3 className="text-[1.375rem] sm:text-[1.5rem] lg:text-[1.5625rem] min-[3800px]:text-[3rem] font-bold text-[#222222]">
                    Vision
                  </h3>
                </div>

                <h4 className="text-[#0B3090] font-semibold text-sm sm:text-base min-[3800px]:text-2xl pl-7 min-[3800px]:pl-14">
                  Delivering Innovation for Better Patient Care
                </h4>

                <p className="text-xs sm:text-sm min-[3800px]:text-xl leading-[1.65] text-[#555555] pl-7 min-[3800px]:pl-14">
                  To develop reliable, patient-focused oxygen concentrator
                  technology through continuous innovation, patient feedback,
                  and advanced engineering. We create practical, cost-effective
                  oxygen therapy solutions that support mobility, simplify
                  oxygen management, and help healthcare providers deliver
                  dependable care across diverse settings.
                </p>
              </div>

            </div>

            {/* Images Section - Vertically Centered with negative margin overlap on desktop above 1035px */}
            <div
              className="
                relative z-20
                w-full min-[1036px]:w-[50%]
                flex flex-col sm:flex-row
                items-center
                gap-4 xl:gap-5 min-[3800px]:gap-8
                mt-8 min-[1036px]:mt-0
                min-[1036px]:-ml-[50px] xl:-ml-[65px] min-[2500px]:-ml-[100px] min-[3800px]:-ml-[140px]
              "
              data-aos="fade-left"
            >

              {/* Image 1 */}
              <div
                className="
                  w-full sm:w-1/2
                  h-[380px] sm:h-[430px] xl:h-[460px] min-[2500px]:h-[650px] min-[3800px]:h-[900px]
                  overflow-hidden
                  rounded-tl-[20px] min-[3800px]:rounded-tl-[40px]
                  rounded-br-[20px] min-[3800px]:rounded-br-[40px]
                  rounded-tr-none
                  rounded-bl-none
                  border border-gray-200/80
                  shadow-sm
                  shrink-0
                  group
                  cursor-pointer
                "
              >
                <img
                  src="/medical/inogen/about1.webp"
                  alt="Patients enjoying portable oxygen therapy outdoors"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Image 2 */}
              <div
                className="
                  w-full sm:w-1/2
                  h-[380px] sm:h-[430px] xl:h-[460px] min-[2500px]:h-[650px] min-[3800px]:h-[900px]
                  overflow-hidden
                  rounded-tl-[20px] min-[3800px]:rounded-tl-[40px]
                  rounded-br-[20px] min-[3800px]:rounded-br-[40px]
                  rounded-tr-none
                  rounded-bl-none
                  border border-gray-200/80
                  shadow-sm
                  shrink-0
                  group
                  cursor-pointer
                "
              >
                <img
                  src="/medical/inogen/about2.webp"
                  alt="Patient with oxygen therapy cannula"
                  className="w-full h-full object-cover object-[65%_center] transition-transform duration-700 ease-out group-hover:scale-105"
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
