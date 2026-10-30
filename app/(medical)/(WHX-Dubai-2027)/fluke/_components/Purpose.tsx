"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Purpose() {
  return (
    <section
      id="accessories"
      className="relative w-full bg-primary bg-[url('/medical/fluke/bg.webp')] bg-cover bg-[position:78%_center] xl:bg-right bg-no-repeat overflow-hidden"
    >
      {/* Darkens the accessories behind the text where they overlap (phones/tablets) */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30 xl:hidden pointer-events-none" />

      <div className="relative custom-container grid grid-cols-1 xl:grid-cols-12 items-center min-h-[300px] sm:min-h-[340px] xl:min-h-[408px] 2xl:min-h-[420px] min-[2500px]:min-h-[620px] min-[3800px]:min-h-[840px] py-12 sm:py-16 min-[2500px]:py-24 min-[3800px]:py-32">
        <div className="xl:col-span-6 flex flex-col items-start" data-aos="fade-right">
          <Typography variant="h2" color="white" className="mb-4 sm:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            In need of accessories?
          </Typography>
          <Typography variant="p" color="white" className="sm:max-w-[85%] xl:max-w-none">
            Get essential accessories like adapters, cables, and probes to enhance the performance and compatibility
            of your Fluke Biomedical medical testing equipment.
          </Typography>
          <div className="mt-6 sm:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16">
            <Button text="View All Accessories" variant="primary" href="#products" showIcon={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
