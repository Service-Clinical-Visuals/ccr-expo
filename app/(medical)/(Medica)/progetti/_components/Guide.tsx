"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Guide = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 min-[3800px]:gap-20 items-center">

          {/* Left Column: Text & Button */}
          <div className="xl:col-span-5 flex flex-col gap-4 min-[3800px]:gap-8" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="leading-tight mb-2 min-[3800px]:mb-6">
              AED guide
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed opacity-90 text-sm min-[3800px]:text-3xl">
              The defibrillator is used to analyze the electrical activity of the heart. If it identifies ventricular fibrillation or tachycardia, the device is charged for the shock. In the semi-automatic model, the device will ask the rescuer to press the shock button; In the automatic model, the machine autonomously proceeds to discharge after giving an audible warning. The rescuer, in both cases, makes sure that no one touches the patient.
            </Typography>

            <div className="mt-4 min-[3800px]:mt-8">
              <Button text="Learn More" href="#" variant="primary" showIcon={false} />
            </div>
          </div>

          {/* Right Column: Red Card */}
          <div className="xl:col-span-7 w-full h-full" data-aos="fade-left">
            <div className="relative w-full rounded-2xl min-[3800px]:rounded-[3rem] bg-[#A21E21] overflow-hidden p-8 md:p-12 min-[3800px]:p-24 grid grid-cols-1 md:grid-cols-12 items-center gap-8 min-[3800px]:gap-16 shadow-xl h-full">

              {/* Background Topographic Overlay */}
              <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage: "url('/medical/progetti/bg3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Inner Text Content */}
              <div className="md:col-span-5 flex flex-col gap-4 min-[3800px]:gap-8 relative z-10">
                <Typography variant="h2" color="white" className="leading-tight">
                  RESCUE SAM
                </Typography>
                <Typography variant="p" color="white" className="leading-relaxed text-sm min-[3800px]:text-3xl">
                  Designed for accessibility and ease of use, the semi-automatic defibrillator combines reliable technology with simple, guided operation. It supports rapid response during cardiac emergencies, helping trained and untrained users follow clear instructions when every second matters.
                </Typography>
              </div>

              {/* Inner White Box Image */}
              <div className="md:col-span-7 relative z-10 w-full flex justify-center">
                <div className="bg-white rounded-xl min-[3800px]:rounded-[2rem] p-6 min-[3800px]:p-12 shadow-2xl w-full aspect-[435/354] flex items-center justify-center transform transition-transform hover:scale-105 duration-300">
                  <img
                    src="/medical/progetti/section3.png"
                    alt="AED Device"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Guide;
