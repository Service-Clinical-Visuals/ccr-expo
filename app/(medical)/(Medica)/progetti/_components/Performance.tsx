"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Performance = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-[#EBEBEB] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 min-[3800px]:gap-20 items-center">

          {/* Left Column: Video */}
          <div className="xl:col-span-6 w-full h-full" data-aos="fade-right">
            <div className="w-full aspect-[16/9] bg-white/20 rounded-2xl min-[3800px]:rounded-[3rem] flex items-center justify-center overflow-hidden">
              <DynamicVideoPlayer type="short-1" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="xl:col-span-6 flex flex-col gap-6 min-[3800px]:gap-12 justify-center" data-aos="fade-left">

            <Typography variant="h3" color="dark" className="font-bold leading-tight">
              Intelligent Control. Precise Performance.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed opacity-90 text-sm min-[3800px]:text-3xl">
              The PG 907s delivers highly precise and controlled syringe infusions through an intuitive touchscreen interface and advanced safety features. Its compact, quiet design supports reliable use across intensive care, anesthesia, and pediatric environments.
            </Typography>

            <ul className="flex flex-col gap-5 min-[3800px]:gap-10 mt-2 min-[3800px]:mt-6">
              {[
                {
                  title: "4.3-inch Touchscreen",
                  desc: "A clear and intuitive touchscreen interface provides convenient access to settings, controls, and infusion parameters for easy operation."
                },
                {
                  title: "Automatic Syringe Size Recognition",
                  desc: "Automatically identifies the installed syringe size to support accurate infusion setup and help reduce the risk of incorrect configuration."
                },
                {
                  title: "Dual CPU System",
                  desc: "A dual-processor architecture provides enhanced system monitoring and reliable performance, supporting safe and consistent operation during infusion."
                },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 min-[3800px]:gap-6">
                  {/* Red Asterisk Icon */}
                  <div className="mt-1 shrink-0">
                    <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="4" x2="12" y2="20"></line>
                      <line x1="5.07" y1="8" x2="18.93" y2="16"></line>
                      <line x1="5.07" y1="16" x2="18.93" y2="8"></line>
                    </svg>
                  </div>
                  <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-3xl leading-relaxed">
                    <strong>{feature.title}:</strong> {feature.desc}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="mt-4 min-[3800px]:mt-8">
              <Button text="Explore Product" variant="primary" showIcon={false} className="px-8 min-[3800px]:px-16" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Performance;
