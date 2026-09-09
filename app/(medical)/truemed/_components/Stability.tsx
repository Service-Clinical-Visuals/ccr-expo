"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Download } from "lucide-react";

const Stability = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-[url('/truemed/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative">
      <div className="custom-container flex flex-col lg:grid lg:grid-cols-12 gap-10 min-[3800px]:gap-14 items-center">

        {/* Left Content (Video) */}
        <div className="w-full order-2 lg:order-1 lg:col-span-7 aspect-video relative overflow-hidden" data-aos="fade-right" data-aos-delay="200">
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Right Content (Text) */}
        <div className="flex flex-col gap-4 order-1 lg:order-2 lg:col-span-5 w-full lg:ml-auto" data-aos="fade-left">
          <Typography variant="h3" color="secondary" >
            ■ Innovative Fixation Solutions
          </Typography>

          <Typography variant="h2" color="dark">
            Enhancing Surgical Outcomes with Stability and Precision
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed mt-2">
            Our advanced fixation systems are developed to improve surgical outcomes through enhanced stability, flexibility, and ease of application. With features like locking mechanisms and optimized design structures, TRUEMED implants provide reliable fixation while prioritizing patient safety and faster recovery.
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed mt-2">
            Advanced locking and compression features enhance fixation performance by improving both rotational and axial stability, ensuring secure and reliable outcomes. The optimized design minimizes soft tissue irritation while promoting faster patient recovery, improved comfort, and greater surgical efficiency.
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

      </div>
    </section>
  );
};

export default Stability;
