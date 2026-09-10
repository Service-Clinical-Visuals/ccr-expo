"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

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
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-12 lg:p-16">
          <div className="max-w-3xl">
            {/* Main Hero Heading in Raleway */}
            <h1
              className="banner-title font-semibold text-white font-raleway tracking-tight"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Your Trusted Partner for Innovative
              <br className="hidden sm:inline" />{" "}
              Catheter Manufacturing and Global Healthcare Solutions
            </h1>

            {/* Contact Our Team Button in Raleway */}
            <div
              className="mt-6 sm:mt-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="350"
            >
              <Button href="#contact" variant="outline-white">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
