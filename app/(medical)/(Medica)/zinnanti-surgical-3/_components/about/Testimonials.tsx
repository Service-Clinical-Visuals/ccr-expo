"use client";

import React from "react";
import Typography from "../Typography";

/**
 * Testimonials Section - Zinnanti Surgical About Page
 * Master Reference: Inogen Development Standards & Exact Figma Specification
 * - Rectangle 103: Cyan background band (1920x445) with bg_testi.png
 * - Rectangle 104: Overlapping white card (1387x480px, 24px radius) extending onto white base
 */
const Testimonials = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* 1. Upper Cyan Background Band (bg_testi.webp) */}
      <div className="w-full bg-[#01ADEF] bg-[url('/medical/zinnanti-surgical-3/about/bg_testi.webp')] bg-cover bg-top bg-no-repeat pt-14 sm:pt-16 lg:pt-20 pb-28 sm:pb-36 lg:pb-44 text-white">
        <div className="custom-container text-center space-y-3 sm:space-y-4" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-1 bg-white rounded-full inline-block" />
            <span className="heading-blue text-white">
              Our Testimonials
            </span>
          </div>

          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight leading-snug max-w-4xl mx-auto"
          >
            See what clients are saying about Zinnanti Surgical Design Group&apos;s products!
          </Typography>
        </div>
      </div>

      {/* 2. Overlapping Testimonial Card extending onto white base */}
      <div className="custom-container -mt-24 sm:-mt-28 lg:-mt-36 pb-16 sm:pb-20 lg:pb-24 relative z-10">
        <div
          className="w-full max-w-[1387px] mx-auto bg-white rounded-[24px] min-[3800px]:rounded-[48px] p-6 sm:p-8 lg:p-10 min-[2500px]:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 text-[#333333]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="flex flex-col min-[1036px]:flex-row items-center gap-8 lg:gap-12 w-full">
            
            {/* Left: Testimonial Photo */}
            <div className="w-full min-[1036px]:w-1/2 rounded-[20px] min-[3800px]:rounded-[36px] overflow-hidden shadow-sm bg-gray-100 flex-shrink-0">
              <div className="w-full h-[280px] sm:h-[360px] lg:h-[400px] min-[2500px]:h-[520px] min-[3800px]:h-[700px] overflow-hidden">
                <img
                  src="/medical/zinnanti-surgical-3/about/testi.webp"
                  alt="Dr. Lisa Flowers and Dr. William Zinnanti"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: Quote Content */}
            <div className="w-full min-[1036px]:w-1/2 flex flex-col justify-between space-y-4 sm:space-y-5">
              
              {/* Quote Mark Icon */}
              <div className="text-[#00578E] select-none leading-none mb-1 sm:mb-2">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 min-[2500px]:w-16 min-[2500px]:h-16 text-[#00578E] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Main Quote */}
              <p className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-semibold text-[#333333] leading-relaxed text-justify">
                &ldquo;We want to thank Zinnanti Surgical Design Group for the kind donation of a state of the art treatment system for women&apos;s health and high resolution anoscopy... the system provides better visualization with less equipment.&rdquo;
              </p>

              {/* Author & Title */}
              <div className="pt-2 border-t border-gray-100 space-y-0.5">
                <h4 className="text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl font-bold text-[#00578E]">
                  Dr. Lisa Flowers
                </h4>
                <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl font-medium text-[#555555]">
                  Emory Grady School of Medicine
                </p>
              </div>

              {/* Sub Narrative */}
              <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl text-[#777777] leading-relaxed text-justify pt-1">
                Dr. Flowers uses the unique Zinnanti Surgical treatment electrodes that simultaneously suction smoke, blood, and fluid during treatment.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
