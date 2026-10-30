"use client";

import React from "react";
import { LuFactory, LuGauge } from "react-icons/lu";
import { FaEarthEurope } from "react-icons/fa6";
import Typography from "./Typography";

const pillIcon = "w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 shrink-0";

const stats = [
  {
    label: "Active Telemetry Links",
    icon: <span className="block w-2 h-2 min-[2500px]:w-3 min-[2500px]:h-3 min-[3800px]:w-4 min-[3800px]:h-4 rounded-full bg-[#10B981] shrink-0" />,
  },
  { label: "Latency < 45ms", icon: <LuGauge className={`${pillIcon} text-[#1D4ED8]`} strokeWidth={2.5} /> },
  { label: "60+ Export Markets", icon: <FaEarthEurope className={`${pillIcon} text-secondary`} /> },
];

export default function Platform() {
  return (
    <section id="global" className="w-full bg-white py-12 sm:py-16  min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 xl:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24">
        {/* Heading + content (first on mobile/tablet) */}
        <div className="order-1 xl:col-span-7 flex flex-col items-start" data-aos="fade-right">
          <Typography variant="h5" color="secondary" weight="medium" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            Expanding Excellence Worldwide
          </Typography>
          <Typography variant="h2" color="dark" className="mb-5 xl:max-w-[89%] min-[2500px]:mb-8 min-[3800px]:mb-11">
            Cardioline, proudly headquartered in Trento, Italy, has a strong global presence and continues to expand
            rapidly.
          </Typography>

          <div className="w-full p-4 sm:p-5 min-[2500px]:p-8 min-[3800px]:p-10 bg-white border border-[#E5E7EB] rounded-[10px] min-[2500px]:rounded-[15px] min-[3800px]:rounded-[20px] shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3.5 mb-2.5 min-[2500px]:mb-4 min-[3800px]:mb-6">
              <LuFactory
                className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-secondary shrink-0"
                strokeWidth={2}
              />
              <Typography variant="h3" color="secondary" weight="medium">
                Manufacturing Footprint
              </Typography>
            </div>
            <Typography variant="p" color="dark">
              With manufacturing plants and R&amp;D offices in both Italy and Brazil, Cardioline’s strategic global
              growth enables us to meet the unique needs of diverse markets while maintaining world-class quality
              standards.
            </Typography>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 mt-5 min-[2500px]:mt-8 min-[3800px]:mt-11">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 px-3 sm:px-4 py-1.5 min-[2500px]:px-6 min-[2500px]:py-2.5 min-[3800px]:px-8 min-[3800px]:py-3.5 bg-white border border-[#E5E7EB] rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px]"
              >
                {item.icon}
                <Typography variant="p" color="primary" weight="semibold">
                  {item.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Globe (last on mobile/tablet) */}
        <div className="order-2 xl:col-span-5 flex justify-center xl:justify-end" data-aos="fade-left">
          <img
            src="/medical/cardioline/world.webp"
            alt="Globe showing Cardioline's offices and export markets"
            className="w-full max-w-[420px] xl:max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
