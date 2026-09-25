"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";

interface Product {
  name: string;
  image: string;
}

const productData: Record<string, Product[]> = {
  VitaScope: [
    {
      name: "VitaScope 190",
      image: "/medical/eretna/p1.png",
    },
    {
      name: "VitaScope 190e",
      image: "/medical/eretna/p2.png",
    },
    {
      name: "VitaScope 120",
      image: "/medical/eretna/p3.png",
    },
  ],
  VICU: [
    {
      name: "VitaScope 190",
      image: "/medical/eretna/p4.png",
    },
  ],
  TCardio: [
    {
      name: "TCardio10",
      image: "/medical/eretna/p7.png",
    },
    {
      name: "TCardio6",
      image: "/medical/eretna/p8.png",
    },
  ],
  "Monitoring Systems": [
    {
      name: "Centro Central MS",
      image: "/medical/eretna/p5.png",
    },
    {
      name: "Centro Mobile MS",
      image: "/medical/eretna/p8.png",
    },
  ],
};

const tabs = ["VitaScope", "VICU", "TCardio", "Monitoring Systems"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("VitaScope");

  return (
    <section
      id="products"
      className="w-full py-16 xl:py-24 min-[2500px]:py-36 bg-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header with deleo xl:max-w-[70%] concept */}
        <div
          className="xl:max-w-[70%] max-w-[90%] mx-auto text-center space-y-4 mb-10 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <Typography variant="h2" color="dark">
            Our Product <span className="text-[#3452A7]">Portfolio</span>
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Explore ERETNA’s comprehensive range of innovative medical devices, developed to meet the evolving needs of modern healthcare. From advanced patient monitoring and respiratory care to portable ECG and central monitoring solutions, our technologies are designed to support healthcare professionals with reliable performance, intuitive operation, and greater confidence in patient care.
          </Typography>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`button px-7 sm:px-8 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#3452A7] text-white shadow-md shadow-[#3452A7]/25"
                    : "border border-[#3452A7] text-[#3452A7] hover:bg-[#3452A7]/10"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Product Cards Container: Horizontally centered for each category */}
        {(() => {
          const items = productData[activeTab] || [];

          return (
            <div className="flex flex-wrap justify-center gap-8 xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-18 w-full max-w-[1360px] min-[2500px]:max-w-[2100px] min-[3800px]:max-w-[2800px] mx-auto pb-6">
              {items.map((product, idx) => (
                <div
                  key={product.name + idx}
                  className="flex flex-col items-center group w-full max-w-[390px] md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] lg:max-w-[420px] min-[2500px]:w-[calc(33.333%-2.5rem)] min-[2500px]:max-w-[650px] min-[3800px]:w-[calc(33.333%-3rem)] min-[3800px]:max-w-[850px]"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  {/* Product Image Card */}
                  <div className="relative w-full aspect-[390/374] rounded-2xl min-[2500px]:rounded-3xl overflow-hidden bg-gray-50 figma-card-shadow transition-transform duration-300 group-hover:-translate-y-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlapping Info Card */}
                  <div className="relative -mt-10 min-[2500px]:-mt-14 w-[94%] sm:w-[92%] bg-white rounded-2xl min-[2500px]:rounded-3xl figma-card-shadow p-5 min-[2500px]:p-8 flex flex-col items-center text-center space-y-3 min-[2500px]:space-y-5 z-10 border border-gray-100/70">
                    <Typography variant="h3" color="dark">
                      {product.name}
                    </Typography>

                    <Button
                      text="View Product"
                      href="#contact"
                      variant="primary"
                      showIcon={false}
                      className="!py-2 min-[2500px]:!py-3 min-[2500px]:!px-8"
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
}
