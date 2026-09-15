"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductItem {
  title: string;
  description: string;
  image: string;
  fallbackImage?: string;
  href?: string;
}

interface ProductCategory {
  id: string;
  name: string;
  isExtra?: boolean; // Revealed when clicking 3 dots
  products: ProductItem[];
}

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "absorbable-suture",
    name: "Absorbable suture material",
    isExtra: false,
    products: [
      {
        title: "SERAFIT®",
        description:
          "SERAFIT® is a braided absorbable suture that is characterised by its proven suppleness and knot durability.",
        image: "/medical/serag-wiessner/1.png",
      },
      {
        title: "SERAFIT® PROTECT",
        description:
          "SERAFIT® PROTECT is an absorbable braided suture that is used when a preservation of the suture thread is required in order...",
        image: "/medical/serag-wiessner/2.png",
      },
      {
        title: "SERAPID®",
        description:
          "SERAPID® has a supple braided thread structure, characterised by its short absorption time and proven knot tensile strength.",
        image: "/medical/serag-wiessner/3.png",
      },
      {
        title: "SERAFAST®",
        description:
          "SERAFAST® was developed to complete our range of synthetic absorbable sutures.",
        image: "/medical/serag-wiessner/4.png",
      },
      {
        title: "SERASYNTH®",
        description:
          "This suture is characterised by its monofilament character and reliable long-term absorption.",
        image: "/medical/serag-wiessner/5.png",
      },
      {
        title: "SERASYNTH® LOC",
        description:
          "SERASYNTH® LOC provides you with a proven suture material with unidirectional barbs.",
        image: "/medical/serag-wiessner/6..png",
        fallbackImage: "/medical/serag-wiessner/6.png",
      },
    ],
  },
  {
    id: "non-absorbable-suture",
    name: "Non-absorbable suture material",
    isExtra: false,
    products: [
      {
        title: "SERALON®",
        description:
          "SERALON® is a polyamide suture that is particularly soft and pliable compared to other monofilament sutures.",
        image: "/medical/serag-wiessner/7.png",
      },
      {
        title: "SUPRAMID",
        description:
          "At sizes of 4/0 and larger, SUPRAMID has a multifilament character. It consists of twisted polyamide fibres that are coated.",
        image: "/medical/serag-wiessner/8.png",
      },
      {
        title: "NYLON",
        description:
          "NYLON is a monofilament polyamide suture. Thanks to its easy passage through the tissues and high tensile strength...",
        image: "/medical/serag-wiessner/9.png",
      },
      {
        title: "SULENE®",
        description:
          "SULENE® is a multifilament, braided polyester suture. The silicone coating used reduces the sawing effect typical of braids.",
        image: "/medical/serag-wiessner/10.png",
      },
      {
        title: "TERYLENE",
        description:
          "TERYLENE is a multifilament, braided polyester suture. The silicone coating used reduces the sawing effect typical of braids.",
        image: "/medical/serag-wiessner/11.png",
      },
      {
        title: "SERACOR®",
        description:
          "SERACOR® is a braided polyester thread developed especially for cardiac surgery.",
        image: "/medical/serag-wiessner/12.png",
      },
    ],
  },
  {
    id: "surgical-needles",
    name: "Surgical needles",
    isExtra: false,
    products: [
      {
        title: "Round-bodied needle, with trocar point",
        description:
          "Designed for controlled penetration with a sharp trocar point, supporting efficient suturing in demanding applications.",
        image: "/medical/serag-wiessner/13.png",
      },
      {
        title: "Round-bodied needle",
        description:
          "Provides smooth tissue penetration with reduced cutting action, making it suitable for delicate tissue handling.",
        image: "/medical/serag-wiessner/14.png",
      },
      {
        title: "Reverse cutting needle",
        description:
          "Features a cutting edge designed for effective penetration through tougher tissues while supporting secure and precise suturing.",
        image: "/medical/serag-wiessner/15.png",
      },
      {
        title: "Reverse cutting needle with special point",
        description:
          "Combines reverse cutting geometry with a specialised point for enhanced penetration and controlled needle handling.",
        image: "/medical/serag-wiessner/16.png",
      },
      {
        title: "Square bodied needle, with lancet tip",
        description:
          "Features a strong square-bodied design and lancet tip for effective penetration and reliable suturing performance.",
        image: "/medical/serag-wiessner/17.png",
      },
    ],
  },
  {
    id: "textile-implants",
    name: "Textile implants",
    isExtra: false,
    products: [
      {
        title: "SERAMESH® PA DRUM",
        description:
          "SERAMESH® PA DRUM supports, bridges and / or reinforces the body's own connective tissue structures.",
        image: "/medical/serag-wiessner/18.png",
      },
      {
        title: "SERAMESH® PA",
        description:
          "SERAMESH® mesh implants were developed for the surgical repair of hernias. SERAMESH® mesh implants are...",
        image: "/medical/serag-wiessner/19.png",
      },
      {
        title: "SERASYNTH® MESH",
        description:
          "SERASYNTH® MESH is a fully absorbable surgical mesh designed to provide reliable tissue support while maintaining flexibility...",
        image: "/medical/serag-wiessner/20.png",
      },
      {
        title: "SERASIS® / SERASIS® PA",
        description:
          "Our SERASIS® / SERASIS® PA meshes are a composition of proven materials with a macroporous structure.",
        image: "/medical/serag-wiessner/21.png",
      },
      {
        title: "SERATEX® / SERATEX® PA",
        description:
          "Our SERATEX® / SERATEX® PA meshes are a composition of proven materials with a microporous structure.",
        image: "/medical/serag-wiessner/22.png",
      },
      {
        title: "SERATEX® DVF PA MR",
        description:
          "SERATEX® DVF PA MR is indicated for the treatment of patients with pelvic floor prolapse.",
        image: "/medical/serag-wiessner/23.png",
      },
    ],
  },
  {
    id: "solutions",
    name: "Solutions",
    isExtra: true,
    products: [
      {
        title: "Solutions for infusion",
        description:
          "Conventional solutions for infusion mainly promote the fluid and electrolyte balance or serve as carrier solutions...",
        image: "/medical/serag-wiessner/24.png",
      },
      {
        title: "Irrigation solutions",
        description:
          "Irrigation solutions are usually sterile medical devices that are required for cleansing purposes.",
        image: "/medical/serag-wiessner/25.png",
      },
      {
        title: "Other solutions",
        description:
          "Solutions with a specific therapeutic indication or individually prepared formulations on customer request.",
        image: "/medical/serag-wiessner/26.png",
      },
    ],
  },
  {
    id: "wound-management",
    name: "Wound Management",
    isExtra: true,
    products: [
      {
        title: "LAVANID®",
        description:
          "LAVANID® is a sterile, isotonic wound irrigation solution based on Ringer's solution with 0.04% polyhexanide as preservative.",
        image: "/medical/serag-wiessner/27.png",
      },
      {
        title: "LAVANID® Wound Gel / LAVANID® Wound Gel V+",
        description:
          "LAVANID® – Wound Gel is a sterile hydrogel based on Ringer's solution and 0.04% polyhexanide as preservative...",
        image: "/medical/serag-wiessner/28.png",
      },
      {
        title: "LAVANOX-Serag® Wound Irrigation Solution...",
        description:
          "LAVANOX-Serag® Wound Irrigation Solution and LAVANOX-Serag® Wound Spray are medical devices based on an...",
        image: "/medical/serag-wiessner/29.png",
      },
      {
        title: "LAVANOX-Serag® Wound Gel and Wound...",
        description:
          "LAVANOX-Serag® Wound Gel and LAVANOX-Serag® Wound Spray Gel are based on an electrochemically activated mineral salt...",
        image: "/medical/serag-wiessner/30.png",
      },
      {
        title: "LAVA-Repair®",
        description:
          "LAVA-Repair® is a cosmetic cream with PHMB (polyhexanide) and urea for the intensive care of irritated, dry and heavily stressed skin.",
        image: "/medical/serag-wiessner/31.png",
      },
    ],
  },
];

