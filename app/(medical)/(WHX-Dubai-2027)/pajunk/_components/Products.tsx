/**
 * Products Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: FIGMA GROUP 29 / GROUP 30 & INOGEN MASTER STANDARD
 * 1. Card Visual Architecture:
 *    - Rectangle 7 (Product Image): 420x331px (approx 78.8% width), rounded-[5px], shadow-[0_2px_6px_2px_rgba(60,64,67,0.15),0_1px_2px_rgba(60,64,67,0.3)], z-10.
 *    - Vector 2 (Folder-Tab Green Card): 533x362px (100% width), bg-[#144835] with unique asymmetrical raised tab on the left and diagonal slope into lower right shelf.
 *    - Vector 2 sits in front (z-20) overlapping the bottom 132px of Rectangle 7 (-mt-[132px]), perfectly matching Figma's exact layer stacking.
 * 2. Swiper Carousel:
 *    - Starts at index 0, circular bullets (active #003121, inactive #D9D9D9).
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "Regional Anesthesia",
    image: "/medical/pajunk/p1.webp",
    description: "Regional anesthesia uses local anesthetics around specific nerves to temporarily block sensation in targeted body areas. It can offer benefits such as improved postoperative pain relief, faster recovery and shorter hospital stays compared to general anesthesia.",
  },
  {
    title: "Pain Management",
    image: "/medical/pajunk/p2.webp",
    description: "PAJUNK expands its expertise in regional anesthesia into chronic pain and musculoskeletal procedures, offering high-quality ultrasound- and fluoroscopy-guided injection needles and radiofrequency (RF) products.",
  },
  {
    title: "Neurology / Neurorehabilitation",
    image: "/medical/pajunk/p3.webp",
    description: "PAJUNK's SPROTTE® needle supports safer lumbar punctures, while the STIM2GO System advances neurorehabilitation through non-invasive electrical stimulation. These innovations reflect PAJUNK's commitment to precision, patient comfort and improved clinical outcomes.",
  },
  {
    title: "Biopsy",
    image: "/medical/pajunk/p4.webp",
    description: "With over 45 years of expertise, PAJUNK develops precision-engineered modular biopsy needle systems for various sampling procedures, offering more than 100 tip designs and options for reliable performance.",
  },
  {
    title: "Minimally Invasive Surgery",
    image: "/medical/pajunk/p5.webp",
    description: "PAJUNK develops precision-engineered modular instruments for minimally invasive surgery, combining stability, ergonomic design and cost efficiency through close collaboration with clinical experts.",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="tag-badge"
            color="primary"
            className="tracking-widest text-xs sm:text-sm font-semibold !text-[#144835]"
          >
            OUR PRODUCT PORTFOLIO
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000]"
          >
            Innovative Solutions for Every Surgical Need
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#111111]"
          >
            PAJUNK® is a family-owned and owner-managed medical technology company that develops and manufactures needs-driven medical devices and solutions in close collaboration with healthcare professionals. Since 1965, we have been helping them focus on what matters most: their patients.
          </Typography>
        </div>

        {/* Products Swiper Carousel */}
        <div className="w-full mt-12 sm:mt-16" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            initialSlide={0}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} pajunk-circle-bullet"></span>`;
              },
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1440: { slidesPerView: 3, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
              3800: { slidesPerView: 3, spaceBetween: 64 },
            }}
            className="w-full !pb-14 overflow-visible"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex flex-col pt-2">
                <div className="w-full flex flex-col h-full group cursor-pointer relative select-none">
                  
                  {/* Rectangle 7: Studio Image Box (responsive scaling from mobile to 4k) */}
                  <div className="w-[84%] sm:w-[78.8%] max-w-[420px] 2k:max-w-[620px] 4k:max-w-[880px] mx-auto aspect-[420/331] bg-white rounded-[5px] 2k:rounded-[10px] 4k:rounded-[16px] overflow-hidden shadow-[0px_2px_6px_2px_rgba(60,64,67,0.15),0px_1px_2px_rgba(60,64,67,0.3)] relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Vector 2: Green Tab-Notched Card (responsive overlap and min-height) */}
                  <div className="w-full -mt-[112px] sm:-mt-[128px] md:-mt-[132px] 2k:-mt-[195px] 4k:-mt-[280px] relative z-20 min-h-[340px] sm:min-h-[362px] 2k:min-h-[540px] 4k:min-h-[760px] flex flex-col justify-between filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                    
                    {/* SVG Shape for Vector 2: exact asymmetrical tab on left sloping down to lower right shelf */}
                    <svg
                      viewBox="0 0 533 362"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 20 C 0 9 9 0 20 0 L 125 0 C 137 0 148 7 154 18 L 186 44 C 192 50 200 53 209 53 L 513 53 C 524 53 533 62 533 73 L 533 342 C 533 353 524 362 513 362 L 20 362 C 9 362 0 353 0 342 Z"
                        fill="#144835"
                      />
                    </svg>

                    {/* Content inside the card (Group 27) */}
                    <div className="relative z-30 pt-[66px] sm:pt-[76px] md:pt-[82px] 2k:pt-[125px] 4k:pt-[175px] px-4 sm:px-6 md:px-8 2k:px-12 4k:px-18 pb-6 sm:pb-8 2k:pb-12 4k:pb-18 flex flex-col justify-between items-center text-center flex-1">
                      <div className="space-y-2 sm:space-y-3 2k:space-y-6 4k:space-y-8">
                        <Typography
                          variant="h3"
                          color="white"
                          className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-center text-white"
                        >
                          {product.title}
                        </Typography>

                        <Typography
                          variant="p"
                          color="white"
                          className="text-white/85 text-xs sm:text-sm leading-relaxed text-center line-clamp-4"
                        >
                          {product.description}
                        </Typography>
                      </div>

                      <div className="pt-4 sm:pt-6 2k:pt-10 4k:pt-14">
                        <Button
                          text="View Products"
                          variant="outline"
                          href="#products"
                          showIcon={true}
                          className="!py-2 !px-5 sm:!px-6 2k:!py-4 2k:!px-10 4k:!py-6 4k:!px-14 text-xs sm:text-sm rounded-[5px]"
                        />
                      </div>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .pajunk-circle-bullet {
          width: 14px !important;
          height: 14px !important;
          border-radius: 50% !important;
          background-color: #D9D9D9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 5px !important;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active.pajunk-circle-bullet {
          width: 15px !important;
          height: 15px !important;
          background-color: #003121 !important;
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
