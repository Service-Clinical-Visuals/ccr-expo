"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Quality = () => {
  return (
    <section id="quality" className="relative w-full py-20 lg:py-32 overflow-hidden bg-black">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/adamo/bg.png" alt="Quality Policy" className="w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252525] via-[#252525]/15 to-transparent w-full lg:w-[70%]"></div>
      </div>

      <div className="custom-container relative z-10 flex">
        <div className="max-w-2xl text-left" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-6 leading-tight">
            Quality Policy
          </Typography>

          <Typography variant="p" className="mb-10 text-sm md:text-base leading-relaxed text-gray-200" data-aos="fade-up" data-aos-delay="100">
            An Indispensable Tool For Meeting The Growing Expectations Of Stakeholders, Adamo S.R.L.'s Quality Policy Is Periodically Reviewed By Management.<br />
            To Receive The Latest Version Released Please Fill Out This Form.
          </Typography>

          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="mt-1 shrink-0 bg-white rounded-full p-0.5">
                <svg className="w-4 h-4 text-[#252525]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <Typography variant="p" className="text-sm md:text-base leading-relaxed text-gray-200">
                <span className="font-semibold text-white">Management Commitment -</span> Management regularly reviews the Quality Policy to ensure it remains relevant and aligned with company objectives.
              </Typography>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="mt-1 shrink-0 bg-white rounded-full p-0.5">
                <svg className="w-4 h-4 text-[#252525]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <Typography variant="p" className="text-sm md:text-base leading-relaxed text-gray-200">
                <span className="font-semibold text-white">Continuous Improvement -</span> Our quality approach is continuously evaluated to support effective processes and improved performance.
              </Typography>
            </div>
          </div>

          <div>
            <Button text="Explore Our Quality" href="#quality" variant="primary" showIcon={true} className="bg-[#2A2A2A] text-white hover:bg-black border-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
