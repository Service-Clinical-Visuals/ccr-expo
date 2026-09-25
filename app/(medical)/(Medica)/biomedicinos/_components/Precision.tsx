"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Precision() {
  const features = [
    "Compact three-wheel construction supports convenient positioning and efficient use within smaller clinical examination rooms.",
    "Electronic green and anti-glare filters enhance tissue visualization while reducing distracting image artifacts."
  ];

  return (
    <section className="py-16 md:py-24 w-full bg-[#f6f9fc]">
      <div className="custom-container grid grid-cols-1 min-[1281px]:grid-cols-12 gap-12 min-[2500px]:gap-16 items-center">
        {/* Left: Video */}
        <div className="w-full min-[1281px]:col-span-7 aspect-video rounded-sm overflow-hidden bg-white/10 flex items-center justify-center shadow-md order-2 min-[1281px]:order-1" data-aos="fade-right">
          <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
        </div>

        {/* Right: Content */}
        <div className="min-[1281px]:col-span-5 flex flex-col text-left order-1 min-[1281px]:order-2">
          <Typography variant="h6" color="primary" className="mb-2" data-aos="fade-up">
            Precision in Every Examination
          </Typography>
          <Typography variant="h2" color="dark" className="mb-6" data-aos="fade-up" data-aos-delay="100">
            Efficient Digital Colposcopy Built for Flexible, Space-Conscious Clinical Environments
          </Typography>
          <Typography variant="p" color="dark" className="mb-8 text-gray-700" data-aos="fade-up" data-aos-delay="200">
            The SLV-101 HDm combines digital visualization with a compact, ready-to-use configuration, making it practical for modern gynecological examination rooms. Its 10.1-inch TFT LCD monitor, LED illumination, USB connectivity, and integrated GynLab software bring essential imaging and documentation capabilities together in a streamlined system.
          </Typography>

          <div className="flex flex-col gap-5 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={300 + idx * 100}>
                <div className="w-2.5 h-2.5 min-[2500px]:w-4 min-[2500px]:h-4 mt-1.5 shrink-0 bg-[var(--color-primary)] rounded-[2px]" />
                <Typography variant="p" color="dark" className="text-gray-800 leading-relaxed">
                  {feature}
                </Typography>
              </div>
            ))}
          </div>

          <div className="self-start" data-aos="fade-up" data-aos-delay="500">
            <Button text="Explore Our Solutions" variant="primary" showIcon={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
