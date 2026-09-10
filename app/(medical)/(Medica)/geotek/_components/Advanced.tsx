"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

interface ProductItem {
  id: string;
  name: string;
  hoverTitle: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  products: ProductItem[];
}

const biopsyProducts: ProductItem[] = [
  {
    id: "b1",
    name: "Estacore Pro Automatic Biopsy Needle",
    hoverTitle: "ESTACORE PRO®\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/a1.png",
  },
  {
    id: "b2",
    name: "Estacore Automatic Biopsy Needle",
    hoverTitle: "ESTACORE\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/us-precision-guide.png",
  },
  {
    id: "b3",
    name: "Estacore Pro Automatic Biopsy Needle",
    hoverTitle: "ESTACORE PRO®\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/a1.png",
  },
  {
    id: "b4",
    name: "Estacore Automatic Biopsy Needle",
    hoverTitle: "ESTACORE\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/us-precision-guide.png",
  },
  {
    id: "b5",
    name: "Estacore Pro Automatic Biopsy Needle",
    hoverTitle: "ESTACORE PRO®\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/a1.png",
  },
  {
    id: "b6",
    name: "Estacore Automatic Biopsy Needle",
    hoverTitle: "ESTACORE\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/us-precision-guide.png",
  },
];

const ultrasoundProducts: ProductItem[] = [
  {
    id: "u1",
    name: "Endocavity Ultrasound Needle Guide",
    hoverTitle: "ENDOCAVITY\nULTRASOUND NEEDLE\nGUIDE",
    image: "/medical/geotek/images/us-endocavity-guide.png",
  },
  {
    id: "u2",
    name: "Biopsy Ultrasound Probe Guide",
    hoverTitle: "BIOPSY ULTRASOUND\nPROBE GUIDE",
    image: "/medical/geotek/images/us-probe-guide.png",
  },
  {
    id: "u3",
    name: "Precision Ultrasound Needle Guide",
    hoverTitle: "PRECISION\nULTRASOUND NEEDLE\nGUIDE",
    image: "/medical/geotek/images/us-precision-guide.png",
  },
  {
    id: "u4",
    name: "Interventional Ultrasound Needle Guide",
    hoverTitle: "INTERVENTIONAL\nULTRASOUND NEEDLE\nGUIDE",
    image: "/medical/geotek/images/us-interventional-guide.png",
  },
  {
    id: "u5",
    name: "Multi-Angle Ultrasound Guide",
    hoverTitle: "MULTI-ANGLE\nULTRASOUND GUIDE",
    image: "/medical/geotek/images/us-multiangle-guide.png",
  },
  {
    id: "u6",
    name: "Surgical Ultrasound Needle Guide",
    hoverTitle: "SURGICAL\nULTRASOUND NEEDLE\nGUIDE",
    image: "/medical/geotek/images/us-surgical-guide.png",
  },
];

const transperinealProducts: ProductItem[] = [
  {
    id: "t1",
    name: "GTK150 Transperineal Needle Guide",
    hoverTitle: "GTK150\nTRANSPERINEAL\nNEEDLE GUIDE",
    image: "/medical/geotek/images/tp-guide-gtk150.jpg",
  },
  {
    id: "t2",
    name: "GTK151 Transperineal Needle Guide",
    hoverTitle: "GTK151\nTRANSPERINEAL\nNEEDLE GUIDE",
    image: "/medical/geotek/images/tp-guide-gtk151.jpg",
  },
  {
    id: "t3",
    name: "GTK152 Transperineal Needle Guide",
    hoverTitle: "GTK152\nTRANSPERINEAL\nNEEDLE GUIDE",
    image: "/medical/geotek/images/tp-guide-gtk152.jpg",
  },
  {
    id: "t4",
    name: "GTK154 Transperineal Needle Guide",
    hoverTitle: "GTK154\nTRANSPERINEAL\nNEEDLE GUIDE",
    image: "/medical/geotek/images/tp-guide-gtk154.jpg",
  },
  {
    id: "t5",
    name: "GTK155 Perino-Flex Needle Guide",
    hoverTitle: "GTK155 PERINO-FLEX\nNEEDLE GUIDE",
    image: "/medical/geotek/images/tp-guide-gtk155.jpg",
  },
];

const tumorProducts: ProductItem[] = [
  {
    id: "tm1",
    name: "Tumor Marking Needle",
    hoverTitle: "TUMOR MARKING\nNEEDLE",
    image: "/medical/geotek/images/a1.png",
  },
];

