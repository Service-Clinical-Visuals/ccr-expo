"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-[3800px]:gap-24 w-full">
          {/* Text Content */}
          <div
            className="flex flex-col gap-6 w-full lg:w-1/2 order-1"
            data-aos="fade-right"
          >
            <div className="flex flex-col gap-2">
              <Typography variant="h4" color="muted" className="!font-bold tracking-wide">
                About ALSA Medical
              </Typography>
              <Typography variant="h2" color="dark" className="!font-bold leading-tight">
                Over 90 Years of Medical Technology Excellence
              </Typography>
            </div>

            <div className="space-y-4 text-[#111111] leading-relaxed">
              <Typography variant="p" color="dark" className="text-sm sm:text-base">
                The history of ALSA began in 1932 when Prof. Dr. Arturo Lanzerini founded the company
                Apparecchi Lanzerini Società Anonima in Bologna (Italy).
              </Typography>

              <Typography variant="p" color="dark" className="text-sm sm:text-base">
                What started as a laboratory, which produced measuring instruments for cardiology,
                has developed into a globally successful company involved into advanced
                electromedical devices manufacturing.
              </Typography>

              <Typography variant="p" color="dark" className="text-sm sm:text-base">
                With over 90 years of excellence, ALSA continues to testify to its extraordinary
                ability to adapt, improve and innovate, always maintaining the attention to quality,
                reliability and safety of its products.
              </Typography>

              <Typography variant="p" color="dark" className="text-sm sm:text-base">
                ALSA combines decades of experience with continuous technological advancement to
                develop innovative electrosurgical solutions that meet the evolving needs of modern
                healthcare. Through precision engineering, consistent quality standards, and a
                strong commitment to reliability and safety, the company continues to support
                healthcare professionals with dependable medical technology for today&apos;s surgical
                environments.
              </Typography>
            </div>

            <div className="pt-2">
              <Button text="Learn More" variant="primary" href="#products" />
            </div>
          </div>

          {/* Image Content */}
          <div
            className="w-full lg:w-1/2 relative order-2"
            data-aos="fade-left"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/medical/alsa-apparecchi/about.webp"
                alt="About ALSA Medical - Electrosurgical Excellence"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
