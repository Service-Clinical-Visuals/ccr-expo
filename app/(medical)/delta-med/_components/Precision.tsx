"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const Precision = () => {
  return (
    <section
      id="precision"
      className="w-full py-16 bg-secondary relative overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-12 items-center">

        {/* Top Header Row */}
        <div className="flex flex-col items-center text-center gap-4 w-full xl:w-[80%] border-b border-white/20 pb-10" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold">
            Precise Fit & Lasting Protection
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed">
            A precise gasket fit is essential for maintaining the integrity of an engine assembly. SKT gasket sets are developed to provide accurate positioning and dependable sealing across a wide range of applications. Their reliable construction helps protect mating surfaces, maintain sealing integrity, and support long-term component performance under demanding operating conditions.
          </Typography>
        </div>

        {/* Content Row */}
        <div className="w-full flex flex-col xl:flex-row gap-10 xl:gap-12 items-center" data-aos="fade-up" data-aos-delay="100">

          {/* Video Container */}
          <div className="order-2 xl:order-1 w-full xl:w-[60%] relative shadow-2xl overflow-hidden rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="w-full aspect-video bg-white/5">
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 xl:order-2 w-full xl:w-[40%] flex flex-col gap-6">

            <div className="flex flex-col gap-4 border-b border-white/20 pb-6">
              <Typography variant="h3" color="white" className="font-bold">
                Built For Precision, Durability, And Performance.
              </Typography>
              <Typography variant="p" color="white" className="text-sm leading-relaxed">
                Designed for precise fit, reliable sealing, and lasting protection, SKT gasket sets ensure dependable performance across demanding engine applications.
              </Typography>
            </div>

            <ul className="flex flex-col gap-5 border-b border-white/20 pb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 min-[3800px]:h-10 min-[3800px]:w-10  text-white fill-white shrink-0 mt-0.5" stroke="var(--color-secondary)" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed">
                  <strong>Accurate Fitment</strong> – Engineered for precise positioning and consistent installation across various engine applications.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 min-[3800px]:h-10 min-[3800px]:w-10 text-white fill-white shrink-0 mt-0.5" stroke="var(--color-secondary)" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed">
                  <strong>Reliable Sealing</strong> – Helps maintain sealing integrity and prevent leaks between critical engine components.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 min-[3800px]:h-10 min-[3800px]:w-10 text-white fill-white shrink-0 mt-0.5" stroke="var(--color-secondary)" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed">
                  <strong>Long-Term Performance</strong> – Built to deliver dependable sealing performance under demanding operating conditions.
                </Typography>
              </li>
            </ul>

            <div className="flex flex-col gap-6 pt-2">
              <Typography variant="p" color="white" className="text-sm leading-relaxed">
                Engineered for precise fit and durable sealing, SKT gasket sets deliver reliable protection and long-lasting performance.
              </Typography>
              <Button text="View Specification" href="#specification" showIcon={true} iconVariant="white" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Precision;
