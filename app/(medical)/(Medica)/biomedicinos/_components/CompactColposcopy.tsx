"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function CompactColposcopy() {
  const features = [
    "Ready-to-use configuration simplifies setup without requiring specialist installation, supporting faster integration into clinical environments.",
    "Bright LED illumination and advanced filters provide clear, natural-color visualization during gynecological examinations.",
    "Compact three-wheel design enables comfortable mobility and practical use within space-limited examination rooms.",
    "Ready-to-use configuration simplifies implementation without requiring complex installation or extensive technical preparation."
  ];

  return (
    <section className="py-16 md:py-24 w-full relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/medical/biomedicinos/bg.png')" }}>
      <div className="custom-container flex flex-col">
        {/* Header Section */}
        <div className="text-center    mx-auto mb-12 md:mb-16">
          <Typography variant="h6" color="primary" className="mb-2" data-aos="fade-up">
            Compact Colposcopy
          </Typography>
          <Typography variant="h2" color="dark" className="mb-4" data-aos="fade-up" data-aos-delay="100">
            Compact Digital Imaging Designed for Flexible and Efficient Gynecological Examinations
          </Typography>
          <Typography variant="p" color="dark" className="text-gray-700 xl:max-w-[75%] min-[3800px]:max-w-[90%] mx-auto" data-aos="fade-up" data-aos-delay="200">
            The SLV-101 HDm combines high-quality digital visualization with a compact, ready-to-use design for modern gynecological examinations. Its bright LED illumination, adjustable focus, optical zoom, anti-glare system, and integrated display support clear visualization of cervical and vaginal tissues. With USB connectivity and GynLab software, images can also be transferred, saved, and printed efficiently.
          </Typography>
        </div>

        {/* Content Section (Responsive Order: Video below content on mobile, left on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 min-[2500px]:gap-16 items-center">
          {/* Left: 360 Video - Order 2 on mobile, Order 1 on Desktop */}
          <div className="order-2 lg:order-1 w-full aspect-video rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>

          {/* Right: Features - Order 1 on mobile, Order 2 on Desktop */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <Typography variant="h4" color="dark" className="mb-2" data-aos="fade-up">
              Built for Efficient Clinical Use
            </Typography>

            <div className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 min-[2500px]:p-6 border border-[#a2c9e6] rounded-xl bg-white/50 backdrop-blur-sm"
                  data-aos="fade-up"
                  data-aos-delay={100 + idx * 100}
                >
                  <div className="w-2.5 h-2.5 min-[2500px]:w-4 min-[2500px]:h-4 mt-1.5 shrink-0 bg-[var(--color-primary)] rounded-[2px]" />
                  <Typography variant="p" color="dark" className="text-gray-800 leading-relaxed">
                    {feature}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
