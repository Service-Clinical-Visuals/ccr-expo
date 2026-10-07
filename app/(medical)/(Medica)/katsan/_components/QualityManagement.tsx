"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function QualityManagement() {
  const qualityPoints = [
    {
      title: "Quality Certification",
      desc: "Establishes quality processes aligned with ISO 13485:2016 requirements for medical devices.",
    },
    {
      title: "System Setup",
      desc: "Establishes the necessary quality management structure and departmental responsibilities.",
    },
    {
      title: "Management",
      desc: "Supports ongoing monitoring, system efficiency, documentation, and continuous improvement.",
    },
  ];

  return (
    <section id="quality" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col min-[1301px]:flex-row items-center gap-8 min-[1301px]:gap-12">
        

        <div
          className="w-full min-[1301px]:w-[40%] flex flex-col gap-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >

          <Typography variant="h2" color="dark" className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight">
            ISO 13485{" "}
            <span className="!text-[#00425E] font-inherit" style={{ color: "#00425E", fontSize: "inherit", fontWeight: "inherit" }}>
              Quality Management
            </span>{" "}
            System
          </Typography>

          <div className="flex flex-col gap-3 text-[#4A4A4A]">
            <Typography variant="p" color="muted" className="text-sm sm:text-base leading-relaxed">
              Katsan has had ISO 13485 Medical Devices – Quality Management System since 2005. ISO 13485 is an internationally recognized standard that contains specific requirements for medical devices. It is a quality management system that companies must establish within the scope of CE marking in medical devices.
            </Typography>

            <Typography variant="p" color="muted" className="text-sm sm:text-base leading-relaxed">
              Katsan provides ISO 13485:2016 training and establishes a dedicated quality management system to ensure its effective implementation across all departments.
            </Typography>
          </div>

          <div className="flex flex-col gap-4 pt-1">
            {qualityPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3.5 min-[3800px]:gap-6">
                <div className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-[#00425E] text-white flex items-center justify-center shrink-0 mt-0.5 min-[2500px]:mt-1.5 min-[3800px]:mt-2 shadow-sm">
                  <Check className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                </div>
                <Typography variant="p" color="muted" className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                  <strong className="font-semibold text-[#2A2A2A]">{point.title} –</strong> {point.desc}
                </Typography>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <Button
              text="Explore Our Quality"
              href="#quality"
              variant="primary"
              iconType="arrow-up-right"
            />
          </div>
        </div>

        <div
          className="w-full min-[1301px]:w-[60%]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="w-full aspect-[16/10.2] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-xl border border-black/5 relative group">
            <img
              src="/medical/katsan/quality.webp"
              alt="Katsan Medical Devices Team and Quality Management Celebration"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
              style={{ objectPosition: "top" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
