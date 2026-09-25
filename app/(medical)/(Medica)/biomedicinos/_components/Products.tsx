"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Typography from "./Typography";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "AL Scope",
      category: "COLPOSCOPE",
      image: "/medical/biomedicinos/f1.png",
      href: "#products",
    },
    {
      id: 2,
      name: "SLV - 101",
      category: "VIDEO COLPOSCOPE",
      image: "/medical/biomedicinos/f2.png",
      href: "#products",
    },
    {
      id: 3,
      name: "SLV - 101 HDM",
      category: "VIDEO COLPOSCOPE",
      image: "/medical/biomedicinos/f3.png",
      href: "#products",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white w-full">
      <div className="custom-container flex flex-col items-center text-center">
        <Typography variant="h6" color="primary" className="mb-2" data-aos="fade-up">
          Our Product Category
        </Typography>

        <Typography variant="h2" color="dark" className="mb-4 max-w-4xl 2xl:max-w-[70%] min-[2500px]:max-w-[60%] min-[3800px]:max-w-[50%]" data-aos="fade-up" data-aos-delay="100">
          Innovative solutions for <span className="text-[var(--color-primary)]">Better Diagnostics</span>
        </Typography>

        <Typography variant="p" color="dark" className="mb-12 text-gray-700 max-w-2xl 2xl:max-w-[50%] min-[2500px]:max-w-[40%]" data-aos="fade-up" data-aos-delay="200">
          Advanced technology. Reliable performance. Designed for better patient outcomes.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
          {products.map((product, index) => (
            <Link
              href={product.href}
              key={product.id}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 bg-[#f4f8fb]"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className="w-full relative aspect-[516/300] overflow-hidden rounded-bl-[80px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col text-left p-6 pt-5 min-[2500px]:p-8 min-[3800px]:p-10 flex-grow relative">
                <Typography variant="span" color="primary" className="text-xs min-[2500px]:text-sm min-[3800px]:text-base font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </Typography>
                <div className="flex items-center justify-between">
                  <Typography variant="h4" color="dark" className="font-semibold">
                    {product.name}
                  </Typography>
                  <ArrowRight className="w-5 h-5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-gray-700 group-hover:text-[var(--color-primary)] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
