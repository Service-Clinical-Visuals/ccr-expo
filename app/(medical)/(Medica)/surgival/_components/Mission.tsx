"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Mission = () => {
  return (
    <section id="mission" className="w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-14">

        {/* Top Header Area */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6" data-aos="fade-up">
          <div className="xl:w-1/2">
            <Typography variant="h2" color="dark">
              Surgival's Mission & Vision
            </Typography>
          </div>
          <div className="xl:w-1/2 xl:text-right">
            <Typography variant="p" color="muted" className="leading-relaxed">
              We Believe That Our Work Carries With It A Great Mission: To Help People Regain Their Mobility So They Can Continue To Enjoy Their Lifestyle.
            </Typography>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200" />

        {/* Content Area */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center">

          {/* Image Left */}
          <div className="w-full xl:w-1/2 order-2 xl:order-1" data-aos="fade-right">
            <div className="relative w-full overflow-hidden shadow-md bg-gray-100" style={{ aspectRatio: '820/626' }}>
              <img
                src="/medical/surgival/section3.png"
                alt="Mission and Vision"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Cards Right */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6 order-3 xl:order-2" data-aos="fade-left">

            {/* Mission Card */}
            <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)] p-6 sm:p-8 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <Typography variant="h3" color="dark">Mission</Typography>
                <div className="w-10 h-1 bg-[#0C71C3] rounded-xl"></div>
              </div>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Yes, We Manufacture Implants And Instruments, But At Surgival We Always Like To Go One Step Further...
                <br /><br />
                We Believe Our Mission Is To Help People And Contribute To Restoring Their Mobility So They Can Maintain Or Regain Their Lifestyle.
              </Typography>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)] p-6 sm:p-8 flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <Typography variant="h3" color="dark">Vision</Typography>
                <div className="w-10 h-1 bg-[#0C71C3] rounded-xl "></div>
              </div>
              <Typography variant="p" color="muted" className="leading-relaxed">
                At Surgival, We Aspire To Be The Leading Spanish Company In Our Sector, Building On More Than 30 Years Of Experience And Innovation.
                <br /><br />
                We Aim To Continue Growing, Setting New Standards, And Becoming The Best In What We Do While Creating A Lasting Impact On People's Lives.
              </Typography>
            </div>

            <div className="mt-2">
              <Button href="#mission" variant="primary" text="Learn More" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;
