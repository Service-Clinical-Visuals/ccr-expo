"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-16 xl:py-24 bg-[var(--color-secondary)] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Text Content (Mobile: 1st, Desktop: 2nd) */}
          <div className="xl:col-span-6 flex flex-col gap-3 order-1 xl:order-2" data-aos="fade-left">
            <Typography variant="h5" weight="semibold" className="text-[#36679B] ">
              • Product View
            </Typography>

            <Typography variant="h2" color="dark" className="leading-tight">
              Precision-Engineered Femoral Stems
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                Designed for modern hip reconstruction, our femoral stem solutions combine precise geometry, reliable fixation, and proven implant technology. Developed with a focus on surgical requirements, they provide a range of options to support different patient anatomies and clinical needs.
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed">
                From primary procedures to more complex cases, each stem is engineered to support consistent surgical technique and dependable implant positioning. Thoughtful design features help facilitate controlled insertion, stable fixation, and compatibility with a comprehensive range of femoral head and acetabular components.
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed">
                Our portfolio includes stem options designed to address varying anatomical requirements, fixation preferences, and surgical approaches. With attention to material selection, surface finish, taper integrity, and dimensional accuracy, every component is manufactured to meet demanding quality standards.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="Learn More" href="#explore360" variant="primary" showIcon={false} />
            </div>
          </div>

          {/* Video (Mobile: 2nd, Desktop: 1st) */}
          <div
            className="w-full xl:col-span-6 aspect-video relative overflow-hidden   order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Deg360;
