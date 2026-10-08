"use client";

import React from "react";
import Button from "./Button";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="w-full bg-[#1F2937] py-12 sm:py-12">
        <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">
          <div
            className="w-full flex flex-col md:flex-row items-center justify-between"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {/* Left Content */}
            <div className="flex items-center gap-5 sm:gap-6 w-full md:w-auto">
              <div className="flex-shrink-0 flex items-center justify-center">
                <img src="/medical/altaylar/icon1.webp" alt="Catalog Icon" className="w-auto h-auto object-contain" />
              </div>
              <div>
                <h4 className="font-raleway font-semibold text-white section-title mb-1.5 leading-tight">
                  Need Comprehensive Technical Specifications?
                </h4>
                <p className="font-inter font-regular text-[#D3E4FE] section-text leading-relaxed">
                  Download our complete 2024 Product Catalog including biological compatibility data and clinical guidelines.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className="w-full md:w-auto flex-shrink-0 mt-2 md:mt-0">
              <Button
                href="#download"
                showArrow={false}
                className="w-full md:w-auto !bg-[#07A1A8] hover:!bg-[#006769] !text-white !px-6 py-3 rounded-[8px]"
              >
                <span className="font-raleway font-semibold btn-text">Download Full Catalogue</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
