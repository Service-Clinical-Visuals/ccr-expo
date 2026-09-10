"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

export default function Solutions() {
  const categories = [
    { name: "Elbow", icon: "/truemed/vector1.png" },
    { name: "Shoulder", icon: "/truemed/vector2.png" },
    { name: "Hand & Wrist", icon: "/truemed/vector3.png" },
    { name: "Others", icon: "/truemed/vector4.png" }
  ];
  const [activeCategory, setActiveCategory] = useState("Elbow");

  const categoryData: Record<string, { title: string, desc: string, img: string }[]> = {
    "Elbow": [
      {
        title: "TRUE LOCK Distal Humerus Medial Plate",
        desc: "Indicated for intra-articular and supracondylar fractures of the distal humerus, as well as nonunions and osteotomies. Distal humerus fractures account for approximately 2% of all fractures and nearly one-third of humerus fractures.",
        img: "/truemed/E1.png"
      },
      {
        title: "TRUE LOCK Olecranon Anatomic Plate",
        desc: "Indicates for complex extra- and intra-articular olecranon fractures, simple olecranon fractures, pseudoarthrosis of the proximal ulna, and osteotomies.",
        img: "/truemed/E2.png"
      },
      {
        title: "TRUE LOCK Distal Humerus Lateral Anatomic Plate",
        desc: "Indicates for intra-articular and supracondylar fractures of the distal humerus, along with nonunions and osteotomies. Distal humerus fractures account for approximately 2% of all fractures and nearly one-third of humerus fractures.",
        img: "/truemed/E3.png"
      },
      {
        title: "TRUE LOCK Distal Humerus Posterolateral Anatomic Plate",
        desc: "Indicates for intra-articular and supracondylar fractures of the distal humerus, as well as nonunions and osteotomies of the distal humerus.",
        img: "/truemed/E4.png"
      },
      {
        title: "TRUE LOCK Proximal Radius Plate",
        desc: "indicated for extra- and intra-articular fractures of the proximal radius, including multifragmented radial neck fractures. Radial head fractures account for approximately 1.7-5.4% of all fractures and around 33% of adult elbow fractures.",
        img: "/truemed/E5.png"
      }
    ],
    "Shoulder": [
      {
        title: "TRUE LOCK Clavicle Anatomic Plate",
        desc: "Indicated for malunions, nonunions and osteotomies of the clavicle.",
        img: "/truemed/S1.png"
      },
      {
        title: "TRUE LOCK Superior Distal Clavicle Anatomic Plate",
        desc: "Indicated include fractures of the clavicle shaft and lateral clavicle, as well as malunions and non-unions of the clavicle.",
        img: "/truemed/S2.png"
      },
      {
        title: "TRUE LOCK Proximal Humerus Anatomic Plate",
        desc: "For fractures and fracture dislocations, osteotomies, and nonunions of the proximal humerus, particularly for patients with osteopenic bone. Proximal humerus fractures are 4-5% of all fracture types.",
        img: "/truemed/S3.png"
      },
      {
        title: "TRUE LOCK 3.5 mm Humerus Straight Plate",
        desc: "Indicates for fractures and deformities in the shaft (middle, diaphyseal) part of the humerus bone.",
        img: "/truemed/S4.png"
      }
    ],
    "Hand & Wrist": [
      {
        title: "TRUE LOCK Distal Radius Dorsal Anatomic Plate",
        desc: "Indicated for Dorsally displaced fractures. Extra-articular fractures with metaphyseal defect. Open joint reconstruction.",
        img: "/truemed/H1.png"
      },
      {
        title: "TRUE LOCK Distal Radius Volar Anatomic Plate",
        desc: "Indicated for fixation of complex intra and extra-articular fractures and corrective osteotomies of the distal radius. Distal Radius fractures constitute 8-15% of all fractures.",
        img: "/truemed/H2.png"
      },
      {
        title: "TRUE LOCK 1/3 Tubular Straight Plates",
        desc: "Indicated for fractures of ulna, radius and fibula shaft. Radius and ulna body fractures differ from other diaphyseal fractures due to the relationship between both bones and the fractures can affect the elbow and wrist joints.",
        img: "/truemed/H3.png"
      },
      {
        title: "TRUE LOCK 3.5mm Ulna Radius Plate",
        desc: "Indicated for fractures of ulna, radius and fibula shaft. Radius and ulna body fractures differ from other diaphyseal fractures due to the relationship between both bones.",
        img: "/truemed/H4.png"
      },
      {
        title: "TRUE LOCK Distal Ulna Anatomic Plate",
        desc: "Indicated for fixation of fractures, osteotomies, nonunions, replantations, and fusions of small bones and small bone fragments, particularly in osteopenic bone.",
        img: "/truemed/H5.png"
      }
    ],
    "Others": [
      {
        title: "TRUE LOCK Dynamic Hip Screw Plate",
        desc: "Indicated for the treatment of intertrochanteric, subtrochanteric and basilar neck fractures of the femur.",
        img: "/truemed/E1.png"
      }
    ]
  };

  const activeCards = categoryData[activeCategory] || [];

  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <style>{`
        .solutions-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .solutions-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
      `}</style>
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4" data-aos="fade-up">
          <Typography variant="h3" color="secondary" >
            ■ Our Supply Room
          </Typography>
          <Typography variant="h2" color="dark">
            Precision Trauma Plates for Reliable Fracture Care
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-[80%] mx-auto">
            TRUEMED offers a range of high-quality trauma plates designed for effective fracture fixation and faster recovery. Our implants are precision-engineered using medical-grade materials, ensuring strength, reliability, and patient safety across various orthopedic applications.
          </Typography>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-4" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl border transition-all duration-300 ${activeCategory === cat.name
                ? "border-[var(--color-primary)] text-white bg-[var(--color-primary)] shadow-md"
                : "border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 bg-transparent"
                }`}
            >
              <Typography variant="span" color={activeCategory === cat.name ? "white" : "primary"} weight="semibold">
                {cat.name}
              </Typography>
              <span
                className={`w-6 h-6 block transition-colors ${activeCategory === cat.name ? "bg-white" : "bg-[var(--color-primary)]"}`}
                style={{
                  maskImage: `url(${cat.icon})`,
                  WebkitMaskImage: `url(${cat.icon})`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              />
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div
          className="w-full mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".solutions-pagination" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              3800: { slidesPerView: 4 },
            }}
            className="w-full pb-16 solutions-swiper"
          >
            {activeCards.map((card, idx) => (
              <SwiperSlide key={`${activeCategory}-${idx}`} className="pb-2">
                <div className="flex flex-col w-full h-full bg-white border border-gray-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="w-full aspect-[496/400] p-3 rounded-xl overflow-hidden  flex items-center justify-center p-4 relative">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-contain transition-transform bg-gray-50 rounded-xl duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-1 p-6 xl:p-8 text-center items-center">
                    <Typography variant="h3" color="dark" className="mb-4">
                      {card.title}
                    </Typography>

                    <Typography variant="p" color="muted" className="leading-relaxed">
                      {card.desc}
                    </Typography>

                    {/* Know More Link (pushed to bottom) */}
                    <div className="mt-auto pt-6 flex justify-center w-full">
                      <a href="#" className="inline-flex items-center gap-2 group border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 rounded-full px-6 py-2 transition-all">
                        <Typography variant="span" color="primary" weight="semibold">
                          Know More
                        </Typography>
                        <ArrowRight className="w-4 h-4 text-[var(--color-primary)] group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Indicator */}
          <div className="solutions-pagination custom-pagination flex justify-center gap-2 mt-4"></div>
        </div>

      </div>
    </section>
  );
}
