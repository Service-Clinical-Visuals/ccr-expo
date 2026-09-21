"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-200 pb-8 gap-6">
          <Typography variant="h2" color="dark" className="xl:max-w-[60%] leading-tight">
            Leader In The Production Of Medical Imaging Systems
          </Typography>
          <Button text="Learn More" variant="primary" showIcon={true} />
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Image (Mobile: order-2, Desktop: order-1) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center" data-aos="fade-right">
            <div className="w-full max-w-lg aspect-square relative">
              <img src="/adamo/section2.png" alt="Adamo Medical Imaging" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Right: Content (Mobile: order-1, Desktop: order-2) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8" data-aos="fade-left">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 md:p-8 relative overflow-hidden border border-gray-100">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-bl-[2rem]"></div>
              <Typography variant="h4" color="dark" className="mb-3 relative z-10 font-semibold">
                Innovation Technology
              </Typography>
              <Typography variant="p" color="muted" className=" relative z-10 leading-relaxed text-sm md:text-base">
                Adamo S.R.L. Was Born From Many Years Of Experience In The Field Of Videodiagnostics In Various Specialties, Our Company Has Always Boasted Equipment Characterized By Innovative Technology That Is More Advanced Than What Is On The Market.
              </Typography>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 md:p-8 relative overflow-hidden border border-gray-100">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-bl-[2rem]"></div>
              <Typography variant="h4" color="dark" className="mb-3 relative z-10 font-semibold">
                After Sales Service
              </Typography>
              <Typography variant="p" color="muted" className=" relative z-10 leading-relaxed text-sm md:text-base">
                Our Company Always Pays Close Attention To Customer Needs, Taking Care Of After-Sales Service To The Smallest Detail. To This End, We Have Set Up A Laboratory At Our Headquarters Equipped With State-Of-The-Art Equipment And Specialized Personnel Who Can Solve Most Problems Related To Medical And Computer Equipment.
              </Typography>
            </div>

            {/* Footer of the right column */}
            <div className="flex items-center justify-between mt-2 border-t border-gray-200 pt-8">
              <Typography variant="h3" color="dark" className="font-semibold text-lg max-w-[80%]">
                Our Core Business Is Dermatology-Specific Products.
              </Typography>
              <button className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center hover:bg-black transition-colors shrink-0">
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 14L14 1M14 1H5.33333M14 1V9.66667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
