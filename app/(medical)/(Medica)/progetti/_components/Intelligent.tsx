"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Intelligent = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-[#F2F2F2] overflow-hidden relative" style={{ backgroundImage: "url('/medical/progetti/bg2.png')", backgroundSize: "cover", backgroundPosition: "center" }}>

      <div className="custom-container relative z-10">

        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center mb-10 min-[3800px]:mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 min-[3800px]:gap-8 mb-4 min-[3800px]:mb-8 w-full">
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
            <Typography variant="h2" color="dark" className="whitespace-nowrap font-bold">
              Designed for Safer, Smarter Infusion
            </Typography>
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
          </div>
          <Typography variant="p" color="dark" className="xl:max-w-[70%] opacity-90 text-sm min-[3800px]:text-3xl leading-relaxed">
            The PG 907s combines intelligent control with advanced safety functions to help healthcare professionals manage infusion therapy with confidence. From automatic syringe recognition to anti-reverse motor protection and optional Wi-Fi connectivity, every feature is designed to support precise delivery and efficient monitoring.
          </Typography>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-[3800px]:gap-12 items-center">

          {/* Column 1: Video Placeholder (span 8) */}
          <div className="xl:col-span-8 w-full h-full" data-aos="fade-right">
            <div className="w-full aspect-video h-full bg-white/20 rounded-xl min-[3800px]:rounded-[2rem] flex items-center justify-center overflow-hidden relative">
              <DynamicVideoPlayer type="short-2" />
            </div>
          </div>

          {/* Column 2: Text Content (span 4) */}
          <div className="xl:col-span-4 flex flex-col justify-center h-full" data-aos="fade-left">
            <div className="flex flex-col bg-white/50 backdrop-blur-sm border-2 border-[#ED1C24] rounded-xl min-[3800px]:rounded-[2rem] p-8 min-[3800px]:p-16 h-full justify-center gap-6">

              <div>
                <Typography variant="h3" color="dark" className="leading-tight mb-6 min-[3800px]:mb-12 font-bold">
                  Smart Features for Safer Infusion
                </Typography>

                <ul className="flex flex-col gap-6 min-[3800px]:gap-12">
                  {[
                    { title: "Automatic syringe recognition", desc: "Automatically identifies the syringe size to help ensure accurate infusion setup and reliable medication delivery." },
                    { title: "Dual CPU safety system", desc: "Provides enhanced system monitoring and operational reliability during infusion therapy." },
                    { title: "Anti-reverse motor protection", desc: "Helps prevent unwanted syringe movement and supports controlled, consistent infusion performance." },
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 min-[3800px]:gap-8">
                      {/* Checkmark Icon */}
                      <div className="mt-1.5 shrink-0">
                        <svg width="22" height="15" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.75 6.75L4.5 10.5M9.75 4.5L13.5 0.75M6.75 6.75L10.5 10.5L19.5 0.75" stroke="#ED1C24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-3xl leading-relaxed">
                        <strong>{feature.title}</strong> — {feature.desc}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 min-[3800px]:mt-8">
                <Button text="Explore Product" variant="primary" showIcon={false} className="px-6 py-2 min-[3800px]:px-12 min-[3800px]:py-4" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Intelligent;
