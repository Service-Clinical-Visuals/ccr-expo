"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Purpose() {
  return (
    <section id="purpose" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14 min-[3800px]:gap-24 w-full">
          {/* Vision & Mission */}
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="flex items-center justify-center xl:justify-start gap-3">
              <div className="w-7 h-[5px] bg-[var(--color-primary)] rounded-[10px]" />
              <Typography
                variant="h4"
                color="primary"
                className="uppercase tracking-wider !font-bold text-sm"
              >
                PURPOSE
              </Typography>
            </div>

            <Typography variant="h2" color="dark" className="leading-snug text-center xl:text-left">
              Our Vision &amp; Mission
            </Typography>

            <div className="flex flex-col gap-5 pt-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start xl:items-center gap-4 sm:gap-5 p-6 bg-white rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.08)] border border-gray-100 transition-shadow hover:shadow-md text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#191919] flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <img
                    src="/medical/duzey-medikal/icon1.webp"
                    alt="Vision Icon"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <Typography variant="h4" color="dark" className="!font-bold text-lg text-center sm:text-left">
                    Our vision –
                  </Typography>
                  <Typography variant="p" color="muted" className="text-sm leading-relaxed text-center sm:text-left">
                    Duzey Medical&apos;s priorty principle; to increase its domination in the domestic and international market by producing solutions in accordance with its customer vision and compete with the precedents of known medical brands.
                  </Typography>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start xl:items-center gap-4 sm:gap-5 p-6 bg-white rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.08)] border border-gray-100 transition-shadow hover:shadow-md text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#191919] flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <img
                    src="/medical/duzey-medikal/icon2.webp"
                    alt="Mission Icon"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center sm:items-start gap-1">
                  <Typography variant="h4" color="dark" className="!font-bold text-lg text-center sm:text-left">
                    Our Mission –
                  </Typography>
                  <Typography variant="p" color="muted" className="text-sm leading-relaxed text-center sm:text-left">
                    Düzey Medical provides services that meet customer expectations while ensuring uncompromised product quality. As a competitive medical equipment company, Düzey Medical aims to strengthen its global presence.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-center xl:justify-start">
              <Button
                text="Read More"
                variant="primary"
                href="#purpose"
                showIcon={false}
                className="px-7 py-3 rounded-[10px]"
              />
            </div>
          </div>

          {/* Image */}
          <div
            className="w-full xl:w-1/2 relative"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="relative w-full pr-5 sm:pr-7 xl:pr-9 min-[2500px]:pr-14 min-[3800px]:pr-20">
              <div className="absolute right-0 top-[4%] bottom-[4%] w-[35%] sm:w-[40%] bg-[#95ACB9]/55 rounded-[8px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[24px] z-0 pointer-events-none" />

              <div className="relative z-10 rounded-[8px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[24px] overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img
                  src="/medical/duzey-medikal/purpose.webp"
                  alt="Duzey Medical Vision and Workspace"
                  className="w-full h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[580px] min-[2500px]:h-[850px] min-[3800px]:h-[1150px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
