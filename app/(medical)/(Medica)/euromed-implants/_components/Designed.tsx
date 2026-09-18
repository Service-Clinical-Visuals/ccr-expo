"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Designed = () => {
  return (
    <section id="designed" className="w-full py-16 xl:py-24 bg-[var(--color-secondary)] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 min-[3800px]:gap-16 items-center">

          {/* Video (Mobile: 2nd, Desktop: 1st) */}
          <div
            className="w-full xl:col-span-7 aspect-video relative overflow-hidden shadow-lg order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Content (Mobile: 1st, Desktop: 2nd) */}
          <div className="xl:col-span-5 flex flex-col gap-3 order-1 xl:order-2" data-aos="fade-left">
            <Typography variant="h5" className="text-[#36679B] font-medium">
              • Femoral Stems
            </Typography>

            <Typography variant="h2" color="dark" className="leading-tight">
              Designed for Stability & Performance
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                Euromed femoral stems are designed to support stable fixation and controlled implant positioning during hip reconstruction. Their varied designs and sizing options help address different clinical requirements while maintaining reliable performance and compatibility with other hip implant components.
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed mt-2">
                <strong className="text-primary">Stable Fixation -  </strong>Designed to provide secure contact and support for reliable implant fixation within the femoral canal.
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed">
                <strong className="text-primary">Precision & Compatibility -  </strong>Engineered for accurate positioning and designed to work seamlessly with compatible hip implant components.
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed">
                <strong className="text-primary">Anatomical Fit -  </strong>Available in different sizes and designs to accommodate varying femoral anatomy and surgical requirements.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="Explore Product" href="#designed" variant="primary" showIcon={false} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Designed;
