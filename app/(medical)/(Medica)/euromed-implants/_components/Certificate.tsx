"use client";

import React from "react";
import Typography from "./Typography";

const CustomTickIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 31 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 10L6.625 15.625M14.5 6.625L20.125 1M10 10L15.625 15.625L29.125 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Certificate = () => {
  return (
    <section id="certificates" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 min-[3800px]:gap-16 items-center">

          {/* Text Content */}
          <div className="xl:col-span-6 flex flex-col gap-3 order-1" data-aos="fade-right">
            <Typography variant="h5" className="text-[#36679B] font-medium">
              • Our Certificates
            </Typography>

            <Typography variant="h2" color="dark" className="leading-tight">
              Quality You Can Trust.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed mb-4">
              Our commitment to quality is reflected in our certified quality management systems. We continuously maintain high standards across our products and processes to meet customer requirements and support reliable orthopaedic solutions.
            </Typography>

            <div className="flex flex-col gap-6">

              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#36679B]">
                  <CustomTickIcon className="w-8 h-auto min-[3800px]:w-12 mt-1" />
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" className="text-[#36679B] font-semibold">
                    Certified Quality
                  </Typography>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Our quality management processes are supported by internationally recognized certifications.
                  </Typography>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#36679B]">
                  <CustomTickIcon className="w-8 h-auto min-[3800px]:w-12 mt-1" />
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" className="text-[#36679B] font-semibold">
                    Consistent Standards
                  </Typography>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    We maintain controlled processes and rigorous quality practices throughout product development and manufacturing.
                  </Typography>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#36679B]">
                  <CustomTickIcon className="w-8 h-auto min-[3800px]:w-12 mt-1" />
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" className="text-[#36679B] font-semibold">
                    Customer Focus
                  </Typography>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    Our quality approach is built around meeting customer requirements and delivering dependable solutions.
                  </Typography>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#36679B]">
                  <CustomTickIcon className="w-8 h-auto min-[3800px]:w-12 mt-1" />
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" className="text-[#36679B] font-semibold">
                    Continuous Improvement
                  </Typography>
                  <Typography variant="p" color="dark" className="leading-relaxed">
                    We continuously refine our processes to maintain high standards and respond to evolving clinical and market needs.
                  </Typography>
                </div>
              </div>

            </div>
          </div>

          {/* Certificate Image */}
          <div className="w-full xl:col-span-6 flex justify-center order-2" data-aos="fade-left" data-aos-delay="100">
            <div className="w-full max-w-md xl:max-w-lg min-[3800px]:max-w-3xl aspect-[483/701] relative shadow-2xl rounded-sm overflow-hidden">
              <img
                src="/euromed-implants/section4.png"
                alt="Quality Certificate"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificate;
