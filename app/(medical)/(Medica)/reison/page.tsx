/**
 * Reison Landing Page
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Semantic Layout Structure:
 *    - Top-level container with theme background tokens and min-h-screen.
 *    - <Header />: Adaptive floating / sticky frosted navbar.
 *    - <main>: Logical flow containing all landing sections.
 *    - Sections:
 *      1. Hero
 *      2. About (Premium Operating Room Accessories)
 *      3. Experience360 (Explore Every Angle of Arm & Hand Surgery Table)
 *      4. Applications (Our Applications Swiper)
 *      5. Sustainability (Sustainability At Reison Medical)
 *      6. PrecisionDesign (Designed For Precision & Patient Support)
 *      7. ProductCategories (Our Product Categories – The Best OR Accessories On The Market!)
 *      8. ProductFeatures (Reliable Design & Practical Functionality)
 *      9. NinexGroup (Part of Ninex Group)
 *      10. Footer (Resion global distribution & contact info)
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience360 from "./_components/Experience360";
import Applications from "./_components/Applications";
import Sustainability from "./_components/Sustainability";
import PrecisionDesign from "./_components/PrecisionDesign";
import ProductCategories from "./_components/ProductCategories";
import ProductFeatures from "./_components/ProductFeatures";
import NinexGroup from "./_components/NinexGroup";
import Footer from "./_components/Footer";

export default function ReisonPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col w-full">
        {/* 2. Hero Section - NO color overlay */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. 360 Experience Section */}
        <Experience360 />

        {/* 5. Our Applications Carousel */}
        <Applications />

        {/* 6. Sustainability Section */}
        <Sustainability />

        {/* 7. Designed for Precision & Patient Support */}
        <PrecisionDesign />

        {/* 8. Our Product Categories Swiper */}
        <ProductCategories />

        {/* 9. Reliable Design & Practical Functionality */}
        <ProductFeatures />

        {/* 10. Part of Ninex Group */}
        <NinexGroup />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
