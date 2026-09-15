"use client";

import React from "react";

interface PillarItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "vision",
    title: "Vision",
    description:
      "Euromed aims to provide its customers a value -added services and exceed their expectations through the consistent delivery of world-class products",
    image: "/medical/euromed/b1.png",
    alt: "Euromed Sterile Manufacturing Cleanroom and Assembly Line",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "Euromed is maintaining its advanced edge by investing in human resources, research & development in order to deliver world solutions and high-standard products at competitive price.",
    image: "/medical/euromed/b2.png",
    alt: "Euromed Automated Production Machinery and Quality Inspection",
  },
];

export default function VisionMission() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Heading & Centered Subtitle */}
        <div
          className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-outfit">
            Driving Excellence,{" "}
            <span className="text-[#d40708]">Shaping The Future</span>
          </h2>
          <p className="section-text mt-3 sm:mt-4 leading-relaxed font-outfit">
            At Euromed, we are committed to delivering world-class medical solutions
            that exceed customer expectations. Through continuous innovation, investment
            in our people, and strong research and development, we strive to provide
            high-quality products and value-added services that meet evolving healthcare
            needs while maintaining competitive standards.
          </p>
        </div>

        {/* Two-Column Cards: Vision & Mission with Interactive Linear Gradient Overlay on Hover */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-100 shadow-md group cursor-pointer"
              data-aos={idx === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="800"
              data-aos-delay={idx * 150 + 100}
            >
              {/* Background Photo */}
              <img
                src={pillar.image}
                alt={pillar.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Linear Gradient Overlay (#FFFFFF 54% to #D40708) on Hover */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(212, 7, 8, 0.85) 100%)",
                }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col items-center justify-end sm:justify-center p-6 sm:p-10 md:p-12 text-center"
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center max-w-lg">
                  {/* Pillar Title: Vision or Mission */}
                  <h3 className="card-title font-bold text-white font-outfit mb-2 sm:mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="section-text text-white font-outfit leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
