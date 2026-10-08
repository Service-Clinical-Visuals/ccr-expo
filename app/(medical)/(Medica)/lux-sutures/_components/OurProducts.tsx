"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Product {
  name: string;
  description: string;
  image: string;
  href: string;
}

interface ProductTab {
  label: string;
  products: Product[];
}

const TABS: ProductTab[] = [
  {
    label: "Absorbable Sutures",
    products: [
      {
        name: "Luxcryl 910 (Polyglactin 910)",
        description:
          "Luxcryl 910 sutures are intended for use in general soft tissue closing and/or ligation.",
        image: "/medical/lux-sutures/p5.webp",
        href: "",
      },
      {
        name: "Catgut Chrom (Chromic Catgut)",
        description:
          "Catgut chrom sutures are intended for use in general soft tissue closing and/or ligation.",
        image: "/medical/lux-sutures/p6.webp",
        href: "",
      },
      {
        name: "Catgut Plain (Plain Catgut)",
        description:
          "Catgut plain sutures are intended for use in general soft tissue closing and/or ligation.",
        image: "/medical/lux-sutures/p7.webp",
        href: "",
      },
      {
        name: "Luxcryl PDO (Polydioxanone)",
        description:
          "Luxcryl PDO sutures are intended for use in general soft tissue closing and/or ligation.",
        image: "/medical/lux-sutures/p8.webp",
        href: "",
      },
    ],
  },
  {
    label: "Non Absorbable Sutures",
    products: [
      {
        name: "Luxylene (Polypropylene)",
        description:
          "Luxylene sutures are intended for use in general soft tissue closing and/or ligation.",
        image: "/medical/lux-sutures/p1.webp",
        href: "",
      },
      {
        name: "Luxamid (Nylon – Polyamid)",
        description:
          "Luxamid sutures are intended for use in general soft tissue closing and/or ligation.",
        image: "/medical/lux-sutures/p2.webp",
        href: "",
      },
      {
        name: "Supramid (Polyamide 6)",
        description:
          "Supramid sutures are intended for use in general soft tissue closing and/or ligation; especially in skin closure.",
        image: "/medical/lux-sutures/p3.webp",
        href: "",
      },
      {
        name: "Luxpet (Polyester braided)",
        description:
          "Luxpet sutures are intended for use in general soft tissue closing and/or ligation; especially in ophthalmic surgery.",
        image: "/medical/lux-sutures/p4.webp",
        href: "",
      },
    ],
  },
  {
    label: "Medical Devices",
    products: [
      {
        name: "Surgical meshes",
        description: "Monofilament polypropylene knitted into an elastic, durable mesh",
        image: "/medical/lux-sutures/p9.webp",
        href: "",
      },
      {
        name: "Bone Wax",
        description:
          "Used in the control of bleeding from bone surfaces by acting as a mechanical barrier",
        image: "/medical/lux-sutures/p10.webp",
        href: "",
      },
      {
        name: "Flex-bandages",
        description:
          "Complete range of flexible, self adhesive and comfortable bandages. Suitable for all types of animals.",
        image: "/medical/lux-sutures/11.webp",
        href: "",
      },
      {
        name: "Luxbond",
        description: "Luxbond Tissue Adhesive provides quality wound management",
        image: "/medical/lux-sutures/12.webp",
        href: "",
      },
    ],
  },
];

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState(0);
  const products = TABS[activeTab].products;

  return (
    <section id="products" className="w-full bg-white py-14 sm:py-16 desk:py-20 2xl:py-24">
      <div className="custom-container">
        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="800">
          <span className="section-text block font-semibold uppercase tracking-wide text-[#0071ce]">
            Clinical Grade Portfolios
          </span>
          <h2 className="section-title mt-2 sm:mt-3 font-bold leading-tight text-[#0b1b2b]">
            Interactive 360° Hernia Mesh &amp; Macroporous Matrix Inspection
          </h2>
          <p className="section-text mt-6 sm:mt-8 leading-relaxed text-slate-600">
            Examine our ultra-pure monofilament polypropylene hernia mesh designed for open and
            laparoscopic (TAPP / TEP) hernia repair. Rotate 360° to analyze pore architecture,
            anisotropic elasticity, and non-fraying thermofused borders.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="mt-8 sm:mt-10 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div
            role="tablist"
            className="inline-flex max-w-full overflow-x-auto rounded-xl bg-[#deeefa] px-3 sm:px-6 2k:px-10"
          >
            {TABS.map((tab, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(index)}
                  className={`section-text relative whitespace-nowrap px-3 sm:px-5 py-3 sm:py-3.5 2k:py-5 font-semibold transition-colors duration-200 ${isActive ? "text-[#0071ce]" : "text-[#0b1b2b] hover:text-[#0071ce]"
                    }`}
                >
                  {tab.label}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-[#0071ce] transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"
                      }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards */}
        <div key={activeTab} className="custom-grid mt-8 sm:mt-10 desk:mt-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="lux-fade-up col-span-12 sm:col-span-6 desk:col-span-3 flex"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="group relative flex w-full">
                {/* Shadow wrapper: drop-shadow follows the notched card shape */}
                <div className="notch-card-shadow flex w-full">
                  <article className="notch-card flex w-full flex-col rounded-2xl bg-white p-2 sm:p-2.5">
                    {/* Image */}
                    <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-[#f0f6fc] p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content (bottom padding keeps text clear of the notch) */}
                    <div className="flex flex-1 flex-col px-2 sm:px-3 pt-5 pb-16 2k:pb-24">
                      <h3 className="card-title font-semibold text-[#0b1b2b]">{product.name}</h3>
                      <p className="section-text mt-4 leading-relaxed text-slate-600">
                        {product.description}
                      </p>
                    </div>
                  </article>
                </div>

                {/* Arrow button sitting inside the bottom-right notch */}
                <Link
                  href={product.href}
                  aria-label={`View ${product.name}`}
                  className="notch-card-btn absolute bottom-0 right-0 flex items-center justify-center rounded-lg bg-[#0071ce] text-white transition-colors duration-200 hover:bg-[#005ca8]"
                >
                  <ArrowRight className="h-4 w-4 2k:h-7 2k:w-7 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-8 sm:mt-10 flex justify-end">
          <Link
            href=""
            className="small-text font-medium text-[#0071ce] underline underline-offset-4 hover:text-[#005ca8]"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
