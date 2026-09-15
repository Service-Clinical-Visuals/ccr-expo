"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductItem {
  title: string;
  category: string;
  image: string;
  hoverImage: string;
  href?: string;
}

interface ProductCategory {
  id: string;
  name: string;
  products: ProductItem[];
}

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "blood-collection-tubes",
    name: "BLood collection tubes",
    products: [
      {
        title: "Coagulation Tube",
        category: "Coagulation Tube",
        image: "/medical/euromed/1.png",
        hoverImage: "/medical/euromed/1.1.png",
      },
      {
        title: "Edta Tube",
        category: "BLood collection tubes",
        image: "/medical/euromed/2.png",
        hoverImage: "/medical/euromed/2.1.png",
      },
      {
        title: "Fluoride Oxalate Tube",
        category: "BLood collection tubes",
        image: "/medical/euromed/3.png",
        hoverImage: "/medical/euromed/3.1.png",
      },
      {
        title: "Heparin Plasma Tube",
        category: "BLood collection tubes",
        image: "/medical/euromed/4.png",
        hoverImage: "/medical/euromed/4.1.png",
      },
      {
        title: "Serum Clot Activator Tube",
        category: "BLood collection tubes",
        image: "/medical/euromed/5.png",
        hoverImage: "/medical/euromed/5.1.png",
      },
      {
        title: "Gel & Clot Activator Tube",
        category: "BLood collection tubes",
        image: "/medical/euromed/6.png",
        hoverImage: "/medical/euromed/6.1.png",
      },
    ],
  },
  {
    id: "infection-control",
    name: "Infection Control",
    products: [
      {
        title: "Surgical Drape",
        category: "Infection Control",
        image: "/medical/euromed/7.png",
        hoverImage: "/medical/euromed/7.1.png",
      },
      {
        title: "Protective Coverall",
        category: "Infection Control",
        image: "/medical/euromed/8.png",
        hoverImage: "/medical/euromed/8.1.png",
      },
      {
        title: "Scrub Suits",
        category: "Infection Control",
        image: "/medical/euromed/9.png",
        hoverImage: "/medical/euromed/9.1.png",
      },
      {
        title: "Surgical Gown",
        category: "Infection Control",
        image: "/medical/euromed/10.png",
        hoverImage: "/medical/euromed/10.1.png",
      },
      {
        title: "Shoe & Boot Covers",
        category: "Infection Control",
        image: "/medical/euromed/11.png",
        hoverImage: "/medical/euromed/11.1.png",
      },
      {
        title: "Bouffant Cap",
        category: "Infection Control",
        image: "/medical/euromed/12.png",
        hoverImage: "/medical/euromed/12.1.png",
      },
    ],
  },
  {
    id: "infusion-therapy",
    name: "Infusion Therapy",
    products: [
      {
        title: "Hypodermic Needles",
        category: "Infusion Therapy",
        image: "/medical/euromed/13.png",
        hoverImage: "/medical/euromed/13.1.png",
      },
      {
        title: "IV Cannula",
        category: "Infusion Therapy",
        image: "/medical/euromed/14.png",
        hoverImage: "/medical/euromed/14.1.png",
      },
      {
        title: "Infusion Set",
        category: "Infusion Therapy",
        image: "/medical/euromed/15.png",
        hoverImage: "/medical/euromed/15.1.png",
      },
      {
        title: "Auto-Disable Syringe",
        category: "Infusion Therapy",
        image: "/medical/euromed/16.png",
        hoverImage: "/medical/euromed/16.1.png",
      },
      {
        title: "Standard Syringe",
        category: "Infusion Therapy",
        image: "/medical/euromed/17.png",
        hoverImage: "/medical/euromed/17.1.png",
      },
      {
        title: "3-Way Stopcock",
        category: "Infusion Therapy",
        image: "/medical/euromed/18.png",
        hoverImage: "/medical/euromed/18.1.png",
      },
    ],
  },
  {
    id: "respiratory-anesthesia",
    name: "Respiratory & Anesthesia",
    products: [
      {
        title: "Spirometer / Exerciser",
        category: "Respiratory & Anesthesia",
        image: "/medical/euromed/19.png",
        hoverImage: "/medical/euromed/19.1.png",
      },
      {
        title: "Endotracheal Tube",
        category: "Respiratory & Anesthesia",
        image: "/medical/euromed/20.png",
        hoverImage: "/medical/euromed/20.1.png",
      },
      {
        title: "Manual Resuscitator",
        category: "Respiratory & Anesthesia",
        image: "/medical/euromed/21.png",
        hoverImage: "/medical/euromed/21.1.png",
      },
      {
        title: "Oxygen Mask with Reservoir",
        category: "Respiratory & Anesthesia",
        image: "/medical/euromed/22.png",
        hoverImage: "/medical/euromed/22.1.png",
      },
      {
        title: "Venturi Mask Kit",
        category: "Respiratory & Anesthesia",
        image: "/medical/euromed/23.png",
        hoverImage: "/medical/euromed/23.1.png",
      },
      {
        title: "Guedel Airway",
        category: "Respiratory & Anesthesia",
        image: "/medical/euromed/24.png",
        hoverImage: "/medical/euromed/24.1.png",
      },
    ],
  },
];

