"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const CatalogBanner = () => {
  return (
    <section className="w-full pt-16 xl:pt-24 pb-8 bg-white overflow-hidden">
      <div className="custom-container">
        <div
          className="w-full bg-gradient-to-r from-[#0C4A6E] via-[#075985] to-[#0F172A] rounded-2xl p-6 sm:p-8 xl:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6"
          data-aos="fade-up"
        >
          {/* Left Text */}
          <div className="flex flex-col gap-2 text-center lg:text-left w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="!font-bold leading-tight text-xl sm:text-2xl lg:text-3xl"
            >
              Looking for surgical smoke evacuators, bipolar forceps, or foot-switches?
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="text-sm sm:text-base text-gray-200 leading-relaxed"
            >
              We offer a complete catalog of certified autoclavable accessories and surgical
              consumables.
            </Typography>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <Button
              text="Download 2026 Full Catalog"
              variant="glass"
              href="#catalog"
              className="!py-3 !px-7 text-sm font-semibold tracking-wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogBanner;
