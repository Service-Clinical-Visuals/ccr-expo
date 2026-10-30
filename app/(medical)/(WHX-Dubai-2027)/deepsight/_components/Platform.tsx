"use client";

import React from "react";
import Typography from "./Typography";

interface Application {
  title: string;
  lines: string[];
  icon: string;
}

const columns: Application[][] = [
  [
    { title: "Biopsy", lines: ["Abdominal (first FDA indication)", "Breast | Thyroid | Prostate"], icon: "n1.webp" },
    { title: "Ablation", lines: ["(RF/Microwave/EP/Cryo)", "Tumor | Cardiac"], icon: "n2.webp" },
    {
      title: "Targeted Drug/ Therapeutic Deliveries",
      lines: ["Brachytherapy", "Fiducial/Marker Placement"],
      icon: "n3.webp",
    },
  ],
  [
    { title: "Vascular Access / Procedures", lines: ["TIPS | PAD"], icon: "n4.webp" },
    { title: "Drainages", lines: ["Thoracentesis, Paracentesis, Biliary etc."], icon: "n5.webp" },
    {
      title: "Contrast Enhanced Ultrasound",
      lines: ["Neurosurgical applications", "Ventricular drainage, etc."],
      icon: "n6.webp",
    },
  ],
];

const cardRadius = "rounded-[10px] min-[2500px]:rounded-[15px] min-[3800px]:rounded-[20px]";

export default function Platform() {
  return (
    <section id="applications" className="w-full bg-white py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-10 sm:mb-12 2xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3 min-[3800px]:h-3 rounded-full bg-secondary" />
            <Typography variant="h6" color="secondary" className="uppercase">
              One Platform.
            </Typography>
          </div>
          <Typography variant="h2" color="primary" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Multiple Targeted Clinical Applications.
          </Typography>
          <Typography variant="p" color="primary" className="max-w-[900px] 2xl:max-w-[1060px] min-[2500px]:max-w-[1480px] min-[3800px]:max-w-[2050px]">
            Our solution supports various procedures, enabling precise visualization and guidance across clinical
            specialties. From biopsies to vascular access, it integrates advanced imaging technology to help
            clinicians visualize instruments and target anatomy in real time. With versatile applications, the
            platform enhances procedural workflows, clarity, precision, and confidence in image-guided care.
          </Typography>
        </div>

        {/* Image + two application cards */}
        <div className="w-full xl:max-w-[86%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[423fr_309fr_309fr] gap-5 sm:gap-6 2xl:gap-8 min-[2500px]:gap-11 min-[3800px]:gap-14">
          {/* Image (after the cards on mobile/tablet) */}
          <div
            className={`order-last xl:order-first md:col-span-2 xl:col-span-1 w-full aspect-[423/346] overflow-hidden bg-[#E9F8FF] ${cardRadius}`}
            data-aos="fade-right"
          >
            <img
              src="/medical/deepsight/section3.webp"
              alt="Ultrasound-guided needle procedure visualization"
              className="w-full h-full object-cover object-left"
            />
          </div>

          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col justify-center gap-7 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 bg-primary px-5 py-7 sm:px-6 2xl:px-7 2xl:py-8 min-[2500px]:px-10 min-[2500px]:py-12 min-[3800px]:px-14 min-[3800px]:py-16 ${cardRadius}`}
              data-aos="fade-up"
              data-aos-delay={(colIndex + 1) * 100}
            >
              {column.map((item) => (
                <div key={item.title} className="flex items-start gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10">
                  <span className="flex items-center justify-center shrink-0 w-14 h-14 2xl:w-16 2xl:h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 rounded-full bg-[#E9F8FF]">
                    <img
                      src={`/medical/deepsight/${item.icon}`}
                      alt=""
                      className="w-8 h-8 2xl:w-11 2xl:h-11 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-[72px] min-[3800px]:h-[72px] object-contain"
                    />
                  </span>
                  <div className="flex flex-col gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3">
                    <Typography variant="h5" color="white" className="!font-semibold">
                      {item.title}
                    </Typography>
                    {item.lines.map((line) => (
                      <Typography key={line} variant="p" color="white">
                        {line}
                      </Typography>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
