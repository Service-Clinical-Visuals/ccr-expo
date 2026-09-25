"use client";

import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white w-full">
      <div className="custom-container flex flex-col items-center text-center">
        {/* Titles */}
        <Typography variant="h6" color="primary" className="mb-2" data-aos="fade-up">
          About BM Technica
        </Typography>
        <Typography variant="h2" color="dark" className="mb-12  max-w-full" data-aos="fade-up" data-aos-delay="100">
          Innovating Medical Imaging Through Practical, Reliable, Physician-Focused Technology
        </Typography>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          <div className="w-full relative aspect-[792/600] rounded-2xl overflow-hidden shadow-sm" data-aos="fade-right">
            <Image
              src="/medical/biomedicinos/section23.png"
              alt="About BM Technica 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full relative aspect-[792/600] rounded-2xl overflow-hidden shadow-sm" data-aos="fade-left">
            <Image
              src="/medical/biomedicinos/section21.png"
              alt="About BM Technica 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Description & Button */}
        <div className="max-w-full xl:max-w-[80%] min-[3800px]:max-w-[120rem] flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
          <Typography variant="p" color="dark" className="mb-8 min-[2500px]:mb-12 text-center text-gray-700">
            For more than a decade, BM Technica has developed and supplied diagnostic medical equipment worldwide. Based in Vilnius, Lithuania, the company combines advanced imaging technology with functional, reliable, and easy-to-use designs. Its development approach is shaped by feedback from practicing physicians, helping create practical solutions that support comfortable and efficient clinical workflows.
          </Typography>

          <Button text="Explore Our Solutions" variant="primary" />
        </div>
      </div>
    </section>
  );
}
