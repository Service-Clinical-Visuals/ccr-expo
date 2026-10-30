"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const SmartECG = () => {
  return (
    <section id="smart-ecg" className="w-full py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="custom-box-container">
        {/* Background Card */}
        <div className="w-full bg-[#F4F5F2] rounded-2xl p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 border border-gray-200/50 shadow-sm">
          <div className="flex flex-col min-[1301px]:flex-row gap-8 xl:gap-12 items-center">
            {/* Left Column: Information (35%) */}
            <div className="w-full min-[1301px]:w-[35%] flex flex-col gap-5 sm:gap-6" data-aos="fade-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(24,25,26,0.15)] bg-white w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
                <span className="text-xs sm:text-sm font-secondary font-normal uppercase text-[#4B5563] tracking-wide">
                  SMART ECG IN ACTION
                </span>
              </div>

              {/* Title */}
              <Typography
                variant="h2"
                color="dark"
                className="text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[56px] font-bold text-[#333333]"
              >
                Clear Insights Into Every Heartbeat
              </Typography>

              {/* Paragraph - max-w-[90%] xl:max-w-[85%] */}
              <Typography
                variant="p"
                color="muted"
                className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563] max-w-[90%] xl:max-w-[85%]"
              >
                Live Capture Smart ECG records 12-lead ECG signals and presents cardiac activity in
                easy-to-read formats, supporting healthcare professionals in reviewing and
                interpreting heart data for efficient and reliable clinical assessment across diverse
                healthcare settings and patient care environments.
              </Typography>

              {/* Bullet Features */}
              <ul className="space-y-4 my-2 list-none">
                <li className="flex gap-3.5 items-start">
                  <span className="w-2.5 h-2 bg-[#FFCC00] shrink-0 mt-2" />
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
                  >
                    <strong className="font-bold text-[#4B5563]">12-Lead ECG Acquisition</strong> –
                    Captures comprehensive ECG signals to support detailed cardiac assessment.
                  </Typography>
                </li>
                <li className="flex gap-3.5 items-start">
                  <span className="w-2.5 h-2 bg-[#FFCC00] shrink-0 mt-2" />
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
                  >
                    <strong className="font-bold text-[#4B5563]">Adult and Paediatric Support</strong> –
                    Enables ECG recording for both adult and paediatric patients.
                  </Typography>
                </li>
                <li className="flex gap-3.5 items-start">
                  <span className="w-2.5 h-2 bg-[#FFCC00] shrink-0 mt-2" />
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
                  >
                    <strong className="font-bold text-[#4B5563]">Multiple ECG Display Formats</strong> –
                    Presents cardiac activity in different visual formats for easier review and
                    interpretation.
                  </Typography>
                </li>
              </ul>

              {/* Action Button */}
              <div className="pt-2">
                <Button text="Explore More" href="#smart-ecg" variant="pill" iconType="arrow-up-right" />
              </div>
            </div>

            {/* Right Column: Video Container (65%) - Exact Deleo short-1 pattern */}
            <div
              className="w-full min-[1301px]:w-[65%] shrink-0 relative aspect-video overflow-hidden rounded-xl shadow-xl border border-gray-200"
              data-aos="fade-left"
            >
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartECG;
