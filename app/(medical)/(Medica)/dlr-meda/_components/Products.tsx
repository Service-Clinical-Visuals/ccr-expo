"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Droplets, FlaskConical, type LucideIcon } from "lucide-react";
import Typography from "./Typography";
import SectionBadge from "./SectionBadge";
import ProductCard from "./ProductCard";

type GroupId = "hemodialysis" | "urology";

interface Product {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface ProductGroup {
  id: GroupId;
  label: string;
  categoryLabel: string;
  icon: LucideIcon;
  products: Product[];
}

const groups: ProductGroup[] = [
  {
    id: "hemodialysis",
    label: "Hemodialysis Group",
    categoryLabel: "Hemodialysis Group Products",
    icon: FlaskConical,
    products: [
      {
        id: 1,
        title: "Short-Term Hemodialysis Catheter (Tunnel-Free)",
        description:
          "DLR Medical's short-term temporary hemodialysis catheter provides fast and safe venous access for patients requiring emergency hemodialysis.",
        tags: ["Dual Lumen", "Straight / Pre-Curved", "Thermosensitive PU"],
        image: "/medical/dlr-meda/p1.png",
      },
      {
        id: 2,
        title: "HIGHSTREAM",
        description:
          "The Split Tip Hemodialysis Catheter is designed to provide reliable and high-performance vascular access in long-term hemodialysis treatments.",
        tags: ["Step-Tip Pediatric", "6.5 Fr – 10.0 Fr", "Dacron Cuff"],
        image: "/medical/dlr-meda/p2.png",
      },
      {
        id: 3,
        title: "P-LINE",
        description:
          "The Long-Term Pediatric Step-Tip Hemodialysis Catheter is designed with the delicate vascular structure and long-term treatment needs of pediatric patients in mind.",
        tags: ["Flow > 450 mL/min", "Step-Tip Geometry", "Carbothane™ Resin"],
        image: "/medical/dlr-meda/p3.png",
      },
      {
        id: 4,
        title: "OPTIMA",
        description:
          "The OPTIMA Step Tip Tunneled Hemodialysis Catheter is designed to provide safe and effective vascular access for patients requiring long-term hemodialysis treatment.",
        tags: ["Step-Tip Geometry", "Flow > 450 mL/min", "Carbothane™ Resin"],
        image: "/medical/dlr-meda/p4.png",
      },
      {
        id: 5,
        title: "P-LINE Short-Term Temporary Hemodialysis Catheter",
        description:
          "DLR Medical's short-term temporary hemodialysis catheter provides fast and safe venous access for patients requiring emergency hemodialysis.",
        tags: ["Flow > 450 mL/min", "Step-Tip Geometry", "Carbothane™ Resin"],
        image: "/medical/dlr-meda/p5.png",
      },
    ],
  },
  {
    id: "urology",
    label: "Urology Group",
    categoryLabel: "Urology Group Products",
    icon: Droplets,
    products: [
      {
        id: 11,
        title: "Lubri-soft® Double Pigtail Ureteral Stent and Set",
        description:
          "DLR Medical Double-J ureteral stent is a reliable urological implant solution used to treat ureteral strictures and blockages.",
        tags: ["Fast Clamping", "Polyurethane Body", "Kink-Resistant"],
        image: "/medical/dlr-meda/p11.png",
      },
      {
        id: 12,
        title: "Poly-Flex® Long Term Double J Ureteral Stent and Sets",
        description:
          "This product is designed to provide temporary internal drainage from the ureteropelvic junction to the bladder. The stent material has been specially developed for long-term indwelling use.",
        tags: ["Low Recirculation", "Split-Tip Geometry", "Flow > 450 mL/min"],
        image: "/medical/dlr-meda/p12.png",
      },
    ],
  },
];

// Swiper loop needs at least twice the visible slides, so short lists are
// repeated. Pagination still maps back to the original products.
const MIN_LOOP_SLIDES = 8;
const buildLoopSlides = (products: Product[]) => {
  const slides: Product[] = [];
  while (slides.length < MIN_LOOP_SLIDES) slides.push(...products);
  return slides;
};

export default function Products() {
  const [activeGroupId, setActiveGroupId] = useState<GroupId>("hemodialysis");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const activeGroup = groups.find((group) => group.id === activeGroupId) ?? groups[0];
  const productCount = activeGroup.products.length;
  const slides = buildLoopSlides(activeGroup.products);

  const handleGroupChange = (id: GroupId) => {
    setActiveGroupId(id);
    setActiveIndex(0);
  };

  return (
    <section
      id="products"
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Header & Group Tabs */}
        <div
          className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-end justify-between gap-6 min-[2500px]:gap-10 border-b border-[#E5E7EB] min-[2500px]:border-b-2"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start pb-0 min-[1026px]:pb-4 min-[2500px]:pb-6 min-[3800px]:pb-8">
            <SectionBadge text="Our Product Category" />
            <Typography
              variant="h2"
              color="dark"
              className="mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 tracking-[-0.02em] leading-[1.35]"
            >
              Discover our proven medical device solutions in hemodialysis and urology.
            </Typography>
          </div>

          <div role="tablist" className="flex items-end gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14 shrink-0">
            {groups.map((group) => {
              const isActive = group.id === activeGroupId;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleGroupChange(group.id)}
                  className={`dlr-product-tab cursor-pointer ${isActive ? "is-active" : ""}`}
                >
                  <Typography
                    variant="h3"
                    color="none"
                    className={`whitespace-nowrap transition-colors duration-300 ${isActive
                        ? "text-[var(--color-primary)] !font-bold"
                        : "text-[#404040] !font-normal hover:text-[var(--color-primary)]"
                      }`}
                  >
                    {group.label}
                  </Typography>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Slider */}
        <div className="mt-10 md:mt-12 min-[2500px]:mt-16 min-[3800px]:mt-20" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            key={activeGroupId}
            modules={[Autoplay]}
            loop
            speed={700}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % productCount)}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1026: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
              2500: { slidesPerView: 3, spaceBetween: 44 },
              3800: { slidesPerView: 3, spaceBetween: 60 },
            }}
            className="dlr-product-swiper"
          >
            {slides.map((product, idx) => (
              <SwiperSlide key={`${product.id}-${idx}`}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  tags={product.tags}
                  image={product.image}
                  categoryLabel={activeGroup.categoryLabel}
                  icon={activeGroup.icon}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="dlr-pagination">
            {activeGroup.products.map((product, idx) => (
              <button
                key={product.id}
                type="button"
                aria-label={`Go to ${product.title}`}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`dlr-pagination-dot ${activeIndex === idx ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
