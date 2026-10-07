"use client";

import React from "react";
import Typography from "./Typography";
import { Check } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-12 sm:py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-12 min-[3800px]:gap-20">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="capitalize !font-semibold text-2xl sm:text-3xl md:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[64px]"
          >
            About Ergon Sutramed S.r.l.
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-[#4A4A4A]"
          >
            Ergon Sutramed S.r.l. develops innovative, safe, and high-quality medical devices designed to meet the evolving needs of patients and healthcare professionals. With manufacturing in Magliano dei Marsi, Italy, the company produces solutions for diverse surgical specialties and works closely with surgeons to develop products suited to specific clinical requirements.
          </Typography>
        </div>

        {/* Content: Mission/Vision Card and Facility Image */}
        <div className="flex flex-col min-[1026px]:flex-row items-center w-full mt-4 sm:mt-6">
          {/* Left: Mission & Vision Card */}
          <div
            className="w-full min-[1026px]:w-[54%] xl:w-[52%] bg-white rounded-[20px] min-[3800px]:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 min-[3800px]:p-20 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-gray-100 flex flex-col z-0 shrink-0"
            data-aos="fade-right"
          >
            {/* Inner Text Container */}
            <div className="w-full min-[1026px]:max-w-[85%] xl:max-w-[84%] min-[3800px]:max-w-[85%] flex flex-col gap-6 sm:gap-8">
              {/* Our Mission */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#004D7C] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white" strokeWidth={3} />
                  </div>
                  <Typography
                    variant="h3"
                    color="dark"
                    className="capitalize !font-semibold text-xl sm:text-2xl min-[3800px]:text-4xl text-[#2A2A2A]"
                  >
                    Our Mission
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="muted"
                  className="leading-relaxed text-[#4A4A4A] pl-10 sm:pl-11 min-[3800px]:pl-18"
                >
                  We are constantly striving to develop and deliver innovative, safe and high-quality medical devices that improve the health and quality of life of patients. We collaborate with healthcare professionals to offer solutions that meet clinical needs while supporting the efficiency and sustainability of the healthcare system.
                </Typography>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200/80 my-1" />

              {/* Our Vision */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#004D7C] flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 min-[3800px]:w-8 min-[3800px]:h-8 text-white" strokeWidth={3} />
                  </div>
                  <Typography
                    variant="h3"
                    color="dark"
                    className="capitalize !font-semibold text-xl sm:text-2xl min-[3800px]:text-4xl text-[#2A2A2A]"
                  >
                    Our Vision
                  </Typography>
                </div>
                <Typography
                  variant="p"
                  color="muted"
                  className="leading-relaxed text-[#4A4A4A] pl-10 sm:pl-11 min-[3800px]:pl-18"
                >
                  To lead in innovation and excellence in the health sector, creating cutting-edge solutions that improve global well-being, promote patient safety and support healthcare professionals around the world. We work towards a future where medical technology is increasingly accessible, effective and sustainable, contributing to a better and more equitable healthcare system for all.
                </Typography>
              </div>
            </div>
          </div>

          {/* Right: Factory Image */}
          <div
            className="w-full min-[1026px]:w-[54%] xl:w-[55%] min-[1026px]:-ml-[8%] xl:-ml-[7%] mt-8 min-[1026px]:mt-0 z-10 shrink-0"
            data-aos="fade-left"
          >
            <div className="relative rounded-[20px] md:rounded-[25px] min-[3800px]:rounded-[40px] overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.18)]">
              <img
                src="/medical/ergon/about.webp"
                alt="Ergon Sutramed Facility and Mountains"
                className="w-full h-[320px] sm:h-[390px] md:h-[460px] min-[1026px]:h-[500px] xl:h-[570px] 2xl:h-[610px] min-[2500px]:h-[800px] min-[3500px]:h-[1550px] min-[3800px]:h-[1750px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
