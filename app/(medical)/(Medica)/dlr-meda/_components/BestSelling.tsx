"use client";

import React from "react";
import { FlaskConical, Heart } from "lucide-react";
import Typography from "./Typography";
import SectionBadge from "./SectionBadge";
import ProductCard, { hemodialysisTheme, urologyTheme } from "./ProductCard";

const bestSellers = [
  {
    id: "optima",
    title: "OPTIMA",
    description:
      "The OPTIMA Step Tip Tunneled Hemodialysis Catheter is designed to provide safe and effective vascular access for patients requiring long-term hemodialysis treatment.",
    tags: ["Step-Tip Geometry", "Flow > 450 mL/min", "Carbothane™ Resin"],
    image: "/medical/dlr-meda/p3.webp",
    categoryLabel: "Hemodialysis Group Products",
    icon: FlaskConical,
    status: "In Stock",
    theme: { ...hemodialysisTheme, bar: "from-[#2563EB] to-[#4F46E5]" },
  },
  {
    id: "lubri-soft",
    title: "Lubri-soft® Double Pigtail Ureteral Stent",
    description:
      "DLR Medical Double-J ureteral stent is a reliable urological implant solution used to treat ureteral strictures and blockages.",
    tags: ["Hydrophilic Coating", "12-Month In-Dwelling", "Radiopaque PU"],
    image: "/medical/dlr-meda/p11.webp",
    categoryLabel: "Urology Group Products",
    icon: Heart,
    status: "High Demand",
    theme: urologyTheme,
  },
];

export default function BestSelling() {
  return (
    <section
      id="best-selling"
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <SectionBadge text="Clinical Precision & Innovation" />
          <Typography
            variant="h2"
            color="dark"
            className="mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 tracking-[-0.02em] text-center"
          >
            Explore Our Best-Selling Product Range
          </Typography>
          <Typography
            variant="p"
            color="none"
            className="mt-3 min-[2500px]:mt-5 min-[3800px]:mt-7 text-[#475569] text-center max-w-full lg:max-w-[90%] xl:max-w-[80%]"
          >
            Consumables and equipment precisely designed for specialized clinical
            procedures, combining advanced engineering, innovative design, and
            rigorous quality standards. Each solution is engineered for optimized
            flow hemodynamics, reliable performance, ease of use, and enhanced
            patient comfort—supporting healthcare professionals in delivering
            safe, efficient, and consistent clinical outcomes across demanding
            medical environments.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 mx-auto mt-10 md:mt-12 min-[2500px]:mt-16 min-[3800px]:mt-20 max-w-full sm:max-w-[80%] md:max-w-full lg:max-w-[75%] xl:max-w-[60%]">
          {bestSellers.map(({ id, ...product }, idx) => (
            <div key={id} data-aos="fade-up" data-aos-delay={100 + idx * 100}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