export default function ProductSolutions() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(PRODUCT_CATEGORIES[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    PRODUCT_CATEGORIES.find((cat) => cat.id === activeCategoryId) || PRODUCT_CATEGORIES[0];
  const products = activeCategory.products;

  // Track responsive screen width for number of visible cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1280) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
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

  // Handle category change
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };


  // Current page for pagination indicator
  const currentPage = Math.min(
    totalPages - 1,
    Math.floor(currentIndex / Math.max(1, visibleCount))
  );

  return (
    <section id="product-solutions" className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container">
        {/* Section Heading & Subtitle */}
        <div
          className="text-center max-w-7xl mx-auto mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-exo2">
            Our Product Solutions
          </h2>
          <p className="section-text mt-3 sm:mt-4 leading-relaxed font-outfit">
            Explore our comprehensive portfolio of surgical products and specialised
            solutions, developed to support healthcare professionals across clinical
            applications. From suture materials and surgical needles to textile implants and
            innovative solutions, each product reflects our commitment to quality,
            precision, reliability, and patient care.
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
                className={`btn-text px-4 sm:px-5 py-2 sm:py-2.5 rounded-md border font-exo2 font-medium transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-[#e2007a] text-white border-[#e2007a] shadow-md shadow-[#e2007a]/20"
                  : "bg-white text-slate-700 border-slate-300 hover:border-[#e2007a] hover:text-[#e2007a]"
                  }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Product Carousel Container */}
        <div
          className="relative px-2 sm:px-4"
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
                  className="flex-shrink-0 px-2 sm:px-3.5"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Product Card matching Screenshot */}
                  <div className="bg-white border border-slate-200/90 shadow-sm  transition-all duration-300 flex flex-col h-full overflow-hidden group">
                    {/* Product Image Box */}
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={product.image}

                        alt={product.title}
                        className="w-full h-full object-cover p-6 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Details Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                      <div>
                        {/* Title */}
                        <h3 className="card-title font-semibold text-slate-900 font-exo2 tracking-tight">
                          {product.title}
                        </h3>

                        {/* Description */}
                        <p className="section-text font-outfit mt-2 line-clamp-3 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* View More Link */}
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <Link
                          href={product.href || "#"}
                          className="footer-text font-semibold text-[#e2007a] hover:text-[#c4006a] inline-flex items-center gap-1 group/link font-exo2"
                        >
                          <span>View More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Pagination Dots matching Screenshot */}
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
                    ? "w-8 sm:w-10 bg-[#e2007a]"
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
