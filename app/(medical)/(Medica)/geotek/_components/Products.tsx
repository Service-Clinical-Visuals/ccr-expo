"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface ProductCatalogItem {
  id: number;
  title: string;
  image: string;
  hoverImage: string;
  alt: string;
}

const productCatalogs: ProductCatalogItem[] = [
  {
    id: 1,
    title: "Biopsy Needles",
    image: "/medical/geotek/images/p1.png",
    hoverImage: "/medical/geotek/images/p1_after.png",
    alt: "Biopsy Needles Catalog",
  },
  {
    id: 2,
    title: "Urology Catheters",
    image: "/medical/geotek/images/p2.png",
    hoverImage: "/medical/geotek/images/p2_after.png",
    alt: "Urology Catheters Catalog",
  },
  {
    id: 3,
    title: "Endocavity Needle Guides",
    image: "/medical/geotek/images/p3.png",
    hoverImage: "/medical/geotek/images/p3_after.png",
    alt: "Endocavity Needle Guides Catalog",
  },
];

// Duplicated for seamless continuous loop on tablet/mobile Swiper
const loopedCatalogs = [...productCatalogs, ...productCatalogs];

export default function Products() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="w-full relative z-10 py-14 sm:py-20 md:py-24 min-[2000px]:py-28 min-[3000px]:py-32 bg-white">
      {/* Centering wrapper — scales up progressively for 2K/4K/5K+ screens */}
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16 min-[2000px]:mb-20 min-[3000px]:mb-24">
          <div
            className="flex items-center justify-center gap-3 min-[2000px]:gap-4 mb-4 min-[2000px]:mb-6"
            data-aos="fade-up"
          >
            <h2 className="font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] min-[2000px]:text-[42px] min-[3000px]:text-[50px] leading-tight text-[#2A2A2A] capitalize">
              Product Catalog
            </h2>
            <span className="w-[33px] min-[2000px]:w-[42px] min-[3000px]:w-[50px] h-[5px] min-[2000px]:h-[6px] min-[3000px]:h-[7px] bg-[#84BB65] rounded-[43px] inline-block shrink-0" />
          </div>

          <p
            className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] min-[2000px]:text-[21px] min-[3000px]:text-[24px] leading-[150%] text-[#4A4A4A] max-w-[1230px] xl:max-w-[70%] min-[2000px]:max-w-[65%] min-[3000px]:max-w-[60%] mx-auto px-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore our complete portfolio of medical devices and specialised healthcare solutions
            through our product catalogs. Each catalog offers comprehensive information on product
            features, specifications, applications, and available configurations, helping
            healthcare professionals better understand our solutions and select products that
            meet their specific clinical requirements.
          </p>
        </div>

        {/* 1. Desktop Layout (>1025px): Stable 3-column Grid matching Figma */}
        <div className="hidden min-[1025px]:grid grid-cols-3 gap-6 lg:gap-8 min-[2000px]:gap-10 min-[3000px]:gap-12 max-w-[1680px] min-[2000px]:max-w-[1900px] min-[2500px]:max-w-[2100px] min-[3000px]:max-w-[2400px] min-[3840px]:max-w-[2800px] mx-auto">
          {productCatalogs.map((item, index) => (
            <div
              key={item.id}
              onClick={scrollToContact}
              className="
                group relative bg-white rounded-[30px] min-[2000px]:rounded-[36px] overflow-hidden
                shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                p-5 sm:p-7 min-[2000px]:p-9 min-[3000px]:p-10 flex flex-col items-center justify-between
                cursor-pointer
              "
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              data-aos-duration="800"
            >
              {/* Full-card image overlay that covers the entire card on hover (no text, no movement) */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[30px] min-[2000px]:rounded-[36px] overflow-hidden">
                <img
                  src={item.hoverImage}
                  alt={`${item.title} Details`}
                  className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
                />
              </div>

              {/* Normal View: Product Image Frame (cropped at bottom and right side) */}
              <div className="w-full aspect-[475/310] relative rounded-[25px] min-[2000px]:rounded-[30px] overflow-hidden border border-black/20 bg-white mb-6 min-[2000px]:mb-8">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover object-left-top"
                />
              </div>

              {/* Normal View: Title (fades on hover when full image covers card) */}
              <h3 className="font-baloo font-semibold text-[22px] sm:text-[24px] min-[2000px]:text-[28px] min-[3000px]:text-[32px] leading-tight text-[#2A2A2A] capitalize text-center mb-3 min-[2000px]:mb-4 transition-opacity duration-300 group-hover:opacity-0">
                {item.title}
              </h3>

              {/* Normal View: View More Link (fades on hover when full image covers card) */}
              <button
                type="button"
                onClick={scrollToContact}
                className="
                  font-baloo font-semibold text-[20px] sm:text-[22px] min-[2000px]:text-[25px] min-[3000px]:text-[28px] leading-[150%]
                  text-[#468A28] hover:text-[#38701f]
                  underline decoration-[#468A28] underline-offset-4
                  transition-opacity duration-300 group-hover:opacity-0 cursor-pointer select-none
                "
              >
                View More &gt;
              </button>
            </div>
          ))}
        </div>

        {/* 2. Tablet & Mobile Layout (<=1025px): Swiper Autoscroll Loop */}
        <div className="block min-[1025px]:hidden w-full max-w-[1680px] mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="w-full !py-4"
          >
            {loopedCatalogs.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="h-auto">
                <div
                  onClick={scrollToContact}
                  className="
                    group relative bg-white rounded-[30px] overflow-hidden
                    shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                    p-5 sm:p-7 flex flex-col items-center justify-between
                    h-full cursor-pointer
                  "
                >
                  {/* Full-card image overlay that covers the entire card on hover (no text, no movement) */}
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[30px] overflow-hidden">
                    <img
                      src={item.hoverImage}
                      alt={`${item.title} Details`}
                      className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
                    />
                  </div>

                  {/* Normal View: Product Image Frame (cropped at bottom and right side) */}
                  <div className="w-full aspect-[475/310] relative rounded-[25px] overflow-hidden border border-black/20 bg-white mb-6">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover object-left-top"
                    />
                  </div>

                  {/* Normal View: Title */}
                  <h3 className="font-baloo font-semibold text-[21px] sm:text-[23px] leading-tight text-[#2A2A2A] capitalize text-center mb-3 transition-opacity duration-300 group-hover:opacity-0">
                    {item.title}
                  </h3>

                  {/* Normal View: View More Link */}
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="
                      font-baloo font-semibold text-[19px] sm:text-[21px] leading-[150%]
                      text-[#468A28] hover:text-[#38701f]
                      underline decoration-[#468A28] underline-offset-4
                      transition-opacity duration-300 group-hover:opacity-0 cursor-pointer select-none
                    "
                  >
                    View More &gt;
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}