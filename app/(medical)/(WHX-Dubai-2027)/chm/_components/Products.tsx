/**
 * Products Section for ChM
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Zinnanti Surgical Standards):
 * 1. Centered Section Header:
 *    - Title: "Explore Our Orthopedic Product Range" (`h2`, Cal Sans).
 *    - Subtitle constrained to `xl:max-w-[75%]` for optimal line measure.
 * 2. 7 Categories + View All Bar:
 *    - Category scrolling controlled by left & right circular arrows.
 *    - Category buttons & arrow rounds scale up smoothly on 2K and 4K viewports (`2k:w-16 4k:w-22`).
 * 3. Responsive Carousel of Product Cards:
 *    - 1 slide (<768px), 2 slides (768px-1279px), 3 slides (>=1280px).
 *    - Each card includes: inner image container, title, description, and "Read More" button.
 *    - Custom pagination bullets: active red pill (`#A41E27`, 64px) + inactive dots (`#D9D9D9`, 9px).
 */
"use client";

import React, { useRef, useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Category {
  id: string;
  label: string;
}

const categories: Category[] = [
  { id: "endoprosthesis", label: "Endoprosthesis" },
  { id: "instruments", label: "Instruments" },
  { id: "interbody-devices", label: "Interbody Devices®" },
  { id: "microsystems", label: "Microsystems" },
  { id: "nail", label: "Nail" },
  { id: "plates", label: "Plates" },
  { id: "transpedicular", label: "Transpedicular Systems" },
  { id: "view-all", label: "View All" },
];

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const allProducts: Product[] = [
  // 1. Endoprosthesis (p11, p12, p13, p14)
  {
    id: "p11",
    category: "endoprosthesis",
    title: "Instrument Set For Posterior Lumbar Spine",
    description: "Developed to support spinal fusion, stability, and structural support between vertebrae.",
    image: "/medical/chm/p11.webp",
    link: "#",
  },
  {
    id: "p12",
    category: "endoprosthesis",
    title: "ChMP Angular Screwdriver",
    description: "A specialized surgical instrument designed for precise screw placement in orthopedic procedures.",
    image: "/medical/chm/p12.webp",
    link: "#",
  },
  {
    id: "p13",
    category: "endoprosthesis",
    title: "Mobile Stand For Tourniquets...",
    description: "A convenient mobile stand designed for secure positioning and easy movement of tourniquet equipment.",
    image: "/medical/chm/p13.webp",
    link: "#",
  },
  {
    id: "p14",
    category: "endoprosthesis",
    title: "Adjustable Tourniquet Control Unit",
    description: "Provides adjustable pressure control to support effective blood flow management during surgery.",
    image: "/medical/chm/p14.webp",
    link: "#",
  },

  // 2. Instruments (p21, p22, p23, p24, p25)
  {
    id: "p21",
    category: "instruments",
    title: "Electronic Tourniquet Control Unit",
    description: "An electronic system designed for accurate pressure regulation and reliable tourniquet operation.",
    image: "/medical/chm/p21.webp",
    link: "#",
  },
  {
    id: "p22",
    category: "instruments",
    title: "Femoral Reamer Instrument Set",
    description: "Specialized reaming instrumentation engineered for accurate intramedullary canal preparation.",
    image: "/medical/chm/p22.webp",
    link: "#",
  },
  {
    id: "p23",
    category: "instruments",
    title: "Orthopedic Bone Drill Guide",
    description: "High-precision instrumentation ensuring accurate drill trajectory and bone protection.",
    image: "/medical/chm/p23.webp",
    link: "#",
  },
  {
    id: "p24",
    category: "instruments",
    title: "Surgical Compression Clamp",
    description: "Ergonomic compression clamp engineered for secure bone fragment reduction.",
    image: "/medical/chm/p24.webp",
    link: "#",
  },
  {
    id: "p25",
    category: "instruments",
    title: "Intramedullary Extraction Set",
    description: "Complete instrument set for seamless implant extraction and revision surgery.",
    image: "/medical/chm/p25.webp",
    link: "#",
  },

  // 3. Interbody Devices® (p31, p32, p33, p34, p35)
  {
    id: "p31",
    category: "interbody-devices",
    title: "Cervical Interbody Cage System",
    description: "Anatomically contoured cages providing optimal stability and fusion in cervical spine procedures.",
    image: "/medical/chm/p31.webp",
    link: "#",
  },
  {
    id: "p32",
    category: "interbody-devices",
    title: "TLIF Lumbar Interbody Spacer",
    description: "Engineered for transforaminal lumbar interbody fusion with expansive bone graft contact.",
    image: "/medical/chm/p32.webp",
    link: "#",
  },
  {
    id: "p33",
    category: "interbody-devices",
    title: "PLIF Fusion Implant Device",
    description: "Posterior lumbar interbody fusion cage with optimized modulus of elasticity.",
    image: "/medical/chm/p33.webp",
    link: "#",
  },
  {
    id: "p34",
    category: "interbody-devices",
    title: "Anterior Lumbar Fusion Cage",
    description: "Restores disc height and sagittal balance in reconstructive spinal surgery.",
    image: "/medical/chm/p34.webp",
    link: "#",
  },
  {
    id: "p35",
    category: "interbody-devices",
    title: "Expandable Spinal Device",
    description: "Minimally invasive expandable interbody system offering controlled restoration.",
    image: "/medical/chm/p35.webp",
    link: "#",
  },

  // 4. Microsystems (p41)
  {
    id: "p41",
    category: "microsystems",
    title: "Microsystems Plating & Screw Set",
    description: "Ultra-low-profile plating system for precise craniofacial and small-bone reconstruction.",
    image: "/medical/chm/p41.webp",
    link: "#",
  },

  // 5. Nail (p51, p52, p53, p54, p55)
  {
    id: "p51",
    category: "nail",
    title: "CHARFIX Femoral Nail System",
    description: "Versatile intramedullary nail for reconstructive, compression, and retrograde fixation.",
    image: "/medical/chm/p51.webp",
    link: "#",
  },
  {
    id: "p52",
    category: "nail",
    title: "CHARFIX Tibial Nail",
    description: "Designed for anatomical tibial shaft fractures with multidirectional distal locking.",
    image: "/medical/chm/p52.webp",
    link: "#",
  },
  {
    id: "p53",
    category: "nail",
    title: "Retrograde Femoral Nail",
    description: "Enables supracondylar femoral fixation with integrated condylar compression screws.",
    image: "/medical/chm/p53.webp",
    link: "#",
  },
  {
    id: "p54",
    category: "nail",
    title: "DRONES Radial Nail",
    description: "Advanced elastic intramedullary system developed for pediatric and adult radial fractures.",
    image: "/medical/chm/p54.webp",
    link: "#",
  },
  {
    id: "p55",
    category: "nail",
    title: "Trochanteric Nail System",
    description: "Engineered for stable fixation of pertrochanteric and intertrochanteric femur fractures.",
    image: "/medical/chm/p55.webp",
    link: "#",
  },

  // 6. Plates (p61, p62, p63, p64)
  {
    id: "p61",
    category: "plates",
    title: "Distal Radius Locking Plate",
    description: "Anatomically pre-contoured locking plate providing reliable subchondral buttress support.",
    image: "/medical/chm/p61.webp",
    link: "#",
  },
  {
    id: "p62",
    category: "plates",
    title: "Proximal Humerus Fracture Plate",
    description: "Low-profile anatomical plate featuring multi-planar divergent locking screws.",
    image: "/medical/chm/p62.webp",
    link: "#",
  },
  {
    id: "p63",
    category: "plates",
    title: "Distal Femur Variable-Angle Plate",
    description: "Variable-angle locking technology designed for complex periarticular distal femur fractures.",
    image: "/medical/chm/p63.webp",
    link: "#",
  },
  {
    id: "p64",
    category: "plates",
    title: "Reconstruction Bone Plate",
    description: "Flexible contouring plate for pelvic, clavicle, and complex multi-fragment stabilization.",
    image: "/medical/chm/p64.webp",
    link: "#",
  },

  // 7. Transpedicular Systems (p71, p72, p73, p74)
  {
    id: "p71",
    category: "transpedicular",
    title: "Thoracolumbar Pedicle Screw System",
    description: "Polyaxial pedicle screw fixation delivering superior pullout resistance and deformity correction.",
    image: "/medical/chm/p71.webp",
    link: "#",
  },
  {
    id: "p72",
    category: "transpedicular",
    title: "Occipito-Cervical Fixation Set",
    description: "Rigid posterior stabilization system for upper cervical and craniovertebral junction disorders.",
    image: "/medical/chm/p72.webp",
    link: "#",
  },
  {
    id: "p73",
    category: "transpedicular",
    title: "Minimally Invasive Spinal Rods",
    description: "Percutaneous spinal fixation system minimizing muscle disruption and trauma.",
    image: "/medical/chm/p73.webp",
    link: "#",
  },
  {
    id: "p74",
    category: "transpedicular",
    title: "Deformity Correction Connector",
    description: "Cross-link connectors and offset hooks for high-strength constructs in complex spinal surgery.",
    image: "/medical/chm/p74.webp",
    link: "#",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("endoprosthesis");
  const [setIndex, setSetIndex] = useState(0); // Set 0: first 4 categories, Set 1: next 4 categories

  const handlePrevSet = () => {
    setSetIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNextSet = () => {
    setSetIndex((prev) => (prev === 1 ? 0 : 1));
  };

  const displayedProducts =
    activeCategory === "view-all"
      ? allProducts
      : allProducts.filter((item) => item.category === activeCategory);

  return (
    <section id="products" className="w-full py-16 xl:py-24 2k:py-32 4k:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[75%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="secondary"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-[#2A2A2A]"
          >
            Explore Our Orthopedic Product Range
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
          >
            Discover ChM’s orthopedic implants and surgical instruments, developed to meet clinical needs. From endoprostheses and interbody devices to nails, plates, microsystems, and transpedicular systems, our solutions combine precision, reliability, and innovative design to support surgeons across procedures.
          </Typography>
        </div>

        {/* Categories Bar: 4 categories per view, moving smoothly with transition-transform */}
        <div
          className="w-full max-w-5xl 2k:max-w-7xl 4k:max-w-[120rem] mx-auto flex items-center justify-center gap-3 sm:gap-4 2k:gap-8 4k:gap-10 mt-8 sm:mt-12 2k:mt-16 4k:mt-24"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Left Arrow: Switches smoothly to previous set */}
          <button
            type="button"
            onClick={handlePrevSet}
            className="w-9 h-9 sm:w-10 sm:h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#A41E27] hover:text-white hover:border-[#A41E27] transition-all duration-300 shrink-0 cursor-pointer shadow-xs active:scale-95 z-10"
            aria-label="Previous categories"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 2k:w-8 2k:h-8 4k:w-11 4k:h-11" />
          </button>

          {/* Smooth Sliding Window for Categories */}
          <div className="overflow-hidden w-full max-w-3xl 2k:max-w-5xl 4k:max-w-[100rem]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${setIndex * 100}%)`,
              }}
            >
              {/* Set 1: First 4 Categories */}
              <div className="w-full shrink-0 flex items-center justify-center gap-2 sm:gap-3 2k:gap-6 4k:gap-8 px-1">
                {categories.slice(0, 4).map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 sm:px-6 2k:px-10 4k:px-14 py-2.5 2k:py-4 4k:py-6 rounded 2k:rounded-md 4k:rounded-lg text-xs sm:text-sm 2k:text-xl 4k:text-3xl capitalize transition-all duration-300 cursor-pointer whitespace-nowrap select-none ${
                        isActive
                          ? "bg-[#A41E27] text-white font-medium shadow-sm border border-[#A41E27]"
                          : "bg-white text-[#2A2A2A] border border-gray-300/80 hover:border-[#A41E27]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Set 2: Next 4 Categories */}
              <div className="w-full shrink-0 flex items-center justify-center gap-2 sm:gap-3 2k:gap-6 4k:gap-8 px-1">
                {categories.slice(4, 8).map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 sm:px-6 2k:px-10 4k:px-14 py-2.5 2k:py-4 4k:py-6 rounded 2k:rounded-md 4k:rounded-lg text-xs sm:text-sm 2k:text-xl 4k:text-3xl capitalize transition-all duration-300 cursor-pointer whitespace-nowrap select-none ${
                        isActive
                          ? "bg-[#A41E27] text-white font-medium shadow-sm border border-[#A41E27]"
                          : "bg-white text-[#2A2A2A] border border-gray-300/80 hover:border-[#A41E27]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Arrow: Switches smoothly to next set */}
          <button
            type="button"
            onClick={handleNextSet}
            className="w-9 h-9 sm:w-10 sm:h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#A41E27] hover:text-white hover:border-[#A41E27] transition-all duration-300 shrink-0 cursor-pointer shadow-xs active:scale-95 z-10"
            aria-label="Next categories"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 2k:w-8 2k:h-8 4k:w-11 4k:h-11" />
          </button>
        </div>

        {/* Product Carousel */}
        <div className="w-full mt-10 sm:mt-12 2k:mt-16 4k:mt-24" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            key={activeCategory}
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} chm-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 44 },
              3800: { slidesPerView: 3, spaceBetween: 60 },
            }}
            className="w-full !pb-14 2k:!pb-20 4k:!pb-28"
          >
            {displayedProducts.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex p-1">
                {/* Product Outer Card - Flat sharp corners (rounded-none) */}
                <div className="w-full bg-white rounded-none p-4 sm:p-5 2k:p-8 4k:p-12 border border-gray-300/80 shadow-[0px_3px_8px_rgba(0,0,0,0.12)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  {/* Inner Image Card - Flat sharp corners (rounded-none) */}
                  <div className="w-full aspect-[491/298] rounded-none border border-gray-200 bg-white flex items-center justify-center p-3 sm:p-5 2k:p-7 4k:p-10 overflow-hidden mb-4 sm:mb-5 2k:mb-7 4k:mb-10 cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col gap-2.5 2k:gap-4 4k:gap-6 flex-1">
                    <Typography
                      variant="h3"
                      color="secondary"
                      className="text-lg sm:text-xl font-normal text-[#2A2A2A] capitalize line-clamp-1"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="p"
                      color="muted"
                      className="text-[#4A4A4A] leading-relaxed line-clamp-2"
                    >
                      {item.description}
                    </Typography>

                    <div className="pt-4 2k:pt-6 4k:pt-8 mt-auto">
                      <Button
                        text="Read More"
                        href={item.link}
                        variant="white"
                      />
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
}
