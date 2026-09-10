"use client";

import React from "react";
import Typography from "./Typography";

const AboutUs = () => {
  return (
    <section id="about" className="w-full pt-16 md:pt-20 pb-20 md:pb-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14">

        {/* Top Text Section */}
        <div className="flex flex-col max-w-7xl mx-auto items-center text-center gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-semibold text-3xl sm:text-4xl text-[#121C22] tracking-tight font-outfit">
            Technology With A Purpose
          </Typography>
          <div className="w-full max-w-7xl mx-auto">
            <Typography variant="p" color="muted" className="text-sm sm:text-[15px] leading-relaxed text-[#555962] font-outfit">
              The Gradual process through which Numantec acquires diverse and complementary companies is intended to represent the Group&apos;s commitment and solidity with a view to the future. The individual entities operate and cooperate in order to ensure cutting-edge medical and healthcare solutions, minimizing human error and optimizing individual performance, thus making the Numantec Group the next benchmark in the medical and healthcare sector.
            </Typography>
          </div>
        </div>

        {/* Mission / Vision Card + Images */}
        <div
          className="relative w-full flex flex-col lg:flex-row items-center justify-between mt-4 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Main White Card enclosing Mission and Vision */}
          <div className="relative z-10 w-full lg:flex-1 bg-white border border-gray-200/90 rounded-tl-[3.2rem] lg:rounded-tl-[3.8rem] rounded-br-[3.2rem] lg:rounded-br-[3.8rem] rounded-tr-none rounded-bl-none shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-7 sm:p-9 lg:p-10 xl:p-12 overflow-hidden">

            {/* Text Container adjusted to reduce dead horizontal space before Image 1 */}
            <div className="flex flex-col w-full max-w-[495px] xl:max-w-[535px] 2xl:max-w-[570px]">
              {/* Mission Block */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#182C4A] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <Typography variant="h3" color="dark" className="font-semibold text-2xl xl:text-[26px] text-[#121C22] tracking-tight font-outfit">
                    Mission
                  </Typography>
                </div>
                <Typography variant="p" color="none" className="font-semibold text-base text-[#1B3B6F] font-outfit">
                  Helping patients live their everyday lives
                </Typography>
                <Typography variant="p" color="none" className="leading-relaxed text-[13.5px] xl:text-[14px] text-[#555962] font-outfit">
                  Our mission is to improve patients&apos; quality of life and make everyday activities easier through high-performance devices designed around the needs of patients and end users. We focus on developing reliable, innovative, and user-centred solutions that support better healthcare experiences and greater independence.
                </Typography>
              </div>

              {/* Continuous Divider Line that passes across the space and behind Image 1 */}
              <div className="w-[200%] border-t border-gray-200/90 my-6 lg:my-7" />

              {/* Vision Block */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#182C4A] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <Typography variant="h3" color="dark" className="font-semibold text-2xl xl:text-[26px] text-[#121C22] tracking-tight font-outfit">
                    Vision
                  </Typography>
                </div>
                <Typography variant="p" color="none" className="font-semibold text-base text-[#1B3B6F] font-outfit">
                  Innovation and cohesion at the core of our work
                </Typography>
                <Typography variant="p" color="none" className="leading-relaxed text-[13.5px] xl:text-[14px] text-[#555962] font-outfit">
                  The different entities that make up Numantec specialize in unique, innovative, and cutting-edge healthcare solutions. This constant commitment enables the Group to position itself as a benchmark in the global market. We listen to healthcare professionals and develop the best solutions to reduce human error and ensure optimal performance, always keeping the end patient at the center.
                </Typography>
              </div>
            </div>

          </div>

          {/* Desktop Images Container (Image 1 overlapping Left Card by ~10%, Image 2 on far right reaching container width) */}
          <div className="hidden lg:flex items-center shrink-0 lg:-ml-12 xl:-ml-16 2xl:-ml-20 relative z-20 gap-4 xl:gap-6">
            {/* Image 1 */}
            <div className="w-[280px] xl:w-[340px] 2xl:w-[385px] shrink-0 drop-shadow-xl">
              <img
                src="/medical/delta-med/about1.png"
                alt="Healthcare Technology"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Image 2 */}
            <div className="w-[280px] xl:w-[340px] 2xl:w-[385px] shrink-0 drop-shadow-xl">
              <img
                src="/medical/delta-med/about2.png"
                alt="Patient Care"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile / Tablet fallback */}
          <div className="flex lg:hidden gap-4 sm:gap-6 justify-center mt-6 w-full">
            <div className="w-1/2 max-w-[320px] sm:max-w-[360px] drop-shadow-md">
              <img
                src="/medical/delta-med/about1.png"
                alt="Healthcare Technology"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-1/2 max-w-[320px] sm:max-w-[360px] drop-shadow-md">
              <img
                src="/medical/delta-med/about2.png"
                alt="Patient Care"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
