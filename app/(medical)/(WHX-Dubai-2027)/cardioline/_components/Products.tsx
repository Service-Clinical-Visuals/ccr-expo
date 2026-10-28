"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Typography from "./Typography";

const products = [
  {
    title: "Electrocardiographs",
    text: "Advanced features with unmatched ease of use for seamless, efficient, and high-quality patient care.",
    image: "p1.png",
  },
  {
    title: "ECG Workstation",
    text: "Reliable, versatile, and scalable, Cardioline’s ECG solutions meet the needs of hospital departments and specialized outpatient clinics.",
    image: "p2.png",
  },
  {
    title: "Electrocardiographs",
    text: "Compact, intuitive, and lightweight, Cardioline’s digital ECG solutions are ideal for telemedicine and a wide range of clinical settings.",
    image: "p3.png",
  },
  {
    title: "Holter Monitoring",
    text: "Next-generation Holter monitoring solutions featuring advanced analysis software for fast, precise reviews of 24/48h or 7 days.",
    image: "p4.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="w-full bg-white py-12 sm:py-16 lg:py-20 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-6 sm:mb-8 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <Typography variant="h5" color="secondary" weight="medium" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            Our Products
          </Typography>
          <Typography variant="h2" color="dark" className="mb-4 sm:mb-5 min-[2500px]:mb-8 min-[3800px]:mb-12">
            Advanced Solutions for Cardiac Diagnostics
          </Typography>
          <Typography variant="p" color="dark" className="lg:max-w-[64%]">
            Explore Cardioline’s comprehensive range of cardiac diagnostic devices and software, designed to support
            healthcare professionals with reliable technology, efficient workflows, and accurate cardiac assessments.
          </Typography>
        </div>

        {/* Product cards: circle image overlaps the top of each card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8 xl:gap-x-8 min-[2500px]:gap-x-12 min-[2500px]:gap-y-14 min-[3800px]:gap-x-16 min-[3800px]:gap-y-20">
          {products.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative flex flex-col w-full max-w-[360px] sm:max-w-none mx-auto"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Soft floor shadow that fades in under the card on hover (lift is on the children: AOS owns this div's transform) */}
              <div className="pointer-events-none absolute left-[6%] right-[4%] -bottom-[12%] h-[22%] rounded-[50%] bg-black/20 blur-2xl min-[2500px]:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 ml-[21%] w-[54.5%] aspect-[178/187] transition-transform duration-500 group-hover:-translate-y-2 min-[2500px]:group-hover:-translate-y-3 min-[3800px]:group-hover:-translate-y-4 rounded-full border-[5px] min-[2500px]:border-[7px] min-[3800px]:border-[10px] border-secondary bg-white overflow-hidden">
                <img
                  src={`/(WHX-Dubai-2027)/cardioline/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
              </div>

              <div className="relative flex-1 flex flex-col items-end text-right  -mt-[29.7%] pt-[calc(29.7%+1.5rem)] min-[2500px]:pt-[calc(29.7%+2.25rem)] min-[3800px]:pt-[calc(29.7%+3rem)] px-5 min-[2500px]:px-8 min-[3800px]:px-11 pb-6 min-[2500px]:pb-9 min-[3800px]:pb-12 bg-white border border-[#EEEEEE] shadow-[0px_4px_14px_rgba(0,0,0,0.1)] group-hover:shadow-[0px_10px_24px_rgba(0,0,0,0.14)] transition-[box-shadow,translate] duration-500 group-hover:-translate-y-2 min-[2500px]:group-hover:-translate-y-3 min-[3800px]:group-hover:-translate-y-4 rounded-tr-[80px] rounded-b-[24px] min-[2500px]:rounded-tr-[120px] min-[2500px]:rounded-b-[36px] min-[3800px]:rounded-tr-[160px] min-[3800px]:rounded-b-[48px]">
                <Typography variant="h3" color="dark" weight="semibold" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
                  {item.title}
                </Typography>
                <Typography variant="p" color="dark" className="mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11">
                  {item.text}
                </Typography>

                <Link
                  href="#products"
                  className="mt-auto inline-flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 text-secondary"
                >
                  <Typography variant="h5" color="secondary" weight="medium">
                    View Products
                  </Typography>
                  <FiArrowUpRight
                    className="w-[18px] h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10 sm:mt-14 xl:mt-16 min-[2500px]:mt-24 min-[3800px]:mt-32">
          <Link href="#products">
            <Typography variant="h5" color="secondary" weight="semibold" className="underline underline-offset-4">
              View All
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
}
