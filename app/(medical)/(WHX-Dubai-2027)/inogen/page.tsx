/**
 * Inogen Landing Page Template
 *
 * ARCHITECTURAL REFERENCE FOR NEW PROJECTS:
 * 1. Semantic Layout Structure:
 *    - Top-level <div> wrapper with min-h-screen, overflow-x-hidden, and theme background tokens.
 *    - <Header />: Adaptive scroll header (floating card -> fixed frosted bar).
 *    - <main className="relative flex flex-col">: Logical flow containing all content sections.
 *    - <Footer />: Multi-column responsive footer.
 * 2. Section Patterns & Design Standards:
 *    - Layout constraint: Sections use `.custom-container` with percentage widths (90%-92% on mobile/tablet, 85%-90% on desktop/2K).
 *    - Text measure: Section headers & lead paragraphs apply `w-full max-w-full xl:max-w-[70%] mx-auto` to prevent excessive line length on wide screens.
 *    - Video embedding: Standard 16:9 ratio using Tailwind's `aspect-video` combined with `DynamicVideoPlayer`.
 *    - Responsive typography: Font sizes utilize REM scaling governed by media queries in `globals.css`.
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience360 from "./_components/Experience360";
import Products from "./_components/Products";
import Mobility from "./_components/Mobility";
import WhyInogen from "./_components/WhyInogen";
import Solutions from "./_components/Solutions";
import TechnologyVideo from "./_components/TechnologyVideo";
import HMEBenefits from "./_components/HMEBenefits";
import Footer from "./_components/Footer";

export default function InogenPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section (Mission & Vision) */}
        <About />

        {/* 4. 360° Experience Section */}
        <Experience360 />

        {/* 5. Products Section */}
        <Products />

        {/* 6. Mobility, Comfort & Performance Section */}
        <Mobility />

        {/* 7. Why Inogen Section */}
        <WhyInogen />

        {/* 8. Innovative Portable Oxygen Solutions (e1, e2) */}
        <Solutions />

        {/* 9. Everyday Independence Technology (Video Clip 02) */}
        <TechnologyVideo />

        {/* 10. Benefits For HME Providers */}
        <HMEBenefits />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
