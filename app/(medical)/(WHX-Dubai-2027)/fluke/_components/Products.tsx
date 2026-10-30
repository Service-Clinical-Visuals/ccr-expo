"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Typography from "./Typography";

const products = [
  {
    title: "Electrosurgery Analyzer",
    text: "Precise high-frequency RF power output verification, crest factor analysis, and return electrode monitoring (REM).",
    image: "p1.webp",
  },
  {
    title: "Digital Pressure Meter",
    text: "High-accuracy positive and negative pressure calibration for clinical air, liquid lines, aspirators, and medical gas outlets.",
    image: "p2.webp",
  },
  {
    title: "Electrical Safety Analyzers",
    text: "Industry benchmark current leakage, ground wire resistance, and insulation testing compliant with international standards.",
    image: "p3.webp",
  },
];

const eyebrowLine =
  "block w-[54px] h-[2px] min-[2500px]:w-[80px] min-[2500px]:h-[3px] min-[3800px]:w-[108px] min-[3800px]:h-1 rounded-full bg-secondary shrink-0";
const cardRadius = "rounded-[12px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[24px]";
const arrowClass = "w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 shrink-0";

function ProductText({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col items-start">
      <Typography variant="h3" color="white" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
        {title}
      </Typography>
      <Typography variant="p" color="white" className="mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
        {text}
      </Typography>
      <Link href="#products" className="inline-flex items-center gap-2 min-[2500px]:gap-3 text-white hover:text-secondary transition-colors">
        <Typography variant="h5" color="none">
          View Products
        </Typography>
        <FiArrowUpRight className={arrowClass} />
      </Link>
    </div>
  );
}

export default function Products() {
  // Desktop: the active card widens into a dark rectangle with text; the others stay gold image tiles
  const [active, setActive] = useState(0);

  return (
    <section id="products" className="w-full py-12 sm:py-16 xl:py-[60px] min-[2500px]:py-28 min-[3800px]:py-40 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-8 sm:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 mb-3 sm:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className={eyebrowLine} />
            <Typography variant="h5" color="muted" weight="medium" className="uppercase">
              About Fluke Biomedical
            </Typography>
            <span className={eyebrowLine} />
          </div>
          <Typography variant="h2" color="dark" className="mb-5 sm:mb-7 min-[2500px]:mb-10 min-[3800px]:mb-14">
            Reliable Solutions for Biomedical Testing
          </Typography>
          <Typography variant="p" color="dark" className="xl:max-w-[66%]">
            Explore our comprehensive range of biomedical testing equipment, designed to help healthcare professionals
            ensure medical device safety, accuracy, and performance.
          </Typography>
        </div>

        {/* Desktop: expanding row */}
        <div className="hidden xl:flex gap-[2.4%] h-[270px] 2xl:h-[300px] min-[2500px]:h-[420px] min-[3800px]:h-[560px]" data-aos="fade-up">
          {products.map((item, index) => {
            const isActive = active === index;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setActive(index)}
                className={`relative min-w-0 overflow-hidden ${cardRadius} transition-[flex-grow] duration-500 ease-out ${isActive ? "grow-[1.9]" : "grow"
                  } basis-0`}
              >
                {/* Gold tile */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-[#A38B52] transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"
                    }`}
                >
                  <img src={`/medical/fluke/${item.image}`} alt={item.title} className="w-[78%] h-[78%] object-contain" />
                </div>

                {/* Expanded rectangle: text left, product right */}
                <div
                  className={`absolute inset-0 grid grid-cols-[55fr_45fr] items-center gap-4 min-[2500px]:gap-6 bg-primary px-[6%] transition-opacity duration-500 ${isActive ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"
                    }`}
                >
                  <ProductText title={item.title} text={item.text} />
                  <img src={`/medical/fluke/${item.image}`} alt="" aria-hidden="true" className="w-full h-[72%] object-contain" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: every card shows image + text */}
        <div className="grid xl:hidden grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col overflow-hidden bg-primary ${cardRadius} ${index === 2 ? "sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:mx-auto" : ""
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[283/220] flex items-center justify-center bg-[#A38B52]">
                <img src={`/medical/fluke/${item.image}`} alt={item.title} className="w-[70%] h-[100%] object-contain" />
              </div>
              <div className="p-5 sm:p-6">
                <ProductText title={item.title} text={item.text} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10 sm:mt-12 min-[2500px]:mt-20 min-[3800px]:mt-28">
          <Link href="#products" className="inline-flex items-center gap-2 min-[2500px]:gap-3 text-[#E31B23] hover:opacity-80 transition-opacity">
            <Typography variant="h5" color="none">
              View Products
            </Typography>
            <FiArrowUpRight className={arrowClass} />
          </Link>
        </div>
      </div>
    </section>
  );
}
