"use client";

import React, { useState, useRef, useEffect } from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

interface ProductItem {
  category: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const tabData: Record<string, ProductItem[]> = {
  Arthroplasty: [
    {
      category: "KNEE ARTHROPLASTY",
      title: "Primary & Revision Systems",
      description:
        "High-stability design preserving anatomical kinematics in both primary and complex revision procedures.",
      image: "/medical/hipokrat/s11.webp",
    },
    {
      category: "HIP ARTHROPLASTY",
      title: "Primary Hip Replacement",
      description:
        "Bipolar and dual-mobility articulations with hydroxyapatite-coated titanium femoral stems.",
      image: "/medical/hipokrat/s12.webp",
    },
    {
      category: "SHOULDER ARTHROPLASTY",
      title: "Standard Shoulder Prosthesis",
      description:
        "Designed to restore shoulder function and stability, and improved mobility for patients requiring shoulder joint replacement.",
      image: "/medical/hipokrat/s13.webp",
    },
    {
      category: "ELBOW ARTHROPLASTY",
      title: "Elbow Prosthesis",
      description:
        "Designed to restore elbow stability and mobility and improved movement after joint replacement.",
      image: "/medical/hipokrat/s14.webp",
    },
  ],
  "Trauma Systems": [
    {
      category: "TRAUMA FIXATION",
      title: "Anatomical Plating Systems",
      description:
        "Low-profile locking compression plates providing rigid fixation for complex long-bone fractures.",
      image: "/medical/hipokrat/s21.webp",
    },
    {
      category: "INTRAMEDULLARY NAILING",
      title: "Femoral & Tibial Nails",
      description:
        "Advanced titanium intramedullary nails engineered for minimally invasive insertion and dynamic locking.",
      image: "/medical/hipokrat/s22.webp",
    },
    {
      category: "EXTERNAL FIXATION",
      title: "Modular Fixator Frame",
      description:
        "Multi-planar external fixation assemblies ensuring stability during severe soft tissue compromise.",
      image: "/medical/hipokrat/s23.webp",
    },
  ],
  "Spine Surgery": [
    {
      category: "THORACOLUMBAR",
      title: "Pedicle Screw Spinal System",
      description:
        "High-strength polyaxial pedicle screws offering comprehensive correction in spinal deformities.",
      image: "/medical/hipokrat/s31.webp",
    },
    {
      category: "INTERBODY FUSION",
      title: "Cervical & Lumbar PEEK Cages",
      description:
        "Radiolucent interbody spacers with micro-textured titanium endplates promoting osseointegration.",
      image: "/medical/hipokrat/s32.webp",
    },
  ],
  "Tumor Resection": [
    {
      category: "ONCOLOGICAL RECONSTRUCTION",
      title: "Modular Limb Salvage System",
      description:
        "Segmental defect reconstruction implants engineered to restore limb function after radical tumor resection.",
      image: "/medical/hipokrat/s41.webp",
    },
    {
      category: "PELVIC RECONSTRUCTION",
      title: "Custom Acetabular Cages",
      description:
        "Patient-matched structural solutions offering secure anchorage in massive oncological bone loss.",
      image: "/medical/hipokrat/s42.webp",
    },
  ],
  "Patient-Specific": [
    {
      category: "3D BIO-PRINTED TITANIUM",
      title: "Patient-Specific Implants (PSI)",
      description:
        "Custom-manufactured implants built from high-resolution CT scans to match unique patient anatomy.",
      image: "/medical/hipokrat/s43.webp",
    },
    {
      category: "SURGICAL GUIDES",
      title: "Custom Resection Jigs",
      description:
        "Single-use surgical cutting guides designed to optimize surgical precision and reduce operating time.",
      image: "/medical/hipokrat/s44.webp",
    },
  ],
};

const tabs = [
  "Arthroplasty",
  "Trauma Systems",
  "Spine Surgery",
  "Tumor Resection",
];

// Product card with exact 3-fillet smooth curved notch at bottom-right, dynamic big-screen scaling, and zoom-in only hover effect
function ProductCard({ item, index }: { item: ProductItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 390, h: 480 });

  useEffect(() => {
    if (!cardRef.current) return;
    const updateSize = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({
            w: Math.round(rect.width),
            h: Math.round(rect.height),
          });
        }
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const { w, h } = dimensions;

  // Proportional scaling for standard, 2K, and 4K big displays
  // Base Figma card width is 390px. Scale factor grows proportionally with card width.
  const scale = Math.max(1.0, Math.min(2.4, w / 370));

  const R = 24 * scale;
  const nw = 56 * scale;
  const nh = 58 * scale;
  const r1 = 16 * scale;
  const r2 = 16 * scale;
  const r3 = 16 * scale;

  // Mathematically smooth 3-fillet path matching Figma Subtract geometry
  const pathD = `M ${R} 0 H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R} V ${h - nh - r1} A ${r1} ${r1} 0 0 1 ${w - r1} ${h - nh} H ${w - nw + r2} A ${r2} ${r2} 0 0 0 ${w - nw} ${h - nh + r2} V ${h - r3} A ${r3} ${r3} 0 0 1 ${w - nw - r3} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`;

  // Dynamically scaled button dimensions for big screens
  const btnSize = Math.round(40 * scale);
  const btnRadius = Math.round(8 * scale);
  const btnOffset = Math.round(8 * scale);
  const iconSize = Math.round(18 * scale);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col group w-full transition-shadow duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* SVG Background Path with 3 Continuous Rounded Fillets and Drop Shadows */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0px_1px_3px_rgba(60,64,67,0.22)] drop-shadow-[0px_2px_8px_rgba(60,64,67,0.12)] group-hover:drop-shadow-[0px_6px_20px_rgba(60,64,67,0.18)] transition-all duration-300"
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
      >
        <path d={pathD} fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
      </svg>

