/**
 * GlobalFootprint Section (g1, g2, g3)
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Interactive 3-Tab Group Presentation (Figma Component 1 / Group 90):
 *    - Left: Responsive image frame dynamically switching between g1.png, g2.png, g3.png.
 *    - Right: Blue background (#005781) card containing the 3 topic cards:
 *      * "Our Global Footprint" (g1.webp)
 *      * "Sustainability" (g2.webp)
 *      * "The future" (g3.webp)
 * 2. Visual States:
 *    - Active card receives translucent white frosted card styling (`bg-white/20 backdrop-blur-md rounded-[24px] border border-white/30 p-5 sm:p-6`).
 *    - Interactive click or hover seamlessly transitions the displayed image and active state.
 */
"use client";

import React, { useState } from "react";

interface TabItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const tabs: TabItem[] = [
  {
    id: "g1",
    title: "Our Global Footprint",
    description:
      "The system correlates body position with respiratory events to help distinguish patients requiring positional training devices or CPAP therapy. It also measures RERAs to differentiate between AHI and RDI, provides Cheyne-Stokes analysis alongside pulse rate for cardiorespiratory insights, offers extensive CPAP pressure reports to identify ideal fixed pressure, and includes an optional Bruxism Screener to support the growing field of dental sleep medicine.",
    image: "/medical/somno/g1.webp",
    alt: "SOMNOmedics Team Marathon Run - Global Footprint",
  },
  {
    id: "g2",
    title: "Sustainability",
    description:
      "As a forward-looking company, sustainability is particularly important to us. Therefore, our company building is heated freely with geothermal CO2. In addition, we are starting to convert our vehicle fleet to electric cars.",
    image: "/medical/somno/g2.webp",
    alt: "Electric Vehicle Fleet - Sustainability at SOMNOmedics",
  },
  {
    id: "g3",
    title: "The future",
    description:
      "Since April 2007 we have been working in our new company building in Randersacker, in the midst of the Franconian vineyards, overlooking the beautiful Main valley. In 2015, to the 15th anniversary of the company, this was extended by 600 square meters.",
    image: "/medical/somno/g3.webp",
    alt: "SOMNOmedics Building Celebration - Looking to the Future",
  },
];

export default function GlobalFootprint() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="global-footprint" className="relative w-full bg-[#005781] text-white overflow-hidden">
      {/* Desktop Full-Bleed Left Image (touches left screen edge, top, and bottom from 1036px and above) */}
      <div
        className="hidden min-[1036px]:block absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden"
        data-aos="fade-right"
      >
        {tabs.map((tab, idx) => (
          <img
            key={tab.id}
            src={tab.image}
            alt={tab.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              activeTab === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          />
        ))}
      </div>

      {/* Mobile/Tablet Full-Bleed Image: Covers 100% full width of screen up to 1035px */}
      <div className="block min-[1036px]:hidden relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
        {tabs.map((tab, idx) => (
          <img
            key={tab.id}
            src={tab.image}
            alt={tab.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              activeTab === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          />
        ))}
      </div>

      <div className="custom-container">
        <div className="grid grid-cols-1 min-[1036px]:grid-cols-2 items-center">
          
          {/* Empty spacer for desktop left 50% */}
          <div className="hidden min-[1036px]:block" aria-hidden="true" />

          {/* Right Column: Directly inside custom-container reaching its right boundary */}
          <div className="py-8 sm:py-12 min-[1036px]:py-14 xl:py-16 min-[1036px]:pl-10 xl:pl-14 w-full">
            <div className="flex flex-col gap-3 sm:gap-4 w-full" data-aos="fade-left">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`cursor-pointer transition-all duration-300 rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 select-none w-full ${
                      isActive
                        ? "bg-white/20 backdrop-blur-md border border-white/30 shadow-lg translate-x-1 sm:translate-x-2"
                        : "bg-transparent hover:bg-white/10 border border-transparent opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className="mb-1.5 w-full max-w-full">
                      <h3 className="font-primary text-white text-2xl sm:text-3xl lg:text-[34px] leading-tight w-full max-w-full">
                        {tab.title}
                      </h3>
                    </div>

                    <p className="font-secondary text-white/90 text-sm sm:text-base leading-relaxed w-full max-w-full">
                      {tab.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

