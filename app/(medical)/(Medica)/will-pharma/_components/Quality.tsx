"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Quality() {
  return (
    <section className="w-full py-16 sm:py-20 xl:py-28 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 min-[3800px]:gap-16 w-full">
          {/* Left: Content */}
          <div
            className="flex flex-col gap-4 sm:gap-5 w-full lg:w-1/2"
            data-aos="fade-right"
          >
            <Typography
              variant="h4"
              color="accent"
              className="uppercase !font-bold tracking-wider"
            >
              PRODUCTION &amp; QUALITY
            </Typography>

            <Typography
              variant="h2"
              color="dark"
              className="uppercase !font-bold text-[#333333]"
            >
              SAFE, CONTROLLED PHARMACEUTICAL PRODUCTION
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4B5563]"
            >
              In addition to the active ingredient, most medicines also contain various excipients that support the formulation, appearance, stability, and usability of the product. These include fillers, which increase the volume of the medicine; dyes, which provide colour; flavourings, which improve taste; binders, which help press the various ingredients into a tablet; smooth coatings, which make medicines easier to handle, remove from packaging, and swallow; granulating agents, which influence the rate at which a tablet disintegrates in the stomach; and protective coatings, which help ensure that a pill breaks down in the intestine rather than in the stomach.
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4B5563]"
            >
              Our medicines are subject to continuous testing throughout the entire development and production process, from the very beginning of development through to delivery to patients. Our healthcare products are carefully monitored, tested, and checked for their effectiveness, quality, and potential side effects to help ensure patient safety. In the Netherlands, the effectiveness, risks, and quality of medicines are assessed and monitored by the CBG Medicines Evaluation Board. For the Belgian market, this responsibility lies with the Federal Agency for Medicines and Health Products (FAMHP).
            </Typography>

            <div className="pt-2">
              <Button
                text="Explore More"
                href="#quality"
                variant="primary"
                showIcon={false}
                className="!px-7 !py-2.5 min-[3800px]:!py-5 min-[3800px]:!px-14 min-[3800px]:text-3xl"
              />
            </div>
          </div>

          {/* Right: Graphic Media */}
          <div
            className="w-full lg:w-1/2 flex items-center justify-start"
            data-aos="fade-left"
          >
            <img
              src="/medical/will-pharma/quality.webp"
              alt="Safe, Controlled Pharmaceutical Production"
              className="w-full h-auto object-contain drop-shadow-sm rounded-[10px] md:rounded-[14px] min-[3800px]:rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