      {/* Card Content Area */}
      <div
        className="relative z-10 flex flex-col flex-1"
        style={{
          padding: `${Math.round(16 * scale)}px`,
        }}
      >
        {/* Product Image Container: Zoom-in ONLY on hover, no card movement */}
        <div
          className="w-full aspect-[4/3] bg-[#ECF7FD] flex items-center justify-center overflow-hidden relative"
          style={{
            borderRadius: `${Math.round(16 * scale)}px`,
            padding: `${Math.round(16 * scale)}px`,
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Text Content - Category name matches normal paragraph text size */}
        <div
          className="flex flex-col flex-1"
          style={{
            paddingTop: `${Math.round(16 * scale)}px`,
            paddingBottom: `${Math.round(54 * scale)}px`,
            paddingRight: `${Math.round(54 * scale)}px`,
          }}
        >
          <span
            className="font-bold text-[#005D8F] tracking-wider uppercase"
            style={{
              fontSize: `${Math.round(14 * scale)}px`,
              marginBottom: `${Math.round(8 * scale)}px`,
              lineHeight: 1.4,
            }}
          >
            {item.category}
          </span>

          <h3
            className="font-bold text-[#0B1C30] leading-snug"
            style={{
              fontSize: `${Math.round(18 * scale)}px`,
              marginBottom: `${Math.round(8 * scale)}px`,
              lineHeight: 1.25,
            }}
          >
            {item.title}
          </h3>

          <p
            className="text-[#414752] leading-relaxed line-clamp-3"
            style={{
              fontSize: `${Math.round(14 * scale)}px`,
              lineHeight: 1.5,
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Bottom Right Notch Button - Dynamically scaled on big screens */}
      <div
        className="absolute z-20"
        style={{
          right: `${btnOffset}px`,
          bottom: `${btnOffset}px`,
        }}
      >
        <button
          type="button"
          aria-label="Product Details"
          style={{
            width: `${btnSize}px`,
            height: `${btnSize}px`,
            borderRadius: `${btnRadius}px`,
          }}
          className="bg-[#0059A4] group-hover:bg-[#0082CB] text-white flex items-center justify-center transition-colors duration-300 shadow-[0px_1px_2px_rgba(0,0,0,0.08)] cursor-pointer"
        >
          <ArrowRight
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
            }}
            className="stroke-[2.4]"
          />
        </button>
      </div>
    </div>
  );
}

export default function Solutions() {
  const [activeTab, setActiveTab] = useState<string>("Arthroplasty");
  const products = tabData[activeTab] || tabData["Arthroplasty"];

  return (
    <section id="products" className="w-full py-16 xl:py-24 min-[2000px]:py-28 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[2000px]:gap-14 min-[2500px]:gap-16 min-[3800px]:gap-24">
        {/* Header & Tabs */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          {/* Section Titles */}
          <div className="flex flex-col gap-2 min-[2500px]:gap-4">
            <Typography
              variant="h4"
              className="!text-[#0059A4] font-bold tracking-widest uppercase"
            >
              TRUSTED SURGICAL SOLUTIONS
            </Typography>
            <Typography
              variant="h2"
              color="dark"
              className="text-[#0B1C30] font-extrabold leading-tight"
            >
              Our Comprehensive Solutions
            </Typography>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 xl:gap-4 min-[2000px]:gap-5 min-[2500px]:gap-6 min-[3800px]:gap-8 w-full lg:w-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`solutions-tab-btn cursor-pointer ${
                    isActive
                      ? "bg-[#0082CB] text-white shadow-sm"
                      : "bg-[#ECF7FD] text-[#0B1C30] hover:bg-[#d8eefc]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Layout:
            1. Desktop screens (xl and above): All 4 cards fit cleanly in ONE row flex (xl:w-[calc(25%-16px)]).
            2. Below 4 cards on desktop (e.g. 1, 2, or 3 cards): Perfectly centered horizontally with justify-center.
            3. Tablet screens (sm to xl): 2-column layout (sm:w-[calc(50%-12px)]).
            4. Mobile screens (< sm): 1-column layout (w-full max-w-[440px]).
            5. Big screens (2K / 4K): Full proportional scaling for cards, texts, and arrow button.
        */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 xl:gap-5 2xl:gap-6 min-[2000px]:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full">
          {products.map((item, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="w-full sm:w-[calc(50%-12px)] xl:w-[calc(25%-16px)] 2xl:w-[calc(25%-18px)] min-w-0 max-w-[480px] xl:max-w-none min-[2000px]:max-w-[560px] min-[2500px]:max-w-[680px] min-[3800px]:max-w-[850px] flex justify-center"
            >
              <ProductCard
                item={item}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Catalog Link */}
        <div className="flex justify-end pt-4 min-[2000px]:pt-8 min-[3800px]:pt-12" data-aos="fade-up">
          <a
            href="#products"
            className="flex items-center gap-2 text-sm sm:text-base min-[2000px]:text-xl min-[2500px]:text-2xl min-[3800px]:text-3xl font-semibold text-[#0059A4] hover:text-[#0082CB] underline underline-offset-4 transition-colors group"
          >
            <span>View Complete Product Catalog</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
