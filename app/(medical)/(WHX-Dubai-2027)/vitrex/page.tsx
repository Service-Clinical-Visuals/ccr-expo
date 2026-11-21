/**
 * Vitrex Landing Page Template
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Semantic Layout Structure:
 *    - Top-level <div> wrapper with min-h-screen, overflow-x-hidden, and theme background tokens.
 *    - <Header />: Adaptive scroll header with brand logo, nav links, and search box.
 *    - <main className="relative flex flex-col">: Logical flow containing all content sections.
 *    - <Footer />: Multi-column responsive brand footer.
 * 2. Section Sequence:
 *    - 1. Header Navigation
 *    - 2. Hero Section (Background Video)
 *    - 3. About Section (Mission, Vision & Overview)
 *    - 4. 360° Video Section (Advanced Surgical Mesh)
 *    - 5. Products Carousel Section (Filter Tabs & Swiper)
 *    - 6. Composite Mesh Technology Section (01 Video)
 *    - 7. Vision & Values Section (Dual Directive Cards)
 *    - 8. Surgical Mesh Innovation Section (02 Video & Benefits)
 *    - 9. Latest News & Insights Section (Asymmetrical Grid with n1, n2, n3)
 *    - 10. Footer Section
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import SurgicalMeshVideo from "./_components/SurgicalMeshVideo";
import Products from "./_components/Products";
import CompositeMeshVideo from "./_components/CompositeMeshVideo";
import VisionValues from "./_components/VisionValues";
import SurgicalMeshInnovation from "./_components/SurgicalMeshInnovation";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function VitrexPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Advanced Surgical Mesh 360° Video Section */}
        <SurgicalMeshVideo />

        {/* 5. Products Section */}
        <Products />

        {/* 6. Composite Mesh Technology Section (01 Video) */}
        <CompositeMeshVideo />

        {/* 7. Vision & Values Section */}
        <VisionValues />

        {/* 8. Surgical Mesh Innovation Section (02 Video) */}
        <SurgicalMeshInnovation />

        {/* 9. Latest News & Insights Section */}
        <News />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