export default function OurProducts() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    PRODUCT_CATEGORIES[0].id
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    PRODUCT_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    PRODUCT_CATEGORIES[0];
  const products = activeCategory.products;

  // Responsive cards visible: 1 on mobile, 2 on tablet, 4 on desktop
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1280) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total pages for sliding
  const maxIndex = Math.max(0, products.length - visibleCount);
  const totalPages = Math.ceil(products.length / visibleCount);

  // Auto-slide effect every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex, activeCategoryId]);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setCurrentIndex(0);
  };

  const currentPage = Math.min(
    totalPages - 1,
    Math.floor(currentIndex / Math.max(1, visibleCount))
  );

  return (
    <section id="products" className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Heading & Centered Subtitle */}
        <div
          className="text-center max-w-7xl mx-auto mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-outfit ">
            Our <span className="text-[#d40708]">Products</span>
          </h2>
          <p className="section-textmt-3 sm:mt-4 leading-relaxed font-outfit">
            Euromed is an Egyptian leading manufacturer, which offers a wide range of
            medical products established in 2002 and has considerably grown over the years.
            Euromed head office is located in Cairo, the business capital, in the industrial
            zone of Nasr City, which is considered by government institutions to be a
            reference center of industry
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`section-text px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm border font-outfit font-medium transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-[#d40708] text-white border-[#d40708] shadow-md shadow-[#d40708]/20"
                  : "bg-white  border-slate-300 hover:border-[#d40708] hover:text-[#d40708]"
                  }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Carousel Container */}
        <div
          className="relative px-1 sm:px-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden py-4 -my-4" ref={sliderRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {products.map((product, idx) => (
                <div
                  key={`${activeCategoryId}-${idx}`}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Product Card with 1 -> 1.1 Image Hover Swap */}
                  <div className="bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group/card">
                    {/* Product Image Box: Cross-fades from image to hoverImage */}
                    <div className="relative w-full aspect-square overflow-hidden flex items-center justify-center p-6">
                      {/* Default Image (e.g. 1.png) */}
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain absolute inset-0 p-6  group-hover/card:opacity-0 group-hover/card:scale-95"
                      />

                      {/* Hover Image (e.g. 1.1.png) */}
                      <img
                        src={product.hoverImage}

                        alt={`${product.title} alternative angle`}
                        className="w-full h-full object-contain absolute inset-0 p-6 transition-all duration-500 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-105"
                      />
                    </div>

                    {/* Product Details Content */}
                    <div className="px-5 pb-4  flex flex-col flex-grow justify-between bg-white ">
                      <div>
                        {/* Title */}
                        <h3 className="card-title font-semibold font-outfit tracking-tight line-clamp-1">
                          {product.title}
                        </h3>

                        {/* Category Subtitle */}
                        <p className="section-text  font-outfit mt-1.5 line-clamp-1">
                          {product.category}
                        </p>
                      </div>

                      {/* View More Link */}
                      <div className="pt-4 ">
                        <Link
                          href={product.href || "#"}
                          className="footer-link font-semibold text-[#d40708] hover:text-[#b00506] inline-flex items-center gap-1.5 group/link font-outfit underline underline-offset-4"
                        >
                          <span>View More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 " />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Indicator Bars */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const isActive = pageIdx === currentPage;
              return (
                <button
                  key={pageIdx}
                  type="button"
                  onClick={() =>
                    setCurrentIndex(Math.min(maxIndex, pageIdx * visibleCount))
                  }
                  aria-label={`Go to slide page ${pageIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                    ? "w-8 sm:w-10 bg-[#d40708]"
                    : "w-4 sm:w-5 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
