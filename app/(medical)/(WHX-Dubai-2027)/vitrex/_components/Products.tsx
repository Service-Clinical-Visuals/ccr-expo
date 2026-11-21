"use client";

import React, { useState, useEffect } from "react";
import Typography from "./Typography";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Blood Collection" | "Surgical Mesh" | "Drug Delivery";
}

const allProducts: ProductItem[] = [
  // 1. Blood Collection (p11 - p16)
  {
    id: "p11",
    title: "Micro Haematocrit Capillary Tubes",
    description: "High-quality glass capillary tubes conforming to ISO 12772, available in plain and heparinized variants with color-coded firepolished ends.",
    image: "/medical/vitrex/p11.webp",
    category: "Blood Collection",
  },
  {
    id: "p12",
    title: "End-to-End Pipettes",
    description: "Precision-calibrated capillary pipettes with Na-Heparin or plain coatings for accurate blood sample collection and diagnostic testing.",
    image: "/medical/vitrex/p12.webp",
    category: "Blood Collection",
  },
  {
    id: "p13",
    title: "Precalibrated Pipettes",
    description: "Ring-marked calibrated glass capillary pipettes designed for precise micro-volume liquid handling in clinical and research laboratories.",
    image: "/medical/vitrex/p13.webp",
    category: "Blood Collection",
  },
  {
    id: "p14",
    title: "Capillary Tubes",
    description: "Precision EDTA coated and plain glass tubes manufactured to ensure dependable micro-sampling and minimal haemolysis.",
    image: "/medical/vitrex/p14.webp",
    category: "Blood Collection",
  },
  {
    id: "p15",
    title: "Blood Gas Capillary Tubes",
    description: "Heavy-wall heparinized glass tubes complete with magnetic stirrers for rapid and precise blood gas analysis without bubble formation.",
    image: "/medical/vitrex/p15.webp",
    category: "Blood Collection",
  },
  {
    id: "p16",
    title: "Micro Pipette Handle",
    description: "Ergonomic handheld pipettor handle designed to enable safe, controlled, and effortless dispensing from micro capillary tubes.",
    image: "/medical/vitrex/p16.webp",
    category: "Blood Collection",
  },

  // 2. Surgical Mesh (p21 - p25)
  {
    id: "p21",
    title: "Capromesh",
    description: "The sterile, partially absorbable, composite mesh is made from two components: one absorbable and one non-absorbable.",
    image: "/medical/vitrex/p21.webp",
    category: "Surgical Mesh",
  },
  {
    id: "p22",
    title: "Semi-absorbable mesh Hybridmesh®",
    description: "It is a quadriaxial co-knitted mesh with 25% of non-absorbable polypropylene (PP) monofilament and 75% of absorbable polylactic acid (PLLA) monofilament.",
    image: "/medical/vitrex/p22.webp",
    category: "Surgical Mesh",
  },
  {
    id: "p23",
    title: "Bimaterial meshes Relimesh®",
    description: "These meshes are used for the treatment of ventral hernias with both laparoscopic and open surgery.",
    image: "/medical/vitrex/p23.webp",
    category: "Surgical Mesh",
  },
  {
    id: "p24",
    title: "Prosthesis Net Plug & Patch",
    description: "The N&T Plug & Patch is a 6 x 11 cm symmetrical pre-shaped mesh made of non-absorbable, polypropylene monofilament.",
    image: "/medical/vitrex/p24.webp",
    category: "Surgical Mesh",
  },
  {
    id: "p25",
    title: "Kits Hertra®",
    description: "The Hertra® Kits are combinations of two or three pre-shaped meshes, in non-absorbable, polypropylene.",
    image: "/medical/vitrex/p25.webp",
    category: "Surgical Mesh",
  },

  // 3. Drug Delivery (p31 - p36)
  {
    id: "p31",
    title: "Hypodermic Syringes",
    description: "High-grade 2-part and 3-part single-use sterile syringes with high transparency barrels and smooth plunger movement for accurate dosage.",
    image: "/medical/vitrex/p31.webp",
    category: "Drug Delivery",
  },
  {
    id: "p32",
    title: "Syringes with Mounted Needles",
    description: "Sterile Luer-lock and Luer-slip syringes equipped with precision ultra-sharp surgical steel needles for safe intravenous and intramuscular delivery.",
    image: "/medical/vitrex/p32.webp",
    category: "Drug Delivery",
  },
  {
    id: "p33",
    title: "Enteral Feeding & Irrigation Syringes",
    description: "Dedicated enteral syringes with purple and high-visibility plungers designed specifically to prevent misconnection errors.",
    image: "/medical/vitrex/p33.webp",
    category: "Drug Delivery",
  },
  {
    id: "p34",
    title: "Hypodermic Needles",
    description: "Precision-ground triple-bevel surgical steel needles with international color-coded hubs for smooth, virtually painless penetration.",
    image: "/medical/vitrex/p34.webp",
    category: "Drug Delivery",
  },
  {
    id: "p35",
    title: "Safety Hypodermic Needles",
    description: "Engineered safety needles featuring an intuitive integrated safety shield to protect healthcare professionals from accidental needlestick injuries.",
    image: "/medical/vitrex/p35.webp",
    category: "Drug Delivery",
  },
  {
    id: "p36",
    title: "Winged Infusion Sets",
    description: "Flexible butterfly infusion sets with textured wings, kink-resistant tubing, and transparent Luer connectors for smooth venipuncture.",
    image: "/medical/vitrex/p36.webp",
    category: "Drug Delivery",
  },
];

