"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section id="banner-section" className="relative w-full h-screen overflow-hidden">
      {/* Hero Rounded Box */}
      <div
        className="relative w-full h-screen overflow-hidden bg-[#060a22]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover lg:object-fill"
          />
        </div>


        {/* Hero Content positioned at bottom-left */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-12 lg:p-25 lg:pl-40">
          <div className="max-w-7xl">
            {/* Main Hero Heading in Poppins */}
            <h1
              className="banner-title font-semibold text-white font-poppins tracking-tight leading-snug"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              precision-engineered innovation to deliver
              <br className="hidden sm:inline" />{" "}
              accuracy, reliability, and better care
            </h1>

            {/* Contact Our Team Button */}
            <div
              className="mt-6 sm:mt-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="350"
            >
              <Button href="#quote" variant="outline-white" className="font-semibold section-text" icon={<img src="/medical/kaul/mail.png" alt="icon" className="w-auto h-auto pl-2 object-contain" />}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
