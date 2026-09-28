"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-20 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-8 min-[3800px]:gap-16 items-center">

          {/* Text Content */}
          <div className="xl:col-span-5 flex flex-col gap-2 order-1 lg:order-1" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="font-semibold">
              About Us
            </Typography>

            <Typography variant="h2" className="text-[#192B6C] font-semibold -mt-2 mb-1">
              Quality, Trust, Expertise
            </Typography>

            <div className="flex flex-col gap-3">
              <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base font-medium text-[#4A4A4A]">
                Our Company Achieves Its Efficiency And Growth By Never Compromising Its Priority On Human Health, By Continuously Updating Itself Within The Framework Of Laws And Ethical Rules, And By Creating A Work Environment That Its Employees Are Proud To Be A Part Of.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed text-sm lg:text-base font-medium text-[#4A4A4A]">
                Founded In 2010 By Professionals With Extensive Experience In The Medical Sector, Demersan Biotechnology's Main Objective Is To Influence The Market By Developing Biotechnological Products Through R&D Efforts And To Launch These Cutting-Edge Products In The Turkish And Global Markets.
              </Typography>
            </div>

            {/* Stat Cards */}
            <div className="flex flex-wrap gap-8 mt-4">
              {/* Card 1 */}
              <div className="flex items-center gap-4 bg-white p-2 py-2 shadow-[0px_3px_8px_0px_#0000003D] flex-1 min-w-[140px]">
                <div className="w-auto h-full bg-[#192B6C] p-3 flex items-center justify-center shrink-0">
                  <img src="/medical/demersan/icon1.png" alt="Dealers Icon" className="w-auto h-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <Typography variant="h3" className="text-[#192B6C] font-bold leading-tight">1100</Typography>
                  <Typography variant="p" color="muted" className="text-xs font-semibold leading-tight mt-1  tracking-wide">Number<br />Of Dealers</Typography>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 bg-white p-2 py-2 shadow-[0px_3px_8px_0px_#0000003D] flex-1 min-w-[140px]">
                <div className="w-auto h-full bg-[#192B6C] p-3 flex items-center justify-center shrink-0">
                  <img src="/medical/demersan/icon2.png" alt="Dealers Icon" className="w-auto h-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <Typography variant="h3" className="text-[#192B6C] font-bold leading-tight">12</Typography>
                  <Typography variant="p" color="muted" className="text-xs font-semibold leading-tight mt-1  tracking-wide">Years Of<br />Experience</Typography>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-4 bg-white p-2 py-2 shadow-[0px_3px_8px_0px_#0000003D] flex-1 min-w-[140px]">
                <div className="w-auto h-full bg-[#192B6C] p-3 flex items-center justify-center shrink-0">
                  <img src="/medical/demersan/icon3.png" alt="Dealers Icon" className="w-auto h-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <Typography variant="h3" className="text-[#192B6C] font-bold leading-tight">150+</Typography>
                  <Typography variant="p" color="muted" className="text-xs font-semibold leading-tight mt-1  tracking-wide">Number<br />Of Products</Typography>
                </div>
              </div>
            </div>

          </div>

          {/* Image */}
          <div className="w-full xl:col-span-7 relative overflow-hidden order-2 lg:order-2" data-aos="fade-left" data-aos-delay="100">
            <img src="/medical/demersan/about.png" alt="About Demersan" className="w-full h-auto object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
