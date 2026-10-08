"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

interface ProductItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const products: ProductItem[] = [
  {
    title: "Surgical Sutures",
    description:
      "Examine our absorbable, non-absorbable and antibacterial absorbable surgical sutures",
    image: "/medical/boz-tibbi-malzeme/s1.webp",
    link: "#products",
  },
  {
    title: "Hemostats",
    description:
      "Examine our improved hemostats for surgical interventions and surgeries.",
    image: "/medical/boz-tibbi-malzeme/s2.webp",
    link: "#products",
  },
  {
    title: "Surgical Meshes",
    description:
      "They are medicinal products in the form of patches used to strengthen weak tissues in hernia repairs…",
    image: "/medical/boz-tibbi-malzeme/s3.webp",
    link: "#products",
  },
];

export default function Products() {
  return (
    <section id="products" className="w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 xl:max-w-[70%] max-w-[90%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="capitalize">
            Advanced Solutions For Surgical Care
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Explore Boz Tibbi Malzeme A.Ş.’s range of medical products, including surgical sutures, hemostats, and surgical meshes. Developed with a focus on quality and clinical requirements, our portfolio supports healthcare professionals across diverse surgical applications.
          </Typography>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.map((item, index) => {
            const isLastOdd = index === products.length - 1 && products.length % 2 !== 0;
            return (
              <div
                key={item.title}
                className={`bg-white rounded-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.18)] p-6 sm:p-7 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-all duration-300 group ${
                  isLastOdd
                    ? "md:col-span-2 md:w-[calc(50%-0.75rem)] sm:md:w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0"
                    : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col gap-5">
                  <div className="w-full aspect-[485/311] rounded-[15px] overflow-hidden border border-black/20 bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography
                      variant="h3"
                      color="dark"
                      className="!text-xl sm:!text-2xl !font-semibold capitalize group-hover:text-[var(--color-primary)] transition-colors"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-relaxed text-[#4A4A4A]">
                      {item.description}
                    </Typography>
                  </div>
                </div>

                <div className="pt-5 min-[1920px]:pt-6 min-[2500px]:pt-8 min-[3800px]:pt-12 mt-auto">
                  <Link
                    href={item.link}
                    className="inline-block font-exo text-[var(--color-primary)] font-semibold text-lg min-[1920px]:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl underline underline-offset-4 min-[3800px]:underline-offset-8 hover:text-[var(--color-primary-hover)] transition-colors"
                  >
                    View More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-7 pt-2 min-[1920px]:pt-4 min-[2500px]:pt-6 min-[3800px]:pt-10">
          <span className="w-12 sm:w-16 min-[1920px]:w-20 min-[2500px]:w-28 min-[3800px]:w-44 h-2 min-[1920px]:h-3 min-[2500px]:h-[18px] min-[3800px]:h-7 rounded-full bg-[var(--color-primary)] transition-all" />
          <span className="w-2 h-2 min-[1920px]:w-3 min-[1920px]:h-3 min-[2500px]:w-[18px] min-[2500px]:h-[18px] min-[3800px]:w-7 min-[3800px]:h-7 rounded-full bg-[#D9D9D9]" />
          <span className="w-2 h-2 min-[1920px]:w-3 min-[1920px]:h-3 min-[2500px]:w-[18px] min-[2500px]:h-[18px] min-[3800px]:w-7 min-[3800px]:h-7 rounded-full bg-[#D9D9D9]" />
          <span className="w-2 h-2 min-[1920px]:w-3 min-[1920px]:h-3 min-[2500px]:w-[18px] min-[2500px]:h-[18px] min-[3800px]:w-7 min-[3800px]:h-7 rounded-full bg-[#D9D9D9]" />
        </div>
      </div>
    </section>
  );
}
