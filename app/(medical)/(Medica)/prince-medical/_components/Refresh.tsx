"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { FaCheckCircle } from "react-icons/fa";

const Refresh = () => {
  return (
    <section id="refresh" className="w-full py-16 min-[3800px]:py-32 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[3800px]:gap-16 items-center">

        {/* Top Header Section */}
        <div className="flex flex-col gap-3 items-center text-center w-full xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="primary">
            Flexible Design For Clinical Applications
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed">
            The PM-CARE SPECULUM combines practical design with reliable access for gynecological procedures. The Collin model also allows the introduction of larger devices when required, providing additional flexibility during examinations and procedures.
          </Typography>
        </div>

        <div className="w-full h-px bg-gray-300 xl:w-[90%]"></div>

        {/* Content Section (Video + Right Text) */}
        <div className="w-full flex flex-col min-[1281px]:grid min-[1281px]:grid-cols-12 gap-10 min-[3800px]:gap-12 items-center">

          {/* Video (col-span-8/9) */}
          <div
            className="w-full order-1 min-[1281px]:order-1 min-[1281px]:col-span-9 aspect-video relative overflow-hidden shadow-lg "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content (col-span-4/3) */}
          <div className="flex flex-col gap-6 order-2 min-[1281px]:order-2 min-[1281px]:col-span-3 w-full" data-aos="fade-left" data-aos-delay="200">
            <Typography variant="h3" color="primary" className="mb-2">
              Designed For Clear Gynecological Examination
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              The PM-CARE SPECULUM is designed to support gynecological examinations by providing controlled access and clear visualization of the vagina and cervix.
            </Typography>

            <div className="flex flex-col gap-5 my-2">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-6 h-6 min-[3800px]:h-10 min-[3800px]:w-10 text-primary shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="leading-relaxed text-sm min-[3800px]:text-xl">
                  <strong>Cusco & Collin Models</strong> – Provides options for different clinical requirements.
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-6 h-6 min-[3800px]:h-10 min-[3800px]:w-10 text-primary shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="leading-relaxed text-sm min-[3800px]:text-xl">
                  <strong>Clear Visualization</strong> – Supports clear examination of the vagina and cervix.
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-6 h-6 min-[3800px]:h-10 min-[3800px]:w-10 text-primary shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="leading-relaxed text-sm min-[3800px]:text-xl">
                  <strong>Sterile & Single Use</strong> – Supplied sterile for single-use clinical practice.
                </Typography>
              </div>
            </div>

            <Typography variant="p" color="dark" className="leading-relaxed mt-2">
              Available in Cusco and Collin models, it supports a range of examinations and surgical procedures.
            </Typography>

            <div className="pt-4" data-aos="fade-up" data-aos-delay="300">
              <Button text="View Specifications" href="#specs" variant="secondary" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Refresh;