const seeAllProducts: ProductItem[] = [
  {
    id: "all-b1",
    name: "Estacore Pro Automatic Biopsy Needle",
    hoverTitle: "ESTACORE PRO®\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/a1.png",
  },
  {
    id: "all-b2",
    name: "Estacore Automatic Biopsy Needle",
    hoverTitle: "ESTACORE\nAUTOMATIC BIOPSY\nNEEDLE",
    image: "/medical/geotek/images/us-precision-guide.png",
  },
  ...ultrasoundProducts,
  ...transperinealProducts,
  ...tumorProducts,
];

const categoriesData: Category[] = [
  {
    id: "biopsy",
    name: "Biopsy Needles",
    products: biopsyProducts,
  },
  {
    id: "ultrasound",
    name: "Ultrasound Needle Guide",
    products: ultrasoundProducts,
  },
  {
    id: "transperineal",
    name: "Transperineal Needle Guides",
    products: transperinealProducts,
  },
  {
    id: "tumor",
    name: "Tumor Marking Needles",
    products: tumorProducts,
  },
  {
    id: "all",
    name: "See All Products",
    products: seeAllProducts,
  },
];

export default function Advanced() {
  const [activeCategoryId, setActiveCategoryId] = useState("biopsy");
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [cardHeight, setCardHeight] = useState<number>(440);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const leftColRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    categoriesData.find((c) => c.id === activeCategoryId) || categoriesData[0];
  const products = activeCategory.products;
  const isSingleProduct = products.length === 1;

  // Duplicated for seamless loop if needed
  const displayProducts = isSingleProduct
    ? products
    : products.length <= 4
      ? [...products, ...products, ...products]
      : [...products, ...products];

  // Measure left column height dynamically to ensure right cards match it exactly
  useEffect(() => {
    const updateDimensions = () => {
      const desktop = window.innerWidth >= 1025;
      setIsDesktop(desktop);
      if (leftColRef.current) {
        const measured = leftColRef.current.offsetHeight;
        if (measured > 0) {
          setCardHeight(measured);
        }
      }
    };

    updateDimensions();

    const ro = new ResizeObserver(() => {
      updateDimensions();
    });

    if (leftColRef.current) {
      ro.observe(leftColRef.current);
    }

    window.addEventListener("resize", updateDimensions);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setActiveDotIndex(0);
    if (swiperInstance) {
      swiperInstance.slideToLoop(0, 400);
    }
  };

  const handleDotClick = (dotIndex: number) => {
    setActiveDotIndex(dotIndex);
    if (swiperInstance) {
      swiperInstance.slideToLoop(dotIndex, 500);
    }
  };

  return (
    <section id="advanced" className="w-full relative z-10 py-14 sm:py-20 md:py-24 bg-white">
      <div className="custom-container mx-auto">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16">
          <div
            className="flex items-center justify-center gap-3 mb-4"
            data-aos="fade-up"
          >
            <h2 className="font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] leading-tight text-[#2A2A2A] capitalize">
              Advanced Medical Solutions
            </h2>
            <span className="w-[33px] h-[5px] bg-[#84BB65] rounded-[43px] inline-block shrink-0" />
          </div>

          <p
            className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-[#4A4A4A] max-w-[1230px] xl:max-w-[70%] mx-auto px-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore our comprehensive range of specialised medical devices developed to support
            precision, reliability, and efficiency across a variety of clinical applications.
            Our portfolio includes solutions for biopsy procedures, ultrasound-guided interventions,
            tumor marking, IVF procedures, and urological care. Our solutions support healthcare
            professionals with dependable products designed for accurate procedures, improved
            workflow, and effective patient care.
          </p>
        </div>

        {/* Interactive Showcase: Left Category Tabs + Right Slider Carousel showing 2 square cards side-by-side */}
        <div className="w-full flex flex-col min-[1025px]:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left: Category Navigation Tabs */}
          <div
            className="w-full min-[1025px]:w-[380px] xl:w-[430px] shrink-0 min-[1025px]:pt-2"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div
              ref={leftColRef}
              className="w-full flex flex-col justify-between min-[1025px]:h-[440px] gap-3 sm:gap-4 min-[1025px]:gap-0"
            >
              {categoriesData.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                const isSeeAll = cat.id === "all";

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`
                      w-full h-[68px] sm:h-[75px] rounded-[20px] px-6 sm:px-8
                      font-baloo font-semibold text-[19px] sm:text-[22px] md:text-[24px]
                      flex items-center justify-between transition-all duration-300
                      cursor-pointer select-none relative
                      ${isActive
                        ? "bg-[#468A28] text-white shadow-[0px_4px_12px_rgba(70,138,40,0.3)]"
                        : "bg-white text-[#2A2A2A] border border-[#468A28] hover:bg-[#468A28]/5"
                      }
                    `}
                  >
                    <span className={isSeeAll ? "underline decoration-2" : ""}>
                      {cat.name}
                    </span>

                    {/* Active Triangle Arrow pointing Right (desktop) */}
                    {isActive && (
                      <span
                        className="hidden min-[1025px]:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0
                          border-y-[12px] border-y-transparent
                          border-l-[14px] border-l-[#468A28]"
                      />
                    )}

                    {/* Icon for See All Products */}
                    {isSeeAll && (
                      <span
                        className={`
                          w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] rounded-full
                          flex items-center justify-center transition-all
                          ${isActive ? "bg-white text-[#468A28]" : "bg-[#468A28] text-white"}
                        `}
                      >
                        <ChevronDown size={22} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Products Slider with square cards showing strictly 2 cards centered in the right side */}
          <div
            className="flex-1 w-full overflow-hidden flex flex-col items-center justify-center min-[1025px]:px-2"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div
              className="w-full mx-auto"
              style={{
                maxWidth: isDesktop && cardHeight
                  ? isSingleProduct
                    ? `${cardHeight}px`
                    : `${cardHeight * 2 + 24}px`
                  : undefined,
              }}
            >
              <Swiper
                key={activeCategoryId}
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={!isSingleProduct}
                speed={700}
                autoplay={
                  isSingleProduct
                    ? false
                    : {
                      delay: 2800,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                }
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveDotIndex(swiper.realIndex % 4)}
                breakpoints={
                  isSingleProduct
                    ? undefined
                    : {
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                      1025: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                      },
                    }
                }
                className="w-full !pt-2 !pb-3"
              >
                {displayProducts.map((prod, idx) => (
                  <SwiperSlide
                    key={`${prod.id}-${idx}`}
                    className="h-auto"
                  >
                    {/* Interactive Square Product Card:
                        - Exact match with left navigation column height
                        - Perfect Square: aspect-square (width = height = cardHeight)
                        - Default: Pure white card with centered product image
                        - Hover: Gradient overlay (Green at bottom to White at top) with bold white title in center
                    */}
                    <div
                      style={{
                        height: isDesktop && cardHeight ? `${cardHeight}px` : undefined,
                        width: isDesktop && cardHeight ? `${cardHeight}px` : undefined,
                      }}
                      className="
                        group relative bg-white rounded-[25px] sm:rounded-[30px] overflow-hidden
                        border border-black/10 shadow-[0px_3px_8px_rgba(0,0,0,0.18)]
                        hover:shadow-[0px_8px_24px_rgba(0,0,0,0.22)]
                        w-full aspect-square p-6 sm:p-8
                        flex items-center justify-center transition-all duration-300
                        cursor-pointer select-none mx-auto
                      "
                    >
                      {/* Product Image Frame */}
                      <div className="w-full h-full relative flex items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Hover Gradient Overlay: Bottom green (#89B475) fading to top white (#FFFFFF) with multiply blend matching Figma */}
                      <div
                        className="
                          absolute inset-0 z-10 pointer-events-none
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          mix-blend-multiply
                        "
                        style={{
                          background: "linear-gradient(to top, #89B475 0%, #89B475 25%, #AECCA1 55%, #D6E5CF 75%, #FFFFFF 100%)",
                        }}
                      />

                      {/* Hover Centered Text Overlay */}
                      <div
                        className="
                          absolute inset-0 z-20 pointer-events-none
                          flex flex-col items-center justify-center p-6 sm:p-8 text-center
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        "
                      >
                        <h3 className="advance-hover-title font-baloo font-bold text-white text-[20px] sm:text-[22px] md:text-[23px] lg:text-[24px] xl:text-[25px] leading-[1.25] tracking-wide uppercase whitespace-pre-line drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]">
                          {prod.hoverTitle || prod.name}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Pagination Pill Indicators (Figma spec: Horizontally centered across the entire section) */}
        {!isSingleProduct && (
          <div
            className="w-full flex items-center justify-center gap-3.5 mt-10 sm:mt-12 md:mt-14"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[0, 1, 2, 3].map((dotIdx) => {
              const isActive = activeDotIndex === dotIdx;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => handleDotClick(dotIdx)}
                  aria-label={`Go to slide group ${dotIdx + 1}`}
                  className={`
                    h-[9px] rounded-[9px] transition-all duration-300 cursor-pointer
                    ${isActive ? "w-[78px] bg-[#468A28]" : "w-[32.5px] bg-[#D9D9D9] hover:bg-gray-400"}
                  `}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
