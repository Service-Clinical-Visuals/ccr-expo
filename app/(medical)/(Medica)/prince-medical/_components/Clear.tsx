"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { FaCheckCircle } from "react-icons/fa";

const Clear = () => {
  return (
    <section id="clear-access" className="w-full py-16 min-[3800px]:py-32 bg-primary overflow-hidden">
      <div className="custom-container flex flex-col min-[1281px]:grid min-[1281px]:grid-cols-12 gap-10 min-[1281px]:gap-12 items-center">

        {/* Left Content (col-span-4/3) */}
        <div className="flex flex-col gap-6 order-1 min-[1281px]:order-1 min-[1281px]:col-span-3 w-full" data-aos="fade-right" data-aos-delay="100">
          <Typography variant="h2" color="white" className="mb-2">
            Clear Access For Confident Gynecological Care
          </Typography>

          <div className="w-full h-px bg-white/20 my-2"></div>

          <Typography variant="p" color="white" className="leading-relaxed">
            The PM-CARE SPECULUM is designed to provide controlled access and clear visualization during gynecological examinations.
          </Typography>

          <div className="flex flex-col gap-5 my-2">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="w-6 h-6 min-[3800px]:h-10 min-[3800px]:w-10 text-white shrink-0 mt-0.5" />
              <Typography variant="p" color="white" className="leading-relaxed text-sm min-[3800px]:text-xl">
                <strong>Reliable Access</strong> – Supports access to the cervical canal and uterine cavity.
              </Typography>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="w-6 h-6 min-[3800px]:h-10 min-[3800px]:w-10 text-white shrink-0 mt-0.5" />
              <Typography variant="p" color="white" className="leading-relaxed text-sm min-[3800px]:text-xl">
                <strong>Flexible Application</strong> – Suitable for various examinations and surgical procedures.
              </Typography>
            </div>
          </div>

          <div className="w-full h-px bg-white/20 my-2"></div>

          <Typography variant="p" color="white" className="leading-relaxed mt-2">
            Available in Cusco and Collin models, it supports cervical and uterine access while offering a sterile, single-use solution made from high-quality medical thermoplastic.
          </Typography>

          <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
            <Button text="View Product Details" href="#details" variant="secondary" />
          </div>
        </div>

        {/* Video (col-span-8/9) */}
        <div
          className="w-full order-2 min-[1281px]:order-2 min-[1281px]:col-span-9 aspect-[16/9] relative overflow-hidden shadow-lg "
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Clear;
