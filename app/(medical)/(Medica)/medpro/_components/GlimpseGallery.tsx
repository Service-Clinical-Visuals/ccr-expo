"use client";

import React from "react";
import Button from "./Button";

export default function GlimpseGallery() {
  return (
    <section
      className="w-full relative py-16 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat my-12 sm:my-20"
      style={{ backgroundImage: "url('/medical/medpro/bg3.png')" }}
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div
            className="flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Heading Group */}
            <div className="flex flex-col gap-2.5">
              <span className="section-text font-bold text-[#3BB3C3] uppercase tracking-wider font-inter">
                WHY MEDpro
              </span>
              <h2 className="section-title font-semibold text-[#202020] font-fraunces leading-[1.2] tracking-tight">
                Trusted Worldwide.
                <br />
                <span className="text-[#3BB3C3] section-title">Driven by Quality.</span>
              </h2>
            </div>

            {/* Paragraph */}
            <p className="section-text text-[#404040] font-inter leading-relaxed">
              At MEDpro we are fully committed to serving our customers with both high quality and competitive pricing. That is why we have quickly become a global brand, with MEDpro urology products currently being sold in 35 countries around the world.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 py-4">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                  <img src="/medical/medpro/i1.png" alt="Countries" className="w-auto h-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="card-title font-bold text-[#3BB3C3] font-fraunces leading-tight">35+</span>
                  <span className="section-text text-[#404040] font-inter mt-0.5">Countries</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-[70px] bg-[#B9B9B9]"></div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5">
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                  <img src="/medical/medpro/i2.png" alt="Countries" className="w-auto h-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="card-title font-bold text-[#3BB3C3] font-fraunces leading-tight">High Quality</span>
                  <span className="section-text text-[#404040] font-inter mt-0.5">Products</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-[70px] bg-[#B9B9B9]"></div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5">
                <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
                  <img src="/medical/medpro/i3.png" alt="Countries" className="w-auto h-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="card-title font-bold text-[#3BB3C3] font-fraunces leading-tight">Competitive</span>
                  <span className="section-text text-[#404040] font-inter mt-0.5">Pricing</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-15">
              <Button href="#about" variant="outline" showArrow={false} className="!w-auto !px-8 border !border-[#3BB3C3] section-text">
                More About Us
              </Button>
            </div>
          </div>

          {/* Right Content */}
          {/* Leaving this empty assuming the globe is part of the bg3.png background image. If the globe is a separate image, we can add it here. */}
          <div className="hidden lg:block h-[400px]"></div>

        </div>
      </div>
    </section>
  );
}
