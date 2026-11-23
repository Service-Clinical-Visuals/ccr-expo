/**
 * PAJUNK Landing Page
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Semantic Layout Structure:
 *    - Top-level wrapper with min-h-screen, overflow-x-hidden, and theme background tokens.
 *    - <Header />: Dark pine green bar with responsive drawer navigation.
 *    - <main className="relative flex flex-col">: Logical flow containing all content sections.
 *    - <Footer />: Multi-tier responsive footer.
 * 2. Master Responsive Standards:
 *    - Layout constraint: Sections use `.custom-container` with standardized percentage widths.
 *    - Text measure: Section headers & lead paragraphs apply `w-full max-w-full xl:max-w-[70%] mx-auto`.
 *    - Video embedding: Standard 16:9 ratio using Tailwind's `aspect-video` combined with `DynamicVideoPlayer`.
 *    - Fluid REM scaling across all 8 standardized viewports.
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Instruments360 from "./_components/Instruments360";
import Products from "./_components/Products";
import ErgoSys from "./_components/ErgoSys";
import Education from "./_components/Education";
import SurgicalControl from "./_components/SurgicalControl";
import News from "./_components/News";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function PajunkPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section (Empowering Healthcare) */}
        <About />

        {/* 4. Instruments & 360° Video Section */}
        <Instruments360 />

        {/* 5. Product Portfolio Carousel (p1-p5) */}
        <Products />

        {/* 6. ErgoSys & Video Section 1 */}
        <ErgoSys />

        {/* 7. Education & Clinical Partnership (c1-c3) */}
        <Education />

        {/* 8. Engineered for Surgical Control (Video Clip 02) */}
        <SurgicalControl />

        {/* 9. Latest Insights & Updates (l1-l4) */}
        <News />

        {/* 10. Stay Updated with PAJUNK Newsletter */}
        <Newsletter />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