const categories = ["Blood Collection", "Surgical Mesh", "Drug Delivery", "View All"] as const;

/**
 * Products Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readable typography measure.
 * 2. Category Filter Tabs:
 *    - Dynamic tab switching between Blood Collection (p11-p16), Surgical Mesh (p21-p25), Drug Delivery (p31-p36), and View All.
 * 3. Swiper Carousel Integration:
 *    - Multi-breakpoint responsive slides (1 on mobile, 2 on tablet, 3 on desktop).
 *    - Custom round bullet pagination with active `#1B4298` highlight.
 * 4. Card Architecture:
 *    - Clean border styling (`border border-[#71717A]`), uniform image frame aspect ratio, and hover zoom animation.
 */
const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Blood Collection");

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  const displayedProducts =
    activeCategory === "View All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.0625rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-bold tracking-wide text-[#1B4298]"
          >
            Explore Our Products
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] xl:text-[1.6875rem] min-[2500px]:text-[2.4375rem] min-[3800px]:text-[3.4375rem] font-bold tracking-tight text-[#202020]"
          >
            Comprehensive Medical Solutions Designed For Every Healthcare Need
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.4375rem] min-[3800px]:text-[2.0625rem] leading-relaxed text-[#202020] text-center"
          >
            Discover Vitrex Medical Group's diverse portfolio of medical devices, surgical products and diagnostic solutions, developed with precision, quality and innovation to support healthcare professionals worldwide.
          </Typography>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-[11px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] font-semibold para-text transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#1B4298] text-white border border-[#1B4298] shadow-md shadow-[#1B4298]/20"
                    : "bg-white text-black border border-black hover:border-[#1B4298] hover:text-[#1B4298]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Swiper Slider */}
        <div className="w-full mt-10 sm:mt-14 overflow-hidden" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            key={activeCategory}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} vitrex-pill-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
              1536: { slidesPerView: 3, spaceBetween: 36 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
            }}
            className="w-full !pb-14 overflow-hidden"
          >
            {displayedProducts.map((product, index) => (
              <SwiperSlide key={product.id} className="!h-auto flex p-0.5">
                {/* Product Card - Clean card with flush image at top */}
                <div
                  className="w-full bg-white rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] border border-[#71717A] shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >
                  
                  {/* Product Image - Flush edge-to-edge with outer card, zero white space */}
                  <div className="w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gray-50 shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Product Details - Text content area with padding */}
                  <div className="p-5 sm:p-6 min-[2500px]:p-8 flex flex-col gap-2.5 text-left flex-1 justify-between">
                    <div className="space-y-2">
                      <Typography
                        variant="h3"
                        color="dark"
                        className="text-[1.0625rem] sm:text-[1.1875rem] lg:text-[1.1875rem] min-[2500px]:text-[1.6875rem] min-[3800px]:text-[2.3125rem] font-semibold text-[#202020]"
                      >
                        {product.title}
                      </Typography>

                      <Typography
                        variant="p"
                        color="dark"
                        className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.3125rem] min-[3800px]:text-[1.8125rem] leading-relaxed text-[#202020]"
                      >
                        {product.description}
                      </Typography>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Products;
