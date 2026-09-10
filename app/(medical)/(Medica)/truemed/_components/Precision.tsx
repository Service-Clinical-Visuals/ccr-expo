"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Download } from "lucide-react";

const Precision = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-[url('/truemed/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-8 min-[3800px]:gap-14 items-center">

        {/* Left Content (Text) */}
        <div className="flex flex-col gap-4 order-1 lg:col-span-5 w-full " data-aos="fade-right">
          <Typography variant="h3" color="secondary" >
            ■ Advanced Trauma Plate Systems
          </Typography>

          <Typography variant="h2" color="dark">
            Precision-Engineered Plates for Reliable Fracture Stabilization
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed mt-2">
            TRUEMED offers a comprehensive range of trauma plates designed to deliver superior stability and support effective fracture healing across multiple anatomical regions. Manufactured with high-grade materials and advanced engineering techniques, our plates ensure optimal fit, strength, and long-term performance in complex surgical procedures.
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed mt-2">
            Anatomically contoured for accurate fit, these implants are crafted from high-strength, medical-grade materials to ensure durability and reliability. They are designed to support complex fracture management while enhancing surgical efficiency for precise and effective outcomes.
          </Typography>

          <div className="pt-4" data-aos="fade-up" data-aos-delay="100">
            <a href="#" className="inline-block outline-none active:scale-95 transition-transform duration-200 select-none group">
              <div className="flex items-center justify-center px-6 py-3 rounded-xl transition-colors bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5">
                <span className="button whitespace-nowrap mr-2 sm:mr-3">Download Catalog</span>
                <Download className="w-5 h-5 shrink-0" strokeWidth={2} />
              </div>
            </a>
          </div>
        </div>

        {/* Right Content (Video) */}
        <div className="w-full order-2 lg:col-span-7 aspect-video relative overflow-hidden " data-aos="fade-left" data-aos-delay="200">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Precision;
