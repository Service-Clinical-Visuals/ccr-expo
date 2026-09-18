"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-[#00A1E4] py-16 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">

        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center max-w-7xl mx-auto mb-10 sm:mb-14 gap-2.5"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="section-text font-semibold tracking-wide font-inter text-white/90">
            Versatile Ureteral Stenting Solutions
          </span>
          <h2 className="section-title font-semibold text-white tracking-tight font-fraunces leading-[1.25]">
            Facilitating Temporary Urinary Drainage Through a Purpose-Built Multi-Loop Stent Configuration
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">

          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-7 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-[#eaeaea] shadow-xl shadow-black/10">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute aspect-video inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content & Button */}
          <div
            className="xl:col-span-5 flex flex-col gap-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-5 section-text font-normal text-white/90 leading-relaxed font-inter">
              <p>
                The MEDpro Double J Stent &ndash; Both End Multi Loop is designed to facilitate
                temporary urinary drainage from the kidney to the urinary bladder during
                urological procedures. The product is intended for situations where ureteral
                patency needs to be maintained, including obstruction associated with
                kidney stones or compression from surrounding or ureteral tumors.
              </p>
              <p>
                The stent can also be used following procedures where maintaining an open
                ureter is important during recovery. MEDpro offers standard stents for
                shorter indwelling periods as well as the Long Duro version for longer-term
                applications. The standard version uses radiopaque Tecoflex&reg;, while the
                Long Duro version is manufactured from Carbothane&reg;.
              </p>
              <p>
                Each stent is supplied in a sterile peel-open package and is intended for
                single use. The product page also provides dedicated ordering information
                for the Both End Multi Loop configuration.
              </p>
            </div>

            <div className="pt-2">
              <Button href="#product-details" variant="white-outline" showArrow={false} className="!w-auto !px-8">
                View Product Details
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
